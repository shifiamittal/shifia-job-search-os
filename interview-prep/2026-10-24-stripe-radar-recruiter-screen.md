# Stripe Radar: Fit Scores + Recruiter Screen Prep

Prepared: 2026-10-24 · Recruiter call: Monday 2026-10-26
Roles: (1) PM, Radar – Fraud and Abuse Prevention (job 8306158) · (2) PM, Radar (job 8301646)
Sources: experience-library.md, career-plan.md, qa-master.md, interview-history.md, connection-tracker.md, `insider-data/company-intel/stripe.md`, Stripe blog and support pages, levels.fyi (fetched 2026-10-24).

[VERIFY: Company intel last updated 2026-03-24. Key details may have changed.] The interview format and question bank below come from that file. The comp and Radar product facts were refreshed from the web today.

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
### Total Score: 72/100: APPLY WITH REFERRAL ONLY → in practice: **pursue; this is the stronger of the two**

| Dimension | Score | Key Factor |
|---|---|---|
| Skill Match | 18/20 | 9 of 10 required strong; your Amazon fraud-threshold decision maps directly to the "detection vs. friction" preferred qualification |
| Seniority Fit | 14/20 | You meet 8+ yrs, but the band spans several levels; risk of being leveled below Principal scope |
| Culture Signals | 16/20 | Seattle hybrid is fine; late-stage company; fintech is your third-ranked industry |
| Comp Range | 12/20 | Total comp ~$372K at L3 vs. ~$541K at L4; the outcome depends on level |
| Growth Trajectory | 12/20 | ML-powered product plus AI-agent bot detection; strong brand, but not the agent-platform dream role |

### JD2: PM, Radar
### Total Score: 69/100: APPLY WITH REFERRAL ONLY → **keep as second option**

| Dimension | Score | Key Factor |
|---|---|---|
| Skill Match | 17/20 | Strong on commercial and technical-integration work; pricing is real but has no outcome metric on record |
| Seniority Fit | 14/20 | Same as JD1 |
| Culture Signals | 16/20 | Same as JD1 |
| Comp Range | 12/20 | Same as JD1 |
| Growth Trajectory | 10/20 | Integration and go-to-market scope; less ML and AI. Your career plan lists "non-AI scope" as a reason to say no |

The recruiter came to you, which already does part of what a referral does. A referral from Piyush still helps you get in front of the hiring manager (see section 6).

### Skill Match: JD1 (18/20)

| JD Requirement | Type | Match | Source |
|---|---|---|---|
| 8+ yrs PM | Req | STRONG* | Amazon 2016 → Keystone Mar 2026. *Product-titled since 2018; 2016–18 was a Program Manager role building self-serve insight tools. Count as 9+ years and don't break it down unless asked |
| Analytical, SQL, metric definition | Req | STRONG | Adoption, override and acceptance metric definitions (Keystone table); K4 eval launch gates; hands-on queries (weakness answer) |
| Scrappy 0→1 | Req | STRONG | K1 Deep Enterprise; K11 Codex prototype; K16 demo in 2–3 weeks |
| Commercial acumen / willingness to pay | Req | STRONG | Deep Enterprise tiered pricing and packaging; $5M ARR; $71M PBI revenue |
| B2B sales partnership (discovery, positioning, adoption) | Req | STRONG | Keystone GTM with Fortune 500 clients; Cognizant pre-sales (30+ deals, 45% win rate) |
| Dashboard **and** API products, developer empathy | Req | PARTIAL | A14 REST APIs (credit eligibility at checkout; fraud-score block/continue at onboarding); TRACE via Seller Central APIs; MLOps platform for 30+ scientists. No public developer API product |
| Ambiguity | Req | STRONG | A7 5% launch with controls; A4 batch vs. real time |
| Technical fluency | Req | STRONG | K2/K6 architecture; A8 MDLC; A14 model choices |
| Written + verbal communication | Req | STRONG (broad) | VP-level monthly PBI updates; promotion document (A13). Stripe weighs writing heavily, so expect a written exercise |
| Ownership / quality bar | Req | STRONG | K5, K27 production fixes |
| Fraud / risk / security / ML products | Pref | STRONG | **A14 PBI 2.0 fraud controls** (two-stage: fraud score + post-checkout BRP), A3 credit risk |
| ML: detection effectiveness vs. customer friction | Pref | STRONG | **A14 threshold: precision 0.99 / recall 0.25** so legitimate customers' $8K–$250K credit lines weren't suspended, with BRP as the backstop. Also K3 tiered autonomy |
| Tools for fraud analysts/risk teams; real-time decision dev products | Pref | PARTIAL | MDLC served risk scientists (governance, monitoring); credit eligibility API at checkout. No fraud-analyst console |
| SWE / DS background | Pref | PARTIAL | Chemical engineering degree; hands-on builds (S1, patent retrieval). No SWE or DS title |

Required 9.5/10 · Preferred 3/4

### Skill Match: JD2 (17/20), only the rows that differ from JD1

| JD Requirement | Type | Match | Source |
|---|---|---|---|
| B2B sales on discovery, **technical evaluation**, commercialization | Req | STRONG | Cognizant pre-sales with solution architects ($25M APAC deals); K12/K13 passing a Fortune 500 security review |
| **Pricing and monetization for B2B** | Req | PARTIAL | Set Deep Enterprise tiered pricing (scope × features × implementation fee). No pricing-outcome metric on record [NEEDS DETAIL]. Find one before the hiring-manager round |
| APIs, architecture, integration trade-offs, explained to customers | Req | STRONG | K12 managed service in client environment; K13 modular services; K17 model-facing data contracts; A11 data contracts and SLAs with 14 upstream teams |
| Developer platforms + integration partners, high-stakes external relationships | Pref | PARTIAL | Credit bureau integrations (+17% data coverage, global consumer credit); MLOps platform (internal developers); flagship client deployment. No external developer ecosystem |

Required 9/10 · Preferred 1.5/2

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
- A common equity-valuation risk at Stripe: it's private, so equity value depends on the latest tender offer. Ask how equity is valued.

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
- **New packaging:** four tiers (Lite, Standard, Plus, Pro), with new pricing from **Jan 22, 2027**. Starting Oct 21, 2026, Radar applies to every subscription payment, not just the first. This is exactly JD2's monetization scope.
- Stripe says it blocked **$110B in fraud** last year.

Your hook: *"Fraud has moved past checkout into accounts, trials and now AI agents. I've made the detection-vs-friction call on a real payments product, and I've built agents. The question of which agent is legitimate sits right where my two careers meet."*

---

## 4. Recruiter screen script (30 min). Each answer under 200 words.

**Before the call:** read the canonical metrics table. Say "most recently at Keystone.ai," never "currently." Leave out filler words.

### Tell me about yourself (~130 words, Stripe version)
"I'm a Principal Technical PM with 11+ years building ML and AI products at scale. At Amazon, I spent two years in B2B Payments and Lending. I scaled an ML financing product to 50,000+ business customers and $71M in incremental revenue, and I owned how the product used Amazon's fraud model: the score threshold, blocklist rules and suspensions. I set it for very high precision, because a false positive froze a legitimate customer's credit line. Before that I built supply-chain ML products that saved $100M+ and owned the MLOps platform behind 100+ production models. Most recently at Keystone.ai, I led a 0→1 agentic AI platform that reached $5M ARR, including a multi-agent system with risk-tiered autonomy and human approval. Radar sits exactly where those meet: ML decisions under adversarial pressure, with real customer friction at stake."

### Why Stripe / why Radar?
Use the hook from section 3, then add one line: "I like products where the trade-off is explicit and measurable: blocked fraud against approved good customers."

### Why are you looking? (qa-master primary script)
Use it as written. If they ask directly: "My role was part of a restructuring at Keystone.ai earlier this year…" Say it in one or two sentences, then move on.

### Which role interests you more?
"The Fraud and Abuse Prevention role is the closest fit: I've made the precision/recall trade-off on a live payments product and built agentic systems, which matters as more agents start to transact. I'm also interested in the Radar integrations role, especially the new tiered packaging. Could you tell me how the two teams differ and what level each is scoped at?"

### Comp ("What are your expectations?")
Stripe's range tops out near your target only at L4 and above. Don't open with a number until you know the level.
1. First: "Could you share which level each role is scoped at, and the full package for that level: base, bonus and equity?" (This is the LawnStarter rule: ask for the full package before calling it aligned.)
2. If pressed: "For senior PM scope at Stripe, I'm targeting total compensation in the mid-to-high $500s, and I'm flexible on the mix of base and equity." This sits inside levels.fyi's L4–L5 range, so you aren't quoting above their band.
3. Never share current pay. Use the Washington redirect from qa-master.

### Leveling ("What level are you targeting?")
Use the qa-master script and lead with scope: $5M ARR company-level product strategy at Keystone, 8 years at Amazon, ownership of both the fraud-threshold decision and the platform.

### Logistics
- Green Card holder; no sponsorship needed.
- Seattle; fine with 50% in office.
- Available immediately.
- "Interviewing elsewhere?": "Yes, a few conversations in enterprise AI. This one stands out because of the fraud and AI-agent overlap. What's your timeline?"

### Precision traps (interviewers will probe these)
- **Fraud model:** "The fraud team owned the Business Fraud Score model; I owned how our product used it: integration, threshold, blocklist and suspensions." **Never say you built the fraud model.**
- **Fair lending:** don't claim fair-lending review (ECOA/Reg B). You can claim adverse-action reason codes, segment-impact testing and the thin-file SMB analysis.
- **API products:** you defined internal REST APIs and versioning. Don't describe it as a public developer platform.

### Questions to ask the recruiter (pick 3)
1. "What level is each role scoped at, and how does Stripe level someone with 11 years who was Principal at a smaller company?"
2. "What's the interview loop now? Is there a written exercise or take-home?" (Stripe intel: 5–6 rounds over 3–6 weeks, often a take-home.)
3. "Who's the hiring manager for each role, and which team is earlier-stage?"
4. "Is the Seattle team co-located with Radar engineering, or is most of Radar in South San Francisco?"
5. "What's made past candidates successful in this loop?"

End with: "Is there anything about my background you'd like me to clarify?"

---

## 5. Gaps to close before the hiring-manager round (not needed for Monday)

| Gap | Why it matters | Fix |
|---|---|---|
| Payments fundamentals: card networks, auth/capture, issuer vs. acquirer, chargebacks and disputes, card testing, 3DS / SCA, early fraud warnings | Stripe intel says these get tested ("How does online payment processing work end to end?") | 1 hour of study plus `/mock-interview technical` |
| Pricing outcome metric (ACV, upsell, ARR from tiers) | JD2 requires pricing; your library entry is [NEEDS DETAIL] | Add the number to experience-library.md if you remember it; otherwise describe the design without inventing a result |
| Public developer API experience | Both JDs require Dashboard and API products | Frame A14 APIs, TRACE Seller Central APIs and the MLOps self-serve platform honestly as "APIs consumed by internal and seller-facing developers" |
| Fraud-analyst tooling | JD1 preferred | Bridge with K3/K4 (evidence pre-filled for human approvers is the same problem as analyst triage) |
| Writing exercise | Stripe is writing-first | `/work-product Stripe Radar specific-interview` on bot vs. legitimate-agent abuse |
| Leadership answers avg 4.8/10 | Recurring weakness across 4 interviews | `/mock-interview behavioral` with K20, K13, A13 |
| Incident debugging 5/10 | "Fraud spike / approval rate dropped" questions are likely | Practice stabilize → segment → what changed → trace → fix → prevent, with a payments example |

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
