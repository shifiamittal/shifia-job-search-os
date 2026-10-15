/**
 * npm run bootstrap — the one command you run on day one.
 *
 * It runs, in order: find-jobs, find-people, embed, export. Any step whose key
 * is missing is skipped with a friendly note instead of an error, because every
 * one of these steps is optional: the Job Search OS works with no keys at all by
 * pasting a job description into Claude.
 *
 *   npm run bootstrap
 *   npm run bootstrap -- --dry-run
 *   npm run bootstrap -- --jobs 100
 *   npm run bootstrap -- --help
 *
 * The caps here are deliberately small. A first run should cost well under a
 * dollar of Apify credit, and it prints the estimate before it spends anything.
 */
import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { estimateCost } from "../src/apify";
import { confirmCost, main, type CommandSpec } from "../src/args";
import {
  applyYes,
  clip,
  hasKey,
  labRoot,
  money,
  pad,
  parse,
  plural,
  readSearchConfig,
  targetCompanies,
} from "./_lib";

const SPEC: CommandSpec = {
  command: "npm run bootstrap",
  summary:
    "Fill your job feed and your referral list in one go, then build the dashboard. " +
    "Costs Apify credit: under a dollar at the default caps.",
  flags: [
    { name: "jobs", type: "number", default: 60, desc: "jobs to fetch", placeholder: "<number>" },
    {
      name: "companies",
      type: "number",
      default: 5,
      desc: "target companies to map out",
      placeholder: "<number>",
    },
    {
      name: "people",
      type: "number",
      default: 15,
      desc: "people to keep per company",
      placeholder: "<number>",
    },
    { name: "skip-jobs", type: "boolean", desc: "do not fetch jobs" },
    { name: "skip-people", type: "boolean", desc: "do not fetch people" },
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
    "npm run bootstrap",
    "npm run bootstrap -- --dry-run",
    "npm run bootstrap -- --jobs 100 --companies 8",
  ],
  notes: [
    "What each step needs, all in the file job-lab/.env:",
    "    find-jobs, find-people   APIFY_TOKEN",
    "    embed                    VOYAGE_API_KEY   (optional: fit scores and warmth)",
    "    export                   nothing at all, and it is always free",
    "",
    "No keys? That is a supported way to use this. Skip this command, copy a job",
    "description, paste it into Claude, and type /quick-start.",
  ],
};

type Step = {
  /** Matches both the npm script name and the file name. */
  name: string;
  args: string[];
  needs: "APIFY_TOKEN" | "VOYAGE_API_KEY" | null;
  costNote: string;
  cost: number;
  why: string;
  skip?: string;
};

/** Run one sibling script as its own process, streaming its output as it goes. */
function runStep(step: Step): string | null {
  const root = labRoot();
  const file = path.join(root, "scripts", `${step.name}.ts`);
  if (!fs.existsSync(file)) {
    return `I could not find scripts/${step.name}.ts, so I skipped that step.`;
  }

  // Run tsx's JS entry with this same node binary and no shell. Going through
  // tsx.cmd needs shell: true on Windows, and the shell splits any install path
  // that contains a space ("C:\March 2026 backup\...").
  const tsxCli = path.join(root, "node_modules", "tsx", "dist", "cli.mjs");
  const useLocal = fs.existsSync(tsxCli);
  const command = useLocal ? process.execPath : "npm";
  const argv = useLocal
    ? [tsxCli, path.join("scripts", `${step.name}.ts`), ...step.args]
    : ["run", step.name, "--", ...step.args];

  const res = spawnSync(command, argv, {
    cwd: root,
    stdio: "inherit",
    // The user already saw the price and agreed once. Do not make them wait
    // again in front of every child step.
    env: { ...process.env, JOB_LAB_YES: "1" },
    shell: !useLocal && process.platform === "win32",
  });

  if (res.error) {
    return (
      `The step "${step.name}" could not start (${clip(res.error.message, 70)}). ` +
      `Type this line to run it on its own: npm run ${step.name}`
    );
  }
  if (res.status !== 0) {
    return `The step "${step.name}" stopped early. Type this line to see why: npm run ${step.name}`;
  }
  return null;
}

main(async () => {
  const o = parse(SPEC);
  applyYes(o);

  const dryRun = o.bool("dry-run");
  const jobCap = Math.max(1, Math.floor(o.num("jobs", 60)));
  const companyCap = Math.max(1, Math.floor(o.num("companies", 5)));
  const peopleCap = Math.max(1, Math.floor(o.num("people", 15)));

  const apify = hasKey("APIFY_TOKEN");
  const voyage = hasKey("VOYAGE_API_KEY");

  console.log("\n=====================================================");
  console.log("  JOB SEARCH OS — first run");
  console.log("=====================================================\n");

  // Reading the config also writes the starter search.json if there is none, so
  // a first run never fails on a missing file.
  const cfg = readSearchConfig();
  const companies = targetCompanies();

  console.log(`  Looking for:  ${cfg.titles.join(", ")}`);
  console.log(`  Where:        ${cfg.locations.join(", ")}`);
  console.log(
    `  Companies:    ` +
      (companies.length
        ? `${plural(companies.length, "company", "companies")} in your target list`
        : "none in your target list yet"),
  );
  console.log(
    `  Keys found:   APIFY_TOKEN ${apify ? "yes" : "no"} · VOYAGE_API_KEY ${voyage ? "yes" : "no"}\n`,
  );

  // find-people fetches a little more than it keeps, so the estimate matches.
  const peopleItems =
    Math.ceil(peopleCap * 1.6) * Math.min(companyCap, Math.max(companies.length, 1));

  const steps: Step[] = [
    {
      name: "find-jobs",
      args: ["--max", String(jobCap)],
      needs: "APIFY_TOKEN",
      costNote: `up to ${jobCap} jobs`,
      cost: estimateCost("jobs", jobCap),
      why: "Fills your job feed, so your pipeline is not empty on day one.",
      skip: o.bool("skip-jobs") ? "you asked for --skip-jobs" : undefined,
    },
    {
      name: "find-people",
      args: ["--limit-companies", String(companyCap), "--max", String(peopleCap)],
      needs: "APIFY_TOKEN",
      costNote: `${companyCap} companies, ${peopleCap} people each`,
      cost: estimateCost("employees", peopleItems),
      why: "Finds who at each target company could refer you.",
      skip: o.bool("skip-people")
        ? "you asked for --skip-people"
        : companies.length === 0
          ? "your target company list is empty"
          : undefined,
    },
    {
      name: "embed",
      args: [],
      needs: "VOYAGE_API_KEY",
      costNote: "a few cents of Voyage tokens",
      cost: 0,
      why: "Scores every job against your real experience and ranks people by overlap.",
    },
    {
      name: "export",
      args: [],
      needs: null,
      costNote: "free",
      cost: 0,
      why: "Writes the dashboard and the markdown digests that Claude reads.",
    },
  ];

  const runnable: Step[] = [];
  const skipped: Array<{ step: Step; reason: string }> = [];
  for (const s of steps) {
    const reason =
      s.skip ??
      (s.needs === "APIFY_TOKEN" && !apify
        ? "APIFY_TOKEN is not in job-lab/.env"
        : s.needs === "VOYAGE_API_KEY" && !voyage
          ? "VOYAGE_API_KEY is not in job-lab/.env"
          : null);
    if (reason) skipped.push({ step: s, reason });
    else runnable.push(s);
  }

  console.log("  THE PLAN\n");
  if (runnable.length) {
    runnable.forEach((s, i) => {
      console.log(`   ${i + 1}. ${pad(s.name, 13)}${s.costNote}`);
      console.log(`      ${s.why}`);
    });
  } else {
    console.log("   Nothing to run — see the notes below.");
  }

  if (skipped.length) {
    console.log("\n  SKIPPING\n");
    for (const { step, reason } of skipped) {
      console.log(`   ·  ${pad(step.name, 13)}${reason}`);
      if (reason.includes("APIFY_TOKEN")) {
        console.log(`      Open the file job-lab/.env in any text editor and add this line:`);
        console.log(`          APIFY_TOKEN=apify_api_your_token_here`);
        console.log(`      A free token takes two minutes:`);
        console.log(`          https://console.apify.com/account/integrations`);
        console.log(`      Then type:  npm run ${step.name}`);
      } else if (reason.includes("VOYAGE_API_KEY")) {
        console.log(`      Without it there are no fit scores, and that is fine — the feed`);
        console.log(`      is sorted by date instead of by match, and the dashboard shows`);
        console.log(`      those columns as a dash rather than guessing.`);
        console.log(`      A free key: https://dashboard.voyageai.com`);
      } else if (reason.includes("target company list")) {
        console.log(`      Open Claude in this folder and paste this line:`);
        console.log(`          /company-research generate target list`);
        console.log(`      Then type:  npm run find-people`);
      }
    }
  }

  const total = runnable.reduce((sum, s) => sum + s.cost, 0);
  const paid = runnable.filter((s) => s.needs === "APIFY_TOKEN").length > 0;

  if (!apify) {
    console.log("\n  You can use the whole Job Search OS without any keys at all.");
    console.log("  Copy a job description, paste it into Claude, and type:");
    console.log("      /quick-start");
    console.log("  It tells you in about a minute whether the role is worth your time.");
  }

  if (dryRun) {
    console.log(`\n  Dry run. Cost of the real thing: about ${money(total)}.`);
    console.log("  Nothing was fetched and nothing was charged.");
    console.log("  When you are ready, type this line:\n      npm run bootstrap\n");
    return;
  }

  if (!runnable.length) {
    console.log("\n  There is nothing to run. Nothing was fetched and nothing was charged.\n");
    return;
  }

  console.log("");
  if (paid) {
    console.log(`  ${plural(runnable.length, "step")} to run. This usually takes two to five minutes.`);
    await confirmCost(jobCap + peopleItems, total, "results in total");
  } else {
    console.log(`  ${plural(runnable.length, "step")} to run, none of which cost anything.\n`);
  }

  const problems: string[] = [];
  let done = 0;
  runnable.forEach((step, i) => {
    console.log("\n-----------------------------------------------------");
    console.log(`  STEP ${i + 1} OF ${runnable.length}: ${step.name}`);
    console.log("-----------------------------------------------------");
    const failure = runStep(step);
    if (failure) problems.push(failure);
    else done++;
  });

  console.log("\n=====================================================");
  console.log(`  DONE — ${done} of ${runnable.length} steps finished`);
  console.log("=====================================================\n");

  if (problems.length) {
    console.log("  Some steps did not finish:");
    for (const p of problems) console.log(`   · ${p}`);
    console.log("  Nothing is broken and nothing was lost. You can run any step again.\n");
  }

  const dashboard = path.resolve(labRoot(), "..", "dashboard", "index.html");
  if (fs.existsSync(dashboard)) {
    console.log("  Your dashboard is ready. Double-click this file to open it:");
    console.log("      dashboard/index.html\n");
  }

  console.log("  WHAT TO DO NEXT");
  console.log("  Open Claude in this folder and paste these three lines, one at a time.\n");
  console.log("    1.  /find-jobs");
  console.log("        Shows the best jobs I found and scores the top ones properly.\n");
  console.log("    2.  /build-referral-graph");
  console.log("        Ranks who can refer you at each company and writes the drafts.");
  console.log("        You read them and you send them. Nothing is sent for you.\n");
  console.log("    3.  /dashboard");
  console.log("        Refreshes the dashboard and names the three things worth");
  console.log("        doing today.\n");
  console.log("  Every week from here: npm run find-jobs   then   npm run watch");
  console.log("  Both are optional. Pasting a job description into Claude always works.\n");
});
