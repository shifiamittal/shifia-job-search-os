import { ApifyClient } from "apify-client";
import { JobRow, PersonRow, SignalRow, jobId, nowIso } from "./db";

/**
 * We read public LinkedIn data through Apify's residential proxies. Your own
 * LinkedIn account is never touched: no login, no cookie, no session, and
 * nothing here can send a connection request or a message. Every outreach
 * artifact the OS produces is a draft that you send by hand.
 */
export const ACTORS = {
  jobs: process.env.APIFY_ACTOR_JOBS ?? "harvestapi/linkedin-job-search",
  employees:
    process.env.APIFY_ACTOR_EMPLOYEES ?? "harvestapi/linkedin-company-employees",
  profile: process.env.APIFY_ACTOR_PROFILE ?? "harvestapi/linkedin-profile-scraper",
  posts: process.env.APIFY_ACTOR_POSTS ?? "harvestapi/linkedin-profile-posts",
  companyPosts:
    process.env.APIFY_ACTOR_COMPANY_POSTS ?? "harvestapi/linkedin-company-posts",
  postSearch:
    process.env.APIFY_ACTOR_POST_SEARCH ?? "harvestapi/linkedin-post-search",
} as const;

export type ActorKey = keyof typeof ACTORS;

/**
 * Approximate Apify cost per 1,000 results, in US dollars, used only to print an
 * estimate before spending. Prices move — check the actor page in the Apify
 * console for the number that will actually be billed. Deliberately rounded up
 * so the printed estimate is never lower than the bill.
 */
export const COST_PER_1K: Record<ActorKey, number> = {
  jobs: 4,
  employees: 4,
  profile: 6,
  posts: 4,
  companyPosts: 4,
  postSearch: 4,
};

/** Dollar estimate for `count` results from one actor. Rounded to cents. */
export function estimateCost(actor: ActorKey, count: number): number {
  return Math.round((count / 1000) * COST_PER_1K[actor] * 100) / 100;
}

export function apify(): ApifyClient {
  const token = process.env.APIFY_TOKEN;
  if (!token) {
    throw new Error(
      "APIFY_TOKEN is missing, so this command cannot fetch anything.\n" +
        "  Fix: open the job-lab folder, copy the file .env.example to .env,\n" +
        "  then paste your token after APIFY_TOKEN= on that line.\n" +
        "  Get a token at https://console.apify.com/account/integrations\n" +
        "  You do not need it to use the rest of the OS: paste a job description\n" +
        "  into Claude and run /quick-start instead.",
    );
  }
  return new ApifyClient({ token });
}

export function hasApify(): boolean {
  return !!process.env.APIFY_TOKEN;
}

export type RunOpts = {
  /** Hard cap on returned items. Required in spirit: a typo must not cost $50. */
  maxItems?: number;
  /** Seconds to wait for the actor before giving up. Default 10 minutes. */
  waitSecs?: number;
  /** Print progress lines. Default true. */
  quiet?: boolean;
};

const DEFAULT_MAX_ITEMS = 100;

/**
 * Run an actor and return its dataset items, never more than `maxItems`.
 * The cap is applied three times on purpose: in the actor input (so the actor
 * stops early and we are not billed for the rest), in the dataset read, and in a
 * final slice. Actors have been known to ignore the input field.
 */
/**
 * Apify's own error strings are written for developers. Translate the ones a
 * cohort member will actually hit into the exact click that fixes them, and
 * pass anything unrecognised through unchanged rather than guessing.
 */
export function apifyRunError(actorId: string, err: unknown): string {
  const raw = err instanceof Error ? err.message : String(err);
  const url = `https://console.apify.com/actors/${actorId.replace("/", "~")}`;

  if (/requires full access|approve its permissions|permission/i.test(raw)) {
    return [
      `Apify needs your one-time approval to run ${actorId}.`,
      ``,
      `This is normal and it takes about 20 seconds. It is a consent screen on`,
      `Apify's own website, not a LinkedIn login.`,
      ``,
      `  1. Open ${url}`,
      `  2. Sign in with the same Apify account your token came from.`,
      `  3. Click "Try for free" / "Start", then approve the permissions prompt.`,
      `  4. Come back here and run the same command again.`,
      ``,
      `You only ever do this once per tool. Nothing was charged.`,
    ].join("\n");
  }

  if (/401|unauthor|invalid token|not found.*token/i.test(raw)) {
    return [
      `Apify rejected your token.`,
      ``,
      `  1. Open https://console.apify.com/settings/integrations`,
      `  2. Copy the "Personal API token" (it starts with apify_api_).`,
      `  3. Open the file job-lab/.env and replace the APIFY_TOKEN= line with it.`,
      `  4. Run the same command again.`,
    ].join("\n");
  }

  if (/credit|quota|limit exceeded|payment/i.test(raw)) {
    return [
      `Your Apify account is out of credit for this month.`,
      ``,
      `Your saved jobs and people are untouched — everything already in the feed`,
      `still works, and so does every skill in the OS.`,
      ``,
      `Check https://console.apify.com/billing. The free tier resets monthly.`,
    ].join("\n");
  }

  if (/ENOTFOUND|ECONNREFUSED|ETIMEDOUT|network|fetch failed/i.test(raw)) {
    return `Could not reach Apify. Check your internet connection and run the command again.\n\n(${raw})`;
  }

  return `Apify could not run ${actorId}.\n\n${raw}\n\nRun log: https://console.apify.com/actors/runs`;
}

export async function run<T = Record<string, any>>(
  actorId: string,
  input: Record<string, any>,
  opts: RunOpts = {},
): Promise<T[]> {
  const maxItems = Math.max(1, Math.floor(opts.maxItems ?? DEFAULT_MAX_ITEMS));
  const client = apify();

  let started;
  try {
    started = await client.actor(actorId).call(
      {
        ...input,
        // Different harvestapi actors read different names for the same cap.
        maxItems,
        maxResults: maxItems,
      },
      { waitSecs: opts.waitSecs ?? 600 },
    );
  } catch (err) {
    throw new Error(apifyRunError(actorId, err));
  }

  if (!started.defaultDatasetId) {
    throw new Error(
      `The Apify actor ${actorId} finished without producing a dataset ` +
        `(status: ${started.status}). Open https://console.apify.com/actors/runs ` +
        `to see the run log.`,
    );
  }

  const { items } = await client
    .dataset(started.defaultDatasetId)
    .listItems({ limit: maxItems });

  if (!opts.quiet) {
    console.log(`  ${actorId}: ${items.length} result(s)`);
  }
  return items.slice(0, maxItems) as T[];
}

// ---------------------------------------------------------------------------
// Field readers. Actor payloads change shape without notice, so every field is
// read through a candidate chain and returns null rather than a made-up value.
// ---------------------------------------------------------------------------

const str = (...vals: unknown[]): string | null => {
  for (const v of vals) {
    if (typeof v === "string" && v.trim()) return v.trim();
    if (typeof v === "number" && Number.isFinite(v)) return String(v);
  }
  return null;
};

/** First non-empty string found anywhere in a list of possibly-nested values. */
const deep = (...vals: unknown[]): string | null => {
  for (const v of vals) {
    if (typeof v === "string" && v.trim()) return v.trim();
    if (v && typeof v === "object") {
      const o = v as Record<string, any>;
      const s = str(
        o.linkedinText,
        o.name,
        o.title,
        o.text,
        o.label,
        o.value,
        o.universalName,
        o.parsed?.text,
      );
      if (s) return s;
    }
  }
  return null;
};

/** Anything date-shaped -> ISO8601. Junk in, null out. Never "today" as a guess. */
export function toIso(v: unknown): string | null {
  if (typeof v === "number" && Number.isFinite(v)) {
    // Seconds vs milliseconds: anything below year 2286 in ms is a seconds value.
    const ms = v < 1e12 ? v * 1000 : v;
    const d = new Date(ms);
    return Number.isNaN(d.getTime()) ? null : d.toISOString();
  }
  if (typeof v === "string" && v.trim()) {
    const d = new Date(v.trim());
    return Number.isNaN(d.getTime()) ? null : d.toISOString();
  }
  if (v && typeof v === "object") {
    const o = v as Record<string, any>;
    return toIso(o.date ?? o.timestamp ?? o.postedAt ?? o.iso ?? null);
  }
  return null;
}

/** "/in/priya-m?trk=..." or a full URL -> "priya-m". */
export function publicIdFromUrl(url: string | null): string | null {
  if (!url) return null;
  const m = url.match(/\/in\/([^/?#]+)/);
  return m ? decodeURIComponent(m[1]).toLowerCase() : null;
}

/** Salary can arrive as text, as a {min,max,currency} object, or not at all. */
function salaryText(item: Record<string, any>): string | null {
  const direct = str(
    item.salary,
    item.salaryText,
    item.compensation,
    item.payRange,
    item.salaryRange,
    item.salary_info,
  );
  if (direct) return direct;
  const o =
    (item.salary && typeof item.salary === "object" ? item.salary : null) ??
    (item.compensation && typeof item.compensation === "object"
      ? item.compensation
      : null) ??
    (item.salaryRange && typeof item.salaryRange === "object"
      ? item.salaryRange
      : null);
  if (!o) return null;
  const min = o.min ?? o.minimum ?? o.from ?? o.low;
  const max = o.max ?? o.maximum ?? o.to ?? o.high;
  const cur = str(o.currency, o.currencyCode) ?? "";
  if (min == null && max == null) return null;
  const fmt = (n: unknown) =>
    typeof n === "number" ? n.toLocaleString("en-US") : String(n);
  if (min != null && max != null) return `${cur}${fmt(min)}–${cur}${fmt(max)}`.trim();
  return `${cur}${fmt(min ?? max)}`.trim();
}

/**
 * Every normalizer failed on a non-empty payload, which means the actor changed
 * shape or the wrong actor id is configured. Say exactly that, and print the keys
 * that actually came back so the fix is one glance away.
 */
export function shapeError(
  actorId: string,
  items: unknown[],
  expects: string,
): Error {
  const first = (items[0] ?? {}) as Record<string, any>;
  const keys = Object.keys(first);
  return new Error(
    `The actor ${actorId} returned ${items.length} item(s), but none of them ` +
      `looked like ${expects}.\n` +
      `  Keys actually seen on the first item: ${keys.length ? keys.join(", ") : "(none — the item was empty)"}\n` +
      `  This normally means the actor changed its output, or the actor id in ` +
      `.env points somewhere unexpected.\n` +
      `  Nothing was saved. Your existing data is untouched.`,
  );
}

// ---------------------------------------------------------------------------
// Normalizers. Each returns a row ready for the matching upsert, or null.
// ---------------------------------------------------------------------------

export function normalizeJob(item: Record<string, any>): JobRow | null {
  if (!item || typeof item !== "object") return null;

  const company =
    deep(
      item.company,
      item.companyName,
      item.organization,
      item.employer,
      item.companyDetails,
      item.hiringOrganization,
    ) ?? null;
  const role = str(
    item.title,
    item.jobTitle,
    item.position,
    item.name,
    item.role,
  );
  if (!company || !role) return null;

  const linkedinId =
    str(
      item.id,
      item.jobId,
      item.jobPostingId,
      item.urn,
      item.entityUrn,
      item.trackingUrn,
    ) ?? null;
  const url = str(
    item.link,
    item.jobUrl,
    item.url,
    item.linkedinUrl,
    item.applyUrl,
    item.jobPostingUrl,
  );

  const ts = nowIso();
  return {
    id: jobId(company, role, linkedinId ?? url ?? `${company}|${role}|${str(item.location) ?? ""}`),
    linkedin_id: linkedinId,
    company,
    role,
    location:
      deep(item.location, item.jobLocation, item.formattedLocation, item.city) ??
      null,
    posted_at: toIso(
      item.postedAt ?? item.postedDate ?? item.publishedAt ?? item.listedAt ?? item.datePosted,
    ),
    salary: salaryText(item),
    seniority:
      deep(item.seniorityLevel, item.seniority, item.experienceLevel, item.level) ??
      null,
    employment_type:
      deep(item.employmentType, item.jobType, item.contractType, item.workplaceType) ??
      null,
    url,
    description: str(
      item.descriptionText,
      item.description,
      item.jobDescription,
      item.content,
      item.snippet,
    ),
    source: "apify:linkedin-job-search",
    fit: null,
    archetype: null,
    duplicate_of: null,
    status: "sourced",
    first_seen: ts,
    last_seen: ts,
    raw: JSON.stringify(item),
  };
}

export function normalizePerson(item: Record<string, any>): PersonRow | null {
  if (!item || typeof item !== "object") return null;

  const url = str(
    item.linkedinUrl,
    item.profileUrl,
    item.url,
    item.publicProfileUrl,
    item.link,
  );
  const id =
    str(
      item.publicIdentifier,
      item.publicId,
      item.public_id,
      item.username,
      item.universalName,
    )?.toLowerCase() ??
    publicIdFromUrl(url) ??
    null;
  if (!id) return null;

  const name =
    str(item.name, item.fullName, item.displayName) ??
    [str(item.firstName), str(item.lastName)].filter(Boolean).join(" ") ??
    null;

  // "Payments PM at Stripe" — the current position object is more reliable than
  // splitting the headline, so try it first and fall back to the headline.
  const pos =
    (item.currentPosition && typeof item.currentPosition === "object"
      ? item.currentPosition
      : null) ??
    (Array.isArray(item.currentPositions) ? item.currentPositions[0] : null) ??
    (Array.isArray(item.experience) ? item.experience[0] : null) ??
    (Array.isArray(item.positions) ? item.positions[0] : null) ??
    {};

  const headline = str(item.headline, item.info, item.occupation, item.subtitle);

  return {
    id,
    name: name || null,
    headline,
    title:
      deep(pos.title, pos.position, pos.role, item.title, item.jobTitle) ??
      (headline ? headline.split(/\s+(?:at|@)\s+/i)[0] || null : null),
    company:
      deep(
        pos.company,
        pos.companyName,
        pos.organization,
        item.company,
        item.companyName,
        item.currentCompany,
      ) ??
      (headline && /\s+(?:at|@)\s+/i.test(headline)
        ? headline.split(/\s+(?:at|@)\s+/i)[1] || null
        : null),
    location: deep(item.location, item.geoLocation, item.city, item.addressLocality) ?? null,
    url: url ?? `https://www.linkedin.com/in/${id}/`,
    warmth: null,
    why_warm: null,
    likely_hm: 0,
    status: "cold",
    enriched: 0,
    last_post_text: null,
    last_post_url: null,
    last_post_at: null,
    first_seen: nowIso(),
    last_seen: nowIso(),
    raw: JSON.stringify(item),
  };
}

/**
 * A hiring signal is a post, not a job listing: "we're hiring", "my team is
 * growing", "excited to join X". `kind` records which phrase family matched, so
 * the digest can group them. No match means no kind — we do not label it "other"
 * and pretend to know.
 */
const SIGNAL_PATTERNS: Array<[string, RegExp]> = [
  ["hiring", /\b(we(?:'re| are) hiring|now hiring|join (?:my|our) team|my team is growing|we(?:'re| are) growing the team|open role|open position|hiring for)\b/i],
  ["joined", /\b(excited to (?:join|announce)|i(?:'m| am) joining|joining .{2,40} as|starting (?:a )?new (?:role|chapter)|new role at)\b/i],
  ["referral", /\b(happy to refer|dm me your resume|send me your resume|i can refer)\b/i],
];

export function normalizeSignal(item: Record<string, any>): SignalRow | null {
  if (!item || typeof item !== "object") return null;

  const id = str(item.id, item.urn, item.postUrn, item.activityUrn, item.entityId);
  if (!id) return null;

  const text = str(item.content, item.text, item.postText, item.commentary, item.description);
  if (!text) return null;

  const a =
    (item.author && typeof item.author === "object" ? item.author : null) ??
    (item.profile && typeof item.profile === "object" ? item.profile : null) ??
    (item.actor && typeof item.actor === "object" ? item.actor : null) ??
    {};

  const authorUrl = str(a.linkedinUrl, a.profileUrl, a.url, item.authorUrl);

  let kind: string | null = null;
  for (const [k, re] of SIGNAL_PATTERNS) {
    if (re.test(text)) {
      kind = k;
      break;
    }
  }

  return {
    id,
    company:
      deep(
        item.company,
        item.companyName,
        a.company,
        a.companyName,
        a.currentCompany,
      ) ?? null,
    author:
      str(a.name, a.fullName, item.authorName) ??
      [str(a.firstName), str(a.lastName)].filter(Boolean).join(" ") ??
      null,
    author_url: authorUrl,
    text,
    url: str(item.linkedinUrl, item.shareLinkedinUrl, item.postUrl, item.url),
    posted_at: toIso(item.postedAt ?? item.publishedAt ?? item.date ?? item.createdAt),
    kind,
    raw: JSON.stringify(item),
  };
}

/**
 * Map a raw dataset over a normalizer, and turn "everything failed" into the
 * loud, actionable shape error instead of a silent empty result — an empty
 * result is indistinguishable from "this search had no matches".
 */
export function normalizeAll<T>(
  actorId: string,
  items: unknown[],
  fn: (item: Record<string, any>) => T | null,
  expects: string,
): T[] {
  const out = items
    .map((i) => fn((i ?? {}) as Record<string, any>))
    .filter((x): x is T => x !== null);
  if (items.length > 0 && out.length === 0) throw shapeError(actorId, items, expects);
  return out;
}

/** The most recent post for a person, used to personalize outreach. */
export function normalizeLastPost(
  item: Record<string, any>,
): { text: string; url: string | null; posted_at: string | null } | null {
  const text = str(item.content, item.text, item.postText, item.commentary);
  if (!text) return null;
  return {
    text,
    url: str(item.linkedinUrl, item.shareLinkedinUrl, item.postUrl, item.url),
    posted_at: toIso(item.postedAt ?? item.publishedAt ?? item.date),
  };
}
