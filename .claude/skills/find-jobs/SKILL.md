---
name: find-jobs
description: Build a live job feed from LinkedIn via job-lab, rank it by semantic fit against your real experience, and hand the top roles to /job-fit-scorer. Works without automation by pasting JDs.
---

# /find-jobs - Live Job Feed

**OPTIONAL AUTOMATION.** This skill has two modes. **Automated mode** runs `job-lab/`, which needs Node and an Apify token (see `setup/AUTOMATION-SETUP.md`). **Manual mode** needs nothing at all — the user pastes JDs, this skill ranks and triages them the same way. Never tell the user they must set up automation. If they have no keys, run manual mode and say so in one sentence.

**UNIVERSAL PRIVACY GUARDRAIL:** When reading career-plan.md, the following information is PRIVATE and must NEVER appear in any external-facing output or in any file written to `job-lab/search.json`: reasons for career gaps (caregiving, health, family), reasons for remote preference (caregiving, disability, family obligations), age or graduation year, personal financial constraints, immigration/visa details beyond what the user explicitly shares, relationship status, health conditions, pregnancy/family planning, and anything marked "private" or "confidential." A search config is a file the user may share or paste into a support thread. Put job criteria in it, nothing else.

## When to Use

Run `/find-jobs` when:
- The user wants a fresh set of roles to work through and does not want to hand-hunt job boards
- It is the start of the week and the pipeline is thin (fewer than 10 sourced roles in `app-tracker.md`)
- The user just filled or changed `career-plan.md` and the search criteria need to be regenerated
- The morning briefing flags "no new roles sourced in 7 days"
- The user pastes one or more JDs and wants them scored and ranked against everything else in the feed

Optional arguments:
- `/find-jobs` — run the default flow (regenerate criteria if stale, then fetch, rank, digest)
- `/find-jobs [company]` — restrict the run to one company
- `/find-jobs --manual` — force manual mode even if automation is configured
- `/find-jobs --refresh` — re-run the scrape even if the last one was under 24 hours ago

## Role Type Detection

Before executing any step, read `career-plan.md` and detect the user's **target function** from their target role title:
- **Product Management (PM):** Product Manager, Group PM, Director of Product, VP Product, CPO
- **Software Engineering (SWE):** Software Engineer, Staff Engineer, Principal Engineer, Engineering Manager
- **Design:** Product Designer, UX Designer, Design Lead, Head of Design, VP Design
- **Data Science / Analytics:** Data Scientist, ML Engineer, Analytics Manager, Head of Data
- **Marketing:** Marketing Manager, Growth Marketing, Brand Manager, VP Marketing, CMO
- **Customer Success / Sales:** CSM, CS Manager, Director of CS, Account Executive, Sales Manager, CRO
- **Other:** Infer function from role description

All instructions below use PM as the default. When the detected function is NOT PM, substitute function-appropriate equivalents as marked with **[FUNCTION-ADAPTIVE]** notes throughout. The title list written into `search.json` is the highest-leverage adaptation — a PM title list returns nothing useful for a Staff Engineer.

## Inputs

**Required files (read automatically):**
- `@context-library/career-plan.md` — level, function, geography, comp floor, dealbreakers. This generates the search criteria.
- `@context-library/experience-library.md` — the text that job descriptions are ranked against.

**Read if present:**
- `@context-library/target-companies.md` — company names to pin into the search
- `@context-library/app-tracker.md` — so already-applied roles are not resurfaced as new
- `job-lab/search.json` — the existing search config, if a previous run wrote one

**Empty context check.** If `experience-library.md` is empty or template-only, STOP and say: "Your experience library is empty, so I have nothing to rank jobs against. Run `Help me build my experience library` first. Want a single role triaged right now instead? Paste the JD and run `/quick-start` — no setup needed." If `career-plan.md` is empty, STOP for automated mode (there are no criteria to search with) but manual mode may still proceed with a warning.

## Process

### Step 1: Decide the Mode

1. Check whether `job-lab/` exists in this folder.
2. Check whether `job-lab/.env` exists and contains a non-empty `APIFY_TOKEN=`.
3. Decide:
   - **Automated mode** — `job-lab/` exists and `APIFY_TOKEN` is set.
   - **Manual mode** — anything else, or the user passed `--manual`.
4. Say which mode you are in, in one line, and move on. Do not lecture. Example: "Running in manual mode — no Apify token found. Paste JDs and I'll rank them against your experience library. (Automation is optional: `setup/AUTOMATION-SETUP.md`.)"

### Step 2: Generate or Refresh the Search Criteria

The user should never have to hand-edit `job-lab/search.json`. Build it from `career-plan.md`.

1. Extract from `career-plan.md`: target titles, target level, locations and remote policy, comp floor, dealbreakers, industries to avoid.
2. Expand the title into a **title list of 3-6 real posting titles**, not job families. Titles are what LinkedIn matches on, and companies do not agree on names. A user targeting "Senior PM" should search `["Product Manager", "Senior Product Manager", "Product Lead", "Principal Product Manager"]`.
   **[FUNCTION-ADAPTIVE]** SWE: `["Staff Software Engineer", "Senior Software Engineer", "Principal Engineer", "Engineering Manager"]`. Design: `["Senior Product Designer", "Staff Product Designer", "Design Lead", "Head of Design"]`. Data Science: `["Senior Data Scientist", "Machine Learning Engineer", "Staff Data Scientist", "Analytics Lead"]`. Marketing: `["Director of Marketing", "Growth Marketing Lead", "Head of Demand Generation"]`. CS: `["Director of Customer Success", "VP Customer Success", "Head of Customer Success"]`.
3. Turn dealbreakers into `exclude_keywords`. Common ones: `clearance`, `unpaid`, `commission-only`, `contract` (only if the user ruled out contract work), `on-site 5 days`.
4. Write `job-lab/search.json`:

```json
{
  "titles": ["Product Manager", "Senior Product Manager", "Product Lead"],
  "locations": ["San Francisco Bay Area", "Remote"],
  "posted_within_days": 14,
  "companies": [],
  "exclude_keywords": ["clearance", "unpaid"],
  "max_jobs_per_run": 120,
  "max_people_per_company": 25
}
```

5. Show the user the config you wrote in a short bullet list — titles, locations, window, cap — and ask them to confirm or adjust before spending anything. Confirming criteria costs nothing; a bad scrape costs money and produces a feed they will ignore.
6. **`max_jobs_per_run` is a spend cap, not a preference.** Never raise it above 250 without the user explicitly asking, and always restate the estimated cost when you do.
7. If the user needs visa sponsorship (per `career-plan.md`), note it here: LinkedIn does not have a reliable sponsorship filter, so sponsorship must be checked per-company later, in `/company-research`. Say that plainly rather than implying the feed is pre-filtered.

### Step 3: Fetch (Automated Mode Only)

1. Tell the user exactly what is about to run and what it costs, before running it:

```
About to run: npm run find-jobs
Cap: 120 jobs. Cost: roughly $0.25-$0.50 of Apify credits at current actor pricing.
This reads public LinkedIn job posts through Apify. It does not log in to your LinkedIn account.
```

2. Run, from inside the `job-lab` folder:

```
npm run find-jobs
```

3. If the user also wants embeddings-based ranking and `VOYAGE_API_KEY` is set:

```
npm run embed
```

4. Then always:

```
npm run export
```

5. Read the digest at `context-library/job-feed.md`. **Never read `job-lab/data/jobs.db` into context.** It is a database, not a document. `export` exists so that Claude reads a filtered markdown digest instead of a table.
6. If the script fails, do not paste the stack trace. Read the one-line error, match it to the troubleshooting table in `setup/AUTOMATION-SETUP.md`, and give the user the single fix line. Then offer manual mode so the session is not wasted.

### Step 4: Rank (Both Modes)

**With Voyage configured (automated mode):** `npm run embed` has already computed a 0-100 `fit` per job from cosine similarity between the experience library and each JD, plus `matches` (the three JD phrases nearest to something real in the experience library) and `gaps` (the two furthest). Use those numbers. Do not recompute them by feel and do not override them silently.

**Without Voyage, or in manual mode:** you rank by reading. Score each role 0-100 using the same five dimensions `/job-fit-scorer` uses (skill match, seniority fit, culture signals, comp range, growth trajectory), but at low resolution — this is triage, not a full score. Label the column **"est. fit"** so it is never confused with a real embedding score or a full `/job-fit-scorer` result.

**Never invent a fit score for a job whose description you have not read.** A role with no description available gets `—`, not a number.

Then, in both modes:
1. Drop anything matching `exclude_keywords`.
2. Drop anything already in `app-tracker.md` at a stage past `sourced`, and say how many you dropped for that reason.
3. Collapse duplicates. The same role reposted three times is one row with a "also posted 2d ago" note.
4. Cross-reference `connection-tracker.md` and report a **referral path count** per role: how many known people work at that company. This is the number that should change the user's behavior, more than fit does.

### Step 5: Cluster into Archetypes

Group the top roles into 2-4 archetypes by what the job actually is, not by company. "Growth PM," "AI Product," "Platform PM." With Voyage, `embed` has already produced these labels; use them. Without Voyage, read the top 25 and cluster by hand.

The point of this step is workload, not taxonomy: **three archetypes means three resume variants, not forty one-off tailorings.** Say that out loud, with the counts, and offer to build the variants.

### Step 6: Write the Digest and Hand Off

1. Write or update `context-library/job-feed.md` with the ranked feed (automated mode's `export` already does this; in manual mode, write it yourself in the same format). This file is what makes the dashboard optional — a user who never opens the HTML gets the same information by reading a markdown file or asking Claude about it.
2. Recommend the next command for the top 3 roles only. A list of 40 next-steps is a list of zero next-steps.
3. Prompt to update the tracker: "Add the top 3 to your pipeline? `/app-tracker add [Company] [Role]`"

## Output

```markdown
## Job Feed — [Date]

**Mode:** [Automated (Apify + Voyage) / Automated (Apify, no fit scores) / Manual]
**Sourced:** [N] roles · **After filters:** [N] · **New since last run:** [N]
**Last scrape:** [date] [amber warning if older than 7 days]
**Criteria:** [titles] · [locations] · posted within [N] days

### Top Roles

| Fit | Company | Role | Location | Posted | Comp | Referral path |
|-----|---------|------|----------|--------|------|---------------|
| 91 | Anthropic | Product Manager, Growth | SF hybrid | 1d | $220-280k | 2 people |
| 84 | Ramp | Senior PM, Spend | NYC | 3d | — | 0 people |

[Fit column is omitted entirely when no fit scores exist. An absent score is never shown as 0.]

### Detail — Top 3

**1. [Company] — [Role]** · fit [N] · posted [N]d · [URL]
- **Matches:** [3 phrases that map to real experience-library entries]
- **Gaps:** [1-2 phrases with no support in the experience library]
- **Referral path:** [N] people at this company in your tracker — [names] · or "none yet"
- **Next:** `/job-fit-scorer [paste JD]` then `/resume-tailor [paste JD]`

### Archetypes

Your feed clusters into [N] role types:
- **[Label]** ([N] roles) — [one-line description]
- **[Label]** ([N] roles) — [one-line description]

That is [N] resume variants, not [total] tailored one-offs. Want me to build them?

### Filtered Out

- [N] excluded by keyword: [which keywords]
- [N] already in your pipeline
- [N] duplicates collapsed

### Do These Three

1. `/job-fit-scorer [top role]` — full 5-dimension score before you invest an hour
2. `/build-referral-graph [company with best fit and zero referral path]` — the fix for the weakest part of the feed
3. `/app-tracker add [Company] [Role]` — log the ones you are pursuing

*Digest written to `context-library/job-feed.md`. Run `/dashboard` to see it visually (optional).*
```

## Example

Input: `/find-jobs`

Claude finds `job-lab/.env` with an `APIFY_TOKEN` but no `VOYAGE_API_KEY`. It reads `career-plan.md` (Senior PM, fintech or AI, Bay Area or remote, $240k floor, no clearance roles), generates `search.json`, shows it, gets a yes, prints the cost line, runs `npm run find-jobs` and `npm run export`.

Result: 118 sourced, 94 after excluding clearance roles and dedupe, 11 already in the pipeline. No fit column, because there is no Voyage key — instead an "est. fit" column from reading the top 30 JDs, clearly labeled. Three archetypes: Growth PM (12), Payments PM (7), AI Product (4). Top role has 2 people at the company already in `connection-tracker.md`, so the recommended next step is a referral request, not an application.

Claude closes with: "Fit scores are off because there's no Voyage key. That's fine — I read the top 30 by hand. If you want automatic ranking across all 94, `setup/AUTOMATION-SETUP.md` step 6 takes about two minutes."

## Quality Checks

**Good output looks like:**
- The mode is stated in one line at the top, without apology or a setup lecture
- Cost and item cap are shown BEFORE anything paid runs, never after
- The fit column is either a real Voyage score or clearly labeled "est. fit" — never blended
- Missing data is `—`. A job with no listed salary shows `—`, never "$0" and never a guessed range
- Referral path counts come from `connection-tracker.md` and name real people
- Archetypes translate into a resume-variant count, so the user sees less work, not more
- Exactly three recommended next actions
- `context-library/job-feed.md` is written, so the dashboard stays optional

**Bad output looks like:**
- A 90-row table with no ranking and no recommended action
- Fit scores on roles whose descriptions were never read
- A scrape that runs before the user confirmed the criteria
- Raw stack traces from `npm run find-jobs` pasted into chat
- Reading `jobs.db` into context instead of the exported digest
- Telling the user the OS "requires" Apify, Node, or the dashboard. None of it is required
- Any suggestion of logging into LinkedIn, using a LinkedIn cookie, or running a browser automation against the user's account

**Safety checks (non-negotiable):**
- [ ] No LinkedIn login, cookie, session token, or browser automation against the user's account is ever suggested. All data comes from Apify's public-data actors.
- [ ] No job is applied to automatically. This skill sources and ranks; the human applies.
- [ ] Every paid step is announced with its cap and estimated cost before it runs.
- [ ] Nothing from `career-plan.md` marked private ends up in `search.json`.

### Cold Start (First Run)

If `app-tracker.md` and `job-feed.md` are both empty, this is the user's first run. Do three extra things:
1. Cap the first run at 60 jobs, not 120. A first run is a calibration run — cheaper is better while the criteria are still wrong.
2. After the results come back, ask one question: "Do these look like the roles you want?" If no, fix `search.json` and re-run rather than pushing them into the pipeline.
3. Do not recommend applying to anything in the first run. Recommend `/job-fit-scorer` on the top 2 so the user can sanity-check the ranking against their own judgment before trusting it.

### Remote-Only and International Users

- **Remote-only:** put `"Remote"` first in `locations` and add the user's country, because many "Remote" posts are country-restricted and LinkedIn does not filter that reliably. Flag every remote role whose description contains a location restriction the user cannot meet.
- **Outside the US:** `locations` should use LinkedIn's own region names ("Greater London Area", "Berlin, Germany"), not country codes. Comp values come back in local currency — carry the currency symbol through, never convert silently.
- **Needs sponsorship:** the feed cannot filter for sponsorship. Say so once, then flag companies with known sponsorship history from `target-companies.md` and recommend `/company-research` for the rest.
