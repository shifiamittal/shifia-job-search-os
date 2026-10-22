# Resume Output - R37 AI Lab (R1 RCM / Phare Health) · Principal Product Manager
**Keyword Coverage: 88% (14/16 requirements matched: 10 strong, 4 partial, 2 unmatched)**

Source: `R37_Principal_Product_Manager_JD_1.pdf` (uploaded 2026-10-22). US, remote, full time. Senior IC role. No salary in the JD. This JD has no "preferred" section, so REQUIRED/PREFERRED labels are inferred: the Qualifications list is REQUIRED, and the "What You'll Do" items are REQUIRED where the JD repeats them and PREFERRED otherwise.

No earlier R37 resume is saved in this repo, so this version starts over from `experience-library.md`.

## Before you send

1. **Healthcare is the real screen-out risk.** "Deep healthcare experience, preferably revenue cycle management" is a stated qualification, and you have none on record. The resume can't close this gap. Only a referral and the cover letter can. Get a referral at R1 or Phare before you apply (`/build-referral-graph` for R1 RCM).
2. **Domain mismatch rule applied.** Every bullet leads with a skill that transfers to RCM (decision automation, human review, auditability, governed financial metrics, privacy). Supply-chain and lending details come second. Clients are not named.
3. **Keystone dates.** Shown as "Jun 2024 – Present" (your choice). Never say you're currently at Keystone; use the restructuring script in `qa-master.md`.
4. **Comp unknown.** Ask for the full package (base + bonus + equity) at the recruiter screen. Your floor is $380–400K total comp.

## Gaps (2 unmatched, 4 partial)

| # | JD Requirement | Gap Type | Suggested Response |
|---|---|---|---|
| 1 | Deep healthcare experience, preferably RCM or revenue integrity (REQUIRED) | No match | Cover letter: "I haven't worked in healthcare. I have spent eight years building AI for high-volume financial decisions where rules, risk, and auditability matter: credit underwriting and fraud controls on Amazon Business, and agentic decision automation for Fortune 500 enterprises at Keystone. RCM's hard problems are the ones I know how to ship against: payer-style rule logic, human reviewers who need evidence before they trust a recommendation, and dollar outcomes you can measure." Referral message: ask the referrer to vouch for how fast you learn a domain (you went from pricing to supply chain to lending to enterprise forecasting). Do the RCM homework before any screen: coding, charge capture, claims, denials, appeals, collections, CDI. |
| 2 | Domain mismatch: 0% of experience is in healthcare; it's in supply chain, lending/fintech, and enterprise AI | Domain-locked rule | Mitigate by (1) leading each bullet with the transferable skill, (2) cover letter framing the outside view as an advantage (production AI discipline from regulated lending), (3) a referral who can speak to adaptability. A `/work-product` on denials prediction or coding-agent evaluation would show domain effort better than any resume line. |
| 3 | HIPAA compliance (in responsible AI duties) | Partial: privacy compliance for ML, but GDPR/EU-US privacy, not HIPAA | Interview: "I haven't worked under HIPAA. I did define how privacy law applied to ML at Amazon Payments: on-demand deletion, data-subject access, and retention-based deletion for model data, with Amazon's privacy bar raisers and Legal. It became platform policy across ~20 teams. I'd bring the same approach to PHI." Don't list HIPAA in Skills. |
| 4 | Bias mitigation (in responsible AI duties) | No match: no story on record | The experience library says the credit-underwriting work may have a fair-lending angle [NEEDS DETAIL]. If it's real, tell me what you did and I'll add it. Don't use the K27 forecast-bias story here: that's statistical bias in a forecast, not fairness. |
| 5 | 10+ years of PM experience with complex SaaS or enterprise platforms (REQUIRED) | Partial | The resume shows product roles from Oct 2016 (about 10 years) plus Cognizant pre-sales from 2015, so the recruiter math passes. In interviews, describe it accurately: "joined Amazon as a program manager, promoted twice, moved into product management along the way." |
| 6 | Translate multimodal models into products (PREFERRED) | Partial: LLMs, RAG, agentic, predictive, and NLP are strong; multimodal is none | Don't claim multimodal. If asked: "My production work is text, structured data, and time series. I'd evaluate multimodal coding inputs (scanned documents, faxes) the same way I evaluated agents: reference cases, expert baselines, launch thresholds." |
| 7 | AI strategy across coding, billing, denials, collections, revenue optimization (REQUIRED) | Partial: decision support, predictive analytics, and intelligent automation are strong; the RCM workflows are new | Covered by row 1. Closest real analogs: rules-heavy financial decisioning (credit eligibility, fraud thresholds, exposure caps) and REI-Agent's governed metrics with auditable calculations. |

Coverage note: this JD has 16 extracted requirements, above average. 88% on a JD this broad would normally read as strong fit, but one of the two misses (healthcare) is the qualification a recruiter screens on first. Read the score with that in mind.

---

## Resume

**SHIFIA MITTAL**
Seattle, WA (open to remote) | 206-356-6348 | shifia.mittal09@gmail.com | linkedin.com/in/shifiamittal

**SUMMARY**
Principal technical product manager with 11+ years building enterprise AI and ML products that automate high-volume financial and operational decisions. Took an agentic AI decision platform from 0→1 for Fortune 500 clients ($5M ARR, $25M annualized client savings) and spent eight years at Amazon shipping ML financing, credit-risk, and MLOps platform products ($71M incremental revenue, 100+ production models). Specializes in taking AI from prototype to scaled adoption: evaluation, human-in-the-loop design, explainability, data governance, and production monitoring.

**EXPERIENCE**

**Keystone.ai** | Seattle, WA | Jun 2024 – Present
*Principal Product Manager – Technical* (enterprise AI decision platform for Fortune 500 clients; $5M ARR)
- **AI product strategy & operating model:** Owned vision, strategy, and roadmap for an agentic AI platform that turns complex enterprise decisions into reusable workflows; aligned the CEO/CTO on the company's pivot from consulting to a product-led model; scaled to 5 enterprises, $25M in annualized client savings, and cut deployment from 6 to 4 months.
- **Agentic workflow automation:** Launched a multi-agent decision-support system (LangGraph, MCP tools, RAG knowledge layer, risk-tiered autonomy, human approval) through shadow-mode launch gates; 70% of recommendations accepted at launch, reviewer effort fell from 4 hrs/day to 4 hrs/week, and client overstock cost dropped from $5M to $2M.
- **AI evaluation & production monitoring:** Built evaluation frameworks for task correctness, groundedness, retrieval quality, tool compliance, action safety, and regression, combining automated checks, LLM-as-judge, and expert review; production traces caught an adoption drop from 70% to 50% at one client, and a "sufficient information" guardrail restored it to 70%.
- **Explainability & data governance:** Lifted forecast adoption from 50% to 70% with SHAP explainability and plain-language driver narratives, then agent support; built a runtime data catalog with trust and sensitivity tiers (including PII blocking) that cut user clarification requests from 50% to 30%; contributed to a cumulative override-rate drop from 50% to 20%.
- **Data platform strategy:** Built the multi-tenant enterprise data platform (ingestion, validation, lineage, APIs, model-ready data contracts) with 7–8 engineers; cut platform deployment from 3 months to 3 weeks and client onboarding from 2 months to 2 weeks.
- **ROI & PM leadership:** Cut agent cost ~30% with model routing after pilot costs exceeded manual work, with no loss in quality or adoption; organized product work into 3 lanes with the CPO, led dotted-line PMs, and mentored 4–5 junior PMs and interns.

**Amazon** | Seattle, WA | Oct 2016 – Jun 2024
*Sr. Product Manager – Technical*

*Amazon Business Financing & Credit (2022 – 2024)*
- **ML decisioning at scale:** Launched an ML-based financing product on Amazon Business and scaled it to 50K+ customers, driving $71M in incremental revenue; redesigned underwriting and exposure controls to raise SMB approval from 4% to 15%, with no credit losses after full launch; reported monthly to VP-level leadership against an S-team goal.
- **Risk & fraud controls:** Owned how the credit product used a business fraud-score model and set its threshold at 99% precision to protect legitimate customers; partnered with Science on a credit-risk model with SHAP explainability and business-facing documentation, thresholded to maximize economic profit.
- **Data integrations & growth:** Scaled a global credit product through credit bureau integrations (+17% data coverage, +7% approval lift), ML-personalized marketing ($15M incremental revenue), and an onboarding redesign that cut abandonment 50%.

*Machine Learning Platform (2020 – 2022)*
- **MLOps platform:** Owned vision and roadmap for a SageMaker-based ML platform used by 30+ scientists to deploy, evaluate, and monitor 100+ production models; cut deployment time 40%, doubled production models with no added headcount, and made monitoring the default for all models.
- **Privacy & compliance by default:** Defined how privacy law applied to ML (on-demand deletion, data-subject access, retention-based deletion) with Amazon privacy bar raisers and Legal; adopted as platform policy across Amazon Payments (~20 teams), saving 5 science FTE per year.

*Supply Chain ML Recommendations (2018 – 2020)*
- **Decision support:** Built ML recommendation and causal-attribution products for inventory, pricing, and shipping decisions across thousands of sellers, delivering $100M+ in savings; TRACE unified 50+ cost drivers from 14 systems into actionable recommendations, driving $40M.

**Cognizant Technology Solutions** | Business Analyst | May 2015 – Sep 2016: designed service solutions and pricing for $25M in APAC deals; 30+ deals at a 45% win rate.

**SKILLS**
- **AI & ML:** LLMs, RAG, agentic workflows (LangGraph, MCP), multi-agent systems, predictive models, NLP and semantic search, LLM-as-judge evaluation, human-in-the-loop, production monitoring
- **Responsible AI:** data governance, lineage, privacy compliance, explainability (SHAP), PII controls, audit logs, risk-tiered autonomy
- **Product:** enterprise SaaS platforms, AI-first strategy, roadmaps, operating models, ROI cases, business/model/adoption metrics, Agile, executive and client communication
- **Platforms:** AWS (Bedrock, SageMaker, Step Functions, Glue, EMR), Databricks

**EDUCATION**
MBA, Marketing & Operations, IIT Roorkee | B.E., Chemical Engineering, Thapar University

---

## Recruiter Review
- **First impression (6-second scan): PASS on AI, likely FAIL on healthcare.** The top third shows enterprise AI, agentic workflows, evaluation, and governance, which are the core of this JD. A recruiter checking for healthcare or RCM finds nothing. No wording fixes that, so it's flagged above and routed to a referral.
- **Relevance signal:** The summary covers "enterprise AI," "financial decisions," "human-in-the-loop," "explainability," "data governance," and "production monitoring" in three lines. "Financial and operational decisions" connects your lending and supply-chain work to revenue cycle.
- **Level:** Reads as a senior IC. One leadership line (dotted-line PMs, mentoring) covers "mentor product managers" without signaling a people-manager search.
- **Readability:** About one page. Bold skill labels on each bullet let a reader scan the left edge for JD terms.

## ATS Review
- **Section headers:** Standard (Summary, Experience, Skills, Education). No tables or columns in the resume body.
- **Keyword matches:** product strategy, roadmap, operating model, enterprise, SaaS, platform, AI-first, data platform, discovery, customer insights, data analysis, LLMs, RAG, agentic workflows, predictive models, NLP, intelligent automation, decision support, evaluation, human-in-the-loop, production monitoring, workflow, rollout, adoption, data governance, explainability, responsible AI, metrics, ROI, executive, client, mentor, Agile
- **Missing exact strings (not claimable):** healthcare, revenue cycle management, RCM, revenue integrity, medical coding, billing, denials, collections, HIPAA, multimodal, bias mitigation. Adding any of these without evidence would be fabrication.
- **Dates:** Month/year at the employer level; Amazon sub-areas use years.
- **Formatting risk:** Bold run-in labels and italic sub-headers parse fine in a plain .docx with standard fonts.

## Traceability Audit

| Resume Bullet (first 60 chars) | Source Section | Original Text | Match Type |
|---|---|---|---|
| Summary: Principal technical product manager with 11+ years... | Profile Basics; Organized Experience | 11+ years; Deep Enterprise; $5M ARR, $25M savings; $71M; 100+ production models; eval/governance themes | REWORDED |
| AI product strategy & operating model: Owned vision, strateg... | Keystone resume bullets; K1; Canonical Metrics | "Led 0→1 strategy and roadmap for Deep Enterprise… reusable enterprise workflows… 6 months to 4 months, and scaled to 5 enterprises"; "drove Keystone's pivot from consulting to a product-led model, $25M in annualized client savings"; "Aligned the CEO and CTO on a pivot" | REWORDED |
| Agentic workflow automation: Launched a multi-agent decision... | Forecasting Agent; K2; Source Decision 18 | "multi-agent enterprise forecasting system… human approval… 4 hrs/day to 4 hrs/week"; shadow mode; "70% of recommendations accepted at launch; overstock $5M → $2M"; LangGraph + MCP confirmed 2026-10-21 | REWORDED |
| AI evaluation & production monitoring: Built evaluation fram... | AI Evaluation & Governance; K4; K5 | "evaluation frameworks covering task correctness, groundedness, retrieval quality, tool compliance, action safety, and regression testing"; "LLM-as-judge… expert rubric scoring"; "Adoption at one retailer fell 70% → 50%… 'act only with sufficient information' guardrail… back to 70%" | REWORDED |
| Explainability & data governance: Lifted forecast adoption f... | K9; K10; K6; Canonical Metrics | "SHAP feature explainability… plain-language narratives"; "Forecast adoption 50% → 70% (explainability 50 → 60, agent 60 → 70)"; "runtime data catalog… trust tiers, sensitivity tiers incl. PII blocking"; "Clarification rate 50% → 30%"; override 50% → 20% cumulative | REWORDED |
| Data platform strategy: Built the multi-tenant enterprise da... | Enterprise Data Platform; K15; Canonical Metrics | "ingestion, transformation, validation, lineage, APIs, and model-ready contracts; reduced deployment from 3 months to 3 weeks"; "Onboarding 2 months → 2 weeks"; "7–8 engineers" | REWORDED |
| ROI & PM leadership: Cut agent cost ~30% with model routing ... | K14; Leadership; K20 | "model cost exceeded the cost of doing the work manually… ~30% cost reduction… unchanged quality and adoption"; "Organized Keystone's product org into 3 lanes… with the CPO"; dotted-line PMs; "Mentored 4–5 people (junior PMs, interns)" | REWORDED |
| ML decisioning at scale: Launched an ML-based financing prod... | Amazon FS; A3; Source Decisions 15–16 | "Launched an ML-based financing product… 50K+ customers, driving $71M"; "Redesigned underwriting… Capped exposure by risk tier… SMB approval 4% → 15%… no credit losses after full launch"; monthly VP-level updates, S-team goal | REWORDED |
| Risk & fraud controls: Owned how the credit product used a b... | A14 | "Shifia owned how PBI 2.0 used it (integration, threshold…)"; "precision 0.99… to minimize false positives"; "PM partner to 1 data scientist + science manager… threshold set to maximize economic profit; SHAP and business-facing documentation" | REWORDED |
| Data integrations & growth: Scaled a global credit product t... | Amazon FS | "credit bureau integrations (+17% data coverage, +7% approval lift)… ML-personalized marketing ($15M)… onboarding CX redesign (50% reduction in abandonment)" | REWORDED |
| MLOps platform: Owned vision and roadmap for a SageMaker-bas... | Amazon ML Ops; A9 | "30+ scientists… 100+ production models"; "reduced model deployment time 40% and doubled production model volume without additional headcount"; "Monitoring went from 30 to all 100 production models by default" | REWORDED |
| Privacy & compliance by default: Defined how privacy law app... | A10; Canonical Metrics | "Defined the requirements for ML with Amazon-wide privacy bar raisers and Legal: on-demand deletion (OD3), returning customer data (DSAR), and programmatic deletion…"; "standard platform policy across Amazon Payments (~20 teams)"; "5 science FTE per year" | REWORDED |
| Decision support: Built ML recommendation and causal-attribu... | Supply Chain; A11 | "Built and scaled ML recommendation and causal attribution products… $100M+ cost savings"; "50+ shipping-cost drivers… $40M"; "50+ cost factors across 14 systems" | REWORDED |
| Cognizant: designed service solutions and pricing for $25M... | Cognizant; Source Decision 21 | "design infrastructure service solutions and pricing for deals worth $25M in the Asia Pacific region"; "30+ infrastructure-setup deals with a 45% win rate" | REWORDED |

**Bullets removed (no source):** 0
**Bullets flagged for verification:** 0

## Revisions Made
- **Recruiter review:** Changed "planner effort" to "reviewer effort" on the agent bullet. It's the same fact, but "reviewer" carries over to coders and billers reviewing AI output. The domain context stays in the evaluation bullet.
- **Recruiter review:** Dropped HAT-AI, REI-Agent, the MOQ bullet, and Amazon Pricing to keep one page. REI-Agent's "auditable calculations over governed financial metrics" is the closest thing you have to revenue integrity; keep it ready for the interview.
- **ATS review:** Mirrored JD strings: "operating model," "AI-first," "data platform," "agentic workflows," "predictive models," "intelligent automation," "decision support," "human-in-the-loop," "production monitoring," "ROI," "Agile."
- **ATS review:** Left out HIPAA, healthcare, RCM, multimodal, and bias mitigation; there's no evidence for them.
- **Accuracy:** Used the 70% acceptance figure (canonical), the cumulative 50% → 20% override figure labeled "contributed to," and 5 science FTE/year for the privacy work (not the 6 HC MDLC total). The Rose International resume cites "10 privacy bar raisers" and "6 science headcount" on its privacy bullet; neither matches the current library, so this version doesn't use them.
- **Clients:** No client names (Source Decision 12).
