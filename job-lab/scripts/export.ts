/**
 * npm run export — the integration point. FREE: reads only what is already on
 * this machine, calls nothing, sends nothing.
 *
 * It writes three files:
 *   ../dashboard/data.json              what dashboard/index.html renders
 *   ../context-library/job-feed.md      the same job feed as readable markdown
 *   ../context-library/referral-paths.md the same referral graph as readable markdown
 *
 * The two markdown files exist so the dashboard stays optional. A user who
 * never opens a browser loses nothing: they read the digest, or ask Claude,
 * and every number is identical because both come from this one script.
 *
 *   npm run export
 *   npm run export -- --limit 300      how many jobs to include (default 200)
 *   npm run export -- --out /tmp       write somewhere else
 *   npm run export -- --help
 *
 * WHAT THIS WILL NOT DO: invent a row. Your markdown context library is full of
 * template placeholders until you fill it in — "[FILL IN]", "[Company Name]",
 * "[e.g., ...]". Those count as empty. An empty section produces an empty list
 * plus a health flag naming the command that fills it, never a fake entry.
 */
import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { db, getMeta, setMeta } from "../src/db";
import { args } from "../src/args";
import {
  ROOT,
  CONTEXT_DIR,
  readMd,
  isRealText,
  stripPlaceholders,
  slugify,
  titleCase,
} from "./rescore";

const HELP = `
npm run export — build the dashboard file and the two markdown digests from
everything already stored on this machine. Free, offline, read-only.

  npm run export
  npm run export -- --limit 300
  npm run export -- --out /tmp

Writes:
  dashboard/data.json                 open dashboard/index.html to view it
  context-library/job-feed.md         the job feed, readable without the dashboard
  context-library/referral-paths.md   who to ask for a referral, and why

Then either:
  open dashboard/index.html           (macOS)   /   start dashboard\\index.html (Windows)
  or just ask Claude: "read context-library/job-feed.md and tell me what to do today"
`;

const DASH = "—";
const TODAY = new Date().toISOString().slice(0, 10);

// ---------------------------------------------------------------------------
// Markdown helpers. Everything here treats a template placeholder as empty.
// ---------------------------------------------------------------------------

type Section = { heading: string; level: number; body: string[] };

/** Split markdown into sections at `##`/`###` headings, keeping order. */
function sections(md: string, level: number): Section[] {
  const out: Section[] = [];
  const marker = "#".repeat(level) + " ";
  let cur: Section | null = null;
  for (const raw of md.split("\n")) {
    const line = raw.replace(/\s+$/, "");
    if (line.startsWith(marker) && !line.startsWith(marker + "#")) {
      cur = { heading: line.slice(marker.length).trim(), level, body: [] };
      out.push(cur);
    } else if (cur) {
      cur.body.push(line);
    }
  }
  return out;
}

/** `- **Label:** value` -> Map("label" -> "value"). Placeholder values drop out. */
function fields(body: string[]): Map<string, string> {
  const m = new Map<string, string>();
  for (const line of body) {
    const hit = line.match(/^\s*[-*+]?\s*\*\*([^*]+?):?\*\*:?\s*(.*)$/);
    if (!hit) continue;
    const key = hit[1].trim().toLowerCase();
    const value = stripPlaceholders(hit[2]).replace(/\s+/g, " ").trim();
    // A value that is nothing but a template placeholder ("[yes/no, date]") is
    // empty. Short real answers ("Yes") must survive, so this is deliberately
    // laxer than isRealText().
    const real = value.replace(/[\s.,;:·–—-]/g, "") !== "";
    if (!m.has(key)) m.set(key, real ? value : "");
  }
  return m;
}

const yes = (v: string | undefined) => Boolean(v && /^(y|yes|true|done|confirmed)/i.test(v.trim()));

/** Later of two ISO dates. A helper, not an inline compare: TypeScript narrows a
 * loop-assigned `string | null` to `null` at first read and rejects the compare. */
function laterDate(a: string | null, b: string): string {
  return a !== null && a > b ? a : b;
}

function firstDate(s: string | undefined | null): string | null {
  if (!s) return null;
  const iso = s.match(/\b(\d{4}-\d{2}-\d{2})\b/);
  if (iso) return iso[1];
  const us = s.match(/\b(\d{1,2})\/(\d{1,2})\/(\d{4})\b/);
  if (us) return `${us[3]}-${us[1].padStart(2, "0")}-${us[2].padStart(2, "0")}`;
  return null;
}

function firstDateTime(s: string | undefined | null): string | null {
  if (!s) return null;
  const dt = s.match(/\b(\d{4}-\d{2}-\d{2})[T ](\d{2}:\d{2})\b/);
  if (dt) return `${dt[1]}T${dt[2]}`;
  return firstDate(s);
}

function daysBetween(a: string, b: string): number {
  const t1 = Date.parse(a);
  const t2 = Date.parse(b);
  if (!Number.isFinite(t1) || !Number.isFinite(t2)) return 0;
  return Math.max(0, Math.round((t2 - t1) / 86_400_000));
}

const norm = (s: string | null | undefined) =>
  (s ?? "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

// ---------------------------------------------------------------------------
// Context-library parsers
// ---------------------------------------------------------------------------

type HealthState = "rich" | "filled" | "partial" | "empty" | "ok" | "missing";
type Health = { state: HealthState; detail?: string };

function experienceHealth(): Health {
  const md = readMd(path.join(CONTEXT_DIR, "experience-library.md"));
  if (!md) return { state: "empty", detail: "file not found" };
  let entries = 0;
  for (const line of md.split("\n")) {
    const t = line.trim();
    if (!t.startsWith("-") && !t.startsWith("*")) continue;
    if (!isRealText(t)) continue;
    if (t.replace(/^[-*+]\s*/, "").length < 12) continue;
    entries++;
  }
  if (entries === 0)
    return { state: "empty", detail: 'ask Claude: "Help me build my experience library"' };
  if (entries < 8) return { state: "partial", detail: `${entries} entries` };
  return { state: "rich", detail: `${entries} entries` };
}

function careerPlan(): { health: Health; targetRole: string | null; dream: string | null } {
  const md = readMd(path.join(CONTEXT_DIR, "career-plan.md"));
  if (!md)
    return {
      health: { state: "empty", detail: "file not found" },
      targetRole: null,
      dream: null,
    };
  const secs = sections(md, 2);
  const get = (name: string) =>
    secs.find((s) => norm(s.heading).includes(norm(name)))?.body.filter((l) => isRealText(l)) ?? [];

  const fn = get("Function / Role Type");
  const industry = get("Industry Preference");
  const targets = get("Target Companies Preference");
  const dreamBody = get("Dream Offer");
  const filled = [fn, industry, targets, dreamBody].filter((x) => x.length > 0).length;

  const targetRole = fn.length
    ? stripPlaceholders(fn[0]).replace(/^[-*+\s]+/, "").replace(/\.$/, "").slice(0, 80).trim() || null
    : null;
  const dreamCompany =
    fields(dreamBody).get("company") || null;

  const health: Health =
    filled === 0
      ? { state: "empty", detail: 'ask Claude: "Help me fill out my career plan"' }
      : filled < 4
        ? { state: "partial", detail: `${filled} of 4 sections` }
        : { state: "filled" };
  return { health, targetRole, dream: dreamCompany };
}

const QA_QUESTIONS = [
  "What is your current pay",
  "What are your compensation expectations",
  "Why are you leaving your current role",
  "Why do you want to work at",
  "What is your greatest weakness",
  "What is your biggest failure",
  "Where do you see yourself in 3 years",
  "Tell me about yourself",
  "Are you interviewing elsewhere",
];

function qaHealth(): Health {
  const md = readMd(path.join(CONTEXT_DIR, "qa-master.md"));
  if (!md) return { state: "empty", detail: "file not found" };
  const secs = sections(md, 3);
  let answered = 0;
  for (const q of QA_QUESTIONS) {
    const sec = secs.find((s) => norm(s.heading).includes(norm(q)));
    if (!sec) continue;
    if (sec.body.some((l) => isRealText(l))) answered++;
  }
  if (answered === 0)
    return { state: "empty", detail: `0 of ${QA_QUESTIONS.length} — ask Claude: "Help me fill out the Q&A master doc"` };
  if (answered < QA_QUESTIONS.length)
    return { state: "partial", detail: `${answered} of ${QA_QUESTIONS.length}` };
  return { state: "filled", detail: `${answered} of ${QA_QUESTIONS.length}` };
}

function targetCompanies(): { health: Health; names: string[] } {
  const md = readMd(path.join(CONTEXT_DIR, "target-companies.md"));
  if (!md) return { health: { state: "empty", detail: "file not found" }, names: [] };
  const names: string[] = [];
  for (const s of sections(md, 2)) {
    const m = s.heading.match(/^Rank\s*\d+\s*:\s*(.+)$/i);
    const raw = m ? m[1] : null;
    if (!raw || !isRealText(raw)) continue;
    names.push(stripPlaceholders(raw).trim());
  }
  return {
    health: names.length
      ? { state: "filled", detail: `${names.length} companies` }
      : { state: "empty", detail: "run /company-research generate target list" },
    names,
  };
}

type TrackerPerson = {
  name: string;
  company: string;
  connected: boolean;
  requested: boolean;
  met: boolean;
  referralRequested: boolean;
  referralReceived: boolean;
  lastContact: string | null;
  nextAction: string | null;
};

function connectionTracker(): { health: Health; people: TrackerPerson[] } {
  const md = readMd(path.join(CONTEXT_DIR, "connection-tracker.md"));
  if (!md) return { health: { state: "empty", detail: "file not found" }, people: [] };

  const people: TrackerPerson[] = [];
  const companyBlocks = sections(md, 2);
  for (const block of companyBlocks) {
    const company = stripPlaceholders(block.heading).trim();
    if (!isRealText(block.heading)) continue;
    for (const person of sections(block.body.join("\n"), 3)) {
      const name = stripPlaceholders(person.heading).trim();
      if (!isRealText(person.heading)) continue;
      const f = fields(person.body);
      const connectedRaw = f.get("linkedin connected") ?? "";
      people.push({
        name,
        company,
        connected: yes(connectedRaw),
        requested: /request/i.test(connectedRaw) || Boolean(f.get("connection requested")),
        met: Boolean(f.get("met in person/zoom") && yes(f.get("met in person/zoom"))) ||
          Boolean(f.get("meeting notes")),
        referralRequested: yes(f.get("referral requested")) || Boolean(f.get("referral requested")),
        referralReceived: yes(f.get("referral received")),
        lastContact: firstDate(f.get("last contact")) ?? firstDate(connectedRaw),
        nextAction: f.get("next action") || null,
      });
    }
  }
  const warm = people.filter((p) => p.connected || p.met).length;
  return {
    health: people.length
      ? { state: "filled", detail: `${people.length} people · ${warm} warm` }
      : { state: "empty", detail: "run /build-referral-graph, or paste your LinkedIn connections CSV" },
    people,
  };
}

function trackerStatus(p: TrackerPerson): string {
  if (p.referralReceived) return "referred";
  if (p.met) return "replied";
  if (p.connected) return "connected";
  if (p.requested || p.referralRequested) return "requested";
  return "cold";
}

// --- applications ----------------------------------------------------------

const STAGES = ["sourced", "applied", "screen", "onsite", "offer"] as const;
type Stage = (typeof STAGES)[number];
const BENCHMARK: Record<Exclude<Stage, "sourced">, number> = {
  applied: 0.3,
  screen: 0.25,
  onsite: 0.35,
  offer: 0.25,
};
const TERMINAL = new Set(["rejected", "withdrawn", "ghosted", "declined", "closed"]);

function stageOf(status: string): Stage | "terminal" | null {
  const s = norm(status);
  if (!s) return null;
  if ([...TERMINAL].some((t) => s.includes(t))) return "terminal";
  if (s.includes("offer")) return "offer";
  if (s.includes("onsite") || s.includes("final") || s.includes("loop")) return "onsite";
  if (
    s.includes("screen") ||
    s.includes("phone") ||
    s.includes("interview") ||
    s.includes("take home") ||
    s.includes("assessment") ||
    s.includes("portfolio") ||
    s.includes("case study")
  )
    return "screen";
  if (s.includes("applied") || s.includes("referral") || s.includes("submitted")) return "applied";
  if (s.includes("sourced") || s.includes("saved")) return "sourced";
  return null;
}

type Application = {
  id: string;
  company: string;
  role: string;
  status: string;
  stage: Stage | "terminal";
  reached: Set<Stage>;
  applied_on: string | null;
  stage_since: string | null;
  referral: string;
  hasReferral: boolean;
  nextAction: string | null;
  interview: { when: string; round: string } | null;
};

function appTracker(): { health: Health; apps: Application[] } {
  const md = readMd(path.join(CONTEXT_DIR, "app-tracker.md"));
  if (!md)
    return {
      health: { state: "empty", detail: "no applications logged — run /app-tracker add" },
      apps: [],
    };

  const apps: Application[] = [];
  for (const entry of sections(md, 3)) {
    const head = stripPlaceholders(entry.heading).trim();
    if (!isRealText(entry.heading)) continue;
    const split = head.split(/\s+[-–—]\s+/);
    const company = (split[0] ?? "").trim();
    const role = (split.slice(1).join(" - ") || "").trim();
    if (!company) continue;

    const f = fields(entry.body);
    const status = f.get("status") || "";
    const stage = stageOf(status);
    if (stage === null) continue; // an entry with no usable status is not an application

    const applied = firstDate(f.get("date applied")) ?? firstDate(entry.body.join("\n"));
    const reached = new Set<Stage>();
    if (stage !== "terminal") reached.add(stage);
    // Anything in the tracker that is past "sourced" was applied to.
    if (stage !== "sourced") reached.add("applied");

    // History lines only: "  - 2026-07-14 recruiter-screen". A date anywhere
    // else on the line (a follow-up reminder, say) must not promote the stage.
    let stageSince: string | null = null;
    for (const line of entry.body) {
      if (!/^\s*[-*+]\s*\[?\d{4}-\d{2}-\d{2}|^\s*[-*+]\s*\[?\d{1,2}\/\d{1,2}\/\d{4}/.test(line))
        continue;
      const d = firstDate(line);
      if (!d) continue;
      const st = stageOf(line.replace(d, ""));
      if (!st || st === "terminal") continue;
      reached.add(st);
      if (st === stage) stageSince = laterDate(stageSince, d);
    }

    const referral = f.get("referral") || "";
    const scheduledRaw = f.get("interview scheduled") || f.get("interview") || "";
    const when = firstDateTime(scheduledRaw);
    const roundMatch = scheduledRaw.match(/\b(onsite|final|screen|recruiter|phone|r\d|round\s*\d)\b/i);

    apps.push({
      id: slugify(`${company}-${role || "role"}`),
      company,
      role: role || DASH,
      status: status || "applied",
      stage: stage === "terminal" ? "terminal" : stage,
      reached,
      applied_on: applied,
      stage_since: stageSince ?? applied,
      referral,
      hasReferral: /received|yes|confirmed|submitted/i.test(referral) && !/^no\b/i.test(referral),
      nextAction: f.get("next action") || null,
      interview: when ? { when, round: roundMatch ? roundMatch[1].toLowerCase() : "interview" } : null,
    });
  }

  return {
    health: apps.length
      ? { state: "filled", detail: `${apps.length} applications` }
      : { state: "empty", detail: "no applications logged — run /app-tracker add" },
    apps,
  };
}

// --- interview history -----------------------------------------------------

type Debrief = {
  date: string | null;
  company: string;
  role: string | null;
  round: string | null;
  score: number | null;
  note: string | null;
  laws: Record<string, number[]>;
  byType: Record<string, number[]>;
};

const LAW_DIMENSIONS: [RegExp, string][] = [
  [/structure/i, "Structure"],
  [/specificity/i, "Specificity"],
  [/skill\s*demo|skill\s*demonstration/i, "Skill demonstration"],
  [/metric/i, "Metrics depth"],
];

function interviewHistory(): { health: Health; debriefs: Debrief[] } {
  const md = readMd(path.join(CONTEXT_DIR, "interview-history.md"));
  if (!md) return { health: { state: "empty", detail: "file not found" }, debriefs: [] };

  const debriefs: Debrief[] = [];
  for (const entry of sections(md, 3)) {
    const head = stripPlaceholders(entry.heading).trim();
    if (!isRealText(entry.heading)) continue;
    const parts = head
      .split(/\s+[-–—]\s+/)
      .map((p) => p.trim())
      .filter(Boolean);
    const date = firstDate(head);
    const roundPart = parts.find((p) => /^(round|r\d|onsite|final|screen)\b/i.test(p)) ?? null;
    // "Round" on its own is what is left of the blank template heading, so a
    // heading with no real company name is skipped rather than logged as one.
    const named = parts.filter(
      (p) => p !== roundPart && !firstDate(p) && p.length > 1 && /[A-Za-z]{2}/.test(p),
    );
    const company = named[0];
    if (!company) continue;

    const laws: Record<string, number[]> = {};
    const byType: Record<string, number[]> = {};
    const scores: number[] = [];
    for (const line of entry.body) {
      for (const [re, dim] of LAW_DIMENSIONS) {
        const lawHit = line.match(
          new RegExp(`law\\s*\\d?\\s*[—:-]?\\s*${re.source}[^0-9]{0,20}(\\d{1,2}(?:\\.\\d)?)\\s*/\\s*10`, "i"),
        );
        if (lawHit) (laws[dim] ??= []).push(Number(lawHit[1]));
      }
      const s = line.match(/score:\s*(\d{1,2}(?:\.\d)?)\s*\/\s*10/i);
      if (s) {
        const v = Number(s[1]);
        if (Number.isFinite(v)) {
          scores.push(v);
          const t = line.match(/type:\s*\[?([a-z ]+)\]?/i);
          if (t) (byType[titleCase(slugify(t[1]))] ??= []).push(v);
        }
      }
    }
    for (const list of Object.values(laws)) scores.push(...list);

    const f = fields(entry.body);
    debriefs.push({
      date,
      company,
      role: named[1] ?? null,
      round: roundPart,
      score: scores.length ? Number((scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1)) : null,
      note: f.get("key improvement") || f.get("overall assessment") || null,
      laws,
      byType,
    });
  }

  debriefs.sort((a, b) => (a.date ?? "").localeCompare(b.date ?? ""));
  return {
    health: debriefs.length
      ? { state: "filled", detail: `${debriefs.length} logged` }
      : { state: "empty", detail: "run /interview-debrief after your next interview" },
    debriefs,
  };
}

// ---------------------------------------------------------------------------
// SQLite side
// ---------------------------------------------------------------------------

type JobRow = {
  id: string;
  company: string;
  role: string;
  location: string | null;
  posted_at: string | null;
  salary: string | null;
  url: string | null;
  source: string;
  fit: number | null;
  archetype: string | null;
  status: string;
  first_seen: string;
};

type PersonRow = {
  id: string;
  name: string | null;
  headline: string | null;
  title: string | null;
  company: string | null;
  url: string | null;
  warmth: number | null;
  why_warm: string | null;
  likely_hm: number;
  status: string;
  last_post_text: string | null;
  last_post_url: string | null;
  last_post_at: string | null;
};

function jsonList(v: string | null): string[] {
  if (!v) return [];
  try {
    const p = JSON.parse(v);
    return Array.isArray(p) ? p.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

function matchesGaps(id: string): { matches: string[]; gaps: string[] } {
  const raw = getMeta(`mg:${id}`);
  if (!raw) return { matches: [], gaps: [] };
  try {
    const p = JSON.parse(raw);
    return {
      matches: Array.isArray(p?.matches) ? p.matches.filter((x: unknown) => typeof x === "string") : [],
      gaps: Array.isArray(p?.gaps) ? p.gaps.filter((x: unknown) => typeof x === "string") : [],
    };
  } catch {
    return { matches: [], gaps: [] };
  }
}

// ---------------------------------------------------------------------------

function main() {
  const a = args();
  if (a.has("help") || a.has("h")) {
    console.log(HELP.trim());
    return;
  }

  const jobLimit = Math.max(1, Math.min(1000, a.num("limit") ?? 200));
  const out = a.str("out");
  const outRoot = out ? path.resolve(out) : ROOT;
  const dashboardDir = out ? outRoot : path.join(ROOT, "dashboard");
  const contextDir = out ? outRoot : CONTEXT_DIR;

  const conn = db();

  // ---- context library ----------------------------------------------------
  const expH = experienceHealth();
  const plan = careerPlan();
  const qa = qaHealth();
  const targets = targetCompanies();
  const tracker = connectionTracker();
  const applications = appTracker();
  const history = interviewHistory();

  // ---- jobs ---------------------------------------------------------------
  const jobRows = conn
    .prepare(
      `SELECT id, company, role, location, posted_at, salary, url, source, fit,
              archetype, status, first_seen
         FROM jobs
        WHERE duplicate_of IS NULL AND status != 'hidden'
        ORDER BY fit DESC NULLS LAST, COALESCE(posted_at, first_seen) DESC
        LIMIT ?`,
    )
    .all(jobLimit) as JobRow[];

  const dupCounts = new Map<string, number>();
  for (const r of conn
    .prepare(
      `SELECT duplicate_of AS id, COUNT(*) AS n FROM jobs
        WHERE duplicate_of IS NOT NULL GROUP BY duplicate_of`,
    )
    .all() as { id: string; n: number }[])
    dupCounts.set(r.id, r.n);

  const peopleRows = conn
    .prepare(
      `SELECT id, name, headline, title, company, url, warmth, why_warm, likely_hm,
              status, last_post_text, last_post_url, last_post_at
         FROM people`,
    )
    .all() as PersonRow[];

  const peopleByCompany = new Map<string, PersonRow[]>();
  for (const p of peopleRows) {
    const key = norm(p.company);
    if (!key) continue;
    (peopleByCompany.get(key) ?? peopleByCompany.set(key, []).get(key)!).push(p);
  }

  const totalJobs = (
    conn
      .prepare(`SELECT COUNT(*) AS n FROM jobs WHERE duplicate_of IS NULL AND status != 'hidden'`)
      .get() as { n: number }
  ).n;

  const voyageOn = peopleRows.some((p) => p.warmth !== null) || jobRows.some((j) => j.fit !== null);

  // ---- funnel -------------------------------------------------------------
  const active = applications.apps;
  const counts: Record<Stage, number> = {
    sourced: Math.max(totalJobs, active.length),
    applied: active.filter((x) => x.reached.has("applied")).length,
    screen: active.filter((x) => x.reached.has("screen")).length,
    onsite: active.filter((x) => x.reached.has("onsite")).length,
    offer: active.filter((x) => x.reached.has("offer")).length,
  };

  const funnel = STAGES.map((stage, i) => {
    if (i === 0) return { stage, count: counts[stage] };
    const prev = counts[STAGES[i - 1]];
    const conversion = prev > 0 ? Number((counts[stage] / prev).toFixed(2)) : null;
    return {
      stage,
      count: counts[stage],
      conversion,
      benchmark: BENCHMARK[stage as Exclude<Stage, "sourced">],
    };
  });

  // ---- referral coverage --------------------------------------------------
  const appliedApps = active.filter((x) => x.reached.has("applied"));
  const withReferral = appliedApps.filter((x) => x.hasReferral).length;
  const coverage = appliedApps.length
    ? Number((withReferral / appliedApps.length).toFixed(2))
    : null;

  // ---- bottleneck ---------------------------------------------------------
  const bottleneck = pickBottleneck(funnel, counts, coverage);

  // ---- pipeline -----------------------------------------------------------
  const jobByKey = new Map<string, JobRow>();
  for (const j of jobRows) jobByKey.set(`${norm(j.company)}|${norm(j.role)}`, j);
  const jobByCompany = new Map<string, JobRow>();
  for (const j of jobRows) if (!jobByCompany.has(norm(j.company))) jobByCompany.set(norm(j.company), j);

  const NEXT_STAGE: Record<string, string> = {
    applied: "screen",
    screen: "onsite",
    onsite: "offer",
    offer: "offer",
    sourced: "applied",
  };

  const pipeline = active
    .filter((x) => x.stage !== "terminal")
    .map((x) => {
      const match =
        jobByKey.get(`${norm(x.company)}|${norm(x.role)}`) ?? jobByCompany.get(norm(x.company));
      return {
        id: x.id,
        company: x.company,
        role: x.role,
        stage: x.stage,
        days_in_stage: x.stage_since ? daysBetween(x.stage_since, TODAY) : null,
        fit: match?.fit ?? null,
        has_referral: x.hasReferral,
        next_action: x.nextAction ?? defaultNextAction(x.stage as Stage),
        command: `/app-tracker update ${x.id} --stage ${NEXT_STAGE[x.stage] ?? "screen"}`,
      };
    })
    .sort((p, q) => STAGES.indexOf(q.stage as Stage) - STAGES.indexOf(p.stage as Stage));

  // ---- network ------------------------------------------------------------
  const companyNames = new Set<string>();
  for (const p of tracker.people) if (p.company) companyNames.add(p.company);
  for (const p of peopleRows) if (p.company) companyNames.add(p.company);

  const network = [...companyNames]
    .map((company) => {
      const key = norm(company);
      const fromDb = peopleByCompany.get(key) ?? [];
      const fromMd = tracker.people.filter((p) => norm(p.company) === key);
      const merged = new Map<string, any>();

      for (const p of fromDb) {
        const name = p.name ?? p.id;
        merged.set(norm(name), {
          name,
          title: p.title ?? p.headline ?? null,
          url: p.url ?? null,
          warmth: p.warmth,
          why_warm: jsonList(p.why_warm),
          recent_post:
            p.last_post_text || p.last_post_url
              ? {
                  text: p.last_post_text,
                  url: p.last_post_url,
                  posted_at: p.last_post_at,
                }
              : null,
          status: p.status ?? "cold",
          last_contact: null,
          likely_hm: Boolean(p.likely_hm),
        });
      }
      for (const p of fromMd) {
        const k = norm(p.name);
        const existing = merged.get(k);
        const mdSide = {
          name: p.name,
          status: trackerStatus(p),
          last_contact: p.lastContact,
        };
        if (existing) {
          // The markdown tracker is the source of truth for relationship status:
          // only the human knows whether someone actually replied.
          existing.status = mdSide.status;
          existing.last_contact = mdSide.last_contact;
        } else {
          merged.set(k, {
            name: p.name,
            title: null,
            url: null,
            warmth: null,
            why_warm: [],
            recent_post: null,
            status: mdSide.status,
            last_contact: mdSide.last_contact,
            likely_hm: false,
          });
        }
      }

      const people = [...merged.values()].sort(
        (x, y) => (y.warmth ?? -1) - (x.warmth ?? -1) || String(x.name).localeCompare(String(y.name)),
      );
      return {
        company,
        in_pipeline: active.filter((x) => norm(x.company) === key && x.stage !== "terminal").length,
        referrals: people.filter((p) => p.status === "referred").length,
        people,
      };
    })
    .sort((x, y) => y.in_pipeline - x.in_pipeline || y.people.length - x.people.length);

  // ---- interviews ---------------------------------------------------------
  const upcoming = active
    .filter((x) => x.interview && x.interview.when >= TODAY)
    .sort((x, y) => x.interview!.when.localeCompare(y.interview!.when))
    .map((x) => ({
      company: x.company,
      round: x.interview!.round,
      when: x.interview!.when,
      command: `/interview-prep ${x.company} ${x.role !== DASH ? x.role : ""} ${x.interview!.round}`
        .replace(/\s+/g, " ")
        .trim(),
    }));

  const recent = history.debriefs.slice(-8);
  const dims = new Map<string, number[]>();
  for (const d of recent) {
    for (const [dim, vals] of Object.entries(d.laws)) (dims.get(dim) ?? dims.set(dim, []).get(dim)!).push(...vals);
    if (!Object.keys(d.laws).length) {
      for (const [type, vals] of Object.entries(d.byType))
        (dims.get(type) ?? dims.set(type, []).get(type)!).push(...vals);
    }
  }
  const heatmapRaw = [...dims.entries()].map(([dimension, vals]) => ({
    dimension,
    score: Number((vals.reduce((s, v) => s + v, 0) / vals.length).toFixed(1)),
  }));
  const worst = heatmapRaw.length ? Math.min(...heatmapRaw.map((h) => h.score)) : null;
  const heatmap = heatmapRaw
    .sort((x, y) => y.score - x.score)
    .map((h) => (worst !== null && h.score === worst && h.score < 7 ? { ...h, drill: true } : h));

  const last = history.debriefs[history.debriefs.length - 1] ?? null;

  // ---- user ---------------------------------------------------------------
  const activityDates = new Set<string>();
  for (const x of active) {
    if (x.applied_on) activityDates.add(x.applied_on);
    if (x.stage_since) activityDates.add(x.stage_since);
  }
  for (const d of history.debriefs) if (d.date) activityDates.add(d.date);
  for (const r of conn.prepare(`SELECT DISTINCT DATE(first_seen) AS d FROM jobs`).all() as {
    d: string | null;
  }[])
    if (r.d) activityDates.add(r.d);

  const streak = streakDays(activityDates);
  const started = [...activityDates].sort()[0] ?? null;
  const week = started ? Math.floor(daysBetween(started, TODAY) / 7) + 1 : null;

  const scrapedAt =
    getMeta("last_scrape") ??
    ((
      conn.prepare(`SELECT MAX(last_seen) AS d FROM jobs`).get() as { d: string | null }
    ).d ?? null);

  // ---- archetypes ---------------------------------------------------------
  let labels: Record<string, string> = {};
  try {
    labels = JSON.parse(getMeta("archetype_labels") ?? "{}") ?? {};
  } catch {
    labels = {};
  }
  const archetypes = (
    conn
      .prepare(
        `SELECT archetype AS key, COUNT(*) AS count FROM jobs
          WHERE archetype IS NOT NULL AND duplicate_of IS NULL AND status != 'hidden'
          GROUP BY archetype ORDER BY count DESC`,
      )
      .all() as { key: string; count: number }[]
  ).map((r) => ({ key: r.key, label: labels[r.key] ?? titleCase(r.key), count: r.count }));

  // ---- jobs for the dashboard --------------------------------------------
  const jobs = jobRows.map((j) => {
    const mg = matchesGaps(j.id);
    return {
      id: j.id,
      company: j.company,
      role: j.role,
      location: j.location,
      posted_at: j.posted_at,
      salary: j.salary,
      url: j.url,
      source: j.source,
      fit: j.fit,
      matches: mg.matches,
      gaps: mg.gaps,
      referral_path: (peopleByCompany.get(norm(j.company)) ?? []).length,
      duplicates: dupCounts.get(j.id) ?? 0,
      archetype: j.archetype,
      status: j.status,
    };
  });

  // ---- health -------------------------------------------------------------
  const health: Record<string, Health> = {
    experience_library: expH,
    career_plan: plan.health,
    qa_master: qa,
    target_companies: targets.health,
    connection_tracker: tracker.health,
    interview_history: history.health,
    app_tracker: applications.health,
    apify: process.env.APIFY_TOKEN
      ? {
          state: "ok",
          detail: scrapedAt ? `last scrape ${String(scrapedAt).slice(0, 10)}` : "key set, never run",
        }
      : { state: "missing", detail: "job feed off — paste JDs to Claude instead" },
    voyage: voyageOn
      ? { state: "ok", detail: `${jobs.filter((j) => j.fit !== null).length} jobs scored` }
      : { state: "missing", detail: "fit scores off" },
  };

  // ---- next actions -------------------------------------------------------
  const next_actions = nextActions({
    upcoming,
    pipeline,
    network,
    jobs,
    heatmap,
    health,
    coverage,
  });

  // ---- assemble -----------------------------------------------------------
  const data = {
    generated_at: TODAY,
    scraped_at: scrapedAt ? String(scrapedAt).slice(0, 10) : null,
    user: {
      name: process.env.USER_NAME ?? getMeta("user_name") ?? null,
      target_role: plan.targetRole,
      streak_days: streak,
      week,
    },
    health,
    funnel,
    bottleneck,
    next_actions,
    jobs,
    archetypes,
    pipeline,
    network,
    referral_coverage: { current: coverage, target: 0.6 },
    interviews: {
      upcoming,
      heatmap,
      last_debrief: last
        ? {
            company: last.company,
            round: last.round,
            score: last.score,
            note: last.note,
          }
        : null,
    },
  };

  fs.mkdirSync(dashboardDir, { recursive: true });
  fs.mkdirSync(contextDir, { recursive: true });
  const dataPath = path.join(dashboardDir, "data.json");
  fs.writeFileSync(dataPath, `${JSON.stringify(data, null, 2)}\n`);

  const feedPath = path.join(contextDir, "job-feed.md");
  const refPath = path.join(contextDir, "referral-paths.md");
  fs.writeFileSync(feedPath, jobFeedMd(data, targets.names));
  fs.writeFileSync(refPath, referralPathsMd(data));

  setMeta("last_export", new Date().toISOString());

  console.log(`Exported ${jobs.length} job(s), ${pipeline.length} live application(s), ` +
    `${network.reduce((n, c) => n + c.people.length, 0)} person/people.`);
  console.log(`  ${dataPath}`);
  console.log(`  ${feedPath}`);
  console.log(`  ${refPath}`);
  console.log("");
  console.log("Look at it either way — both show the same numbers:");
  console.log(`  open ${path.join(dashboardDir, "index.html")}`);
  console.log(`  or ask Claude: "read context-library/job-feed.md and tell me today's three moves"`);

  const empties = Object.entries(health).filter(([, h]) => h.state === "empty");
  if (empties.length) {
    console.log("");
    console.log("Still empty (nothing was invented to fill these):");
    for (const [k, h] of empties) console.log(`  ${k.padEnd(20)} ${h.detail ?? ""}`);
  }
}

// ---------------------------------------------------------------------------

function defaultNextAction(stage: Stage): string {
  return (
    {
      sourced: "apply or drop it",
      applied: "follow up",
      screen: "prep the next round",
      onsite: "prep and send thank-you notes",
      offer: "negotiate before you answer",
    } as Record<Stage, string>
  )[stage];
}

function pickBottleneck(
  funnel: any[],
  counts: Record<Stage, number>,
  coverage: number | null,
) {
  const candidates = funnel
    .slice(1)
    .map((f, i) => ({
      stage: `${STAGES[i]}→${f.stage}`,
      key: f.stage as Exclude<Stage, "sourced">,
      prev: counts[STAGES[i]],
      conversion: f.conversion as number | null,
      benchmark: f.benchmark as number,
    }))
    // Five is the smallest denominator that is not just noise. Below that, a
    // percentage is a coin flip dressed up as a diagnosis.
    .filter((c) => c.conversion !== null && c.prev >= 5 && c.conversion < c.benchmark);

  if (!candidates.length) return null;
  candidates.sort((a, b) => a.conversion! - a.benchmark - (b.conversion! - b.benchmark));
  const worst = candidates[0];
  const pct = (n: number) => `${Math.round(n * 100)}%`;

  const FIXES: Record<string, { fix: string; command: string }> = {
    applied: {
      fix:
        coverage === null
          ? "Referral coverage is unknown. Build a referral path before the next batch."
          : `Referral coverage is ${pct(coverage)}. Raise it to 60%.`,
      command: "/build-referral-graph",
    },
    screen: {
      fix: "Recruiter screens are where you lose them. Drill the two-minute story.",
      command: "/mock-interview recruiter-screen",
    },
    onsite: {
      fix: "Onsites are not converting. Prep the specific loop, not general practice.",
      command: "/interview-prep",
    },
    offer: {
      fix: "Finals are not closing. Debrief the last two and drill the weakest dimension.",
      command: "/weekly-retro",
    },
  };
  const f = FIXES[worst.key];
  return {
    stage: worst.stage,
    why: `${pct(worst.conversion!)} vs ${pct(worst.benchmark)} benchmark`,
    fix: f.fix,
    command: f.command,
  };
}

function streakDays(dates: Set<string>): number {
  if (!dates.size) return 0;
  let streak = 0;
  const d = new Date(`${TODAY}T00:00:00Z`);
  // Yesterday still counts today: a streak should not break because it is 9am.
  if (!dates.has(TODAY)) d.setUTCDate(d.getUTCDate() - 1);
  for (;;) {
    const key = d.toISOString().slice(0, 10);
    if (!dates.has(key)) break;
    streak++;
    d.setUTCDate(d.getUTCDate() - 1);
  }
  return streak;
}

/**
 * Three actions, ranked, each one derived from something real. If there is not
 * enough data for three, fewer are returned — a made-up action is worse than a
 * short list.
 */
function nextActions(ctx: {
  upcoming: any[];
  pipeline: any[];
  network: any[];
  jobs: any[];
  heatmap: any[];
  health: Record<string, Health>;
  coverage: number | null;
}) {
  const out: any[] = [];

  // 1. An interview in the next 7 days beats everything else.
  const soon = ctx.upcoming.filter((u) => daysBetween(TODAY, u.when.slice(0, 10)) <= 7);
  if (soon.length) {
    const u = soon[0];
    const drill = ctx.heatmap.find((h: any) => h.drill);
    out.push({
      type: "prep",
      title: `Prep → ${u.company} ${u.round}, ${u.when.replace("T", " ")}`,
      why: drill
        ? `Weakest dimension across your last debriefs: ${drill.dimension} (${drill.score}/10)`
        : "Prep the specific loop, not general practice",
      buttons: [
        { label: "Prep package", command: u.command },
        {
          label: "Mock interview",
          command: `/mock-interview ${drill ? drill.dimension.toLowerCase() : u.round}`,
        },
      ],
    });
  }

  // 2. A live application with no referral, where a warm person exists.
  const stale = ctx.pipeline
    .filter((p) => !p.has_referral && (p.days_in_stage ?? 0) >= 5 && p.stage === "applied")
    .sort((a, b) => (b.days_in_stage ?? 0) - (a.days_in_stage ?? 0));
  for (const p of stale) {
    const co = ctx.network.find((n) => norm(n.company) === norm(p.company));
    const person = co?.people?.find((x: any) => x.status !== "referred");
    if (!person) continue;
    const why = [
      person.why_warm?.length ? person.why_warm[0] : null,
      person.recent_post?.posted_at ? `posted ${person.recent_post.posted_at.slice(0, 10)}` : null,
      `${p.days_in_stage}d in applied, no referral`,
    ]
      .filter(Boolean)
      .join(" · ");
    out.push({
      type: "referral",
      title: `Referral ask → ${person.name} (${p.company})`,
      why,
      buttons: [
        {
          label: "Draft ask",
          command: `/referral-request ${slugify(person.name)} ${p.id}`,
        },
        { label: "Skip", command: `/app-tracker update ${p.id} --note "skipped referral"` },
      ],
    });
    break;
  }

  // 3. The best unapplied job in the feed.
  const top = ctx.jobs.find((j) => j.status === "sourced");
  if (top) {
    out.push({
      type: "apply",
      title: `Apply → ${top.company}, ${top.role}${top.fit !== null ? ` · fit ${top.fit}` : ""}`,
      why:
        top.matches?.length
          ? `Matches your experience on: ${top.matches.slice(0, 3).join(", ")}`
          : top.posted_at
            ? `Posted ${top.posted_at.slice(0, 10)}`
            : "Newest in your feed",
      buttons: [
        { label: "Tailor resume", command: `/resume-tailor ${top.url ?? top.id}` },
        { label: "Not for me", command: `/app-tracker update ${top.id} --stage hidden` },
      ],
    });
  }

  // Only if there is genuinely nothing else to do: the setup gap that is
  // currently costing the most.
  const gapOrder: [string, string, string][] = [
    ["experience_library", "Fill your experience library", "Help me build my experience library"],
    ["career_plan", "Fill your career plan", "Help me fill out my career plan"],
    ["app_tracker", "Log your applications", "/app-tracker add"],
    ["connection_tracker", "Build your referral graph", "/build-referral-graph"],
    ["qa_master", "Finish your Q&A master doc", "Help me fill out the Q&A master doc"],
  ];
  for (const [key, title, command] of gapOrder) {
    if (out.length >= 3) break;
    const h = ctx.health[key];
    if (!h || (h.state !== "empty" && h.state !== "partial")) continue;
    out.push({
      type: "setup",
      title,
      why: h.detail ? `${key.replace(/_/g, "-")}.md: ${h.detail}` : `${key} is incomplete`,
      buttons: [{ label: "Do it with Claude", command }],
    });
  }

  return out.slice(0, 3);
}

// ---------------------------------------------------------------------------
// Markdown digests — the dashboard-free path. Same numbers, no browser.
// ---------------------------------------------------------------------------

function fmt(v: unknown): string {
  if (v === null || v === undefined || v === "") return DASH;
  return String(v).replace(/\s*\|\s*/g, "/").replace(/\s+/g, " ").trim();
}

function jobFeedMd(data: any, targetNames: string[]): string {
  const L: string[] = [];
  L.push("# Job Feed");
  L.push("");
  L.push(`Generated: ${data.generated_at}`);
  L.push(`Last scrape: ${data.scraped_at ?? DASH}`);
  L.push("");
  L.push(
    "Auto-generated by `npm run export`. Do not hand-edit — it is overwritten on every run. " +
      "This is the same data the dashboard shows, so you never need to open the dashboard.",
  );
  L.push("");

  if (!data.jobs.length) {
    L.push("## No jobs yet");
    L.push("");
    L.push("Nothing has been scraped into `job-lab/data/jobs.db` yet. Two ways to fill it:");
    L.push("");
    L.push("1. In your terminal, inside the `job-lab` folder, run this exact line:");
    L.push("");
    L.push("       npm run find-jobs");
    L.push("");
    L.push("2. Or skip automation entirely: paste any job description to Claude and run");
    L.push("   `/quick-start`. The Job Search OS never required the scraper.");
    L.push("");
    return L.join("\n") + "\n";
  }

  const scored = data.jobs.filter((j: any) => j.fit !== null).length;
  L.push(
    scored
      ? `${data.jobs.length} live roles, ${scored} scored against your experience library.`
      : `${data.jobs.length} live roles. Fit scores are off (no VOYAGE_API_KEY), so the ` +
          `FIT column shows ${DASH} — that is "not measured", not "bad match".`,
  );
  L.push("");

  if (data.archetypes.length) {
    L.push("## Archetypes");
    L.push("");
    L.push(
      `Your feed clusters into ${data.archetypes.length} kind(s) of role. That is how many ` +
        `resume variants you need — not one per application.`,
    );
    L.push("");
    for (const a of data.archetypes) L.push(`- **${a.label}** — ${a.count} role(s) (\`${a.key}\`)`);
    L.push("");
  }

  L.push("## Top roles");
  L.push("");
  L.push("| Fit | Company | Role | Location | Posted | Salary | Referral path |");
  L.push("| ---: | --- | --- | --- | --- | --- | ---: |");
  for (const j of data.jobs.slice(0, 50)) {
    L.push(
      `| ${j.fit ?? DASH} | ${fmt(j.company)} | ${fmt(j.role)} | ${fmt(j.location)} | ` +
        `${fmt(j.posted_at)} | ${fmt(j.salary)} | ${j.referral_path || 0} |`,
    );
  }
  L.push("");

  const detailed = data.jobs.filter((j: any) => j.matches.length || j.gaps.length).slice(0, 15);
  if (detailed.length) {
    L.push("## Why these match, and where you are short");
    L.push("");
    L.push(
      "Matches are the JD phrases closest to something in your experience library. Gaps are the " +
        "phrases furthest from anything in it — that is your addressing-weaknesses list, derived " +
        "rather than guessed.",
    );
    L.push("");
    for (const j of detailed) {
      L.push(`### ${j.company} — ${j.role}${j.fit !== null ? ` (fit ${j.fit})` : ""}`);
      if (j.url) L.push(`${j.url}`);
      if (j.matches.length) L.push(`- **Matches:** ${j.matches.join(", ")}`);
      if (j.gaps.length) L.push(`- **Gaps:** ${j.gaps.join(", ")}`);
      L.push(`- **Next:** \`/job-fit-scorer ${j.url ?? j.id}\` then \`/resume-tailor\``);
      L.push("");
    }
  }

  if (targetNames.length) {
    const covered = new Set(data.jobs.map((j: any) => norm(j.company)));
    const missing = targetNames.filter((t) => !covered.has(norm(t))).slice(0, 20);
    if (missing.length) {
      L.push("## Target companies with nothing in the feed");
      L.push("");
      L.push(missing.join(" · "));
      L.push("");
      L.push("They may not be hiring, or the search terms in `job-lab/search.json` may not match.");
      L.push("");
    }
  }

  L.push("## What to do with this");
  L.push("");
  L.push("- `/job-fit-scorer <paste the JD>` — a real 0-100 score across five dimensions.");
  L.push("- `/resume-tailor <paste the JD>` — a tailored resume from your real experience only.");
  L.push("- `/build-referral-graph` — who could refer you at these companies.");
  L.push("- `/app-tracker add <company> <role>` — log it the moment you apply.");
  L.push("");
  return L.join("\n") + "\n";
}

function referralPathsMd(data: any): string {
  const L: string[] = [];
  L.push("# Referral Paths");
  L.push("");
  L.push(`Generated: ${data.generated_at}`);
  L.push("");
  L.push(
    "Auto-generated by `npm run export`. Do not hand-edit — it is overwritten on every run. " +
      "`connection-tracker.md` stays the file you and Claude edit; this one is the ranked view.",
  );
  L.push("");
  L.push(
    "**Nothing here contacts anyone.** No auto-connect, no auto-send, no LinkedIn login. Every " +
      "command below drafts a message you read, edit and send yourself.",
  );
  L.push("");

  const cov = data.referral_coverage.current;
  L.push(
    cov === null
      ? "Referral coverage: — (no applications logged yet). Target is 60%."
      : `Referral coverage: **${Math.round(cov * 100)}%** of your applications. Target is 60%.`,
  );
  L.push("");

  if (!data.network.length) {
    L.push("## Nobody in the graph yet");
    L.push("");
    L.push("Two ways to fill this:");
    L.push("");
    L.push("1. In your terminal, inside the `job-lab` folder, run this exact line:");
    L.push("");
    L.push("       npm run find-people");
    L.push("");
    L.push("2. Or export your LinkedIn connections to CSV and tell Claude:");
    L.push('   "import my LinkedIn connections CSV into connection-tracker.md".');
    L.push("");
    return L.join("\n") + "\n";
  }

  const ranked = Boolean(data.network.some((c: any) => c.people.some((p: any) => p.warmth !== null)));
  if (!ranked) {
    L.push(
      `Warmth is not computed (no VOYAGE_API_KEY), so people are listed alphabetically and the ` +
        `WARMTH column shows ${DASH}. Work down by title instead: someone on the hiring team beats ` +
        `someone with a similar background.`,
    );
    L.push("");
  }

  for (const c of data.network) {
    const flag = c.in_pipeline > 0 && c.referrals === 0 ? " ⚠ gap" : "";
    L.push(`## ${c.company}`);
    L.push("");
    L.push(`${c.in_pipeline} in pipeline · ${c.referrals} referral(s)${flag}`);
    L.push("");
    for (const p of c.people.slice(0, 12)) {
      const bits = [
        p.title ? fmt(p.title) : null,
        p.warmth !== null ? `warmth ${Number(p.warmth).toFixed(2)}` : `warmth ${DASH}`,
        p.likely_hm ? "likely hiring manager" : null,
        `status: ${p.status}`,
      ].filter(Boolean);
      L.push(`- **${fmt(p.name)}** — ${bits.join(" · ")}`);
      if (p.url) L.push(`  - ${p.url}`);
      if (p.why_warm?.length) L.push(`  - Why warm: ${p.why_warm.join(" · ")}`);
      if (p.recent_post?.text)
        L.push(
          `  - Recent post${p.recent_post.posted_at ? ` (${String(p.recent_post.posted_at).slice(0, 10)})` : ""}: ` +
            `"${String(p.recent_post.text).replace(/\s+/g, " ").slice(0, 180)}"`,
        );
      if (p.last_contact) L.push(`  - Last contact: ${p.last_contact}`);
      L.push(
        `  - Draft: \`${
          p.status === "cold"
            ? `/connection-request ${slugify(p.name)} ${slugify(c.company)}`
            : p.likely_hm
              ? `/hiring-manager-msg ${slugify(p.name)} ${slugify(c.company)}`
              : `/referral-request ${slugify(p.name)} ${slugify(c.company)}`
        }\``,
      );
    }
    L.push("");
  }

  L.push("## Rules");
  L.push("");
  L.push("- A referral is worth roughly five cold applications. Build the path before you apply.");
  L.push("- Connection requests are under 300 characters and reference something specific.");
  L.push("- Lead a hiring manager with a work product, never with the ask.");
  L.push("- You send every message by hand. This system never touches your LinkedIn account.");
  L.push("");
  return L.join("\n") + "\n";
}

if (require.main === module) {
  try {
    main();
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    console.error(`Export stopped: ${msg}`);
    console.error(
      "Fix: run this from inside the job-lab folder (cd job-lab), then try npm run export again. " +
        "If the database does not exist yet, run npm run find-jobs first — export still works with " +
        "an empty database, it just writes empty sections.",
    );
    process.exit(1);
  }
}
