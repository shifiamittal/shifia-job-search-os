/**
 * A tiny flag parser, a --help renderer, and the cost confirmation.
 *
 * Written for someone who has never opened a terminal: every error is one plain
 * sentence plus the exact line to type next, and nothing paid ever happens
 * without printing the price and giving three seconds to press Ctrl-C.
 *
 * Two ways to call `args()`, because scripts differ in how much structure they
 * want:
 *
 *   const a = args();                       // parse process.argv, no schema
 *   const a = args(process.argv.slice(2));  // parse a given argv, no schema
 *   const a = args(SPEC);                   // schema: typed values, --help, typo
 *   const a = args(SPEC, argv);             // catching, defaults
 *
 * The returned object is readable both ways too: `a.limit` / `a["min-fit"]` for
 * direct access, and `a.has("force")` / `a.num("pace")` for the guarded reads.
 */

export type FlagType = "string" | "number" | "boolean";

export type FlagSpec = {
  /** Long name without dashes, e.g. "min-fit" (also readable as `minFit`). */
  name: string;
  type?: FlagType;
  /** Single letter alias, e.g. "n". */
  short?: string;
  /** One line, lowercase, no trailing period. Shown in --help. */
  desc: string;
  default?: string | number | boolean;
  /** Value name in the help line, e.g. "<number>". Ignored for booleans. */
  placeholder?: string;
};

export type CommandSpec = {
  /** How the user actually runs it, e.g. "npm run find-jobs". */
  command: string;
  /** One sentence: what this does and what it costs. */
  summary: string;
  flags?: FlagSpec[];
  examples?: string[];
  notes?: string[];
};

export type Parsed = {
  /** Positional arguments, in order. */
  _: string[];
  /** Same list, under the name the other scripts use. */
  positionals: string[];
  /** True when --help, -h or the word "help" was passed. */
  help: boolean;
  /** Only the flags that were actually passed (plus schema defaults). */
  values: Record<string, string | number | boolean>;
  /** Alias of `values`, for callers that expect a `raw` bag. */
  raw: Record<string, string | number | boolean>;

  /** Was this flag passed at all? */
  has(name: string): boolean;
  /** String value, or the fallback. */
  str(name: string, fallback?: string): string | undefined;
  /** Number value, or the fallback. Junk ("--pace banana") stops the script. */
  num(name: string, fallback?: number): number | undefined;
  /** Boolean flag: `--dry-run`, `--no-color`. */
  bool(name: string, fallback?: boolean): boolean;
  /** Comma-separated or repeated flag: `--company Stripe,Ramp`. */
  list(name: string): string[];

  /** Direct access by flag name and by camelCase. */
  [key: string]: any;
};

const camel = (s: string): string =>
  s.replace(/-([a-z0-9])/g, (_m, c: string) => c.toUpperCase());

const dashed = (s: string): string =>
  s.replace(/_/g, "-").replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

/**
 * Stop with a message a non-technical user can act on. Never a stack trace:
 * the first line says what happened, every line after it says what to type.
 */
export function fail(...lines: string[]): never {
  console.error("");
  for (const l of lines) console.error(`  ${l}`);
  console.error("");
  process.exit(1);
}

function coerce(flag: FlagSpec, raw: string): string | number | boolean {
  if (flag.type === "number") {
    const n = Number(raw);
    if (!Number.isFinite(n)) {
      fail(
        `--${flag.name} needs a number, but I got "${raw}".`,
        `Write it like this:  --${flag.name} 25`,
      );
    }
    return n;
  }
  if (flag.type === "boolean") return raw !== "false" && raw !== "0" && raw !== "no";
  return raw;
}

export function args(
  specOrArgv?: CommandSpec | string[],
  maybeArgv?: string[],
): Parsed {
  const spec: CommandSpec | null =
    specOrArgv && !Array.isArray(specOrArgv) ? specOrArgv : null;
  const argv =
    maybeArgv ?? (Array.isArray(specOrArgv) ? specOrArgv : process.argv.slice(2));

  const flags = spec?.flags ?? [];
  const byName = new Map<string, FlagSpec>();
  for (const f of flags) {
    byName.set(f.name, f);
    if (f.short) byName.set(f.short, f);
  }

  const values: Record<string, string | number | boolean> = {};
  const positionals: string[] = [];
  let sawHelp = false;

  // Schema defaults come first so an explicit flag overwrites them.
  for (const f of flags) {
    if (f.default !== undefined) values[f.name] = f.default;
    else if (f.type === "boolean") values[f.name] = false;
  }

  for (let i = 0; i < argv.length; i++) {
    const tok = argv[i];

    if (tok === "--help" || tok === "-h" || tok === "help") {
      sawHelp = true;
      values.help = true;
      continue;
    }

    if (tok === "--") {
      positionals.push(...argv.slice(i + 1));
      break;
    }

    if (!tok.startsWith("-") || tok === "-") {
      positionals.push(tok);
      continue;
    }

    const eq = tok.indexOf("=");
    const rawName = (eq === -1 ? tok : tok.slice(0, eq)).replace(/^--?/, "");
    const inline = eq === -1 ? null : tok.slice(eq + 1);

    const flag =
      byName.get(rawName) ??
      byName.get(camel(rawName)) ??
      byName.get(dashed(rawName)) ??
      byName.get(rawName.replace(/^no-/, ""));

    // No schema: accept anything. A flag with a value takes it, a bare flag is
    // true. This is the mode most scripts use, and it must never reject a flag
    // it simply has not been told about.
    if (!flag) {
      if (spec && flags.length) {
        const known = flags.map((f) => `--${f.name}`).join(", ");
        fail(
          `I do not recognise the option "${tok}".`,
          `This command accepts: ${known}`,
          `To see the full help, run:  ${spec.command} -- --help`,
        );
      }
      if (inline !== null) {
        values[rawName] = inline;
      } else {
        const next = argv[i + 1];
        if (next !== undefined && (!next.startsWith("-") || !Number.isNaN(Number(next)))) {
          values[rawName] = next;
          i++;
        } else {
          values[rawName] = true;
        }
      }
      continue;
    }

    if (flag.type === "boolean") {
      if (inline !== null) values[flag.name] = coerce(flag, inline);
      else if (rawName.startsWith("no-") && !byName.has(rawName)) values[flag.name] = false;
      else values[flag.name] = true;
      continue;
    }

    let value = inline;
    if (value === null) {
      const next = argv[i + 1];
      if (next === undefined || (next.startsWith("-") && Number.isNaN(Number(next)))) {
        fail(
          `The option --${flag.name} needs a value after it.`,
          `Write it like this:  ${spec?.command ?? "npm run <command>"} -- --${flag.name} ${
            flag.placeholder ?? "<value>"
          }`,
        );
      }
      value = next;
      i++;
    }
    values[flag.name] = coerce(flag, value);
  }

  const read = (name: string): string | number | boolean | undefined => {
    const keys = [name, dashed(name), camel(name), name.replace(/-/g, "_")];
    for (const k of keys) if (values[k] !== undefined) return values[k];
    return undefined;
  };

  const parsed = {
    _: positionals,
    positionals,
    help: sawHelp,
    values,
    raw: values,
    has: (name: string) => read(name) !== undefined,
    str: (name: string, fallback?: string) => {
      const v = read(name);
      return v === undefined || typeof v === "boolean" ? fallback : String(v);
    },
    num: (name: string, fallback?: number) => {
      const v = read(name);
      if (v === undefined || v === true || v === false) return fallback;
      const n = Number(v);
      if (!Number.isFinite(n)) {
        fail(
          `--${name} needs to be a number. I got "${String(v)}".`,
          `Write it like this:  --${name} ${fallback ?? 25}`,
        );
      }
      return n;
    },
    bool: (name: string, fallback = false) => {
      const v = read(name);
      if (v === undefined) return fallback;
      if (typeof v === "boolean") return v;
      const s = String(v).toLowerCase();
      return !(s === "false" || s === "0" || s === "no");
    },
    list: (name: string) => {
      const v = read(name);
      if (v === undefined || typeof v === "boolean") return [];
      return String(v)
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    },
  } as Parsed;

  // Direct access: a.limit, a["min-fit"], a.minFit.
  for (const [k, v] of Object.entries(values)) {
    if (parsed[k] === undefined) parsed[k] = v;
    const c = camel(k);
    if (parsed[c] === undefined) parsed[c] = v;
  }

  // With a schema, --help is fully handled here: print and stop. Without one,
  // the caller owns its own help text, so we only report that it was asked for.
  if (spec && sawHelp) {
    console.log(renderHelp(spec));
    process.exit(0);
  }

  return parsed;
}

/** Render --help. Full copy-pasteable lines only; no "just run", no bare flags. */
export function renderHelp(spec: CommandSpec): string {
  const lines: string[] = [];
  lines.push("");
  lines.push(`  ${spec.command}`);
  lines.push(`  ${spec.summary}`);

  const flags = spec.flags ?? [];
  if (flags.length) {
    lines.push("");
    lines.push("  OPTIONS");
    const left = flags.map(
      (f) =>
        `    --${f.name}${f.type === "boolean" ? "" : ` ${f.placeholder ?? "<value>"}`}`,
    );
    const width = Math.max(...left.map((l) => l.length));
    flags.forEach((f, i) => {
      const def = f.default !== undefined ? `  (default: ${String(f.default)})` : "";
      lines.push(`${left[i].padEnd(width)}   ${f.desc}${def}`);
    });
  }

  if (spec.examples?.length) {
    lines.push("");
    lines.push("  EXAMPLES");
    for (const e of spec.examples) lines.push(`    ${e}`);
  }

  if (spec.notes?.length) {
    lines.push("");
    for (const n of spec.notes) lines.push(`  ${n}`);
  }

  lines.push("");
  return lines.join("\n");
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Print the price before spending it, then wait three seconds so Ctrl-C is a
 * real option. Nothing paid in this repo runs without going through here first.
 *
 * Set JOB_LAB_YES=1 to skip the pause when one script calls another (bootstrap
 * does this, after asking once at the start).
 */
export async function confirmCost(
  count: number,
  dollars: number,
  what = "results",
): Promise<void> {
  const price = dollars > 0 && dollars < 0.01 ? "0.01" : dollars.toFixed(2);
  console.log(`~${count} ${what} ≈ $${price}. Ctrl-C to stop.`);
  if (process.env.JOB_LAB_YES === "1") return;
  await sleep(3000);
}

/**
 * Wrap a script body so an unexpected throw prints one sentence instead of a
 * stack trace. Errors we raise ourselves already carry the fix in their message.
 */
export async function main(fn: () => Promise<void> | void): Promise<void> {
  try {
    await fn();
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("");
    console.error(`  ${msg}`);
    console.error("");
    console.error("  Nothing was changed. You can run the command again safely.");
    console.error("");
    process.exit(1);
  }
}
