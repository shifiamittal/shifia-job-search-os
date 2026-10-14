import Database from "better-sqlite3";
import crypto from "node:crypto";
import path from "node:path";
import fs from "node:fs";

/**
 * Local only. The database lives next to this tool, on your machine, and nothing
 * in it is ever uploaded anywhere. Delete `data/jobs.db` and you have deleted
 * every scraped row.
 */
export const DB_PATH =
  process.env.DB_PATH ?? path.join(process.cwd(), "data", "jobs.db");

let _db: Database.Database | null = null;

export function db(): Database.Database {
  if (_db) return _db;
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  const conn = new Database(DB_PATH);
  registerRegexp(conn);
  conn.pragma("journal_mode = WAL");
  migrate(conn);
  _db = conn;
  return conn;
}

/** Close the handle. Only scripts that exit need this; tests use it between runs. */
export function closeDb(): void {
  if (_db) {
    _db.close();
    _db = null;
  }
}

/**
 * SQLite ships no REGEXP implementation, so `X REGEXP Y` is a syntax error until
 * a host function supplies one. `query.ts` needs word-boundary matching: a bare
 * LIKE '%pm%' also matches "impact", "company" and "employment".
 */
const RE_CACHE = new Map<string, RegExp>();

function registerRegexp(conn: Database.Database) {
  conn.function("regexp", { deterministic: true }, (pattern, value) => {
    if (typeof value !== "string" || typeof pattern !== "string") return 0;
    let re = RE_CACHE.get(pattern);
    if (!re) {
      try {
        re = new RegExp(pattern, "iu");
      } catch {
        return 0; // An unparseable pattern matches nothing; it never crashes a query.
      }
      RE_CACHE.set(pattern, re);
    }
    return re.test(value) ? 1 : 0;
  });
}

/**
 * Vectors are stored as raw Float32Array bytes in a BLOB and compared with a
 * plain-JS cosine (see voyage.ts). No sqlite extension, no native vector library:
 * over a few thousand rows the JS loop is instant, and a native dependency is the
 * single most common thing that fails to install on a non-technical user's laptop.
 */
function migrate(conn: Database.Database) {
  conn.exec(`
    CREATE TABLE IF NOT EXISTS jobs (
      id TEXT PRIMARY KEY,            -- slug: company-role-hash
      linkedin_id TEXT UNIQUE,
      company TEXT NOT NULL, role TEXT NOT NULL, location TEXT,
      posted_at TEXT, salary TEXT, seniority TEXT, employment_type TEXT,
      url TEXT, description TEXT,
      source TEXT NOT NULL,           -- 'apify:linkedin-job-search' | 'manual'
      fit INTEGER,                    -- 0-100, null when no Voyage key
      archetype TEXT, duplicate_of TEXT,
      status TEXT DEFAULT 'sourced',  -- sourced|applied|screen|onsite|offer|hidden
      first_seen TEXT NOT NULL, last_seen TEXT NOT NULL, raw TEXT
    );
    CREATE TABLE IF NOT EXISTS people (
      id TEXT PRIMARY KEY,            -- linkedin publicId
      name TEXT, headline TEXT, title TEXT, company TEXT, location TEXT, url TEXT,
      warmth REAL,                    -- 0-1 voyage affinity, null without key
      why_warm TEXT,                  -- JSON array of strings
      likely_hm INTEGER DEFAULT 0,
      status TEXT DEFAULT 'cold',     -- cold|requested|connected|replied|referred
      enriched INTEGER DEFAULT 0,
      last_post_text TEXT, last_post_url TEXT, last_post_at TEXT,
      first_seen TEXT, last_seen TEXT, raw TEXT
    );
    CREATE TABLE IF NOT EXISTS signals (
      id TEXT PRIMARY KEY, company TEXT, author TEXT, author_url TEXT,
      text TEXT, url TEXT, posted_at TEXT, kind TEXT, raw TEXT
    );
    CREATE TABLE IF NOT EXISTS embeddings (
      owner_type TEXT, owner_id TEXT, model TEXT, dim INTEGER, vec BLOB,
      PRIMARY KEY (owner_type, owner_id)
    );
    CREATE TABLE IF NOT EXISTS meta (k TEXT PRIMARY KEY, v TEXT);

    CREATE INDEX IF NOT EXISTS idx_jobs_fit      ON jobs(fit DESC);
    CREATE INDEX IF NOT EXISTS idx_jobs_company  ON jobs(company);
    CREATE INDEX IF NOT EXISTS idx_jobs_status   ON jobs(status);
    CREATE INDEX IF NOT EXISTS idx_jobs_posted   ON jobs(posted_at DESC);
    CREATE INDEX IF NOT EXISTS idx_people_comp   ON people(company);
    CREATE INDEX IF NOT EXISTS idx_people_warmth ON people(warmth DESC);
    CREATE INDEX IF NOT EXISTS idx_signals_comp  ON signals(company);
  `);
}

// ---------------------------------------------------------------------------
// Row types. These are the shapes every script and normalizer speaks.
// Absent data is null. Never 0, never "", never a guess.
// ---------------------------------------------------------------------------

export type JobStatus =
  | "sourced"
  | "applied"
  | "screen"
  | "onsite"
  | "offer"
  | "hidden";

export type PersonStatus =
  | "cold"
  | "requested"
  | "connected"
  | "replied"
  | "referred";

export type JobRow = {
  id: string;
  linkedin_id: string | null;
  company: string;
  role: string;
  location: string | null;
  posted_at: string | null;
  salary: string | null;
  seniority: string | null;
  employment_type: string | null;
  url: string | null;
  description: string | null;
  source: string;
  fit: number | null;
  archetype: string | null;
  duplicate_of: string | null;
  status: JobStatus;
  first_seen: string;
  last_seen: string;
  raw: string | null;
};

export type PersonRow = {
  id: string;
  name: string | null;
  headline: string | null;
  title: string | null;
  company: string | null;
  location: string | null;
  url: string | null;
  warmth: number | null;
  why_warm: string | null; // JSON array of strings
  likely_hm: number; // 0 | 1
  status: PersonStatus;
  enriched: number; // 0 | 1
  last_post_text: string | null;
  last_post_url: string | null;
  last_post_at: string | null;
  first_seen: string | null;
  last_seen: string | null;
  raw: string | null;
};

export type SignalRow = {
  id: string;
  company: string | null;
  author: string | null;
  author_url: string | null;
  text: string | null;
  url: string | null;
  posted_at: string | null;
  kind: string | null;
  raw: string | null;
};

export type OwnerType = "job" | "person" | "profile";

/** Every column of a table that an upsert may omit, so callers can pass partials. */
type Insertable<T> = Partial<T>;

export const nowIso = (): string => new Date().toISOString();

/** "Senior Product Manager, Growth" -> "senior-product-manager-growth" */
export function slug(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

/**
 * Stable row id: company-role-hash. The hash is over whatever uniquely identifies
 * the posting (its LinkedIn id, or its URL, or company+role+location), so the same
 * job seen next week lands on the same row instead of duplicating.
 */
export function jobId(company: string, role: string, unique: string): string {
  const h = crypto.createHash("sha256").update(unique).digest("hex").slice(0, 8);
  return `${slug(company) || "company"}-${slug(role) || "role"}-${h}`;
}

// ---------------------------------------------------------------------------
// Upserts. COALESCE everywhere: a re-scrape that returns fewer fields must never
// blank out data we already had.
// ---------------------------------------------------------------------------

export function upsertJob(j: Insertable<JobRow> & { company: string; role: string }): string {
  const conn = db();
  const ts = nowIso();
  const id = j.id ?? jobId(j.company, j.role, j.linkedin_id ?? j.url ?? `${j.company}|${j.role}|${j.location ?? ""}`);
  conn
    .prepare(
      `INSERT INTO jobs (
         id, linkedin_id, company, role, location, posted_at, salary, seniority,
         employment_type, url, description, source, fit, archetype, duplicate_of,
         status, first_seen, last_seen, raw
       ) VALUES (
         @id, @linkedin_id, @company, @role, @location, @posted_at, @salary, @seniority,
         @employment_type, @url, @description, @source, @fit, @archetype, @duplicate_of,
         @status, @first_seen, @last_seen, @raw
       )
       ON CONFLICT(id) DO UPDATE SET
         linkedin_id     = COALESCE(excluded.linkedin_id, jobs.linkedin_id),
         company         = COALESCE(excluded.company, jobs.company),
         role            = COALESCE(excluded.role, jobs.role),
         location        = COALESCE(excluded.location, jobs.location),
         posted_at       = COALESCE(excluded.posted_at, jobs.posted_at),
         salary          = COALESCE(excluded.salary, jobs.salary),
         seniority       = COALESCE(excluded.seniority, jobs.seniority),
         employment_type = COALESCE(excluded.employment_type, jobs.employment_type),
         url             = COALESCE(excluded.url, jobs.url),
         description     = COALESCE(excluded.description, jobs.description),
         fit             = COALESCE(excluded.fit, jobs.fit),
         archetype       = COALESCE(excluded.archetype, jobs.archetype),
         duplicate_of    = COALESCE(excluded.duplicate_of, jobs.duplicate_of),
         raw             = COALESCE(excluded.raw, jobs.raw),
         last_seen       = excluded.last_seen`,
    )
    .run({
      id,
      linkedin_id: j.linkedin_id ?? null,
      company: j.company,
      role: j.role,
      location: j.location ?? null,
      posted_at: j.posted_at ?? null,
      salary: j.salary ?? null,
      seniority: j.seniority ?? null,
      employment_type: j.employment_type ?? null,
      url: j.url ?? null,
      description: j.description ?? null,
      source: j.source ?? "manual",
      fit: j.fit ?? null,
      archetype: j.archetype ?? null,
      duplicate_of: j.duplicate_of ?? null,
      status: j.status ?? "sourced",
      first_seen: j.first_seen ?? ts,
      last_seen: j.last_seen ?? ts,
      raw: j.raw ?? null,
    });
  return id;
}

export function upsertPerson(p: Insertable<PersonRow> & { id: string }): string {
  const conn = db();
  const ts = nowIso();
  conn
    .prepare(
      `INSERT INTO people (
         id, name, headline, title, company, location, url, warmth, why_warm,
         likely_hm, status, enriched, last_post_text, last_post_url, last_post_at,
         first_seen, last_seen, raw
       ) VALUES (
         @id, @name, @headline, @title, @company, @location, @url, @warmth, @why_warm,
         @likely_hm, @status, @enriched, @last_post_text, @last_post_url, @last_post_at,
         @first_seen, @last_seen, @raw
       )
       ON CONFLICT(id) DO UPDATE SET
         name           = COALESCE(excluded.name, people.name),
         headline       = COALESCE(excluded.headline, people.headline),
         title          = COALESCE(excluded.title, people.title),
         company        = COALESCE(excluded.company, people.company),
         location       = COALESCE(excluded.location, people.location),
         url            = COALESCE(excluded.url, people.url),
         warmth         = COALESCE(excluded.warmth, people.warmth),
         why_warm       = COALESCE(excluded.why_warm, people.why_warm),
         likely_hm      = MAX(excluded.likely_hm, people.likely_hm),
         enriched       = MAX(excluded.enriched, people.enriched),
         last_post_text = COALESCE(excluded.last_post_text, people.last_post_text),
         last_post_url  = COALESCE(excluded.last_post_url, people.last_post_url),
         last_post_at   = COALESCE(excluded.last_post_at, people.last_post_at),
         raw            = COALESCE(excluded.raw, people.raw),
         last_seen      = excluded.last_seen`,
    )
    .run({
      id: p.id,
      name: p.name ?? null,
      headline: p.headline ?? null,
      title: p.title ?? null,
      company: p.company ?? null,
      location: p.location ?? null,
      url: p.url ?? null,
      warmth: p.warmth ?? null,
      why_warm: p.why_warm ?? null,
      likely_hm: p.likely_hm ?? 0,
      status: p.status ?? "cold",
      enriched: p.enriched ?? 0,
      last_post_text: p.last_post_text ?? null,
      last_post_url: p.last_post_url ?? null,
      last_post_at: p.last_post_at ?? null,
      first_seen: p.first_seen ?? ts,
      last_seen: p.last_seen ?? ts,
      raw: p.raw ?? null,
    });
  return p.id;
}

export function upsertSignal(s: Insertable<SignalRow> & { id: string }): string {
  const conn = db();
  conn
    .prepare(
      `INSERT INTO signals (id, company, author, author_url, text, url, posted_at, kind, raw)
       VALUES (@id, @company, @author, @author_url, @text, @url, @posted_at, @kind, @raw)
       ON CONFLICT(id) DO UPDATE SET
         company    = COALESCE(excluded.company, signals.company),
         author     = COALESCE(excluded.author, signals.author),
         author_url = COALESCE(excluded.author_url, signals.author_url),
         text       = COALESCE(excluded.text, signals.text),
         url        = COALESCE(excluded.url, signals.url),
         posted_at  = COALESCE(excluded.posted_at, signals.posted_at),
         kind       = COALESCE(excluded.kind, signals.kind),
         raw        = COALESCE(excluded.raw, signals.raw)`,
    )
    .run({
      id: s.id,
      company: s.company ?? null,
      author: s.author ?? null,
      author_url: s.author_url ?? null,
      text: s.text ?? null,
      url: s.url ?? null,
      posted_at: s.posted_at ?? null,
      kind: s.kind ?? null,
      raw: s.raw ?? null,
    });
  return s.id;
}

/** Status is user-owned state, so the scrapers never touch it — only this does. */
export function setJobStatus(id: string, status: JobStatus): void {
  db().prepare(`UPDATE jobs SET status = ? WHERE id = ?`).run(status, id);
}

export function setPersonStatus(id: string, status: PersonStatus): void {
  db().prepare(`UPDATE people SET status = ? WHERE id = ?`).run(status, id);
}

// ---------------------------------------------------------------------------
// Embeddings. Float32Array <-> BLOB, byte for byte.
// ---------------------------------------------------------------------------

/** Float32Array -> Buffer, without copying the underlying bytes. */
export function vecToBuf(v: Float32Array): Buffer {
  return Buffer.from(v.buffer, v.byteOffset, v.byteLength);
}

/**
 * Buffer -> Float32Array. Node may hand back a Buffer whose byteOffset is not a
 * multiple of 4 (it pools small allocations), and Float32Array would throw on
 * that, so copy when the offset is unaligned.
 */
export function bufToVec(b: Buffer): Float32Array {
  if (b.byteOffset % 4 === 0) {
    return new Float32Array(b.buffer, b.byteOffset, b.byteLength / 4);
  }
  const copy = Buffer.from(b);
  return new Float32Array(copy.buffer, copy.byteOffset, copy.byteLength / 4);
}

export function putEmbedding(
  ownerType: OwnerType,
  ownerId: string,
  model: string,
  vec: Float32Array | number[],
): void {
  const v = vec instanceof Float32Array ? vec : Float32Array.from(vec);
  db()
    .prepare(
      `INSERT INTO embeddings (owner_type, owner_id, model, dim, vec)
       VALUES (?, ?, ?, ?, ?)
       ON CONFLICT(owner_type, owner_id) DO UPDATE SET
         model = excluded.model, dim = excluded.dim, vec = excluded.vec`,
    )
    .run(ownerType, ownerId, model, v.length, vecToBuf(v));
}

export function getEmbedding(
  ownerType: OwnerType,
  ownerId: string,
): Float32Array | null {
  const row = db()
    .prepare(`SELECT vec FROM embeddings WHERE owner_type = ? AND owner_id = ?`)
    .get(ownerType, ownerId) as { vec: Buffer } | undefined;
  return row ? bufToVec(row.vec) : null;
}

/** Every stored vector of one kind, for the in-memory cosine passes in fit.ts. */
export function allEmbeddings(
  ownerType: OwnerType,
): Array<{ id: string; vec: Float32Array }> {
  const rows = db()
    .prepare(`SELECT owner_id, vec FROM embeddings WHERE owner_type = ?`)
    .all(ownerType) as Array<{ owner_id: string; vec: Buffer }>;
  return rows.map((r) => ({ id: r.owner_id, vec: bufToVec(r.vec) }));
}

export function deleteEmbedding(ownerType: OwnerType, ownerId: string): void {
  db()
    .prepare(`DELETE FROM embeddings WHERE owner_type = ? AND owner_id = ?`)
    .run(ownerType, ownerId);
}

// ---------------------------------------------------------------------------
// meta: last scrape time, spend estimates, the profile embedding's source hash.
// ---------------------------------------------------------------------------

export function setMeta(k: string, v: string): void {
  db()
    .prepare(
      `INSERT INTO meta (k, v) VALUES (?, ?)
       ON CONFLICT(k) DO UPDATE SET v = excluded.v`,
    )
    .run(k, v);
}

export function getMeta(k: string): string | null {
  const row = db().prepare(`SELECT v FROM meta WHERE k = ?`).get(k) as
    | { v: string }
    | undefined;
  return row ? row.v : null;
}

/** Convenience for the spend counter: meta values are text, this keeps it honest. */
export function bumpMeta(k: string, by: number): number {
  const cur = Number(getMeta(k) ?? 0);
  const next = (Number.isFinite(cur) ? cur : 0) + by;
  setMeta(k, String(next));
  return next;
}
