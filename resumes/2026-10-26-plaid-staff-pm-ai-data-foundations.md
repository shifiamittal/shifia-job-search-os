# Resume: Plaid, Staff Product Manager, AI & Data Foundations

Date: 2026-10-26 · Files: `resumes/Shifia_Mittal_Resume_Plaid.docx` (master) and `.pdf` (1 page, rendered and checked)
Base: `Shifia_Mittal_Resume_Coinbase.docx` (platform framing, ML Ops role first under Amazon). Source: recruiter outreach from Fernando Parada (fparada@plaid.com), 2026-10-16. Recruiter screen Thu 2026-10-29, 10:00–10:30am Seattle. Fernando asked for a resume before the call.

**Keyword Coverage: 100% (14/14 inferred requirements; 12 strong, 2 partial).** The "JD" is a short recruiter message, so all 14 requirements are inferred and the denominator is small. The two partials (LLM gateway, Databricks depth) are the real gaps.

## Requirement match

| # | Requirement (inferred from recruiter message) | Type | Match | Evidence on resume |
|---|---|---|---|---|
| 1 | Experienced platform PM | REQ | STRONG | ML Ops developer platform; Keystone AI and data platform |
| 2 | Shared platforms internal teams choose to use | REQ | STRONG | Onboarding as a product (5 teams); privacy default (~20 teams); fraud score (6 teams); internal AI assistant (30 PMs) |
| 3 | AI platform: LLM gateway | REQ | PARTIAL | Model routing, cheap vs. strong models (~30% cost cut), inside one product, not a company-wide gateway |
| 4 | AI platform: evaluation infrastructure | REQ | STRONG | Eval harness, reference cases, LLM-as-judge, launch gates (K4) |
| 5 | Data platform: Databricks | REQ | PARTIAL | Deployed in the flagship client's Databricks environment (K22); never owned a company Databricks platform |
| 6 | Data pipelines | REQ | STRONG | Multi-tenant data platform; self-service ML pipelines |
| 7 | AI-powered data tooling | REQ | STRONG | AI-generated data catalog and semantic layer (K6/K7) |
| 8 | Systems connecting AI and data | REQ | STRONG | Catalog grounding agents (K6); data platform APIs for scientists (K29) |
| 9 | Turn strategy into prioritized bets | REQ | STRONG | Ranked adoption blockers; prototype moved 2 months of roadmap (K10/K11) |
| 10 | Work directly with senior AI/data leader | REQ | STRONG | CEO and CTO pivot (K1) |
| 11 | Define mid-to-long-term AI roadmap | REQ | STRONG | 0→1 strategy and roadmap; ML platform vision |
| 12 | Staff-level scope | REQ | STRONG | 11+ years; Principal at Keystone |
| 13 | Fintech / financial data | PREF | STRONG | Amazon Business credit ($71M), fraud score ($18M) |
| 14 | Regulated data, governance, privacy | PREF | STRONG | SR 11-7 monitoring; EU/US privacy default |

## Gaps

| # | Requirement | Gap | Suggested response |
|---|---|---|---|
| 1 | LLM gateway | Partial | Recruiter screen: "I built model routing inside our agent product, sending simple cases to cheap models and hard ones to strong models, which cut run cost ~30%. A gateway does that once for every team, along with keys, quotas, logging and PII controls. That's the same problem I solved on the ML platform at Amazon: one shared path instead of every team building its own." Don't claim a gateway. |
| 2 | Databricks platform ownership | Partial | "I deployed our forecasting platform in a Fortune 500 client's Databricks environment. I haven't run a company's Databricks platform, but I've owned the layer above it: data contracts, quality checks, lineage and data access for scientists." |
| 3 | Eval infrastructure as a shared service | Not visible | The eval harness served Keystone's own agents. Open question below: did HAT-AI or REI-Agent use it too? |
| 4 | Level: Staff vs. Principal target | Leveling | Not a resume problem. Ask where Staff sits on Plaid's ladder and the full comp band. |

## Open questions for the user (answers could raise partials to strong)
1. At Keystone, did HAT-AI, REI-Agent and the forecasting agent share model access (keys, logging, cost tracking, prompt or model versioning)? That would be gateway-like work.
2. Did the eval harness or LLM-as-judge setup get reused by HAT-AI or REI-Agent, or only the forecasting agent?
3. Beyond the flagship client, did you work hands-on in Databricks (Unity Catalog, Delta tables, jobs)?

## Reviews (first draft)

**Recruiter (6-second scan):** PASS. First impression 8/10, relevance 8/10, readability 7/10. Top third says "AI, data and ML platforms", "data platform", "Databricks", "evaluation infrastructure". Readability cost: four Keystone bullets run 2+ full lines. "Principal" above a Staff req is fine at Plaid's size (no overqualification flag). Risk: Keystone "2024 - Present" (user's choice; employment verification will show Mar 2026).

**ATS:** PASS WITH WARNINGS. Standard headers (Summary, Experience, Education), no tables, text boxes or header/footer text; links resolve (`mailto:`, LinkedIn, GitHub). Keyword count in text: platform 11, roadmap 4, self-service 4, credit 3, privacy 3, risk 3, data platform 2, evaluation 2, strategy 2, adoption 2, data scientists 2, fraud 2, internal 2, LLM 1, Databricks 1, pipelines 1, data catalog 1, semantic layer 1, APIs 1, data-quality 1. Missing: "LLM gateway" (not claimable), "Unity Catalog" (not on record).

**Hiring manager (head of Data & AI):** Would take the meeting. Credible because the platform-adoption proof (5 teams, ~20 teams, 6 teams) is exactly the "teams choose to use it" problem, and the catalog/semantic-layer bullet shows AI and data connected. Will probe: (1) what she owned vs. engineering on the data platform; (2) gateway experience; (3) whether the eval infrastructure served more than one product; (4) scale: 5 enterprise clients vs. Plaid's data volume; (5) Databricks depth. Nothing overclaims.

## Revisions made
- Summary cut from 3 rendered lines to 2 ("that product teams adopt" and "fintech" removed).
- Fixed a one-word last line ("70%.") by rewording the prioritization bullet.
- Fixed "to 0.8." last line by dropping "with confidence gates".
- Added the Databricks deployment bullet to use spare space and hit a JD term.
- Dropped the CI/CD bullet (less relevant here) and the retired "fraud loss rate fell 15%" bullet still on the Coinbase resume (Source Decision 26); replaced with the fraud score bullet (A21).
- Not changed: "2024 - Present" (user's decision 2026-10-24).

## Source check
| Resume bullet (first 60 chars) | Source | Match |
|---|---|---|
| Led 0→1 product strategy and roadmap for an enterprise AI pl… | K1; Coinbase bullet; $7.5M, $25M canonical | REWORDED |
| Ranked three adoption blockers by reach, impact, confidence… | K10 RICE; K11 prototype (>70%, 2 months); adoption 50→70 | REWORDED |
| Built a multi-tenant data platform with 7–8 engineers cover… | K15, K29; canonical 3 months → 3 weeks, 2 months → 2 weeks | REWORDED |
| Deployed the platform in the flagship Fortune 500 client’s D… | K22 (Databricks, Great Expectations checks, weekly retrain, eval vs. incumbent); WAPE 21–26% canonical | REWORDED |
| Evals showed most agent diagnostic failures came from undoc… | K6 (>60% of diagnostic failures; 50→30; 0.6→0.8), K7 | REWORDED |
| Built evaluation infrastructure for agent launches: expert… | K4 harness and LLM-as-judge; K2 70%, 4 hrs/day → 4 hrs/week | REWORDED |
| Fixed pilot unit economics, where model cost exceeded the c… | K14 (~30%) | EXACT (Coinbase) |
| Launched an internal AI assistant that automated roadmap re… | HAT-AI resume bullet (15 products, 30 PMs, 120 hrs/week) | REWORDED |
| Owned vision and roadmap for a self-service ML platform on A… | A8, A20 (8+ HC, −40%) | REWORDED |
| Replaced ~1.5 months of engineering setup per model with se… | A20 pipeline automation; A8 100+ models | REWORDED |
| Competed with an easier-to-adopt internal platform by treat… | A20 onboarding (ML Pigeon; 5 → 3 weeks; 5 teams) | REWORDED |
| Made threshold-based monitoring and alerting the platform d… | A20, A9 | EXACT (Coinbase) |
| Made privacy compliance a platform default under EU and US… | A10 | EXACT (Coinbase) |
| Launched Amazon Business’ ML financing product via experime… | A1; canonical $71M, 50K+ | EXACT (Coinbase) |
| Wrote the strategy and PRFAQ for a business fraud score tha… | A21 ($18M, 6 teams) | REWORDED |
| Launched TRACE, a causal cost-attribution product… | A11 | EXACT (Coinbase) |
| Launched self-service price-perception insight tools… | Amazon Pricing | EXACT |

Bullets removed (no source): 0. Flagged for verification: 0.

## Regression check (v1)
Keywords: counted above. Facts: every number matches canonical metrics; "up to 26%" keeps the range qualifier. Style: SAD order, results bolded, no first person, no 1–3-word last lines. Render: 1 page, dates on one line, links live.

## v2 (2026-10-26, user feedback)
**User asks:** broader summary than credit products; question the prioritization bullet's #2 slot; fold the semantic layer into the data platform; restore the multi-agent bullet; drop the "evals showed…" lead-in; add a personalized-marketing growth bullet under Financing & Credit; one consolidated Supply Chain bullet.

**Changes:**
- Summary: Amazon line is now "ML platforms and products delivered $100M+ in savings and $71M in revenue" (SPORT/TRACE/MOQ + financing).
- Keystone order: strategy → data platform + catalog/semantic layer → Databricks deployment → agents (prototype bet folded in) → eval infrastructure → model routing → internal assistant. Standalone RICE bullet removed; the "bet" now opens the agent bullet.
- Eval bullet now carries its own result (K5: production monitoring caught a data gap; adoption 50% → 70%) instead of borrowing the agent's numbers.
- Data platform bullet: dropped "7–8 engineers" for space; clarification rate 50% → 30% (K6) is now its second result.
- Financing & Credit: added "Scaled a global consumer credit product with ML-personalized marketing, credit bureau integrations and an onboarding redesign; $15M, +7% approval, −50% abandonment" (LinkedIn work-history bullet, Amazon Financial Services role). [CONFIRM: A1 also lists "$15M from personalization" under PBI 2.0. Which product earned the $15M?]
- Supply Chain: SPORT, MOQ and TRACE in one bullet ($100M+, incl. $40M TRACE; Seller Central and partner APIs per A15/A16).
- Pricing bullet cut to one line.

**Reviews (v2):**
- Recruiter: PASS. First impression 8, relevance 9 (data platform, Databricks, agents and evals now in the first five bullets), readability 7 (four 3-line bullets remain).
- ATS: PASS WITH WARNINGS. Keyword recount: platform 11, roadmap 4, credit 4, privacy 3, data platform 2, evaluation 2, strategy 2, adoption 2, self-service 2, internal 2, APIs 2, LLM 1, Databricks 1, pipelines 1, data-quality 1, data catalog 1, semantic layer 1, multi-agent 1, RAG 1, personalized 1. Dropped since v1: self-service 4 → 2 (pricing bullet and data platform rewording); no JD term lost. Still missing: LLM gateway, Unity Catalog (not on record).
- Hiring manager: would take the meeting. Fixed: eval bullet no longer reuses the agent's numbers; prototype-to-launch reads as one bet. Will still probe gateway, Databricks depth, scale, and owned vs. built.

**Fixes from the reviews:** five short last lines removed ("30%.", "70%.", "attribution.", "leaders.", summary third line); "accuracy work" → "model accuracy work" for clarity.

**Regression (v2):** 1 page; dates on one line; links unchanged (mailto, LinkedIn, GitHub); all numbers match canonical metrics; no first person; results bolded.
