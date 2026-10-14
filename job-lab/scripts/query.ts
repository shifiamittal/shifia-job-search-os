/**
 * npm run query — read your local job database from this terminal. FREE. No
 * scraping, no API calls, nothing leaves this machine.
 *
 *   npm run query                              the 25 best matches
 *   npm run query -- --min-fit 80              only strong matches
 *   npm run query -- --q "growth"              title, company or JD mentions growth
 *   npm run query -- --company stripe          one company (part of the name is fine)
 *   npm run query -- --days-back 7             posted in the last week
 *   npm run query -- --status applied          your applied pile
 *   npm run query -- --people --company stripe who could refer you at Stripe
 *   npm run query -- --signals                 "we're hiring" posts, newest first
 *   npm run query -- --stats                   what is in the database
 *   npm run query -- --limit 50
 *   npm run query -- --json                    the same rows, machine-readable
 *   npm run query -- --help
 *
 * Fit is a similarity score against your experience library, 0-100, and it
 * exists only after npm run embed has run with a Voyage key. A job with no
 * score prints "—", never 0: an absent score is not a bad score.
 *
 * This never prints the whole database and never prints a full job description.
 * Use --json --limit 20 when you want to hand rows to Claude.
 */
import "dotenv/config";
import { db, getMeta } from "../src/db";
import { main, type CommandSpec } from "../src/args";
import { clip, pad, parse, plural } from "./_lib";

const SPEC: CommandSpec = {
  command: "npm run query",
  summary:
    "Search the jobs, people and hiring signals already saved on this machine. " +
    "Free, offline, read-only: it changes nothing.",
  flags: [
    { name: "q", desc: "match the role title, company or job description", placeholder: '"<words>"' },
    { name: "company", desc: "one company, part of the name is enough", placeholder: '"<name>"' },
    {
      name: "min-fit",
      type: "number",
      desc: "only jobs scoring at least this against your experience (0-100)",
      placeholder: "<number>",
    },
    {
      name: "days-back",
      type: "number",
      desc: "only things posted in the last N days",
      placeholder: "<number>",
    },
    {
      name: "status",
      desc: "sourced, applied, screen, onsite, offer or hidden",
      placeholder: "<stage>",
    },
    { name: "people", type: "boolean", desc: "show people who could refer you instead of jobs" },
    { name: "signals", type: "boolean", desc: "show hiring-signal posts instead of jobs" },
    { name: "stats", type: "boolean", desc: "one screen summarising the whole database" },
    {
      name: "limit",
      type: "number",
      desc: "how many rows to print (200 at most)",
      placeholder: "<number>",
      default: 25,
    },
    { name: "json", type: "boolean", desc: "print JSON instead of a table" },
  ],
  examples: [
    "npm run query -- --min-fit 80 --days-back 7",
    'npm run query -- --company anthropic',
    "npm run query -- --people --company stripe",
    "npm run query -- --stats",
  ],
  notes: [
    "Nothing here writes anything. To move a job along your pipeline, tell Claude:",
    "    /app-tracker update <company> --stage screen",
  ],
};

const MAX_LIMIT = 200;
const DASH = "—";

/* ----------------------------------------------------------------- output */

function cell(v: unknown, width: number, right = false): string {
  const s = v === null || v === undefined || v === "" ? DASH : String(v).replace(/\s+/g, " ").trim();
  const clipped = clip(s, width);
  return right ? clipped.padStart(width) : pad(clipped, width);
}

function table(rows: (string | number | null)[][], widths: number[], rights: boolean[]) {
  rows.forEach((r, i) => {
    console.log(r.map((c, j) => cell(c, widths[j], rights[j])).join("  "));
    if (i === 0) console.log(widths.map((w) => "-".repeat(w)).join("  "));
  });
}

const fitCell = (f: number | null) => (f === null || f === undefined ? DASH : String(f));
const warmthCell = (w: number | null) => (w === null || w === undefined ? DASH : w.toFixed(2));
const day = (s: string | null) => (s ? String(s).slice(0, 10) : DASH);

function daysAgo(iso: string | null): string {
  if (!iso) return DASH;
  const t = Date.parse(iso);
  if (!Number.isFinite(t)) return DASH;
  const d = Math.round((Date.now() - t) / 86_400_000);
  return d <= 0 ? "today" : `${d}d`;
}

function parseList(v: string | null): string[] {
  if (!v) return [];
  try {
    const p = JSON.parse(v);
    return Array.isArray(p) ? p.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

function isEmptyDb(): boolean {
  return (db().prepare(`SELECT COUNT(*) AS n FROM jobs`).get() as { n: number }).n === 0;
}

/* ---------------------------------------------------------------- queries */

type Filters = {
  q?: string;
  company?: string;
  minFit?: number;
  daysBack?: number;
  status?: string;
  limit: number;
};

function sinceDate(daysBack: number): string {
  return new Date(Date.now() - daysBack * 86_400_000).toISOString().slice(0, 10);
}

function printJobs(f: Filters, asJson: boolean) {
  const conn = db();
  const where: string[] = ["duplicate_of IS NULL"];
  const params: any[] = [];

  if (f.status) {
    where.push("LOWER(status) = ?");
    params.push(f.status.toLowerCase());
  } else {
    where.push("status != 'hidden'");
  }
  if (f.q) {
    where.push(
      "(LOWER(role) LIKE ? OR LOWER(company) LIKE ? OR LOWER(COALESCE(description,'')) LIKE ?)",
    );
    const like = `%${f.q.toLowerCase()}%`;
    params.push(like, like, like);
  }
  if (f.company) {
    where.push("LOWER(company) LIKE ?");
    params.push(`%${f.company.toLowerCase()}%`);
  }
  if (f.minFit !== undefined) {
    where.push("fit IS NOT NULL AND fit >= ?");
    params.push(f.minFit);
  }
  if (f.daysBack !== undefined) {
    where.push("COALESCE(posted_at, first_seen) >= ?");
    params.push(sinceDate(f.daysBack));
  }
  const sql = where.join(" AND ");

  const total = (
    conn.prepare(`SELECT COUNT(*) AS n FROM jobs WHERE ${sql}`).get(...params) as { n: number }
  ).n;
  // Never SELECT description or raw here: this output is meant to be read, and
  // a full JD per row would bury it.
  const rows = conn
    .prepare(
      `SELECT id, company, role, location, posted_at, salary, fit, archetype, status,
              url, source, first_seen
         FROM jobs WHERE ${sql}
        ORDER BY fit DESC, COALESCE(posted_at, first_seen) DESC
        LIMIT ?`,
    )
    .all(...params, f.limit) as any[];

  const paths = new Map<string, number>();
  for (const r of conn
    .prepare(
      `SELECT LOWER(company) AS c, COUNT(*) AS n FROM people
        WHERE company IS NOT NULL AND TRIM(company) != '' GROUP BY LOWER(company)`,
    )
    .all() as { c: string; n: number }[])
    paths.set(r.c, r.n);

  if (asJson) {
    console.log(
      JSON.stringify(
        {
          matched: total,
          returned: rows.length,
          jobs: rows.map((r) => ({
            ...r,
            referral_path: paths.get(String(r.company).toLowerCase()) ?? 0,
          })),
        },
        null,
        2,
      ),
    );
    return;
  }

  if (!rows.length) {
    console.log("No jobs match those filters.");
    console.log(
      isEmptyDb()
        ? "The database is empty. Fill it by running this exact line:  npm run find-jobs\n" +
            "Or skip the scraper entirely: paste a job description into Claude and run /quick-start."
        : "Loosen a filter. --min-fit and --days-back are the two that cut hardest.",
    );
    return;
  }

  table(
    [
      ["FIT", "COMPANY", "ROLE", "LOCATION", "POSTED", "SALARY", "REF", "STATUS"],
      ...rows.map((r) => [
        fitCell(r.fit),
        r.company,
        r.role,
        r.location,
        daysAgo(r.posted_at ?? r.first_seen),
        r.salary,
        String(paths.get(String(r.company).toLowerCase()) ?? 0),
        r.status,
      ]),
    ],
    [4, 20, 40, 20, 7, 16, 4, 8],
    [true, false, false, false, true, false, true, false],
  );

  console.log(`\n${rows.length} of ${plural(total, "matching job")}.`);
  if (rows.every((r) => r.fit === null)) {
    console.log(
      "FIT is empty on every row because nothing has been embedded yet. That is not a score of\n" +
        "zero. Add VOYAGE_API_KEY to job-lab/.env and run:  npm run embed",
    );
  }
  console.log("REF is how many people you have saved at that company (npm run find-people fills it).");
  console.log("Next: open a job's URL, copy the description, and ask Claude:  /job-fit-scorer");
}

function printPeople(f: Filters, asJson: boolean) {
  const conn = db();
  const where: string[] = ["1 = 1"];
  const params: any[] = [];

  if (f.company) {
    where.push("LOWER(COALESCE(company,'')) LIKE ?");
    params.push(`%${f.company.toLowerCase()}%`);
  }
  if (f.q) {
    const like = `%${f.q.toLowerCase()}%`;
    where.push(
      "(LOWER(COALESCE(name,'')) LIKE ? OR LOWER(COALESCE(headline,'')) LIKE ? OR LOWER(COALESCE(title,'')) LIKE ?)",
    );
    params.push(like, like, like);
  }
  if (f.status) {
    where.push("LOWER(status) = ?");
    params.push(f.status.toLowerCase());
  }
  const sql = where.join(" AND ");

  const total = (
    conn.prepare(`SELECT COUNT(*) AS n FROM people WHERE ${sql}`).get(...params) as { n: number }
  ).n;
  const rows = conn
    .prepare(
      `SELECT id, name, headline, title, company, location, warmth, why_warm, likely_hm,
              status, url, last_post_at
         FROM people WHERE ${sql}
        ORDER BY warmth DESC, COALESCE(name,'') ASC
        LIMIT ?`,
    )
    .all(...params, f.limit) as any[];

  if (asJson) {
    console.log(
      JSON.stringify(
        {
          matched: total,
          returned: rows.length,
          people: rows.map((r) => ({ ...r, why_warm: parseList(r.why_warm) })),
        },
        null,
        2,
      ),
    );
    return;
  }

  if (!rows.length) {
    console.log("No people match those filters.");
    console.log("Fill your referral graph by running this exact line:  npm run find-people");
    console.log("Or ask Claude:  /build-referral-graph");
    return;
  }

  table(
    [
      ["WARM", "NAME", "TITLE", "COMPANY", "STATUS", "HM", "WHY WARM"],
      ...rows.map((r) => [
        warmthCell(r.warmth),
        r.name,
        r.title ?? r.headline,
        r.company,
        r.status,
        r.likely_hm ? "yes" : "",
        parseList(r.why_warm).join(" · "),
      ]),
    ],
    [5, 22, 28, 18, 10, 3, 40],
    [true, false, false, false, false, false, false],
  );

  console.log(`\n${rows.length} of ${plural(total, "person", "people")}.`);
  if (rows.every((r) => r.warmth === null)) {
    console.log(
      "WARM is empty on every row because nobody has been ranked yet. Add VOYAGE_API_KEY to\n" +
        "job-lab/.env and run npm run embed — or work down the list by title instead.",
    );
  }
  console.log(
    "Nothing here contacts anyone. To draft an ask, tell Claude:  /referral-request <name> <company>",
  );
}

function printSignals(f: Filters, asJson: boolean) {
  const conn = db();
  const where: string[] = ["1 = 1"];
  const params: any[] = [];

  if (f.company) {
    where.push("LOWER(COALESCE(company,'')) LIKE ?");
    params.push(`%${f.company.toLowerCase()}%`);
  }
  if (f.q) {
    where.push("LOWER(COALESCE(text,'')) LIKE ?");
    params.push(`%${f.q.toLowerCase()}%`);
  }
  if (f.daysBack !== undefined) {
    where.push("COALESCE(posted_at,'') >= ?");
    params.push(sinceDate(f.daysBack));
  }

  const rows = conn
    .prepare(
      `SELECT id, company, author, kind, posted_at, url, text FROM signals
        WHERE ${where.join(" AND ")}
        ORDER BY COALESCE(posted_at,'') DESC LIMIT ?`,
    )
    .all(...params, f.limit) as any[];

  if (asJson) {
    console.log(JSON.stringify({ returned: rows.length, signals: rows }, null, 2));
    return;
  }
  if (!rows.length) {
    console.log("No hiring signals saved yet.");
    console.log("Collect them by running this exact line:  npm run watch");
    return;
  }

  table(
    [
      ["DATE", "COMPANY", "AUTHOR", "KIND", "POST"],
      ...rows.map((r) => [day(r.posted_at), r.company, r.author, r.kind, r.text]),
    ],
    [10, 18, 22, 12, 60],
    [false, false, false, false, false],
  );
  console.log(
    `\n${plural(rows.length, "signal")}. A signal is a lead, not a posting — check it before you act on it.`,
  );
}

function printStats() {
  const conn = db();
  const one = (sql: string) => (conn.prepare(sql).get() as { n: number } | undefined)?.n ?? 0;

  const lines: [string, string | number][] = [
    ["jobs", one(`SELECT COUNT(*) AS n FROM jobs`)],
    ["  scored (fit)", one(`SELECT COUNT(*) AS n FROM jobs WHERE fit IS NOT NULL`)],
    ["  duplicates", one(`SELECT COUNT(*) AS n FROM jobs WHERE duplicate_of IS NOT NULL`)],
    ["  hidden", one(`SELECT COUNT(*) AS n FROM jobs WHERE status = 'hidden'`)],
    ["companies", one(`SELECT COUNT(DISTINCT company) AS n FROM jobs`)],
    [
      "archetypes",
      one(`SELECT COUNT(DISTINCT archetype) AS n FROM jobs WHERE archetype IS NOT NULL`),
    ],
    ["people", one(`SELECT COUNT(*) AS n FROM people`)],
    ["  ranked (warmth)", one(`SELECT COUNT(*) AS n FROM people WHERE warmth IS NOT NULL`)],
    ["  likely hiring mgr", one(`SELECT COUNT(*) AS n FROM people WHERE likely_hm = 1`)],
    ["signals", one(`SELECT COUNT(*) AS n FROM signals`)],
    ["embeddings", one(`SELECT COUNT(*) AS n FROM embeddings`)],
    ["last scrape", getMeta("last_scrape") ?? DASH],
    ["last embed", getMeta("last_embed") ?? DASH],
    ["last export", getMeta("last_export") ?? DASH],
  ];
  for (const [k, v] of lines) console.log(`  ${pad(k, 20)} ${v === "" ? DASH : v}`);

  const byStatus = conn
    .prepare(`SELECT status, COUNT(*) AS n FROM jobs GROUP BY status ORDER BY n DESC`)
    .all() as { status: string; n: number }[];
  if (byStatus.length) {
    console.log("");
    for (const s of byStatus) console.log(`  ${pad(String(s.status), 20)} ${s.n}`);
  }
  if (isEmptyDb()) {
    console.log("\nThe database is empty. Fill it by running this exact line:  npm run find-jobs");
  }
}

if (require.main === module) {
  const o = parse(SPEC);

  void main(async () => {
    const asked = o.num("limit", 25);
    const limit = Math.max(1, Math.min(MAX_LIMIT, Math.floor(asked)));
    if (asked > MAX_LIMIT) {
      console.log(`(--limit capped at ${MAX_LIMIT} rows so this never floods your terminal.)\n`);
    }

    const f: Filters = {
      q: o.str("q"),
      company: o.str("company"),
      minFit: o.num("min-fit", NaN),
      daysBack: o.num("days-back", NaN),
      status: o.str("status"),
      limit,
    };
    if (f.minFit !== undefined && !Number.isFinite(f.minFit)) f.minFit = undefined;
    if (f.daysBack !== undefined && !Number.isFinite(f.daysBack)) f.daysBack = undefined;

    const asJson = o.bool("json");
    if (o.bool("stats")) printStats();
    else if (o.bool("people")) printPeople(f, asJson);
    else if (o.bool("signals")) printSignals(f, asJson);
    else printJobs(f, asJson);
  });
}
