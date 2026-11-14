# Story Coverage Grid

Last updated: 2026-11-10
Built from: the Step 1 question list (8 target companies' intel, the 12 most common PM questions, all 4 of your interviews) and the Step 2 story scores. Stories and metrics live in `experience-library.md`; this file only maps them.

**Rule:** every competency needs a primary story and a backup. No story is primary for more than 2 competencies.
**Status:** ✅ covered · ⚠️ thin (weak primary, no backup, or only an angle of another story) · ❌ no real story

## Tier 1: Core questions for your target roles
| # | Competency | Primary | Backup | Status |
|---|---|---|---|---|
| 1 | Shipping an AI product | K2 Forecasting agent | K6 Data catalog | ✅ |
| 2 | An AI quality failure | K5 Quality slip | K3 Tiered autonomy (60% of actions reversed) | ✅ |
| 3 | Working with engineers and researchers | K13 Modular services vs. monolith | K18 Head of Data Science (researchers angle) | ✅ |
| 4 | Ambiguity / incomplete data | A7 Launching with limited information | K16 CEO demo | ⚠️ A7 is a thin angle of A1; needs building out |
| 5 | Failure | A6 SMB economics miss | A12 SPORT adoption miss | ✅ |
| 6 | Influence without authority | A11 TRACE (14 teams, 14 systems) | A10 Privacy across Payments | ✅ |
| 7 | Disagreeing with a senior leader | K17 CEO's SAP schema | K12 Leadership + investors | ✅ |

## Tier 2: Asked at several companies
| # | Competency | Primary | Backup | Status |
|---|---|---|---|---|
| 8 | Risk vs. growth | K3 Tiered autonomy | A3 Approvals vs. losses | ✅ |
| 9 | Saying no / inbound requests | K20 Intake rule | K16 "Not the full build now" | ⚠️ No story of saying no to a customer |
| 10 | Data-driven decision | K18 Decision rule (70% natural language) | K11 Prototype data | ✅ |
| 11 | Hard trade-off | K12 Managed service (+1 month, +2 clients) | K13, K14, A4 | ✅ |
| 12 | Prioritization | K11 Accuracy work vs. agent | A1 Segment allocation | ✅ |
| 13 | Speed / bias for action | K16 CEO demo in 3 weeks | A4 Batch underwriting (+3 months sooner) | ✅ |
| 14 | Customer discovery | K10 Adoption (with K21 first) | A2 Monthly eligibility pivot | ✅ |
| 15 | Proudest accomplishment | K1 Consulting → product pivot | A8 ML platform / A11 TRACE | ✅ |

## Tier 3: Specific to one track or company
| # | Competency | Primary | Backup | Status |
|---|---|---|---|---|
| 16 | Leading and aligning a team | K1 Three lanes, 30+ engineers and scientists | K20 | ✅ |
| 17 | Handling an underperformer | K20 Dotted-line PM | — | ⚠️ No backup; K20 has no hard choice and no number |
| 18 | Developing and mentoring people | A13 Program Manager L4 → L5 | — | ⚠️ 2016–18, one person; 4–5 mentees with no story |
| 19 | Technical depth | K6 Grounding diagnosis | A8 ML platform | ✅ |
| 20 | Learning a new domain fast | A10 (learning EU/US privacy law) | S1 Job-search system | ⚠️ Angles only |
| 21 | Growth mindset | A12 SPORT miss | S1 First version failed | ✅ |
| 22 | Enterprise launch / working with sales | K12 Data-residency clients | K13 Security review | ⚠️ No story about working with sales |
| 23 | Accessibility / inclusivity | — | — | ❌ |

## Primary load per story
- **At the limit (2):** K1 (#15, #16), K12 (#11, #22), K20 (#9, #17). If #9 and #17 come up in the same loop, use K16 for #9.
- **Primary once:** K2, K3, K5, K6, K10, K11, K13, K16, K17, K18, A6, A7, A10, A11, A12, A13.
- **Strong stories used only as backups:** A8, A1, K14, A9. Reserve these for later rounds so new interviewers hear new evidence.
- **Not mapped:** K4 (eval framework: follow-up depth for #1), K7, K8, K9 (sub-parts of K10/K2), K15, S1 (supporting point).

## What to fix, in order
1. **#4 Ambiguity (Tier 1, very common at OpenAI, Anthropic, Microsoft):** build A7 into a full story, or choose a Keystone story with real uncertainty.
2. **#17 / #18 People (Head of Product track):** strengthen K20 (your decision and a result), and find one mentoring story.
3. **#9 Saying no to a customer:** check whether one exists.
4. **#20, #22, #23:** single-company questions. Lower priority.

## Tier 4: Fraud, risk and developer products (added 2026-11-09 for Stripe Radar)
| # | Competency | Primary | Backup | Status |
|---|---|---|---|---|
| 24 | Fraud / abuse strategy, end to end | A22 BFS strategy (facts: A21) | A27 BFS adopted by six teams | ✅ |
| 25 | Investigating a new attack or abuse pattern | A23 BFS 2.0 | K5 (production quality slip, a diagnosis analog) | ⚠️ One real story; backup is an analog, not fraud |
| 26 | Detection vs. customer friction | A24 Precision-first threshold | A3 Approvals vs. credit losses | ✅ |
| 27 | Scoping a launch / engineering trade-off | A25 Blocklist cache vs. feature store | K13 Modular services vs. monolith | ✅ |
| 28 | Writing / aligning stakeholders with a document | A26 BFS PR/FAQ | A10 Privacy policy across Payments | ✅ |
| 29 | Platform adoption / integrations / partners | A27 BFS adopted by six teams | A15 SPORT APIs | ✅ |
| 30 | Developer-facing APIs | A15 SPORT APIs | A16 MOQ APIs, K29 API catalog | ✅ |
| 31 | Pricing / monetization | K32 Keystone pricing | — | ⚠️ No backup story |
| 32 | Real-time decision API / batch vs. real time | A4 Batch underwriting (+3 months sooner) | A14 checkout credit API | ✅ |

## Tier 5: Stripe competencies (added 2026-11-10 from Stripe's hiring manager guidance)
| # | Competency | Primary | Backup | Status |
|---|---|---|---|---|
| 33 | Stay curious: dive into the details of a problem | A22 + A23 (BFS 1.0 + 2.0 as one arc) | A2 credit visibility pivot | ✅ Final spoken version in A23 (2026-11-11); confirm the two flagged facts | ✅ A23 spoken version exists; the questions you asked and who you talked to are not recorded |
| 34 | Stay curious: unfamiliar domain or stretch assignment | A8/A9 MDLC: the move from seller services into credit and lending (SR 11-7) | A10 Privacy for ML | ✅ Final spoken version in A8 (2026-11-11); reserve failure answer noted |
| 35 | Stay curious: established process → something new | A1/A3/A4/A5/A14 PBI credit decisions | K32 pricing and packaging (with K34) | ✅ Final spoken version in A1 (2026-11-12) |
| 36 | Craft: above and beyond for the user | K29 data platform API catalog and release notes | A14 credit-analyst tools and Central Rules Engine (facts recorded; answer not yet written) | ✅ Final spoken version in K29 (2026-11-12) |
| 37 | Craft: iterating on something not complete | K9 + K10 forecast platform (stability, explainability, free support) | A12/A15 SPORT | ✅ Final spoken version in K9 (2026-11-13) |
| 38 | Craft: complex → simple | A11 TRACE | K6 data catalog and semantic layer | ✅ Final spoken version in A11 (2026-11-13) |
| 39 | AI fluency: a workflow you built and how you assess output | K2 (with K3, K4) Forecast Agent | K11, K14, S1 | ✅ Final spoken version and follow-ups in the library (2026-11-14); see the metric caution (70% vs. >80%) |
| 40 | AI fluency: day-to-day use as a PM | Job Search OS + Forecast Agent prototype + AI-assisted SAP learning | HAT-AI (as recorded, no detail) | ✅ Final spoken version in the library (2026-11-13) |
| 41 | Pushed the boundaries while bringing others along in a murky environment | K1 + K12 (pricing K32 moved to row 35 backup) | A7 | ⚠️ Spoken version not written |
