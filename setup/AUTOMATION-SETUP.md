# Automation Setup (Optional)

## Read this paragraph before anything else

**This is optional. Skip it and the Job Search OS still works completely.**

Everything in the OS — tailored resumes, referral sequences, interview prep, negotiation, all 21 skills — works by pasting a job description into Claude. That is the normal way to use it. This guide sets up one extra convenience: instead of you finding jobs and people on LinkedIn by hand, a tool called `job-lab` fetches them for you and drops them into a ranked list.

That is the entire benefit. It saves you the hunting. It does not make the OS smarter and it does not unlock any skill.

**Do not do this on the day you start.** Fill your experience library and career plan first, run the OS manually for a week, and set this up only if the hunting is the part you dislike. Plenty of cohort members never set it up.

**Time:** about 15 minutes if nothing goes wrong. Budget 30 for your first time.
**Cost:** free to set up. Roughly $1–$3 per month once you are using it. Full cost table in Step 8.
**Terminal experience needed:** none. Every command below is a full line you copy and paste.

If you would rather not: close this file and go run `/find-jobs`. It will tell you it is in manual mode, ask you to paste JDs, and work exactly as well.

---

## What this actually does, and what it never does

**It does:** read public LinkedIn job postings and public LinkedIn profiles through a paid service called Apify, and save them to a database file on your own computer.

**It never does — and cannot do — any of the following:**

- Log in to your LinkedIn account. It has no access to it. It never asks for your LinkedIn password and you must never give one to anything in this OS.
- Use your LinkedIn cookie, session, or a browser extension acting as you.
- Send a connection request.
- Send a message to anyone.
- Apply to a job.

Every message this OS produces — connection requests, referral asks, hiring manager outreach — is a **draft you read and send by hand.** That is a deliberate design choice, not a limitation. Automated outreach gets LinkedIn accounts restricted and it gets ignored by humans. The OS's whole premise is precision over volume.

Your data stays on your computer. Nothing is uploaded, hosted, or shared.

---

## What you are installing

| Thing | What it is | Cost |
|---|---|---|
| **Node** | A program that lets your computer run the `job-lab` scripts. Like installing Python or Java — a runtime, not an app you open. | Free |
| **Apify token** | A password-like string that lets `job-lab` fetch public LinkedIn data. | Free account, ~$5/month of free credits included |
| **Voyage key** | Optional. Adds automatic fit scoring so 300 jobs get ranked before you read any of them. | Free tier is generous, effectively $0 |

You need Node and the Apify token. Voyage is optional on top of optional. If you stop after Step 7, everything works — you just read the job list yourself instead of it being pre-ranked.

---

# Part 1 — Install Node

## Step 1: Check whether you already have it

You may already have Node. Checking takes 30 seconds and costs nothing.

**Mac:** Press `Command + Space`, type `Terminal`, press Enter. A window with text appears.

**Windows:** Press the Windows key, type `PowerShell`, press Enter. A window with text appears.

In that window, copy and paste this exact line, then press Enter:

```
node --version
```

**Success looks like:** a version number, such as `v24.4.0` or `v22.11.0`.

- If the number starts with **v20 or higher**, you are done with Part 1. **Skip to Step 3.**
- If the number starts with v18 or lower, follow Step 2 to update.
- If you see `command not found` or `is not recognized as the name of a cmdlet`, you do not have Node. Follow Step 2.

**Cost of this step:** free.

## Step 2: Install Node

1. Open this page in your browser: **https://nodejs.org**
2. Click the big green button labelled **LTS**. LTS means "Long Term Support" — it is the stable one. Do not click "Current".
3. The file downloads. Open it from your Downloads folder.
   - **Mac:** the file ends in `.pkg`. Double-click it, then click Continue → Continue → Agree → Install. It will ask for your Mac password. That is normal — the installer needs permission to install software.
   - **Windows:** the file ends in `.msi`. Double-click it, then click Next → check "I accept" → Next → Next → Install. If Windows shows a blue "Windows protected your PC" box, click **More info**, then **Run anyway**. That box appears for most installers that are not from the Microsoft Store.
4. When it finishes, **close your Terminal or PowerShell window completely and open a new one.** This matters. The old window does not know Node exists yet. This is the single most common reason people think the install failed.
5. In the new window, paste and press Enter:

```
node --version
```

**Success looks like:** `v24.4.0` or similar, starting with v20 or higher.

**Cost of this step:** free. Node is open source.

---

# Part 2 — Open a terminal in the right folder

The commands in Part 3 only work if your terminal window is "inside" the `job-search-os` folder. A terminal is always pointed at exactly one folder, and by default it points at your home folder, not this one.

## Step 3: Point a terminal at the job-search-os folder

**Mac — the drag method (works every time):**

1. Press `Command + Space`, type `Terminal`, press Enter.
2. Type these four characters, including the space at the end. Do not press Enter yet:

```
cd 
```

3. Open Finder, find your `job-search-os` folder, and **drag the folder itself** onto the Terminal window. Terminal fills in the path for you.
4. Now press Enter.

**Windows — the address bar method (works every time):**

1. Open File Explorer and open your `job-search-os` folder so you can see `CLAUDE.md` and `README.md` inside it.
2. Click once in the **address bar** at the top — the strip showing the folder path. The text becomes selectable.
3. Type over it:

```
powershell
```

4. Press Enter. A PowerShell window opens, already pointed at that folder.

**Verify it worked.** Paste this and press Enter:

- **Mac:** `ls`
- **Windows:** `dir`

**Success looks like:** a list including `CLAUDE.md`, `README.md`, `context-library`, and `job-lab`.

**If you do not see `job-lab` in that list:** you have the v1.0 folder, not v1.1. Automation is a v1.1 addition. Nothing is broken — the rest of the OS is unaffected. Get the v1.1 folder or stop here.

**If you do not see `CLAUDE.md`:** you are in the wrong folder, probably one level too high or too low. Repeat Step 3.

**Cost of this step:** free.

## Step 4: Move into the job-lab folder

Paste this and press Enter (it is the same on Mac and Windows):

```
cd job-lab
```

Then paste and press Enter:

- **Mac:** `ls`
- **Windows:** `dir`

**Success looks like:** a list including `package.json`, `scripts`, `src`, and `.env.example`.

**Keep this window open.** Every remaining command in this guide runs in it. If you close it, redo Steps 3 and 4.

**Cost of this step:** free.

---

# Part 3 — Install and configure job-lab

## Step 5: Install the dependencies

Paste this exact line and press Enter:

```
npm install
```

This downloads the code libraries `job-lab` needs into a folder called `node_modules`. It takes 30 seconds to 3 minutes depending on your internet.

**Success looks like:** it finishes and prints something like `added 147 packages in 42s`, and you get your prompt back so you can type again.

**Warnings are fine.** Yellow lines saying `npm warn deprecated` or `4 vulnerabilities` are normal for every Node project on earth. Ignore them. Only an `npm ERR!` block is a real failure — see Troubleshooting.

**Cost of this step:** free.

## Step 6: Get an Apify token

Apify is the service that fetches public LinkedIn data. This is the paid part, and the free tier will likely cover you.

1. Go to **https://console.apify.com/sign-up** and create a free account. Email and password. No credit card required for the free tier.
2. Once you are signed in, go to **https://console.apify.com/settings/integrations**
3. Find the section labelled **Personal API tokens**. There is a token there already — click the copy icon next to it.
4. Keep that clipboard. You paste it in Step 7.

**Success looks like:** a long string on your clipboard starting with `apify_api_` followed by about 40 random characters.

**Cost of this step:** free. The free plan includes roughly $5/month of usage credits, which renews monthly. That covers about 8–20 weekly job runs. You are not charged unless you upgrade the plan yourself.

**Treat this token like a password.** Do not paste it into a chat, an email, a screenshot, or a support thread. If you ever do, go back to that settings page and click to regenerate it — the old one stops working immediately.

## Step 7: Create your .env file

`.env` is a plain text file holding your keys. It stays on your computer and is never uploaded.

Paste the line for your system and press Enter:

**Mac:**
```
cp .env.example .env
```

**Windows:**
```
copy .env.example .env
```

**Success looks like:** no output at all, and your prompt comes back. On Windows you may see `1 file(s) copied.` Silence means success here.

Now open the new file in a text editor:

**Mac:**
```
open -e .env
```

**Windows:**
```
notepad .env
```

TextEdit or Notepad opens with a few lines of text. Find the line that reads:

```
APIFY_TOKEN=
```

Click at the very end of that line, right after the `=`, and paste your token. It should end up looking like this, with **no spaces, no quotes, and nothing after it**:

```
APIFY_TOKEN=apify_api_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Save the file: `Command + S` on Mac, `Control + S` on Windows. Close the editor.

**Success looks like:** the file is saved and contains your token on the `APIFY_TOKEN=` line.

**A very common Windows mistake:** Notepad sometimes saves the file as `.env.txt`. If Step 10 tells you the token is missing even though you pasted it, that is what happened. In File Explorer, click the **View** menu and tick **File name extensions**, then rename `.env.txt` back to `.env`.

**Cost of this step:** free.

## Step 8: Add a Voyage key — optional, and safe to skip

Voyage turns your experience library and every job description into numbers, so 300 jobs can be ranked by fit before you read a single one. Without it, `job-lab` still fetches everything; Claude just reads and ranks the top ones by hand, and the fit column is hidden rather than filled with fake zeros.

Skip this if you want. You can add it later at any time.

1. Go to **https://dashboard.voyageai.com** and create a free account.
2. Go to **API Keys** and click **Create new secret key**. Copy it.
3. Reopen your `.env` file (`open -e .env` on Mac, `notepad .env` on Windows), find the line reading `VOYAGE_API_KEY=`, paste your key after the `=`, and save.

**Success looks like:** the `VOYAGE_API_KEY=` line has a key after it.

**Cost of this step:** free. The Voyage free tier includes a large monthly token allowance that this tool will not come close to using. The free tier is rate-limited to a few requests per minute; the scripts already slow down and retry when they hit that, so a big run just takes a few extra minutes. It does not fail and it does not cost anything.

### The full cost table

| What | When it costs | Roughly |
|---|---|---|
| Node | never | $0 |
| `npm install` | never | $0 |
| `npm run find-jobs` | Apify credits, per run | ~$0.25–$0.50 for 120 jobs |
| `npm run find-people` | Apify credits, per run | ~$0.50–$1.00 for 25 people across a few companies |
| `npm run enrich` | Apify credits, per run | ~$0.20–$0.40 for a 12-person shortlist |
| `npm run watch` | Apify credits, per run | ~$0.20–$0.50 |
| `npm run embed` | Voyage tokens | effectively $0 on the free tier |
| `npm run rescore`, `export`, `query`, `bootstrap`'s free steps | never | $0 |
| **Typical month, weekly use** | | **$1–$3, usually inside the free credits** |

These are estimates. Apify prices per actor and they change. The live price is on each actor's page, and your actual spend is always visible at **https://console.apify.com/billing**. Every script prints its item cap and estimated cost before it spends anything, and you can press `Control + C` to stop it.

**The item caps are your spending safety.** `job-lab/search.json` contains `max_jobs_per_run` and `max_people_per_company`. Do not raise them past 250 and 50 unless you have checked your billing page and know what it will cost. A typo in those numbers is the only way this tool can spend real money.

---

# Part 4 — Your first run

## Step 9: Approve the LinkedIn tools on Apify — one time, 20 seconds

Apify makes you approve each tool once before it will run for you. Nobody skips this, and it is not
a sign anything is wrong. **This is a consent screen on Apify's own website. It is not a LinkedIn
login, and it never asks for your LinkedIn password.**

Open each of these links, sign in with the same Apify account your token came from, and click
**Try for free** (or **Start**), then approve the permissions prompt:

1. https://console.apify.com/actors/harvestapi~linkedin-job-search
2. https://console.apify.com/actors/harvestapi~linkedin-company-employees

Those two are all you need to start. If you later run `npm run enrich` or `npm run watch`, approve
these the same way when they ask:

3. https://console.apify.com/actors/harvestapi~linkedin-profile-scraper
4. https://console.apify.com/actors/harvestapi~linkedin-profile-posts

**Success looks like:** the page stops showing a permissions prompt and shows a normal "Start"
console instead. You do not need to actually run anything there.

**If you skip this step,** the next command will finish without errors but find zero jobs, and it
will tell you in plain English that approval is missing and print these same links. Nothing is
charged when that happens.

---

## Step 10: Run bootstrap

`bootstrap` is the one-shot setup run. It generates your search criteria from `career-plan.md`, fetches jobs, fetches people at your target companies, scores everything if you added a Voyage key, and writes the results where Claude and the dashboard can read them. It skips any paid step whose key is missing, without failing.

Paste this and press Enter:

```
npm run bootstrap
```

It prints a cost warning and the item cap before it spends anything. Read it. Press `Control + C` to stop, or Enter to continue.

**It takes 2–6 minutes.** LinkedIn scraping is not instant. If it looks frozen for 60 seconds, it is working — leave it.

**Success looks like** something along these lines:

```
Fetched 118 jobs (cap 120). Cost so far: ~$0.31
Fetched 74 people across 5 companies. Cost so far: ~$0.78
Embedded 118 jobs, 74 people.
Wrote ../dashboard/data.json
Wrote ../context-library/job-feed.md
Wrote ../context-library/referral-paths.md

Next: run /find-jobs in Claude to work through the feed.
```

**Cost of this step:** roughly $0.75–$1.50 for a first run, inside the Apify free credits.

## Step 11: Look at what you got

You have three ways to see the results. Any one of them is enough — pick whichever you like.

**A. Ask Claude (recommended).** Go back to Claude Code and run:

```
/find-jobs
```

It reads the digest, ranks the roles, groups them into archetypes, and tells you the three things to do next.

**B. Read the file.** Open `context-library/job-feed.md` in any text editor. It is a plain markdown list of what was found.

**C. Open the dashboard.** In your file browser, open the `dashboard` folder and double-click `index.html`. It opens in your browser.

If the dashboard shows a "drop your data.json here" box instead of your data, **that is normal, not an error.** Chrome refuses to let a local web page read another local file. Drag `dashboard/data.json` from your file browser onto the page and it loads instantly. Safari loads it automatically without the drag.

## Step 12: Weekly, from now on

Once a week, open a terminal in the `job-lab` folder (Steps 3 and 4 — it takes 20 seconds once you have done it twice) and paste:

```
npm run find-jobs
```

Then:

```
npm run export
```

Then go to Claude and run `/find-jobs`.

If you added a Voyage key, put `npm run embed` between those two commands.

That is the whole ongoing routine. Two or three pasted lines, once a week, about $0.30.

### Every command, for reference

| Paste this | Costs | What it does |
|---|---|---|
| `npm run bootstrap` | Apify credits | The full first-time run: jobs, people, scoring, export |
| `npm run find-jobs` | Apify credits | Refresh the job feed only |
| `npm run find-people` | Apify credits | Public employees at your target companies |
| `npm run enrich` | Apify credits | Full profiles + recent posts, shortlist only |
| `npm run watch` | Apify credits | Hiring-signal posts ("we're hiring", "joining X as") |
| `npm run embed` | Voyage tokens (free tier) | Fit scores, warmth, dedupe, clustering |
| `npm run rescore` | free | Recompute scores from data you already have |
| `npm run query` | free | Search your local database from the terminal |
| `npm run export` | free | Rewrite `dashboard/data.json` and the context-library digests |

Add `-- --help` to any of them to see its options, for example:

```
npm run find-jobs -- --help
```

---

# Troubleshooting

Find your symptom in the left column. Every fix is a full line you can paste.

| # | Symptom | What went wrong | Fix |
|---|---|---|---|
| 1 | `node: command not found` (Mac) or `'node' is not recognized as the name of a cmdlet` (Windows) | Node is not installed, or you are using the terminal window that was open *before* you installed it. | Close every terminal window, open a fresh one, and paste `node --version`. Still failing? Node is not installed — redo Step 2 and make sure you clicked the green **LTS** button. |
| 2 | `npm ERR! enoent ... package.json` or `Could not read package.json` | Your terminal is in the wrong folder. This is the most common problem in the whole guide. | Paste `pwd` (Mac) or `cd` alone (Windows). The path it prints must end in `job-lab`. If it does not, redo Steps 3 and 4. Dragging the folder onto the Terminal window (Mac) or typing `powershell` in the File Explorer address bar (Windows) is the reliable way. |
| 3 | `npm install` fails with a wall of red `npm ERR!` lines | Usually a half-finished previous install, or a dropped network connection mid-download. | Paste these two lines, one at a time. Mac: `rm -rf node_modules package-lock.json` then `npm install`. Windows: `rmdir /s /q node_modules` then `del package-lock.json` then `npm install`. If it still fails, check you are on wifi, then paste `npm cache clean --force` and try once more. Corporate laptops sometimes block npm — try a personal network. |
| 3b | `Apify needs your one-time approval to run harvestapi/...` or bootstrap finishes with **0 jobs** and no other error | You have not approved that tool on Apify yet. Every account has to do this once per tool. | Open the link printed in the message (or Step 9 above), sign in, click **Try for free** / **Start**, approve the prompt, then run the same command again. It is a consent screen on Apify's site, not a LinkedIn login. Nothing was charged. |
| 4 | `Missing APIFY_TOKEN` or `401 Unauthorized` or `Invalid token` | The token is missing, mistyped, has a stray space or quote mark, or the file got saved as `.env.txt`. | Reopen the file (`open -e .env` on Mac, `notepad .env` on Windows). The line must read `APIFY_TOKEN=apify_api_...` with no spaces around the `=`, no quotes, and nothing after the token. Windows: turn on **File name extensions** in File Explorer's View menu and confirm the file is `.env`, not `.env.txt`. Last resort: regenerate the token at https://console.apify.com/settings/integrations and paste the new one. |
| 5 | `429` / `rate limit` / `Too Many Requests` from Voyage | The Voyage free tier allows only a few requests per minute. | Nothing to fix — this is expected and handled. The script backs off and retries automatically, so a big run just takes several extra minutes. Let it finish. If it truly stops, paste `npm run embed` again; it resumes and skips what it already did. Adding a card to your Voyage account lifts the limit, but you do not need to. |
| 6 | It ran fine but found **zero jobs** | Your search criteria are too narrow. Almost always the title list, the location string, or too short a date window. | Paste `notepad search.json` (Windows) or `open -e search.json` (Mac). Then: (a) add more title variants — companies do not agree on titles, so `["Product Manager", "Senior Product Manager", "Product Lead"]` beats `["Senior PM"]`; (b) use LinkedIn's own region names — `"San Francisco Bay Area"`, not `"SF"` or `"California"`; (c) raise `posted_within_days` from 14 to 30. Save, then paste `npm run find-jobs` again. Easier option: go to Claude and run `/find-jobs` — it regenerates this file from your career plan for you. |
| 7 | The dashboard opens **blank**, or shows a "drop data.json here" box | Chrome blocks a local web page from reading another local file. This is a browser security rule, not a bug in the dashboard. | Drag `dashboard/data.json` from Finder or File Explorer onto the open page. It loads instantly. Or open `dashboard/index.html` in Safari, which allows it automatically. If the page is *completely* blank with no drop box at all, `index.html` did not open — right-click it, choose **Open With**, and pick your browser. |
| 8 | `You have insufficient credit` / `monthly usage limit reached` from Apify | Your free monthly credits are used up. | Nothing is broken. Three options, in order: (a) wait — credits reset monthly, and check the date at https://console.apify.com/billing; (b) lower `max_jobs_per_run` in `search.json` to 60 and `max_people_per_company` to 10, which roughly halves each run's cost; (c) run `/find-jobs --manual` in Claude and paste JDs yourself until the credits reset. The OS works fine on option (c) — that is the default mode for everyone who never set this up. |

### Two more that come up

**"It's been sitting there for three minutes doing nothing."** LinkedIn scraping through residential proxies is slow. Two to six minutes is a normal `bootstrap`. Leave it. If it has been over ten minutes with no new output, press `Control + C`, then paste `npm run find-jobs` to run just the first step and see if that alone completes.

**"I want to start completely over."** Delete the database and re-run. Mac: `rm data/jobs.db` then `npm run bootstrap`. Windows: `del data\jobs.db` then `npm run bootstrap`. This deletes only fetched data. It never touches `context-library/` — your experience library, career plan, and tracker are safe.

---

## If you get stuck, stop

Seriously. This is the optional part. If you have spent more than 30 minutes on it, close the terminal and go use the OS the normal way:

```
/find-jobs --manual
```

Paste a job description. Everything works. You will find jobs the way you already do, and every other skill behaves identically. The automation saves you some hunting; it is not the product.

Questions: [product-growth.com](https://product-growth.com)
