# Start Here

## Before You Start

You need three things:

1. **A Claude subscription.** Claude Pro ($20/month) or Max ($100/month) at [claude.ai](https://claude.ai). This gives you access to Claude Code.
2. **Claude Code installed.** Follow the quick install at `setup/installation-guide.md` (takes 5 minutes). Once installed, you type `claude` in a terminal and start talking.
3. **Your resume and LinkedIn text.** Have both ready to paste. You'll need them during setup.

A code editor is nice to have but not required — [Cursor](https://cursor.com) is free and has a built-in terminal, [VS Code](https://code.visualstudio.com) works too, and any terminal app is fine on its own.

**You do NOT need:** Node, an Apify account, a Voyage key, a GitHub account, or any coding ability. Those belong to Track 2 below, which is optional and which most people skip.

**Time commitment:** about 45 minutes for first setup. After that, 20-30 minutes per day.

**What is Claude Code?** It's a tool that runs in a terminal (the text-based command window on your computer). You type a command, press Enter, and Claude responds. No coding required — you'll mostly type plain English and paste job descriptions.

New to terminals? See `setup/terminal-basics.md` for a 2-minute orientation.

---

Welcome to Job Search OS. Here's how to get running in 45 minutes.

## Pick Your Track

Three tracks, stacked. Track 1 is the whole product. Tracks 2 and 3 add convenience on top and you can add them later, or never.

| Track | Setup | What you get | Who it's for |
|---|---|---|---|
| **1. Just talk to Claude** | 0 minutes to try, 45 to set up properly | All 21 skills. Tailored resumes, referral sequences, interview prep, negotiation. You paste job descriptions. | **Everyone. Start here.** |
| **2. + Automation** | 15 minutes, once | Jobs and referral candidates get fetched for you instead of you hunting job boards | People who hate the hunting part. Do this in week 2, not day 1. |
| **3. + Dashboard** | 2 minutes | A visual view of your funnel, bottleneck, and three next actions | People who think better in pictures |

---

## Track 1 — Just Talk to Claude (0 setup)

### Right now, 2 minutes

Open this folder, start Claude Code in the terminal by typing `claude`, paste any job description, and run:

```
/quick-start
```

In 60 seconds you'll know if the role is worth your time: red flags, salary estimate, interview intel. Nothing set up, nothing installed.

### Then, 45 minutes

1. **Build your experience library** (20 min) — say `Help me build my experience library`. Paste your resume and LinkedIn. This is the foundation; everything else draws from it. See `setup/example-experience-library.md` for what "done" looks like.
2. **Fill your career plan** (10 min) — say `Help me fill out my career plan`. Level, function, geography, comp floor, dealbreakers. See `setup/example-career-plan.md`.
3. **Fill the Q&A master doc** (10 min) — say `Help me fill out the Q&A master doc`. Comp strategy, common questions, logistics.
4. **Generate target companies** (5 min) — run `/company-research generate target list`. Review and reorder the top 10.

That's it. **You now have the complete Job Search OS.** Everything below is optional.

Optional at this point: **Set up morning briefing** — see `setup/morning-briefing-setup.md` for Cowork automation.

### Your first five commands

1. `/quick-start [paste any JD]` — is this role worth your time? Zero setup.
2. `Help me build my experience library` — the foundation. 20 minutes of talking, sharp output everywhere after.
3. `Help me fill out my career plan` — targeting and weakness analysis. Drives everything.
4. `/find-jobs` — a ranked feed of roles worth your time. Paste JDs when it asks; it ranks them against your real experience.
5. `/resume-tailor [paste a JD]` — your first tailored resume. Compare it to what you had before.

---

## Track 2 — Add Automation (15 minutes, optional)

**Do not do this on day one.** Run Track 1 for a few days first. Add this only if finding jobs and finding people on LinkedIn is the part you dislike.

What it changes: `/find-jobs` fetches roles for you instead of asking you to paste them, and `/build-referral-graph` pulls the public employee list at your target companies instead of asking you to search LinkedIn by hand.

What it does not change: nothing else. Same skills, same quality, same output.

**Setup:** `setup/AUTOMATION-SETUP.md`. It assumes you have never opened a terminal. Every command is a full copy-paste line, every step says what it costs and what success looks like, and there's a troubleshooting table for the eight things that usually go wrong. One step in that guide: the first time you run the Apify actor, Apify's console (console.apify.com) will ask you to click to approve permissions. That's a one-time, 20-second consent click on Apify's own site — not a LinkedIn login — and it's expected.

**Cost:** free to set up. Roughly $1-$3/month once you're using it, usually inside the free credits.

**What it never does:** it never logs into your LinkedIn account, never uses your cookie or password, never sends a connection request, never sends a message, and never applies to a job. It reads public data. Every message this OS writes is a draft you read and send by hand.

If you get stuck for more than 30 minutes, stop and run `/find-jobs --manual`. Everything works.

---

## Track 3 — Add the Dashboard (2 minutes, optional)

A single HTML file. Nothing to install, no account, no server.

1. Run `/dashboard` in Claude. It writes `dashboard/data.json` from your context library.
2. Open the `dashboard` folder in Finder or File Explorer and double-click `index.html`.
3. If the page shows a "drop your data.json here" box, drag `dashboard/data.json` onto it. **That's normal** — Chrome blocks local pages from reading local files. Safari loads it automatically.

You get: your funnel with conversion rates, the one stage that's actually your bottleneck, three ranked next actions, your job feed, your referral coverage, and your interview weakness heatmap.

Three things to know:

- **What ships in the box is sample data.** `dashboard/data.json` arrives filled with a fictional search — made-up people, companies, and numbers — so you can see what the dashboard looks like before you have any data. Open it first if you want the tour. Running `/dashboard` overwrites it with yours.
- **It can't change anything.** It's a viewer. Every button copies a slash command to your clipboard; you paste it into Claude and Claude makes the change. Your markdown files stay the source of truth, which is why there's no login, no sync, and nothing to break.
- **You never have to open it.** Every number it shows is available by asking — `/app-tracker pipeline`, `/find-jobs`, `/weekly-retro`. Or run `/dashboard --summary` and get the same thing as text.

It works with an empty context library too. Every blank panel names the command that fills it, which makes it a decent map of what to do next on day one.

---

## What You Get

**Try First:** `/quick-start` — paste any JD, find out if it's worth your time in 60 seconds. Zero setup.

**Source:** `/find-jobs` `/build-referral-graph` `/company-research`

**Apply:** `/resume-tailor` `/cover-letter` `/job-fit-scorer` `/work-product` `/linkedin-audit` `/app-tracker`

**Network:** `/connection-request` `/referral-request` `/hiring-manager-msg`

**Interview:** `/interview-prep` `/mock-interview` `/interview-debrief` `/thank-you-note`

**Negotiate:** `/salary-research` `/negotiate` `/weekly-retro`

**See it:** `/dashboard` — optional visual view of the whole search

Plus 4 built-in reviewers: recruiter scan, ATS check, hiring manager review, interviewer grading.

## Model Recommendations

Save usage by matching models to tasks:

| Model | Best For | Examples |
|-------|----------|---------|
| **Haiku** | Bulk operations, quick lookups | `/connection-request`, target list generation, `/app-tracker` |
| **Sonnet** | Most skills (default) | `/resume-tailor`, `/cover-letter`, `/work-product`, `/job-fit-scorer` |
| **Opus** | Deep analysis, complex prep | `/interview-prep`, `/mock-interview`, sub-agent reviews, `/negotiate` |

## What to Do Each Week

**Week 1:** Set up context library. Run `/resume-tailor` and `/connection-request` daily. Submit 3-5 targeted applications.

**Week 2:** Add `/job-fit-scorer` before tailoring. Start `/referral-request` for roles you've applied to. Build first `/work-product` for your top company. If the job hunting is the part you dislike, this is the week to set up `setup/AUTOMATION-SETUP.md`.

**Week 3+:** Interview system kicks in. Run `/interview-prep` before each interview. `/mock-interview` the night before. `/interview-debrief` after. `/thank-you-note` same day. `/weekly-retro` every Friday.

## Need Help?

- Full setup checklist: `setup/first-session-checklist.md`
- Installation details: `setup/installation-guide.md`
- Questions: [product-growth.com](https://product-growth.com)
