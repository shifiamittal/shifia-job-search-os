const API = "https://api.voyageai.com/v1";

export const TEXT_MODEL = process.env.VOYAGE_TEXT_MODEL ?? "voyage-3.5";
/** voyage-3.5 emits 1024-dim vectors — must match what is stored in embeddings.dim. */
export const DIM = 1024;

function key(): string {
  const k = process.env.VOYAGE_API_KEY;
  if (!k) {
    throw new Error(
      "VOYAGE_API_KEY is missing, so fit scores cannot be computed.\n" +
        "  Fix: open the job-lab folder, copy .env.example to .env, then paste\n" +
        "  your key after VOYAGE_API_KEY= on that line.\n" +
        "  Get a key at https://dashboard.voyageai.com/api-keys\n" +
        "  This key is optional: find-jobs, find-people, export and query all\n" +
        "  work without it. Jobs simply show no fit score instead of a fake one.",
    );
  }
  return k;
}

export function hasVoyage(): boolean {
  return !!process.env.VOYAGE_API_KEY;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Accounts with no payment method are capped at 3 requests/min, so a plain
 * sequential loop 429s almost immediately. Back off and retry rather than failing
 * the run — the free token grant still applies either way.
 */
async function post(path: string, body: unknown, attempt = 0): Promise<any> {
  const res = await fetch(`${API}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (res.status === 429 || res.status >= 500) {
    if (attempt >= 8) {
      throw new Error(
        `Voyage ${path} ${res.status} after 8 retries: ${await res.text()}`,
      );
    }
    const wait = Math.min(60_000, 2_000 * 2 ** attempt);
    console.warn(`    rate limited, retrying in ${wait / 1000}s...`);
    await sleep(wait);
    return post(path, body, attempt + 1);
  }

  if (res.status === 401) {
    throw new Error(
      "Voyage rejected the key in your .env file (401). Check for a stray space " +
        "or a truncated paste, then try again.",
    );
  }

  if (!res.ok) throw new Error(`Voyage ${path} ${res.status}: ${await res.text()}`);
  return res.json();
}

/** L2-normalize so cosine is just a dot product, and every stored vector is comparable. */
function normalizeVec(v: number[]): number[] {
  const mag = Math.sqrt(v.reduce((s, x) => s + x * x, 0)) || 1;
  return v.map((x) => x / mag);
}

/**
 * Vectors travel as plain `number[]` (that is what the API returns and what JSON
 * round-trips), and are stored and compared as Float32Array. This is the one
 * conversion, so nobody has to think about which side they are holding.
 */
export function toF32(v: ArrayLike<number>): Float32Array {
  return v instanceof Float32Array ? v : Float32Array.from(v as ArrayLike<number>);
}

/**
 * Small by default: the no-payment-method tier caps at 10K tokens/min, and a job
 * description runs ~800 tokens. Raise via VOYAGE_TEXT_BATCH once billing is on.
 */
export const TEXT_BATCH = Number(process.env.VOYAGE_TEXT_BATCH ?? 16);

/**
 * Embed documents. Returns one L2-normalized Float32Array per input, in order.
 * Empty strings are sent as a single space: the API rejects an empty input, and
 * dropping the row would silently misalign every vector after it.
 */
export async function embedTexts(texts: string[]): Promise<number[][]> {
  if (texts.length === 0) return [];
  const out: number[][] = [];
  for (let i = 0; i < texts.length; i += TEXT_BATCH) {
    const batch = texts
      .slice(i, i + TEXT_BATCH)
      .map((t) => (t ?? "").slice(0, 8000) || " ");
    const json = await post("/embeddings", {
      input: batch,
      model: TEXT_MODEL,
      input_type: "document",
      output_dimension: DIM,
    });
    for (const d of json.data) out.push(normalizeVec(d.embedding));
  }
  return out;
}

/** Embed a search query — input_type must differ from documents for retrieval quality. */
export async function embedQuery(q: string): Promise<number[]> {
  const json = await post("/embeddings", {
    input: [q.slice(0, 8000) || " "],
    model: TEXT_MODEL,
    input_type: "query",
    output_dimension: DIM,
  });
  return normalizeVec(json.data[0].embedding);
}

/**
 * Cosine similarity, plain JS. Both vectors are already L2-normalized when they
 * come from this file, so this is a dot product; the magnitude terms are kept
 * anyway so a hand-built or externally-sourced vector still gives a right answer.
 * Mismatched lengths return 0 rather than throwing, because one stale vector from
 * an older model must not take down a whole rescore.
 */
export function cosine(a: ArrayLike<number>, b: ArrayLike<number>): number {
  if (a.length !== b.length || a.length === 0) return 0;
  let dot = 0;
  let ma = 0;
  let mb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    ma += a[i] * a[i];
    mb += b[i] * b[i];
  }
  const denom = Math.sqrt(ma) * Math.sqrt(mb);
  if (denom === 0) return 0;
  const c = dot / denom;
  return c > 1 ? 1 : c < -1 ? -1 : c;
}

/** Mean of several vectors, re-normalized. Used for profile and cluster centroids. */
export function centroid(vecs: ArrayLike<number>[]): Float32Array | null {
  const usable = vecs.filter((v) => v && v.length > 0);
  if (usable.length === 0) return null;
  const dim = usable[0].length;
  const sum = new Float32Array(dim);
  let n = 0;
  for (const v of usable) {
    if (v.length !== dim) continue; // Skip vectors from another model rather than corrupting the mean.
    for (let i = 0; i < dim; i++) sum[i] += v[i];
    n++;
  }
  if (n === 0) return null;
  let mag = 0;
  for (let i = 0; i < dim; i++) {
    sum[i] /= n;
    mag += sum[i] * sum[i];
  }
  mag = Math.sqrt(mag) || 1;
  for (let i = 0; i < dim; i++) sum[i] /= mag;
  return sum;
}
