/**
 * npm run rescore — recompute everything that can be derived from data already
 * stored on this machine. FREE: no Apify credits, no Voyage tokens, no network.
 *
 *   npm run rescore
 *   npm run rescore -- --help
 *
 * What it recomputes, in order:
 *   1. fit          jobs.fit          cosine(your profile, the JD) mapped to 0-100
 *   2. duplicate_of jobs.duplicate_of the same role reposted collapses to one row
 *   3. archetype    jobs.archetype    clusters of near-identical JDs -> resume variants
 *   4. warmth       people.warmth     how close a person's background is to yours
 *   5. why_warm     people.why_warm   the concrete overlaps behind that number
 *
 * All five need embeddings, and embeddings need VOYAGE_API_KEY once (npm run
 * embed). If nothing has been embedded yet this script says so and changes
 * nothing. It never invents a number: no vector means the column stays empty,
 * and the dashboard prints "—" rather than a zero.
 *
 * This file is also the small shared library the other free scripts reuse
 * (readProfile, isRealText, recompute), so the same parsing never gets written
 * twice.
 */
import "dotenv/config";
import path from "node:path";
import fs from "node:fs";
import { db, getEmbedding, allEmbeddings, setMeta } from "../src/db";
import { cosine } from "../src/voyage";
import {
  scoreJobs,
  cluster,
  dedupe,
  affinity,
  whyWarm,
  PROFILE_ID,
  type UserProfileFacts,
  type PersonFacts,
} from "../src/fit";
import { main, type CommandSpec } from "../src/args";
import { contextLibrary, labRoot, parse } from "./_lib";

/** The job-search-os folder that contains job-lab. */
export const ROOT = path.resolve(labRoot(), "..");
/** Where the user's markdown context library lives. */
export const CONTEXT_DIR = contextLibrary();

export const CLUSTER_THRESHOLD = Number(process.env.CLUSTER_THRESHOLD ?? 0.82);
export const DUPLICATE_THRESHOLD = Number(process.env.DUPLICATE_THRESHOLD ?? 0.95);

export const EXPERIENCE_FILE = (): string =>
  path.join(contextLibrary(), "experience-library.md");

// ---------------------------------------------------------------------------
// Reading the context library. Everything about "you" comes from these files
// and nothing else. A template placeholder is not experience.
// ---------------------------------------------------------------------------

/** `[FILL IN]`, `[e.g., ...]`, `[PASTE YOUR RESUME HERE]` and friends are empty. */
export function stripPlaceholders(s: string): string {
  return s.replace(/\[[^\]\n]*\]/g, " ");
}

/**
 * Is there anything here a human wrote? Bracketed template text is removed
 * first, then a leading "**Label:**" so that a filled label with an empty value
 * ("- **Referral received:** [yes/no]") reads as empty, which is what it is.
 */
export function isRealText(s: string | null | undefined): boolean {
  if (!s) return false;
  const bare = stripPlaceholders(s)
    .replace(/^[\s>*\-#\d.]+/, "")
    .replace(/\*\*/g, "")
    .replace(/^[A-Za-z /?"'’()-]{0,60}:\s*/, "")
    .trim();
  if (!bare || bare === "..." || bare === "…") return false;
  return /[A-Za-z0-9]{3}/.test(bare) && bare.length >= 4;
}

export function readMd(file: string): string | null {
  try {
    return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : null;
  } catch {
    return null;
  }
}

export function slugify(s: string): string {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

export function titleCase(s: string): string {
  return String(s)
    .split(/[-\s]+/)
    .filter(Boolean)
    .map((w) => (w.length <= 2 ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1)))
    .join(" ");
}

export type UserProfile = UserProfileFacts & {
  text: string;
  chunks: string[];
  employers: string[];
  schools: string[];
  cities: string[];
  titles: string[];
};

const EMPTY_PROFILE: UserProfile = {
  text: "",
  chunks: [],
  employers: [],
  schools: [],
  cities: [],
  titles: [],
};

const uniq = (xs: string[]): string[] => {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const x of xs) {
    const k = x.trim().toLowerCase();
    if (!k || seen.has(k)) continue;
    seen.add(k);
    out.push(x.trim());
  }
  return out;
};

/**
 * Lines that are the template talking to the user, not the user talking about
 * their work. Embedding "Claude fills this section" would drag every fit score
 * toward the same meaningless middle.
 */
const INSTRUCTION_MARKERS = [
  "claude fills",
  "claude helps",
  "claude will",
  "paste your",
  "single source of truth",
  "how to fill",
  "skip to",
  "if you are not targeting",
  "continue to",
  "aim for 10-15",
  "use dictation",
  "answer follow-up questions",
  "review and add anything missing",
];

const STOP_ORG = new Set([
  "the", "a", "an", "scale", "work", "company", "companies", "least", "most",
  "product", "products", "team", "teams", "users", "user", "example", "e.g",
  "senior", "led", "built", "shipped", "increased", "defined", "deep",
]);

function matchAll(text: string, re: RegExp): string[] {
  const out: string[] = [];
  for (const m of text.matchAll(re)) if (m[1]) out.push(m[1].trim());
  return out;
}

/**
 * Read experience-library.md into embeddable chunks plus the plain facts
 * whyWarm() needs (employers, schools, cities, titles). The facts are read off
 * the page, never inferred: if the file does not say where you worked, the
 * result is an empty list and no warm-path reason gets claimed.
 */
export function readProfile(file = EXPERIENCE_FILE()): UserProfile {
  const md = readMd(file);
  if (!md) return { ...EMPTY_PROFILE };

  const chunks: string[] = [];
  let inFence = false;
  for (const raw of md.split("\n")) {
    const line = raw.trim();
    if (line.startsWith("```")) {
      inFence = !inFence;
      continue;
    }
    if (inFence || !line || line.startsWith("#") || line.startsWith("|")) continue;
    const low = line.toLowerCase();
    if (INSTRUCTION_MARKERS.some((m) => low.includes(m))) continue;
    if (!isRealText(line)) continue;
    const clean = stripPlaceholders(line)
      .replace(/^[-*+]\s*/, "")
      .replace(/^\d+\.\s*/, "")
      .replace(/\*\*/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (clean.length >= 12) chunks.push(clean);
  }

  const text = chunks.join("\n");
  const employers = uniq([
    ...matchAll(
      text,
      /\b(?:at|with|for|joined)\s+([A-Z][A-Za-z0-9&.'-]*(?:\s+[A-Z][A-Za-z0-9&.'-]*){0,2})/g,
    ),
    ...matchAll(text, /^([A-Z][A-Za-z0-9&.'-]*(?:\s+[A-Z][A-Za-z0-9&.'-]*){0,2})\s*[—–|]/gm),
  ]).filter((e) => e.length > 2 && !STOP_ORG.has(e.toLowerCase()));

  const schools = uniq([
    ...matchAll(
      text,
      /\b([A-Z][A-Za-z.'-]*(?:\s+[A-Za-z.'-]+){0,3}\s+(?:University|College|Institute|Business School))\b/g,
    ),
    ...matchAll(text, /\b(University of [A-Z][A-Za-z]+(?:\s+[A-Z][A-Za-z]+)?)\b/g),
  ]);

  const cities = uniq(
    matchAll(
      text,
      /\b([A-Z][a-z]+(?:\s[A-Z][a-z]+)?),\s?(?:[A-Z]{2}\b|California|New York|Washington|Texas|Massachusetts)/g,
    ),
  );

  const titles = uniq(
    matchAll(
      text,
      /\b((?:Senior |Sr\.? |Staff |Principal |Lead |Group |Associate |Director of |Head of )?(?:Product Manager|Software Engineer|Engineering Manager|Product Designer|Data Scientist|Program Manager|Consultant|Analyst))\b/gi,
    ),
  );

  return { text, chunks, employers, schools, cities, titles };
}

/**
 * Employers and schools for one scraped person, pulled out of the actor payload
 * we already stored. Only present after `npm run enrich`; before that the list
 * is empty and whyWarm() simply has less to work with.
 */
export function personFacts(row: {
  name: string | null;
  headline: string | null;
  title: string | null;
  company: string | null;
  location: string | null;
  last_post_text?: string | null;
  last_post_at?: string | null;
  raw?: string | null;
}): PersonFacts {
  const facts: PersonFacts = {
    name: row.name,
    headline: row.headline,
    title: row.title,
    company: row.company,
    location: row.location,
    last_post_text: row.last_post_text ?? null,
    last_post_at: row.last_post_at ?? null,
    employers: [],
    schools: [],
  };
  if (!row.raw) return facts;
  try {
    const raw = JSON.parse(row.raw) as Record<string, any>;
    const exp = raw.experience ?? raw.experiences ?? raw.positions ?? [];
    if (Array.isArray(exp)) {
      facts.employers = uniq(
        exp
          .map((e: any) => e?.companyName ?? e?.company ?? e?.organisation ?? e?.organization ?? null)
          .filter((s: unknown): s is string => typeof s === "string"),
      );
    }
    const edu = raw.education ?? raw.educations ?? raw.schools ?? [];
    if (Array.isArray(edu)) {
      facts.schools = uniq(
        edu
          .map((e: any) => e?.schoolName ?? e?.school ?? e?.title ?? e?.institution ?? null)
          .filter((s: unknown): s is string => typeof s === "string"),
      );
    }
  } catch {
    // A payload we cannot parse is simply a payload with no extra facts in it.
  }
  return facts;
}

// ---------------------------------------------------------------------------
// The recompute itself.
// ---------------------------------------------------------------------------

export type RecomputeResult = {
  jobsScored: number;
  duplicates: number;
  archetypes: number;
  peopleScored: number;
  /** Set when nothing could be recomputed, with the sentence to show the user. */
  skipped: string | null;
};

export async function recompute(opts: { quiet?: boolean } = {}): Promise<RecomputeResult> {
  const say = (m: string) => {
    if (!opts.quiet) console.log(m);
  };
  const conn = db();
  const result: RecomputeResult = {
    jobsScored: 0,
    duplicates: 0,
    archetypes: 0,
    peopleScored: 0,
    skipped: null,
  };

  const profileVec = getEmbedding("profile", PROFILE_ID);
  if (!profileVec) {
    result.skipped =
      "Nothing to recompute yet: your experience library has never been embedded. " +
      "Add VOYAGE_API_KEY to job-lab/.env and run this exact line:  npm run embed";
    return result;
  }

  const jobVecs = new Map(allEmbeddings("job").map((e) => [e.id, e.vec]));
  const jobRows = conn.prepare(`SELECT id FROM jobs`).all() as { id: string }[];
  const jobs = jobRows
    .filter((j) => jobVecs.has(j.id))
    .map((j) => ({ id: j.id, vec: jobVecs.get(j.id)! }));

  // ---- 1. fit -------------------------------------------------------------
  if (jobs.length) {
    const scored = scoreJobs(profileVec, jobs);
    const setFit = conn.prepare(`UPDATE jobs SET fit = ? WHERE id = ?`);
    conn.transaction(() => {
      for (const s of scored) {
        if (!Number.isFinite(s.fit)) continue;
        setFit.run(Math.max(0, Math.min(100, Math.round(s.fit))), s.id);
      }
    })();
    result.jobsScored = scored.length;
    say(`  fit: ${scored.length} job(s) scored against your experience`);
  } else {
    say("  fit: no embedded jobs yet — run npm run find-jobs, then npm run embed");
  }

  // ---- 2. duplicates ------------------------------------------------------
  if (jobs.length > 1) {
    const dupes = dedupe(jobs, DUPLICATE_THRESHOLD);
    const clear = conn.prepare(`UPDATE jobs SET duplicate_of = NULL`);
    const mark = conn.prepare(`UPDATE jobs SET duplicate_of = ? WHERE id = ?`);
    conn.transaction(() => {
      // Cleared first: a row that stopped being a duplicate must stop being
      // hidden, otherwise a stale run can quietly bury a live job.
      clear.run();
      for (const d of dupes) if (d.duplicate_of !== d.id) mark.run(d.duplicate_of, d.id);
    })();
    result.duplicates = dupes.length;
    if (dupes.length) say(`  duplicates: ${dupes.length} repost(s) collapsed`);
  }

  // ---- 3. archetypes ------------------------------------------------------
  const live = jobs.filter((j) => !dupIds(conn).has(j.id));
  if (live.length > 1) {
    const clusters = cluster(live, CLUSTER_THRESHOLD);
    const upd = conn.prepare(`UPDATE jobs SET archetype = ? WHERE id = ?`);
    const labels: Record<string, string> = {};
    conn.transaction(() => {
      conn.prepare(`UPDATE jobs SET archetype = NULL`).run();
      for (const c of clusters) {
        labels[c.key] = c.label ?? titleCase(c.key);
        for (const id of c.ids) upd.run(c.key, id);
      }
    })();
    setMeta("archetype_labels", JSON.stringify(labels));
    result.archetypes = clusters.length;
    if (clusters.length)
      say(
        `  archetypes: ${clusters.length} cluster(s) — that is how many resume ` +
          `variants you need, not one per application`,
      );
  }

  // ---- 4 + 5. warmth and why_warm ----------------------------------------
  const personVecs = new Map(allEmbeddings("person").map((e) => [e.id, e.vec]));
  if (personVecs.size) {
    const profile = readProfile();
    const people = conn
      .prepare(
        `SELECT id, name, headline, title, company, location, last_post_text,
                last_post_at, raw
           FROM people`,
      )
      .all() as any[];
    const upd = conn.prepare(`UPDATE people SET warmth = ?, why_warm = ? WHERE id = ?`);
    const rows: [number, string | null, string][] = [];
    for (const p of people) {
      const vec = personVecs.get(p.id);
      if (!vec) continue;
      const warmth = affinity(profileVec, vec);
      const reasons = whyWarm(profile, personFacts(p)).filter(
        (r) => typeof r === "string" && r.trim(),
      );
      rows.push([warmth, reasons.length ? JSON.stringify(reasons) : null, p.id]);
    }
    conn.transaction(() => {
      for (const r of rows) upd.run(r[0], r[1], r[2]);
    })();
    result.peopleScored = rows.length;
    say(`  warmth: ${rows.length} person/people ranked against your profile`);
  }

  // Anything the cosine could not touch stays honestly empty.
  setMeta("last_rescore", new Date().toISOString());
  return result;
}

let _dupCache: { at: number; ids: Set<string> } | null = null;
function dupIds(conn: ReturnType<typeof db>): Set<string> {
  if (_dupCache && Date.now() - _dupCache.at < 500) return _dupCache.ids;
  const rows = conn
    .prepare(`SELECT id FROM jobs WHERE duplicate_of IS NOT NULL`)
    .all() as { id: string }[];
  _dupCache = { at: Date.now(), ids: new Set(rows.map((r) => r.id)) };
  return _dupCache.ids;
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

const SPEC: CommandSpec = {
  command: "npm run rescore",
  summary:
    "Recompute fit scores, duplicates, archetypes and referral warmth from data " +
    "already on this machine. Free: no scraping, no API calls, no network.",
  flags: [],
  examples: ["npm run rescore"],
  notes: [
    "Run this after editing context-library/experience-library.md only if you have",
    "also re-run npm run embed — fit is measured against the embedded version of",
    "your experience, and only npm run embed refreshes that.",
    "Nothing is invented: a job with no embedding keeps an empty fit score and the",
    'dashboard prints "—" for it.',
  ],
};

if (require.main === module) {
  parse(SPEC);
  void main(async () => {
    console.log("Recomputing from local data (free)...\n");
    const r = await recompute();
    if (r.skipped) {
      console.log(r.skipped);
      return;
    }
    console.log(
      `\nDone. ${r.jobsScored} job(s) scored, ${r.duplicates} duplicate(s), ` +
        `${r.archetypes} archetype(s), ${r.peopleScored} person/people ranked.`,
    );
    console.log("Next:  npm run export      writes the dashboard and your markdown digests");
  });
}
