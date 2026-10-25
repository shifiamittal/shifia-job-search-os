# Stripe L4 Story Bank (both Radar roles)

Built: 2026-10-25 · For the hiring-manager round and the rest of the loop (the recruiter screen uses the short answers in `2026-10-24-stripe-radar-recruiter-screen.md`).
Roles: PM, Radar – Fraud and Abuse Prevention (job 8306158) · PM, Radar (job 8301646, integrations, partners, monetization)
Sources: `context-library/experience-library.md` (A21 BFS, A10, A13, A6, K1, K12, K20, K32 and others), your BFS PRFAQ, BFS model doc and BFS 2.0 launch note (read 2026-10-25), the Stripe L4 rubric notes in `insider-data/company-intel/stripe.md`.

## How to use this
- **The L4 bar:** each story shows you changing something beyond the product you owned, across teams you didn't manage, with a decision that outlasted you. Every story ends with the L4 signals it proves.
- **Shape:** goal and user first (Stripe's 2024 feedback), then the situation, your decisions, the result, and what you learned. Spoken versions are about 200 words (~90 seconds). Go deeper only when asked.
- **Ownership words:** "I led the strategy," "I made the call," "data science built the model." Never "I built the model."
- **Confidentiality:** these stories use only your own impact, rounded, plus method and trade-offs. Never cite Amazon's internal fraud exposure or loss figures, segment fraud rates, exact model features or thresholds tables. Protecting that detail is itself a signal Stripe will notice.
- **Dates:** don't tie BFS to a specific year or Amazon role. If asked when: "during my time in Amazon Business Payments and Lending."

## Which story for which question

| Question type | Fraud & Abuse role | Integrations role |
|---|---|---|
| Biggest impact / proudest / product strategy you set | **S1** BFS strategy | **S1**, or K32 Keystone pricing |
| Investigated a new fraud or abuse pattern | **S2** behavioral model | S2 |
| Hard trade-off / ML decision / detection vs. friction | **S3** | S3 |
| Scope ruthlessly / speed vs. quality / engineering trade-off | **S4** blocklist launch | **S4** |
| Writing / aligning stakeholders with a document | **S5** PRFAQ | **S5** |
| Integrations, platform adoption, partners, technical dependencies | S6 | **S6** BFS adopted by 6 teams |
| Influence without authority / org-wide change | **S7** privacy policy | **S7** |
| Pricing, monetization, commercial | K32 (only if asked) | **S8** Keystone pricing and renewals |
| Disagreeing with leadership | S9 managed service vs. SaaS | **S9** |
| Developing PMs (L4 expects it) | **S10** | **S10** |
| Failure | **S11** credit-loss miss | **S11** |
| AI quality / monitoring in production | K5 quality slip (Part B, Q7) | K5 |

---

## S1. Moving fraud controls upstream: the Business Fraud Score strategy
**Use for:** biggest impact, a strategy you set, 0→1, influence across teams. **Both roles; the Fraud & Abuse lead story.**

**Spoken version (~200 words):**
"The goal was to stop fraud before it reached our business customers, without adding friction for the good ones. At Amazon Business, almost all fraud control happened after checkout. That meant we couldn't control how much fraud entered the funnel; good customers had orders held for manual review; and steps like sign-up, credit applications and adding a bank account had no fraud check at all, so teams used blunt rules. A few sophisticated fraud rings, some using bots, were exploiting that.

I wrote the strategy as a PRFAQ: one Business Fraud Score that assesses a business at registration, before any order exists, and keeps reassessing as behavior comes in, so any team can apply risk-based controls anywhere in the journey. I laid out four phases, from a core score to external risk data, real-time access and continuous assessment.

I was the PM for both versions. Data science built the models; I made the product calls. The score ended up contributing to about 60% of our upfront fraud detection, it was part of the controls that cut the small-business credit product's fraud loss rate 15%, and six teams adopted it, from buyer risk and credit to sign-up verification and Business Prime."

**L4 signals:** a problem nobody owned; strategy beyond your own product; adopted by six teams you didn't manage; a platform that outlasted you.
**Likely follow-ups:**
- *"Why not just tighten checkout controls?"* "Checkout is too late and too blunt: by then good customers absorb the friction. Assessing at registration lets you be precise early and lighter later."
- *"How did you get six teams to adopt it?"* Use S6.
- *"What did data science do versus you?"* "They built and validated the models. I set the strategy, the granularity, the precision-first goal, the launch gates and the integrations."
- *"What would you do differently?"* "Push real-time access earlier; batch scoring meant some teams waited a day for a score." (Only say this if it's true for you. If not, choose your own.)

---

## S2. Finding the attack the score missed: BFS 2.0
**Use for:** investigating a new fraud or abuse pattern (the Fraud & Abuse role's core job), data-driven decisions, customer insight.

**Spoken version (~200 words):**
"The score was catching fraud at sign-up well, but I wanted to know what it was missing. I led a deep dive into our worldwide business-customer data and found a pattern: fraudsters who passed the registration score but behaved unlike any real business before their first order. They moved through sign-up and browsing in repetitive, machine-like ways that real people don't.

That told me the gap wasn't the model's accuracy; it was the signals. A registration snapshot can't see behavior. So I launched BFS 2.0: a behavioral model that keeps assessing each new customer from registration until their first transaction, using non-transaction behavior like browsing and account settings. I partnered with the buyer-risk team to reuse insights from their gestural-data model, and added IP intelligence from internal and external sources, with a blocklist that stops registrations and orders from suspicious IPs.

It caught fraudsters about 10 days earlier on average than our buyer-risk systems, lifted upfront detection about 15%, and flagged about $2.7 million in fraudulent credit lines. Next, I set up a false-positive program with a target below half a percent, so good customers didn't pay for it."

**L4 signals:** you found the problem yourself; a durable defense (a new model and a blocklist), not a one-off rule; partnership with another team's science.
**Likely follow-ups:**
- *"How did you know they were fraudsters, not unusual customers?"* "Confirmed fraud outcomes downstream. Labels arrive late, so we made explicit assumptions about when fraud happened, and we watched false positives separately."
- *"How long do you keep assessing someone who never orders?"* "That was a trade-off I made: detection improves with a longer window, but inference cost grows for customers who may never transact. We compared performance across different time-to-first-order windows and picked the one that balanced detection against inference cost."
- *"Would you do it as a rule instead?"* "A rule would have caught one ring and broken when they adapted. Behavior generalizes."
- Don't name exact features or blocklist mechanics; say "behavioral and IP signals."

---

## S3. Detection vs. customer friction
**Use for:** hard trade-offs, ML product decisions, how you measure success. **This is the core trade-off in Radar.**

**Spoken version (~190 words):**
"In fraud, the expensive mistake isn't always missing fraud; it's blocking a good customer. For the Business Fraud Score, a false positive meant suspending a legitimate business's credit line, which could run from thousands to hundreds of thousands of dollars.

So I made precision the priority over recall, on purpose. The score ran at registration, and the buyer-risk team's controls still checked every order after checkout, so the score didn't need to catch everything; it needed to be right when it acted. Before launch, I required a three-week shadow run on live traffic and a back-test, because a model can look great offline and drift on real data. I set the launch threshold where the score was right about 99% of the time, accepting that it would catch only about a quarter of fraud on its own. On live shadow data, it made essentially no false suspensions at that threshold.

Then I kept measuring the friction side: a false-positive program targeting under half a percent. The principle I took away: decide which mistake is expensive, and design layers so no single control has to be perfect."

**L4 signals:** a policy-level decision for the product; layered defenses across teams; a measurement system for friction.
**Likely follow-ups:**
- *"Why 25% recall? Isn't that low?"* "On its own, yes. But it was one layer. Checkout controls and a blocklist rule caught the rest, and the score made those layers more precise."
- *"How would you set this for Radar?"* "Per segment. An enterprise merchant and a new small business tolerate friction very differently, so I'd let the threshold vary with the cost of a false positive."

---

## S4. Unblocking the BFS 2.0 launch
**Use for:** scoping ruthlessly, speed vs. quality, working with engineers, technical fluency. **Good for both roles.**

**Spoken version (~160 words):**
"Midway through BFS 2.0, we hit a dependency. The IP blocklist was supposed to live in our ML platform's feature store, and that work was estimated at 22 weeks, which would have pushed the launch out a full quarter. Fraud rings don't wait a quarter.

Engineering proposed hosting the blocklist in a refreshable in-memory cache instead: about a week of work. I made the call to do it, with one condition: the design had to guarantee the cache always loaded the latest version of the list, with no risk of serving corrupted or stale data. That was the real risk, not the storage choice. Once that was designed in, we shipped on schedule, and the blocklist and IP rules ended up contributing about 10% of the new upfront detection."

**L4 signals:** a launch-level trade-off; you named the actual risk; the long-term option was preserved.
**Likely follow-ups:**
- *"What did you give up?"* [Your answer. One likely candidate: reuse, since the feature store would have made the list available to other models. Say it only if that was the real trade-off.]

---

## S5. The PRFAQ that started it (writing)
**Use for:** "Stripe is a writing culture," aligning stakeholders with a document, communicating complex problems.

**Spoken version (~150 words):**
"I wrote the Business Fraud Score PRFAQ instead of a traditional requirements document, because the hard part wasn't the requirements; it was getting engineering, buyer risk and leadership to agree on a different strategy. It opened with the customer outcome: a single score, at sign-up, that any team could use. The FAQ took on the hard questions directly: how big the problem was, why business fraud is harder than consumer fraud, the trade-off between fraud control and friction, how the score fits with buyer risk's existing models, and a four-phase roadmap with a long-term vision beyond Amazon Business. Credit Systems engineering used it to start storyboarding and technical design, and its phases became the roadmap through BFS 2.0. My rule for writing: goal and customer first, then the decision and its trade-off, then the evidence."

**L4 signals:** a document that changed direction across teams; it became the roadmap.
**Likely follow-ups:** *"What pushback did you get?"* [Your answer: what engineering or buyer risk challenged, and what you changed.]

---

## S6. A platform other teams built on: BFS adoption
**Use for:** integrations, platform adoption, partners, technical dependencies. **The integrations role's lead story.**

**Spoken version (~180 words):**
"I designed the Business Fraud Score as a service, not a feature, because the value grew with every team that used it. The question for each team was: what decision does this score make better for you?

For buyer risk, it became an input to their fraud models: the score could flag every account on a risky domain, even ones that hadn't ordered yet, which their transaction-level models couldn't see. For credit, it removed credit lines from fraudulent customers. Sign-up verification used it to decide who to block or challenge. Business Prime used it to filter fraud out of their sign-up metrics and decide who sees a free trial. Payment verification used it to decide when to require micro-deposits, and the small-business card team used it to trigger identity checks.

Six teams adopted it. Each integration had its own dependency to manage: data engineering for offline feeds, our ML platform for serving, the clickstream team for behavioral data, and Legal for what we could act on."

**L4 signals:** cross-team adoption you drove; integration design per partner; managing dependencies.
**Likely follow-ups:**
- *"Which integration was hardest, and why?"* [Your answer.]
- *"How did you measure integration success?"* "Did the score change the partner's decision, and did their fraud or friction metric move? Adoption counted only if it changed a decision." Add a real example if you have one.

---

## S7. Org-wide policy without authority: ML privacy across Amazon Payments
**Use for:** influence without authority, org-wide change, compliance. (A10)

**Spoken version (~170 words):**
"Amazon had central teams for EU and US privacy rules, but nobody had defined how those rules applied to ML models: whether model data was in scope, or what scientists had to do. Every science team was guessing, and it was a compliance risk across Payments.

I took it on. I worked out the requirements with Legal and Amazon's privacy team: on-demand deletion, returning customer data, and deleting data when the legal retention period expires. Because it touched every team and was a compliance requirement, I presented the policy to the VP of Data Privacy, the Amazon Payments VP and Directors across Payments to get alignment. Full automation would have taken about a year and a half, so I shipped a semi-automated version in about two months and put full automation on the roadmap. It became standard platform policy across Amazon Payments, about 20 teams, and saved my org five science FTEs a year."

**L4 signals:** a problem nobody owned; alignment at two-VP level; a policy across ~20 teams.
**Follow-up to prepare:** *"What did the VPs push back on?"* [Your answer; open item in your library.]

---

## S8. Pricing that customers renewed into: Keystone.ai (integrations role)
Use the pricing answer in the recruiter prep doc (Part A). Add for L4: "This was a company-level business model, not a pricing tweak: it decided how Keystone made money as a product company. All five clients renewed, and two expanded."

## S9. Disagreeing with leadership and investors: managed service vs. SaaS
Use Part B, Q9 (K12). L4 signals: a company decision against leadership and investors, with its cost stated up front.

## S10. Developing PMs
Use "How do you develop other PMs?" in Part A (A13, K20).

## S11. Failure: the credit-loss miss (A6)
**Spoken version (~150 words):**
"When we launched credit for small businesses to 5% of customers, credit losses came in higher than expected, and we couldn't scale to the full segment. That was on me: I'd validated that customers wanted the product, but not that the controls would deliver acceptable portfolio economics. I worked with science to add a lower-risk group of larger businesses to the portfolio; our simulation showed the blended portfolio cut losses 6 to 8%. We relaunched to the blended segment with positive economics, and there were no credit losses after full launch. The lesson I still use: validate the customer opportunity and the economics separately, especially in risk products, where a good customer outcome can hide a bad portfolio."
**L4 signals:** owning a portfolio-level miss; a fix that changed the strategy, not just the threshold.

---

## Open items (your answers make these stronger)
1. **S5 PRFAQ pushback:** what engineering or buyer risk challenged, and what you changed.
2. **S6 hardest integration:** which one and why; any metric showing a partner's decision improved.
3. **S7 privacy pushback:** what the VPs or Directors pushed back on.
4. **S1 "what would you do differently":** replace my suggestion with your own.
5. **Fraud v6 resume, "repeat fraud incidents −5%":** still unconfirmed. Replace it with BFS 2.0 facts (S2), or tell me its source.
