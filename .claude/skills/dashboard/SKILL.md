---
name: dashboard
description: Regenerate dashboard/data.json from the context library and job-lab, then tell the user how to open the visual dashboard. Entirely optional — every number in it is also available by asking.
---

# /dashboard - Refresh and Open the Visual Dashboard

**THE DASHBOARD IS OPTIONAL.** It is a viewer, never a dependency. Nothing in the Job Search OS requires it, and no skill reads from it. Every number it shows can be obtained by asking Claude — `/app-tracker pipeline`, `/find-jobs`, `/weekly-retro` all produce the same information as text. If the user never opens the HTML file, nothing breaks. Say this once, briefly, the first time the skill runs. Do not repeat it every time.

The dashboard also **cannot change anything.** It has no backend and writes no files. Every button on it copies a slash command to the clipboard for the user to paste into Claude. The markdown files in `context-library/` stay the single source of truth.

**UNIVERSAL PRIVACY GUARDRAIL:** `dashboard/data.json` is a file the user may email themselves, sync, or screen-share. Nothing PRIVATE from career-plan.md goes in it: reasons for career gaps, reasons for remote preference, age or graduation year, financial constraints, immigration details beyond what the user shares, relationship status, health conditions, family planning, or anything marked private. Private facts may influence which actions rank first. They never get written into the JSON.

## When to Use

Run `/dashboard` when:
- The user says `/dashboard`, "show me my dashboard", "open the dashboard", or "refresh the dashboard"
- Anything in `context-library/` changed materially — a new application, a stage change, a debrief, a fresh job feed
- `job-lab` finished a run (`/find-jobs` and `/build-referral-graph` should both offer it at the end)
- The user asks "how am I doing?" and would be better served by a picture than a paragraph
- End of week, alongside `/weekly-retro`

Arguments:
- `/dashboard` — regenerate `dashboard/data.json` and print the open instructions
- `/dashboard --no-open` — regenerate the JSON only, print nothing about opening it
- `/dashboard --summary` — do not write anything; just print the same numbers as text (for a user who does not want the file at all)

## Inputs

**Read if present — every one of these is optional:**
- `@context-library/app-tracker.md` — the pipeline, stages, days in stage, referral flags
- `@context-library/job-feed.md` — the sourced job feed and archetypes (written by `/find-jobs`)
- `@context-library/referral-paths.md` — the per-company referral graph (written by `/build-referral-graph`)
- `@context-library/connection-tracker.md` — people, warmth, statuses, last contact
- `@context-library/interview-history.md` — debriefs, Three Laws scores, the weakness heatmap
- `@context-library/career-plan.md` — target role, level
- `@context-library/experience-library.md` and `qa-master.md` — for the health panel only (entry counts, fill state)
- `job-lab/.env` and the last export timestamp — for the health panel

**Written:**
- `dashboard/data.json` — the only file this skill writes. Schema is fixed; see the Output section.

**Nothing is required.** If every context file is empty, still write a valid `data.json` with empty arrays. The dashboard's empty states are instructions — each one names the command that fills it — so an empty dashboard is a useful onboarding screen, not a failure.

## Process

### Step 1: Read What Exists

Read each file in the input list. For each one, record whether it is **rich**, **partial**, **empty**, or **absent**. Never guess at a file you could not read. A missing file produces a `null` field and an empty state, not a zero and not an estimate.

Do not read `job-lab/data/jobs.db`. It is a database. `npm run export` already produced the markdown digests; read those.

### Step 2: Compute the Funnel and Find the One Bottleneck

1. Count applications by stage from `app-tracker.md`: sourced, applied, screen, onsite, offer. Map the tracker's finer statuses onto these five (`referral-requested` and `referral-received` roll into `applied`; `recruiter-screen` and `phone-interview` roll into `screen`).
2. Compute stage-to-stage conversion. If a stage has fewer than 5 items entering it, the conversion percentage is **not statistically meaningful** — emit the count but set `conversion` to `null` rather than printing "0%" or "100%" off two data points.
3. Compare each conversion against the benchmark:

| Transition | Benchmark |
|---|---|
| applied → screen | 30% (with referral), 8% (cold) |
| screen → onsite | 25% |
| onsite → offer | 35% |

4. Pick **exactly one** bottleneck: the stage with the worst delta versus benchmark that has enough volume to be real. Never more than one. Two bottlenecks means the user acts on neither.
5. Write the bottleneck as three fields: `why` (the numbers), `fix` (the specific behavioral change), `command` (the one command that starts it). "Referral coverage is 19%, raise it to 60%" plus `/build-referral-graph` is a fix. "Improve your applications" is not.

### Step 3: Choose Exactly Three Next Actions

Rank every possible action and take the top three. Ranking, in order:

1. **Time-critical and irreversible** — an offer with a deadline, an interview in the next 72 hours.
2. **Warm and decaying** — a referral contact who posted in the last 3 days, a connection who accepted but has not been followed up, a person who replied and is waiting.
3. **High fit, high referral path** — a job with a strong fit score at a company where the user already knows people.
4. **The bottleneck fix** from Step 2.
5. Everything else.

Each action gets a `title`, a `why` (the specific reason, with the fact in it), and one or two `buttons`, each a real slash command that exists in this OS. Never invent a command. Never emit more than three actions — the whole point of the Today screen is that three things is a day's work and forty is paralysis.

### Step 4: Assemble the JSON

Build `dashboard/data.json` exactly to the schema below. Rules that matter more than the schema:

- **Absent is `null`, and the UI renders it as `—`.** A job with no listed salary has `"salary": null`. A person with no warmth score (no Voyage key) has `"warmth": null`. Never substitute 0. Zero is a claim; absent is not.
- **If `VOYAGE_API_KEY` is not configured, every `fit`, `warmth`, `archetype`, and `duplicates` field is `null`** and the `archetypes` array is empty. The dashboard hides those columns entirely rather than showing a column of zeros.
- **`scraped_at` is the date of the last real Apify run**, or `null` if there has never been one. The UI turns it amber past 7 days. Never write today's date to make it look fresh.
- **Every `command` string must be a real, runnable command** in this OS. They are the only write path in the entire dashboard.
- Cap array sizes so the file stays small and the page stays fast: `jobs` at 100, `pipeline` at 100, `network` at 30 companies with 15 people each. Note the truncation in `generated_at`'s sibling counts rather than silently dropping rows.

### Step 5: Write the File and Tell the User How to Open It

1. Write `dashboard/data.json`. Overwrite the previous version — it is derived data and is regenerated in seconds.
2. Print the open instructions (below), unless `--no-open` was passed.
3. Print a five-line text summary too. A user who never opens the HTML must get the substance from the chat.

**How the user opens it** — give them exactly this, adapted to their OS:

- **Mac:** In Finder, open the `job-search-os` folder, open the `dashboard` folder, and double-click `index.html`. It opens in your browser.
- **Windows:** In File Explorer, open the `job-search-os` folder, open the `dashboard` folder, and double-click `index.html`.
- **If the page loads but says "drop data.json here":** that is normal in Chrome — Chrome blocks local files from reading other local files. Drag `dashboard/data.json` from your file browser onto the page. It loads instantly. Safari loads it automatically without the drag.

That "drop the file" step is expected behavior, not an error. Say so in the same breath, so nobody thinks the dashboard is broken.

## Output

```markdown
## Dashboard Refreshed — [Date]

Written to `dashboard/data.json`.

**To open it:** double-click `dashboard/index.html`. If the page asks for the data file, drag `dashboard/data.json` onto it — Chrome blocks local files from reading each other, so that drag is normal, not an error.

### The Same Numbers, In Text

- **Funnel:** [N] sourced → [N] applied → [N] screen → [N] onsite → [N] offer
- **Bottleneck:** [stage] at [N]% vs [N]% benchmark. Fix: [one sentence]. → `[command]`
- **Referral coverage:** [N]% of active applications — target 60%
- **Next up:** [interview or deadline, with date] or "nothing scheduled"
- **Data freshness:** job feed last refreshed [date] [amber note if over 7 days] · [or "no automation configured — feed is whatever you've pasted in"]

### Do These Three

1. [Action] — [why, with the specific fact] → `[command]`
2. [Action] — [why] → `[command]`
3. [Action] — [why] → `[command]`

### Health

| File | State |
|---|---|
| experience-library.md | rich · 34 entries |
| career-plan.md | filled |
| qa-master.md | partial · 3 of 9 |
| APIFY_TOKEN | set · last run [date] |
| VOYAGE_API_KEY | missing — fit scores and clustering are off (optional) |

*The dashboard is a viewer. It can't change anything — its buttons copy commands for you to paste back here.*
```

The JSON written to `dashboard/data.json` follows this shape exactly. Any field may be `null` or an empty array:

```json
{
  "generated_at": "2026-08-03",
  "scraped_at": "2026-08-01",
  "user": { "name": "Aakash", "target_role": "Senior PM", "streak_days": 12, "week": 4 },
  "health": {
    "experience_library": { "state": "rich", "detail": "34 entries" },
    "career_plan": { "state": "filled" },
    "qa_master": { "state": "partial", "detail": "3 of 9" },
    "apify": { "state": "ok", "detail": "last run 2026-08-01" },
    "voyage": { "state": "missing", "detail": "fit scores off" }
  },
  "funnel": [
    { "stage": "sourced", "count": 312 },
    { "stage": "applied", "count": 48, "conversion": 0.15, "benchmark": 0.30 }
  ],
  "bottleneck": {
    "stage": "applied→screen",
    "why": "15% vs 30% benchmark",
    "fix": "Referral coverage is 19%. Raise it to 60%.",
    "command": "/build-referral-graph"
  },
  "next_actions": [
    { "type": "referral", "title": "Referral ask → Priya M. (Stripe)",
      "why": "Ex-Amazon like you · posted 2d ago",
      "buttons": [ { "label": "Draft ask", "command": "/referral-request priya-m stripe-payments-pm" } ] }
  ],
  "jobs": [
    { "id": "anthropic-pm-growth", "company": "Anthropic", "role": "Product Manager, Growth",
      "location": "SF hybrid", "posted_at": "2026-08-02", "salary": "$220-280k",
      "url": "https://www.linkedin.com/jobs/view/...", "source": "apify:linkedin-job-search",
      "fit": 91, "matches": ["activation experiments", "0-to-1"], "gaps": ["enterprise sales motion"],
      "referral_path": 2, "duplicates": 0, "archetype": "growth-pm", "status": "sourced" }
  ],
  "archetypes": [ { "key": "growth-pm", "label": "Growth PM", "count": 14 } ],
  "pipeline": [
    { "id": "stripe-pm-pay", "company": "Stripe", "role": "PM, Payments", "stage": "applied",
      "days_in_stage": 14, "fit": 88, "has_referral": false, "next_action": "follow up",
      "command": "/app-tracker update stripe-pm-pay --stage screen" }
  ],
  "network": [
    { "company": "Stripe", "in_pipeline": 4, "referrals": 0,
      "people": [
        { "name": "Priya M.", "title": "Payments PM", "url": "https://www.linkedin.com/in/...",
          "warmth": 0.81, "why_warm": ["ex-Amazon, overlapped 2019-21", "Seattle"],
          "recent_post": { "text": "...", "url": "...", "posted_at": "2026-08-01" },
          "status": "connected", "last_contact": "2026-07-28", "likely_hm": false } ] }
  ],
  "referral_coverage": { "current": 0.19, "target": 0.60 },
  "interviews": {
    "upcoming": [ { "company": "Figma", "round": "onsite", "when": "2026-08-06T14:00",
                    "command": "/interview-prep Figma PM Design onsite" } ],
    "heatmap": [ { "dimension": "Skill demonstration", "score": 5.7, "drill": true } ],
    "last_debrief": { "company": "Figma", "round": "R2", "score": 7.1,
                      "note": "Went shallow on the metric tree." }
  }
}
```

## Example

Input: `/dashboard`

Claude reads `app-tracker.md` (48 applied, 11 screens, 4 onsites, 1 offer), `job-feed.md` (94 sourced from a run two days ago), `connection-tracker.md` (147 people, 9 of 48 applications have a connected contact), and `interview-history.md` (8 debriefs, skill demonstration averaging 5.7). No `VOYAGE_API_KEY`.

The funnel shows applied→screen at 23%, screen→onsite at 36%, onsite→offer at 25%. Screen→onsite and onsite→offer are near benchmark. Applied→screen at 23% against a 30% benchmark is the worst delta with enough volume, and referral coverage of 19% explains it. That is the single bottleneck; the fix is `/build-referral-graph`.

Three actions: (1) the Figma onsite is Thursday, 3 days out, and the last three debriefs all show skill demonstration below 6 — `/interview-prep Figma`; (2) Priya M. at Stripe accepted a connection 6 days ago and has not been followed up, and Stripe has 4 live applications and zero referrals — `/referral-request`; (3) the bottleneck fix.

Every `fit` and `warmth` field is written as `null` because there is no Voyage key, so the dashboard hides both columns. `scraped_at` is two days old, so it renders normally rather than amber.

## Quality Checks

**Good output looks like:**
- `dashboard/data.json` is valid JSON and every `command` in it is a command that actually exists
- Absent data is `null` everywhere. No zeros standing in for missing values, anywhere
- Fit and warmth are `null` across the board when Voyage is not configured, and the columns disappear rather than showing a wall of zeros
- Exactly one bottleneck, with a numeric why, a behavioral fix, and one command
- Exactly three next actions, each with a specific fact as the reason
- Conversions computed off fewer than 5 items are `null`, not a misleading percentage
- The text summary in chat carries the substance, so opening the file is genuinely optional
- The "drag data.json onto the page" step is described as normal, not as an error

**Bad output looks like:**
- Writing today's date into `scraped_at` when no scrape has happened
- Showing `fit: 0` or `warmth: 0` for missing scores
- Nine "next actions"
- Three bottlenecks
- Telling the user the dashboard is required, or that they need Node or Apify to see their pipeline
- Reading `job-lab/data/jobs.db` into context
- Any private field from `career-plan.md` appearing in the JSON
- Claiming a button will do something. Buttons copy text. That is all they do

**Safety checks (non-negotiable):**
- [ ] `data.json` contains no private career-plan content.
- [ ] The dashboard is described as optional every first run, and never described as required.
- [ ] No command in the JSON sends, connects, applies, or messages anyone automatically.
- [ ] Other people's scraped data stays local — never suggest uploading or hosting `data.json`.

### Empty Context

If most context files are empty, still write the file, and make the summary an onboarding path instead of a report:

```
Your dashboard is live but empty — that's expected on day one.

- Fill your experience library (20 min): `Help me build my experience library`
- Fill your career plan (10 min): `Help me fill out my career plan`
- Source your first roles: `/find-jobs` — or just paste a JD and run `/quick-start`

Re-run `/dashboard` after any of those and it fills in.
```

Every empty state in the HTML names the command that fills it, so this stays consistent between the chat and the page.

### If `dashboard/` Does Not Exist

Some users install only the skills. If there is no `dashboard/` folder, do not create one and do not error. Say: "There's no `dashboard/` folder in this install, so I'll give you the numbers as text instead." Then output the `--summary` form. The information is the product; the HTML is a convenience.
