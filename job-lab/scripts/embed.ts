/**
 * npm run embed — turn your experience library, your job feed and the people
 * who could refer you into vectors, then rank all of it against you.
 *
 *   npm run embed
 *   npm run embed -- --force            re-embed everything from scratch
 *   npm run embed -- --limit 200        embed at most 200 new jobs this run
 *   npm run embed -- --pace 21000       21s between calls, for the free Voyage tier
 *   npm run embed -- --no-matches       skip the matches/gaps pass (fewer tokens)
 *   npm run embed -- --help
 *
 * COSTS VOYAGE TOKENS, and nothing else in job-lab does. A 300-job feed is
 * roughly 150K tokens, well inside Voyage's free grant. rescore, export and
 * query stay free forever.
 *
 * OPTIONAL. Without VOYAGE_API_KEY this script stops with one sentence and the
 * rest of the Job Search OS keeps working: paste a job description into Claude
 * and run /quick-start or /job-fit-scorer exactly as before. Fit scores only
 * sort a long list faster; they were never a requirement.
 *
 * What gets filled in:
 *   jobs.fit           0-100, how close the JD sits to your real experience
 *   jobs.duplicate_of  the same role reposted collapses into one row
 *   jobs.archetype     clusters of similar JDs -> how many resume variants you need
 *   people.warmth      0-1, how close a person's background is to yours
 *   people.why_warm    the concrete overlaps (employer, school, city) behind it
 *   matches / gaps     per job: the JD phrases nearest to and furthest from you
 *
 * Absent stays absent. A row Voyage could not embed keeps an empty score, and
 * the dashboard prints "—" for it rather than a zero.
 */
import "dotenv/config";
import { db, putEmbedding, getEmbedding, setMeta, getMeta } from "../src/db";
import {
  embedTexts,
  centroid,
  toF32,
  hasVoyage,
  TEXT_BATCH,
  TEXT_MODEL,
  DIM,
} from "../src/voyage";
import { matchesAndGaps, PROFILE_ID } from "../src/fit";
import { main, type CommandSpec } from "../src/args";
import { parse, plural, problem } from "./_lib";
import { EXPERIENCE_FILE, readProfile, recompute } from "./rescore";

const SPEC: CommandSpec = {
  command: "npm run embed",
  summary:
    "Score every job and every person against your real experience, using Voyage " +
    "embeddings. Costs a few cents of Voyage tokens. Nothing is sent to anyone.",
  flags: [
    { name: "force", type: "boolean", desc: "throw away every stored vector and start again" },
    {
      name: "limit",
      type: "number",
      desc: "most new jobs to embed in this run",
      placeholder: "<number>",
      default: 1000,
    },
    {
      name: "pace",
      type: "number",
      desc: "milliseconds to wait between calls (use 21000 on the free Voyage tier)",
      placeholder: "<ms>",
      default: 0,
    },
    {
      name: "matches-limit",
      type: "number",
      desc: "how many top jobs get the matches/gaps pass",
      placeholder: "<number>",
      default: 40,
    },
    { name: "no-matches", type: "boolean", desc: "skip the matches/gaps pass entirely" },
    { name: "yes", type: "boolean", desc: "do not pause before the run" },
  ],
  examples: [
    "npm run embed",
    "npm run embed -- --pace 21000",
    "npm run embed -- --force",
  ],
  notes: [
    "Needs one line in job-lab/.env:   VOYAGE_API_KEY=pa-...",
    "Get one free, no card, at voyageai.com. Without it this script does nothing",
    "and says so — every skill in the Job Search OS still works by pasting a JD.",
  ],
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Notice when the experience library changed, so --force is rarely needed. */
function fingerprint(s: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return `${(h >>> 0).toString(16)}:${s.length}`;
}

type Row = { id: string; text: string };

/** Embed in batches, saving as we go, so a stopped run is never wasted work. */
async function embedRows(
  label: string,
  rows: Row[],
  ownerType: "job" | "person",
  paceMs: number,
): Promise<number> {
  if (!rows.length) {
    console.log(`  ${label}: nothing new to embed`);
    return 0;
  }
  console.log(`  ${label}: embedding ${plural(rows.length, "row")}...`);
  let saved = 0;
  for (let i = 0; i < rows.length; i += TEXT_BATCH) {
    const batch = rows.slice(i, i + TEXT_BATCH);
    const vecs = await embedTexts(batch.map((r) => r.text));
    db().transaction(() => {
      batch.forEach((r, j) => {
        const v = vecs[j];
        if (!v || v.length !== DIM) return; // Absent beats wrong.
        putEmbedding(ownerType, r.id, TEXT_MODEL, toF32(v));
        saved++;
      });
    })();
    console.log(`    ${Math.min(i + TEXT_BATCH, rows.length)}/${rows.length}`);
    if (paceMs > 0 && i + TEXT_BATCH < rows.length) await sleep(paceMs);
  }
  return saved;
}

async function buildProfile(force: boolean, paceMs: number): Promise<boolean> {
  const profile = readProfile();
  if (!profile.chunks.length) {
    console.log(
      `Your experience library has nothing in it yet:\n` +
        `  ${EXPERIENCE_FILE()}\n\n` +
        `Fill it first. Ask Claude, in these words:\n` +
        `  Help me build my experience library\n\n` +
        `Everything here is measured against that file, so an empty one can only ` +
        `produce meaningless scores. Nothing was embedded and nothing was charged.`,
    );
    return false;
  }

  const sig = fingerprint(profile.chunks.join("\n"));
  const have = getEmbedding("profile", PROFILE_ID);
  if (!force && have && getMeta("profile_hash") === sig) {
    console.log(`  profile: unchanged (${plural(profile.chunks.length, "entry", "entries")})`);
    return true;
  }

  console.log(
    `  profile: embedding ${plural(profile.chunks.length, "entry", "entries")} from your experience library...`,
  );
  const vecs: number[][] = [];
  for (let i = 0; i < profile.chunks.length; i += TEXT_BATCH) {
    vecs.push(...(await embedTexts(profile.chunks.slice(i, i + TEXT_BATCH))));
    if (paceMs > 0 && i + TEXT_BATCH < profile.chunks.length) await sleep(paceMs);
  }
  const usable = vecs.filter((v) => v && v.length === DIM);
  const mean = centroid(usable);
  if (!mean) {
    throw problem(
      "Voyage returned nothing usable for your experience library, so nothing was saved.",
      "Run it again:",
      "    npm run embed",
      "If it happens twice, check the VOYAGE_API_KEY line in job-lab/.env.",
    );
  }

  db().transaction(() => {
    // The centroid is "you". The individual chunks stay so that matches and
    // gaps can point at the specific line a JD phrase is near or far from.
    putEmbedding("profile", PROFILE_ID, TEXT_MODEL, mean);
    usable.forEach((v, i) => putEmbedding("profile", `chunk:${i}`, TEXT_MODEL, toF32(v)));
  })();
  setMeta("profile_hash", sig);
  setMeta("profile_chunks", JSON.stringify(profile.chunks));
  setMeta("profile_embedded_at", new Date().toISOString());
  console.log(`  profile: saved (${plural(usable.length, "entry", "entries")})`);
  return true;
}

function jobText(j: {
  company: string;
  role: string;
  location: string | null;
  seniority: string | null;
  description: string | null;
}): string {
  return [
    `${j.role} at ${j.company}`,
    j.seniority ? `Seniority: ${j.seniority}` : "",
    j.location ? `Location: ${j.location}` : "",
    (j.description ?? "").slice(0, 7000),
  ]
    .filter(Boolean)
    .join("\n");
}

function personText(p: {
  name: string | null;
  headline: string | null;
  title: string | null;
  company: string | null;
  location: string | null;
  last_post_text: string | null;
}): string {
  return [
    p.name ?? "",
    p.title && p.company ? `${p.title} at ${p.company}` : (p.title ?? p.company ?? ""),
    p.headline ?? "",
    p.location ?? "",
    (p.last_post_text ?? "").slice(0, 1200),
  ]
    .filter((s) => s && s.trim())
    .join("\n");
}

function storedChunks(): string[] {
  try {
    const parsed = JSON.parse(getMeta("profile_chunks") ?? "[]");
    return Array.isArray(parsed) ? parsed.filter((c) => typeof c === "string") : [];
  } catch {
    return [];
  }
}

/**
 * Matches and gaps: the three JD phrases closest to something you have actually
 * done, and the two furthest from anything in your library. The gaps are the
 * addressing-weaknesses list, derived rather than self-reported.
 *
 * Stored in `meta` under "mg:<job id>" because the jobs table has no column for
 * them, and computed once per job — a job description does not change.
 */
async function fillMatchesAndGaps(limit: number, paceMs: number): Promise<number> {
  const chunks = storedChunks();
  if (!chunks.length) return 0;

  const rows = db()
    .prepare(
      `SELECT id, company, role, location, seniority, description
         FROM jobs
        WHERE duplicate_of IS NULL
          AND status != 'hidden'
          AND description IS NOT NULL
          AND LENGTH(TRIM(description)) > 120
        ORDER BY fit DESC, last_seen DESC
        LIMIT ?`,
    )
    .all(limit) as any[];

  let done = 0;
  let failures = 0;
  for (const j of rows) {
    if (getMeta(`mg:${j.id}`)) continue;
    try {
      const res = await matchesAndGaps(jobText(j), chunks);
      const matches = clean(res?.matches);
      const gaps = clean(res?.gaps);
      if (!matches.length && !gaps.length) continue;
      setMeta(`mg:${j.id}`, JSON.stringify({ matches, gaps, at: new Date().toISOString() }));
      done++;
    } catch (e) {
      failures++;
      if (failures === 1) {
        console.log(
          `    matches/gaps unavailable this run (${e instanceof Error ? e.message : String(e)}).`,
        );
        console.log("    Fit scores are unaffected. Re-run npm run embed later to fill them in.");
      }
      if (failures >= 3) break;
    }
    if (paceMs > 0) await sleep(paceMs);
  }
  return done;
}

function clean(v: unknown): string[] {
  if (!Array.isArray(v)) return [];
  return v
    .map((x) => (typeof x === "string" ? x : ""))
    .map((s) => s.replace(/\s+/g, " ").trim())
    .filter((s) => s.length > 2)
    .slice(0, 5);
}

if (require.main === module) {
  const o = parse(SPEC);

  void main(async () => {
    if (!hasVoyage()) {
      console.log("");
      console.log(
        "  Skipping: VOYAGE_API_KEY is not in job-lab/.env, so fit scores, duplicate",
      );
      console.log(
        '  detection and referral ranking stay empty (the dashboard shows "—" for them).',
      );
      console.log("");
      console.log("  To turn them on, add this one line to job-lab/.env:");
      console.log("      VOYAGE_API_KEY=your-key-here");
      console.log("  Keys are free and need no card: https://www.voyageai.com");
      console.log("");
      console.log("  Or skip it entirely. Paste any job description into Claude and run:");
      console.log("      /quick-start");
      console.log("");
      return;
    }

    const force = o.bool("force");
    const paceMs = Math.max(0, o.num("pace", 0));
    const jobLimit = Math.max(1, o.num("limit", 1000));
    const conn = db();

    console.log("Embedding via Voyage — the only step in job-lab that spends Voyage tokens.");
    if (paceMs) console.log(`  pacing: ${paceMs}ms between calls`);

    if (force) {
      conn.exec(`DELETE FROM embeddings`);
      console.log("  --force: cleared every stored vector, starting again");
    }

    // 1. You. Everything else is measured against this.
    if (!(await buildProfile(force, paceMs))) return;

    // 2. Jobs with no vector yet.
    const jobRows = conn
      .prepare(
        `SELECT j.id, j.company, j.role, j.location, j.seniority, j.description
           FROM jobs j
          WHERE NOT EXISTS (
                  SELECT 1 FROM embeddings e
                   WHERE e.owner_type = 'job' AND e.owner_id = j.id)
          ORDER BY j.last_seen DESC
          LIMIT ?`,
      )
      .all(jobLimit) as any[];
    await embedRows("jobs", jobRows.map((j) => ({ id: j.id, text: jobText(j) })), "job", paceMs);

    // 3. People with no vector yet.
    const peopleRows = conn
      .prepare(
        `SELECT p.id, p.name, p.headline, p.title, p.company, p.location, p.last_post_text
           FROM people p
          WHERE NOT EXISTS (
                  SELECT 1 FROM embeddings e
                   WHERE e.owner_type = 'person' AND e.owner_id = p.id)`,
      )
      .all() as any[];
    await embedRows(
      "people",
      peopleRows
        .map((p) => ({ id: p.id, text: personText(p) }))
        .filter((r) => r.text.trim().length > 10),
      "person",
      paceMs,
    );

    // 4. Everything those vectors make derivable.
    console.log("\nRanking against your experience...");
    const r = await recompute();
    if (r.skipped) console.log(`  ${r.skipped}`);

    // 5. Matches and gaps for the jobs you are most likely to act on.
    if (!o.bool("no-matches")) {
      const n = await fillMatchesAndGaps(Math.max(1, o.num("matches-limit", 40)), paceMs);
      if (n) console.log(`  matches/gaps: computed for ${plural(n, "job")}`);
    }

    setMeta("last_embed", new Date().toISOString());

    const scored = (
      conn.prepare(`SELECT COUNT(*) AS n FROM jobs WHERE fit IS NOT NULL`).get() as { n: number }
    ).n;
    const warm = (
      conn.prepare(`SELECT COUNT(*) AS n FROM people WHERE warmth IS NOT NULL`).get() as {
        n: number;
      }
    ).n;

    console.log("");
    console.log(`Done. ${plural(scored, "job")} scored, ${plural(warm, "person", "people")} ranked.`);
    console.log("");
    console.log("Next, in this order:");
    console.log("  1. npm run export                  writes the dashboard and the markdown digests");
    console.log("  2. npm run query -- --min-fit 80   see the best matches right here");
    console.log("  3. Ask Claude:  /find-jobs         it reads the digest and scores the top roles properly");
  });
}
