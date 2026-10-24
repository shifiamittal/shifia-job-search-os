# Resume Output - Stripe · Product Manager, Radar – Fraud and Abuse Prevention
**Keyword Coverage: 100% (23/23 requirements matched: 16 strong, 7 partial, 0 unmatched)**
**ATS keyword coverage: 36/40 JD terms (90%)** in bullet text; there is no Skills section.

Files: `resumes/Shifia_Mittal_Resume_Stripe_Radar_Fraud.docx` (master) and `.pdf` (one page, rendered and checked).
Job: https://stripe.com/careers/listing/product-manager-radar-fraud-and-abuse-prevention/8306158 (job 8306158)
Built from: `resumes/Shifia_Mittal_Resume_R37.docx` (style-guide master), your 23-item requirement list, and your intake answers of 2026-10-24 (recorded in `experience-library.md`: A18, the A4 detail, PBI manual review, K33, the S1 repo).
Prep for the call: `interview-prep/2026-10-24-stripe-radar-recruiter-screen.md`.

## Before you send

1. **Partial claim on #1 and #4.** You have no story of investigating a specific fraud or abuse attack. The resume doesn't claim one. Instead, it shows the same skill on production problems: K5 (tracing an adoption drop to its cause) and K6 (judging a failure as one that would repeat at every client and building the platform fix). Expect the hiring manager to ask "tell me about a fraud pattern you investigated." Section 5 of the prep file has the gap list.
2. **Be ready to explain the 99% precision bullet.** Say "the fraud team built the model; I owned how our product used it," and know why a 25% recall was acceptable (layered controls). The resume says "owned the credit fraud controls," which matches A18.
3. **Re-application.** Stripe turned you down after the first screening in ~2024. This version adds evidence that is new since then and that answers their feedback (more examples with external users): Keystone pricing with ACV upgrades (K32), production agents (K2, K3, K5), SQL data analysis (K33), and external developer APIs (A15). External users now lead most bullets: business customers, sellers, outside developers and enterprise clients.
4. **The two Stripe resumes.** Once the Radar (integrations) resume exists, both will share most bullets with different emphasis. The hiring managers may compare notes, so the numbers must match exactly.

## Requirement Map (your 23 items)

| # | Requirement | Match | Proof on the resume |
|---|---|---|---|
| 1 | Work with customers on new fraud and abuse attacks → strategy and roadmap | PARTIAL | Customer discovery → roadmap (Keystone 4); fraud controls (Amazon F2). No investigation of an attack with customers |
| 2 | Work across customers, engineering, data science, design and commercial teams | STRONG | Keystone 1 (30+ engineers and data scientists, CEO/CTO), Keystone 2 (Sales, Finance, CEO). Design is not named anywhere |
| 3 | Detection and control capabilities, plus user and developer experiences | STRONG | Amazon F2 (detection threshold, controls), F3 (checkout decision APIs), Keystone 8 (API catalog, dashboards) |
| 4 | Investigate emerging attacks; judge impact; one-off vs. broadly useful defense | PARTIAL | Keystone 6 (traced a drop to its cause), Keystone 7 (platform fix for every client, not a one-client patch). Not fraud attacks |
| 5 | Findings → strategy and roadmap, prioritized by impact | STRONG | Keystone 1 and 4 (prioritized fixes); MLOps roadmap |
| 6 | Explore signals with Eng/DS/Design; turn defenses into scalable, reliable products | STRONG | Keystone 3 (agent with eval gates), Keystone 7 (platform fix), Amazon F2 (layered fraud controls) |
| 7 | Scope thoughtfully, prioritize ruthlessly, execute with rigor | STRONG | Amazon F1 (5% controlled launch), F3 (kept ML inference out of checkout), Keystone 3 (shadow-mode gates) |
| 8 | Work with sales, marketing and customer-facing teams on demand, launches, adoption | PARTIAL | Sales (Keystone 2), launches (F1), adoption (Keystone 4, Supply Chain 1). Marketing isn't shown |
| 9 | Own performance, UX and business metrics; communicate progress | STRONG | Metrics on every bullet; monthly VP-level reviews (F1) |
| 10 | 8+ years PM | STRONG | Amazon 2016–2024 + Keystone 2024–2026 |
| 11 | Analytical; SQL; metrics tied to user outcomes | STRONG | Keystone 5 (data analysis in SQL on Athena); adoption and acceptance metrics |
| 12 | 0→1, test quickly, learn from users, scale | STRONG | Keystone 1 (0→1), Keystone 3 (shadow mode), F1 (5% launch → 50K+) |
| 13 | Commercial acumen, willingness to pay | STRONG | Keystone 2 (+~$500K ACV upgrades), Keystone 1 ($7.5M ARR) |
| 14 | B2B sales partnership on discovery, positioning, adoption | PARTIAL | Pricing and packaging with Sales (Keystone 2); Cognizant pre-sales. "Positioning" isn't shown |
| 15 | Dashboard and API products; empathy for end users and developers | STRONG | Keystone 8 (API catalog, dashboards), F3 (versioned APIs), Supply Chain 1 (APIs for outside developers) |
| 16 | Ambiguity; decide with incomplete information | STRONG (shown, not stated) | F1 controlled launch; F3 batch vs. real-time call; Keystone 6 |
| 17 | Technical fluency with complex systems | STRONG | Keystone 3 (LLMs, RAG, LangGraph, MCP), F3 (checkout architecture), MLOps |
| 18 | Written and verbal communication | PARTIAL | Shown indirectly (VP-level reviews, API catalog and release communication). Prove it in the take-home |
| 19 | Ownership and a high quality bar | STRONG | Keystone 6 (production fix), Keystone 3 (eval gates) |
| 20 | Fraud, risk, security or ML products | STRONG | Summary; F2, F4; MLOps for risk and credit scientists |
| 21 | ML: detection effectiveness vs. customer friction | STRONG | F2 (99% precision to limit customer friction for legitimate businesses) |
| 22 | Tools for fraud analysts or risk teams; developer products for real-time decisions | PARTIAL | F3 (real-time checkout decision API for internal developers); MLOps for risk scientists. No analyst console |
| 23 | SWE / DS / technical background | PARTIAL | SQL (Keystone 5); github.com link in the header (pm-job-search-agent repo). No SWE or DS title |

This is a broad JD (23 requirements). 100% coverage with 16 strong items is a strong fit. Counting strong matches only, coverage is 70%.

## Gaps (0 unmatched, 7 partial)

| # | JD Requirement | Gap Type | Suggested Response |
|---|---|---|---|
| 1, 4 | Investigating fraud and abuse attacks with customers | Partial. You did investigate fraud attacks with BFS (A19, 2026-10-24), but the details aren't on record yet; tracked in app-tracker Needs Attention. Until then: | Referral or hiring-manager line: "I haven't run a fraud investigation desk. I've owned fraud controls on a credit product, and I investigate production failures the same way: traces to the root cause, then a decision on whether it's a one-off or a pattern worth a platform fix. At Keystone.ai, a confident wrong recommendation traced back to a client's warehouse move, and the fix became a rule for every client: escalate instead of acting on missing data." |
| 22 | Fraud-analyst tooling | Partial | "Credit Strategy Operations ran manual review for us. My part was the real-time checkout decision and the controls that set what reached them." Only say "what reached them" if you shaped the routing; library item [CONFIRM] |
| 23 | SWE/DS background | Partial | Point to the hands-on builds and the repo. Don't name the stack until it's recorded in the library |
| 8, 14 | Marketing; positioning | Partial | If true, add a line to the library about launch marketing or positioning work on PBI 2.0 or Keystone. The global consumer credit product's $15M ML-personalized marketing is real, but it's a different product; use it only if asked |
| 18 | Writing | Partial | The take-home is the proof. Stripe's 2024 feedback was about stating goals first |

## Recruiter Review (sub-agents/recruiter-reviewer.md)

### 6-Second Scan Results
- Name, then the summary: "credit and fraud-risk products at Amazon ($71M revenue, 50K+ customers)" appears in line 2 of the summary.
- Top-left quadrant: Keystone.ai, enterprise AI. Fraud first shows up in an experience bullet about halfway down the page.

### Scores
| Dimension | Score | Notes |
|---|---|---|
| First Impression | 8/10 | Principal title, 11+ years, $7.5M ARR and $71M in the first two lines |
| Relevance to JD | 7/10 | Fraud is in the summary, but the top third is enterprise supply-chain AI; the fraud bullets sit in Amazon's first role |
| Readability | 7/10 | 18 dense bullets; bold results help scanning |
| **Overall** | **7.5/10** | |

### Issues Flagged
- Fraud evidence sits below the fold for a fraud role. Not changed: the style guide sets reverse-chronological order with Keystone first. Option: if you want fraud at the top, move the Amazon Financing & Credit block above Keystone with a "Selected experience" label. That breaks the style guide, so it's your call.
- ~~"SPORT" is an internal Amazon name a Stripe recruiter won't know.~~ Fixed 2026-10-24: now "inventory-recommendation APIs."

### Verdict
Pass to the hiring manager. The recruiter already reached out, so the resume mainly needs to survive a hiring-manager read.

## ATS Review (sub-agents/ats-checker.md)
- **Format:** no tables, text boxes, headers or footers; single column; standard bullets. PASS.
- **Section headers:** SUMMARY, EXPERIENCE, EDUCATION (standard).
- **Links:** mailto:shifia.mittal09@gmail.com, https://www.linkedin.com/in/shifiamittal, https://github.com/shifiamittal (all resolve; no `file:///` paths).
- **Dates:** years only, on the same line as titles via a right tab stop.
- **Keyword matches (bullets):** fraud ×4, risk, ML, customer, product strategy, roadmap, engineers, data scientists, Sales, detection, controls, dashboards, APIs, developers, signal, scale, prioritized, metrics/adoption, SQL, data analysis, 0→1, pricing, ARR/ACV, businesses, threshold, precision, customer friction, real time, launch, experimentation, discovery.
- **Missing keywords:** abuse, reliable, positioning, ambiguity. None of these has a claim on record that I can word honestly, so I didn't add them.
- **Overall ATS Score: PASS WITH WARNINGS** (the 4 terms above)

## Hiring Manager Review (sub-agents/hiring-manager-reviewer.md), read as a Radar PM lead

| Dimension | Score | Key Factor |
|---|---|---|
| Specificity | 9/10 | Every bullet has a mechanism and a number; the fraud bullet names the threshold and the layered controls |
| Product Sense | 8/10 | Detection vs. friction, batch vs. real time, and only automating reversible actions are all real product calls |
| Unique Insight | 7/10 | The agent-trust work plus fraud thresholds is an unusual combination; no fraud-attack story |
| Actionability | 8/10 | Clear what she'd bring: ML risk decisions, APIs, pricing |
| **Overall** | **8/10** | |

**The meeting test:** yes, take the call. The first question will be about the 99% precision bullet: "why 25% recall, and what caught the rest?"
**What they'd probe:**
1. Who built the fraud model? (Answer: the fraud team; you owned the product's use of it.)
2. "+~$500K ACV each": how were the deals structured?
3. "Adoption rose 1% to ~10%": how much was the APIs alone? (Answer: combined with wider coverage and the Seller Central entry point; the bullet already says so.)
4. A fraud attack you investigated (gap #1/#4).

**AI-sounding content flagged:** none. Plain verbs, no buzzwords.

## Traceability Audit

| Resume Bullet (first 60 chars) | Source Section | Original Text (short) | Match Type |
|---|---|---|---|
| Summary: Principal product manager with 11+ years shipping AI… | Profile Basics; Canonical Metrics; A18 | 11+ yrs; $7.5M ARR; $71M; 50K+; fraud controls | REWORDED |
| Led 0→1 product strategy and roadmap for an enterprise AI dec… | K1; Source Decision 24; Keystone resume bullets | Pivot; 30+ engineers and scientists; $7.5M ARR; $25M savings; 5 enterprises | REWORDED |
| Set value-based modular pricing and packaging with Sales, Fin… | K32 | Modules; usage- and savings-based pricing rejected; two clients upgraded +~$500K ACV each | REWORDED |
| Launched a multi-agent system (LLMs, RAG, LangGraph, MCP) tha… | K2, K3, K4; Source Decision 18 | Exception triage, RCA, tiered autonomy, shadow mode; 70% acceptance; 4 hrs/day → 4 hrs/week | REWORDED |
| Ran customer discovery (planner interviews, workflow observat… | K10, K9 | 3 issues found; explainability before agent; adoption 50% → 70% | REWORDED |
| Led data analysis in SQL (Athena), validating grain, keys, jo… | K33; Canonical Metrics | SQL in Athena; grain, keys, join cardinality; data contracts; deployment 3 months → 3 weeks | REWORDED |
| Diagnosed a drop in agent adoption at one client (70% to 50%… | K5 | Adoption 70% → 50% over 4 weekly cycles; warehouse move; escalation guardrail; back to 70% | REWORDED |
| Traced repeated assistant errors to undescribed data fields (… | K6 | >60% of failures from undescribed fields; catalog + semantic layer; clarification rate 50% → 30% | REWORDED |
| Owned the data platform's API catalog (schemas, auth, integra… | K29 | API catalog, release communication; 5 new clients' dashboards with no extra effort | REWORDED |
| Launched Amazon Business' ML financing product via experiment… | A1, A7; Source Decision 16 | 5% launch; VP-level reviews; S-team goal; 50K+; $71M | REWORDED |
| Owned the credit fraud controls with the fraud and Buyer Risk… | A18, A14 | BFS and BRP teams; ~99% precision; blocklist; post-checkout; exposure limits | REWORDED |
| Designed the checkout credit decision: versioned APIs answere… | A4 detail, A4, A14 | Live API on batch assessments; no real-time inference; versioned APIs; impact 3 months earlier | REWORDED |
| Rebuilt SMB underwriting on Amazon behavioral data where thin… | A3, Source Decision 23 | Thin files; behavioral data; exposure capped by risk tier; 4% → 15%; no losses after full launch | REWORDED |
| Owned vision and roadmap for a SageMaker-based MLOps platform… | A8, A9; Amazon MLOps bullets | 30+ scientists in lending (risk models); governance; monitoring by default; −40%; 100+ models | REWORDED |
| Specced inventory-recommendation APIs on Amazon's Selling Pa… | A15 | Spec for SPORT APIs; outside developers and partner services; 1% → ~10% combined with other work | REWORDED |
| Launched ML recommendation and causal decision support produc… | A11; Supply Chain bullets | 50+ drivers, 14 teams; $100M+ combined; $40M TRACE | REWORDED |
| Launched self-service price-perception insight tools benchmar… | Amazon Pricing | 800+ retailers, 17 countries; 40+ pricing leaders; signals fed pricing models | REWORDED |
| Cognizant: Designed solutions and pricing for 30+ APAC deals… | Cognizant; Source Decision 21 | $25M; 30+ deals; 45% win rate | EXACT |

**Bullets removed (no source):** 0
**Bullets flagged for verification:** 0 INFERRED. Two wording choices to check:
- ~~MLOps "for 30+ risk and credit data scientists"~~: wording confirmed by user 2026-10-24.
- ~~Supply Chain "adoption rose 1% to ~10%"~~: confirmed by user 2026-10-24 (~10% was the level reached).

## Revisions Made
- Summary trimmed to 2 rendered lines (dropped "for Fortune 500 enterprises").
- Fixed 1–3-word last lines on six bullets (fraud, MLOps, SPORT, SQL, and two from earlier drafts).
- Bolded whole results, not bare numbers (style guide). Unbolded the adoption drop (70% → 50%), since it's not a result.
- ATS: added "detection," "customer friction," "data analysis," "prioritized" and "engineers" using wording the library supports.
- Formatting: cleared justified alignment on two Supply Chain bullets and a stray left indent on the Supply Chain title (both inherited from the master).
- Renamed "SPORT APIs" to "inventory-recommendation APIs" (your request, 2026-10-24) and dropped the repeated "inventory" so the line still wraps cleanly.
- **Not changed:** order of sections (style guide); abuse, reliable, positioning and ambiguity (no claim on record to support them).

## Text copy (generated from the .docx)

```
SHIFIA MITTAL
shifia.mittal09@gmail.com | 206-356-6348 | Seattle, WA, USA | linkedin.com/in/shifiamittal | github.com/shifiamittal
SUMMARY
Principal product manager with 11+ years shipping AI/ML products at scale: an agentic AI platform in Keystone's AI startup division ($7.5M ARR) and ML credit and fraud-risk products at Amazon ($71M revenue, 50K+ customers), aligning C-suite leaders.
EXPERIENCE                                                                    2015 - Present (11 years)
Keystone.ai | AI division of Keystone, a 20+ year tech and economics advisory firm ($100M PE-backed)
Principal Product Manager-Technical                                                     2024 - Present
• Led 0→1 product strategy and roadmap for an enterprise AI decision platform (ML forecasting and agentic workflows), aligning the CEO and CTO to pivot from consulting to a product-led model and directing 30+ engineers and data scientists; reached $7.5M ARR and $25M in annualized client savings across 5 Fortune 500 clients.
• Set value-based modular pricing and packaging with Sales, Finance, and the CEO (forecasting, then agents as an add-on), rejecting usage- and savings-based pricing; 2 clients upgraded to agents (+~$500K ACV each).
• Launched a multi-agent system (LLMs, RAG, LangGraph, MCP) that triages exceptions and diagnoses root causes, automating only low-risk, reversible actions and routing the rest to human review with evidence; cleared shadow-mode eval gates, reaching 70% recommendation acceptance and cutting planner effort 4 hrs/day to 4 hrs/week.
• Ran customer discovery (planner interviews, workflow observation, adoption data) to find the top 3 adoption blockers, then prioritized fixes, shipping SHAP explainability before agents; lifted forecast adoption from 50% to 70%.
• Led data analysis in SQL (Athena), validating grain, keys, join cardinality, and data quality in orders, shipments, and trade-promotion data, turning findings into data contracts for the data platform; cut deployment from 3 months to 3 weeks.
• Diagnosed a drop in agent adoption at one client (70% to 50% over 4 weekly cycles) through traces to a missing location signal, then added the data and a guardrail to escalate rather than act on incomplete data; restored adoption to 70%.
• Traced repeated assistant errors to undescribed data fields (>60% of diagnostic failures), not the model, and built a data catalog and semantic layer as a platform fix for every client; cut repeat questions from 50% to 30%.
• Owned the data platform's API catalog (schemas, auth, integration examples) and release communication for app developers and data scientists; the app team built dashboards for 5 new clients with no extra effort.
Amazon                                                                            2016 - 2024 (8 years)
Sr. Product Manager-Technical, Amazon Business Financing & Credit                           2022 - 2024
• Launched Amazon Business' ML financing product via experimentation, a 5% controlled launch, and monthly VP-level reviews against an S-team goal; scaled to 50K+ customers and $71M in incremental revenue.
• Owned the credit fraud controls with the fraud and Buyer Risk Prevention teams: set the detection threshold at 99% precision to limit customer friction for legitimate businesses, with a domain blocklist, post-checkout checks, and exposure limits.
• Designed the checkout credit decision: versioned APIs answered eligibility in real time from batch underwriting plus transaction-level controls, keeping ML inference out of checkout and pulling impact forward 3 months.
• Rebuilt SMB underwriting on Amazon behavioral data where thin credit files held approval at 4%, capping exposure by risk tier; raised SMB approval to 15% with no credit losses after full launch.
Sr. Product Manager-Technical, ML Ops Developer Platform                                    2020 - 2022
• Owned vision and roadmap for a SageMaker-based MLOps platform for 30+ risk and credit data scientists, with governance and monitoring by default; cut deployment time 40% and scaled to 100+ production models with flat headcount.
Product Manager-Technical, Supply Chain Optimization                                        2018 - 2020
• Specced inventory-recommendation APIs on Amazon's Selling Partner APIs so outside developers and partners could show recommendations and projected savings; with wider coverage and a Seller Central entry point, adoption rose 1% to ~10%.
• Launched ML recommendation and causal decision support products across thousands of sellers, explaining shipping-cost changes across 50+ drivers from 14 teams' systems; $100M+ in savings, including $40M from causal attribution.
Product Manager, Amazon Pricing                                                             2016 - 2018
• Launched self-service price-perception insight tools benchmarking Amazon against 800+ retailers in 17 countries; adopted by 40+ global pricing leaders, with signals feeding Amazon's pricing models.
Cognizant Technology Solutions | Designed solutions and pricing for 30+ APAC deals worth $25M (45% win rate)   2015 - 2016
EDUCATION
MBA, Marketing & Operations, IIT Roorkee (2013-15) | B.E., Chemical Engineering, Thapar University (2009-13)
```
