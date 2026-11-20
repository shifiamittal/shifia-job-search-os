# Base Resume (Master)

Last updated: 2026-11-20
Built from: `experience-library.md` (canonical metrics + story bank), `resume-style-guide.md`, and the 8 resumes in `resumes/` (R37, Qualcomm, Coinbase, Rose Intl, Stripe Radar x4).

**How to use this file.** This is the bank, not a resume. It holds every project and every bullet worth using, so it runs well past one page. `/resume-tailor` picks the best 2-4 bullets per role for a JD and applies the style guide. Do not send this file to anyone.

**Conventions**
- Bullets follow the style guide: Surface, Action, Data (SAD). The metric and its result are bold.
- Project names (bold lines) are navigation only. Drop them in a tailored resume.
- Each bullet ends with a hidden comment: `<!-- TAGS | source ID in experience-library.md -->`.
- **[CONFIRM]** marks a number or claim with a conflict in the library. Resolve before using it.
- Canonical numbers used here: $7.5M ARR, 70% recommendation acceptance at launch, 50K+ customers, 50+ shipping-cost drivers, WAPE 21-26% better, SMB approval 4% to 15%. Do not add the 5 FTE privacy savings (A10) to the 6 HC platform savings (A8); they overlap.
- Ownership words: "led the strategy" for BFS (data science built the model); "owned the API catalog" (engineering built the tooling). Never name clients (Hershey's, Michelin, Corning, Apple, Kroger).

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

**Project 1. Deep Enterprise platform and the consulting-to-product pivot**

- Led 0→1 strategy and roadmap for Deep Enterprise, an enterprise AI supply chain platform. Aligned the CEO and CTO on a pivot from consulting to a product-led model after seeing the same science, tech and UX rebuilt for every client. Reached **$7.5M ARR and $25M in annualized client savings** across 5 Fortune 500 clients, with all 5 renewing through the move. <!-- STRATEGY,GROWTH | K1, K32, SD5 -->
- Delivered the platform MVP in 3 months with 30+ engineers and data scientists. Split the work into 3 parallel lanes (customer data and deployment, forecasting models, planner app) with milestones and weekly cross-team reviews; **deployment time fell from 6 months to 4 months**. <!-- LEADERSHIP,EXECUTION | K1, K20 -->
- Wrote the strategy document that aligned the CEO and President on the move from consulting to product. Separately, wrote the Data Platform PRFAQ, which secured funding for 4 engineers. <!-- STRATEGY,LEADERSHIP | A26 writing notes -->
- Set modular, value-based subscription pricing with the CEO, Sales and Finance, rejecting usage-based and percent-of-savings models. Two clients upgraded from forecasting to agents (**+$500K ACV each**). <!-- STRATEGY,GROWTH | K32 -->
- Demoed the platform to a prospective client, scoped the proof of concept to shipment forecasting, and priced first deals on forecasting only with the sales leader. [NOTE: that client bought forecasting only; do not imply this deal caused the 2 agent upgrades] <!-- CUSTOMER,GROWTH | K34 -->
- Persuaded leadership and investors to deploy as a managed service in each client's cloud instead of pure SaaS, and productized deployment with infrastructure as code on AWS and Azure. The cost was 1 extra month of deployment time; it **won 2 additional clients with strict data-residency needs**. <!-- STRATEGY,TECHNICAL | K12 -->
- Chose modular services over a monolith so clients could deploy selectively, framing 6 extra weeks up front against a 10× rewrite later. Passed the flagship client's security review on time and **onboarded a second client with no refactor**. <!-- TECHNICAL | K13 -->

**Project 2. Forecasting deployment at a Fortune 500 CPG client**

- Led product for the forecasting platform at a Fortune 500 CPG client, replacing a univariate incumbent tool and spreadsheet reconciliation across commercial, sales and planning teams. Picked shipment forecasting as the entry point and shipped a hierarchical ensemble in the client's Databricks environment; **WAPE improved 21-26% over the incumbent** by hierarchy level. <!-- AI,STRATEGY,CUSTOMER | K22 -->
- Chose weighted least squares to reconcile forecasts across hierarchy levels after framing the goal as coherence, not just accuracy. Supply chain, sales and finance worked from one set of numbers, and **WAPE improved at every level**, not only the aggregate. <!-- AI,TECHNICAL | K23 -->
- Defined phase-one rollout criteria that covered 85% of SKUs and discouraged long-term parallel runs. Planners switched once the new forecast beat the incumbent on 4 weeks of rolling performance. <!-- EXECUTION,CUSTOMER | K26 -->
- Built reusable data and model interfaces so the client's data scientists could add model features themselves. Moved delivery from bespoke work toward a reusable platform. No metric on record. <!-- PLATFORM,TECHNICAL | K31 -->

**Project 3. Forecasting platform adoption**

- Kept a complex ensemble model and added the missing product layer: SHAP explainability for planners, top-2 model weights per SKU for scientists, and retraining moved from weekly to quarterly plus on demand. **Forecast adoption rose from 50% to 60%.** <!-- AI,CUSTOMER | K9 -->
- Ran customer discovery (about 3 months of high-touch support, planner interviews, workflow observation, adoption data) to find the top 3 blockers, and sequenced fixes with RICE: explainability, then the agent, then accuracy work. **Adoption rose from 50% to 70%, and override rate fell from 50% to 20%** (cumulative across all changes). <!-- CUSTOMER,STRATEGY | K10, K21 -->

**Project 4. Forecast Agent (multi-agent system)**

- Proved the case for agentic AI with a working prototype built in Codex, showing >70% of recommendations adopted. The result moved leadership to swap 2 months of planned accuracy work for agent capabilities. <!-- AI,STRATEGY | K11 -->
- Launched a multi-agent system (LLMs, RAG, LangGraph, MCP) that flags forecast problems, finds the cause, and recommends a retrain or override. Shipped through shadow mode and evaluation gates: **70% recommendation acceptance, planner effort 4 hrs/day to 4 hrs/week, overstock $5M to $2M.** <!-- AI,EXECUTION | K2 -->
- Reset the agent to three autonomy tiers (automate low-risk reversible actions, recommend with evidence for approval, surface only) after early automated actions on mid-confidence cases were reversed 60% of the time. Added audit logs and a canary rollout; **autonomous action acceptance rose from 30% to 80%.** <!-- AI,STRATEGY | K3 -->
- Set the evaluation system for agent releases: expert-baselined reference cases, a harness to compare versions, automated checks, LLM-as-judge for grounding, and expert scoring. Agents had to clear launch gates (>70% acceptance, expert quality above 8/10, no direct forecast changes) before production. <!-- AI,EXECUTION | K4 -->
- Traced an agent adoption drop at one client (70% to 50% over 4 weekly cycles) to a warehouse move missing from the agent's data. Added the location dataset and an escalate-on-missing-data guardrail, **restoring adoption to 70%**. <!-- AI,CUSTOMER | K5 -->
- Replaced a static RAG prototype (58% retrieval precision, recommended already-resolved actions) with an incremental pipeline: multi-source ingestion, quality gates, domain-adapted embeddings, and a feedback loop. **Retrieval precision rose from 0.58 to 0.81.** [CONFIRM: K2 deep-dive says precision@5 reached 0.87; pick one] <!-- AI,TECHNICAL | K8 -->
- Fixed pilot unit economics, where model cost exceeded the cost of manual work, by routing simple cases to low-cost models and ambiguous ones to stronger models. **Agent run cost fell ~30%** with lower latency and unchanged quality. <!-- AI,TECHNICAL | K14 -->
- Built a data catalog, metadata generation service and semantic layer after evals showed >60% of diagnostic failures involved fields with no description. **Users re-asking the assistant fell from 50% to 30%, and retrieval similarity rose from 0.6 to 0.8.** <!-- AI,PLATFORM | K6 -->
- Set a three-tier trust policy for AI-generated field descriptions (auto-publish above 0.85, human review at 0.70-0.84, blocked below 0.70). **Planner approval of descriptions rose from 50% to 80%.** <!-- AI,EXECUTION | K7 -->

**Project 5. Multi-tenant Data Platform and APIs**

- Built the multi-tenant data platform with 7-8 engineers: standard data models, reusable transforms, data-quality checks, data contracts, lineage, anonymization and PII blocking. **Client deployment fell from 3 months to 3 weeks.** First version shipped in 6 weeks. <!-- PLATFORM,TECHNICAL | K15, SD5 -->
- Kept client data in its native form and standardized the model-facing contracts (keys, timestamps, time-variant and invariant features) instead of forcing the CEO's single canonical schema. **Onboarding and data wrangling each saved about 2 weeks.** <!-- PLATFORM,STRATEGY | K17 -->
- Defined data contracts from SQL analysis (Athena on AWS Glue) of client order, shipment and promotion data: checked grain, keys and join behavior, and found data-quality issues. The findings shaped the platform architecture. <!-- TECHNICAL | K33 -->
- Led product for CoreAI-IO, a data-access layer that lets scientists pull platform datasets from notebooks, with a standard forecasting input contract that kept client pipelines separate from model code. **Saved ~2 weeks of data wrangling per model.** <!-- PLATFORM,TECHNICAL | K29 -->
- Owned the platform's API catalog (endpoints, schemas, auth, integration examples) and release communication; engineering built the API service and tooling. **App developers onboarded 5 client dashboards with no extra platform support, and app-team requests fell from ~50% to ~10% of the sprint.** <!-- PLATFORM,CUSTOMER | K29 -->
- Shipped an event-stream capability in 2-3 weeks for a high-stakes demo by splitting event features from existing data (now) from live ingestion (later). The prospect became a paying customer, forecast accuracy rose 5%, and the work became the platform's foundation. <!-- EXECUTION,STRATEGY | K16 -->

**Project 6. Internal AI assistants (thin detail, see notes)**

- Launched and scaled HAT-AI, an AI assistant that automates roadmap reporting, leadership newsletters and knowledge discovery across 15 finance products. Served 30 PMs and **saved 120 hours a week.** [VERIFY detail: library has only this line; no recent resume uses it] <!-- AI,EXECUTION | Work History resume bullets -->
- Led REI-Agent, a multi-agent financial analysis assistant that lets users investigate cost drivers in natural language, with automated data retrieval, variance analysis, governed enterprise metrics and auditable calculations. No metric on record. [VERIFY detail] <!-- AI,TECHNICAL | Work History resume bullets -->

**Leadership across Keystone**

- Mentored 3 dotted-line PMs, coaching one through a plan to weigh client requests against platform priorities (weekly 1:1s, decision rule for delegate, defer or escalate). Engineering met product goals with no delays. Also mentored 4-5 junior PMs and interns and ran 50+ hiring interviews across Keystone and Amazon. <!-- LEADERSHIP | K20, SD9 -->

---

### Amazon `2016 - 2024 (8 years)`

**Sr. Product Manager-Technical, Amazon Business Financing & Credit** `2022 - 2024`

**Project 7. Amazon Business ML financing product (Pay by Invoice 2.0)**

- Launched Amazon Business' ML financing product through customer concept validation, a 5% controlled launch, biweekly Agile sprints and monthly VP-level reviews against an S-team goal to grow Amazon's lending business. Scaled to 50K+ customers and **$71M in incremental revenue.** <!-- GROWTH,EXECUTION | A1, A2 -->
- Built a segment-specific growth strategy after finding small businesses generated ~60% of GMS but only 4% were approved for credit. Gave SMBs new underwriting and credit at checkout, and gave enterprise customers simpler onboarding and a propensity model. Ran it with annual OKRs and quarterly milestones. <!-- STRATEGY,GROWTH | A1 -->
- Reshaped the credit offer after concept validation with 20-30 customers showed SMBs needed to plan purchases. Shared each month's eligibility at the start of the month, with lower limits and a pause on delinquency. <!-- CUSTOMER,STRATEGY | A2 revised -->
- Corrected a data bias in SMB underwriting: thin credit files held small-business approval at 4%. Rebuilt the model on Amazon behavioral data, using business-level features only (owner attributes and ZIP excluded). **SMB approval rose from 4% to 15%, with no credit losses after full launch.** <!-- RISK,AI | A1, A3, SD23 -->
- Capped exposure by risk tier and restricted financing on high-loss categories instead of lowering approval thresholds, optimizing for economic profit, not approval volume. <!-- RISK,STRATEGY | A3 -->
- Used Data Science's pre-launch simulation of the target SMBs to spot high projected losses, then proposed adding lower-risk enterprise customers to the portfolio. **The updated simulation showed 6-8% lower potential losses.** <!-- RISK,STRATEGY | A6 revised -->
- Chose weekly batch underwriting with a real-time API at checkout that read the precomputed assessment and applied transaction-level controls, keeping ML inference out of checkout. **Launched 3 months earlier**, with exposure caps and category limits managing risk. <!-- TECHNICAL,EXECUTION | A4 -->
- Defined versioned, backward-compatible REST APIs for credit eligibility at checkout and fraud decisions at onboarding. <!-- TECHNICAL | A14 -->
- Applied responsible AI to credit models in regulated lending: reason codes for every declined application, model impact tested across SMB and enterprise customers, and parallel review with Amazon's financial risk teams. Do not claim a fair-lending (ECOA/Reg B) review. <!-- RISK | SD23 -->

**Project 8. Business Fraud Score (BFS 1.0 and 2.0)**

- Led the fraud strategy for Amazon Business Pay by Invoice and wrote the PRFAQ for a single fraud score that assesses every business at sign-up, before any order, so any team can apply its own response. **~$18M in fraud losses avoided** and adopted by 6 teams. Data science built the model. <!-- STRATEGY,RISK | A21, A22, A26 -->
- Set the launch threshold at 99% precision (about 25% recall) after a 3-week shadow run and back-test, with buyer-risk checkout controls catching what the score missed. The shadow run showed essentially no false suspensions of legitimate businesses. <!-- RISK,TECHNICAL | A24, A21 -->
- Found fraudsters who passed sign-up checks but behaved like bots, then launched BFS 2.0 with behavioral and IP signals and an IP blocklist. **Caught fraud ~10 days earlier, raised upfront detection ~15%, and flagged ~$2.7M in fraudulent credit lines.** <!-- RISK,AI | A23 -->
- Cut the IP blocklist's path to launch from about 22 weeks to 1 week by hosting it in a refreshable in-memory cache instead of the ML feature store, with safeguards so the cache always loaded the latest file. Shipped on schedule. <!-- EXECUTION,TECHNICAL | A25 -->
- Designed the score as a service that other teams build on: buyer risk, credit assessment, sign-up verification, Business Prime, micro-deposit verification and small-business card applications each chose to block, verify or filter. **All 6 teams adopted it.** <!-- PLATFORM,LEADERSHIP | A27 -->

**Project 9. Global consumer credit product**

- Scaled a global consumer credit product through three levers: ML-personalized marketing (**$15M incremental revenue**), credit bureau integrations (**+17% data coverage, +7% approval**), and an onboarding redesign (**-50% abandonment**). [CONFIRM: library also lists the $15M under PBI 2.0 enterprise personalization (A1); confirm which product owns it] <!-- GROWTH,CUSTOMER | Work History, SD23 -->

**Credit operations tools (needs detail before use; do not use yet)**
- Credit-analyst tool features, the Central Rules Engine MVP and the Credit Systems convergence vision doc ("ABPL Tech 2025 Vision") are confirmed, but what shipped, when, and the impact are not on record. See "Open items" below.

---

**Sr. Product Manager-Technical, ML Ops Developer Platform (MDLC)** `2020 - 2022`

**Project 10. Self-service ML platform for Amazon lending**

- Owned vision and roadmap for MDLC, a SageMaker-based MLOps platform for 30+ risk and credit data scientists with no governance and 3-4 months of engineering per model. **Cut deployment time 40%, scaled to 100+ production models with flat headcount, and saved 6 science HC a year.** <!-- PLATFORM,STRATEGY | A8, SD canonical -->
- Secured 2 engineering HC for the MVP from an MDLC strategy doc, then 8+ HC year over year. Shipped a Python-script flow first (**-50% deployment time**), then the UI, which brought science effort per deployment down to about half a day. <!-- STRATEGY,EXECUTION | A8 dev-experience, Writing notes -->
- Automated model deployment from a git link (auto-containerization) and data sourcing into S3 with auto-triggered workflows. **Saved ~2 engineering HC over 2 years and 2 weeks per deployment.** <!-- PLATFORM,TECHNICAL | A8 dev-experience -->
- Treated onboarding as a product after comparing MDLC with a competing internal platform that was easier to adopt, and invested in documentation, templates and community support. **Cut maintenance per onboarded team from 5 to 3 weeks**, with NPS 8+ across 30+ scientists. [CONFIRM: team count is 3 in one note, 5 in another; left out] <!-- PLATFORM,CUSTOMER | A8, A8 dev-experience -->
- Made threshold-based monitoring and alerting the platform default to meet the Federal Reserve's SR 11-7 model-risk guidance. **Monitoring coverage grew from 30 to all 100 production models, avoiding ~400 science-weeks of one-time setup** (about 10 scientist-years). <!-- RISK,PLATFORM | A9, A8 -->
- Made privacy a platform default. Defined how EU and US privacy rules (on-demand deletion, returning customer data, deletion at retention expiry) apply to ML, with Amazon's privacy and legal teams, then presented the policy to the VP of Data Privacy and the Payments VP. Shipped a semi-automated version in ~2 months instead of waiting 1.5 years for full automation. **Adopted across ~20 Amazon Payments teams, saving 5 science FTE a year.** <!-- RISK,LEADERSHIP,PLATFORM | A10 -->
- Launched access controls, encryption and anonymization as MDLC platform features for ML data. No metric on record. [NOTE: name the controls; never write "HIPAA-like"] <!-- RISK,PLATFORM | SD23 -->

---

**Product Manager-Technical, Supply Chain Optimization** `2018 - 2020`

**Project 11. Seller ML products overall (SPORT, TRACE, MOQ)**

- Built ML recommendation products for inventory, pricing and shipping decisions across thousands of sellers, leading a 7+ person engineering and science team and aligning 20+ senior stakeholders. Persuaded the VP of Amazon FBA to let SPORT recommend inventory placement. **$100M+ in savings across SPORT, TRACE and MOQ.** <!-- AI,LEADERSHIP,GROWTH | SD19, Work History -->

**Project 12. SPORT (inventory placement)**

- Built SPORT, an ML product recommending inventory moves from high-cost to lower-cost fulfillment channels. Wrote the spec to expose it through Selling Partner APIs so partner teams could act on recommendations at scale. **3 partner teams integrated** (Seller Central, RIM, inventory placement). <!-- PLATFORM,TECHNICAL | A15 -->
- Raised SPORT adoption by researching adhering and non-adhering sellers and redesigning discoverability and execution: more recommendations per cycle, a Seller Central entry point, and account-manager marketing. **Adoption rose from 1% to 10%.** <!-- CUSTOMER,GROWTH | A12, A15 -->

**Project 13. MOQ recommendations**

- Built MOQ, an ML recommendation product that sets item-level minimum order quantities by weighing shipping cost against conversion, with APIs used by Seller Central and country teams in 2 Asian marketplaces. Scaled to 20K merchants and 120K offers. A controlled experiment showed **~60% higher seller adherence, no conversion loss, and $20M in seller shipping savings.** <!-- AI,PLATFORM,GROWTH | A16 -->

**Project 14. TRACE (shipping-cost attribution)**

- Launched TRACE, a causal decision support product that explained shipping-cost changes across 50+ drivers from 14 teams' systems and recommended the top fix to sellers through Seller Central APIs. Worked backward from two seller questions: why did the cost change, and what can be done about it? **$40M in savings** toward a $60M goal. <!-- AI,STRATEGY,GROWTH | A11 -->
- Made shipping cost understandable at the item level (Amazon incurred it per package) by working with Science on a cost-allocation method, and set data contracts and SLAs with upstream owners. Helped sellers act on cost changes they could influence, not the full cost. <!-- TECHNICAL,CUSTOMER | A11 -->

---

**Product Manager, Amazon Pricing** `2016 - 2018`

**Project 15. Price-perception insight tools**

- Launched self-service price-perception insight tools benchmarking Amazon against 800+ retailers in 17 countries. **Adopted by 40+ global pricing leaders**; signals fed the pricing models that set Amazon's prices and led to pricing changes. <!-- CUSTOMER,STRATEGY | Work History, SD20 -->
- Managed a Program Manager (the one solid-line direct report) through an L4 to L5 promotion in 2018: handed over the external survey vendor and 30+ stakeholders across 15+ countries in stages, coached the analysis, and wrote the promotion document. The PM then ran price-perception surveys in 15+ countries independently. [NOTE: do not name him] <!-- LEADERSHIP | A13 -->

---

### Cognizant Technology Solutions `2015 - 2016`
**Business Analyst**, Chennai, India

- Owned the pre-sales lifecycle with technical solution architects, designing infrastructure solutions and pricing for 30+ APAC deals worth $25M (**45% win rate**). <!-- GROWTH | SD21 -->

---

## PERSONAL PROJECTS `2026`

**AI job-search system** (github.com/shifiamittal/pm-job-search-agent)
- Built an AI system to discover jobs, evaluate fit against real experience, and shortlist roles. The first version let an LLM decide when its search was done and missed jobs she knew existed. Rebuilt it as deterministic discovery (source-specific integrations, explicit pagination, retries, coverage checks) plus agentic evaluation. **100% recall on known-job benchmarks: Adobe 41/41, NVIDIA 35/35, CrowdStrike 10/10.** Coverage is visible: 3 integrations complete, 16 partial, 7 failed. <!-- AI,TECHNICAL | S1 -->

**Patent search retrieval (in progress)**
- Testing how lexical and semantic retrieval, citation expansion and reranking improve recall against an analyst-led process. Personal project; no metrics yet, so omit from resumes unless results land. <!-- AI,TECHNICAL | Side Projects -->

**ACARA, IIT Roorkee (2013)**
- Business plan to improve farmers' economics: crop-choice education, storage access, and direct market linkage to remove middlemen. Omit from nearly all resumes. <!-- STRATEGY | Side Projects -->

---

## EDUCATION

**MBA, Marketing & Operations**, Indian Institute of Technology (IIT) Roorkee `2013 - 2015`
**B.E., Chemical Engineering**, Thapar University `2009 - 2013`

Optional (rarely used): Top 0.1% nationally in English, CBSE (2007).

---

## OPEN ITEMS (resolve before using these)

1. **$15M personalization:** Work History credits it to the global consumer credit product; A1 lists it under PBI 2.0 enterprise. Which product owns it?
2. **Retrieval precision:** K8 says 0.58 to 0.81; the Keystone "additional facts" say precision@5 0.58 to 0.87. Pick one.
3. **HAT-AI and REI-Agent:** the library has one line each and no recent resume uses them. Add scope, your role, and (for REI-Agent) a result, or leave them out.
4. **MDLC onboarding count:** 3 teams or 5 teams? Left out of the bullet.
5. **Credit-analyst tools and Central Rules Engine MVP:** what shipped, when, adoption, time-per-case impact. A strong platform bullet once documented.
6. **Pricing outcomes at Keystone:** ACV and upsell are on record (+$500K x 2); any other ARR contribution from pricing is not.
7. **Keystone support cost:** support per client fell to ~30% of the starting level (K10 revised, C5). Left out of the pricing bullets because K10 flags which figure to quote.
8. **Parked or unverified, kept out on purpose:** A17 (in-house vs third-party lender, parked), larger seller loans ($17MM), Moody's integration, the doc's "led a 3-member team and promoted 2 of 3," and the retired "fraud loss rate fell 15%."

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
