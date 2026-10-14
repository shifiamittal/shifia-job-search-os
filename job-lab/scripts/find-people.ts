/**
 * npm run find-people — find the people at your target companies who could
 * plausibly refer you, and save them locally.
 *
 *   npm run find-people
 *   npm run find-people -- --company Stripe --company Ramp
 *   npm run find-people -- --max 10 --limit-companies 3
 *   npm run find-people -- --dry-run
 *   npm run find-people -- --help
 *
 * COSTS APIFY CREDITS.
 *
 * We read public company pages through Apify. Your own LinkedIn account is never
 * touched, nobody is contacted, no connection request is sent, no message is
 * sent. Everything the OS writes is a draft that you send by hand.
 */
import "dotenv/config";
import { db, upsertPerson, setMeta, type PersonRow } from "../src/db";
import { ACTORS, run, normalizePerson, estimateCost } from "../src/apify";
import { likelyHiringManager } from "../src/fit";
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
  targetCompanies,
} from "./_lib";

const SPEC: CommandSpec = {
  command: "npm run find-people",
  summary:
    "Find who at each target company could refer you. Costs Apify credit: about " +
    "$0.10 per company at the default cap. Nobody is contacted.",
  flags: [
    {
      name: "company",
      desc: "a company to look at (repeat, or comma-separate)",
      placeholder: '"<company>"',
    },
    {
      name: "max",
      type: "number",
      desc: "people to keep per company",
      placeholder: "<number>",
    },
    {
      name: "limit-companies",
      type: "number",
      default: 8,
      desc: "how many companies to do in this run, so the first run stays cheap",
      placeholder: "<number>",
    },
    {
      name: "function",
      desc: 'your function, e.g. --function design (default: read from your job titles)',
      placeholder: "<word>",
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
    "npm run find-people",
    "npm run find-people -- --company Stripe --company Figma",
    "npm run find-people -- --max 10 --limit-companies 3",
    "npm run find-people -- --dry-run",
  ],
  notes: [
    "Companies come from context-library/target-companies.md unless you name them",
    "with --company. To build that list, paste this into Claude:",
    "    /company-research generate target list",
    "",
    "I keep people whose job title makes a referral plausible: your function, an",
    "adjacent function, a likely hiring manager, or a recruiter. Everyone else is",
    "left out so the list stays short enough to act on.",
    "",
    "I never connect, never message and never log in. Drafts only.",
  ],
};

/** Functions that sit next to most knowledge work and can still pass a resume on. */
const ADJACENT = [
  "design",
  "ux",
  "user research",
  "researcher",
  "engineer",
  "engineering",
  "software",
  "data",
  "analytics",
  "analyst",
  "growth",
  "marketing",
  "program manager",
  "project manager",
  "operations",
  "strategy",
  "business operations",
  "partnerships",
  "solutions",
  "customer success",
];

const RECRUITER = [
  "recruiter",
  "recruiting",
  "talent acquisition",
  "talent partner",
  "sourcer",
  "people ops",
  "human resources",
];

/** Words that describe seniority, not function. Dropped when reading your titles. */
const SENIORITY = new Set([
  "senior",
  "sr",
  "staff",
  "principal",
  "lead",
  "junior",
  "associate",
  "head",
  "of",
  "and",
  "the",
  "ii",
  "iii",
  "iv",
  "manager",
  "mgr",
  "director",
  "vp",
  "chief",
  "group",
]);

/**
 * The words that describe your function, taken from the titles you search for.
 * "Senior Product Manager" -> ["product"]. "Staff Data Scientist" -> ["data","scientist"].
 */
function functionTerms(titles: string[], override: string[]): string[] {
  if (override.length) return override.map((s) => s.toLowerCase());
  const terms = new Set<string>();
  for (const t of titles) {
    for (const w of t.toLowerCase().split(/[^a-z]+/)) {
      if (w.length > 2 && !SENIORITY.has(w)) terms.add(w);
    }
  }
  if (!terms.size) terms.add("product");
  return [...terms];
}

type Bucket = "same function" | "likely hiring manager" | "adjacent function" | "recruiter";

/**
 * Is this person a plausible referrer? Ranked, because a company page returns
 * salespeople and warehouse staff alongside the four people who matter.
 */
function classify(
  person: PersonRow,
  terms: string[],
): { bucket: Bucket; score: number; hm: boolean } | null {
  const title = `${person.title ?? ""} ${person.headline ?? ""}`.trim();
  if (!title) return null;
  const t = ` ${title.toLowerCase()} `;

  const same = terms.some((term) => t.includes(term));
  const adjacent = ADJACENT.some((w) => t.includes(w));
  const recruiter = RECRUITER.some((w) => t.includes(w));
  const hm = likelyHiringManager({ title: person.title, headline: person.headline });

  if (same && hm) return { bucket: "likely hiring manager", score: 4, hm: true };
  if (same) return { bucket: "same function", score: 3, hm: false };
  if (recruiter) return { bucket: "recruiter", score: 2, hm: false };
  if (adjacent && hm) return { bucket: "likely hiring manager", score: 2, hm: true };
  if (adjacent) return { bucket: "adjacent function", score: 1, hm: false };
  return null;
}

main(async () => {
  const o = parse(SPEC);
  applyYes(o);

  const cfg = readSearchConfig();
  const dryRun = o.bool("dry-run");
  const perCompany = Math.max(1, Math.floor(o.num("max", cfg.max_people_per_company)));
  const companyLimit = Math.max(1, Math.floor(o.num("limit-companies", 8)));
  const terms = functionTerms(cfg.titles, o.list("function"));

  let companies = o.list("company");
  let source = "the --company flags you typed";
  if (!companies.length && cfg.companies.length) {
    companies = cfg.companies;
    source = "the companies list in job-lab/search.json";
  }
  if (!companies.length) {
    companies = targetCompanies();
    source = "context-library/target-companies.md";
  }
  if (!companies.length) {
    throw problem(
      "I do not know which companies to look at, so there is nobody to find.",
      "Either name them yourself, like this:",
      "    npm run find-people -- --company Stripe --company Figma",
      "Or build the list first. Open Claude in this folder and paste:",
      "    /company-research generate target list",
    );
  }

  const chosen = companies.slice(0, companyLimit);
  // Fetch a little more than we keep, because most people at a company are not
  // plausible referrers and get dropped.
  const fetchPer = Math.min(100, Math.ceil(perCompany * 1.6));
  const totalItems = fetchPer * chosen.length;

  console.log("\nREFERRAL GRAPH\n");
  console.log(`  Companies from: ${source}`);
  console.log(
    `  This run:       ${plural(chosen.length, "company", "companies")}` +
      (companies.length > chosen.length
        ? ` (${companies.length - chosen.length} more waiting for the next run)`
        : ""),
  );
  console.log(`  Your function:  ${terms.join(", ")}`);
  console.log(`  Keeping:        up to ${perCompany} people per company\n`);

  if (dryRun) {
    console.log("  Dry run. I would look at:");
    for (const c of chosen) console.log(`    · ${c}`);
    console.log(
      `\n  Cost if you run it for real: about ${money(estimateCost("employees", totalItems))}.`,
    );
    console.log("  Nothing was fetched and nothing was charged.");
    console.log("  When you are ready, type this line:\n      npm run find-people\n");
    return;
  }

  await confirmCost(totalItems, estimateCost("employees", totalItems), "public profiles");

  const conn = db();
  let inserted = 0;
  let refreshed = 0;
  let dropped = 0;
  let unreadable = 0;
  const failures: string[] = [];

  for (const company of chosen) {
    process.stdout.write(`  ${pad(clip(company, 26), 28)}`);

    let items: Record<string, any>[] = [];
    try {
      items = await run<Record<string, any>>(
        ACTORS.employees,
        { companies: [company] },
        { maxItems: fetchPer, quiet: true },
      );
    } catch (err) {
      const msg = err instanceof Error ? err.message.split("\n")[0] : String(err);
      console.log("could not fetch");
      failures.push(`${company}: ${clip(msg, 100)}`);
      continue;
    }

    const ranked: Array<{ person: PersonRow; bucket: Bucket; score: number; hm: boolean }> = [];
    for (const item of items) {
      const person = normalizePerson(item);
      if (!person) {
        unreadable++;
        continue;
      }
      const verdict = classify(person, terms);
      if (!verdict) {
        dropped++;
        continue;
      }
      ranked.push({ person, ...verdict });
    }

    ranked.sort((a, b) => b.score - a.score);
    const keep = ranked.slice(0, perCompany);
    dropped += ranked.length - keep.length;

    let hms = 0;
    for (const r of keep) {
      const existing = conn
        .prepare(`SELECT first_seen, status FROM people WHERE id = ?`)
        .get(r.person.id) as { first_seen: string | null; status: string } | undefined;

      upsertPerson({
        ...r.person,
        company: r.person.company ?? company,
        likely_hm: r.hm ? 1 : 0,
        // The only thing we can honestly claim at this point is how their title
        // relates to yours. Real overlaps — same employer, same school, same
        // city — are computed later, from full profiles, by npm run embed.
        why_warm: r.person.why_warm ?? JSON.stringify([r.bucket]),
        // Status is yours to set. A re-scrape must never demote someone you have
        // already spoken to back to "cold".
        status: (existing?.status as PersonRow["status"]) ?? "cold",
        first_seen: existing?.first_seen ?? r.person.first_seen ?? nowIso(),
        last_seen: nowIso(),
      });

      if (r.hm) hms++;
      if (existing) refreshed++;
      else inserted++;
    }

    console.log(`${pad(plural(keep.length, "person", "people"), 12)}${hms ? `${hms} likely HM` : ""}`);
  }

  if (unreadable > 0 && inserted === 0 && refreshed === 0) {
    throw problem(
      `Apify returned ${unreadable} results, but none of them looked like people.`,
      "The LinkedIn actor has probably changed the shape of its output.",
      "Paste this into Claude, including this whole message:",
      '    "normalizePerson in job-lab/src/apify.ts no longer matches the employees actor"',
      "Nothing was saved and your context library was not touched.",
    );
  }

  setMeta("last_find_people", nowIso());

  const total = (conn.prepare(`SELECT COUNT(*) AS n FROM people`).get() as { n: number }).n;
  const hmTotal = (
    conn.prepare(`SELECT COUNT(*) AS n FROM people WHERE likely_hm = 1`).get() as { n: number }
  ).n;

  console.log(
    `\n  ${inserted} new, ${refreshed} already known, ${dropped} left out because their` +
      ` job title\n  made a referral unlikely.`,
  );
  console.log(`  ${plural(total, "person", "people")} saved in total, ${hmTotal} of them likely hiring managers.`);

  if (failures.length) {
    console.log(`\n  ${plural(failures.length, "company", "companies")} did not come back:`);
    for (const f of failures) console.log(`    · ${f}`);
  }

  console.log(`\n  WHAT TO DO NEXT`);
  console.log(`    1. Rank them by how much their background overlaps with yours:`);
  console.log(`         npm run embed`);
  console.log(`       (needs VOYAGE_API_KEY. Skip it if you do not have one.)`);
  console.log(`    2. Get full profiles for the shortlist only:`);
  console.log(`         npm run enrich`);
  console.log(`    3. Open Claude in this folder and paste:`);
  console.log(`         /build-referral-graph`);
  console.log(`\n  Nothing was sent to anyone. Every message stays a draft until you`);
  console.log(`  read it and send it yourself.\n`);
});
