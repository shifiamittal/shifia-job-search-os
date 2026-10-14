/**
 * npm run watch — the weekly listening pass. Two halves:
 *
 *   1. the newest post from each person you are already talking to, so your next
 *      message opens with something real instead of "hope you're well";
 *   2. hiring-signal posts at your target companies — "we're hiring", "joining",
 *      "my team is growing" — which is how you hear about a role before it
 *      reaches the job board.
 *
 *   npm run watch
 *   npm run watch -- --max-people 10 --max-signals 20
 *   npm run watch -- --no-signals
 *   npm run watch -- --dry-run
 *   npm run watch -- --help
 *
 * COSTS APIFY CREDITS. Public posts only. Nothing is liked, commented on,
 * followed or sent. Your LinkedIn account is never touched.
 */
import "dotenv/config";
import { db, upsertPerson, upsertSignal, setMeta, type PersonRow } from "../src/db";
import {
  ACTORS,
  run,
  normalizeSignal,
  normalizeLastPost,
  estimateCost,
} from "../src/apify";
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
  targetCompanies,
} from "./_lib";

const SPEC: CommandSpec = {
  command: "npm run watch",
  summary:
    "Fresh posts from the people you are talking to, plus hiring signals at your " +
    "target companies. Costs Apify credit: about $0.30 at the default caps.",
  flags: [
    {
      name: "max-people",
      type: "number",
      default: 25,
      desc: "how many contacts to check",
      placeholder: "<number>",
    },
    {
      name: "include-cold",
      type: "boolean",
      desc: "also check people you have not contacted yet",
    },
    {
      name: "max-signals",
      type: "number",
      default: 40,
      desc: "how many hiring-signal posts to keep",
      placeholder: "<number>",
    },
    {
      name: "companies",
      type: "number",
      default: 6,
      desc: "how many target companies to scan for hiring signals",
      placeholder: "<number>",
    },
    {
      name: "company",
      desc: "scan this company only (repeat, or comma-separate)",
      placeholder: '"<company>"',
    },
    { name: "posts", type: "boolean", default: true, desc: "check contacts' posts (--no-posts to skip)" },
    {
      name: "signals",
      type: "boolean",
      default: true,
      desc: "search for hiring signals (--no-signals to skip)",
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
    "npm run watch",
    "npm run watch -- --max-people 10",
    "npm run watch -- --no-signals",
    "npm run watch -- --dry-run",
  ],
  notes: [
    "A contact's newest post becomes the opening line of your next draft in",
    "/connection-request and /hiring-manager-msg. Hiring signals show up in the",
    "job feed digest and on the dashboard.",
    "",
    "Nothing is ever sent for you. Every message is a draft until you send it.",
  ],
};

/** The searches that surface a role before it is posted. */
const SIGNAL_QUERIES: Array<{ phrase: string; kind: string }> = [
  { phrase: `"we're hiring"`, kind: "hiring" },
  { phrase: `"joining"`, kind: "joined" },
  { phrase: `"my team is growing"`, kind: "hiring" },
];

/**
 * A keyword search returns near misses, and a wrong hiring signal is worse than
 * no signal: it sends someone to write a work product for a role that does not
 * exist. So the post text has to actually contain one of these.
 */
const CONFIRMING_PHRASES = [
  "we're hiring",
  "we are hiring",
  "i'm hiring",
  "i am hiring",
  "now hiring",
  "hiring for",
  "we're growing",
  "team is growing",
  "join my team",
  "join our team",
  "open role",
  "open roles",
  "open position",
  "joining",
  "excited to announce",
];

type Row = Pick<
  PersonRow,
  | "id"
  | "name"
  | "headline"
  | "title"
  | "company"
  | "location"
  | "url"
  | "status"
  | "first_seen"
>;

const profileKey = (u: string | null | undefined): string =>
  !u ? "" : (String(u).match(/\/in\/([^/?#]+)/)?.[1] ?? String(u)).toLowerCase();

main(async () => {
  const o = parse(SPEC);
  applyYes(o);

  const dryRun = o.bool("dry-run");
  const doPosts = o.bool("posts", true);
  const doSignals = o.bool("signals", true);
  const maxPeople = Math.max(1, Math.floor(o.num("max-people", 25)));
  const maxSignals = Math.max(1, Math.floor(o.num("max-signals", 40)));
  const companyLimit = Math.max(1, Math.floor(o.num("companies", 6)));
  const includeCold = o.bool("include-cold");

  if (!doPosts && !doSignals) {
    throw problem(
      "You switched off both halves of this command, so there is nothing to do.",
      "Drop one of the two flags. For example:",
      "    npm run watch -- --no-signals",
    );
  }

  const conn = db();

  // "Not cold" means you have already requested, connected, replied or been
  // referred — the people whose next message actually matters.
  const statusFilter = includeCold ? "" : `AND COALESCE(status, 'cold') <> 'cold'`;
  const people: Row[] = doPosts
    ? (conn
        .prepare(
          `SELECT id, name, headline, title, company, location, url, status, first_seen
             FROM people
            WHERE url IS NOT NULL AND TRIM(COALESCE(url, '')) <> '' ${statusFilter}
            ORDER BY CASE WHEN warmth IS NULL THEN 1 ELSE 0 END,
                     warmth DESC,
                     COALESCE(last_post_at, '') ASC
            LIMIT ?`,
        )
        .all(maxPeople) as Row[])
    : [];

  let companies = o.list("company");
  companies = (companies.length ? companies : targetCompanies()).slice(0, companyLimit);
  const signalsOn = doSignals && companies.length > 0;

  const postItems = people.length * 3;
  const perQuery = signalsOn
    ? Math.max(5, Math.ceil(maxSignals / (SIGNAL_QUERIES.length * companies.length)))
    : 0;
  const signalItems = signalsOn ? perQuery * SIGNAL_QUERIES.length * companies.length : 0;
  const totalCost = estimateCost("posts", postItems) + estimateCost("postSearch", signalItems);

  console.log("\nWATCH\n");
  console.log(
    `  Contacts to check: ${people.length}` +
      (includeCold ? "  (including people you have not contacted yet)" : ""),
  );
  console.log(
    `  Hiring signals:    ` +
      (signalsOn
        ? `${plural(companies.length, "company", "companies")}, up to ${maxSignals} posts`
        : "skipped"),
  );

  if (doPosts && people.length === 0) {
    console.log(`\n  Nobody has a status other than "cold" yet, so there are no contacts`);
    console.log(`  to check. Either send a few connection requests first, or type:`);
    console.log(`      npm run watch -- --include-cold --max-people 5`);
  }
  if (doSignals && companies.length === 0) {
    console.log(`\n  Your target company list is empty, so the hiring-signal search has`);
    console.log(`  nothing to scan. Open Claude in this folder and paste:`);
    console.log(`      /company-research generate target list`);
  }
  console.log("");

  if (dryRun) {
    console.log("  Dry run.");
    if (people.length) {
      console.log("  I would read the newest posts from:");
      for (const p of people.slice(0, 10)) {
        console.log(`    · ${pad(clip(p.name, 24), 26)}${clip(p.company, 22)}`);
      }
      if (people.length > 10) console.log(`    ...and ${people.length - 10} more.`);
    }
    if (signalsOn) {
      console.log(`  I would search these phrases at ${companies.join(", ")}:`);
      for (const q of SIGNAL_QUERIES) console.log(`    · ${q.phrase}`);
    }
    console.log(`\n  Cost if you run it for real: about ${money(totalCost)}.`);
    console.log("  Nothing was fetched and nothing was charged.");
    console.log("  When you are ready, type this line:\n      npm run watch\n");
    return;
  }

  if (!people.length && !signalsOn) {
    console.log("  Nothing to do this run, so nothing was fetched and nothing was charged.\n");
    return;
  }

  await confirmCost(postItems + signalItems, totalCost, "public posts");

  /* ------------------------------------------------ half one: contact posts */

  let updatedPeople = 0;
  if (people.length) {
    process.stdout.write(`  ${pad(`Newest post from ${plural(people.length, "contact")}`, 48)}`);

    let items: Record<string, any>[] = [];
    try {
      items = await run<Record<string, any>>(
        ACTORS.posts,
        {
          targetUrls: people.map((p) => p.url),
          maxPosts: 3,
          includeReposts: false,
        },
        { maxItems: postItems, quiet: true },
      );
    } catch (err) {
      // Losing this half must not lose the hiring signals in the other half.
      console.log("could not fetch");
      items = [];
    }

    const newest = new Map<string, { text: string; url: string | null; posted_at: string | null }>();
    for (const item of items) {
      const post = normalizeLastPost(item);
      if (!post) continue;
      // The author URL is the only reliable way back to the person.
      const author =
        (item.author && typeof item.author === "object" ? (item.author as any) : {}) ?? {};
      const key = profileKey(
        author.linkedinUrl ?? author.profileUrl ?? author.url ?? item.authorUrl,
      );
      if (!key) continue;
      const prev = newest.get(key);
      const newer =
        !prev ||
        (post.posted_at && prev.posted_at && post.posted_at > prev.posted_at) ||
        (post.posted_at && !prev.posted_at);
      if (newer) newest.set(key, post);
    }

    for (const p of people) {
      const post = newest.get(profileKey(p.url));
      if (!post) continue;
      upsertPerson({
        id: p.id,
        last_post_text: post.text,
        last_post_url: post.url,
        last_post_at: post.posted_at,
        last_seen: nowIso(),
      });
      updatedPeople++;
    }
    if (items.length) console.log(`${plural(updatedPeople, "fresh post")}`);
  }

  /* --------------------------------------------- half two: hiring signals */

  let saved = 0;
  let read = 0;
  const highlights: Array<{ company: string; author: string; text: string }> = [];

  if (signalsOn) {
    outer: for (const company of companies) {
      for (const q of SIGNAL_QUERIES) {
        if (saved >= maxSignals) break outer;
        const search = `${q.phrase} ${company}`;
        process.stdout.write(`  ${pad(clip(search, 44), 48)}`);

        let items: Record<string, any>[] = [];
        try {
          items = await run<Record<string, any>>(
            ACTORS.postSearch,
            { search, postedLimit: "week" },
            { maxItems: perQuery, quiet: true },
          );
        } catch (err) {
          console.log("could not fetch");
          continue;
        }

        let here = 0;
        for (const item of items) {
          if (saved >= maxSignals) break;
          read++;
          const signal = normalizeSignal(item);
          if (!signal) continue;

          const text = String(signal.text ?? "").toLowerCase();
          if (!CONFIRMING_PHRASES.some((phrase) => text.includes(phrase))) continue;

          upsertSignal({
            ...signal,
            company: signal.company ?? company,
            kind: signal.kind ?? q.kind,
          });
          saved++;
          here++;
          if (highlights.length < 8) {
            highlights.push({
              company: signal.company ?? company,
              author: signal.author ?? "—",
              text: clip(signal.text, 64),
            });
          }
        }
        console.log(plural(here, "signal"));
      }
    }
  }

  setMeta("last_watch", nowIso());

  /* --------------------------------------------------------------- summary */

  console.log(
    `\n  ${plural(updatedPeople, "contact")} with a fresh post. ` +
      `${plural(saved, "hiring signal")} kept out of ${read} posts read.`,
  );

  if (highlights.length) {
    console.log(`\n  Worth a look`);
    for (const h of highlights) {
      console.log(`    ${pad(clip(h.company, 16), 18)}${pad(clip(h.author, 20), 22)}${h.text}`);
    }
  }

  console.log(`\n  WHAT TO DO NEXT`);
  console.log(`    1. Update the dashboard and the markdown digests:`);
  console.log(`         npm run export`);
  console.log(`    2. Open Claude in this folder and paste:`);
  console.log(`         /connection-request`);
  console.log(`       Your drafts now open with something the person actually posted.`);
  console.log(`    3. For a hiring signal, paste:`);
  console.log(`         /hiring-manager-msg`);
  console.log(`\n  Nothing was liked, commented on or sent. Every message is a draft`);
  console.log(`  until you read it and send it yourself.\n`);
});
