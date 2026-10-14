> **New here?** Read [START-HERE.md](START-HERE.md) to get running in 45 minutes.

# Job Search OS v1.1

An AI-powered job search system built for Claude Code + Cowork. 21 skills, 4 sub-agents, insider interview data for 250 companies, and a daily morning briefing that runs your search in 20-30 minutes. Optional LinkedIn automation and an optional visual dashboard on top.

Built by [Aakash Gupta](https://product-growth.com).

## Who This Is For

- **Product managers** at any level (APM through VP/CPO)
- **Software engineers** targeting Staff+ or EM roles
- **Designers** targeting Lead/Director/Head of Design roles
- **Data scientists** targeting Senior DS or ML Engineering roles
- **Marketing managers** targeting Director+ growth/demand-gen roles
- **Customer success leaders** targeting Director/VP CS roles
- **Career changers** transitioning into PM from consulting, engineering, design, research, or other functions
- **International professionals** targeting US roles (visa-sponsorship guidance included)

The 21 skills auto-detect your target function from your career plan and adapt accordingly. The insider data and interview frameworks are PM-focused, but the core engine (resume tailoring, networking, interview prep, negotiation) works for any knowledge worker.

## What's Inside

```
job-search-os/
├── CLAUDE.md              # System prompt - Claude reads this automatically
├── setup/                 # Installation guide + first-session checklist
├── .claude/skills/        # 21 skills (resume, interviews, networking, sourcing)
├── context-library/       # Your personal data (experience, career plan, targets)
├── cowork-tasks/          # Daily morning briefing prompt for Cowork
├── templates/             # Resume, work product, prototype templates
├── sub-agents/            # 4 reviewer agents (recruiter, ATS, HM, interviewer)
├── insider-data/          # Interview intel for 250 companies + frameworks
├── briefings/             # Daily briefing outputs
├── job-lab/               # OPTIONAL - fetches jobs + people from public LinkedIn data
└── dashboard/             # OPTIONAL - single-file visual dashboard, no install needed
```

## What's Optional in v1.1

Two things are new in v1.1, and **both are optional.** The OS is complete without either one.

**`job-lab/` — LinkedIn sourcing.** Fetches public job postings and public profiles at your target companies so you are not hunting job boards by hand. Needs Node and a free Apify account, about 15 minutes to set up. Without it, every skill still works — you paste a job description and the OS does the rest. That is the normal way to use it. See `setup/AUTOMATION-SETUP.md`.

**`dashboard/` — a visual view of your search.** One HTML file. Double-click it, drop `dashboard/data.json` on it, and you get your funnel, your bottleneck, three next actions, the job feed, and your referral coverage. No install, no server, no account. It is a viewer: it reads your data and cannot change it. Its buttons copy slash commands for you to paste into Claude. Every number it shows is also available by asking Claude directly, so you never have to open it.

### What the automation never does

The sourcing reads **public** LinkedIn data through Apify's proxies. It has no access to your LinkedIn account, and it will never:

- log in as you, or use your LinkedIn cookie, session, or password
- send a connection request
- send a message to anyone
- apply to a job

Every outreach artifact this OS produces is a **draft you read and send by hand.** That protects your account from restriction, and it is the point: precision over volume. Your data stays on your machine. Nothing is uploaded or hosted.

### What it costs

| Piece | Cost |
|---|---|
| The OS itself, all 21 skills, manual mode | $0 beyond your Claude subscription |
| The dashboard | $0 — no install, no account |
| Node | $0 |
| Apify (job + people sourcing) | Free tier includes ~$5/month of credits; typical use is $1-$3/month |
| Voyage (optional fit scoring) | $0 — free tier covers this comfortably |

Every script prints its item cap and estimated cost before spending anything, and `Control + C` stops it. Full breakdown in `setup/AUTOMATION-SETUP.md`, including the one-time permissions click the first Apify run requires.

## Quick Start

1. Open this folder in your editor (Cursor, VS Code, or any terminal)
2. Start Claude Code in the terminal: `claude`
3. Run: `Read CLAUDE.md and summarize what this Job Search OS does`
4. Follow the setup guide: `Read setup/installation-guide.md`

## Try It Now (No Setup Required)

Paste any job description and run `/quick-start`. Find out if it's worth your time in 60 seconds — red flags, salary estimate, interview intel. No context library needed.

## First Session (~45 min)

Three parts — context, targeting, and your first briefing:

1. **Context (20 min):** `Help me build my experience library` → `Help me fill out the Q&A master doc` → `Help me fill out my career plan`
2. **Targeting (15 min):** `/company-research generate target list` → Review and reorder ~100 companies
3. **First briefing (10 min):** Set up the morning briefing, run it, and verify output quality

See `setup/first-session-checklist.md` for the full checklist.

**Optional, and not on day one:** once you have run the OS manually for a few days, `setup/AUTOMATION-SETUP.md` walks you through the LinkedIn sourcing in about 15 minutes, including the one-time permissions click Apify requires on its first run. It assumes you have never opened a terminal. Skip it entirely if you would rather keep pasting job descriptions — that path is fully supported and always will be.

## Daily Use (20-30 min)

Your morning briefing delivers: top roles scored and ranked, tailored resumes, outreach drafts, follow-ups, and pipeline coaching. Review, submit, send. Done.

## All 21 Skills

| Skill | What It Does |
|-------|-------------|
| `/quick-start` | Paste any JD, find out if it's worth your time in 60 seconds. Zero setup. |
| `/find-jobs` | Live ranked job feed from your career plan. Optional automation; works by pasting JDs |
| `/job-fit-scorer` | Score JDs 1-100 across 5 dimensions |
| `/company-research` | Research companies or generate target list |
| `/build-referral-graph` | Ranked referral path per target company, with why each person is warm |
| `/connection-request` | 25 personalized LinkedIn connection requests |
| `/referral-request` | Full referral sequence with HM identification |
| `/hiring-manager-msg` | HM outreach leading with work product |
| `/work-product` | 1-pager analysis + prototype prompt |
| `/cover-letter` | Top 3 experiences mapped to top 3 requirements |
| `/linkedin-audit` | Profile optimization against target JDs |
| `/app-tracker` | Pipeline tracker with auto-updates |
| `/dashboard` | Refresh the optional visual dashboard — funnel, bottleneck, three next actions |
| `/interview-prep` | Prep package from web + insider data |
| `/mock-interview` | Interactive mock with Three Laws grading |
| `/interview-debrief` | Post-interview analysis with rewrites |
| `/thank-you-note` | Personalized note from transcript |
| `/salary-research` | Market comp data with sources |
| `/negotiate` | Offer analysis + counter-offer language |
| `/weekly-retro` | Performance analysis with coaching |

## Updates

Your context-library files are never overwritten by updates. Check the version number in CLAUDE.md.

**Upgrading from v1.0:** drop in the new `job-lab/` and `dashboard/` folders and the three new skills. Nothing in v1.0 changes behavior, and none of your files are touched. If you never set up the automation, v1.1 behaves exactly like v1.0 plus three extra skills that run in manual mode.

## Support

Questions? Reach out at [product-growth.com](https://product-growth.com).
