# Resume Output - Stripe · Product Manager, Radar
**Keyword Coverage: 95% (19/20 requirements matched: 15 strong, 4 partial, 1 unmatched)**

Source: JD pasted by Shifia on 2026-10-22 ([posting](https://stripe.com/careers/apply/product-manager-radar/8301646)). Offices: Chicago, New York, **Seattle**, South San Francisco. Hybrid, at least 50% in office. US base $178,600–$268,000 plus equity.

This JD lists 20 requirements, more than most. A 95% score here (75% counting strong matches only) means a strong fit. The reason is real overlap: you've owned fraud-model decisions, risk controls, and APIs on an ML credit product, plus B2B pricing and 0→1 work. The JD's own labels sorted requirements into REQUIRED and PREFERRED; responsibilities count as REQUIRED.

## Before you send

1. **Comp check.** Base tops out at $268K. Your floor is $380–400K total comp, so equity decides whether this works. The Stripe intel file puts L4 (Senior PM) at $350K–$520K TC and L5 (Staff/Principal) at $500K–$750K+. [VERIFY: Company intel last updated 2026-03-24. Key details may have changed.] At the recruiter screen, ask for the full package (base + bonus + equity value) and the level before calling it aligned. Run `/salary-research Stripe PM L4/L5 Seattle` before that call.
2. **Level.** The 8+ year minimum and that range point to Senior or Staff, not Principal. You have 11+ years. Titles stay factual. The bullets show hands-on work, not org scope, so the resume doesn't read as overqualified.
3. **Referral first.** Piyush Rohella is a PM at Stripe and a former teammate from Amazon B2B Payments & Lending. Ask him before applying cold: `/referral-request piyush-rohella stripe`. He can speak to the credit and fraud work directly.
4. **Keystone dates.** Shown as "Jun 2024 – Present" (your call, same as the Rose International resume). My earlier advice still holds: employment verification will report Mar 2026, so "2024 – 2026" is safer. Never say you're currently at Keystone.
5. **Two things to confirm** (see gaps 1 and 5). Do you write SQL? Do you have a pricing outcome for Deep Enterprise? Either one would make this stronger.

## Gaps (1 unmatched, 4 partial, 1 missing detail)

| # | JD Requirement | Gap Type | Suggested Response |
|---|---|---|---|
| 1 | "Writing SQL when needed" (REQUIRED) | No match. Your library has nothing on SQL. | **Confirm first.** If you write SQL, tell me and I'll add it to Skills and a bullet. If not, don't claim it. Cover letter: "I work directly in the data: I ran the hierarchy-level deep-dive that set our forecast reconciliation method, and I partnered with Science on the portfolio simulation that cut projected credit losses 6–8%." |
| 2 | "Partnering with B2B sales teams on customer discovery, technical evaluation, and commercialization" (REQUIRED) | Partial. Evidence: product strategy and GTM for Fortune 500 clients at Keystone, a deployment model that passed a flagship security review and won 2 data-residency clients, and pre-sales at Cognizant (30+ deals, 45% win rate). No record of working with a dedicated sales team at scale. | Referral message to Piyush: "At Keystone I owned the product side of enterprise deals: technical evaluation, security review, and the deployment model that let us win clients with strict data-residency requirements." If you worked with Keystone's sales or BD team on specific deals, tell me and I'll add it. |
| 3 | "Collaborate with sales, marketing, and partnerships teams to drive adoption" (REQUIRED) | Partial. Strong on marketing (ML-personalized marketing, $15M) and partners (credit bureau integrations). Thin on sales, same as gap 2. | Cover letter: "I've driven adoption through marketing as much as product: ML-personalized marketing added $15M in incremental revenue for our credit product, and credit bureau partner integrations lifted approvals 7%." |
| 4 | "Developer platforms and integration partners" (PREFERRED) | Partial. You built an internal developer platform: self-service ML for 30+ scientists, with onboarding treated as a product (templates, docs, community) and NPS 8+. External partners: credit bureaus, plus data contracts with 14 upstream teams for TRACE. You haven't run an external developer ecosystem. | Cover letter: "My developers were Amazon's scientists. I built a self-service ML platform for 30+ of them, treating onboarding as a product with templates, docs, and community, and reached NPS 8+. Radar's developer experience is the same problem with external users." |
| 5 | "Strong written communication" (REQUIRED) | Partial. Stripe runs on writing, and they'll judge it from your materials and the take-home. | Show it: run `/work-product Stripe Radar get-interview`. One idea: fraud controls for agent-initiated payments, using your risk-tiered autonomy and precision/recall threshold work. Send it with the referral ask. |
| 6 | "Pricing and monetization models for B2B products" (REQUIRED) | Strong, but no outcome metric. The tier-based Deep Enterprise pricing is on record; ACV, upsell, and ARR impact are marked [NEEDS DETAIL]. | If you have a number (e.g., average contract value by tier, share of clients on the agent tier), add it to `experience-library.md` and the bullet gets much stronger. |

---

## Resume

**SHIFIA MITTAL**
Seattle, WA | 206-356-6348 | shifia.mittal09@gmail.com | linkedin.com/in/shifiamittal

**SUMMARY**
Technical product manager who builds ML-powered fraud, risk, and credit products, and the APIs and platforms behind them. At Amazon, launched an ML financing product on Amazon Business to 50K+ customers ($71M incremental revenue), owning fraud-model integration, precision/recall thresholds, and underwriting controls. At Keystone.ai, took an enterprise AI platform from 0→1 to $5M ARR, setting its pricing and packaging and taking Fortune 500 clients through technical evaluation and deployment.

**EXPERIENCE**

**Keystone.ai** | Seattle, WA | Jun 2024 – Present
*Principal Product Manager – Technical* (enterprise AI decision platform for Fortune 500 companies; $5M ARR)
- Led 0→1 strategy, go-to-market, and roadmap for Deep Enterprise, moving Keystone from consulting to a product-led model; reached $5M ARR and 5 enterprises, and cut deployment from 6 to 4 months.
- Set tier-based subscription pricing and packaging, with tiers by scope and capability (forecasting → recommendations → agents) plus an implementation and managed-service fee.
- Shaped enterprise deals through technical evaluation: chose managed-service deployment inside client environments, with modular services that passed the flagship client's security review, then onboarded 2 more clients whose data-residency requirements pure SaaS couldn't meet.
- Built the multi-tenant data platform (ingestion, validation, lineage, data contracts, APIs) with 7–8 engineers; cut client onboarding from 2 months to 2 weeks and saved ~2 weeks of data wrangling per model.
- Launched a multi-agent decision system with risk-tiered autonomy, human approval, and evals for groundedness, tool compliance, and action safety; 70% of recommendations accepted at launch, and planner effort fell from 4 hrs/day to 4 hrs/week.

**Amazon** | Seattle, WA | Oct 2016 – Jun 2024
*Sr. Product Manager – Technical*

*Amazon Business Financing & Credit (2022 – 2024)*
- Owned fraud prevention for an ML credit product: integrated a business fraud-score model before credit assessment and post-checkout transaction fraud screening, and set the threshold at 99% precision (1% false-discovery rate) so legitimate customers' $8K–$250K credit lines weren't suspended.
- Launched an ML-based financing product on Amazon Business through a 5% controlled launch and scaled it to 50K+ customers, driving $71M in incremental revenue; defined REST APIs exposing credit eligibility at checkout and fraud decisions at onboarding.
- Redesigned underwriting and risk controls (exposure caps by risk tier, restricted high-loss categories, transaction-level controls); raised SMB approval from 4% to 15%, with no credit losses after full launch.
- Scaled a global credit product through credit bureau integrations (+17% data coverage, +7% approval lift), ML-personalized marketing ($15M incremental revenue), and an onboarding redesign that cut abandonment 50%.

*Machine Learning Platform (2020 – 2022)*
- Owned vision and roadmap for a self-service, SageMaker-based ML platform that 30+ scientists used to deploy and monitor 100+ production models; treated onboarding as a product (templates, docs, community), reached NPS 8+, and cut deployment time 40%.
- Made privacy compliance a platform default: defined deletion and data-return requirements for ML with Legal and privacy bar raisers; adopted as standard policy across ~20 Amazon Payments teams.

*Supply Chain ML Recommendations (2018 – 2020)*
- Launched TRACE, a causal recommendation engine served through Seller Central APIs, unifying 50+ shipping-cost drivers owned by 14 teams; drove $40M of the $100M+ in savings across 3 ML seller products.
- Scaled MOQ recommendations to 20K merchants and 120K offers, with ~60% higher adherence and no measurable conversion decline.

**Cognizant Technology Solutions** | Business Analyst | May 2015 – Sep 2016: ran pre-sales with solution architects on 30+ infrastructure deals (45% win rate), designing solutions and pricing for $25M in APAC deals.

**SKILLS**
- **Fraud & risk:** fraud prevention, precision/recall thresholds, credit underwriting, risk controls, AI action safety, privacy compliance
- **Product & commercial:** 0→1 products, B2B pricing and packaging, go-to-market, API products, developer onboarding, experimentation
- **Technical:** REST APIs, ML platforms (SageMaker), data contracts, multi-agent systems, RAG, evals, AWS

**EDUCATION**
MBA, Marketing & Operations, IIT Roorkee | B.E., Chemical Engineering, Thapar University

---

## Recruiter Review
- **First impression (6-second scan): PASS after revisions.** The summary's first line says fraud, risk, credit, and APIs, so a Radar recruiter sees the match before reaching Keystone's supply-chain context.
- **Relevance signal:** Reverse-chronological puts Keystone first, which is mostly supply-chain AI. The top Keystone bullets are 0→1, pricing, and technical evaluation (domain-neutral, and named in the JD), not forecasting. The fraud bullet opens the Amazon section.
- **Level:** Reads as hands-on IC. No team-building lines. The direct-report story stays for interviews.
- **Readability:** About one page. Three Amazon sub-areas keep 8 years from reading as one block.

## ATS Review
- **Section headers:** Standard (Summary, Experience, Skills, Education).
- **Keyword matches:** fraud prevention, risk, machine learning / ML, API / REST APIs, payments, pricing, packaging, go-to-market, B2B, 0→1, engineering, data science (scientists), developer, integrations, onboarding, docs, adoption, roadmap, strategy, revenue, security review, technical evaluation, experimentation.
- **Missing keywords:** SQL (not claimed, see gap 1), "Dashboard" as a named product (your UI work is self-service tools, not a Stripe-style merchant dashboard), "retention" (no retention metric on record).
- **Formatting issues:** None. No tables or columns in the resume body. Dates are parseable (Mon YYYY). Arrows (→) and en dashes are fine in Word/PDF, but turn "0→1" into "zero-to-one" if you paste into a plain-text ATS form.

## Traceability Audit

| Resume Bullet (first 60 chars) | Source Section | Original Text | Match Type |
|---|---|---|---|
| Summary: Technical product manager who builds ML-powered fra... | A14; Amazon FS; K1; Source Decision 17; K12/K13 | Combines canonical facts: 50K+ customers, $71M, fraud threshold ownership, $5M ARR, tier pricing, security review | REWORDED (summary) |
| Led 0→1 strategy, go-to-market, and roadmap for Deep Enterp... | Keystone LinkedIn + resume bullets; K1 | "Led product strategy and go-to-market... drove Keystone's pivot from consulting to a product-led model"; "Led 0→1 strategy and roadmap for Deep Enterprise... reduced deployment from 6 months to 4 months, and scaled to 5 enterprises"; $5M ARR canonical | REWORDED |
| Set tier-based subscription pricing and packaging, with tie... | Source Decision 17 | "set tier-based subscription pricing and packaging for Deep Enterprise. Tiers differed by scope..., features (forecasting → recommendations → agents) and implementation; an implementation/managed-service fee applied on top" | EXACT |
| Shaped enterprise deals through technical evaluation: chose... | K12 + K13 | "Recommended deploying as a managed service inside the client's environment... onboarded 2 additional clients with strict data-residency requirements that pure SaaS couldn't serve"; "Chose modular services... Passed the flagship client's security review on time" | REWORDED (two stories) |
| Built the multi-tenant data platform (ingestion, validation... | Keystone resume bullet; K15; Canonical Metrics | "ingestion, transformation, validation, lineage, APIs, and model-ready contracts"; team 7–8 engineers; onboarding 2 months → 2 weeks; ~2 weeks/model saved | REWORDED |
| Launched a multi-agent decision system with risk-tiered aut... | Keystone resume bullets; K2; K3; AI Evaluation bullet | Multi-agent forecasting system, human approval, risk-tiered autonomy; evals for groundedness, tool compliance, action safety; 70% acceptance at launch; 4 hrs/day → 4 hrs/week | REWORDED |
| Owned fraud prevention for an ML credit product: integrated... | A14 | "BFS score assessed before credit assessment...; post-checkout integration with Buyer Risk Prevention"; "chose precision 0.99, recall 0.25, FDR 0.01... false positives suspend legitimate customers' $8K–$250K credit lines" | REWORDED |
| Launched an ML-based financing product on Amazon Business t... | Amazon FS bullet; A1/A7; A14; Source Decision 15 | "Launched an ML-based financing product... 50K+ customers, driving $71M incremental revenue"; 5% launch; "defined REST APIs exposing model output (credit eligibility at checkout; BFS block/continue at onboarding)" | REWORDED |
| Redesigned underwriting and risk controls (exposure caps by... | A3; A1; Canonical Metrics | "Capped exposure by risk tier and restricted financing on high-loss categories"; transaction-level controls; SMB approval 4% → 15%; no losses after full launch | REWORDED |
| Scaled a global credit product through credit bureau integr... | Amazon FS bullet | "ML-personalized marketing ($15M incremental revenue), credit bureau integrations (+17% data coverage, +7% approval lift), and onboarding CX redesign (50% reduction in abandonment)" | REWORDED |
| Owned vision and roadmap for a self-service, SageMaker-base... | ML Ops bullets; A8 | "30+ scientists... 100+ production models"; "scaling onboarding as a product (templates, docs, community)"; NPS 8+; deployment −40% | REWORDED |
| Made privacy compliance a platform default: defined deletio... | A10 | "Defined the requirements for ML with Amazon-wide privacy bar raisers and Legal: on-demand deletion (OD3), returning customer data (DSAR)..."; "standard platform policy across Amazon Payments (~20 teams)" | REWORDED |
| Launched TRACE, a causal recommendation engine served throu... | A11; Supply Chain bullets | "causal recommendation engine surfaced through Seller Central APIs"; 50+ cost factors, 14 teams; $40M; $100M+ across SPORT, TRACE, MOQ | REWORDED |
| Scaled MOQ recommendations to 20K merchants and 120K offers... | MOQ bullet | "scaled to 20K merchants and 120K offers, driving ~60% higher adherence... no measurable conversion decline" | EXACT |
| Cognizant: ran pre-sales with solution architects on 30+ in... | Cognizant; Source Decision 21 | "Owned the pre-sales lifecycle and worked with technical solution architects... pricing for deals worth $25M"; "30+ infrastructure-setup deals, 45% win rate" | REWORDED |

**Bullets removed (no source):** 0. The Rose International resume says "10 privacy bar raisers"; that number isn't in the experience library, so this resume leaves it out.
**Bullets flagged for verification:** 0 INFERRED. One REWORDED bullet ("Shaped enterprise deals...") combines K12 and K13; both facts are on record, but read it once to confirm the framing.

## Revisions Made
- **RED:** Cut HAT-AI, REI-Agent, the WAPE metric, the forecast-adoption bullet, the S-team/OKR bullet, and Amazon Pricing. They're real but don't serve a fraud/API/commercial role, and they cost space.
- **GREEN:** Added the B2B pricing bullet, the technical-evaluation/security-review bullet, REST APIs on the credit product, and the Cognizant win rate, to cover the pricing, API, and sales-partnership requirements.
- **BLUE:** Through-line is "builds ML-powered risk products and the APIs and platforms behind them." Every Amazon bullet now points at fraud, risk, APIs, or developer onboarding.
- **ORANGE:** Mirrored the JD's wording: "technical evaluation," "go-to-market," "pricing and packaging," "docs," "onboarding," "integrations."
- **Recruiter review fix:** Moved the fraud bullet to the top of the Amazon section. It was third when this draft followed the library's order.
- **Recruiter review fix:** Reordered Keystone to open with 0→1, pricing, and technical evaluation instead of the forecasting agent, so supply chain doesn't dominate the top third.
- **ATS review fix:** Added "Amazon Payments" (privacy bullet) and "REST APIs" (Skills) to pick up exact-match terms.
