# Resume Output - R37 AI Lab (R1 RCM / Phare Health) · Principal Product Manager
**Keyword Coverage: 96% (23/24 requirements matched: 18 strong, 5 partial, 1 unmatched)**
**Strong-only coverage: 75% (18/24)**

Source: `R37_Principal_Product_Manager_JD_1.pdf` (uploaded 2026-10-22). US, remote, full time. Senior IC role. No salary in the JD.

Requirement list: Shifia's 24 core requirements (2026-10-22), which replace the 16 I extracted in v1. All are treated as REQUIRED. 96% is high enough to look inflated, so the strong-only figure is shown too. The one miss is the qualification recruiters screen on first.

No earlier R37 resume is saved in this repo, so this version starts from `experience-library.md`.

## Before you send

1. **Healthcare is the real screen-out risk.** "Deep healthcare experience, preferably revenue cycle management" (#17) has no match. The resume can't close it; a referral and the cover letter can. Get a referral at R1 or Phare before you apply (`/build-referral-graph` for R1 RCM).
2. **Domain mismatch rule applied.** Bullets lead with skills that transfer to RCM (decision automation, human review, auditability, governed financial metrics, privacy). Supply-chain and lending details come second. Clients are not named.
3. **Keystone dates.** Shown as "Jun 2024 – Present" (your choice). Never say you're currently at Keystone; use the restructuring script in `qa-master.md`.
4. **Comp unknown.** Ask for the full package (base + bonus + equity) at the recruiter screen. Your floor is $380–400K total comp.

## Requirement Map (your 24)

| # | Requirement | Match | Where it shows on the resume |
|---|---|---|---|
| 1 | Startup-level ownership, enterprise-level impact | STRONG | Summary (Keystone.ai 0→1 + 8 years at Amazon); Keystone bullets 1–2 |
| 2 | Build AI that ships, scales, and measurably improves | STRONG | Summary; agent (70% acceptance, 4 hrs/day → 4 hrs/week); financing ($71M, 50K+); MLOps (100+ models) |
| 3 | Translate emerging AI + complex healthcare workflows into outcomes | PARTIAL | Complex enterprise and financial workflows, yes; healthcare workflows, none. See gap 1 |
| 4 | Intersection of business strategy, stakeholder needs, AI research, engineering, feasibility | STRONG | Keystone bullets 1, 3, 5 (strategy, discovery, Eng/DS lifecycle); Amazon risk bullet (partnering with Science) |
| 5 | AI strategy for automation, predictive analytics, decision support across coding, billing, denials, collections, revenue optimization | PARTIAL | Automation, predictive, and decision support are strong (agent, credit decisioning, TRACE); the RCM workflows are new. See gap 1 |
| 6 | AI-first and data platform strategies | STRONG | Keystone bullets 1 and 6; MLOps platform |
| 7 | Discovery and prioritization from customer insights, data analysis, AI-driven signals | STRONG | Keystone bullet 3 (interviews + adoption data + prototype acceptance data); bullet 5 (production traces) |
| 8 | Translate LLMs, multimodal, RAG, agentic, predictive, NLP, intelligent automation into products | PARTIAL | All except multimodal. See gap 4 |
| 9 | Partner with Eng, DS, Data Platform: experimentation → evaluation → integration → production readiness → rollout → monitoring → adoption → improvement | STRONG | Keystone bullet 5 follows that sequence |
| 10 | Responsible AI: data governance, HIPAA, explainability, bias mitigation | PARTIAL | Governance, explainability, PII controls, privacy compliance: strong. HIPAA and bias mitigation: none. See gaps 2–3 |
| 11 | Build ROI cases | STRONG | Keystone bullets 3 (prototype data won a 2-month roadmap swap) and 7 (agent unit economics) |
| 12 | Lead executive and client-facing product strategy discussions | STRONG | Bi-weekly results reviews with client and Keystone leadership; CEO/CTO; monthly VP-level reviews at Amazon |
| 13 | Mentor product managers | STRONG | Keystone bullet 7 (dotted-line PMs, 4–5 junior PMs and interns) |
| 14 | Define business models | STRONG | Keystone bullet 2 (consulting → product pivot, tiered subscription pricing, managed-service model) |
| 15 | 10+ years of product management | PARTIAL | Resume shows product roles Oct 2016 – present (~10 yrs) plus 2015 pre-sales. See gap 5 |
| 16 | Complex SaaS or enterprise platforms | STRONG | Keystone platform; Amazon MLOps platform |
| 17 | Deep healthcare experience, preferably RCM or revenue integrity | **NONE** | See gap 1 |
| 18 | Productizing AI/ML, GenAI, agentic, or AI-platform capabilities through scaled adoption | STRONG | Agent; MLOps platform; financing product; adoption 50% → 70% |
| 19 | Modern AI product development, evaluation, human-in-the-loop, production monitoring | STRONG | Keystone bullets 4–5 |
| 20 | AI-first strategies tied to measurable outcomes | STRONG | Keystone bullets 1, 3, 5 (launch gates at >70% recall and acceptance) |
| 21 | Influence senior leaders without formal authority | STRONG | Keystone bullet 2 (leadership and investors); Supply Chain bullet (VP of FBA); privacy policy across Amazon Payments |
| 22 | Strong client communication | STRONG | Bi-weekly client leadership reviews; Fortune 500 rollout |
| 23 | Agile experience | STRONG | Amazon financing bullet (biweekly sprints); Skills |
| 24 | Effectiveness in ambiguity | STRONG | 0→1 pivot; 5% controlled launch with limited information (shown through outcomes, not claimed) |

## Gaps (1 unmatched, 5 partial)

| # | JD Requirement | Gap Type | Suggested Response |
|---|---|---|---|
| 1 | #17 Deep healthcare / RCM (and the healthcare halves of #3 and #5) | No match | Cover letter: "I haven't worked in healthcare. I have spent eight years building AI for high-volume financial decisions where rules, risk, and auditability matter: credit underwriting and fraud controls on Amazon Business, and agentic decision automation for Fortune 500 enterprises at Keystone. RCM's hard problems are the ones I know how to ship against: payer-style rule logic, human reviewers who need evidence before they trust a recommendation, and dollar outcomes you can measure." Referral message: ask the referrer to vouch for how fast you learn a domain (pricing → supply chain → lending → enterprise forecasting). Do the RCM homework before any screen: coding, charge capture, claims, denials, appeals, collections, CDI. A `/work-product` on denials prediction or coding-agent evaluation would show domain effort better than any resume line. |
| 2 | #10 HIPAA | Partial: ML privacy compliance under GDPR/EU-US rules, not HIPAA | Interview: "I haven't worked under HIPAA. I did define how privacy law applied to ML at Amazon Payments: on-demand deletion, data-subject access, and retention-based deletion for model data, with Amazon's privacy bar raisers and Legal. It became platform policy across ~20 teams. I'd bring the same approach to PHI." Don't list HIPAA in Skills. |
| 3 | #10 Bias mitigation | No story on record | The experience library says credit underwriting may have a fair-lending angle [NEEDS DETAIL]. If it's real, tell me what you did and I'll add it. Don't use the K27 forecast-bias story: that's statistical bias in a forecast, not fairness. |
| 4 | #8 Multimodal models | Partial: none for multimodal | Don't claim it. If asked: "My production work is text, structured data, and time series. I'd evaluate multimodal coding inputs (scanned documents, faxes) the way I evaluated agents: reference cases, expert baselines, launch thresholds." |
| 5 | #15 10+ years of PM | Partial | Recruiter math passes on the resume (product roles from Oct 2016, plus 2015 pre-sales). In interviews, say it accurately: "joined Amazon as a program manager, promoted twice, moved into product management along the way." |

---

## Resume

**SHIFIA MITTAL**
Seattle, WA (open to remote) | 206-356-6348 | shifia.mittal09@gmail.com | linkedin.com/in/shifiamittal

**SUMMARY**
Principal technical product manager with 11+ years building AI that ships, scales, and measurably improves high-volume financial and operational decisions. Brings startup-level ownership, having taken an agentic AI decision platform and its business model from 0→1 at Keystone.ai ($5M ARR, $25M annualized client savings), and enterprise impact from eight years at Amazon (ML financing with $71M incremental revenue; an MLOps platform running 100+ production models). Takes AI from prototype to scaled adoption through evaluation, human-in-the-loop design, explainability, data governance, and production monitoring.

**EXPERIENCE**

**Keystone.ai** | Seattle, WA | Jun 2024 – Present
*Principal Product Manager – Technical* (AI startup; enterprise decision platform for Fortune 500 clients; $5M ARR)
- **AI-first product strategy:** Owned vision, strategy, roadmap, and operating model for an agentic AI platform that turns complex enterprise decisions into reusable workflows; scaled to 5 enterprises and $25M in annualized client savings, and cut deployment from 6 to 4 months.
- **Business model & senior influence:** Drove the company's pivot from consulting to a product-led model with the CEO/CTO and set tiered subscription pricing and packaging; persuaded leadership and investors to deploy as a managed service in client environments instead of pure SaaS, trading 1 extra month of deployment for 2 clients with strict data-residency requirements.
- **Discovery & prioritization:** Combined adoption data, user interviews, and workflow observation to find 3 adoption blockers, then sequenced SHAP explainability before agent support to lift forecast adoption from 50% to 70%; prototyped the agent (>70% of recommendations adopted) and used that data to swap 2 months of planned accuracy work for agentic capabilities.
- **Agentic workflow automation:** Launched a multi-agent decision-support system (LangGraph, MCP tools, RAG knowledge layer, risk-tiered autonomy, human approval); 70% of recommendations accepted at launch, reviewer effort fell from 4 hrs/day to 4 hrs/week, and client overstock cost fell from $5M to $2M.
- **AI lifecycle with Engineering & Data Science:** Built evals for correctness, groundedness, retrieval quality, tool compliance, action safety, and regression; ran shadow-mode launch gates, a phased rollout covering 85% of SKUs, and bi-weekly results reviews with client leadership; production traces caught an adoption drop from 70% to 50% at one client, and a new guardrail restored it.
- **Data platform & governance:** Built the multi-tenant data platform (ingestion, validation, lineage, APIs, data contracts) with 7–8 engineers, cutting deployment from 3 months to 3 weeks; added a runtime data catalog with trust and sensitivity tiers (including PII blocking) that cut user clarification requests from 50% to 30%.
- **ROI & PM mentorship:** Cut agent cost ~30% with model routing after pilot costs exceeded manual work, with no loss in quality or adoption; organized product work into 3 lanes with the CPO, led dotted-line PMs, and mentored 4–5 junior PMs and interns.

**Amazon** | Seattle, WA | Oct 2016 – Jun 2024
*Sr. Product Manager – Technical*

*Amazon Business Financing & Credit (2022 – 2024)*
- **ML decisioning at scale:** Launched an ML-based financing product on Amazon Business and scaled it to 50K+ customers, driving $71M in incremental revenue; redesigned underwriting and exposure controls to raise SMB approval from 4% to 15%, with no credit losses after full launch; ran it through OKRs and biweekly sprints, with monthly VP-level reviews.
- **Risk & fraud controls:** Owned how the credit product used a business fraud-score model and set its threshold at 99% precision to protect legitimate customers; partnered with Science on a credit-risk model with SHAP explainability and business-facing documentation, thresholded to maximize economic profit.

*Machine Learning Platform (2020 – 2022)*
- **MLOps platform:** Owned vision and roadmap for a SageMaker-based ML platform used by 30+ scientists to deploy, evaluate, and monitor 100+ production models; cut deployment time 40%, doubled production models with no added headcount, and made monitoring the default for every model.
- **Privacy & compliance by default:** Defined how privacy law applied to ML (on-demand deletion, data-subject access, retention-based deletion) with Amazon privacy bar raisers and Legal; adopted as platform policy across Amazon Payments (~20 teams), saving 5 science FTE per year.

*Supply Chain ML Recommendations (2018 – 2020)*
- **Decision support & influence:** Built ML recommendation and causal-attribution products across thousands of sellers, delivering $100M+ in savings; persuaded the VP of Amazon FBA to let the product recommend inventory placement to sellers; TRACE unified 50+ cost drivers from 14 teams' systems, driving $40M.

**Cognizant Technology Solutions** | Business Analyst | May 2015 – Sep 2016: designed service solutions and pricing for $25M in APAC deals; 30+ deals at a 45% win rate.

**SKILLS**
- **AI & ML:** LLMs, RAG, agentic workflows (LangGraph, MCP), multi-agent systems, predictive models, NLP and semantic search, LLM-as-judge evaluation, human-in-the-loop, production monitoring
- **Responsible AI:** data governance, lineage, privacy compliance, explainability (SHAP), PII controls, audit logs, risk-tiered autonomy
- **Product:** enterprise SaaS platforms, AI-first strategy, business models, pricing, roadmaps, operating models, ROI cases, Agile, executive and client communication
- **Platforms:** AWS (Bedrock, SageMaker, Step Functions, Glue, EMR), Databricks

**EDUCATION**
MBA, Marketing & Operations, IIT Roorkee | B.E., Chemical Engineering, Thapar University

---

## Recruiter Review
- **First impression (6-second scan): PASS on AI and ownership, likely FAIL on healthcare.** The summary's first two lines carry the JD's own phrases ("AI that ships, scales, and measurably improves," "startup-level ownership," "enterprise impact"), backed by numbers. A recruiter checking for healthcare or RCM finds nothing; that goes to a referral.
- **Relevance signal:** Keystone now opens with strategy and then business model, the two things a Principal IC owning the "operating model" is hired for. Before this revision the resume had no business-model or discovery bullet, and influence without authority showed up only by implication.
- **Level:** Reads as a senior IC. One mentorship line covers #13 without signaling a people-manager search.
- **Length risk:** 7 Keystone bullets plus 6 Amazon bullets is the most that fits on one page. If the .docx runs over, cut the Data platform & governance bullet first (#6 is also covered by the MLOps platform bullet), then the Privacy bullet.

## ATS Review
- **Section headers:** Standard (Summary, Experience, Skills, Education). No tables or columns in the resume body.
- **Keyword matches:** startup, enterprise, AI that ships/scales, product strategy, roadmap, operating model, AI-first, data platform, business model, pricing, discovery, prioritization, customer insights, data analysis, LLMs, RAG, agentic workflows, predictive models, NLP, intelligent automation, decision support, experimentation, evaluation, production readiness, rollout, monitoring, adoption, human-in-the-loop, data governance, explainability, responsible AI, ROI, executive, client, mentor, Agile, SaaS
- **Missing exact strings (not claimable):** healthcare, revenue cycle management, RCM, revenue integrity, coding, billing, denials, collections, HIPAA, multimodal, bias mitigation.
- **Dates:** Month/year at the employer level; Amazon sub-areas use years.
- **Formatting risk:** Bold run-in labels and italic sub-headers parse fine in a plain .docx with standard fonts.

## Traceability Audit

| Resume Bullet (first 60 chars) | Source Section | Original Text | Match Type |
|---|---|---|---|
| Summary: Principal technical product manager with 11+ years... | Profile Basics; Organized Experience | 11+ years; Deep Enterprise 0→1; $5M ARR, $25M savings; $71M; 100+ production models; eval/governance themes | REWORDED |
| Keystone parenthetical: "AI startup" | Profile Basics; Career Plan Weakness 2 | LinkedIn headline "Ex-Amazon, Start-ups"; "smaller, consulting-origin company" | REWORDED |
| AI-first product strategy: Owned vision, strategy, roadmap... | Keystone resume bullets; K1 | "Led 0→1 strategy and roadmap for Deep Enterprise… reusable enterprise workflows… 6 months to 4 months, and scaled to 5 enterprises"; "$25M in annualized client savings"; 3 lanes with the CPO (operating model) | REWORDED |
| Business model & senior influence: Drove the company's pivot... | K1; K12; Source Decision 17 | "Aligned the CEO and CTO on a pivot to a product"; "set tier-based subscription pricing and packaging for Deep Enterprise"; "Leadership and investors wanted multi-tenant SaaS… Recommended deploying as a managed service… took 1 month longer, but onboarded 2 additional clients with strict data-residency requirements" | REWORDED |
| Discovery & prioritization: Combined adoption data, user int... | K10; K9; K11 | "Triangulated adoption metrics with planner interviews and workflow observation. Found 3 issues… Sequenced deliberately"; "Forecast adoption 50% → 70%"; "prototyped an agent… (>70% recommendations adopted), then used the data to align leadership on swapping 2 months of planned accuracy work" | REWORDED |
| Agentic workflow automation: Launched a multi-agent decision... | Forecasting Agent; K2; Source Decision 18 | "multi-agent enterprise forecasting system… human approval… 4 hrs/day to 4 hrs/week"; "70% of recommendations accepted at launch; overstock $5M → $2M"; LangGraph + MCP | REWORDED |
| AI lifecycle with Engineering & Data Science: Built evals fo... | AI Evaluation & Governance; K2; K26; K22; K5 | eval dimensions list; "Launched in shadow mode"; "rollout criteria that covered 85% of SKUs in the first phase"; "bi-weekly results reviews with a single client point of contact and leadership on both sides"; "Adoption… fell 70% → 50%… Added… guardrail… back to 70%" | REWORDED |
| Data platform & governance: Built the multi-tenant data plat... | Enterprise Data Platform; K15; K6 | "ingestion, transformation, validation, lineage, APIs, and model-ready contracts; reduced deployment from 3 months to 3 weeks"; "7–8 engineers"; "runtime data catalog… trust tiers, sensitivity tiers incl. PII blocking"; "Clarification rate 50% → 30%" | REWORDED |
| ROI & PM mentorship: Cut agent cost ~30% with model routing ... | K14; Leadership; K20 | "model cost exceeded the cost of doing the work manually… ~30% cost reduction… unchanged quality and adoption"; 3 lanes with the CPO; dotted-line PMs; "Mentored 4–5 people (junior PMs, interns)" | REWORDED |
| ML decisioning at scale: Launched an ML-based financing prod... | Amazon FS; A1; A3; Source Decisions 15–16 | "$71M… 50K+ customers"; "SMB approval 4% → 15%… no credit losses after full launch"; "Ran it with annual OKRs, quarterly milestones, and biweekly sprints"; monthly VP-level updates | REWORDED |
| Risk & fraud controls: Owned how the credit product used a b... | A14 | "Shifia owned how PBI 2.0 used it (integration, threshold…)"; "precision 0.99"; "PM partner to 1 data scientist + science manager… threshold set to maximize economic profit; SHAP and business-facing documentation" | REWORDED |
| MLOps platform: Owned vision and roadmap for a SageMaker-bas... | Amazon ML Ops; A9 | "30+ scientists… 100+ production models"; "reduced model deployment time 40% and doubled production model volume without additional headcount"; "Monitoring went from 30 to all 100 production models by default" | REWORDED |
| Privacy & compliance by default: Defined how privacy law app... | A10; Canonical Metrics | "Defined the requirements for ML with Amazon-wide privacy bar raisers and Legal: OD3, DSAR, programmatic deletion"; "platform policy across Amazon Payments (~20 teams)"; "5 science FTE per year" | REWORDED |
| Decision support & influence: Built ML recommendation and ca... | Supply Chain; A11; Source Decision 19 | "$100M+ cost savings across Amazon and thousands of sellers"; "influenced the VP of Amazon FBA to let SPORT recommend inventory placement decisions to sellers"; "50+ cost factors across 14 systems owned by 14 teams… $40M" | REWORDED |
| Cognizant: designed service solutions and pricing for $25M... | Cognizant; Source Decision 21 | "$25M in the Asia Pacific region"; "30+ infrastructure-setup deals with a 45% win rate" | REWORDED |

**Bullets removed (no source):** 0
**Bullets flagged for verification:** 0

## Revisions Made
**v2 (2026-10-22), against Shifia's 24 requirements**
- **Added a business model bullet (#14, #21):** the consulting → product pivot, tiered subscription pricing, and the managed-service-vs-SaaS call made against leadership and investors. v1 had no business-model evidence at all.
- **Added a discovery and prioritization bullet (#7, #11):** interviews + adoption data + prototype acceptance data, which then won a 2-month roadmap swap. It also carries the 50% → 70% adoption result.
- **Rewrote the eval bullet as an AI lifecycle bullet (#9, #12, #22)** in the JD's order: evaluation → launch gates → phased rollout → client reviews → monitoring → fix.
- **Added influence without authority (#21):** VP of Amazon FBA on the Supply Chain bullet.
- **Summary (#1, #2):** now uses "startup-level ownership" and "AI that ships, scales, and measurably improves," pairing Keystone (startup) with Amazon (enterprise). Added "AI startup" to the Keystone parenthetical.
- **Agile (#23):** "biweekly sprints" moved into the financing bullet instead of only in Skills.
- **Cut to stay on one page:** the credit bureau / personalized marketing / onboarding bullet ($15M, +17% coverage, −50% abandonment). It matched no requirement on your list.
- **Merged** the explainability result into the discovery bullet and the data catalog into the data platform bullet.

**v1 (2026-10-22)**
- Changed "planner effort" to "reviewer effort" so it carries over to coders and billers reviewing AI output.
- Dropped HAT-AI, REI-Agent, MOQ, and Amazon Pricing for space. Keep REI-Agent (auditable calculations on governed financial metrics) ready for interviews as your closest match to revenue integrity.
- Left out HIPAA, healthcare, RCM, multimodal, and bias mitigation; no evidence for them.
- Used canonical metrics: 70% acceptance, cumulative 50% → 20% override (not shown in v2), 5 science FTE/year for privacy. The Rose International resume's "10 privacy bar raisers" and "6 science headcount" don't match the current library and aren't used here.
- No client names (Source Decision 12).
