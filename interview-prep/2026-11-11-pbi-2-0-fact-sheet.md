# PBI 2.0 project fact sheet (for recall and follow-up prep)

Reorganized 2026-11-12 by topic. Every PBI 2.0 detail from the earlier version is kept; nothing was dropped.
This is a **reference sheet**, not an answer. The story itself (C3) lives in the library once finalized.

**Sources:** your Drive docs "PBI 2.0 project summary and questions.docx" (**Project summary**, the fullest source), "Pay-by-Invoice Expansion" dossier (**Dossier**), "Personalization example.docx", "PBI business summary.xlsx" (sizing sheet), "Situation statements of different projects.docx" and "Phase 3 behavioral answers.docx" (older interview-prep docs that repeat the CPA/TAP text), and your library (A1–A7, A14, A21; Source decisions 15–16; the S-team and 0→1 notes). There is **no separate CPA/TAP model doc** in Drive; the Project summary's links go to Amazon-internal wiki pages that are not in Drive.

**Legend:** ✅ in your docs and consistent · ⚠️ sources conflict (see Part 8) · ❓ not in any source, only you know.

**Your rulings so far (2026-11-11):**
- The lukewarm feedback came from **concept validation with 20–30 customers before building**, not from the 5% test.
- The loss-reduction sequence in the **original document** is right: Data Science's simulation came first.
- Threshold wording: you said "go with the documents."
- **Customer count (O1), confirmed 2026-11-12: 50K+.** Do not use 250K.
- **Losses (O9), confirmed 2026-11-12:** you have no loss data from the 5% launch, so the loss story is the pre-launch simulation, not a launch miss.
- **Credit-analyst tools (O12):** not the Central Rules Engine for now; you will share a different document, and we will then decide whether the Central Rules Engine belongs in it.

**Contents**
1. Overview: summary, key numbers, scope and timeline
2. The problem and why the old approach failed
3. The solution: customer model (CPA), transaction rules (TAP), fraud, checkout and API, customer experience
4. Validation, launch and risk controls
5. Decisions and trade-offs
6. People, execution and your role
7. Related PBI-area work (enterprise adoption, naming, onboarding, bureau and Moody's, Central Rules Engine, BFS model depth)
8. Conflicts and open items
9. Follow-up question bank
10. Delivery notes from past feedback
11. Prepared follow-up answers for the C3 story (14 questions)

---

# 1. Overview

## 1.1 The 60-second version
Amazon Business's Pay by Invoice (PBI) gave business customers credit through invoices. SMBs were about 60% of Amazon Business spend but only 4% were approved, because the underwriting leaned on credit-bureau data that did not exist for about 60% of them, and the product required a $10,000 minimum credit line. You owned the S-team goal and led a 0→1 redesign: a customer-level default-risk model on Amazon's own data, a maximum-exposure idea (shadow credit line), a transaction-level rule layer (TAP) that excluded high-loss categories, and a checkout API. You validated the concept with 20–30 customers, launched to 5%, and scaled in phases. Approval went 4% → 15%, with $71M incremental spend and positive economic profit.

## 1.2 Key numbers (use exactly)
| Item | Value | Status |
|---|---|---|
| SMB share of Amazon Business spend | ~60% of GMS | ✅ (Project summary says "more than 60%"; "65% of revenue" appears in the Project summary and older docs: use 60%) |
| SMB approval before | 4% (vs. a much higher enterprise rate; the exact rate is not on record) | ✅ |
| SSR (small, no sales agent) customers approved | 15% approved, but only 5% of those actively used the open credit line | ✅ Project summary |
| Customers lost to lack of credit | ~100K a year, ~3% of annual GMS | ✅ (one variant says 3% of customers: ignore) |
| Approved customers who accepted offers (before) | ~1% accepted | ✅ Project summary |
| Bureau data missing | ~60% of target customers | ✅ Project summary ("reportedly" in Dossier) |
| Old minimum credit line | $10,000 | ✅ Project summary |
| New minimum credit line | $1,000 | ✅ Project summary |
| Approval after | 15% (older docs: "10% increase in approval") | ✅ |
| Incremental spend | $71M (~1% revenue) | ✅ |
| Customers reached | **50K+** (confirmed 2026-11-12; library, resume, LinkedIn, and the older "Situation statements" and "Phase 3" docs). The Project summary and sizing sheet say 250K: do not use. | ✅ O1 resolved |
| Economic profit | > 0 | ✅ |
| Loss reduction from adding enterprise customers | ~6–8% (simulation) | ✅ |
| Launch pulled forward by choosing batch | ~3 months | ✅ A4 |
| Vision goal | credit to 20% more SMBs and +3% incremental Amazon GMS in 2 years | ✅ Project summary |
| PBI 2.0 headcount | ~1 science HC | ✅ older docs |
| Enterprise personalization | $15M incremental revenue | ✅ library, Dossier |
| Bureau integrations | +17% data coverage, +7% approvals | ✅ library, Dossier |
| Onboarding redesign | 50% lower abandonment (7-page → 1-page prefilled) | ✅ library, Dossier |
| Old figures to avoid | 1M customers / $7B GMS / $40B 3-year ambition; $1B revenue vs. $10M losses; "20% active-user growth"; "25% incremental customers / $2B incremental revenue" and "30% user increase / doubled top line" (older notes) | ⚠️ unreconciled, different scopes |

## 1.3 Scope, role and timeline
- You owned the S-team goal (one goal tracked by Amazon's senior leadership team; run with monthly VP-level business reviews). Don't say "SVP-level goals." ✅
- 0→1 product (confirmed 2026-10-25). ❓ What was new vs. PBI 1.0 beyond underwriting and checkout (O11)?
- You started leading PBI during COVID (Project summary). ✅
- Validation set: customers approved **Apr–Jul 2022**, with invoices through **Jan 2023**. Your library puts the fintech and credit role at 2022–24, and MDLC ran to Jul 2022. ❓ Be ready to say when you moved onto PBI (O10).

---

# 2. The problem and why the old approach failed

## 2.1 The problem (situation)
- COVID: SMB need for working capital rose, and Amazon underserved them. ✅
- 4% of SMBs approved, yet SMBs were 60%+ of Amazon Business GMS. ✅
- ~100K customers a year abandoned Amazon accounts, partly for lack of credit (~3% of annual GMS). ✅
- **Customer segments:** large businesses managed by a sales agent, and small/private businesses without a sales agent (the docs call them CPS and SSR; the sizing sheet also uses CPS/SSR). ✅
- **A second problem, customer experience:** of the approved customers, only ~1% accepted offers, from low awareness or sign-up abandonment (7-page onboarding). Of the SSR customers who were approved (15%), only 5% actively used the credit line. ✅
- **Market:** competitors (Staples Advantage, Grainger) were partnering with fintechs that planned about $1 trillion of investment in business credit over 5 years, so Amazon had to act fast or lose market share. ✅
- Only ~7–10% of approved enterprise customers were active users (see 7.1). ✅

## 2.2 Why the old approach failed (the "established process")
- Underwriting models had **no credit-bureau data for ~60%** of target customers, so they were marked risky. ✅
- The product required a **$10K minimum line**, which forced very high risk guardrails. ✅
- Manual credit assessment on a sample classified many of those customers as **medium risk**, i.e. creditworthy. ✅
- The previous approach did not match the business goal of giving credit to SMBs. Feature creation relied on bureau data. ✅

## 2.3 The insight
- **Missing bureau history is not missing creditworthiness.** Amazon had purchase, tenure, payment, business and prior-credit signals. ✅
- Your research showed **non-bureau data also predicted creditworthiness.** ✅
- **The fraud model's features** (Prime customers, sales volume, business registration, etc.) correlated strongly with non-flagged customers, and **customers flagged non-fraud did not default.** Fraud-clean customers with a strong Amazon history were highly creditworthy on manual review. ✅

## 2.4 Alternatives you explored
- External partner integration, integrations with multiple credit bureaus, and underwriting by product category as competitors such as Affirm do. You chose on long-term benefit vs. effort. ✅

---

# 3. The solution

**Mental model:** customer risk → maximum exposure → transaction eligibility → checkout. In questions: "Can I lend to you?" → "How much exposure will I take?" → "Will I finance this purchase?"

The system was not designed to maximize approval rate alone. The objective was to expand credit access while keeping losses acceptable and ultimately maximizing **economic profit**: the incremental business from extending credit relative to the risk of non-repayment. ✅

## 3.1 Customer-level credit assessment ("CPA"/PD model)
**What it is**
- Two ML components were framed this way in the doc: (1) a classification model predicting probability of default, and (2) a heuristics model identifying profitable product categories that could be approved even at some loss (this is TAP, see 3.2). ✅
- Built with **1 data scientist + a science manager**; you were the PM partner. ✅
- Legal approved the model. ✅

**Segments and labels**
- Target segments: (1) customers the PD model had rejected for PBI 1.0; (2) **less-risky enterprise customers who were rejected for non-risk reasons** (e.g., newly incorporated, credit lines in multiple marketplaces). ✅
- Default label: suspended and written off, or 150 days past due on a balance above a set threshold. ✅

**Data and features**
- Data: Amazon Business / Amazon.com spend, SBCC (small-business credit card) spend and assessment status, prior PBI repayment, Prime status, tenure, free-email flag, credit bureau where available. ✅
- Top features (CPA-checks list): active Prime (importance 0.08, the most important), multi-user account, % of spend from office products, lifetime AB spend, spend in the 3 months before approval, SBCC approved, tenure, SBCC applied. ✅
- A second list in the data-science-collaboration section: Prime status, last-3-months office-products revenue, lifetime Amazon revenue, **active credit-card usage**, AB tenure, applied for SBCC, and **customer segment (sales vs. non-sales)**. ⚠️ they overlap but differ; use the first list.
- Data brainstorm with Data Engineering: internal purchase data, business history, historical credit data, other credit products' data. You also asked for access to credit-history data from another Amazon credit-card initiative. ✅
- Data you deprioritized for speed: AB Wallet data, share of revenue by payment method, return-history data points. ✅

**Model selection, training, validation**
- Models compared: decision tree, random forest, balanced random forest, XGBoost; metrics ROC-AUC, PR-AUC, geometric-mean score, F1. Selected: **balanced random forest** (one summary says XGBoost). ⚠️ O3.
- Split 80/20; trained on **15 months** of data from a period when risk thresholds had been lowered (so approvals were broad); out-of-sample validation on 3 months with known performance. ✅
- Interpretability: feature-importance metrics, SHAP values, and business-facing documentation (business problem, metrics, feature importance, A/B results, simple-language approach, assumptions and limitations). ✅

**The cut-off (threshold)**
- The threshold is the probability above which a customer is declined. You compared cut-offs of 0.1, 0.2, 0.3, 0.4 and so on against precision, recall and PBI performance metrics. ✅
- You chose a cut-off that increased good customers without significantly increasing declined bad customers, because TAP optimizes losses further. ✅
- The model was deliberately **tolerant of some false negatives** (bad customers scored as good), because you wanted more customers to reach the transaction layer, where the profit-vs-loss trade-off is made. ✅
- **Your suggestion:** choose the PD cut-off that keeps out the most bad customers while giving the most customers access. You aligned this approach and the expected results with product and ML leadership. ✅
- The model objective and chosen cut-off were tied to **maximizing economic profit**: for different PD thresholds the model predicted the economic profit, and the chosen threshold maximized it. ✅ (your ruling: go with the documents; O4)

**Shadow credit line**
- Customers the PD model flagged high-risk were assigned a shadow credit line, i.e. the maximum exposure Amazon would take. Assessed using credit bureau information, AB spend history, free-email flag and prior PBI repayment data. ⚠️ its exact place in the sequence is unclear in the sources (O6).

## 3.2 Transaction-level eligibility (TAP)
**What it does**
- Passing the customer check did **not** make every purchase eligible. TAP determined the subset of transactions and product categories that could be financed for pre-approved customers. ✅
- It combined profit margin (low/medium/high) and historical losses by category. High-risk categories are not approved. Example: if ~75% of historical loss-making transactions of high-risk customers came from one category (the doc uses Gardening), that category is excluded. ✅
- Risk control: approve customers for **categories where Amazon had higher profit margin**. ✅

**Profit logic and definitions**
- **Profit = losses saved − revenue lost** (expected profit from the product minus potential loss). "Losses saved" is the cart value Amazon would lose if the customer never repaid; "revenue lost" is the expected profit from that product. For each category you weighed the profit from giving credit to extra customers against the potential losses. ✅

**Data and rules**
- PBI 1.0 purchase history to find categories with high contribution-profit margin; spend velocity; average order size; number of product groups purchased from; share of spend in high-risk groups; contribution profit from prior orders; share of returns in GMS; order frequency. ✅
- Identify high-risk ASINs and product groups from historical PBI 1.0 repayment data and write rules that decline PBI 2.0 transactions for them; also use products with high return rates and high/low margin. ✅

**Model design block (under TAP in the doc)**
- 80/20 split; out-of-sample validation on customers approved **Apr–Jul 2022 with invoices through Jan 2023**; models explored: decision tree, random forest, balanced random forest, XGBoost; selection by ROC-AUC, F1, PR-AUC. This is why "is TAP rules, ML, or both" stays open. ⚠️ O7.

**Known limitation you named**
- The cart-level checkout decision did not consider an individual customer's history with similar products, so a low-risk and a high-risk customer with the same cart got the same transaction-level assessment (a customer with a history of paying for luxury products should be less risky than a first-time luxury buyer). ✅

**Roadmap (not shipped in V1)**
- Real-time profit-margin checks at the cart and a real-time model; real-time credit monitoring of customers who are given credit. ✅

## 3.3 Fraud integration (ties to C1)
- Two stages: the **Business Fraud Score** ran before credit assessment and fed the credit model; **BRP** handled post-checkout transaction fraud, and BRP's transaction fraud controls also feed the CPA model. ✅
- A fraud email-domain blocklist from BRP suspends customers regardless of model score. ✅
- BFS threshold: precision 0.99, recall 0.25, false-discovery rate 0.01; a false positive suspends an $8K–$250K PBI line. ✅
- The Fraud team passes a customer's fraud status to the credit model. ✅
- Suspensions: fraud, insolvency, or 1 day past due. ✅
- BFS model depth: see 7.7.

## 3.4 Checkout, API and technical design
**Checkout and API**
- Credit shown as a payment option at checkout (vs. a separate credit-line workflow). ✅
- REST API with a **GET endpoint**: input customer id and cart value (API notes also mention cart category), response approved / not approved. ✅
- Backward-compatible versioning so new model versions did not break callers; documentation covering request, response, errors, versioning and sample code. ✅
- Autoscaling: the Project summary says Lambda auto-scaling; your API notes say containers on Fargate because Lambda was too costly and slow (cold starts) at high transaction rates. ⚠️ O8.
- Feature cache of Amazon internal data used for real-time assessment at checkout. ✅ (the checkout call read a precomputed assessment; see O5 for what was truly synchronous)

**API contracts and PM role**
- If a model output column or business logic changes, update the contract (input/output), manage versions and expose the new contract; keep it backward compatible; consider deployment cadence and operating cost; define request, response and exceptions (for example an exception for a customer-id case instead of a response). ✅
- Your role in API design reviews: the PM catches what should be exposed that engineering missed. ✅

**Data and refresh**
- Moving data from S3 to internal data storage, because S3 has no indexing (no key-value access, and reads and writes are expensive). ✅
- Frequency of model refresh vs. frequency of API-output refresh; a "front-loading checklist" of which data comes from which team. ✅

**Downstream systems**
- Systems store the approved credit line and exposure. Data tables capture customer id, approved yes/no, credit line, approved transactions (product groups/ASINs/quantity/sellers/total purchase), adoption status, credit-line utilization, accounts receivable, write-offs, and a PBI 2.0 vs. 1.0 flag. ✅
- **Suspension flow:** when the credit-assessment or credit-decision systems notify that a customer should be suspended or deactivated, a PBI initiator component listens and calls an update-payment-method API to change PBI 2.0 status in the database. ✅
- **BFS API:** input is customer id and the registration domain; output is block or continue onboarding. ✅

**End-to-end flow ownership**
- **Assessment:** model output for the approved credit line goes to downstream systems that store it for checkout. **Pre-checkout:** customers are notified if approved. **Checkout:** banner, description and FAQs, collecting invoice details, preference selection, applying the transaction rules, invoice experience. **Post-checkout:** invoicing. ✅

## 3.5 Customer experience
- Flow: eligibility notice → checkout selection (provide company details for the invoice, agree to terms, complete the purchase) → confirmation email → invoice by email and in the Amazon account → pay (autopay or manual) → reminders (7 days after due, then 15/20/25/35/45). Returns produce a credit note and the invoice closes. Customer service explains amounts due; unresolved cases go to collections (GAR). ✅
- **Original design choice:** not communicating the credit limit in advance, as a risk control. ✅
- **After concept validation:** eligibility shared at the start of each month (see 4.1). ✅

---

# 4. Validation, launch and risk controls

## 4.1 Customer validation (your ruling)
- Before building, you tested the concept with **20–30 potential customers** and got a **lukewarm** response. ✅
- Feedback: not knowing monthly eligibility made it hard to plan monthly purchases. ✅
- Change: share each month's eligibility at the beginning of the month. ✅
- ❓ Not recorded: exact customer quotes, who ran the sessions, how you recruited them (O13).

## 4.2 Launch and experimentation
- Controlled launch to **~5% of customers**; you measured approvals, offer acceptance, downstream spend/revenue and loss rates and saw favorable results. ✅
- Older "Situation statements" doc: two phased experiments approving only **5% and then 15%** of model-approved customers, then a dial-up to **100%**, assessing approved customers, active customers, incremental spend and failed repayments before each step. ✅
- In the in-house-vs-third-party trade-off you ran: **pilot to 10 customers, then 5%, 15%, 50%, 100%**, checking repayment rates every 3 months before each step. Another variant says 100 → 1,000 → all. ⚠️ O2. (Your plan: say "5% first, then phased.")
- Customers were launched with lower initial credit limits; limits increased based on purchase history. ✅

## 4.3 Monitoring and risk controls
- Key metrics watched: approved customers, active customers, incremental spend, 1-day-past-due payments.
- Risk metrics: loss rate (a "loss rate above 25%" line appears in the notes, ❓ definition unclear); **1 day past due triggers immediate suspension** as a conservative approach.
- Any delinquency: decline for future transactions.
- Advantages of transaction-based underwriting: it used internal sales data and reduced reliance on credit-bureau data; it reduced risk because only certain transactions were approved instead of a blanket credit line. ✅

---

# 5. Decisions and trade-offs

| Decision | Alternative | Why | Status |
|---|---|---|---|
| Rebuild underwriting on Amazon data; lower the minimum line to $1,000 | Keep bureau-led, $10K line | Missing bureau ≠ not creditworthy; manual review showed medium risk | ✅ |
| Optimize for economic profit, not approvals | Maximize approval rate | Approval alone raises losses | ✅ |
| Add less-risky unapproved enterprise customers | SMB-only launch | Data Science's simulation of the initial target customers showed potential loss; you suggested including enterprise customers rejected for non-risk reasons (newly incorporated, credit lines in multiple marketplaces), who are the safest and absorb losses from riskier approvals; the updated simulation showed ~6–8% lower potential loss; you aligned engineering to build the extra integrations | ✅ **pre-launch simulation** (your ruling) |
| Build in-house | Third-party/outsource | Builds long-term credit capability without bureau data (if successful, approves many more customers: a multi-billion revenue uplift); short-term risk of losses mitigated by a phase-wise rollout; limited analysis of third-party providers | ✅ (older econ figures: ignore) |
| Batch customer assessment + live eligibility check | Real-time model | Faster launch (~3 months); what must be fresh is transaction eligibility; real-time stayed on the roadmap | ✅ A4 |
| Launch with fewer data sources | Wait for AB wallet, payment-mix and return-history data | Speed vs. quality | ✅ |
| Customer-level and transaction-level layers | Blanket credit line | Approving a customer is not approving every purchase; lower exposure | ✅ |
| Lower initial credit limits, decline after any delinquency, raise limits with history | Full limits at approval | Contain short-term risk to a segment considered risky | ✅ |
| Credit not communicated in advance (original) → monthly eligibility (after concept validation) | Hide eligibility | Risk control first; customers needed it to plan purchases | ✅ |

---

# 6. People, execution and your role

## 6.1 Stakeholders and who owned what
- **Data Science:** PD model and TAP rules. **Data Engineering:** features, tables, data capture. **Engineering:** checkout, APIs, caching, downstream integration, model/version contracts. **Design/CX:** checkout presentation, messaging. **Technical team:** website changes to display PBI as a payment method. ✅
- **Credit Strategy Operations:** manual credit assessment for customers the model declined; SOP for approval, increase, suspension, fraud and insolvency criteria. ✅
- **Fraud team and BRP:** fraud status and transaction fraud controls feeding the CPA model. ✅
- **Finance & Accounting:** P&L generation, payment-mix reporting, goal tracking. **PBI 2.0 ops metrics tracked:** spending customers, variable costs, actual write-offs, bad debt, past dues, accounts receivable. ✅
- **Legal:** model approval. **GAR:** dunning and collections. **Customer Service:** usage, refund and payment-policy queries. **Marketing:** email marketing of PBI to approved customers. **Leadership:** alignment on multi-year growth goals, risk appetite, rollout sequencing, roadmap trade-offs. ✅
- Credit analyst tools: you built tools for credit analysts and automated parts of their work (library: one line). ❓ **No detail in these docs**; the Central Rules Engine (7.5) may be the project (O12).

## 6.2 How you ran it
- Annual OKRs, quarterly milestones, biweekly sprints, status updates and ongoing communication mechanisms; you also designed the new product name in line with customer requirements. ✅
- **Monthly VP-level business reviews**; the S-team goal. ✅
- You rallied leadership and "troops" across science, engineering, legal and design around a vision of credit for 20% more SMBs and +3% GMS in 2 years. ✅

## 6.3 Collaboration with data science (for "how do you work with scientists?")
- You framed the business objective and customer problem; aligned the ML objective to the customer problem; ensured the ML lifecycle (data exploration, model selection, testing, post-model monitoring) stayed aligned to business and customer objectives. ✅
- You collaborated across problem definition, ML objective, data engineering and data science collaboration, ML approach, testing/exploration, implementation and performance management. ✅
- You decided where PM leads vs. where the scientist leads. ✅
- You pushed to include enterprise customers rejected for non-risk reasons to keep within loss targets. ✅
- Why it mattered: incorrect recommendations could underserve customers or generate significant losses for Amazon. ✅

## 6.4 What you did *not* do (be honest)
- Data Science built and validated the models. ✅
- You did not run fair-lending review; Amazon had its own practices. The model used business-level data only; owner personal attributes and ZIP code were excluded. ✅
- You do not have a recorded enterprise approval rate. ✅

## 6.5 Results
- Approval 4% → 15%; $71M incremental spend (~1% revenue); economic profit > 0. ✅
- No credit losses after full launch (library). ✅
- Customers: ⚠️ O1.

---

# 7. Related PBI-area work

## 7.1 Enterprise adoption and personalization
- **Adoption gap (~7% of eligible customers adopting):** customer research found low awareness (low impressions and clicks on marketing); benchmarking against other credit products showed onsite beat email; a small test confirmed higher impressions, clicks, configurations and activations. ✅
- **Configuration propensity model:** 260K approved accounts, 16% had configured, 300+ features cut to 26 (using built-in importance, permutation importance and SHAP, then removing multicollinearity), classification, 80/20 split, AUC. Configuration windows of 90 days (SSR) and 150 days (CPS), chosen because ~91% and ~89% of configurations happen within those windows. Segments: >0.7: ~11K accounts (18%), ~54% configure; 0.5–0.7: ~8K (14%); <0.5: removed from aggressive targeting, lifting the targeted configuration rate from ~17% to ~40% in validation. ✅
- **Behavioral insight:** recently approved, engaged businesses with a credit need configure more; entrenched alternative credit methods (more credit cards, higher business-card share of spend, long tenure) configure less. ✅
- **Personalization:** matrix factorization on a customer-message interaction matrix (~1M users, hundreds of credit and messaging features) plus a classifier using business profile, purchase history, prior message interaction, credit-offer details and message attributes; A/B tests, not offline metrics, decided effectiveness. Channels: email, MAPLE placements (cart, payment, thank-you pages), Amazon Business onsite banners; message types: credit offers, terms, testimonials, industry-specific, offers on frequently purchased categories. Result: **$15M** incremental revenue. ✅
- **Industry-personalized creative** (small-business card): ~15% CTR lift in a 6-week test. ✅
- **Policy:** high propensity → frequent personalized emails and onsite offers; medium → incentive campaigns; low → standardized communication only. ✅

## 7.2 "Net 30-day" naming and branding (a separate story)
- Research with target customers favored "Net 30 day" over generic names like "Bill me later with Amazon Business"; you benchmarked invoice/terms/net-30 language; the pilot split treatment names and the new name drove better adoption. ✅
- You hard-coded the 30-day term for the MVP because a variable term would need dynamic handling for 45/60-day terms. ✅
- A Director challenged why a new name was needed; branding on some pages was >25 weeks of effort, so you limited it (a ~4-week workaround on one page). ✅

## 7.3 Onboarding simplification
- Only 15% completed the 7-page setup; customers came back ~1.5 times; most abandonment happened when adding a billing address. Fix: pre-fill and auto-save. The experiment showed higher configuration and activation, with slightly higher losses that were not significant, so you scaled it. Result: 50% lower abandonment. ✅

## 7.4 Credit-bureau and Moody's integrations
- **Bureau integrations:** +17% data coverage, +7% approvals. ✅ (implementation depth not in sources)
- **Moody's integration (credit-data evaluation):** goal to add data for customers without bureau coverage and improve risk prediction for those with it; 3-year cost ~$2.8M; evaluated on a 100K sample (50K configured customers with ≥1 year of history, 50K non-configured); Moody's matched 46% automatically, grades A/B/C accepted; financial data for ~36% of the population, default-probability data (Moody's EDF-X, up to a 10-year term structure) ~45% coverage; revenue data staleness (95% from 2021). Headcount: 1.5 science, 1.1 tech. ✅

## 7.5 Central Rules Engine (3-year vision, 2023)
- Credit Systems had 300+ business rules orchestrating credit decisions (e.g., a model predicts 0.7 default probability, a rule decides what that means). Portfolio managers changed ~50 rules a year. ✅
- Problems: enumerating rules took 4–5 months across teams in 2022; each rule change took ~3 months of engineering/science roadmap; ~3 tech and ~1 science headcount a year went to rule changes; the business was expected to grow 3X. ✅
- You designed: a UI to review rules, a UI to add/edit rules, rules simulation, deployment, and governance/access controls. Roadmap: 2023 alignment and enumeration; 2024 MVP; 2025 onboard small-business loans; 2026 onboard PBI. ✅
- You prioritized loans over line-of-credit onboarding despite pushback (loans: easier lift, lower risk; line-of-credit was a ~$10B business vs. ~$3B). Result noted: 9 SDEs and 3 science HC over 3 years. ✅
- **This may be your best C4 example** ("tools for credit analysts / risk teams"): its customers were portfolio managers and manual credit operations. ❓ Your evidence notes say an MVP was built and then reprioritized toward third-party lending; what shipped, who used it and the impact are not recorded (O12: you will share a different document first).

## 7.6 Other PBI-area facts
- **Headcount lines:** PBI 2.0 itself took ~1 science HC; model maintenance ~3 science HC and ~1 tech HC; data privacy/compliance ~0.6 HC. ✅
- **Pivot to third-party (external bank) lending** in the lending business, and a loan-cap increase from $750K to $1M (simulations suggested up to $4M; you chose a gradual increase). ✅ ❓ how these relate to PBI.
- Adjacent, not confirmed as PBI: a no-code credit-strategy platform (~4% fintech revenue uplift). ❓

## 7.7 BFS model depth (for C1 follow-ups)
- **Objective:** predict a US customer's fraud propensity at Amazon Business registration, from business profile, domain activity and credit-bureau data; runs daily. Binary classification. ✅
- **Data:** ~15,000 fraud and ~150,000 non-fraud labels; 70/15/15 split; 165K customers registered in 2020 (13% of new registrations). ✅
- **Feature groups:** consumer-account history; business profile (employee count, revenue, seller or not, city/state); web-traffic ranking; credit-bureau record; domain (WHOIS) age and usage frequency; other accounts under the same domain (suspensions, PBI line, write-offs); suspicious-behavior flags (multiple marketplaces, moving between legal entities, US business registered abroad); derived cross-checks between data sources; a BRP fraud email-domain blocklist. ✅
- **Top patterns:** fewer days between domain creation and registration means higher fraud; US customers with foreign-registered domains are riskier; an email domain used more than 7 times (except big free providers) is riskier; domains with fewer inbound links are riskier. ✅
- **Training:** SMOTE for class imbalance; random forest and XGBoost with random-search tuning and k-fold cross-validation. ✅
- **Base model:** precision 0.88, recall 0.86, AUC 0.86, false-discovery rate 0.12. A false positive suspends a PBI line of **$8K–$250K**, roughly a $240K spend reduction per case in the doc's example. **Chosen threshold:** precision 0.99, recall 0.25, FDR 0.01, trading recall for fewer false positives, with BRP post-checkout controls catching the rest. Rule: the fraud email-domain blocklist suspends regardless of score. ✅
- **Label challenge:** not enough labels at the business ("leg") level; you inferred business-level fraud status from user-level labels using the fraud-user ratio, and **87% of confirmed fraud businesses had at least 20% of their users flagged as fraud at user level.** ✅

---

# 8. Conflicts and open items

## 8.1 Resolved 2026-11-12
- **O1. Customer count: 50K+** (your decision). The Project summary's "250K active customers" and the sizing sheet's 250,000 line (likely a projection) are not used.
- **O9. Losses:** you have no loss data from the 5% launch. The loss story is Data Science's pre-launch simulation, which led you to add less-risky enterprise customers (~6–8% lower simulated loss). Do not tell it as a launch miss and do not claim "I hadn't validated the economics."

## 8.2 Source conflicts (decide wording)
- **O2. Rollout sequence:** 5% → 15% → 100% (older doc); 10 → 5% → 15% → 50% → 100% (Project summary); 100 → 1,000 → all (another variant).
- **O3. Production algorithm:** balanced random forest vs. XGBoost.
- **O4. Threshold wording** (your ruling: go with documents): "the model objective and cut-off were tied to maximizing economic profit; the customer-level cut-off was tolerant because TAP controls losses."
- **O5. Batch vs. real time:** what was precomputed (customer risk and exposure) and what was evaluated synchronously (transaction eligibility rules)? The feature cache and "real-time model assessment" appear in the same notes.
- **O6. Shadow credit line:** where it sits relative to the PD approve/reject step.
- **O7. TAP:** rules, ML, or hybrid.
- **O8. Lambda vs. Fargate** for the API.

## 8.3 Only you know
- **O10.** When you moved onto PBI, relative to MDLC ending Jul 2022.
- **O11.** What was new vs. PBI 1.0, beyond underwriting and checkout.
- **O12.** What you built for credit analysts: you will share a different document; we then decide whether the Central Rules Engine (7.5) is included. Not the Central Rules Engine for now.
- **O13.** How you recruited the 20–30 customers for concept validation and what they said.

---

# 9. Follow-up question bank (with answers from the sources)
| Question | Answer from sources | Gap |
|---|---|---|
| Why did the old approach fail small businesses? | No bureau data for ~60%; $10K minimum line; manual review showed many were medium risk | none |
| What was new? | Amazon-data PD model; $1K minimum; transaction-level eligibility; checkout; monthly eligibility | O11 |
| How did you know they were creditworthy? | Manual credit assessments; strong Amazon history; fraud-clean customers rarely defaulted; non-bureau data predicted creditworthiness | none |
| Why not just lower thresholds? | Redesigned the layers; exposure caps; category exclusions; economic profit | O4 |
| What is economic profit? | Revenue/contribution profit on the extra spend minus credit losses (cost of capital is not mentioned in any source) | none |
| How did you set the cut-off? | Compared cut-offs (0.1, 0.2, 0.3, 0.4…) on precision, recall and PBI metrics; tolerant of false negatives because TAP controls losses; economic profit | O4 |
| How did you validate? | 15 months of training data from a low-threshold period; 80/20; 3-month out-of-sample; 5% experiment | O2 |
| Why batch? | Faster launch; only transaction eligibility must be live; real-time on roadmap | O5 |
| How does checkout decide? | GET with customer id and cart value; reads the precomputed assessment; TAP rules | O5 |
| What did customers say? | Lukewarm; wanted monthly eligibility to plan | O13 |
| What went wrong? | Simulation showed potential loss before launch; fixed by adding enterprise customers (6–8% lower). No actual loss data from the 5% launch. | none |
| Build vs. buy? | In-house for long-term capability; staged rollout; limited third-party analysis; alternatives (partners, multiple bureaus, category underwriting like Affirm) explored | none |
| How did you work with Data Science? | 6.3 | none |
| How did you handle fraud? | 3.3 and 7.7 | none |
| How do you monitor? | 4.2 and 4.3 | none |
| Fairness/regulation? | Business-level data only; excluded owner attributes and ZIP; Legal approved the model; no fair-lending review by you | none |
| Biggest risk? | Short-term losses from risky customers; mitigated by exposure caps, small start, delinquency rules | none |
| What did the checkout API return? | Approved or not for a customer and cart value; backward-compatible versions; exceptions defined in the contract | O8 |
| What would you do differently? | ❓ your answer | yours |
| How big was it? | 4% → 15%, 50K+ customers, $71M | none |

---

# 10. Delivery notes from past feedback
11. Prepared follow-up answers for the C3 story (recorded at the top of your Project summary)
- Too many details across different problems; **the key problem (finding the risky customers) got lost.** Simplify the earlier points and summarize.
- "No leading of teams": show leadership more clearly.
- You said **"we" a lot**; say "I" for what you did.
- Say something that catches the interviewer's eye early; give the number of users and your span of influence in the introduction.

---

# 11. Prepared follow-up answers for the C3 story (final 2026-11-12)
Spoken, about 60–90 words each, written in plain language from the sources above. **[YOURS]** marks what only you can supply; **[CONFIRM]** marks a fact to verify before you say it. Do not state anything marked unresolved in Part 8. The questions follow what your answer actually says.

**1. How did the credit decision work at checkout?** (follows "launched it at checkout while restricting credit-based purchases in high-risk categories")
"Before a customer ever reached checkout, we had already assessed how risky they were, so checkout didn't have to do any heavy calculation. When they checked out, the system looked up that stored assessment and checked whether this particular purchase was allowed, for example whether the product was in a category we excluded. I chose this over scoring live at checkout because a business's creditworthiness changes slowly. It was simpler to build and launched about three months sooner." **[CONFIRM exactly what ran live: O5, O8]**

**2. What is economic profit, and why use it instead of approval rate?**
"Approval rate only counts how many businesses we say yes to. But every yes can either make money or lose money. Economic profit is what we earn on the extra purchases minus what we lose when someone doesn't pay. If I had chased approvals, we would have said yes to risky customers and lost money. So I picked the cut-off where economic profit was highest, not the one where we approved the most."

**3. How did you limit the risk of lending to riskier businesses?**
"In layers. Riskier customers started with lower credit limits, and limits rose only as they built a purchase history. We blocked product categories that caused most of the losses, and focused on higher-margin products. If a customer was ever late, we declined their next purchases, and one day past due triggered suspension. Fraud checks also ran before credit was extended."

**4. How did you know Amazon's own data could predict who would repay?**
"Three checks. First, we manually reviewed customers the old system had declined, and many looked creditworthy. Second, customers who passed our fraud checks and had a long history with Amazon almost never defaulted. Third, we tested it before trusting it: we built the model on 15 months of past data, checked it on three months it hadn't seen, then ran a 5% live launch before scaling." (If asked about the model: "a tree-based model, and we used feature importance so the business could understand it." **[CONFIRM O3]**)

**5. What key metrics did you track?** (new)
"Four numbers at each rollout stage: how many customers were approved, how many actually used the credit, how much extra spend it drove, and how many payments were even one day late. The first three told me whether it was working. The last was my early warning on risk, because one day past due triggered suspension. I only moved to the next stage when those looked healthy, and I checked repayment every three months. Overall, the test was whether economic profit stayed positive." **[CONFIRM the repayment-check cadence you used in the 5% stage (O2)]**

**6. Why did you originally hide credit limits, and then change?**
"Not showing the limit in advance was a risk control in the original design. But when I tested the idea with 20 to 30 customers, they told me they couldn't plan their purchases without knowing their eligibility. So we shared it at the start of each month." **[YOURS: one sentence on how you weighed the risk of showing it]**

**7. Tell me about the customer testing.**
"Before investing in development, I tested the idea with 20 to 30 potential customers. The response was lukewarm, and the reason was specific: without knowing their monthly eligibility, they couldn't plan purchases. That changed the product, so we shared eligibility every month instead of only revealing it at checkout." **[YOURS: how you recruited them and one thing a customer said (O13)]**

**8. Why add enterprise customers to an SMB product?**
"Data Science's simulation showed we could lose money on the riskier small businesses. Some enterprise customers had been declined for reasons that had nothing to do with risk, like being newly incorporated. They are the safest customers, so adding them offset losses from riskier ones. The updated simulation showed about 6 to 8% lower potential loss, and I got engineering to build the extra integrations." (No absolute loss figure is on record: don't quote one.)

**9. What was your role versus Data Science's?**
"Data Science built and validated the models. I defined the customer problem and the goal, pushed for economic profit over approval rate, suggested how to set the cut-off and which data to use, and decided to include the enterprise customers. I aligned science, engineering, legal and leadership, and ran the launch."

**10. Fairness and regulation?**
"The model only used business-level data. We excluded owners' personal attributes and ZIP code, produced reasons for declined applicants, and Legal approved the model. I didn't run a fair-lending review myself; Amazon had its own practices for that." **[CONFIRM against the library's regulated-data entry]**

**11. What were the results, exactly?**
"Approval went from 4% to 15%, reaching more than 50,000 customers and generating $71 million in incremental spend, about 1% of revenue, with positive economic profit. Getting people to use the credit was a separate challenge: only 5% of approved smaller customers were actively using it, which our personalization and onboarding work then addressed." **[CONFIRM the library's "no credit losses after full launch" wording before saying it]**

**12. Build versus buy?**
"I built it in-house. It gave us a way to assess credit that didn't depend on bureau data, so we could approve many more customers over time. The risk was short-term losses, which I limited with a phased rollout. I looked at external partners, multiple credit bureaus and category-based approaches like Affirm's, and chose on long-term benefit versus effort. I'll be upfront that I had limited time to analyze third-party providers."

**13. What would you do differently?**
"The checkout rules looked only at the cart, not at a customer's own history with similar products, so someone who had repaid luxury purchases looked the same as a first-time buyer. I had real-time cart-level checks on my roadmap, and I'd bring them forward." **[YOURS: confirm this is what you'd say; don't claim a launch miss]**

**14. How does this relate to Radar?**
"It's the same trade-off Radar makes: letting good customers through while keeping bad actors out. In credit, a wrong decline cost us a customer and sales, and a wrong approval cost us a loss. I used layers so no single control had to be perfect: a model that tolerated some misses, then category rules, with fraud checks feeding in. For Radar, I'd start by putting a cost on each kind of mistake, then layer the controls."
