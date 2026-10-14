/**
 * npm run enrich — pull the full public profile for your referral shortlist only.
 *
 *   npm run enrich
 *   npm run enrich -- --top 5
 *   npm run enrich -- --min-warmth 0.6
 *   npm run enrich -- --company Stripe
 *   npm run enrich -- --dry-run
 *   npm run enrich -- --help
 *
 * COSTS APIFY CREDITS, and a full profile is the most expensive thing job-lab
 * fetches. So this only ever runs on a shortlist — never the whole table.
 *
 * Public data only. No login, no connection request, no message. What you get
 * back is the material for an honest warm-path line: same employer, same school,
 * same city. Never an invented one.
 */
import "dotenv/config";
import { db, upsertPerson, setMeta, type PersonRow } from "../src/db";
import { ACTORS, run, normalizePerson, estimateCost } from "../src/apify";
import { confirmCost, main, type CommandSpec } from "../src/args";
import { applyYes, clip, money, nowIso, pad, parse, plural, problem } from "./_lib";

const SPEC: CommandSpec = {
  command: "npm run enrich",
  summary:
    "Fetch full public profiles for the few people you actually plan to ask. " +
    "Costs Apify credit: about $0.06 for ten people.",
  flags: [
    {
      name: "top",
      type: "number",
      default: 20,
      desc: "how many people to enrich",
      placeholder: "<number>",
    },
    {
      name: "min-warmth",
      type: "number",
      desc: "only people at or above this warmth, between 0 and 1 (needs npm run embed first)",
      placeholder: "<0-1>",
    },
    {
      name: "company",
      desc: "only this company (repeat, or comma-separate)",
      placeholder: '"<company>"',
    },
    { name: "hm-only", type: "boolean", desc: "only people flagged as likely hiring managers" },
    { name: "redo", type: "boolean", desc: "include people who were enriched already" },
    {
      name: "dry-run",
      type: "boolean",
      desc: "print the shortlist and stop; nothing is fetched and nothing is charged",
    },
    {
      name: "yes",
      type: "boolean",
      desc: "skip the three second pause before spending Apify credit",
    },
  ],
  examples: [
    "npm run enrich",
    "npm run enrich -- --top 5",
    "npm run enrich -- --min-warmth 0.6",
    "npm run enrich -- --company Stripe --hm-only",
    "npm run enrich -- --dry-run",
  ],
  notes: [
    "Order: likely hiring managers first, then warmth highest first, then the",
    "people found most recently. Without a Voyage key there is no warmth, so the",
    "order is hiring managers first and then most recently found.",
    "",
    "Run npm run find-people before this one — it is the command that finds",
    "people in the first place.",
  ],
};

type Row = Pick<
  PersonRow,
  "id" | "name" | "title" | "company" | "url" | "warmth" | "likely_hm" | "status" | "first_seen"
>;

/** The bit of a LinkedIn URL that identifies the person, for matching results back. */
const profileKey = (u: string | null | undefined): string =>
  !u ? "" : (String(u).match(/\/in\/([^/?#]+)/)?.[1] ?? String(u)).toLowerCase();

main(async () => {
  const o = parse(SPEC);
  applyYes(o);

  const dryRun = o.bool("dry-run");
  const top = Math.max(1, Math.floor(o.num("top", 20)));
  const companies = o.list("company");
  const hmOnly = o.bool("hm-only");
  const redo = o.bool("redo");
  const minWarmth = o.num("min-warmth", NaN);
  const useWarmth = Number.isFinite(minWarmth);

  const conn = db();

  const where = ["url IS NOT NULL", "TRIM(COALESCE(url, '')) <> ''"];
  const params: Array<string | number> = [];
  if (!redo) where.push("COALESCE(enriched, 0) = 0");
  if (hmOnly) where.push("COALESCE(likely_hm, 0) = 1");
  if (companies.length) {
    where.push(`(${companies.map(() => "LOWER(company) = LOWER(?)").join(" OR ")})`);
    params.push(...companies);
  }
  if (useWarmth) {
    where.push("warmth IS NOT NULL AND warmth >= ?");
    params.push(minWarmth);
  }

  const rows = conn
    .prepare(
      `SELECT id, name, title, company, url, warmth, likely_hm, status, first_seen
         FROM people
        WHERE ${where.join(" AND ")}
        ORDER BY COALESCE(likely_hm, 0) DESC,
                 CASE WHEN warmth IS NULL THEN 1 ELSE 0 END,
                 warmth DESC,
                 COALESCE(first_seen, '') DESC
        LIMIT ?`,
    )
    .all(...params, top) as Row[];

  if (!rows.length) {
    const people = (conn.prepare(`SELECT COUNT(*) AS n FROM people`).get() as { n: number }).n;
    if (people === 0) {
      throw problem(
        "There is nobody in your local database yet, so there is nobody to enrich.",
        "Type this line first, from inside the job-lab folder:",
        "    npm run find-people",
      );
    }
    if (useWarmth) {
      const scored = (
        conn.prepare(`SELECT COUNT(*) AS n FROM people WHERE warmth IS NOT NULL`).get() as {
          n: number;
        }
      ).n;
      throw scored === 0
        ? problem(
            "Nobody has a warmth score yet, so --min-warmth has nothing to compare against.",
            "Warmth comes from Voyage. Either add VOYAGE_API_KEY to job-lab/.env and type:",
            "    npm run embed",
            "Or drop the flag and use a plain count instead:",
            "    npm run enrich -- --top 10",
          )
        : problem(
            `Nobody is at or above warmth ${minWarmth}, so the shortlist is empty.`,
            "Try a lower number, for example:",
            "    npm run enrich -- --min-warmth 0.4",
          );
    }
    throw problem(
      "Everyone matching those filters has been enriched already.",
      "To fetch them again anyway:",
      "    npm run enrich -- --redo --top 5",
      "Or find more people first:",
      "    npm run find-people",
    );
  }

  console.log("\nENRICH SHORTLIST\n");
  for (const r of rows) {
    const warmth = r.warmth === null || r.warmth === undefined ? "—" : r.warmth.toFixed(2);
    console.log(
      `  ${pad(clip(r.name, 22), 24)}${pad(clip(r.title, 30), 32)}` +
        `${pad(clip(r.company, 16), 18)}warmth ${pad(warmth, 6)}${r.likely_hm ? "likely HM" : ""}`,
    );
  }
  console.log(`\n  ${plural(rows.length, "person", "people")} on the shortlist.`);

  if (dryRun) {
    console.log(
      `  Dry run. Cost if you run it for real: about ${money(estimateCost("profile", rows.length))}.`,
    );
    console.log("  Nothing was fetched and nothing was charged.");
    console.log("  When you are ready, type this line:\n      npm run enrich\n");
    return;
  }

  await confirmCost(rows.length, estimateCost("profile", rows.length), "full profiles");

  const byKey = new Map<string, Row>();
  for (const r of rows) byKey.set(profileKey(r.url), r);

  let items: Record<string, any>[] = [];
  try {
    items = await run<Record<string, any>>(
      ACTORS.profile,
      { profiles: rows.map((r) => r.url) },
      { maxItems: rows.length, quiet: true },
    );
  } catch (err) {
    const msg = err instanceof Error ? err.message.split("\n")[0] : String(err);
    throw problem(
      `Apify could not fetch those profiles: ${clip(msg, 140)}`,
      "Try a smaller batch first:",
      "    npm run enrich -- --top 3",
      "If it still fails, the actor input may have changed. I send the profile URLs",
      `under the key "profiles" to ${ACTORS.profile}.`,
      "Paste that sentence and this whole message into Claude.",
    );
  }

  let updated = 0;
  let unmatched = 0;
  for (const item of items) {
    const p = normalizePerson(item);
    if (!p) {
      unmatched++;
      continue;
    }
    // Match the result back to the row we asked for: ids and vanity URLs can
    // come back in a different case, or redirected.
    const matched = rows.find((r) => r.id === p.id) ?? byKey.get(profileKey(p.url));
    if (!matched) {
      unmatched++;
      continue;
    }

    upsertPerson({
      ...p,
      id: matched.id,
      // Keep what we already knew wherever the profile payload is empty.
      name: p.name ?? matched.name,
      title: p.title ?? matched.title,
      company: p.company ?? matched.company,
      url: p.url ?? matched.url,
      status: matched.status,
      likely_hm: matched.likely_hm,
      enriched: 1,
      first_seen: matched.first_seen ?? nowIso(),
      last_seen: nowIso(),
    });
    updated++;
  }

  if (updated === 0) {
    throw problem(
      `Apify returned ${items.length} results, but none of them matched the people I asked for.`,
      "The profile actor has probably changed the shape of its output.",
      "Paste this into Claude, including this whole message:",
      '    "normalizePerson in job-lab/src/apify.ts no longer matches the profile actor"',
      "Nothing was saved and your context library was not touched.",
    );
  }

  setMeta("last_enrich", nowIso());

  console.log(
    `\n  ${plural(updated, "profile")} enriched` +
      (unmatched ? `, ${unmatched} came back in a shape I could not match to anyone.` : "."),
  );
  console.log(`\n  WHAT TO DO NEXT`);
  console.log(`    1. Re-rank warmth now that there is more to go on:`);
  console.log(`         npm run embed`);
  console.log(`    2. Update the dashboard and the markdown digests:`);
  console.log(`         npm run export`);
  console.log(`    3. Open Claude in this folder and paste:`);
  console.log(`         /build-referral-graph`);
  console.log(`\n  Nothing was sent to anyone. Every message stays a draft until you`);
  console.log(`  read it and send it yourself.\n`);
});
