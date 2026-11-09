# Stripe L4 Story Index (both Radar roles)

Updated: 2026-11-09 · Built: 2026-10-25 · For the hiring-manager call and the rest of the loop.
**The stories now live in `context-library/experience-library.md`** (single source of truth, canonical numbers, reusable for other interviews). This file is an index: which story answers which question, and the L4 signal each proves. The "S" numbers below are this index's story labels (the library's own "S1" is the job-search system story, a different thing).

## How to use this
- **The L4 bar:** each story shows you changing something beyond the product you owned, across teams you didn't manage, with a decision that outlasted you.
- **Shape:** goal and user first, then the situation, your decisions, the result, and what you learned. Spoken versions are about 200 words (~90 seconds). Go deeper only when asked.
- **Ownership words:** "I led the strategy," "I made the call," "data science built the model." Never "I built the model."
- **Figures:** lead with your own impact, rounded, plus method and trade-offs. Amazon's fraud exposure and loss figures are OK to cite (your decision, 2026-10-26). Don't name exact model features or thresholds tables.
- **Dates:** don't tie BFS to a specific year or Amazon role. If asked when: "during my time in Amazon Business Payments and Lending."

## Where each story lives

| Index label | Story | Library entry (facts + spoken version) | L4 signal it proves |
|---|---|---|---|
| **S1** | End-to-end fraud strategy, Pay by Invoice (Business Fraud Score) | **A22** (facts: A21) | A problem nobody owned; strategy beyond your product; six teams adopted it |
| **S2** | Finding the attack the score missed (BFS 2.0) | **A23** | You found the problem yourself; a durable defense, not a one-off rule |
| **S3** | Detection vs. customer friction (99% precision) | **A24** | A policy-level decision; layered defenses; a measurement system for friction |
| **S4** | Unblocking the BFS 2.0 launch (blocklist cache) | **A25** | A launch-level trade-off; you named the real risk |
| **S5** | The PRFAQ that started it (writing) | **A26** | A document that changed direction across teams |
| **S6** | A fraud score other teams built on (adopted by six teams) | **A27** | Cross-team adoption you drove; managed dependencies |
| **S7** | ML privacy policy across Amazon Payments | **A10** (spoken version added) | A problem nobody owned; alignment at VP level; ~20 teams |
| **S8** | Pricing that customers renewed into (Keystone) | **K32** | A company-level business model |
| **S9** | Managed service vs. SaaS, against leadership and investors | **K12** | A company decision against resistance, cost stated up front |
| **S10** | Developing PMs | **A13, K20** | Grows other PMs |
| **S11** | Failure: the credit-loss miss | **A6** | Owning a portfolio-level miss |
| (not indexed) | SPORT APIs · MOQ APIs · API catalog · client IT dependency | **A15 · A16 · K29 · K30** | External developers and partners |

## Which story for which question

| Question type | Fraud & Abuse role | Integrations role |
|---|---|---|
| Biggest impact / proudest / product strategy you set | **A22** | **A22**, or K32 Keystone pricing |
| Investigated a new fraud or abuse pattern | **A23** | A23 |
| Hard trade-off / ML decision / detection vs. friction | **A24** | A24 |
| Scope ruthlessly / speed vs. quality / engineering trade-off | **A25** | **A25** |
| Writing / aligning stakeholders with a document | **A26** | **A26** |
| Integrations, platform adoption, partners, technical dependencies | A27 | **A27**, A15, A16, K29 |
| Influence without authority / org-wide change | **A10** | **A10** |
| Pricing, monetization, commercial | K32 (only if asked) | **K32** |
| Disagreeing with leadership | K12 | **K12** |
| Developing PMs (L4 expects it) | **A13 / K20** | **A13 / K20** |
| Failure | **A6** | **A6** |
| AI quality / monitoring in production | K5 | K5 |

## Open items (your answers make these stronger)
1. **A26 PRFAQ pushback:** what engineering or buyer risk challenged, and what you changed.
2. **A27 hardest integration:** which one and why; any metric showing a partner's decision improved.
3. **A10 privacy pushback:** what the VPs or Directors pushed back on.
4. **A22 "what would you do differently":** replace my suggestion with your own.
5. **A22 score bands:** were there defined score bands (high → block, medium → verify, low → allow), or did each team set its own thresholds?
6. **A25:** what the in-memory cache gave up versus the feature store.
7. **Fraud v6 resume:** remove "repeat fraud incidents −5%" and "reduce fraud loss rate by 15%" (both retired 2026-10-25), and describe the fraud work as all of Pay by Invoice, not a small-business product.
