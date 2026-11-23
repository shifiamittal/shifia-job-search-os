# Base Resume (Master)

Last updated: 2026-11-23 (rev 2, after Shifia's bullet-by-bullet edits)
Built from: `experience-library.md` (canonical metrics + story bank), `resume-style-guide.md`, and the 8 resumes in `resumes/` (R37, Qualcomm, Coinbase, Rose Intl, Stripe Radar x4).

**How to use this file.** This is the bank, not a resume. It holds every project and bullet worth using, so it runs past one page. `/resume-tailor` picks the best 2-4 bullets per role for a JD and applies the style guide. Do not send this file to anyone.

**Conventions**
- Bullets follow the style guide: Surface, Action, Data (SAD). The metric and its result are bold.
- Project names (bold lines) are navigation only. Drop them in a tailored resume.
- Each bullet ends with a hidden comment: `<!-- TAGS | source -->`.
- **[CONFIRM]** marks a number or claim that conflicts with the library or has no source yet. Resolve before using it.
- Canonical numbers: $7.5M ARR, 70% recommendation acceptance at launch, 50K+ customers, 50+ shipping-cost drivers, SMB approval 4% to 15%. Do not add the 5 FTE privacy savings to the 6 HC platform savings; they overlap.
- Ownership words: "led the strategy" for BFS (data science built the model); "owned the API catalog" (engineering built the tooling). Never name clients.

---

# SHIFIA MITTAL

shifia.mittal09@gmail.com | 206-356-6348 | Seattle, WA, USA | linkedin.com/in/shifiamittal | github.com/shifiamittal

---

## SUMMARY (pick one; each is 2 lines)

**A. Enterprise AI and agents**
Principal product manager with 11+ years shipping AI/ML products at scale: an agentic AI platform in Keystone's AI startup ($7.5M ARR) and ML products at Amazon ($71M revenue, 50K+ customers), working with the CEO, CTO and 30+ engineers and data scientists.

**B. AI/ML platforms and developer products**
Principal product manager with 11+ years shipping AI/ML platforms at scale: a multi-tenant data platform and agent platform at Keystone ($7.5M ARR), and a self-service ML platform at Amazon (100+ production models, 30+ scientists) with APIs used by partner teams.

**C. Fintech, credit and fraud risk**
Principal product manager with 11+ years shipping AI/ML products at scale, including credit and fraud risk at Amazon Business ($71M revenue, 50K+ customers, ~$18M fraud losses avoided) and an agentic AI platform at Keystone's AI startup ($7.5M ARR).

---

## EXPERIENCE `2015 - Present (11 years)`

### Keystone.ai | *AI division of Keystone, a 20+ year tech and economics advisory firm (450+ employees, PE-backed)*
**Principal Product Manager-Technical** `2024 - Present`

**Project 1. Deep Enterprise platform, go-to-market and team**

- Led 0→1 product strategy and roadmap for Deep Enterprise, an AI supply chain platform, delivering **$25M in client savings across 5 Fortune 500 clients** and leading Keystone's pivot from consulting to a product-led business model that reached **$7.5M ARR**. <!-- STRATEGY,GROWTH | K1, K32 -->
- Productized Deep Enterprise platform deployment with 30+ engineers and data scientists, **reducing deployment time from 6 months to 4 months**. <!-- LEADERSHIP,EXECUTION | K1 -->
- Wrote the strategy document for Deep Enterprise that aligned the CEO and President on the move from consulting to product. Separately, wrote the Data Platform PRFAQ, which secured funding for 4 engineers. <!-- STRATEGY,LEADERSHIP | Writing notes -->
- Set modular, value-based subscription pricing for Deep Enterprise, aligning the CEO, Sales and Finance and rejecting usage-based and percent-of-savings models. Two clients upgraded from forecasting to the agent module (**+$500K ACV each**). <!-- STRATEGY,GROWTH | K32 -->
- Built the go-to-market around a referenceable Fortune 500 CPG client, where forecasting beat the incumbent tool. Turned that deployment into a repeatable sales narrative (better forecast performance, higher adoption, then less planner investigation time through the agent). In parallel, improved demos, enterprise security capabilities and deployment automation so new customers could be evaluated and onboarded with less bespoke work. <!-- STRATEGY,CUSTOMER | K22, K34, K13 -->
- Persuaded leadership and investors to deploy in each client's cloud instead of pure SaaS, **winning 2 additional clients**; accelerated deployment by 2 months through infrastructure as code on AWS and Azure. [CONFIRM: same 2-month figure as the bullet above, and K12 records the managed-service model as +1 month] <!-- STRATEGY,TECHNICAL | K12 -->
- Designed Deep Enterprise as modular services instead of a monolith so clients could deploy selectively, spending 6 extra development weeks up front against a 10× rewrite later. <!-- TECHNICAL | K13 -->
- Designed the Deep Enterprise product strategy around hierarchical forecasting as the MVP, replacing a univariate incumbent tool and **improving WAPE by up to 26%**. [NOTE: 26% is the item level; the range by level is 21-26%] <!-- STRATEGY,AI | K22 -->
- Enhanced the Deep Enterprise platform to **raise forecast adoption from 50% to 70%**; key features included SHAP explainability for planners, top-2 model weights per SKU for scientists, and retraining moved from weekly to quarterly plus on demand. <!-- AI,CUSTOMER | K9, K10 -->
- Launched and scaled HAT-AI, an AI assistant that automates roadmap reporting, leadership newsletters and knowledge discovery; served 30 partners and **saved 120 hours a week**. [VERIFY: library says 30 PMs across 15 finance products] <!-- AI,EXECUTION | Work History -->
- Led REI-Agent, a multi-agent analysis assistant that lets users investigate cost drivers in natural language, with automated data retrieval, variance analysis, governed enterprise metrics and auditable calculations. No metric on record. <!-- AI,TECHNICAL | Work History -->
- Mentored 3 dotted-line PMs, coaching one through a plan to weigh client requests against platform priorities so engineering met product goals with no delays. Also mentored 4-5 junior PMs and interns and ran 50+ hiring interviews across Keystone and Amazon. <!-- LEADERSHIP | K20 -->

**Project 2. Forecast Agent (multi-agent system)**

- Launched a multi-agent system (LLMs, RAG, LangGraph, MCP) that identifies erroneous forecasts, finds the root cause, and recommends a retrain or override; **70% recommendation acceptance, planner effort 4 hrs/day to 4 hrs/week, overstock $5M to $2M**. <!-- AI,EXECUTION | K2 -->
- Built a prototype in Codex to prove the case for the forecasting agent, showing >70% of recommendations adopted in shadow mode; helped secure engineering investment and accelerate engineering development by 2 months. [CONFIRM: K11 records >70% adopted on the prototype and a swap of 2 months of planned accuracy work for the agent; "shadow mode" and "accelerate by 2 months" are new wording] <!-- AI,STRATEGY | K11 -->
- Balanced AI autonomy with human oversight: the agent investigated potential root causes and generated recommendations, while consequential decisions were routed to human-in-the-loop approval. <!-- AI | K3 -->
- Designed the evaluation system for agent releases: expert-baselined reference cases, a harness to compare versions, automated checks, LLM-as-judge for grounding, and expert scoring. Agents had to clear launch gates (>70% acceptance, expert quality above 8/10, no direct forecast changes) before production. <!-- AI,EXECUTION | K4 -->
- Replaced a static RAG prototype with a pipeline of multi-source ingestion, quality gates, domain-adapted embeddings and a feedback loop, **improving retrieval from 58% to 81%**. <!-- AI,TECHNICAL | K8 -->
- Optimized AI cost with adaptive routing of simple cases to low-cost models and ambiguous ones to stronger models; **run cost fell ~30%** with lower latency and unchanged quality. <!-- AI,TECHNICAL | K14 -->
- Built a data catalog, metadata generation service and semantic layer after evals showed >60% of diagnostic failures involved fields with no description; **user re-ask rate dropped from 50% to 30%, and retrieval similarity rose from 0.6 to 0.8**. <!-- AI,PLATFORM | K6 -->

**Project 3. Multi-tenant Data Platform and APIs**

- Led the multi-tenant data platform (standard data models, reusable transformations, data-quality checks, data contracts, lineage, anonymization and PII blocking), **reducing client deployment from 3 months to 3 weeks**. <!-- PLATFORM,TECHNICAL | K15 -->
- Standardized the platform's access layers: data contracts for production science models, an API layer for applications, and a Python library for data scientists. **Onboarding and data wrangling each saved about 2 weeks.** <!-- PLATFORM,TECHNICAL | K17, K29 -->
- Owned the platform's API catalog and release communication, enabling application developers to onboard 5 client dashboards and **reducing platform-team support from 50% to 10% of the sprint**. <!-- PLATFORM,CUSTOMER | K29 -->

---

### Amazon `2016 - 2024 (8 years)`

**Sr. Product Manager-Technical, Amazon Business Financing & Credit** `2022 - 2024`

**Project 4. ML financing and credit products (Pay by Invoice 2.0 and global consumer credit)**

- Launched Amazon Business' ML financing product via experimentation, a 5% controlled launch, biweekly Agile sprints and monthly VP-level reviews against an S-team goal; scaled to 50K+ customers and **$71M in incremental revenue**. <!-- GROWTH,EXECUTION | A1 -->
- Built a segment-specific credit growth strategy after finding small businesses generated ~60% of GMS but only 4% were approved: new underwriting and credit at checkout for SMBs, and simpler onboarding and a propensity model for enterprise customers, run on annual OKRs and quarterly milestones. <!-- STRATEGY,GROWTH | A1 -->
- Reshaped the credit offer after concept validation with 20-30 customers showed SMBs needed to plan purchases, sharing each month's eligibility at the start of the month with lower limits and a pause on delinquency. <!-- CUSTOMER,STRATEGY | A2 revised -->
- Corrected a data bias in SMB credit underwriting, where thin credit files held small-business approval at 4%; rebuilt the model on Amazon behavioral data, **raising SMB approval to 15% with no credit losses after full launch**. <!-- RISK,AI | A1, A3 -->
- Capped exposure by risk tier, restricted financing on high-loss categories and added transaction-level controls instead of lowering approval thresholds, optimizing for economic profit, not approval volume. <!-- RISK,STRATEGY | A3 -->
- Used Data Science's pre-launch simulation of the target SMBs to spot high projected losses, then proposed adding lower-risk enterprise customers to the portfolio; **the updated simulation showed 6-8% lower potential losses**. <!-- RISK,STRATEGY | A6 revised -->
- Chose batch over real-time credit decisions to **launch 3 months earlier**, keeping ML inference out of checkout and managing risk with exposure caps and category limits. <!-- TECHNICAL,EXECUTION | A4 -->
- Defined versioned REST APIs for fraud checks at sign-up and real-time credit eligibility at checkout, built on batch underwriting plus transaction-level controls. <!-- TECHNICAL,PLATFORM | A4, A14 -->
- Integrated the Business Fraud Score and Buyer Risk Prevention's post-checkout checks into credit decisions, backed by a domain blocklist and exposure limits to protect legitimate businesses. <!-- RISK | A14 -->
- Applied responsible AI to credit models in regulated lending: adverse-action reason codes for every declined application, model impact tested across SMB and enterprise customers, and parallel review with Amazon's financial risk teams. Do not claim a fair-lending (ECOA/Reg B) review. <!-- RISK | SD23 -->
- Scaled a global consumer credit product through ML-personalized marketing (**$15M incremental revenue**), credit bureau integrations (**+17% data coverage, +7% approval**) and an onboarding redesign (**-50% abandonment**). [CONFIRM: library also lists the $15M under PBI 2.0 enterprise (A1)] <!-- GROWTH,CUSTOMER | Work History -->

**Project 5. Business Fraud Score (BFS 1.0 and 2.0)**

- Led the fraud strategy for Amazon Business, assessing every business at sign-up and before order placement; **avoided ~$18M in potential fraud losses, caught fraud ~10 days earlier and reduced false positives by 35%**; adopted by 6 teams. Data science built the model. [CONFIRM: the 35% is not in the library or any prior resume; give me the basis and I will record it] <!-- STRATEGY,RISK | A21, A22 -->

*Credit operations tools are not written as a bullet. Credit-analyst tool features, the Central Rules Engine MVP and the Credit Systems vision doc are confirmed, but what shipped and the impact are not on record.*

---

**Sr. Product Manager-Technical, ML Ops Developer Platform (MDLC)** `2020 - 2022`

**Project 6. Self-service ML platform for Amazon lending**

- Owned vision and roadmap for MDLC, a SageMaker-based MLOps platform covering pipelines, CI/CD, lineage and monitoring for 30+ risk and credit data scientists; secured 8+ engineering HC a year, **cut deployment time 40%, scaled to 100+ production models with flat headcount and saved 6 science HC a year**. <!-- PLATFORM,STRATEGY | A8 -->
- Replaced ~1.5 months of engineering setup per model with self-service provisioning and pipelines (users choose compute type and capacity; runs trigger automatically on certified data), shipping a Python-script MVP first and then a UI. **Science effort per deployment fell to about half a day.** [CONFIRM: the 1.5 months appears only in the Coinbase resume] <!-- PLATFORM,TECHNICAL | A8, A10 -->
- Automated CI/CD so every mainline commit builds a versioned container image with identical dev and prod dependencies, removing a week of engineering work per model and **saving ~2 engineering HC over 2 years**. [CONFIRM: "a week per model" appears only in the Coinbase resume] <!-- PLATFORM,TECHNICAL | A8 -->
- Turned team onboarding into a product, investing in documentation, templates and community support instead of asking each new team for 1 HC; **cut maintenance from 5 to 3 weeks per team**, with NPS 8+ across 30+ scientists. [CONFIRM: Coinbase says 5 new teams onboarded, the library note says 3; count left out] <!-- PLATFORM,CUSTOMER | A8 -->
- Made threshold-based monitoring and alerting the platform default to meet the Federal Reserve's SR 11-7 model-risk guidance, **expanding coverage from 30 to all 100 production models and avoiding ~400 science-weeks of setup**. <!-- RISK,PLATFORM | A9 -->
- Wrote the ML data privacy specification with Amazon's privacy and legal teams, presented it to the VP of Data Privacy and the Payments VP, and launched access controls, encryption and anonymization as platform defaults. **Adopted across ~20 Amazon Payments teams, saving 5 science FTE a year.** <!-- RISK,LEADERSHIP,PLATFORM | A10 -->

---

**Product Manager-Technical, Supply Chain Optimization** `2018 - 2020`

**Project 7. Seller ML products (SPORT, MOQ, TRACE)**

- Built ML recommendation products for inventory, pricing and shipping decisions across thousands of sellers, leading a 7+ person engineering and science team and aligning 20+ senior stakeholders; persuaded the VP of Amazon FBA to let the product recommend inventory placement. **$100M+ in savings** across SPORT, TRACE and MOQ. <!-- AI,LEADERSHIP,GROWTH | SD19 -->
- Built SPORT, an ML inventory-recommendation product, and exposed it through Selling Partner APIs so partner teams could show sellers recommendations and projected savings; **3 partner teams integrated it** (Seller Central, RIM and inventory placement). <!-- PLATFORM,TECHNICAL | A15 -->
- Raised SPORT adoption by researching adhering and non-adhering sellers and redesigning discoverability and execution (wider coverage, a Seller Central entry point, account-manager marketing); **adoption rose from 1% to 10%**. <!-- CUSTOMER,GROWTH | A12, A15 -->
- Built MOQ, an ML recommendation product that sets item-level order minimums by weighing shipping cost against conversion, with APIs used by Seller Central and 2 Asian marketplaces; scaled to 20K merchants and 120K offers. A controlled experiment showed **~60% higher seller adherence, no conversion loss and $20M in seller shipping savings**. <!-- AI,PLATFORM,GROWTH | A16 -->
- Launched TRACE, a causal decision support product that explained shipping-cost changes across 50+ drivers from 14 teams' systems and recommended the top fix to sellers via Seller Central APIs, contributing **$40M of the team's $100M+ in savings**. <!-- AI,STRATEGY,GROWTH | A11 -->
- Made TRACE's shipping costs understandable at the item level (Amazon incurred them per package) with a cost-allocation method built with Science, and set data contracts and SLAs with upstream owners across the 14 teams. <!-- TECHNICAL,CUSTOMER | A11 -->

---

**Product Manager, Amazon Pricing** `2016 - 2018`

**Project 8. Price-perception insight tools**

- Launched self-service price-perception insight tools benchmarking Amazon against 800+ retailers in 17 countries; **adopted by 40+ global pricing leaders**, with signals feeding the pricing models that set Amazon's prices. <!-- CUSTOMER,STRATEGY | Work History, SD20 -->
- Managed a Program Manager (the one solid-line direct report) through an L4 to L5 promotion in 2018: handed over the external survey vendor and 30+ stakeholders across 15+ countries in stages, coached the analysis, and wrote the promotion document. [NOTE: do not name him] <!-- LEADERSHIP | A13 -->

---

### Cognizant Technology Solutions `2015 - 2016`
**Business Analyst**, Chennai, India

- Owned the pre-sales lifecycle with technical solution architects, designing infrastructure solutions and pricing for 30+ APAC deals worth $25M (**45% win rate**). <!-- GROWTH | SD21 -->

---

## EDUCATION

**MBA, Marketing & Operations**, Indian Institute of Technology (IIT) Roorkee `2013 - 2015`
**B.E., Chemical Engineering**, Thapar University `2009 - 2013`

---

## OPEN ITEMS

1. **Keystone 2-month claims:** the 6 to 4 month deployment gain and "accelerated deployment by 2 months through infrastructure as code" are the same figure; K12 records the managed-service model as +1 month.
2. **Prototype claim:** "shadow mode" and "accelerate development by 2 months" vs K11 (>70% adopted; 2 months of accuracy work swapped for the agent).
3. **35% false-positive reduction (BFS):** new figure, no source in the library. Record the basis.
4. **$15M personalization:** consumer credit product or PBI 2.0 enterprise?
5. **HAT-AI:** "30 partners" vs library "30 PMs across 15 finance products."
6. **MDLC figures only in the Coinbase resume:** ~1.5 months setup per model, a week per model from CI/CD, 5 vs 3 teams onboarded.
7. **Credit-analyst tools and Central Rules Engine MVP:** what shipped, when, impact.
8. **Retired or parked, kept out:** "fraud loss rate fell 15%," "repeat fraud incidents -5%," A17 in-house vs third-party lender, $17MM larger seller loans, Moody's integration, "promoted 2 of 3."
9. **Removed by Shifia (2026-11-23):** the Personal Projects section (job-search system, patent search, ACARA), the BFS threshold, BFS 2.0 and IP-blocklist bullets, the adoption-drop and trust-policy bullets, and the CPG rollout, reconciliation and client-interface bullets.

## BULLET TAG REFERENCE

| Tag | Use when the JD asks for |
|---|---|
| AI | AI/ML, agents, LLMs, RAG, evals, model products |
| PLATFORM | platform, developer products, APIs, self-service, internal tools |
| RISK | trust and safety, fraud, credit risk, compliance, privacy, responsible AI |
| TECHNICAL | engineering collaboration, architecture, data, system design |
| GROWTH | revenue, adoption, ARR, savings, commercial results |
| STRATEGY | vision, roadmap, pricing, business model, 0→1 |
| LEADERSHIP | cross-functional influence, executives, managing and mentoring |
| EXECUTION | shipping under constraints, launch gates, rollout |
| CUSTOMER | discovery, research, adoption, customer-facing work |
