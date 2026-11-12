# Credit analyst tools and Central Rules Engine: fact sheet (for the Stripe C4 answer and follow-ups)

Built 2026-11-12 from: your Drive doc "SMBF_PBI+Convergence+Vision_V5" ("ABPL Tech – 2025 Vision (3YAP)"; the **Vision doc**), your "Situation statements of different projects" doc (Central Rules Engine section), your library (A14 note), and your answers on 2026-11-12. There are no supporting documents for what shipped, so the "shipped" facts below are **your statements**.

**Legend:** ✅ your statement or your doc · 📄 in the Vision doc, which was a **proposal** (some numbers are estimates) · ❓ you don't remember / not recorded.

## 1. What you confirmed (your words, 2026-11-12)
- ✅ You **wrote the Vision doc**.
- ✅ You **shadowed and interviewed about 10 credit analysts across both teams** (PBI and the small-business loan team) and **reviewed their workflows and existing tools**.
- ✅ The trigger: your role was to drive PBI growth; as the business grew, manual reviews would grow too, so the analysts' workflow had to be automated to scale.
- ✅ The numbers in the Vision doc (40+ data points, 25+ screens, 4+ systems, 90+ minutes per case) were **estimated with the team**.
- ✅ **All the tool features were shipped.** ❓ the exact feature list and dates.
- ✅ You **designed the whole product solution** and **aligned director-level product and engineering leadership**.
- ✅ **Central Rules Engine MVP:** you designed it; all features shipped **except access control**; **manual credit operations used it to manage rules without depending on engineering.**
- ❓ You don't remember: a specific case you watched, what surprised you, how you prioritized, the detail you refused to ship without, the rollout, and impact numbers.

## 2. The analysts' problem (📄 Vision doc, estimated with the team)
- Analysts across the two product lines used **3 sets of tools** (CAD for PBI; Unicorn ATLAS and Sentinel for the small-business loan team) to gather risk signals, approve/decline/update credit, communicate with customers and collect on delinquent accounts.
- Seven pain points:
  1. 40+ data points across 25+ screens, 4+ systems and 2+ Excel reports; about 90+ minutes per case.
  2. Collected metrics were reconciled by hand against SOPs to evaluate risk and next steps.
  3. Required communications (with customers, sales and the approval hierarchy for PBI) lived outside the case system and used manual templates from SOPs; no consistent templates and no way to track past communication except manual notes.
  4. Case assignment was entirely manual and not based on the right priority.
  5. Case status did not update automatically; analysts reviewed the approvals tool or notes.
  6. Data across the analyst lifecycle was not recorded in a standard template, so it could not support audit or better underwriting.
  7. New alternative data would need duplicate integrations in 3 front-end tools.
- Scale: 53 Credit Ops full-time equivalents (31 PBI, 22 small-business loans), a planned 38% rise in 2023, and **142 in three years without automation (168% increase)**. 📄

## 3. What you proposed and (per you) shipped
**Central front-end tool (built on ATLAS):** (a) **case queue and assignment:** separate queues per product, automatic assignment to the right analyst tier by configurable criteria (first-in-first-out, rule severity breached, experiment or customer codes, dollar value), manual reassignment allowed; (b) **case assessment screen:** model-predicted underwriting score, financial data with **red/yellow/green thresholds**, bureau and alternative data, agreements and approval method, and **drop-down actions** (call/email seller, email legal, third-party collections, line increase/decrease, suspension), so an analyst can decide without opening the SOP; a Credit Ops manager can edit or remove attributes no longer needed; (c) **automatic case updates:** reason for case creation, status, assignee, date assigned, payment status, **root cause (drop-down), payment assistance offered (drop-down), reason assistance was denied (drop-down)**, in-house or third-party collections; cases cure automatically after repayment assistance executes; repaid loans re-enter portfolio monitoring; a follow-up list prioritized by due date; (d) **communications:** pre-approved customer and sales templates, notes from past communication, notifications when a customer replies; (e) **central reporting** of the data analysts need to judge their decisions. 📄
**Estimated benefit (📄 proposal):** a central dashboard saving about **80** Credit Ops full-time equivalents and a central rules engine about **9**, **89 in total** against the 142 projected; **P0 ask:** migrate CAD and Sentinel to ATLAS with automatic queueing and assignment.

**Central Rules Engine (your design, MVP shipped except access control):**
- Problem: Credit Systems had 300+ business rules orchestrating credit decisions (a model scores 0.7 default probability, a rule decides what that means). Portfolio managers changed ~50 rules a year. ✅ (Situation statements doc)
- Before: each rule change took about 1 week of engineering effort and up to **3 months** to get onto an engineering roadmap; ~5 rule changes a year per product (rising to ~8); enumerating all rules took 4–5 months in 2022; ~3 tech and ~1 science headcount a year went to rule changes. 📄
- Designed: a UI to review all rules ("rules lake" with purpose, history, implementation criteria), a UI to add/edit rules (versioned), rules simulation, deployment, and governance/access controls; rules partitioned by tenant, geography, product line and credit lifecycle stage; an orchestration layer picks the right rule set by geography, product and lifecycle stage and returns pass/fail for a downstream action. 📄
- **Shipped (your statement):** everything except access control. Used by **manual credit operations** to manage rules without engineering. ✅
- Roadmap in the Situation statements doc: 2023 alignment and enumeration; 2024 MVP; 2025 onboard small-business loans; 2026 onboard PBI. You prioritized loans first despite pushback from the line-of-credit data scientists (easier lift, lower risk; loans ~$3B vs. line of credit ~$10B). The doc notes 9 SDEs and 3 science headcount over 3 years. ✅

## 4. Architecture context (📄, if asked "what did it replace?")
Six assessment services (CASS, CMS for PBI; LOGOS, SLAS, ACMS for small-business loans) → one multi-tenant Entity Assessment Service (EAS, launched for a non-lending Amazon team first); three analyst tools (CAD, Sentinel, Unicorn ATLAS) → one (ATLAS enhanced); multiple rule libraries → the Central Rules Engine. Shared services already existed: bureau data (BCDS), model input/output store (RAP), model deployment (MDLC), customer data (CDS), product definition (PDS), product selection (PSS). Estimated saving: ~3.3 engineering years of maintenance work, plus compliance, alternative-data and multi-product work. 📄

## 5. Industry-standard credit-underwriting workflow (general knowledge, to jog memory; not your facts)
Case intake and prioritization → gather data (bureau, financials, internal history, any external data) → compare against policy and risk thresholds → decision (approve, decline, adjust limit) with a documented reason → communicate with the customer/sales → record for audit → monitor and follow up. Your tool mapped to these stages: queue (intake), assessment screen (gather and compare), drop-down actions and root-cause fields (decide and record), communication templates, auto-updates and follow-up list.

## 6. Open items
- ❓ Impact numbers (time per case, cases per analyst, errors, headcount avoided). If none, use the **estimates as estimates** ("we estimated…") and the qualitative result for the rules engine.
- ❓ Which of the designed features analysts valued most, and anything they pushed back on.
- ❓ The detail you refused to ship without (pick from 3.a–e only if it is true).
- ❓ Dates, and which team's tool each shipped into.
- ❓ What access control would have added, and whether it shipped later.
