# Stripe Radar: two PM roles (inbound from Colleen Barnes, 2026-10-22)

Source: recruiter email from Colleen (Garrett) Barnes, Product Recruiting @ Stripe, plus both JDs pasted by you.
Scores are **est. fit**, from reading the JDs against `experience-library.md` and `career-plan.md`. No Voyage score.

**Job IDs don't match.** Colleen's links use IDs 8258815 (Fraud & Abuse) and 7983854 (Radar). The JDs you pasted have apply links for 8306158 and 8301646. The roles were probably reposted. Confirm the current req with her before you apply.

| | **A. PM, Radar – Fraud & Abuse Prevention** | **B. PM, Radar** (integrations, partners, commercial) |
|---|---|---|
| Apply link ID | 8306158 | 8301646 |
| Core of the job | Find new attacks with customers, build ML detection and controls, trade detection off against friction | Embed Radar in customers' and partners' systems: APIs, integrations, pricing, go-to-market |
| Skill match | 19 | 20 |
| Seniority fit | 13 | 13 |
| Culture signals | 16 | 16 |
| Comp range | 11 | 11 |
| Growth trajectory | 13 | 11 |
| **Est. fit** | **72 / 100** | **71 / 100** |
| Verdict | **Apply. Lead with this one.** | Apply as the second option |

**Recommendation:** Take the call. Ask to be considered for A first. Its preferred qualifications ("trade-offs between detection effectiveness and customer friction") describe the PBI 2.0 fraud threshold decision (A14) almost exactly. B scores the same on paper, but it's an integrations and commercial role, further from ML. External developer platforms and integration partners are also a real gap for you there.

---

## 1. Skill match

### A. Fraud & Abuse Prevention

| Requirement | Match | Evidence (experience library) |
|---|---|---|
| 8+ yrs PM | Strong | Amazon 2016–24 + Keystone 2024–26 |
| Analytical; **SQL when needed**; metric definition | Partial | Strong metrics record (K4 launch gates, A14 precision/recall). **No SQL on record. [CONFIRM: do you write SQL? If yes, add an example to the library.]** |
| Scrappy 0→1 | Strong | K1 Deep Enterprise, A8 MDLC, K11 Codex prototype |
| Commercial acumen, willingness to pay | Strong | $5M ARR (K1), $71M incremental revenue (A1), Deep Enterprise tier pricing |
| Partnering with B2B sales on discovery, positioning, adoption | Partial | Keystone enterprise go-to-market and Fortune 500 rollout. Working directly with a sales team isn't written up as a story |
| Dashboard and API products | Strong | PBI REST APIs (credit eligibility at checkout, BFS block/continue at onboarding), TRACE via Seller Central APIs, self-service pricing insight tools |
| Comfort with ambiguity | Strong | A7 5% controlled launch, K16 |
| Technical depth with eng and data teams | Strong | K2, K6, A8, A14 model selection |
| Written and verbal communication | Strong | Exec reporting (PBI 2.0 to VP level). Watch answer length (see section 6) |
| Ownership, high quality bar | Strong | A10, K5, K27 |
| *Pref:* fraud, risk, security or ML products | **Strong** | A14 PBI fraud controls, A1–A7 credit risk, 100+ production models |
| *Pref:* ML products, detection vs. friction trade-off | **Strong** | A14: set precision 0.99 / recall 0.25 so legitimate customers' credit lines weren't suspended, with BRP post-checkout screening catching the rest. K3 tiered autonomy |
| *Pref:* tools for fraud analysts or risk teams, real-time decision products | Partial | MDLC served 30+ risk-model scientists in Lending. Credit eligibility API at checkout. V1 underwriting was batch, not real-time (A4) |
| *Pref:* SWE or DS background | None | Chemical engineering + MBA. Technical fluency is self-taught and from shipping ML |

Required 10/10 (2 partial), preferred 3/4 → (1.0 × 14) + (0.75 × 6) = **19**

### B. Radar (integrations and commercial)

| Requirement | Match | Evidence |
|---|---|---|
| 8+ yrs PM, analytical/SQL, 0→1, commercial acumen, Dashboard + API, communication, ownership | Same as A | Same as A (SQL partial) |
| B2B sales partnering on discovery, **technical evaluation**, commercialization | Partial | Keystone security review passed (K13), managed-service deployment (K12). No sales-team story written up |
| **Pricing and monetization for B2B** | Partial | Set Deep Enterprise tier pricing and packaging, plus an implementation fee. Pricing results are [NEEDS DETAIL]. Cognizant deal pricing for $25M APAC |
| Go deep on APIs, architecture, integration trade-offs; explain them to customers | Strong | K12, K13, A14 API versioning, A11 upstream data contracts |
| *Pref:* fraud, risk or ML products | Strong | A14, A1–A7 |
| *Pref:* **developer platforms + integration partners**, high-stakes external relationships | Partial | Credit bureau integrations (+17% data coverage, +7% approval lift). Fortune 500 client integrations. The MLOps platform served internal scientists, not external developers. **Real gap:** no third-party developer platform or partner ecosystem |

Required 10/10 (3 partial), preferred 2/2 (1 partial) → **20** by the formula. The formula counts partials as matches, so this flatters B. The gap is in what B is mainly about.

## 2. Seniority fit: 13 / 20 (both)
- Years: well clear of 8+.
- **Level is the risk.** The base band ($178.6K–$268K) "may be inclusive of several career levels." Stripe intel shows L4 (Senior PM) at $350K–$520K TC and L5 (Staff/Principal) at $500K–$750K+. Your target is Principal. Without a level on the posting, expect to be considered for L4 and to have to argue for L5 using scope (Weakness 2: Principal title from a smaller company).

## 3. Culture signals: 16 / 20 (both)
- Work model 5/5: Seattle office is listed, and at least 50% in office fits "Seattle-area on-site/hybrid." Ask whether Radar is one of the teams with higher in-office requirements.
- Stage 4/5: late-stage private and big-company scale. Stripe is #37 on your target list.
- Industry 3/5: fintech and ML risk products are your third industry tier, not enterprise or platform AI. It isn't "non-AI scope" (your dealbreaker), because Radar is an ML product.
- Work style 4/5: urgency plus attention to craft, ambiguity, rigor. Stripe is writing-first, which matches your memo-driven Amazon background.

## 4. Comp: 11 / 20 (both)
- Listed: **base** $178.6K–$268K (midpoint ~$223K), plus equity and bonus.
- TC estimate: L4 $350K–$520K, L5 $500K–$750K+ (levels.fyi via `insider-data/company-intel/stripe.md`). [VERIFY: Company intel last updated 2026-03-24. Key details may have changed.] Seven months old, so run `/salary-research Stripe PM Seattle` before negotiating.
- At L4, the low half of the band is below your $380–400K floor. At L5, it covers your $600K target.
- **Pay-cut advisory:** if Stripe levels you at the bottom of L4, this is a cut from your $400K current TC. Follow the LawnStarter rule: get the level and the full package (base + bonus + equity per year) at the recruiter screen before calling it aligned.

## 5. Growth trajectory: A 13 / B 11
- Stripe's brand is strong, and both roles are ML products at large scale, which counters Weakness 2.
- Neither is enterprise agent work, which is what your dream offer is about. A keeps you closer to the ML and evaluation core (detection quality, friction trade-offs, monitoring) that carries over to AI platform roles. B is more commercial and integration-heavy.

## 6. Watch-outs from your interview history
- **Domain bridge.** You missed the Amazon B2B Payments & Lending story at Count. Here it's your opening line.
- **Don't overclaim A14.** The fraud team built the BFS model. You owned how PBI 2.0 used it: integration, threshold, blocklist rules, suspensions.
- **Incident diagnosis** scored 5/10 at Count R2 (payment API failing for 5% of users). Stripe asks "Payment success rate dropped 2%. What do you investigate?" Practice stabilize → segment → what changed → trace → fix → prevent.
- **Length and metric drift.** Keep answers under 200 words and use the canonical metrics card.
- **Employment status.** Say "most recently at Keystone.ai." Never say "currently."
- **Closing question.** Replace "What's the ideal candidate?" with a Radar-specific one. For example: "Which attack type is growing fastest outside checkout (free-trial abuse, bots, card testing), and where is Radar weakest against it today?"

## 7. Likely Stripe questions (from company intel)
- "Design a fraud detection product for Stripe merchants." Directly on topic for role A.
- "Why Stripe? Why payments?"
- "How does online payment processing work end to end?" Know card networks, issuers, acquirers, 3DS, chargebacks and disputes.
- "Payment success rate dropped 2%. What do you investigate?"
- A take-home is possible. Stripe weights writing quality.

---

## Drafts (you send these yourself)

### Reply to Colleen (email)

> Hi Colleen,
>
> Thanks for reaching out. Yes, I'd be glad to talk. Radar is close to work I've done: at Amazon I owned how our B2B credit product used the fraud team's risk model, including integration, thresholds and blocklist rules. I set the fraud threshold to avoid suspending legitimate customers' credit lines and relied on post-checkout screening to catch the rest. Since then I've built ML and agentic AI products for Fortune 500 customers at Keystone.ai, with evaluation and human-in-the-loop controls.
>
> I'm based in Seattle, so the Seattle office works well. I've grabbed a time through your link. Before we talk, could you share the level these two roles are scoped to? The links in your note also show different job IDs from the current postings, so I want to make sure I'm looking at the right ones.
>
> Best,
> Shifia

(~120 words. Book the slot first, then send.)

### Note to Piyush Rohella (LinkedIn or text)

> Hi Piyush! Hope Stripe's been good to you. A Stripe recruiter reached out about two PM roles on Radar, one on fraud and abuse prevention and one on integrations. Before my screen, could I get 20 minutes to hear how the Radar team works and who the hiring managers are? If it looks like a fit after that, I'd be grateful for a referral, but no pressure either way.

Why send it even though the recruiter came to you: a former teammate who can speak to your Amazon payments and risk work helps at hiring-manager review. That's where LawnStarter stalled. He can also tell you which of the two roles is the better bet.

## Next actions
1. Book Colleen's 30-minute slot and send the reply above.
2. Message Piyush before the screen.
3. Before the screen: `/interview-prep Stripe PM Radar Fraud & Abuse Prevention`, then `/mock-interview technical` on "Payment success rate dropped 2%."
4. Resolve [CONFIRM] SQL and [NEEDS DETAIL] Keystone pricing outcomes in the experience library. Both roles ask for them.
5. If the level comes back L4, run `/salary-research` before going further.
