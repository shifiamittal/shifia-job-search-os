/**
 * npm run find-jobs — fill your job feed from LinkedIn.
 *
 *   npm run find-jobs
 *   npm run find-jobs -- --max 40
 *   npm run find-jobs -- --title "Group Product Manager" --location Remote
 *   npm run find-jobs -- --dry-run
 *   npm run find-jobs -- --help
 *
 * COSTS APIFY CREDITS. Everything you do with the results afterwards is free.
 *
 * OPTIONAL. Without APIFY_TOKEN this script stops with one sentence and the rest
 * of the Job Search OS keeps working: copy a job description, paste it into
 * Claude, and run /quick-start.
 *
 * We read public listings through Apify's proxies. Your own LinkedIn account is
 * never touched: no login, no cookie, no session.
 */
import "dotenv/config";
import { db, upsertJob, setMeta, type JobRow } from "../src/db";
import { ACTORS, run, normalizeJob, estimateCost } from "../src/apify";
import { confirmCost, main, type CommandSpec } from "../src/args";
import {
  applyYes,
  clip,
  money,
  nowIso,
  pad,
  parse,
  plural,
  problem,
  readSearchConfig,
} from "./_lib";

const SPEC: CommandSpec = {
  command: "npm run find-jobs",
  summary:
    "Fetch matching jobs from LinkedIn into your local feed. Costs Apify credit: " +
    "about $0.24 for 60 jobs. Nothing is applied to and nothing is sent.",
  flags: [
    {
      name: "max",
      type: "number",
      desc: "most jobs to fetch in this run",
      placeholder: "<number>",
    },
    {
      name: "title",
      desc: 'job title to search, e.g. --title "Group Product Manager" (repeat, or comma-separate)',
      placeholder: '"<job title>"',
    },
    {
      name: "location",
      desc: 'where to look, e.g. --location "New York" (repeat, or comma-separate)',
      placeholder: '"<place>"',
    },
    {
      name: "company",
      desc: "only jobs at this company (repeat, or comma-separate)",
      placeholder: '"<company>"',
    },
    {
      name: "days",
      type: "number",
      desc: "only jobs posted in the last this many days",
      placeholder: "<number>",
    },
    {
      name: "dry-run",
      type: "boolean",
      desc: "print the plan and stop; nothing is fetched and nothing is charged",
    },
    {
      name: "yes",
      type: "boolean",
      desc: "skip the three second pause before spending Apify credit",
    },
  ],
  examples: [
    "npm run find-jobs",
    "npm run find-jobs -- --max 40",
    'npm run find-jobs -- --title "Group Product Manager" --location Remote',
    "npm run find-jobs -- --dry-run",
  ],
  notes: [
    "Your search settings live in job-lab/search.json. Paste /find-jobs into Claude",
    "and it writes that file for you from your career plan.",
    "",
    "No Apify token? You do not need one. Copy a job description, paste it into",
    "Claude, and type /quick-start.",
  ],
};

/** LinkedIn's posted-date filter only has these buckets. */
function postedBucket(days: number): string | null {
  if (days <= 1) return "24h";
  if (days <= 7) return "week";
  if (days <= 31) return "month";
  return null;
}

/** An excluded keyword anywhere in the title, company or description drops the row. */
function excludedBy(job: JobRow, words: string[]): string | null {
  if (!words.length) return null;
  const hay = `${job.role} ${job.company} ${job.description ?? ""}`.toLowerCase();
  return words.find((w) => w && hay.includes(w.toLowerCase())) ?? null;
}

main(async () => {
  const o = parse(SPEC);
  applyYes(o);

  const cfg = readSearchConfig();
  const titles = o.list("title").length ? o.list("title") : cfg.titles;
  const locations = o.list("location").length ? o.list("location") : cfg.locations;
  const companies = o.list("company").length ? o.list("company") : cfg.companies;
  const days = o.num("days", cfg.posted_within_days);
  const cap = Math.max(1, Math.floor(o.num("max", cfg.max_jobs_per_run)));
  const dryRun = o.bool("dry-run");

  if (!titles.length) {
    throw problem(
      "There are no job titles to search for, so there is nothing to look up.",
      "Open job-lab/search.json and put at least one title in the titles list, like this:",
      '    "titles": ["Product Manager"]',
      "Or paste this into Claude and it will fill the file in from your career plan:",
      "    /find-jobs",
    );
  }
  const places = locations.length ? locations : ["Remote"];

  // One search per title x location, with the cap spread evenly so a two-title
  // run does not spend everything on the first title.
  const pairs: Array<{ title: string; location: string; limit: number }> = [];
  const per = Math.max(5, Math.floor(cap / (titles.length * places.length)));
  for (const title of titles) {
    for (const location of places) pairs.push({ title, location, limit: per });
  }

  console.log("\nJOB FEED\n");
  console.log(`  Titles:    ${titles.join(", ")}`);
  console.log(`  Locations: ${places.join(", ")}`);
  console.log(`  Companies: ${companies.length ? companies.join(", ") : "any"}`);
  console.log(`  Posted:    in the last ${plural(days, "day")}`);
  console.log(`  Cap:       ${cap} jobs this run\n`);

  if (dryRun) {
    console.log(`  Dry run. I would make ${plural(pairs.length, "search", "searches")}:`);
    for (const p of pairs) console.log(`    · ${p.title} — ${p.location} (up to ${p.limit})`);
    console.log(`\n  Cost if you run it for real: about ${money(estimateCost("jobs", cap))}.`);
    console.log("  Nothing was fetched and nothing was charged.");
    console.log("  When you are ready, type this line:\n      npm run find-jobs\n");
    return;
  }

  await confirmCost(cap, estimateCost("jobs", cap), "jobs from LinkedIn");

  const conn = db();
  const seen = new Set<string>();
  let fetched = 0;
  let inserted = 0;
  let refreshed = 0;
  let excluded = 0;
  let unreadable = 0;
  const failures: string[] = [];
  let firstFailure: string | null = null;
  const fresh: JobRow[] = [];

  for (const p of pairs) {
    if (fetched >= cap) break;
    const limit = Math.min(p.limit, cap - fetched);
    process.stdout.write(`  ${pad(clip(`${p.title} — ${p.location}`, 46), 48)}`);

    let items: Record<string, any>[] = [];
    try {
      const bucket = postedBucket(days);
      // LinkedIn has no place called "Remote"; it is a workplace-type filter.
      const remote = /^remote$/i.test(p.location.trim());
      const where = remote ? "United States" : p.location;
      items = await run<Record<string, any>>(
        ACTORS.jobs,
        {
          // harvestapi/linkedin-job-search names these jobTitles/locations/company
          // and wants arrays. The singular keys are sent too so the run still
          // works if the actor is swapped for one using the older names.
          jobTitles: [p.title],
          locations: [where],
          title: p.title,
          location: where,
          ...(remote ? { workplaceType: ["remote"] } : {}),
          ...(companies.length ? { company: companies, companyName: companies } : {}),
          ...(bucket ? { postedLimit: bucket } : {}),
        },
        { maxItems: limit, quiet: true },
      );
    } catch (err) {
      // One failed search must not throw away the jobs the others found.
      const full = err instanceof Error ? err.message : String(err);
      firstFailure ??= full;
      const msg = full.split("\n")[0];
      console.log(`could not fetch`);
      failures.push(`${p.title} — ${p.location}: ${clip(msg, 100)}`);
      continue;
    }

    let added = 0;
    for (const item of items) {
      if (fetched >= cap) break;
      const job = normalizeJob(item);
      if (!job) {
        unreadable++;
        continue;
      }
      if (seen.has(job.id)) continue;
      seen.add(job.id);

      if (excludedBy(job, cfg.exclude_keywords)) {
        excluded++;
        continue;
      }

      const existing = conn.prepare(`SELECT first_seen FROM jobs WHERE id = ?`).get(job.id) as
        | { first_seen: string }
        | undefined;

      upsertJob({
        ...job,
        first_seen: existing?.first_seen ?? job.first_seen ?? nowIso(),
        last_seen: nowIso(),
      });

      if (existing) refreshed++;
      else {
        inserted++;
        fresh.push(job);
      }
      fetched++;
      added++;
    }
    console.log(plural(added, "job"));
  }

  if (unreadable > 0 && inserted === 0 && refreshed === 0) {
    throw problem(
      `Apify returned ${unreadable} results, but none of them looked like job posts.`,
      "The LinkedIn actor has probably changed the shape of its output.",
      "Paste this into Claude, including this whole message:",
      '    "normalizeJob in job-lab/src/apify.ts no longer matches the job actor output"',
      "Nothing was saved and your context library was not touched.",
    );
  }

  setMeta("last_find_jobs", nowIso());
  setMeta("last_scrape", nowIso());

  const total = (conn.prepare(`SELECT COUNT(*) AS n FROM jobs`).get() as { n: number }).n;

  console.log(
    `\n  ${inserted} new, ${refreshed} already known, ${excluded} dropped by your ` +
      `exclude_keywords.`,
  );
  console.log(`  ${plural(total, "job")} in the feed in total.`);

  if (failures.length) {
    console.log(`\n  ${plural(failures.length, "search", "searches")} did not come back:`);
    for (const f of failures) console.log(`    · ${f}`);
    if (firstFailure) console.log(`\n${firstFailure.replace(/^/gm, "    ")}\n`);
    console.log(`  You can run the command again; already-saved jobs are not re-charged.`);
  }

  if (fresh.length) {
    console.log(`\n  Newest additions`);
    for (const j of fresh.slice(0, 8)) {
      console.log(
        `    ${pad(clip(j.company, 20), 22)}${pad(clip(j.role, 36), 38)}${clip(j.location, 22)}`,
      );
    }
    if (fresh.length > 8) console.log(`    ...and ${fresh.length - 8} more.`);
  }

  console.log(`\n  WHAT TO DO NEXT`);
  console.log(`    1. Score the feed against your experience:`);
  console.log(`         npm run embed`);
  console.log(`       (needs VOYAGE_API_KEY. Skip it if you do not have one —`);
  console.log(`        the feed is then sorted by date instead of by fit.)`);
  console.log(`    2. Update the dashboard and the markdown digests:`);
  console.log(`         npm run export`);
  console.log(`    3. Open Claude in this folder and paste:`);
  console.log(`         /find-jobs\n`);
});
