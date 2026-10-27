# Product Case Playbook: the 5 case types
Created 2026-10-27 · For: Stripe Radar loop and other PM product-sense rounds
Sources: `insider-data/behavioral-interview-frameworks.md` (CIRCLES, Product Sense, Double Diamond, GAME, Case Methodology), `context-library/interview-history.md` (Stripe 2024 feedback), `context-library/experience-library.md` (stories A1, A2, A6, A7, A12, K2, K9, K32)

---

## 1. You have done more of this than you think

| Case type | What you think you know | What you have actually done (from your experience library) |
|---|---|---|
| Improvement | "A little" | SPORT redesign after research with adhering and non-adhering sellers (A12); planner explainability first, before scientist tools (K9) |
| Growth | "No idea" | PBI 2.0: found each segment's constraint (SMB approval 4%, enterprise activation 7–10%), took SMB approval 4% → 15%, $71M incremental revenue, $15M from personalization (A1) |
| Launch | "No idea" | 5% controlled launch with limits and monitoring before expanding (A7); forecasting agent in shadow mode with >70% recall / >70% acceptance launch gates (K2) |
| Design | "No idea" | Three-tier agent autonomy and the monthly-eligibility redesign (A2, K3) are design decisions: user need → options → trade-off |
| Pricing | "Really no idea" | Deep Enterprise modular value-based subscriptions; rejected usage-based and %-of-savings pricing with reasons; two clients upgraded +$500K ACV each (K32). Plus Amazon Pricing price-perception benchmarking across 800+ retailers, 17 countries |

A case interview asks you to do that same thinking, out loud, in 25–35 minutes, about a product you don't own. The frameworks below are just your real process written as steps.

**One rule for all five:** the cases are scored on thinking, not on knowing the "right" answer. Interviewers can't hire on a correct answer; they hire on a clear, user-first, business-aware path to an answer.

---

## 2. The universal spine (memorize this once)

Every case type is a variation on these 7 steps. The type changes which step gets the most time.

1. **Clarify** (1–2 min): What's the goal? Which product, platform, market? Any constraints? Ask 2–4 questions, then state your assumptions out loud.
2. **Goal + metric** (1 min): "I'll optimize for X, measured by Y." Say this *before* any solution. (Stripe 2024 feedback: "struggled to articulate goals.")
3. **Segment users** (3 min): Name 3 segments, say why they differ, pick one and say why. (Stripe 2024 feedback: "didn't distinguish types of users… needed a clearer framework for which users to prioritize.")
4. **Pain points / needs** (3 min): 3–4 for the chosen segment. Rank them.
5. **Solutions** (5 min): 3 ideas: one obvious, one bigger, one surprising. (Stripe 2024 feedback: "lacked novel solutions.")
6. **Prioritize + trade-offs** (3 min): impact vs. effort vs. risk. Pick one.
7. **Metrics + risks + summary** (2 min): north star, 1–2 guardrails, how you'd test it, and one-sentence recap.

**Prioritizing segments** — use one line, out loud: *"I'll pick [segment] because it's the largest / feels the pain most / is underserved today / is where we can win."* Choose 2 of those 4 reasons and say them.

**The surprising idea** — a fast way to get one: take the obvious solution and ask (a) what if it were automatic, (b) what if a third party did it, (c) what if we used data only we have. At Stripe, (c) is almost always the answer: Stripe sees payments across millions of businesses, which no single merchant can.

**Signposting** — say "Now I'll segment users," "Now I'll prioritize." It makes the structure visible and fixes your length habit, because each section has an end.

---

## 3. The five types

### 3.1 Product Improvement
**Prompt shape:** "How would you improve X for Y?" / "Improve your favorite product."
**Where the time goes:** steps 3–4 (users and pain). Most candidates rush to features.

**Framework:**
1. Clarify: why improve now? Which goal (engagement, revenue, retention, trust)?
2. Describe the product in one sentence: who uses it, for what, how it makes money.
3. Segment users → pick one.
4. Walk their journey (before → during → after using the product) and find where it breaks.
5. 3 solutions → pick → metrics.

**Stripe example:** "Improve Radar for small businesses."
- Goal: fewer fraud losses *without* blocking good customers (fraud loss rate + false-decline rate as the guardrail pair).
- Segments: (a) solo founders with no fraud expertise, (b) growing SMBs with one ops person reviewing disputes, (c) high-risk verticals (digital goods, ticketing). Pick (b): they feel the pain most (manual reviews eat hours) and they're the ones willing to tune rules.
- Journey break: reviewing flagged payments, and not knowing whether a rule change will block good customers.
- Solutions: obvious — better review queue; bigger — "simulate this rule on last 90 days before turning it on"; surprising — benchmark against similar businesses ("merchants like you block X% of these").
- Your bridge: K9 (separate two user types, ship for the one adoption depends on first).

### 3.2 Product Growth
**Prompt shape:** "Improve retention for X." / "Metric Y is flat/down at company A, what do you do?"
**Tests:** can you break a metric into its parts and find the one constraint.
**Where the time goes:** building the metric tree and choosing the lever.

**Framework:**
1. Clarify the metric precisely (DAU? 30-day retention? for which cohort?). If it's a drop, first ask: is the data right, is it seasonal, did we ship something? (validate before diagnosing).
2. Draw the funnel: **Acquire → Activate → Retain → Monetize → Refer**. Or a metric tree: Revenue = users × conversion × frequency × value per transaction.
3. Segment the funnel (new vs. existing, SMB vs. enterprise, geo, platform). Find the step and segment where the gap is biggest.
4. Hypothesize 2–3 causes for that gap; say what data would confirm each.
5. Levers for the top cause → experiment design (A/B test, holdout) → north star + guardrail.

**Example:** "Increase adoption of Radar's custom rules among Stripe merchants."
- Funnel: aware Radar has rules → open the rules page → write first rule → rule stays on after 30 days.
- Likely biggest drop: write first rule (blank-page problem, fear of blocking good customers).
- Levers: suggested rules from the merchant's own data, one-click templates by industry, rule preview on past transactions.
- Guardrail: false-decline rate and authorization rate must not drop.
- **Your bridge: A1 is a textbook growth case.** You found each segment's constraint (SMB = approval rate, enterprise = 7–10% activation after a 7-page onboarding) and attacked each one differently. Say: "This is how I grew PBI 2.0: find the constraint per segment, not one fix for everyone."

### 3.3 Product Launch (go-to-market)
**Prompt shape:** "How would you build feature A for segment B?" / "How would you launch X for us?"
**Tests:** can you take something from idea to market: who first, what's the minimum version, how you roll it out safely, how you know it worked.
**Where the time goes:** target segment, MVP scope, rollout plan.

**Framework (remember "WHO-WHAT-HOW-WIN"):**
1. **Why** this, why now: what's the market opportunity or company goal? Does it fit the mission?
2. **WHO:** beachhead segment — the first group that needs it most and is easiest to reach.
3. **WHAT:** MVP — the smallest thing that solves their core problem. Say explicitly what's *out* of v1.
4. **HOW:** positioning (one sentence: "For [who], [product] does [what], unlike [alternative]"), channels (in-product, sales, partners, docs/developers), pricing (or "included at launch").
5. **Rollout:** internal → private beta (a handful of design partners) → % ramp → GA. State launch gates.
6. **WIN:** success metrics at 30/90 days, and the risks plus mitigations.

**Example:** "Launch a product that lets Radar tell good AI shopping agents from bad bots."
- Why now: agentic commerce is growing; merchants want good agents buying from them and bad ones blocked.
- Who: high-volume e-commerce merchants already seeing agent traffic.
- What (v1): classify traffic as known-agent / unknown-automation / human; let merchants allow, challenge or block per class. Out of v1: agent identity standards, payouts to agent platforms.
- Rollout: shadow mode first (score but don't block), then opt-in, then default-on for low-risk actions.
- Gates: precision on blocked agents, false-block rate on good agents.
- **Your bridge: K2 and A7.** Shadow mode with explicit gates (>70% recall, >70% acceptance), and a 5% launch with limits that surfaced the loss problem early (A6). Interviewers rarely hear a candidate state launch gates; you have real ones.

### 3.4 Product Design
**Prompt shape:** "Design X everyday object for Y." / "Design feature A."
**Tests:** user empathy and creativity. Can you stay in the problem before solving it.
**Where the time goes:** 40% on the problem (users, needs), 60% on solutions and trade-offs.

**Framework: CIRCLES** (full version in `insider-data/behavioral-interview-frameworks.md`)
- **C**omprehend: who, why, constraints
- **I**dentify customers: 2–3 personas, pick one
- **R**eport needs: "As a [persona], I want [X] so that [Y]"
- **C**ut through: prioritize one need
- **L**ist solutions: 3–5, incremental to ambitious
- **E**valuate trade-offs
- **S**ummarize with metrics

**Everyday object example:** "Design an alarm clock for the visually impaired."
- Personas: fully blind adult living alone; low-vision older adult; blind parent with kids.
- Pick: low-vision older adult (largest group; also often less comfortable with phone accessibility tools).
- Needs: set the alarm without reading a screen; know it's set; turn it off without fumbling.
- Solutions: tactile dial with detents per hour; voice set + voice confirmation; vibrating pillow pad; a "did I set it?" button that speaks the time.
- Trade-off: voice is flexible but fails in a shared room at night; tactile is silent and always works. Pick tactile dial + one confirmation button.
- Metric: % of nights alarm set correctly; time to set.

**Design vs. improvement:** improvement starts from an existing product's broken step; design starts from a blank page, so spend longer on personas and needs.

### 3.5 Product Pricing (your biggest gap)
**Prompt shape:** "How would you improve our pricing & packaging?" / "How would you price new product X?"
**Tests:** do you understand that price comes from *value to the customer*, not from cost, and can you design tiers that grow revenue as customers grow.

**Five concepts to know:**
1. **Three ways to set a price**
   - *Cost-plus:* cost + margin. Simple, but ignores what customers would pay. Floor, not answer.
   - *Competitor-based:* match or undercut alternatives. A reference point, especially in crowded markets.
   - *Value-based:* price at a share of the value you create (savings, revenue, time). Usually the right answer in an interview; say the other two set the floor and the sanity check.
2. **Value metric** — the unit you charge on. It should grow as the customer gets more value. Options: per seat, per transaction/usage, % of volume, flat subscription, outcome-based. Stripe charges per transaction because a merchant's value grows with their sales.
3. **Packaging** — what goes in each tier. Classic is Good / Better / Best: a basic tier to get people in, a middle tier most people pick, a premium tier for power users. Split features by *who needs them*, not randomly.
4. **Willingness to pay** — how you'd learn it: customer interviews, surveys (Van Westendorp: "at what price is it too cheap / a bargain / getting expensive / too expensive?"), looking at competitor prices, and pricing experiments on new customers.
5. **Rolling out a change** — test on new customers first, grandfather existing ones for a period, watch conversion, churn and expansion revenue.

**Framework:**
1. Clarify the goal: revenue? adoption? margin? moving upmarket? (Pricing for adoption looks very different from pricing for margin.)
2. Segments and their value: who gets the most value, and how much is it worth to them?
3. Pick the value metric.
4. Set the price: value-based anchor, sanity-checked against cost (floor) and competitors (ceiling/reference).
5. Package into tiers.
6. Test and roll out; metrics: conversion, ARPU (average revenue per user), churn, expansion revenue, and a guardrail (e.g., adoption of the core product doesn't drop).

**Example:** "How would you price an advanced Radar add-on for fraud teams?"
- Goal: revenue from larger merchants without hurting adoption of base Radar.
- Segments: small merchants (want it to just work, price-sensitive), mid-market with a fraud analyst (want rules and reviews), enterprise fraud teams (want custom models, analytics, support).
- Value: fraud losses avoided + chargeback fees avoided + good customers not wrongly blocked. That value scales with transaction volume.
- Value metric: per screened transaction (tracks value, matches how merchants already pay Stripe). Consider a monthly minimum or volume discounts for enterprise.
- Packaging: base fraud protection included for everyone (keeps the network data flowing, which makes the models better for all); paid tier adds rules, review queues, analytics; enterprise adds custom models and dedicated support.
- Price check: below the fraud losses + chargeback fees it saves a typical mid-market merchant; compare to standalone fraud vendors.
- [VERIFY: check Stripe's current Radar pricing page before the interview so you can reference what exists today.]
- **Your bridge: K32 is a real pricing story.** Say: "At Keystone I priced Deep Enterprise as modular value-based subscriptions. I rejected usage-based pricing because forecast counts don't track economic value, and percentage-of-savings because savings depend on the client's execution, which leads to attribution disputes. Two clients started on forecasting and upgraded to agents for +$500K ACV each." That's exactly the value-metric reasoning the case tests.

---

## 4. Telling the types apart in the first 30 seconds

| If the prompt says… | It's probably | Spend the most time on |
|---|---|---|
| "improve," "favorite product," "what's wrong with" | Improvement | Users + where the journey breaks |
| a metric: retention, engagement, revenue, "dropped," "flat" | Growth | Metric tree + finding the constraint |
| "launch," "build X for Y," "enter," "go-to-market" | Launch | Beachhead, MVP, rollout + gates |
| "design," an everyday object, a blank page | Design | Personas + needs before ideas |
| "price," "packaging," "monetize," "tiers" | Pricing | Value to each segment + value metric |

If you're unsure, ask: "Is the goal here to grow a metric, or to design something new?" Interviewers are fine with that.

---

## 5. Your personal traps (from your interview history)

- **Length.** Your answers run 350–650 words against a 200-word target (4 of 4 interviews). In a case, it shows up as long monologues. Fix: signpost each step, pause after each, and ask "Does that segment choice make sense before I go on?"
- **Goal before solution.** Say the goal and metric out loud in the first 2 minutes, every time.
- **Segments.** Always name 3 and pick 1 with a reason. This is the exact 2024 Stripe miss.
- **One novel idea.** Plan it on purpose using the "automatic / third party / data only we have" trick.
- **Filler words** ("basically," "right?," "kind of") — they're more noticeable when you're thinking live.

---

## 6. Practice plan (7 days, ~30 min/day)

| Day | Type | Practice prompt | Do |
|---|---|---|---|
| 1 | Improvement | "Improve Radar for small businesses" | Out loud, timed 20 min. Record it. |
| 2 | Growth | "Radar custom-rule adoption is flat. Grow it." | Draw the funnel on paper first |
| 3 | Launch | "Launch AI-agent detection for Radar" | Write the WHO-WHAT-HOW-WIN on one page |
| 4 | Design | "Design an alarm clock for the visually impaired" | CIRCLES, focus on personas |
| 5 | Pricing | "Price an advanced Radar tier for fraud teams" | Say the K32 bridge in under 60 seconds |
| 6 | Mixed | "Design a fraud detection product for Stripe merchants" (common Stripe question) | Full mock: `/mock-interview product-sense` |
| 7 | Mixed | "How would you improve Stripe's developer onboarding?" (common Stripe question) | Full mock, then compare to Day 1 recording |

Stripe questions above come from `insider-data/company-intel/stripe.md`. [VERIFY: Company intel last updated 2026-03-24. Key details may have changed.]
