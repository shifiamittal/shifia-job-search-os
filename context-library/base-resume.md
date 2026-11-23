# Base Resume (Master)

Last updated: 2026-11-23 (rev 5, after Shifia's fourth round of edits)
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

- Led 0→1 product strategy and roadmap for Deep Enterprise, an AI supply chain platform for Fortune 500 enterprises, delivering **$25M in client savings across 5 clients** and enabling Keystone's pivot from consulting to a product-led business model that reached **$7.5M ARR**. <!-- STRATEGY,GROWTH | K1, K32 -->
- Productized Deep Enterprise platform deployment with 30+ engineers and data scientists, **reducing deployment time from 6 months to 4 months**. <!-- LEADERSHIP,EXECUTION | K1 -->
- Wrote the strategy document for Deep Enterprise that aligned the CEO and President on the move from consulting to product. <!-- STRATEGY,LEADERSHIP | Writing notes -->
- Set modular, value-based subscription pricing for Deep Enterprise, aligning the CEO, Sales and Finance; two clients upgraded from forecasting to the agent module (**+$500K ACV each**). <!-- STRATEGY,GROWTH | K32 -->
- Built the go-to-market for Deep Enterprise, aligned a Fortune 500 CPG client as the reference customer, designed a repeatable sales narrative, improved demos, and automated deployment to fast-track onboarding, **resulting in 2 additional clients**. <!-- STRATEGY,CUSTOMER | K22, K34, K1 -->
- Persuaded leadership and investors to deploy in each client's cloud instead of pure SaaS, **winning 2 additional clients** with strict data-residency and cloud-environment requirements. <!-- STRATEGY,TECHNICAL | K12 -->
- Designed Deep Enterprise as modular services instead of a monolith so clients could deploy selectively, spending 6 extra development weeks up front against a 10× rewrite later. <!-- TECHNICAL | K13 -->
- Designed the Deep Enterprise product strategy around hierarchical forecasting as the MVP, replacing a univariate incumbent tool and **improving WAPE by up to 26%**. [NOTE: 26% is the item level; the range by level is 21-26%] <!-- STRATEGY,AI | K22 -->
- Launched Deep Enterprise platform enhancements, including SHAP explainability and quarterly and on-demand retraining, **improving forecast adoption from 50% to 70%**. [NOTE: library credits explainability with 50% to 60% and the agent with 60% to 70%] <!-- AI,CUSTOMER | K9, K10 -->
- Launched and scaled HAT-AI, an AI assistant that automates roadmap reporting, leadership newsletters and knowledge discovery; served 30 partners and **saved 120 hours a week**. <!-- AI,EXECUTION | Work History; verified 2026-11-23 -->
- Led REI-Agent, a multi-agent analysis assistant that lets users investigate cost drivers in natural language, with automated data retrieval, variance analysis, governed enterprise metrics and auditable calculations. <!-- AI,TECHNICAL | Work History -->
- Mentored 3 dotted-line PMs, coaching one through a plan to weigh client requests against platform priorities so engineering met product goals with no delays. Also mentored 4-5 junior PMs and interns and ran 50+ hiring interviews across Keystone and Amazon. <!-- LEADERSHIP | K20 -->

**Project 2. Forecast Agent (multi-agent system)**

- Launched a multi-agent system (LLMs, RAG, LangGraph, MCP) that identifies erroneous forecasts, finds the root cause, and recommends a retrain or override; **70% recommendation acceptance, planner effort 4 hrs/day to 4 hrs/week, overstock $5M to $2M**. <!-- AI,EXECUTION | K2 -->
- Built a prototype in Codex to prove the case for the forecasting agent, showing >70% of recommendations adopted in shadow mode; helped secure engineering investment and accelerate engineering development by 2 months. <!-- AI,STRATEGY | K11; confirmed 2026-11-23 -->
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

**Project 4. Amazon Business credit products (SMB credit, fraud strategy, consumer credit)**

- Launched a credit-based payment product for Amazon Business via experimentation and a 5% controlled launch, scaling to 50K+ customers and **$71M in incremental revenue**. <!-- GROWTH,EXECUTION | A1 -->
- Built a segment-specific credit product strategy for SMBs with thin credit files by rebuilding underwriting on Amazon behavioral data, **raising SMB approval from 4% to 15% with no credit losses after full launch**. <!-- STRATEGY,RISK,AI | A1, A3 -->
- Redesigned credit risk management for the SMB credit product, including exposure caps by risk tier, restricted financing on high-loss categories, batch underwriting with a real-time eligibility check at checkout, and a blended portfolio that added lower-risk enterprise customers (**6-8% lower simulated losses**). <!-- RISK,STRATEGY,TECHNICAL | A3, A4, A6 revised -->
- Led the fraud strategy for Amazon Business, assessing every business at sign-up and before order placement; **avoided ~$18M in potential fraud losses, caught fraud ~10 days earlier and reduced false positives by 35%**; adopted by 6 teams. <!-- STRATEGY,RISK | A21, A22; 35% confirmed 2026-11-23 -->
- Scaled a global consumer credit product through ML-personalized marketing (**$15M incremental revenue**), credit bureau integrations (**+17% data coverage, +7% approval**) and an onboarding redesign (**-50% abandonment**). <!-- GROWTH,CUSTOMER | Work History; $15M confirmed 2026-11-23 -->



*Credit operations tools are not written as a bullet. Credit-analyst tool features, the Central Rules Engine MVP and the Credit Systems vision doc are confirmed, but what shipped and the impact are not on record.*

---

**Sr. Product Manager-Technical, ML Ops Developer Platform (MDLC)** `2020 - 2022`

**Project 5. Self-service ML platform for Amazon lending**

- Owned vision and roadmap for MDLC, a SageMaker-based MLOps platform including pipelines, CI/CD, lineage and monitoring used by 30+ data scientists; **reduced deployment time by 40% and scaled to 100+ production models with flat headcount**. <!-- PLATFORM,STRATEGY | A8 -->
- Automated CI/CD so every mainline commit builds a versioned container image with identical dev and prod dependencies, removing a week of engineering work per model and **saving ~2 engineering HC over 2 years**. <!-- PLATFORM,TECHNICAL | A8; confirmed 2026-11-23 -->
- Turned team onboarding into a product, through documentation, self-serve onboarding templates and community support; **reducing maintenance time from 5 to 3 weeks per team**, with NPS 8+ across 30+ scientists. <!-- PLATFORM,CUSTOMER | A8 -->
- Made threshold-based monitoring and alerting the platform default to meet the Federal Reserve's model-risk guidance, **expanding coverage from 30 to all 100 production models and avoiding ~400 science-weeks of setup**. <!-- RISK,PLATFORM | A9 -->
- Wrote the ML data privacy specification with Amazon's privacy and legal teams, presented it to the VP of Data Privacy and the Payments VP, and launched access controls, encryption and anonymization as platform defaults. **Adopted across ~20 Amazon Payments teams, saving 5 science FTE a year.** <!-- RISK,LEADERSHIP,PLATFORM | A10 -->

---

**Product Manager-Technical, Supply Chain Optimization** `2018 - 2020`

**Project 6. Seller ML products (SPORT, MOQ, TRACE)**

- Led ML recommendation products for inventory, pricing and shipping decisions across thousands of sellers; persuaded the VP of Amazon FBA to let the product recommend inventory placement decisions, driving **$100M+ in seller savings**. <!-- AI,LEADERSHIP,GROWTH | SD19 -->
- Led SPORT, an ML inventory-placement recommendation product; exposed it through Selling Partner APIs so partner teams could show sellers recommendations and projected savings; **3 partner teams integrated it** (Seller Central, RIM and inventory placement). <!-- PLATFORM,TECHNICAL | A15 -->
- Raised SPORT adoption by researching adhering and non-adhering sellers and redesigning discoverability and execution (wider coverage, a Seller Central entry point, account-manager marketing); **adoption rose from 1% to 10%**. <!-- CUSTOMER,GROWTH | A12, A15 -->
- Built MOQ, an ML recommendation product that sets item-level order minimums by weighing shipping cost against conversion, with APIs used by Seller Central and 2 Asian marketplaces; scaled to 20K merchants and 120K offers. A controlled experiment showed **~60% higher seller adherence, no conversion loss and $20M in seller shipping savings**. <!-- AI,PLATFORM,GROWTH | A16 -->
- Launched TRACE, a causal decision support product that explained shipping-cost changes across 50+ drivers and recommended the top fix to sellers via Seller Central APIs, **contributing $40M in seller cost savings**. <!-- AI,STRATEGY,GROWTH | A11 -->

---

**Product Manager, Amazon Pricing** `2016 - 2018`

**Project 7. Price-perception insight tools**

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

1. **"2 additional clients" is credited twice:** the go-to-market bullet and the client-cloud deployment bullet both claim it. The library ties the 2 clients to the client-cloud decision (K12).
2. **Adoption 50% to 70%:** library credits explainability with 50% to 60% and the agent with 60% to 70%.
3. **MDLC self-serve provisioning bullet (~1.5 months of setup per model):** held out until you decide; it appears only in the Coinbase resume.
4. **Credit-analyst tools and Central Rules Engine MVP:** what shipped, when, impact.
5. **$100M+ as "seller savings":** the library says savings "across Amazon and thousands of sellers."
6. **35% false-positive reduction:** confirmed by you; basis (how it was measured) not recorded yet.
7. **Retired or parked, kept out:** "fraud loss rate fell 15%," "repeat fraud incidents -5%," A17 in-house vs third-party lender, $17MM larger seller loans, Moody's integration, "promoted 2 of 3."
8. **Removed by Shifia (2026-11-23):** Personal Projects section; Data Platform PRFAQ line; BFS threshold, BFS 2.0 and blocklist bullets; SMB offer redesign, simulation, batch-vs-real-time, API and fraud-integration bullets (folded into one credit risk bullet); responsible AI bullet; TRACE item-level bullet; adoption-drop and trust-policy bullets; CPG rollout, reconciliation and client-interface bullets.

---

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
