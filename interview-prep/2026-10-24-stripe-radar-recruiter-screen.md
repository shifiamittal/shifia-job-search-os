# Stripe Radar: Fit Scores + Recruiter Screen Prep

Prepared: 2026-10-24 (v2, rescored after the experience-library update the same day) · Recruiter call: Monday 2026-10-26
Roles: (1) PM, Radar – Fraud and Abuse Prevention (job 8306158) · (2) PM, Radar (job 8301646)
Sources: experience-library.md (updated 2026-10-24: $7.5M ARR, K29–K32, A15–A16), career-plan.md, qa-master.md, interview-history.md (including the ~2024 Stripe loop), connection-tracker.md, `insider-data/company-intel/stripe.md`, Stripe blog and support pages, levels.fyi (fetched 2026-10-24).

[VERIFY: Company intel last updated 2026-03-24. Key details may have changed.] The interview format and question bank below come from that file. The comp and Radar product facts were refreshed from the web on 2026-10-24.

This file replaces `briefings/2026-10-23-prep-stripe.md`, which covered JD2 only and was written before this library update. Where they differ, this file wins.

---

## What changed since v1

| | v1 (before update) | v2 (now) | Why |
|---|---|---|---|
| JD1 Fraud & Abuse | 72 | **73** | Dashboard and API requirement is now STRONG: A15 SPORT APIs used by external developers and partners, A16 MOQ APIs, K29 API catalog |
| JD2 Radar (integrations) | 69 | **72** | Pricing is now STRONG (K32, with ACV results). Developer platforms and partners is now STRONG (A15, K29, K30) |
| Keystone ARR | $5M | **$7.5M** | Every script below uses $7.5M |
| New risk | — | **Prior Stripe loop (~2024)**, rejected after the first screening | Have the re-application answer ready (section 4) |

The two roles are now close to tied. **JD2 is where you're the stronger candidate. JD1 is the better step for your career.** Let what you learn about level and hiring manager on Monday decide (section 4).

---

## 1. The two roles at a glance

| | JD1: Fraud & Abuse Prevention | JD2: Radar (integrations & partners) |
|---|---|---|
| Core job | Investigate new attacks with customers and turn them into detection and control products (ML signals, rules, dashboard, API) | Bring Radar into the systems customers and partners already use: APIs, integrations, partner relationships, onboarding, monetization |
| Unique asks | Detection effectiveness vs. customer friction; tools for fraud analysts; real-time decisions | B2B pricing and monetization (required); integration partners and high-stakes external relationships; explaining architecture to customers |
| Owns metrics on | Product performance, UX, business metrics | Integration success, adoption, retention, revenue |
| Shared | 8+ yrs PM, SQL, 0→1, B2B sales partnership, Dashboard + API products, technical fluency, writing | same |
| Location | Seattle is a listed office; ≥50% in office | same |
| Base range | $178.6K–$268K (covers several levels) | same |

## 2. Job Fit Scores

Scoring note: partial matches count as half, not as full matches.

### JD1: PM, Radar – Fraud and Abuse Prevention
### Total Score: 73/100: APPLY WITH REFERRAL ONLY → the recruiter came to you, so pursue it and get Piyush's referral alongside

| Dimension | Score | Key Factor |
|---|---|---|
| Skill Match | 19/20 | All 10 required are now strong; your Amazon fraud-threshold decision maps directly to "detection vs. friction" |
| Seniority Fit | 14/20 | You meet 8+ yrs, but the band spans several levels; risk of being leveled below Principal scope |
| Culture Signals | 16/20 | Seattle hybrid is fine; late-stage company; fintech is your third-ranked industry |
| Comp Range | 12/20 | Total comp ~$372K at L3 vs. ~$541K at L4; the outcome depends on level |
| Growth Trajectory | 12/20 | ML-powered product plus AI-agent bot detection; strong brand, but not the agent-platform dream role |

### JD2: PM, Radar
### Total Score: 72/100: APPLY WITH REFERRAL ONLY → same: pursue it

| Dimension | Score | Key Factor |
|---|---|---|
| Skill Match | 20/20 | Every required and preferred item has direct evidence, including pricing with ACV results (K32) and external developer APIs (A15) |
| Seniority Fit | 14/20 | Same as JD1 |
| Culture Signals | 16/20 | Same as JD1 |
| Comp Range | 12/20 | Same as JD1 |
| Growth Trajectory | 10/20 | Integration and go-to-market scope; less ML and AI. Your career plan lists "non-AI scope" as a reason to say no |

Score check: 20/20 on skill match is rare. It holds here because both JD2-specific asks (pricing, developer platforms and partners) now have results on record. If the hiring manager probes, the softest point is how much the SPORT APIs alone drove: ~10% adoption is the combined result of several initiatives (A15).

### Skill Match: JD1 (19/20)

| JD Requirement | Type | Match | Source |
|---|---|---|---|
| 8+ yrs PM | Req | STRONG* | Amazon 2016 → Keystone Mar 2026. *Product-titled since 2018; 2016–18 was a Program Manager role building self-serve insight tools. Count as 9+ years and don't break it down unless asked |
| Analytical, SQL, metric definition | Req | STRONG | Adoption, override and acceptance metric definitions (Keystone table); K4 eval launch gates; A16 treatment-vs-control MOQ experiment; hands-on queries (weakness answer) |
| Scrappy 0→1 | Req | STRONG | K1 Deep Enterprise; K11 Codex prototype; K16 demo in 2–3 weeks |
| Commercial acumen / willingness to pay | Req | STRONG | **K32:** customers paid +$500K/yr for agents on top of ~$1.5M/yr for forecasting, and two clients upgraded; $7.5M ARR; $71M PBI revenue |
| B2B sales partnership (discovery, positioning, adoption) | Req | STRONG | K32 packaging built with Sales and the CEO; Keystone enterprise go-to-market; Cognizant pre-sales (30+ deals, 45% win rate) |
| Dashboard **and** API products, developer empathy | Req | **STRONG** (was PARTIAL) | **A15** SPORT APIs on Amazon's Selling Partner APIs, shipped and used by outside developers and seller-partner services; **A16** MOQ GET APIs surfaced on Seller Central; **K29** API catalog (schemas, auth, integration examples) used by the app team to build 5 client dashboards; A14 REST APIs with versioning |
| Ambiguity | Req | STRONG | A7 5% launch with controls; A4 batch vs. real time |
| Technical fluency | Req | STRONG | K2/K6 architecture; A8 MDLC; A16 MOQ architecture; A14 model choices |
| Written + verbal communication | Req | STRONG (broad) | VP-level monthly PBI updates; promotion document (A13); MDLC-vs-SageMaker comparison shared with customers. Watch item: Stripe's 2024 feedback said you "struggled to articulate goals" |
| Ownership / quality bar | Req | STRONG | K5, K27 production fixes |
| Fraud / risk / security / ML products | Pref | STRONG | **A14 PBI 2.0 fraud controls** (two-stage: fraud score + post-checkout BRP), A3 credit risk |
| ML: detection effectiveness vs. customer friction | Pref | STRONG | **A14 threshold: precision 0.99 / recall 0.25** so legitimate customers' $8K–$250K credit lines weren't suspended, with BRP as the backstop. Also K3 tiered autonomy |
| Tools for fraud analysts/risk teams; real-time decision dev products | Pref | PARTIAL | MDLC served risk scientists (SR 11-7 governance, monitoring); credit eligibility API at checkout. No fraud-analyst console |
| SWE / DS background | Pref | PARTIAL | Chemical engineering degree; hands-on builds (S1, patent retrieval). No SWE or DS title |

Required 10/10 · Preferred 3/4

### Skill Match: JD2 (20/20), only the rows that differ from JD1

| JD Requirement | Type | Match | Source |
|---|---|---|---|
| B2B sales on discovery, **technical evaluation**, commercialization | Req | STRONG | Cognizant pre-sales with solution architects ($25M APAC deals); K13 passing a Fortune 500 security review; K32 commercialization |
| **Pricing and monetization for B2B** | Req | **STRONG** (was PARTIAL) | **K32:** modular value-based annual subscriptions (forecasting ~$1.5M/yr, agents +$500K/yr, managed services included); two clients upgraded (+~$500K ACV each); delivery cost cut from ~7 on-site people per client to ~1 support FTE; usage-based and percentage-of-savings pricing rejected, with reasons |
| APIs, architecture, integration trade-offs, explained to customers | Req | STRONG | K12 managed service in client environment; K13 modular services; K17/K29 model-facing data contracts; A11 data contracts and SLAs with 14 upstream teams |
| Fraud / risk / ML | Pref | STRONG | A14, A3 |
| Developer platforms + integration partners, high-stakes external relationships | Pref | **STRONG** (was PARTIAL) | **A15** external developers and seller-partner services on Selling Partner APIs; **K30** shared production operations with the flagship client's IT/SAP teams (escalation forum, single point of contact); K31 client teams extending the platform themselves; K29 internal developer platform; credit bureau integrations |

Required 10/10 · Preferred 2/2

### Seniority Fit (14/20, both)
- JD: 8+ years. The base band "may be inclusive of several career levels." levels.fyi lists Stripe PM levels L2–L5.
- Your target: Principal IC (track 3) or Director.
- Risk: an 8+ year minimum usually maps to Stripe's mid levels. If you're leveled L3, total comp is about $372K, below your $380–400K floor. **Find out which level each role is mapped to on Monday.**

### Culture Signals (16/20, both)
- Work model: Seattle is a listed office with ≥50% in office. You're open to Seattle hybrid, so this matches (5/5).
- Stage: late-stage private, big-company scale (4/5).
- Industry: fintech and payments is your third-ranked industry (3/5). JD1's bot-vs-AI-agent work comes close to your AI focus.
- Work style: "urgency and taste," ambiguity, 0→1 inside a big company. This matches your Amazon and Keystone mix (4/5).

### Comp Range (12/20, both)
- Posted base: $178.6K–$268K. Equity and bonus come on top.
- levels.fyi, US, updated 7/20/2026: L2 $263K · L3 $372K · L4 $541K · L5 $605K total comp. The Greater Seattle average is $551K (sample size not shown).
- Your target is $600K and your floor is $380–400K. **L4 or above meets your target; L3 falls below your floor.**
- Stripe is private, so equity value depends on the latest tender offer. Ask how they value it.

### Growth Trajectory
- Dream offer: enterprise or platform AI (agents, evals) at Anthropic, OpenAI, Google or Microsoft.
- JD1: ML detection products at Stripe's scale, plus telling legitimate AI agents apart from bots (Radar's bot abuse prevention is in preview). That makes a credible bridge to agentic commerce. 12/20.
- JD2: platform, integrations and monetization. It builds platform-PM credibility, but the AI content is thinner. 10/20.

### Dealbreaker check
- Relocation: no conflict (Seattle office).
- Total comp below $380–400K: **possible at L3**. Not a skip, but the level answer on Monday decides it.
- Non-AI scope: no for JD1. **Partial risk for JD2.**

### Domain Valence: **ASSET**
Your Amazon B2B Payments & Lending work (fraud-score integration, precision/recall threshold choice, credit risk models, adverse-action codes, payments at checkout) is directly relevant, and most AI-PM candidates won't have it. At Count you missed this domain bridge (interview-history.md). Don't miss it here.

---

## 3. What's new with Radar (use it in "Why Stripe")
- **Sessions 2026** brought Stripe's biggest Radar upgrade: protection against account fraud and token abuse, coverage for payments on and off Stripe, and help winning disputes.
- **Free trial abuse prevention** is generally available. **Bot abuse prevention** (telling legitimate AI agents from fraudulent ones) is in preview. Previewed signals also cover disputes, multi-account and account-sharing abuse, merchant risk, and Issuing authorization fraud.
- **New packaging:** four tiers (Lite, Standard, Plus, Pro), with new pricing from **Jan 22, 2027**. Starting Oct 21, 2026, Radar applies to every subscription payment, not just the first. This is JD2's monetization scope, and it's the same kind of problem as your K32 packaging work.
- Stripe says it blocked **$110B in fraud** last year.

Your hook: *"Fraud has moved past checkout into accounts, trials and now AI agents. I've made the detection-vs-friction call on a real payments product, and I've built agents. The question of which agent is legitimate sits right where my two careers meet."*

JD2 version: *"Radar is moving off Stripe's own checkout: scores by API for payments processed elsewhere, and new packaging. I've shipped APIs that put ML recommendations into partners' tools, and I've repackaged an ML product into modules that customers upgraded into."*

---

## 4. Recruiter screen script (30 min). Each answer under 200 words.

**Before the call:**
- Read the canonical metrics table. It now says **$7.5M ARR**, not $5M.
- Say "most recently at Keystone.ai," never "currently."
- Leave out filler words.

### What the 2024 Stripe feedback means for Monday
From interview-history.md, your ~2024 Stripe loop ended after the first screening. The feedback was:
- **Product sense:** you didn't separate types of users or set which ones to prioritize, and the solutions weren't novel.
- **Behavioral:** you struggled to state goals, and they wanted more examples with **external** users.

Fix it on Monday in two ways:
1. **Lead with external-user stories:**
   - PBI business customers (A14, A1)
   - SPORT and MOQ sellers and the outside developers on SPORT APIs (A15, A16)
   - Keystone enterprise clients (K32, K30)

   Hold the internal-platform stories (MDLC, HAT-AI) until someone asks.
2. **State the goal first.** Every story opens with one sentence on the goal and who the user was.

### "Have you interviewed with Stripe before?" (new; say it plainly and briefly)
"Yes, in 2024, for a PM role. I didn't get past the first round. The feedback was useful: be sharper about which user segments to prioritize, and bring more examples with external users. Since then I've led enterprise go-to-market and pricing at Keystone.ai, and I lean on my external work in this conversation: business customers at Amazon, and the sellers and developers who used my APIs."
Only say what's on record. If they ask which role, say you don't have the title in front of you.

### Tell me about yourself (~140 words, Stripe version)
"I'm a Principal Technical PM with 11+ years building ML and AI products at scale. At Amazon, I spent two years in B2B Payments and Lending. I scaled an ML financing product to 50,000+ business customers and $71M in incremental revenue, and I owned how the product used Amazon's fraud model: the score threshold, blocklist rules and suspensions. I set it for very high precision, because a false positive froze a legitimate customer's credit line. Before that I built seller-facing ML products, with APIs that outside developers used to bring recommendations into their own tools, and they saved $100M+ combined. Most recently at Keystone.ai, I led a 0→1 agentic AI platform to $7.5M ARR across enterprise clients, and I set its pricing and packaging. Radar sits where those meet: ML decisions under adversarial pressure, delivered through APIs and sold to businesses."

### Why Stripe / why Radar?
Use the hook from section 3 that fits the role they lead with, then add one line: "I like products where the trade-off is explicit and measurable: blocked fraud against approved good customers."

### Why are you looking? (qa-master primary script, now with $7.5M)
Use it as written. If they ask directly: "My role was part of a restructuring at Keystone.ai earlier this year…" Say it in one or two sentences, then move on.

### Which role interests you more?
"Both, for different reasons. Fraud and Abuse Prevention is the closest to my fraud-threshold work and to agents, which are starting to transact. The Radar integrations role fits what I've done on APIs, partners and pricing. Could you tell me how the teams differ, what level each is scoped at, and where each hiring manager sees the biggest gap?"
Then let their answer decide which one you lean toward:

| If the recruiter says… | Lean toward |
|---|---|
| JD1 is scoped L4+ and JD2 lower | JD1 |
| Both are the same level | JD1 for your career; JD2 if the JD1 hiring manager wants deep fraud-ops or analyst-tool background |
| JD2's hiring manager wants pricing and partners first (the new tiers launch Jan 2027) | JD2. Your K32 + A15 evidence is unusually direct |

### "Have you owned pricing / monetization?" (JD2 required item; now real numbers)
"At Keystone.ai, we were moving a consulting business to product, and one flagship engagement brought in $2M a year but needed about seven people on site. I worked with the CEO, Sales and Finance to split the offer into modules on annual subscriptions: forecasting at about $1.5M a year, with agentic capabilities on top at about $500K. We packaged by value customers could measure on their own. We looked at usage-based pricing and rejected it, because forecast counts don't track value. We rejected a percentage of savings too, because savings depend on the client's own execution and that invites attribution fights. Two clients started on forecasting and upgraded to agents, about $500K more per year each. Delivery went from about seven people per client to about one support person."
(~150 words. Never name the clients.)

### "Have you built API or developer products?"
"Yes, for both outside and internal developers. At Amazon, SPORT recommended cheaper fulfillment options to sellers, and adoption was 1%. I wrote the spec to expose it through Amazon's Selling Partner APIs, so outside developers and seller-partner tools could show the recommendations, the projected savings and the savings sellers had missed. The APIs shipped and partners used them. Together with wider recommendations and an entry point in Seller Central, adoption reached about 10%. At Keystone.ai, I owned the data platform's API catalog and release communication. The app team used those APIs to stand up dashboards for five new clients with no extra effort."
(Say "together with." The ~10% is a combined result, and 27% was the goal, not the result.)

### Comp ("What are your expectations?")
Stripe's range tops out near your target only at L4 and above. Don't open with a number until you know the level.
1. First: "Could you share which level each role is scoped at, and the full package for that level: base, bonus and equity?" (This is the LawnStarter rule: ask for the full package before calling it aligned.)
2. If pressed: "For senior PM scope at Stripe, I'm targeting total compensation in the mid-to-high $500s, and I'm flexible on the mix of base and equity." This sits inside levels.fyi's current L4–L5 range ($541K–$605K, July 2026), so you aren't quoting above their band. (The Oct 23 briefing advised against quoting a range, based on the older March figures. The newer data supports giving one.)
3. Never share current pay. Use the Washington redirect from qa-master.

### Leveling ("What level are you targeting?")
Use the qa-master script ($7.5M ARR) and lead with scope:
- company-level product strategy and pricing at Keystone.ai
- 8 years at Amazon
- ownership of both the fraud-threshold decision and the platforms underneath it

### Logistics
- Green Card holder; no sponsorship needed.
- Seattle; fine with 50% in office.
- Available immediately.
- "Interviewing elsewhere?": "Yes, a few conversations in enterprise AI. This one stands out because of the fraud and AI-agent overlap. What's your timeline?"

### Precision traps (interviewers will probe these)
- **Fraud model:** "The fraud team owned the Business Fraud Score model; I owned how our product used it: integration, threshold, blocklist and suspensions." **Never say you built the fraud model.**
- **Fair lending:** don't claim fair-lending review (ECOA/Reg B). You can claim adverse-action reason codes, segment-impact testing and the thin-file SMB analysis.
- **SPORT APIs:** ~10% adoption is the combined result of several initiatives; 27% was the OP1 goal.
- **API catalog:** "I owned the API catalog and release communication; engineering built the tooling." Don't claim the changelog or test tooling.
- **MOQ rate limits:** don't cite the rate-limit details (300 requests/minute, HTTP 429). They aren't real MOQ documentation.
- **Client SLAs (K30):** say "SLAs covering data delivery and accountability." Don't say "signed" until you've confirmed it.
- **In-house vs. third-party lender (A17):** parked. Don't use it.
- **Client names:** never name clients. Say "a flagship Fortune 500 CPG client," "a global manufacturer," "a large technology company."

### Questions to ask the recruiter (pick 3)
1. "What level is each role scoped at, and how does Stripe level someone with 11 years who was Principal at a smaller company?"
2. "What's the interview loop now? Is there a written exercise or take-home?" (Stripe intel: 5–6 rounds over 3–6 weeks, often a take-home.)
3. "Who's the hiring manager for each role, and which team is earlier-stage?"
4. "Is the integrations role tied to the new Radar packaging and off-Stripe scoring, or to the core merchant experience?"
5. "Is the Seattle team co-located with Radar engineering, or is most of Radar in South San Francisco?"

End with: "Is there anything about my background you'd like me to clarify?"

---

## 5. Gaps to close before the hiring-manager round (not needed for Monday)

| Gap | Why it matters | Fix |
|---|---|---|
| **Product sense: segment users, then prioritize** | It's exactly what Stripe flagged in 2024 | `/mock-interview product-sense` with "Design a fraud detection product for Stripe merchants." Open by naming the segments (SMB vs. enterprise vs. platforms; good customers vs. attackers) and the goal, before any solution |
| Payments fundamentals: card networks, auth/capture, issuer vs. acquirer, chargebacks and disputes, card testing, 3DS / SCA, early fraud warnings | Stripe intel says these get tested ("How does online payment processing work end to end?") | 1 hour of study plus `/mock-interview technical` |
| Fraud-analyst tooling | JD1 preferred | Bridge with K3/K4 (evidence pre-filled for human approvers is the same problem as analyst triage) |
| Writing exercise | Stripe is writing-first | `/work-product Stripe Radar specific-interview`: bot vs. legitimate-agent abuse (JD1) or packaging off-Stripe scores (JD2) |
| Leadership answers avg 4.8/10 | Recurring weakness across 4 interviews | `/mock-interview behavioral` with K20, K13, A13 |
| Incident debugging 5/10 | "Fraud spike / approval rate dropped" questions are likely | Practice stabilize → segment → what changed → trace → fix → prevent, with a payments example |
| Open [CONFIRM] items | MDLC teams onboarded (3 vs. 5); A10 GDPR timeline (1 vs. 1.5 years); K30 SLAs signed? | Settle these in experience-library.md before the hiring-manager round |

Closed since v1: pricing outcome metric (K32) and external developer API experience (A15, A16, K29).

---

## 6. Referral: Piyush Rohella (PM at Stripe, former Amazon B2B Payments & Lending teammate)

Message him **before Monday** for team intel, then ask for a referral once you know which role. Draft below. You send it.

> Hi Piyush, hope Stripe's treating you well! A recruiter reached out to me about two Radar PM roles (Fraud & Abuse Prevention, and the Radar integrations/partners role), and my screen is Monday. After our time on B2B Payments & Lending, Radar feels like a natural fit. Do you know the teams or hiring managers, or have 15 minutes before Monday? I'd value your read on which one fits me better.

Afterward, run `/referral-request piyush-rohella stripe` for the full sequence.

---

Sources:
- [Everything we announced at Sessions 2026 (Stripe blog)](https://stripe.com/blog/everything-we-announced-at-sessions-2026)
- [Expanding Stripe Radar to protect more of your business (Stripe blog)](https://stripe.com/blog/expanding-stripe-radar-to-protect-more-of-your-business)
- [Updates to Radar pricing, January 2027 (Stripe support)](https://support.stripe.com/questions/updates-to-radar-pricing-(january-2027))
- [Updates to Radar for LPMs and Billing coverage and pricing, October 2026 (Stripe support)](https://support.stripe.com/questions/updates-to-radar-for-lpms-and-billing-coverage-and-pricing-(october-2026))
- [levels.fyi: Stripe Product Manager compensation](https://www.levels.fyi/companies/stripe/salaries/product-manager), fetched 2026-10-24, data updated 7/20/2026
- [levels.fyi: Stripe PM, Greater Seattle Area](https://www.levels.fyi/ar/companies/stripe/salaries/product-manager/locations/greater-seattle-area), sample size not shown
