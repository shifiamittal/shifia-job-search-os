---
name: build-referral-graph
description: Build a ranked referral path into each target company — who works there, why they are warm, and the exact next message. Populates connection-tracker.md. Works without automation.
---

# /build-referral-graph - Referral Path Per Target Company

**OPTIONAL AUTOMATION.** Two modes. **Automated mode** runs `job-lab/` to pull public employee lists and profiles from Apify (see `setup/AUTOMATION-SETUP.md`). **Manual mode** needs nothing — the user pastes a LinkedIn search result or their LinkedIn connections CSV export, and this skill does the same ranking and writes the same file. Never imply automation is required.

**HARD SAFETY RULE.** This skill never logs into LinkedIn, never uses the user's LinkedIn cookie or session, never sends a connection request, and never sends a message. It reads public profile data through a third-party proxy and produces **drafts a human sends by hand.** If the user asks for auto-connect or auto-send, decline and explain: it puts their LinkedIn account at risk of restriction, and volume outreach is the opposite of how this OS works.

**UNIVERSAL PRIVACY GUARDRAIL:** When reading career-plan.md, the following is PRIVATE and must NEVER appear in `connection-tracker.md`, in any drafted message, or in any exported file: reasons for career gaps (caregiving, health, family), reasons for remote preference, age or graduation year, personal financial constraints, immigration/visa details beyond what the user explicitly shares, relationship status, health conditions, pregnancy/family planning, and anything marked "private" in career-plan.md. It may inform ranking. It never gets written down next to another person's name.

## When to Use

Run `/build-referral-graph` when:
- `/find-jobs` surfaced a strong role at a company where the tracker shows zero connections
- `/weekly-retro` or the dashboard flags referral coverage below 60% of active applications
- The user is entering a new target company and needs a network there fast
- The user exported their LinkedIn connections CSV and wants it cross-referenced against target companies
- Applied-to-screen conversion is under the 30% benchmark — this is almost always the fix

Arguments:
- `/build-referral-graph` — the top gap companies from `target-companies.md`, ranked by priority
- `/build-referral-graph [company]` — one company, in depth
- `/build-referral-graph --csv [path]` — import a LinkedIn connections CSV (free, no automation needed, and the highest-value input available)

## Role Type Detection

Before executing any step, read `career-plan.md` and detect the user's **target function** from their target role title:
- **Product Management (PM):** Product Manager, Group PM, Director of Product, VP Product, CPO
- **Software Engineering (SWE):** Software Engineer, Staff Engineer, Principal Engineer, Engineering Manager
- **Design:** Product Designer, UX Designer, Design Lead, Head of Design, VP Design
- **Data Science / Analytics:** Data Scientist, ML Engineer, Analytics Manager, Head of Data
- **Marketing:** Marketing Manager, Growth Marketing, Brand Manager, VP Marketing, CMO
- **Customer Success / Sales:** CSM, CS Manager, Director of CS, Account Executive, Sales Manager, CRO
- **Other:** Infer function from role description

All instructions below use PM as the default. When the detected function is NOT PM, substitute function-appropriate equivalents as marked with **[FUNCTION-ADAPTIVE]** notes. The most important substitution is who counts as the likely hiring manager: for a PM it is a Director of Product or Group PM; for a SWE it is an Engineering Manager or Director of Engineering; for a Designer it is a Head of Design; for a DS it is a Head of Data or ML Manager.

## Inputs

**Required files (read automatically):**
- `@context-library/experience-library.md` — past employers, schools, cities, teams. This is what "warm" is computed against.
- `@context-library/target-companies.md` — which companies matter and in what order
- `@context-library/connection-tracker.md` — who is already known, and at what relationship stage

**Read if present:**
- `@context-library/career-plan.md` — level, so the skill targets the right seniority
- `@context-library/app-tracker.md` — which companies have live applications and therefore need coverage most
- `job-lab/` exports — scraped employee lists and profiles

**User-provided (manual mode):**
- A LinkedIn connections CSV export (Settings → Data Privacy → Get a copy of your data → Connections). This is first-party data the user already owns and turns cold names into warm ones instantly.
- Or pasted LinkedIn search results: name, title, profile URL, and anything visible about shared background.

**Empty context check.** If `experience-library.md` is empty or template-only, STOP: "I can't tell you who's warm without knowing your background. Run `Help me build my experience library` first — it takes 20 minutes and it's what makes every warmth judgment here real instead of guessed." If `target-companies.md` is empty, run `/company-research generate target list` first.

## Process

### Step 1: Find the Coverage Gaps

1. Read `app-tracker.md` and `target-companies.md`. Build the list of companies that matter: every company with a live application, plus the top-ranked target companies.
2. Read `connection-tracker.md` and count people per company.
3. Compute **referral coverage**: of the user's active applications, what fraction have at least one person at that company at status `connected` or better. Report it as a single number against the 60% target.
4. Rank gap companies: live application + zero connections is the top of the list. A rank-40 target company with no application is the bottom.
5. Work the top 5-8 companies. Do not attempt all of them. A shallow graph across 40 companies produces no referrals.

### Step 2: Get the People

**Automated mode.** From inside `job-lab`, announce the cost first, then run:

```
npm run find-people
```

This pulls public employees at the target companies, capped by `max_people_per_company` in `search.json` (default 25). State the cost line before running:

```
About to run: npm run find-people
Cap: 25 people per company across [N] companies = up to [N×25] profiles.
Cost: roughly $0.50-$1.00 of Apify credits at current actor pricing.
This reads public LinkedIn profiles through Apify. It does not log in to your LinkedIn account.
```

Then, for the shortlist only — never the whole list:

```
npm run enrich
```

`enrich` pulls full profiles and recent posts for the top-ranked people. It is the expensive call, which is why it runs on a shortlist of roughly 10-15 people, not on 200. Then:

```
npm run embed     # only if VOYAGE_API_KEY is set; computes warmth
npm run export
```

**Manual mode.** Ask the user for each gap company, using this exact template:

```
I need people at [Company] to build your referral path. Two options, easiest first:

1. LinkedIn connections CSV (best — these are people who already know you):
   LinkedIn → Settings & Privacy → Data Privacy → Get a copy of your data →
   select "Connections" → Request archive. It emails you a CSV in ~10 minutes.
   Drop the file in this folder and run: /build-referral-graph --csv Connections.csv

2. Or paste a LinkedIn search. Search this, copy the first 15 results:
   "[Company]" AND ("Product Manager" OR "Director of Product" OR "Group PM")
   For each person paste: name, title, profile URL, and anything you notice about
   their background (past employers, school, city).
```

**[FUNCTION-ADAPTIVE]** Replace the search string by function. SWE: `"[Company]" AND ("Staff Engineer" OR "Engineering Manager" OR "Principal Engineer")`. Design: `"[Company]" AND ("Design Lead" OR "Head of Design" OR "Senior Product Designer")`. Data Science: `"[Company]" AND ("Senior Data Scientist" OR "ML Engineer" OR "Head of Data")`. Marketing: `"[Company]" AND ("VP Marketing" OR "Growth Lead" OR "Demand Gen")`. CS: `"[Company]" AND ("VP Customer Success" OR "Director of CS")`.

### Step 3: Compute Warmth — From Facts, Never From Vibes

Warmth is **why this specific person would say yes to this specific user.** It is computed from overlapping facts, in this priority order:

1. **Already connected** — they are in the user's LinkedIn CSV or already in `connection-tracker.md`. This outranks everything. A 1st-degree connection with nothing else in common beats a stranger with three overlaps.
2. **Shared past employer, overlapping dates** — the strongest cold signal there is. Compute the overlap years from `experience-library.md` and state them.
3. **Shared past employer, no date overlap** — still strong. Alumni of the same company help each other.
4. **Shared school or program** — name the school and the years.
5. **Shared city, especially if both are transplants.**
6. **Shared trajectory** — they made the same transition the user is making (consulting → PM, military → tech, IC → manager). Say which transition.

With `VOYAGE_API_KEY` set, `npm run embed` produces a `warmth` score from 0 to 1 (cosine similarity between the user's profile text and each person's). **Use that score for ordering, but never present it as the reason.** The reason must always be a stated fact from the list above. A number cannot be acted on; "ex-Amazon, you overlapped 2019-21" can.

**Absolute rule: never invent an overlap.** If nothing in the data supports a warm reason, the person's `why_warm` is empty, their status is `cold`, and they are flagged `needs research` — not padded with "you both work in product." Without a Voyage key there is no warmth number at all; show `—` in that column, never 0.

### Step 4: Identify Likely Hiring Managers

Flag people as `likely HM` when their title is one level above the target role in the same function and the same product area as an open role from `job-feed.md`. Mark it as a guess, because it is one. `likely HM (unconfirmed)` is honest; "the hiring manager" is not.

A likely HM gets a different play than a peer: peers get a referral ask, HMs get `/hiring-manager-msg` with a work product attached. Say which is which in the output.

### Step 5: Pull the Personalization Hook

For each person on the shortlist, get one specific, recent, real thing to open with:
- **Automated mode:** `npm run enrich` has stored their most recent public post (text, URL, date). Quote the actual substance of it. If the most recent post is older than 60 days, say so — "posted 4 months ago" is still usable, but the user should know it is not fresh.
- **Manual mode:** ask the user to check the person's LinkedIn activity tab and paste anything from the last 30 days.
- **If there is no post:** do not fabricate one and do not fall back to "I see you work at [Company]." Use a different hook — a product they shipped, a talk, an article, the shared-background fact itself. If nothing exists, mark `needs research` and move on. A generic message spends the one chance the user gets with that person.

### Step 6: Write the Tracker and the Digest

1. Update `context-library/connection-tracker.md` — append new people, never overwrite existing entries or reset a relationship status the user set by hand. If a person is already there, merge new fields (title change, recent post) and leave status alone.
2. Write `context-library/referral-paths.md` — the ranked per-company digest. Automated mode's `npm run export` writes this; in manual mode, write it yourself in the same format. This is what keeps the dashboard optional.
3. Recommend exactly one next action per company, and no more than three total.

## Output

```markdown
## Referral Graph — [Date]

**Mode:** [Automated (Apify + Voyage) / Automated (Apify, no warmth scores) / Manual / CSV import]
**Referral coverage:** [N]% of active applications have a path — target 60%
**People added:** [N] · **Already known:** [N] · **Needs research:** [N]
**Last scrape:** [date] [amber if older than 7 days]

---

### [Company] — [N] in pipeline · [N] referrals · [gap warning if 0]

**1. [Name] — [Title]** · warmth [0.81 or —] · [connected / requested / cold]
- **Why warm:** ex-Amazon, you overlapped 2019-21 · both Seattle
- **Recent:** posted 2d ago about [specific substance] — [URL]
- **Play:** referral ask
- **Next:** `/referral-request [name] [company-role-id]`

**2. [Name] — [Title]** · warmth [0.44 or —] · cold · **likely HM (unconfirmed)**
- **Why warm:** no overlap found — cold outreach
- **Recent:** no recent public posts
- **Play:** work product first, then HM message
- **Next:** `/work-product [Company] [Role]` then `/hiring-manager-msg`

---

### Needs Research ([N])

These people have no verifiable connection point, so I did not draft anything for them.
Check their LinkedIn activity from the last 30 days, or search "[Name] [Company] talk OR blog OR podcast", and paste back one specific thing they said or did.
- [Name] — [Title] at [Company]

---

### Coverage

| Company | In pipeline | People known | Connected | Referrals | Gap |
|---------|-------------|--------------|-----------|-----------|-----|
| Stripe | 4 | 12 | 3 | 0 | ⚠ |
| Figma | 1 | 5 | 2 | 1 | ok |

### Do These Three

1. `/referral-request [warmest person at the company with a live application]`
2. `/connection-request` — [N] cold people are ready to have requests drafted
3. `/hiring-manager-msg [likely HM at top-fit company]` — after `/work-product`

*Written to `context-library/connection-tracker.md` and `context-library/referral-paths.md`.
Nothing was sent. Every message this produces is a draft you send by hand.*
```

## Example

Input: `/build-referral-graph Stripe`

The tracker shows 4 live Stripe applications and zero connections there — the worst gap in the pipeline. Automated mode is on with an Apify token but no Voyage key.

Claude prints the cost line, runs `npm run find-people` capped at 25, gets 25 public Stripe employees in Payments and Growth, ranks them from facts alone (no warmth column, since there is no Voyage key), shortlists 12, runs `npm run enrich` on those 12 only, and runs `npm run export`.

Top result: Priya M., Payments PM, ex-Amazon 2018-2022. The experience library shows the user at Amazon 2019-2021 in Seattle. That is a real, stateable overlap and a two-year window. Her most recent post, 2 days old, is about payment retry latency. Play: referral ask, with the retry post as the opener.

Second: Dan R., Engineering Manager, Payments. No overlap with anything in the experience library. Flagged `cold`, `likely HM (unconfirmed)` because he is one level above the target role in the same product area as the open Stripe PM role in `job-feed.md`. Play: work product first.

Six of the 25 have no post, no shared employer, no shared school, and no shared city. They go in **Needs Research** with a specific research prompt. Claude does not write them a message.

## Quality Checks

**Good output looks like:**
- Every `why_warm` is a checkable fact with a name, a place, or a date attached
- Warmth is `—` when there is no Voyage key, never 0
- People with no connection point land in "Needs Research" with a research prompt, not in the message queue
- Likely HMs are labeled unconfirmed and routed to the work-product play, not the referral play
- `connection-tracker.md` is merged, never overwritten — no user-set status is reset
- Coverage is stated as one percentage against the 60% target
- Exactly three next actions
- The output says, in plain words, that nothing was sent

**Bad output looks like:**
- "Why warm: you're both in tech" or any overlap that is not in the data
- A warmth number presented as the reason to reach out
- Enriching all 200 people instead of a 12-person shortlist (this is the expensive mistake)
- A list of 60 people with no ranking and no per-company grouping
- Overwriting a person the user marked `referred` back to `cold`
- Any mention of auto-connecting, auto-messaging, LinkedIn login, cookies, or a browser extension acting on the user's account
- Treating a scraped employee list as permission to contact people at volume. The cap is the OS's cap: 15-20 personalized requests per day, per `/connection-request`

**Safety checks (non-negotiable):**
- [ ] No LinkedIn login, cookie, or session is used or suggested.
- [ ] No message or connection request is sent. Drafts only. Say so in the output.
- [ ] Every paid step announces its cap and estimated cost before running.
- [ ] `enrich` runs on a shortlist, never on the full scraped list.
- [ ] Nothing private from `career-plan.md` is written into `connection-tracker.md`.
- [ ] Personal data about other people stays local. Never suggest uploading `connection-tracker.md` anywhere.

### CSV Import Mode

`/build-referral-graph --csv [path]` is free, needs no automation, and is usually the single highest-value run of this skill. LinkedIn's connections export contains first name, last name, company, position, and connected-on date.

1. Parse the CSV. Ignore rows with missing company.
2. Match `Company` against `target-companies.md` using fuzzy matching (strip `Inc.`, `Ltd`, `Technologies`; match case-insensitively).
3. Every match is an existing 1st-degree connection: status `connected`, warmth is the highest tier, `why_warm` includes "already connected [connected-on date]".
4. Report the headline number: "Your CSV has [N] connections at [M] of your target companies. [K] of those companies currently show zero coverage in your tracker."
5. Merge into `connection-tracker.md`. Do not create duplicate entries for people already listed.
6. If the CSV shows connections at a company that is NOT in `target-companies.md` but has strong representation (3+ people), surface it: "You know 6 people at [Company] and it's not on your target list. Worth adding?"

### Career Returner: Dormant Network First

If `career-plan.md` shows a career gap over one year, invert the priority. Before sourcing a single new person, scan `connection-tracker.md` and the CSV import for contacts with last contact over 12 months ago — especially former colleagues, managers, and clients. These convert at several times the rate of cold outreach for returners, because they already know the work. Rank them above every scraped stranger, and route them to `/connection-request`'s re-engagement template rather than a cold referral ask.

### Executive Level (Director+)

If `career-plan.md` shows Director level or above, change who gets sourced. Do not build a graph of Senior PMs. Target VP/Director product peers, the hiring executive (CPO/SVP/Head of Product), cross-functional VPs, and — the one exception to the no-recruiters rule — retained executive search partners. Warmth for executives leans on shared board members, investors, and prior org overlap more than shared school. Cap the per-company list at 8, not 25: at this level the graph is small and the research per person is deep.

### International and Visa-Sponsorship Users

- Scraped locations come back as LinkedIn region strings. Keep them verbatim; do not normalize a person's location into a country the data does not state.
- For users targeting a market where they have no network, weight alumni and diaspora overlaps higher — they are the highest-converting cold paths, per `/connection-request`.
- Sponsorship status is a company fact, not a person fact. Never record a guess about someone else's visa status in the tracker.
