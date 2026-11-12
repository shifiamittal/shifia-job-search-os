# PBI 2.0 fact sheet (for recall and follow-up prep)

Built 2026-11-11 from: your Drive docs "PBI 2.0 project summary and questions.docx" (call it **Project summary**), "Pay-by-Invoice Expansion" dossier (**Dossier**), "Personalization example.docx", "PBI business summary.xlsx"; and your library (A1–A7, A14, A21; Source decisions 15–16, the S-team and 0→1 notes).
This is a **reference sheet**, not an answer. The story itself (C3) lives in the library once finalized.

**Legend:** ✅ in your docs and consistent · ⚠️ sources conflict (see section 16) · ❓ not in any source, only you know.
**Your rulings today:** the lukewarm feedback came from **concept validation with 20–30 customers before building**; the loss-reduction sequence in the **original document** is right (simulation first); on customer count and threshold wording you said "go with the documents" (see section 16, items 1 and 4; item 1 needs your explicit confirmation because the resume says 50K+).

---

## 1. The 60-second version
Amazon Business's Pay by Invoice (PBI) gave business customers credit through invoices. SMBs were about 60% of Amazon Business spend but only 4% were approved, because the underwriting leaned on credit-bureau data that did not exist for about 60% of them, and the product required a $10,000 minimum credit line. You owned the S-team goal and led a 0→1 redesign: a customer-level default-risk model on Amazon's own data, a maximum-exposure idea (shadow credit line), a transaction-level rule layer (TAP) that excluded high-loss categories, and a checkout API. You validated the concept with 20–30 customers, launched to 5%, and scaled in phases. Approval went 4% → 15%, with $71M incremental spend and positive economic profit.

## 2. Numbers (use exactly)
| Item | Value | Status |
|---|---|---|
| SMB share of Amazon Business spend | ~60% of GMS | ✅ (Project summary says "more than 60%"; "65% of revenue" appears once: ignore) |
| SMB approval before | 4% (vs. a much higher enterprise rate; exact rate not on record) | ✅ |
| Customers lost to lack of credit | ~100K a year, ~3% of annual GMS | ✅ (one variant says 3% of customers: ignore) |
| Approved customers who accepted offers (before) | 1% accepted | ✅ Project summary |
| Bureau data missing | ~60% of target customers | ✅ Project summary ("reportedly" in Dossier) |
| Old minimum credit line | $10,000 | ✅ Project summary |
| New minimum credit line | $1,000 | ✅ Project summary |
| Approval after | 15% | ✅ |
| Incremental spend | $71M (~1% revenue) | ✅ |
| Customers reached | **50K+** (library, resume, LinkedIn, and your older "Situation statements" doc: "10% increase in approval or 50K active customers") vs. **250K active** (Project summary; sizing sheet) | ⚠️ section 16, item 1 |
| Economic profit | > 0 | ✅ |
| Loss reduction from adding enterprise customers | ~6–8% (simulation) | ✅ |
| Launch pulled forward by choosing batch | ~3 months | ✅ A4 |
| Vision goal | credit to 20% more SMBs and +3% incremental Amazon GMS in 2 years | ✅ Project summary |
| Enterprise personalization | $15M incremental revenue | ✅ library, Dossier |
| Bureau integrations | +17% data coverage, +7% approvals | ✅ library, Dossier |
| Onboarding redesign | 50% lower abandonment (7-page → 1-page prefilled) | ✅ library, Dossier |
| Old figures to avoid | 1M customers / $7B GMS / $40B ambition; $1B revenue vs. $10M losses; "20% active-user growth" | ⚠️ unreconciled, different scopes |

Timeline anchors: the Project summary's validation set covers customers approved **Apr–Jul 2022**, with invoices through **Jan 2023**. Your library puts the fintech and credit role at 2022–24, and MDLC ran to Jul 2022. ❓ Be ready to say when you moved onto PBI.

## 3. The problem (situation)
- COVID: SMB need for working capital rose; Amazon underserved them. ✅
- 4% of SMBs approved, yet SMBs were 60%+ of Amazon Business GMS. ✅
- ~100K customers a year abandoned Amazon accounts, partly for lack of credit (~3% of annual GMS). ✅
- A second problem, customer experience: of the approved customers, only ~1% accepted offers, from low awareness or sign-up abandonment (7-page onboarding). ✅
- Market: competitors (Staples Advantage, Grainger) were partnering with fintechs that planned about $1 trillion of investment in business credit over 5 years. ✅
- Only ~7–10% of approved enterprise customers were active users (see section 15). ✅

## 4. Why the old approach failed (the "established process")
- Underwriting models had **no credit-bureau data for ~60%** of target customers, so they were marked risky. ✅
- The product required a **$10K minimum line**, which forced very high risk guardrails. ✅
- Manual credit assessment on a sample classified many of those customers as **medium risk**, i.e. creditworthy. ✅
- The key insight: **missing bureau history is not missing creditworthiness.** Amazon had purchase, tenure, payment, business and prior-credit signals. ✅

## 5. The solution, layer by layer
**Mental model:** customer risk → maximum exposure → transaction eligibility → checkout. In questions: "Can I lend to you?" → "How much exposure will I take?" → "Will I finance this purchase?"

### 5a. Customer-level credit assessment ("CPA"/PD model)
- Classification model predicting probability of default, built with **1 data scientist + a science manager**; you were the PM partner. ✅
- Target segments: (1) customers the PD model had rejected for PBI 1.0; (2) **less-risky enterprise customers who were rejected for non-risk reasons** (e.g., newly incorporated, credit lines in multiple marketplaces). ✅
- Default label: suspended and written off, or 150 days past due on a balance above a set threshold. ✅
- Data: Amazon Business / Amazon.com spend, SBCC (small-business credit card) spend and assessment status, prior PBI repayment, Prime status, tenure, free-email flag, credit bureau where available. ✅
- Top features (Project summary): active Prime, multi-user account, % of spend from office products, lifetime AB spend, spend in the 3 months before approval, SBCC approved, tenure, SBCC applied. ✅
- Models compared: decision tree, random forest, balanced random forest, XGBoost; metrics ROC-AUC, PR-AUC, geometric-mean score, F1. Selected: **balanced random forest** (one summary says XGBoost). ⚠️ item 3.
- Split 80/20; trained on **15 months** of data from a period when risk thresholds had been lowered (so approvals were broad); out-of-sample validation on 3 months with known performance. ✅
- Interpretability: SHAP values and business-facing documentation (problem, metrics, feature importance, A/B results, assumptions, limitations). ✅
- **Threshold:** deliberately tolerant of some false negatives (bad customers scored as good), because you wanted more customers to reach the transaction layer where the profit/loss trade-off is made; the model objective and chosen cut-off were tied to **maximizing economic profit**. ✅ (your ruling: go with the documents; see item 4)
- Your input: you suggested choosing the PD cut-off that kept out the most bad customers while giving the most customers access. ✅
- **Shadow credit line:** customers the PD model flagged high-risk were assigned a shadow credit line, i.e. the maximum exposure Amazon would take. ⚠️ its exact place in the sequence is unclear in the sources (item 6).

### 5b. Transaction-level eligibility (TAP)
- Passing the customer check did **not** make every purchase eligible. ✅
- TAP used category risk and product economics: historical loss by category, contribution margin, returns, spend velocity, average order size, order frequency, number of product groups, share of spend in high-risk groups. ✅
- Example: if ~75% of historical losses among risky customers came from one category (the doc uses Gardening), that category is excluded. ✅
- Profit logic: **profit = losses saved − revenue lost** (expected profit from the product minus potential loss). ✅
- Risk control: approve customers for **categories where Amazon had higher profit margin**. ✅
- Implementation: described as rule-based; also described as model-like. ⚠️ item 7.
- Roadmap (not shipped in V1): real-time profit-margin checks at the cart and a real-time model; real-time credit monitoring. ✅

### 5c. Checkout and API
- Credit shown as a payment option at checkout (vs. a separate credit-line workflow). ✅
- REST API with a **GET endpoint**: input customer id and cart value, response approved / not approved. ✅ (the API notes also mention cart category)
- Backward-compatible versioning so new model versions did not break callers; documentation covering request, response, errors, versioning, sample code. ✅
- Autoscaling: Project summary says Lambda auto-scaling; your API notes say containers on Fargate because Lambda was too costly and slow (cold starts) at high transaction rates. ⚠️ item 8.
- Feature cache of Amazon internal data used for real-time assessment at checkout. ✅ (the checkout call read a precomputed assessment; see item 5 for what was truly synchronous)
- Downstream systems store the approved credit line and exposure; data tables capture approved/not, credit line, approved transactions, adoption status, utilization, receivables, write-offs, and a PBI 2.0 vs. 1.0 flag. ✅

### 5d. Customer experience
- Flow: eligibility notice → checkout selection → company details for the invoice → terms → purchase → confirmation email → invoice by email → pay (autopay or manual) → reminders (7 days after due, then 15/20/25/35/45). Returns produce a credit note and the invoice closes. Customer service explains amounts due; unresolved cases go to collections (GAR). ✅
- **Original design choice:** not communicating the credit limit in advance, as a risk control. ✅
- **After concept validation:** eligibility shared at the start of each month. ✅

## 6. Customer validation (your ruling)
- Before building, you tested the concept with **20–30 potential customers** and got a **lukewarm** response. ✅
- Feedback: not knowing monthly eligibility made it hard to plan monthly purchases. ✅
- Change: share each month's eligibility at the beginning of the month. ✅
- ❓ Not recorded: exact customer quotes, who ran the sessions, how you recruited them.

## 7. Launch and experimentation
- Controlled launch to **~5% of customers**; you measured approvals, offer acceptance, downstream spend/revenue and loss rates and saw favorable results. ✅
- Your older "Situation statements" doc: two phased experiments approving only **5% and then 15%** of model-approved customers, then a dial-up to **100%**, assessing approved customers, active customers, incremental spend and failed repayments before each step.
- Rollout sequence in the sources: **10 customers → 5% → 15% → 50% → 100%**, with repayment checks every 3 months; another variant says 100 → 1,000 → all. ⚠️ item 9. (Your plan: say "5% first, then phased.")
- Risk controls: lower initial credit limits; decline after any delinquency; raise limits with purchase history; **1 day past due triggers suspension**; loss-rate monitoring (a >25% loss-rate threshold appears in the notes, ❓ definition unclear).
- Key metrics watched: approved customers, active customers, incremental spend, 1-day-past-due payments, loss rate.

## 8. Decisions and trade-offs (each with the "because")
| Decision | Alternative | Why | Source |
|---|---|---|---|
| Rebuild underwriting on Amazon data; lower the minimum line to $1,000 | Keep bureau-led, $10K line | Missing bureau ≠ not creditworthy; manual review showed medium-risk | ✅ |
| Optimize for economic profit, not approvals | Maximize approval rate | Approval alone raises losses | ✅ |
| Add less-risky unapproved enterprise customers | SMB-only launch | Simulation: potential loss ~6–8% lower; the safest customers absorb losses from riskier ones | ✅ **pre-launch simulation** (your ruling) |
| Build in-house | Third-party/outsource | Builds long-term credit capability without bureau data; mitigated by staged rollout. Limited analysis of third parties. | ✅ (older econ figures: ignore) |
| Batch customer assessment + live eligibility check | Real-time model | Faster launch (~3 months); what must be fresh is transaction eligibility; real-time stayed on roadmap | ✅ A4 |
| Launch with fewer data sources | Wait for AB wallet, payment-mix and return-history data | Speed vs. quality; deprioritized those for V1 | ✅ |
| Customer-level and transaction-level layers | Blanket credit line | Approving a customer is not approving every purchase; lower exposure | ✅ |

## 9. Fraud connection (ties to C1)
- Two stages: the **Business Fraud Score** ran before credit assessment and fed the credit model; **BRP** handled post-checkout transaction fraud. ✅
- A fraud email-domain blocklist from BRP suspends customers regardless of model score. ✅
- BFS threshold: precision 0.99, recall 0.25, false-discovery rate 0.01; a false positive suspends an $8K–$250K PBI line. ✅
- Suspensions: fraud, insolvency, or 1 day past due. ✅

## 10. People and stakeholders
- Data Science (PD model, TAP rules), Data Engineering (features, tables), Engineering (checkout, APIs, caching), Design/CX, **Credit Strategy Operations** (manual assessment, approval/increase/suspension SOPs), Fraud and BRP, Finance & Accounting (P&L, payment mix, write-offs, bad debt), Legal (model approval), Collections (GAR), Customer Service, Marketing, leadership. ✅
- Credit analyst tools: you built tools for credit analysts and automated parts of their work (library: one line). ❓ **No detail anywhere.** This feeds C4.

## 11. How you ran it
- Annual OKRs, quarterly milestones, biweekly sprints, status mechanisms. ✅
- **Monthly VP-level business reviews**; you owned the **S-team goal** (one goal; don't say "SVP-level goals"). ✅
- You rallied leadership and "troops" across science, engineering, legal and design around a vision of credit for 20% more SMBs and +3% GMS in 2 years. ✅
- 0→1 product (confirmed 2026-10-25). ❓ What was new vs. PBI 1.0 beyond underwriting and checkout?

## 12. Results
- Approval 4% → 15%; $71M incremental spend (~1% revenue); economic profit > 0. ✅
- No credit losses after full launch (library). ✅
- Customers: ⚠️ item 1.

## 13. Collaboration with data science (for "how do you work with scientists?")
- You framed the business objective and customer problem; aligned the ML objective; brainstormed data sources with Data Engineering (internal purchase data, business history, other credit products' data, the credit-card initiative's history). ✅
- You asked for access to credit-history data from the small-business credit card initiative. ✅
- You pushed to include enterprise customers who were rejected for non-risk reasons to keep within loss targets. ✅
- You decided where PM leads vs. scientist leads. ✅

## 14. What you did *not* do (be honest)
- Data science built and validated the models. ✅
- You did not run fair-lending review; Amazon had its own practices. The model used business-level data only; owner personal attributes and ZIP code were excluded. ✅
- You do not have a recorded enterprise approval rate. ✅

## 15. Adjacent PBI work (other C-answers, role conversation)
- **Enterprise adoption (~7% of eligible customers adopting):** customer research found low awareness; benchmarking showed onsite beat email; a **configuration propensity model** (260K accounts, 16% configured, 300+ features cut to 26, AUC) segmented customers (>0.7: ~11K, 18%, ~54% configure; 0.5–0.7: ~8K; <0.5 removed, lifting the targeted configuration rate from ~17% to ~40% in validation). Personalized messages via matrix factorization and a classifier; A/B tests; **$15M** incremental revenue. ✅ (Personalization example)
- **Industry-personalized creative** (small-business card): ~15% CTR lift in a 6-week test. ✅
- **Onboarding:** 7-page application → 1-page prefilled; 50% lower abandonment. ✅
- **Bureau integrations:** +17% data coverage, +7% approvals. ✅
- Adjacent, not confirmed as PBI: no-code credit-strategy platform (~4% fintech revenue uplift). ❓

## 16. Conflicts and open items (you decide)
1. **Customer count.** (New evidence: your older "Situation statements" and "Phase 3 behavioral answers" docs both say "10% increase in approval or 50K active customers," matching the resume and library; only the Project summary and the sizing sheet say 250K. I recommend 50K+.) Resume, LinkedIn and library: **50K+** (confirmed 2026-10-20). Project summary: "15% approval, or **250K active customers**." The sizing spreadsheet has a "PBI 2.0 = 250,000 customers / $1B" line that looks like a **projection**; I cannot tell from its unlabeled cells. The Dossier lists 250K among older/conflicting figures. You said "go with the document"; **changing to 250K contradicts the resume and every answer so far. Please confirm explicitly: 50K+ (actual) or 250K.**
2. **Rollout sequence** (item 9 above): confirm the one you'll state.
3. **Production algorithm:** balanced random forest vs. XGBoost.
4. **Threshold wording** (your ruling: go with documents): "the model objective and cut-off were tied to maximizing economic profit; the customer-level cut-off was tolerant because TAP controls losses."
5. **Batch vs. real time:** what was precomputed (customer risk/exposure) and what was evaluated synchronously (transaction eligibility rules)? Feature cache and "real-time model assessment" appear in the same notes.
6. **Shadow credit line:** where it sits relative to the PD approve/reject step.
7. **TAP:** rules, ML, or hybrid.
8. **Lambda vs. Fargate** for the API.
9. **Pre-launch vs. post-launch losses:** your ruling is that the simulation came first. ❓ Did the 5% launch show *any* actual losses above plan? If not, the miss story (A6) becomes a pre-launch simulation story.
10. **When you moved onto PBI**, relative to MDLC ending Jul 2022.
11. **What was new vs. PBI 1.0**, beyond underwriting and checkout.
12. **What you built for credit analysts** (feeds C4).
13. **Customer-validation details:** how you recruited the 20–30 customers and what they said.

---

## 17. Follow-up question bank (with answers from the sources)
| Question | Answer from sources | Gap |
|---|---|---|
| Why did the old approach fail small businesses? | No bureau data for ~60%; $10K minimum line; manual review showed many were medium risk | none |
| What was new? | Amazon-data PD model; $1K minimum; transaction-level eligibility; checkout; monthly eligibility | item 11 |
| How did you know they were creditworthy? | Manual credit assessments; strong Amazon history; fraud-clean customers rarely defaulted | none |
| Why not just lower thresholds? | Redesigned the layers; exposure caps; category exclusions; economic profit | item 4 |
| What is economic profit? | Revenue/contribution profit on the extra spend minus credit losses | none |
| How did you set the cut-off? | Compared PD cut-offs on precision, recall and PBI metrics; tolerant of false negatives because TAP controls losses; economic profit | item 4 |
| How did you validate? | 15 months of training data from a low-threshold period; 80/20; 3-month out-of-sample; 5% experiment | item 2 |
| Why batch? | Faster launch; only transaction eligibility must be live; real-time on roadmap | item 5 |
| How does checkout decide? | GET with customer id and cart value; reads precomputed assessment; TAP rules | item 5 |
| What did customers say? | Lukewarm; wanted monthly eligibility to plan | item 13 |
| What went wrong? | Simulation showed potential loss; fixed by adding enterprise customers (6–8% lower) | item 9 |
| Build vs. buy? | In-house for long-term capability; staged rollout; limited third-party analysis | none |
| How did you work with Data Science? | Section 13 | none |
| How did you handle fraud? | Section 9 | none |
| How do you monitor? | Section 7 | none |
| Fairness/regulation? | Business-level data only; excluded owner attributes and ZIP; Legal approved the model; no fair-lending review by you | none |
| Biggest risk? | Short-term losses from risky customers; mitigated by exposure caps, small start, delinquency rules | none |
| What would you do differently? | ❓ your answer | yours |
| How big was it? | 4%→15%, $71M | item 1 |

---

## 18. Found later in your other interview-prep docs (Situation statements; Phase 3 behavioral answers)
These two docs repeat the PBI 2.0 and CPA/TAP text and add the following. There is still **no separate CPA/TAP model doc** in your Drive; the Project summary is the fullest source, and its links point to Amazon-internal wiki pages that are not in Drive.
- **Alternatives you explored for PBI 2.0:** external partner integration, multiple credit-bureau integrations, and underwriting by product category as competitors such as Affirm do. You chose on long-term benefit vs. effort. ✅
- **"Net 30-day" naming and branding story (a separate story):** research with target customers favored "Net 30 day" over generic names like "Bill me later with Amazon Business"; benchmarked invoice/terms/net-30 language; the pilot split treatment names and the new name drove better adoption; hard-coded the 30-day term for the MVP because a variable term would need dynamic handling for 45/60-day terms; a Director challenged why a new name was needed; branding on some pages was >25 weeks of effort, so you limited it (a ~4-week workaround on one page). ✅
- **Onboarding simplification specifics:** only 15% completed the 7-page setup, customers came back ~1.5 times, most abandonment was at adding the billing address; fix was pre-filling and auto-saving; the experiment showed higher configuration and activation, with slightly higher losses that were not significant, so you scaled it. ✅
- **Central Rules Engine (3-year vision, 2023):** Credit Systems had 300+ business rules orchestrating credit decisions (e.g., a model predicts 0.7 default probability, a rule decides what that means); portfolio managers changed ~50 rules a year; enumerating rules took 4–5 months across teams in 2022; each rule change took ~3 months of engineering/science roadmap; ~3 tech and ~1 science headcount a year went to rule changes; the business was expected to grow 3X. You designed: a UI to review rules, a UI to add/edit rules, rules simulation, deployment, and governance/access controls. Roadmap: 2023 alignment and enumeration; 2024 MVP; 2025 onboard small-business loans; 2026 onboard PBI. You prioritized loans over line-of-credit onboarding despite pushback (loans: easier lift, lower risk; line-of-credit was a ~$10B business vs. ~$3B). Result noted: 9 SDEs and 3 science HC over 3 years. ✅ (the doc's figures; see open item below)
  - **This may be your best C4 example** ("tools for credit analysts / risk teams"): its customers were portfolio managers and manual credit operations. ❓ Your evidence notes say an MVP was built and then reprioritized toward third-party lending; what shipped, who used it, and the impact are not recorded.
- **Moody's integration (credit-data evaluation):** goal to add data for customers without bureau coverage and improve risk prediction for those with it; 3-year cost ~$2.8M; evaluated on a 100K sample (50K configured customers with ≥1 year of history, 50K non-configured); Moody's matched 46% automatically, grades A/B/C accepted; financial data for ~36% of the population, default-probability data ~45% coverage; revenue data staleness (95% from 2021). Headcount: 1.5 science, 1.1 tech. ✅
- **Other PBI-area headcount lines:** PBI 2.0 itself took ~1 science HC; model maintenance ~3 science HC and ~1 tech HC; data privacy/compliance ~0.6 HC. ✅
- **Pivot to third-party (external bank) lending** in the lending business, and a loan-cap increase from $750K to $1M (simulations suggested up to $4M; you chose a gradual increase). ✅ ❓ how these relate to PBI.
- **Older figures in these docs:** SMBs "65% of revenue" and "10% increase in approval or 50K active customers." ✅ (50K matches the canonical figure)
