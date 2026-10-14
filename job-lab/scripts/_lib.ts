/**
 * Small shared helpers for the four Apify-facing scripts and bootstrap.
 *
 * Flag parsing, --help, the cost pause and the "print a sentence, not a stack
 * trace" behaviour all live in src/args.ts. This file only adds the things that
 * are specific to fetching: reading search.json, reading the target company
 * list, and formatting a summary line.
 */
import fs from "node:fs";
import path from "node:path";
import { args as sharedArgs, renderHelp, type CommandSpec } from "../src/args";

/* ------------------------------------------------------------------ paths */

/** The job-lab folder, however the script was started. */
export function labRoot(): string {
  const candidates = [process.cwd(), path.resolve(__dirname, "..")];
  for (const c of candidates) {
    if (fs.existsSync(path.join(c, "scripts"))) return c;
  }
  return process.cwd();
}

/** job-search-os/context-library/ — the folder next to job-lab/. */
export function contextLibrary(): string {
  return path.resolve(labRoot(), "..", "context-library");
}

/* ------------------------------------------------------------------ flags */

export type Opts = {
  /** Positional arguments, in order. */
  _: string[];
  /** Last value given for a flag, or the default from the spec. */
  str(name: string, fallback?: string): string | undefined;
  /** Numeric flag value, or the fallback. */
  num(name: string, fallback: number): number;
  /** Boolean flag. `--no-signals` reads as false. */
  bool(name: string, fallback?: boolean): boolean;
  /**
   * A flag the user may give more than once, or as one comma-separated value:
   *   --company Stripe --company Ramp
   *   --company "Stripe, Ramp"
   */
  list(name: string): string[];
};

type Local = { values: Record<string, string[] | boolean>; positionals: string[]; help: boolean };

/** The same rules as src/args.ts, kept here so `list()` can see repeated flags. */
function parseLocal(argv: string[]): Local {
  const values: Record<string, string[] | boolean> = {};
  const positionals: string[] = [];
  let help = false;

  for (let i = 0; i < argv.length; i++) {
    const tok = argv[i];
    if (tok === "--help" || tok === "-h" || tok === "help") {
      help = true;
      continue;
    }
    if (!tok.startsWith("-")) {
      positionals.push(tok);
      continue;
    }
    let key = tok.replace(/^--?/, "");
    let value: string | null = null;
    const eq = key.indexOf("=");
    if (eq >= 0) {
      value = key.slice(eq + 1);
      key = key.slice(0, eq);
    } else {
      const next = argv[i + 1];
      if (next !== undefined && (!next.startsWith("-") || !Number.isNaN(Number(next)))) {
        value = next;
        i++;
      }
    }
    if (value === null) {
      if (key.startsWith("no-")) values[key.slice(3)] = false;
      else values[key] = true;
      continue;
    }
    const prev = values[key];
    values[key] = Array.isArray(prev) ? [...prev, value] : [value];
  }
  return { values, positionals, help };
}

/**
 * Parse argv against a command spec.
 *
 * src/args.ts owns the real parse: it prints --help, rejects unknown flags, and
 * applies defaults. We keep a local pass alongside it purely so a repeated flag
 * (`--company A --company B`) is readable as a list, and so this still works if
 * that helper is ever swapped for a different shape.
 */
export function parse(spec: CommandSpec, argv: string[] = process.argv.slice(2)): Opts {
  const local = parseLocal(argv);
  let parsed: Record<string, any> | null = null;

  const fn = sharedArgs as unknown as (s: CommandSpec, a?: string[]) => Record<string, any>;
  if (typeof fn === "function" && fn.length >= 1) {
    // Handles --help and unknown flags itself, and exits when it needs to.
    parsed = fn(spec, argv);
  } else {
    if (local.help) {
      console.log(renderHelp(spec));
      process.exit(0);
    }
  }

  const defaults = new Map<string, string | number | boolean>();
  for (const f of spec.flags ?? []) {
    if (f.default !== undefined) defaults.set(f.name, f.default);
    else if (f.type === "boolean") defaults.set(f.name, false);
  }

  const localValue = (name: string) => local.values[name];

  return {
    _: parsed?._ ?? local.positionals,
    str(name, fallback) {
      const v = parsed?.[name];
      if (typeof v === "string" && v.length) return v;
      const l = localValue(name);
      if (Array.isArray(l) && l.length) return l[l.length - 1];
      const d = defaults.get(name);
      return typeof d === "string" ? d : fallback;
    },
    num(name, fallback) {
      const v = parsed?.[name];
      if (typeof v === "number" && Number.isFinite(v)) return v;
      const l = localValue(name);
      if (Array.isArray(l) && l.length) {
        const n = Number(l[l.length - 1]);
        if (Number.isFinite(n)) return n;
      }
      const d = defaults.get(name);
      return typeof d === "number" ? d : fallback;
    },
    bool(name, fallback = false) {
      const v = parsed?.[name];
      if (typeof v === "boolean") return v;
      const l = localValue(name);
      if (typeof l === "boolean") return l;
      if (Array.isArray(l) && l.length) {
        const s = String(l[l.length - 1]).toLowerCase();
        return !(s === "false" || s === "0" || s === "no");
      }
      const d = defaults.get(name);
      return typeof d === "boolean" ? d : fallback;
    },
    list(name) {
      const out: string[] = [];
      const l = localValue(name);
      if (Array.isArray(l)) out.push(...l);
      else {
        const v = parsed?.[name];
        if (typeof v === "string") out.push(v);
      }
      return out
        .flatMap((s) => String(s).split(","))
        .map((s) => s.trim())
        .filter(Boolean);
    },
  };
}

/** `--yes` means "do not make me wait three seconds before each paid step". */
export function applyYes(o: Opts): void {
  if (o.bool("yes")) process.env.JOB_LAB_YES = "1";
}

/* ------------------------------------------------------------------ errors */

/**
 * An error whose message is already the whole explanation: one sentence, then
 * the exact lines to type. src/args.ts main() prints it without a stack trace.
 */
export function problem(sentence: string, ...fixLines: string[]): Error {
  const body = fixLines.length
    ? "\n" + fixLines.map((l) => `  ${l}`).join("\n")
    : "";
  return new Error(sentence + body);
}

/* ------------------------------------------------------------------ config */

export type SearchConfig = {
  titles: string[];
  locations: string[];
  posted_within_days: number;
  companies: string[];
  exclude_keywords: string[];
  max_jobs_per_run: number;
  max_people_per_company: number;
};

export const DEFAULT_SEARCH: SearchConfig = {
  titles: ["Product Manager", "Senior Product Manager"],
  locations: ["San Francisco Bay Area", "Remote"],
  posted_within_days: 14,
  companies: [],
  exclude_keywords: ["clearance", "unpaid"],
  max_jobs_per_run: 120,
  max_people_per_company: 25,
};

export function searchConfigPath(): string {
  return path.join(labRoot(), "search.json");
}

/**
 * Read job-lab/search.json. If it is missing we write the starter file and say
 * so — "file not found" is not a useful thing to tell someone on day one.
 */
export function readSearchConfig(): SearchConfig {
  const file = searchConfigPath();
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify(DEFAULT_SEARCH, null, 2) + "\n", "utf8");
    console.log(`  I created job-lab/search.json with starter settings.`);
    console.log(`  Open that file in any text editor to change the job titles`);
    console.log(`  and locations, or paste /find-jobs into Claude and it will`);
    console.log(`  fill it in from your career plan.\n`);
    return { ...DEFAULT_SEARCH };
  }

  let parsed: any;
  try {
    parsed = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    throw problem(
      "job-lab/search.json is not valid JSON, so I could not read your search settings.",
      "Open job-lab/search.json and look for a missing comma or quote.",
      "Or delete that file and run the command again — I will write a fresh one.",
    );
  }

  const arr = (v: any, d: string[]) =>
    Array.isArray(v) ? v.map(String).map((s) => s.trim()).filter(Boolean) : d;
  const int = (v: any, d: number) => (Number.isFinite(Number(v)) ? Math.floor(Number(v)) : d);

  return {
    titles: arr(parsed.titles, DEFAULT_SEARCH.titles),
    locations: arr(parsed.locations, DEFAULT_SEARCH.locations),
    posted_within_days: int(parsed.posted_within_days, DEFAULT_SEARCH.posted_within_days),
    companies: arr(parsed.companies, []),
    exclude_keywords: arr(parsed.exclude_keywords, DEFAULT_SEARCH.exclude_keywords),
    max_jobs_per_run: int(parsed.max_jobs_per_run, DEFAULT_SEARCH.max_jobs_per_run),
    max_people_per_company: int(
      parsed.max_people_per_company,
      DEFAULT_SEARCH.max_people_per_company,
    ),
  };
}

/**
 * Company names out of context-library/target-companies.md.
 * Handles "## Rank 3: Stripe", "## Stripe" and "- Stripe".
 * Template placeholders like "[Company Name]" are not companies, and neither are
 * the file's own section headings.
 */
export function targetCompanies(): string[] {
  const file = path.join(contextLibrary(), "target-companies.md");
  if (!fs.existsSync(file)) return [];
  const text = fs.readFileSync(file, "utf8");
  const skip =
    /^(how this works|target companies|companies|notes?|legend|overview|contents|template|example)$/i;
  const out: string[] = [];

  for (const line of text.split("\n")) {
    const heading = line.match(/^#{2,3}\s+(?:rank\s*\d+\s*[:.\-]\s*)?(.+?)\s*$/i);
    const bullet = line.match(
      /^\s*(?:[-*]|\d+\.)\s+(?:\*\*)?([A-Za-z0-9][^|:*]{1,48}?)(?:\*\*)?\s*$/,
    );
    const candidate = heading?.[1] ?? bullet?.[1];
    if (!candidate) continue;
    const name = candidate.replace(/\*\*/g, "").trim();
    if (!name || name.startsWith("[") || skip.test(name)) continue;
    if (/^(rank|generated|last updated)\b/i.test(name)) continue;
    if (name.length > 48) continue;
    if (!out.some((c) => c.toLowerCase() === name.toLowerCase())) out.push(name);
  }
  return out;
}

/* ------------------------------------------------------------------- misc */

export function money(n: number): string {
  if (n <= 0) return "$0.00";
  if (n < 0.01) return "under $0.01";
  return `$${n.toFixed(2)}`;
}

export function plural(n: number, one: string, many = one + "s"): string {
  return `${n} ${n === 1 ? one : many}`;
}

/** One line, trimmed to a width, so a summary table never turns to mush. */
export function clip(s: string | null | undefined, width: number): string {
  if (s === null || s === undefined || String(s).trim() === "") return "—";
  const one = String(s).replace(/\s+/g, " ").trim();
  return one.length <= width ? one : one.slice(0, width - 1) + "…";
}

export function pad(s: string, width: number): string {
  return s.length >= width ? s : s + " ".repeat(width - s.length);
}

/** True when the key is present and is not an obvious placeholder. */
export function hasKey(name: string): boolean {
  const v = process.env[name];
  return !!v && v.trim().length > 8 && !/your[-_ ]?key|xxx|placeholder|paste/i.test(v.trim());
}

export const nowIso = (): string => new Date().toISOString();
