import { cosine, centroid, embedTexts, toF32 } from "./voyage";
import { allEmbeddings, getEmbedding } from "./db";

/** Any vector shape a caller might be holding: the API's number[] or a stored Float32Array. */
export type Vec = ArrayLike<number>;

/**
 * Everything in this file turns vectors into a number a human can act on.
 * It never invents data: when there is no vector, the answer is null, and the
 * dashboard renders null as "—". A fit score of 0 would be a claim; absent is not.
 */

export type Vectored = { id: string; vec: Vec };

// ---------------------------------------------------------------------------
// Fit score
// ---------------------------------------------------------------------------

/**
 * The fixed linear map from cosine similarity to a 0-100 fit score.
 *
 * voyage-3.5 does not use the full [-1, 1] range on real text. An experience
 * library measured against job descriptions in the same profession lands almost
 * entirely between 0.30 (a different function entirely — a sales JD against a PM
 * resume) and 0.80 (the same role, same domain, same seniority). Anchoring the
 * scale to that observed band is what makes the number legible: 0.30 -> 0, 0.80
 * -> 100, linear in between, clamped at both ends.
 *
 * These two constants are the entire scoring model. If scores bunch at 100 or at
 * 0 for your corpus, widen the band here — do not add curves or weights, because
 * a score you cannot explain in one sentence is a score nobody trusts.
 */
export const FIT_COS_FLOOR = 0.3;
export const FIT_COS_CEILING = 0.8;

/** cosine -> 0-100 integer, via the documented linear map above. */
export function fitScore(cos: number): number {
  const t = (cos - FIT_COS_FLOOR) / (FIT_COS_CEILING - FIT_COS_FLOOR);
  return Math.max(0, Math.min(100, Math.round(t * 100)));
}

/** The owner_id of the profile centroid vector written by `npm run embed`. */
export const PROFILE_ID = "me";

export type ScoredJob = { id: string; fit: number; cos: number };

/**
 * Score every job against the user's profile vector.
 * `profileVec` is the centroid of the experience-library chunks (see embed.ts).
 * Jobs with no vector are simply absent from the result — the caller leaves their
 * fit column NULL rather than writing a zero.
 *
 * Called with no arguments it reads both sides out of the local database, which
 * is what `rescore` does: no network, no key, no cost.
 */
export function scoreJobs(
  profileVec?: Vec,
  jobs?: Vectored[],
): ScoredJob[] {
  const profile = profileVec ?? getEmbedding("profile", PROFILE_ID);
  if (!profile) return [];
  const rows = jobs ?? allEmbeddings("job");
  return rows.map((j) => {
    const cos = cosine(profile, j.vec);
    return { id: j.id, fit: fitScore(cos), cos };
  });
}

// ---------------------------------------------------------------------------
// Matches and gaps
// ---------------------------------------------------------------------------

/**
 * Split a job description into scoreable phrases. Requirements arrive as bullet
 * lines at least as often as sentences, so both are split points. Fragments
 * under ~25 characters ("Nice to have:") carry no meaning to embed.
 */
export function splitPhrases(text: string, max = 60): string[] {
  const parts = text
    .split(/\r?\n+|(?<=[.!?])\s+(?=[A-Z])|(?:^|\s)[•▪·—-]\s+/g)
    .map((s) => s.replace(/^[\s•▪·—-]+/, "").replace(/\s+/g, " ").trim())
    .filter((s) => s.length >= 25 && s.length <= 400);
  const seen = new Set<string>();
  const out: string[] = [];
  for (const p of parts) {
    const k = p.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(p);
    if (out.length >= max) break;
  }
  return out;
}

export type MatchesAndGaps = {
  matches: string[];
  gaps: string[];
  scored: Array<{ phrase: string; cos: number }>;
};

/**
 * Embed the JD's phrases, score each against the nearest thing in the experience
 * library, and return the 3 closest ("matches") and the 2 furthest ("gaps").
 *
 * The gaps are the honest part of the OS: they are the JD requirements that
 * nothing in your real experience answers. They feed the addressing-weaknesses
 * work, and they are derived, not self-reported.
 *
 * Costs Voyage tokens. Requires VOYAGE_API_KEY; the caller checks hasVoyage()
 * first and skips this entirely when the key is missing.
 */
export async function matchesAndGaps(
  jobText: string,
  profileChunks: Array<string | { text: string; vec: Vec }>,
): Promise<MatchesAndGaps> {
  const phrases = splitPhrases(jobText ?? "");
  if (phrases.length === 0 || profileChunks.length === 0) {
    return { matches: [], gaps: [], scored: [] };
  }

  // Chunks may arrive already embedded (cheap: nothing new is sent to Voyage) or
  // as plain strings from the experience library, in which case they are embedded
  // in the same call as the JD phrases so it stays one round trip.
  const plain = profileChunks.filter((c): c is string => typeof c === "string");
  const preVectored = profileChunks.filter(
    (c): c is { text: string; vec: Vec } => typeof c !== "string" && !!c && !!c.vec,
  );

  const vecs = await embedTexts([...phrases, ...plain]);
  const phraseVecs = vecs.slice(0, phrases.length);
  const plainVecs = vecs.slice(phrases.length);
  const chunkVecs: Vec[] = [...preVectored.map((c) => c.vec), ...plainVecs];
  if (chunkVecs.length === 0) return { matches: [], gaps: [], scored: [] };

  const scored = phrases.map((phrase, i) => {
    let best = -1;
    for (const c of chunkVecs) {
      const s = cosine(phraseVecs[i], c);
      if (s > best) best = s;
    }
    return { phrase, cos: best };
  });

  const byScore = [...scored].sort((a, b) => b.cos - a.cos);
  return {
    matches: byScore.slice(0, 3).map((s) => s.phrase),
    // Only call something a gap when it is genuinely far from everything you have
    // done. Below the floor of the fit scale means "nothing in the library is
    // about this", which is exactly what a gap is.
    gaps: byScore
      .filter((s) => s.cos < FIT_COS_FLOOR + 0.15)
      .slice(-2)
      .reverse()
      .map((s) => s.phrase),
    scored,
  };
}

// ---------------------------------------------------------------------------
// Archetype clustering
// ---------------------------------------------------------------------------

export type Clusterable = { id: string; vec: Vec; label?: string | null };

export type Cluster = {
  key: string;
  label: string;
  ids: string[];
  count: number;
};

/** Words that appear in every PM title and so can never distinguish two clusters. */
const STOP = new Set([
  "the", "and", "of", "for", "to", "a", "an", "in", "at", "with", "on", "or",
  "senior", "sr", "staff", "lead", "principal", "junior", "jr", "ii", "iii", "i",
  "manager", "management", "product", "director", "head", "team", "group",
  "engineer", "engineering", "specialist", "associate", "role", "job", "new",
  "remote", "hybrid", "onsite", "full", "time", "fulltime",
]);

/**
 * Greedy centroid clustering. Walk the items once, drop each into the first
 * cluster whose running centroid it sits within `threshold` of, otherwise start
 * a new cluster. One pass, no k to choose, and the order-dependence does not
 * matter at this scale — the point is "your feed is really three roles", not a
 * defensible taxonomy.
 *
 * 0.82 is the default because below it distinct functions (growth vs platform)
 * merge, and above it the same role at two companies splits.
 */
export function cluster(jobs: Clusterable[], threshold = 0.82): Cluster[] {
  const buckets: Array<{ centroid: Float32Array; members: Clusterable[] }> = [];

  for (const j of jobs) {
    if (!j.vec || j.vec.length === 0) continue;
    let best = -1;
    let bestIdx = -1;
    for (let i = 0; i < buckets.length; i++) {
      const s = cosine(buckets[i].centroid, j.vec);
      if (s > best) {
        best = s;
        bestIdx = i;
      }
    }
    if (bestIdx >= 0 && best >= threshold) {
      buckets[bestIdx].members.push(j);
      const c = centroid(buckets[bestIdx].members.map((m) => m.vec));
      if (c) buckets[bestIdx].centroid = c;
    } else {
      buckets.push({ centroid: toF32(j.vec), members: [j] });
    }
  }

  return buckets
    .map((b) => {
      const label = labelFor(b.members);
      return {
        key: label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
        label,
        ids: b.members.map((m) => m.id),
        count: b.members.length,
      };
    })
    .sort((a, b) => b.count - a.count);
}

/**
 * Name a cluster from the words its members' titles actually share. Never
 * invents a name: with nothing distinctive in common the label says so, because
 * "Mixed roles" is true and "Growth PM" would not be.
 */
function labelFor(members: Clusterable[]): string {
  const freq = new Map<string, number>();
  for (const m of members) {
    const words = new Set(
      (m.label ?? "")
        .toLowerCase()
        .split(/[^a-z0-9+]+/)
        .filter((w) => w.length > 1 && !STOP.has(w)),
    );
    for (const w of words) freq.set(w, (freq.get(w) ?? 0) + 1);
  }
  const top = [...freq.entries()]
    .filter(([, n]) => n >= Math.max(2, Math.ceil(members.length * 0.4)))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([w]) => w[0].toUpperCase() + w.slice(1));

  if (top.length === 0) return `Mixed roles (${members.length})`;
  return `${top.join(" ")} PM`.replace(/\s+/g, " ");
}

// ---------------------------------------------------------------------------
// Duplicate collapsing
// ---------------------------------------------------------------------------

/**
 * The same posting reappears across boards and across weeks with a reworded
 * title. Above ~0.95 cosine on the full JD text it is the same job, so keep the
 * first one seen as canonical and point the rest at it.
 *
 * Returns only the rows that ARE duplicates; the caller writes `duplicate_of`.
 * Nothing is deleted — a collapsed row still exists and can be inspected.
 */
export function dedupe(
  jobs: Vectored[],
  threshold = 0.95,
): Array<{ id: string; duplicate_of: string }> {
  const canonical: Vectored[] = [];
  const out: Array<{ id: string; duplicate_of: string }> = [];

  for (const j of jobs) {
    if (!j.vec || j.vec.length === 0) continue;
    let hit: string | null = null;
    for (const c of canonical) {
      if (cosine(c.vec, j.vec) >= threshold) {
        hit = c.id;
        break;
      }
    }
    if (hit) out.push({ id: j.id, duplicate_of: hit });
    else canonical.push(j);
  }
  return out;
}

// ---------------------------------------------------------------------------
// Referral affinity
// ---------------------------------------------------------------------------

/**
 * Warmth: how much this person's professional background looks like yours.
 * Same 0.30-0.80 observed band as fit, expressed 0-1 with two decimals because
 * that is how the dashboard shows it. Higher is a better referral ask: people
 * who walked your path answer strangers who walked their path.
 */
export function affinity(profileVec: Vec, personVec: Vec): number {
  const cos = cosine(profileVec, personVec);
  const t = (cos - FIT_COS_FLOOR) / (FIT_COS_CEILING - FIT_COS_FLOOR);
  return Math.round(Math.max(0, Math.min(1, t)) * 100) / 100;
}

export type UserProfileFacts = {
  employers?: string[];
  schools?: string[];
  cities?: string[];
  titles?: string[];
};

export type PersonFacts = {
  name?: string | null;
  headline?: string | null;
  title?: string | null;
  company?: string | null;
  location?: string | null;
  employers?: string[];
  schools?: string[];
  last_post_text?: string | null;
  last_post_at?: string | null;
};

const norm = (s: string): string =>
  s
    .toLowerCase()
    .replace(/\b(inc|llc|ltd|corp|corporation|co|company|university|the)\b/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

/** Same organization, allowing for "Amazon" vs "Amazon Web Services". */
function sameOrg(a: string, b: string): boolean {
  const x = norm(a);
  const y = norm(b);
  if (!x || !y) return false;
  if (x === y) return true;
  return x.length >= 4 && y.length >= 4 && (x.includes(y) || y.includes(x));
}

/** "San Francisco Bay Area" and "San Francisco" are the same city to a human. */
function sameCity(a: string, b: string): boolean {
  const x = norm(a).replace(/ bay area| metropolitan area| area| region/g, "").trim();
  const y = norm(b).replace(/ bay area| metropolitan area| area| region/g, "").trim();
  if (!x || !y) return false;
  const xf = x.split(/\s*,\s*|\s+/)[0];
  const yf = y.split(/\s*,\s*|\s+/)[0];
  return x === y || (xf.length >= 4 && xf === yf);
}

/**
 * The concrete reasons this person is a warm path — computed from fields, never
 * from embeddings and never invented. Every string returned here is something a
 * human could verify on the person's profile in five seconds, because the user
 * is about to put it in a message to a stranger and be held to it.
 *
 * Returns an empty array when there is no real overlap. An empty array is the
 * honest answer, and the dashboard shows "—" for it.
 */
export function whyWarm(
  userProfile: UserProfileFacts,
  person: PersonFacts,
): string[] {
  const out: string[] = [];

  const personEmployers = [
    ...(person.employers ?? []),
    ...(person.company ? [person.company] : []),
  ];
  for (const mine of userProfile.employers ?? []) {
    const hit = personEmployers.find((theirs) => sameOrg(mine, theirs));
    if (hit) {
      out.push(`Also worked at ${mine}`);
      break;
    }
  }

  for (const mine of userProfile.schools ?? []) {
    const hit = (person.schools ?? []).find((theirs) => sameOrg(mine, theirs));
    if (hit) {
      out.push(`Both went to ${mine}`);
      break;
    }
  }

  if (person.location) {
    for (const mine of userProfile.cities ?? []) {
      if (sameCity(mine, person.location)) {
        out.push(`Both in ${person.location}`);
        break;
      }
    }
  }

  // A shared function ("product management") is weaker than a shared employer but
  // still real, and it is the honest hook when there is nothing else.
  const theirRole = `${person.title ?? ""} ${person.headline ?? ""}`.toLowerCase();
  for (const mine of userProfile.titles ?? []) {
    const words = norm(mine)
      .split(/\s+/)
      .filter((w) => w.length > 3 && !STOP.has(w));
    if (words.length && words.every((w) => theirRole.includes(w))) {
      out.push(`Same function: ${mine}`);
      break;
    }
  }

  if (person.last_post_text && person.last_post_at) {
    const days = Math.floor(
      (Date.now() - new Date(person.last_post_at).getTime()) / 86_400_000,
    );
    if (Number.isFinite(days) && days >= 0 && days <= 30) {
      out.push(days === 0 ? "Posted today" : `Posted ${days}d ago`);
    }
  }

  return out;
}

/**
 * Titles that decide headcount. A "likely hiring manager" flag changes the
 * outreach entirely — a work product instead of a referral ask — so this errs
 * toward false negatives: a wrong HM guess wastes the single best message you
 * get to send that company.
 */
const HM_PATTERNS =
  /\b(head of|vp of|vice president|director of|group product manager|gpm|engineering manager|senior manager|chief|founder|co-?founder)\b/i;

export function likelyHiringManager(person: PersonFacts): boolean {
  const t = `${person.title ?? ""} ${person.headline ?? ""}`;
  return HM_PATTERNS.test(t);
}
