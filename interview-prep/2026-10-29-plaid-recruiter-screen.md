# Plaid: Recruiter Screen Prep, Staff PM, AI & Data Foundations

Prepared: 2026-10-29 · Recruiter: **Fernando Parada** (fparada@plaid.com) · Call: **Thu 2026-10-29, 10:00–10:30am Seattle** (10:30–11:00pm IST on the invite)
Resume for this role: `resumes/Shifia_Mittal_Resume_Plaid.pdf` (v2). Fernando asked for it before the call; no sent reply with the resume shows in Gmail, so send it now if you haven't.
Sources: Fernando's email (2026-10-16); Plaid's public posting for this role, as quoted in search results 2026-10-29 (the plaid.com page itself couldn't be fetched from this session); experience-library.md; career-plan.md; qa-master.md; interview-history.md; `insider-data/company-intel/plaid.md`.
[VERIFY: Company intel last updated 2026-03-24. Key details may have changed.] It says ~$13B valuation; Fernando says $8B as of February 2026. Use his number.

---

## TODAY'S PAGE (read only this before the call)

### What the role is, in one line
Own the shared AI and data platforms every Plaid product team builds on, an LLM gateway and eval infrastructure on the AI side and Databricks, pipelines and AI-powered data tooling on the data side, and turn a strategy that exists into **prioritized bets teams actually adopt**, working directly with the head of Data & AI.

### The 6 focus areas (and your proof for each)

| # | Focus area (their words) | What they're really testing | Your proof (one line each) |
|---|---|---|---|
| 1 | **"Define the vision, roadmap, and success metrics"**; "the strategy exists, but the prioritized bets don't yet" | Can you turn a vague strategy into 3–4 sequenced bets with metrics? | Keystone pivot: wrote the strategy doc that aligned the CEO and President on consulting → product ($7.5M ARR). Ranked three adoption blockers by reach, impact, confidence and effort; a prototype moved 2 months of roadmap to agents. |
| 2 | **"Build platforms that Plaid teams choose to use"**: adoption, developer velocity, reliability, quality | Have you won adoption without a mandate? | Amazon ML platform: competed with an easier-to-adopt internal platform; treated onboarding as a product (docs, community) and onboarded 5 teams without the 1-HC ask. Privacy default adopted by ~20 Payments teams. Fraud score adopted by 6 teams. |
| 3 | **AI platform: LLM gateway, eval infrastructure** | Do you understand shared AI infrastructure, not just one AI feature? | Evals: reference cases, a harness comparing prompt/tool/retrieval versions, LLM-as-judge, launch gates, production monitoring (caught a data gap; adoption 50% → 70%). Gateway-adjacent: model routing cut agent run cost ~30%. |
| 4 | **Data platform: Databricks, pipelines, quality, governance** | Can you own the data foundation, including governance? | Multi-tenant data platform: deployment 3 months → 3 weeks; data contracts, lineage, quality checks. Deployed in a Fortune 500 client's Databricks environment. SR 11-7 monitoring on 100 models. |
| 5 | **AI-powered data tooling and "the systems connecting the two"** | Do you see AI and data as one system? | AI-generated data catalog + semantic layer: found agents failed because fields had no descriptions, not because of the model. Clarification rate 50% → 30%, retrieval similarity 0.6 → 0.8. |
| 6 | **"Balance immediate needs from product teams with longer-term platform investments"**; standardize vs. build shared pieces vs. use a vendor | Build-vs-buy and sequencing judgment | Managed service vs. SaaS (K12); modular services vs. monolith (K13); client-native data + standard model contracts instead of one canonical schema (K17); privacy semi-automated in ~2 months instead of 1.5 years (A10). |

**Plaid-specific edge to name once:** you've done this in regulated financial data (Amazon lending: model-risk rules, EU/US privacy, fraud). Plaid's platforms sit on people's bank data, so governance and privacy are part of the platform, not an add-on.

### Five answers to say out loud

**1. Tell me about yourself (~150 words, ~75 seconds).**
"I'm a Principal Technical Product Manager with 11 years building AI, data and ML platforms, and getting other teams to adopt them.

Most recently at Keystone.ai, I led an agentic AI platform and the company's move from consulting to product, reaching $7.5 million in ARR across five Fortune 500 clients. Underneath it I built the data platform, which cut deployment from 3 months to 3 weeks, and the evaluation framework we used to launch agents safely.

Before that, I spent eight years at Amazon. The most relevant role was owning a self-service ML platform for our lending business: 100+ production models, and five new teams onboarded because we treated onboarding as a product. I also made privacy compliance a platform default that about 20 Payments teams adopted.

So this role, shared AI and data platforms, in fintech, that teams choose to use, is very close to what I've done."

**2. Why are you looking? (~45 words)**
"I want to set platform strategy at larger scale. Keystone.ai gave me 0→1 strategy with the CEO; Amazon gave me platforms used across many teams in a regulated business. This role combines both."
If asked when you left: "I wrapped up at Keystone.ai in March." Stop there. If asked directly: "My role was part of a restructuring at Keystone.ai earlier this year." **Never say "currently at Keystone."** (You said it in 4 of your last 4 interviews.)

**3. Why Plaid? (~70 words)**
"Three reasons. First, the problem: shared AI and data platforms are exactly where I've had the most impact. Second, the domain: I spent two years in Amazon lending and fraud, and Plaid's data is the foundation for a lot of fintech. Third, the stage: the strategy exists but the bets don't, which is the part I enjoy most, turning a direction into a sequenced roadmap teams adopt."

**4. Level and comp.** See the section below. Short version: ask for the level and full package first; don't name a number first.

**5. Logistics.**
"I'm in Seattle, and I see Plaid has a Seattle office, so hybrid there works well. I'm a Green Card holder, so no sponsorship needed. I can start quickly."

### Your two honest gaps (have these ready, don't volunteer them)
- **LLM gateway:** "I haven't owned a company-wide gateway. I built model routing inside our agent product, cheap models for simple cases and strong models for hard ones, which cut run cost about 30%. A gateway does that once for every team, plus keys, quotas, logging and data controls. That's the same move I made with the ML platform at Amazon: one shared path instead of every team building its own."
- **Databricks:** "I deployed our forecasting platform inside a Fortune 500 client's Databricks environment. I haven't run a company's Databricks platform, but I've owned the layer above it: data contracts, quality checks, lineage, and data access for scientists and app teams."

### Questions to ask Fernando (pick 4–5)
1. "What made my profile stand out for this role?" (tells you what to lead with in the next round)
2. "Where does Staff sit on Plaid's ladder, and how does it compare to Principal?"
3. "Can this role be based in the Seattle office?"
4. "The message said the strategy exists but the bets don't. What are the one or two biggest problems the head of Data & AI wants solved first?"
5. "Are teams building their own LLM tooling today, so adoption is the main challenge, or is it more greenfield?"
6. "How big is the AI & Data Foundations team today, and how many PMs?"
7. "What does the interview process look like, and what's the timeline?"
8. "Who is the hiring manager, and what's their background?"

### Landmines
- **Current employment:** never "I'm currently at Keystone." Say "most recently at Keystone.ai."
- **Metrics:** use only the canonical numbers: $7.5M ARR; deployment 3 months → 3 weeks (data platform) and 6 → 4 months (Deep Enterprise); 70% acceptance; 4 hrs/day → 4 hrs/week; 100+ models; 5 teams; ~20 teams; $71M; $18M.
- **Length:** under 2 minutes per answer. Drop "basically," "kind of," "right?"
- **Don't claim** a gateway, Unity Catalog, or Databricks platform ownership.
- **Don't name clients.** "A Fortune 500 CPG client."
- **Don't accept anything on the call.**

---

## Reference

### Comp and level
- **Posted base (Plaid careers page, per search results 2026-10-29):** **$207,600–$339,600**, excluding equity and benefits; varies by location. [VERIFY on the posting: an older copy listed $202.8K–$330K.]
- **Company intel (Mar 2026, stale):** Staff PM $370K–$550K total comp. [VERIFY: over 6 months old.]
- **Your floor:** $380–400K total comp. **Target:** $600K.
- **Competing data point:** Coinbase recruiter shared Amazon-L7-equivalent level and **$744,280/year total** (2026-10-26). That's real leverage, but only use it if the Plaid number comes in low.

**Flow:**
1. **Ask first:** "I'm focused on fit and the full package. Could you share the level and the budgeted total compensation for this role, including base, bonus and equity?"
2. **If pressed for your number:** "For this scope, I'm targeting around $550K to $650K in total compensation, and I'm flexible on the mix of base and equity."
3. **If their number is low:** "Thanks. I'm in process elsewhere at a comparable level with total compensation well above that, so I'd want to understand how equity and leveling work here. Is there flexibility in the level or the equity?"
4. **Past or current pay:** "I'd rather focus on what's budgeted for this role." (Washington bars employers from asking salary history.)
5. **Equity:** Plaid is private. Ask: "How do you value equity, what's the vesting schedule, and is there any liquidity, like tender offers?"

### If they ask about other roles at Plaid
Fernando said he's open to other teams. Your second-best fit is fraud and risk: "My fraud score work at Amazon (avoided $18M in fraud losses, adopted by 6 teams) and credit underwriting would fit a risk or identity team too, but AI & Data Foundations is my first choice."

### If asked "Where are you in your search?"
"I'm in conversations with a few companies, mostly in AI platforms, a couple at later stages. Plaid stands out because it's platform work in fintech. What's your timeline?"

### Facts about Plaid to have in your head (from Fernando's email)
- $8B valuation (February 2026); thousands of customers, including Venmo and SoFi; 12,000 financial institutions across the US, Canada, UK and Europe; more than half of Americans have used Plaid.
- Offices: San Francisco (HQ), New York, Seattle, Washington D.C., Raleigh, London, Amsterdam (per job postings).
- Public 2025 case study (promotional, treat numbers loosely): Plaid built internal AI agents for labeling transaction data and for fixing bank connection issues. Good for a question: "Are agents like those the kind of internal customer this platform serves?"

### Glossary (in case it comes up)
- **LLM gateway:** one shared service all teams use to call LLMs. Handles routing across providers, fallbacks, keys, quotas, cost tracking per team, logging, caching, and data controls like stripping personal data.
- **Eval infrastructure:** shared tools for testing AI quality: test sets, scoring (automated and LLM-as-judge), comparing versions, launch gates, and production monitoring.
- **Databricks:** the data platform where data is stored, transformed and used for analytics and ML. Unity Catalog is its governance layer (access control, lineage).
- **AI-powered data tooling:** AI applied to the data itself, for example auto-generated table descriptions, plain-English data questions, data-quality anomaly detection.
- **Systems connecting the two:** how AI apps get correct, permitted data: catalogs, semantic layers, feature stores, retrieval, and access controls.
