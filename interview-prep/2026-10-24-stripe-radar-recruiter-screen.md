# Stripe Radar: Recruiter Screen Prep (both roles)

Prepared: 2026-10-24, **v3** (refreshed after the resume work the same day) · Recruiter call: **Monday 2026-10-26, ~30 min**
Roles: (1) PM, Radar – Fraud and Abuse Prevention (job 8306158) · (2) PM, Radar (job 8301646, integrations, partners, monetization)
Sources: experience-library.md (third batch, 2026-10-24), career-plan.md, qa-master.md, interview-history.md (including the ~2024 Stripe loop), `insider-data/company-intel/stripe.md`, Stripe blog and support pages and levels.fyi (fetched 2026-10-24; not re-fetched for v3).

[VERIFY: Company intel last updated 2026-03-24. Key details may have changed.] Interview format comes from that file; Radar product news and comp were refreshed from the web on 2026-10-24.

---

## 0. Call card (read this 10 minutes before the call)

**Your three-line pitch:** ML decisions under adversarial pressure (Amazon fraud and credit) · delivered through APIs and partner integrations (SPORT, MOQ, checkout APIs) · sold to businesses with pricing you designed (Keystone, all 5 clients renewed).

**Numbers to say exactly**
| Topic | Say | Don't say |
|---|---|---|
| Keystone | $7.5M ARR · 5 Fortune 500 clients, **all renewed, no churn** · 2 upgraded to agents (+$500K ACV each) · $25M annualized client savings · 30+ engineers and scientists | "$10M", "$5M", a net revenue retention % |
| Amazon financing | 50K+ business customers · $71M incremental revenue · SMB approval 4% → 15% · launched 3 months earlier (batch, not real time) | "millions of customers", "250K" |
| Fraud | **fraud loss rate −15%** · threshold at 99% precision / ~25% recall · "the fraud team built the model; I owned how our product used it" | "I built the fraud model"; "repeat fraud incidents −5%" (not confirmed) |
| APIs | SPORT: **3 Amazon partner teams integrated it**, adoption 1% → ~10% (combined with other work) · MOQ: Seller Central + **2 Asian marketplaces**, ~60% higher adherence, $20M seller savings | "outside developers used SPORT"; "27% adoption" (that was the goal) |
| Platform | MLOps: 30+ scientists, 100+ models, deployment −40% | |
| Career | 11+ years · PM since 2016 · "most recently at Keystone.ai" | "currently at Keystone" |

**Three goals for the call:** (1) get both roles' **level** and the full package; (2) learn which hiring manager wants what, then lean into one; (3) leave the recruiter with one sentence: *"the PM who has set fraud thresholds, shipped APIs partners integrated, and priced a B2B ML product."*

**Which resume:** send `resumes/Shifia_Mittal_Resume_Stripe_Radar.pdf` for the Radar (integrations) role. For Fraud & Abuse, use `Shifia_Mittal_Resume_Stripe_Radar_Fraud_6.pdf` **after** you confirm or remove the "repeat fraud incidents by 5%" bullet; it's still [CONFIRM] in your library, and a hiring manager will ask for the baseline. Both resumes use the same numbers.

---

## 1. The two roles at a glance

| | JD1: Fraud & Abuse Prevention | JD2: Radar (integrations & partners) |
|---|---|---|
| Core job | Investigate new attacks with customers; turn them into detection and control products (ML signals, rules, dashboard, API) | Bring Radar into the systems customers and partners already use: APIs, integrations, partner relationships, onboarding, monetization |
| Unique asks | Detection vs. customer friction; tools for fraud analysts; real-time decisions | B2B pricing and monetization (required); integration partners; explaining architecture to customers |
| Owns metrics on | Product performance, UX, business metrics | Integration success, adoption, retention, revenue |
| Your strongest proof | Fraud loss −15%; 99% precision threshold; layered controls; agents with tiered autonomy | Pricing with all 5 clients renewed and 2 upgraded; 3 partner teams on SPORT APIs; MOQ in 2 marketplaces; checkout API design |
| Fit (est., 2026-10-24) | 73/100 (stronger career step: ML + AI-agent bot abuse) | 72/100 → **~74 now** (skill match was already 20/20; retention and partner-integration evidence remove the softest points) |
| Shared | 8+ yrs PM, SQL, 0→1, B2B sales partnership, Dashboard + API products, technical fluency, writing; Seattle office, ≥50% in office; base $178.6K–$268K (several levels) | same |

**Bottom line:** JD2 is where you're the stronger candidate; JD1 is the better step for your career (closer to ML and AI agents). Let the level and the hiring managers' needs decide.

**Comp reality** (levels.fyi, US, data 7/20/2026): L3 ~$372K · L4 ~$541K · L5 ~$605K total comp. Your floor is $380–400K, target $600K. **L4+ works; L3 doesn't.** Getting the level is the most important thing to learn on Monday.

---

## 2. What's new with Radar (for "Why Stripe")
- **Sessions 2026:** Stripe's biggest Radar upgrade: account fraud and token abuse protection, coverage for payments on and off Stripe, and help winning disputes.
- **Free trial abuse prevention** is GA. **Bot abuse prevention** (telling legitimate AI agents from fraudulent ones) is in preview, along with signals for disputes, multi-account and account-sharing abuse, merchant risk, and Issuing authorization fraud.
- **New packaging:** four tiers (Lite, Standard, Plus, Pro), new pricing from **Jan 22, 2027**. From Oct 21, 2026, Radar covers every subscription payment, not just the first. This is JD2's monetization scope.
- Stripe says Radar blocked **$110B in fraud** last year.

---

## 3. Recruiter screen script. Every answer under 200 words; state the goal first.

### Before you speak: the 2024 feedback
Your ~2024 Stripe loop ended after the first screening. They said: (1) separate the user types and say which you'd prioritize; (2) state goals clearly, and bring more examples with **external** users.
- **Lead with external users:** business customers (PBI), sellers and partner teams (SPORT, MOQ), enterprise clients (Keystone). Keep MLOps and HAT-AI for when asked.
- **Goal first:** open every story with one sentence on the goal and who the user was.

### Tell me about yourself (~150 words, ~70 seconds)
"I'm a Principal Technical PM with 11+ years building ML products that businesses pay for and depend on.

At Amazon, I spent two years in B2B Payments and Lending. I scaled an ML financing product to 50,000+ business customers and $71M in incremental revenue, and I owned how it used Amazon's fraud model: the threshold, the blocking rules and the checkout controls. That cut the fraud loss rate 15% while keeping friction low for legitimate businesses. Before that, I built seller products and exposed them through APIs that partner teams built into their own tools.

Most recently at Keystone.ai, I led a 0-to-1 agentic AI platform to $7.5M ARR. I set the pricing with Sales and the CEO; all five of our enterprise clients renewed, and two upgraded.

Radar sits where those meet: ML decisions against adversaries, delivered through APIs, and sold to businesses."

### Why Stripe / why Radar? (~170 words)
"Three reasons.

First, Stripe's network. One business can't spot a new attack early; Stripe sees payments across millions of businesses and can. Radar blocked $110 billion in fraud last year. That's where the data and scale make the ML problem worth solving well.

Second, where Radar is going. Fraud has moved past checkout into account signups, free trials and now AI agents. Telling a legitimate buying agent from a fraudulent one is a new product problem, not just a new model.

Third, I've done both halves. At Amazon Business I set our fraud threshold for very high precision, because a false positive froze a real business's credit line, and layered controls caught the rest; fraud losses fell 15%. At Keystone.ai I built agents that act on their own only when the risk is low and the action can be undone."

**JD2 third paragraph:** "Third, I've done the distribution side. At Amazon, three partner teams built my inventory recommendations into their own tools through APIs. At Keystone.ai I priced an ML product in modules: clients started on forecasting, all five renewed, and two added agents. Radar's move to scoring payments processed elsewhere, plus its new tiers, is that problem at Stripe's scale."

**60-word version:** "Stripe's network sees fraud no single business can, and Radar is taking that past checkout into accounts, trials and AI agents. I've set fraud thresholds on a real payments product, where blocking a good customer was the expensive mistake, and I've shipped APIs partners integrated and priced a B2B ML product. Radar is where those meet."

### "Have you interviewed with Stripe before?"
"Yes, in 2024, for a PM role. I didn't get past the first round. The feedback was useful: be sharper about which user segments to prioritize, and bring more examples with external users. Since then I've led pricing and go-to-market for enterprise clients at Keystone.ai, all of whom renewed, and I'll lean on external work today: business customers at Amazon, and the partner teams and sellers who used my APIs."
If asked which role: you don't have the title in front of you.

### Why are you looking? (~120 words; forward-looking)
"Three things.

First, scale. At Keystone.ai I took an agentic AI platform from 0 to 1 and helped move the company from consulting to product: $7.5M ARR, five Fortune 500 clients, all of whom renewed. Now I want to apply that on a product with far more customers and data behind it.

Second, payments and risk. My two years in Amazon's B2B Payments and Lending were some of my favorite work: decisions where a mistake cost real money and real customers.

Third, the overlap. Agents are starting to transact, and the trust problems I worked on at Keystone.ai are becoming payments problems."

**If asked when you left / whether you're still there:** "I wrapped up at Keystone.ai in March, when my role was part of a restructuring. Since then I've been building hands-on, including my own AI job-search system, and being selective about my next role." One or two sentences, then back to the reasons. Never imply you're still employed.

### What level are you targeting? (~110 words)
"I'd rather level on scope than title. At Keystone.ai I owned product strategy and pricing for the company's move from consulting to product: a 0-to-1 platform that reached $7.5M ARR with five Fortune 500 clients, built by 30+ engineers and scientists, set with the CEO and CTO. Before that, eight years at Amazon, owning an ML financing product with 50,000+ business customers and $71M in revenue, and the MLOps platform behind 100+ production models. I'd expect the senior end of your PM levels. How do you map that, and are both roles scoped at the same level?"
- **L4 or above:** "That sounds right." Then ask for the full package.
- **L3:** "What would the hiring manager need to see to scope this at L4?" Don't accept L3 on the call.

### Which role interests you more?
"Both, for different reasons. Fraud and Abuse Prevention is closest to my fraud-threshold work and to agents, which are starting to transact. The Radar integrations role matches what I've done on APIs, partner integrations and pricing. How do the teams differ, what level is each scoped at, and where does each hiring manager see the biggest gap?"

| If the recruiter says… | Lean toward |
|---|---|
| JD1 is scoped L4+ and JD2 lower | JD1 |
| Same level | JD1 for your career; JD2 if JD1's hiring manager wants deep fraud-ops or analyst-tooling background |
| JD2's hiring manager wants pricing and partners first (new tiers launch Jan 2027) | JD2: your pricing + retention + partner-API evidence is unusually direct |

### Role-specific questions the recruiter may ask

**"Have you owned pricing / monetization?"** (JD2 required; ~170 words)
"Yes. At Keystone.ai, the goal was to turn a consulting business into a product business. One flagship engagement brought in $2M a year but needed about seven people on site. With the CEO, Sales and Finance, I split the offer into modules on annual subscriptions: forecasting at about $1.5M a year, agentic capabilities on top at about $500K. We rejected usage-based pricing, because forecast counts don't track value, and percentage-of-savings, because savings depend on the client's execution and invite attribution fights.

We landed with forecasting first. For one global manufacturer, I demoed the platform, scoped the proof of concept to shipment forecasting because that's where their data was reliable, and priced the first deal on forecasting alone with our sales leader. All five clients renewed through the move to product, and two added agents, about $500K more a year each."

**"Have you built API or developer products?"** (~150 words)
"Yes. At Amazon, SPORT recommended cheaper fulfillment options to sellers, but adoption was 1% because it depended on each seller acting. I wrote the spec to expose it through Amazon's Selling Partner APIs, and three partner teams integrated it, including Seller Central and inventory placement, so inventory moves could happen at scale. Together with wider recommendations and a Seller Central entry point, adoption reached about 10%. I also built MOQ recommendation APIs used by Seller Central and teams in two Asian marketplaces; a controlled experiment showed about 60% higher seller adherence and $20M in seller shipping savings. At Amazon Business I defined versioned REST APIs for fraud checks at signup and credit eligibility at checkout. At Keystone.ai I owned the data platform's API catalog, which let the app team stand up dashboards for five new clients with no extra effort."

**"How do you think about retention and integration success?"** (JD2 owns these metrics; ~120 words)
"For a B2B product, I watch revenue retention first. At Keystone.ai every client renewed with no churn, and two expanded, so revenue retention was above 100%. Then usage: when one client's adoption fell from 70% to 50%, we traced it to a warehouse move missing from the data, fixed it, and got back to 70%. For something like Radar integrations, I'd track time from first API call to production traffic, the share of a customer's payments actually scored, whether integrations stay live, and tier upgrades."
Don't quote an NRR percentage; the exact figure depends on renewal timing.

**"Tell me about a fraud decision you owned."** (JD1; ~110 words)
"The goal was to expand credit to small businesses that traditional underwriting had underserved, without letting fraud in. The fraud team owned the fraud score; I owned how our product used it. I set the threshold at 99% precision, accepting about 25% recall, because a false positive suspended a legitimate business's credit line. Screening wasn't the only defense: a domain blocklist, post-checkout checks and exposure limits caught the rest. Fraud loss rate fell 15%, and SMB approvals went from 4% to 15%."

**"Stripe is a writing culture. How do you write?"** (~90 words)
"Writing is how I do product work. At Amazon I wrote PR/FAQs, PRDs, OP1 plans, and the monthly business reviews for VP leadership on our financing program. At Keystone.ai I wrote the strategy and alignment documents for leadership. My rule is goal and customer first, then the decision and the trade-off, then the evidence."
Add one specific example once you pick it: [which document led to which decision].

### Comp ("What are your expectations?")
1. First: "Could you share which level each role is scoped at, and the full package for that level: base, bonus and equity?"
2. If pressed: "For senior PM scope at Stripe, I'm targeting total compensation in the mid-to-high $500s, and I'm flexible on the mix." (Inside levels.fyi L4–L5, $541K–$605K.)
3. Never share current pay. Washington redirect: "Washington postings include a range, so could you share what's budgeted for this level?"
4. Ask how Stripe values its private equity (latest tender price).

### Logistics
Green Card holder, no sponsorship · Seattle, fine with ≥50% in office · available immediately · "Interviewing elsewhere?": "Yes, a few conversations in enterprise AI. This one stands out because of the fraud and AI-agent overlap. What's your timeline?"

### Precision traps
- **Fraud model:** the fraud team built it; you owned integration, threshold, rules and suspensions.
- **Fraud loss −15%** is confirmed. **Repeat fraud incidents −5%** is not; don't say it until confirmed.
- **Fair lending:** don't claim fair-lending review. Adverse-action reason codes, segment testing and the thin-file analysis are fine.
- **SPORT:** 3 Amazon partner teams; ~10% adoption is a combined result; 27% was the goal.
- **Retention:** "all 5 clients renewed, no churn." The $7.5M ARR breakdown in your library lists 4 contracts; know who the fifth client is before anyone asks "which five?"
- **API catalog:** you owned the catalog and release communication; engineering built the tooling.
- **Client names:** never. "A flagship Fortune 500 CPG client," "a global manufacturer," "a large technology company."
- **K30 SLAs:** don't say "signed" until confirmed. **A17 (in-house vs. third-party lender):** parked.

### Questions to ask (pick 3)
1. "What level is each role scoped at, and how does Stripe level someone with 11 years who was Principal at a smaller company?"
2. "What's the loop now? Is there a written exercise or take-home?" (Intel: 5–6 rounds over 3–6 weeks, often a take-home.)
3. "Who's the hiring manager for each role, and what's the biggest gap on each team?"
4. "Is the integrations role tied to the new Radar packaging and scoring payments processed elsewhere, or to the core merchant experience?"
5. "Is the Seattle team co-located with Radar engineering, or is most of Radar in South San Francisco?"

End with: "Is there anything about my background you'd like me to clarify?"

### Practice before Monday
- [ ] Message Piyush Rohella (draft in section 5) today or tomorrow
- [ ] Decide on the Fraud v6 "−5%" bullet (confirm or remove) before sending that resume
- [ ] Say the TMAY out loud and time it: **under 75 seconds**
- [ ] Say the pricing and API answers out loud once each (they're the JD2 differentiators)
- [ ] Read the call card numbers once more right before the call
- [ ] After the call: `/interview-debrief`, and send the recruiter a short thank-you within 24 hours

---

## 4. Gaps to close before the hiring-manager round (not needed for Monday)

| Gap | Why it matters | Fix |
|---|---|---|
| **Product sense: segment users, then prioritize** | It's exactly what Stripe flagged in 2024 | `/mock-interview product-sense` with "Design a fraud detection product for Stripe merchants." Open by naming the segments (SMB vs. enterprise vs. platforms; good customers vs. attackers) and the goal, before any solution |
| Payments fundamentals: card networks, auth/capture, issuer vs. acquirer, chargebacks and disputes, card testing, 3DS / SCA, early fraud warnings | Stripe intel says these get tested ("How does online payment processing work end to end?") | 1 hour of study plus `/mock-interview technical` |
| Fraud-analyst tooling | JD1 preferred | Bridge with K3/K4 (evidence pre-filled for human approvers is the same problem as analyst triage) |
| Writing exercise | Stripe is writing-first | `/work-product Stripe Radar specific-interview`: bot vs. legitimate-agent abuse (JD1) or packaging off-Stripe scores (JD2) |
| Leadership answers avg 4.8/10 | Recurring weakness across 4 interviews | `/mock-interview behavioral` with K20, K13, A13 |
| Incident debugging 5/10 | "Fraud spike / approval rate dropped" questions are likely | Practice stabilize → segment → what changed → trace → fix → prevent, with a payments example |
| Open [CONFIRM] items | Fraud v6 "repeat fraud incidents −5%"; who the 5th Keystone client is vs. the 4 contracts in the $7.5M; MDLC teams onboarded (3 vs. 5); A10 GDPR timeline (1 vs. 1.5 years); K30 SLAs signed? | Settle these in experience-library.md before the hiring-manager round |
| Writing proof | Writing is a strength, but no document → decision example is on record | Pick one (an OP1 that won headcount, the Keystone pivot strategy doc, a PBI PR/FAQ) and tell Claude to add it |

Closed since v1: pricing outcome (K32), API integrations (A15: 3 partner teams; A16: 2 Asian marketplaces), fraud outcome (fraud loss rate −15%), retention (all 5 clients renewed), sales partnership (K34 demo / proof of concept / forecasting-only pricing), Marketing on launches.

---

## 5. Referral: Piyush Rohella (PM at Stripe, former Amazon B2B Payments & Lending teammate)

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
