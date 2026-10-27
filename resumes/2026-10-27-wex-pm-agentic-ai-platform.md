# Resume: WEX, Product Manager – Agentic AI Platform

Date: 2026-10-27 · Files: `resumes/Shifia_Mittal_Resume_WEX.docx` (master) and `.pdf` (1 page, rendered and checked)
Base: copy of `Shifia_Mittal_Resume_Coinbase.docx` (latest style-guide layout); role-level Amazon years restored per the style guide.
Context: recruiter outreach on LinkedIn from Ana Carolina Souza (Senior Technical Sourcer), 2026-10-27. 100% remote (US). No Otter calls with WEX on record.

**Keyword Coverage: 100% (14/14 requirements matched: 10 strong, 4 partial, 0 unmatched)**
The JD is a recruiter message, so the 14 requirements were inferred from its themes and all treated as REQUIRED. A short, themed message inflates coverage; the 4 partials (paved roads/quickstarts, Alpha → GA, identity and access, tracing) are the real gaps and are where the hiring manager will probe.

## Framing
The hands-on builder-experience PM for an agentic AI platform: shipped agents in production (MCP, LLMs, model routing, governance), worked directly with early adopters, and ran platform adoption on two platforms (Keystone, Amazon MDLC). The role is "Product Manager" and the message says it's hands-on rather than backlog work, so bullets lead with what she built, launched and fixed, not team size.

## Requirement match
| # | Requirement (inferred) | Match | Evidence on resume |
|---|---|---|---|
| 1 | Agentic AI platform for internal and external teams | STRONG | Keystone agentic platform (5 Fortune 500 clients); MDLC internal platform |
| 2 | Platform adoption | STRONG | Adoption 50% → 70%; 5 teams onboarded; ~20 Payments teams; fraud score adopted by 6 teams |
| 3 | Builder experience | STRONG | MDLC self-service (deployment −40%); API catalog for app developers; onboarding as a product |
| 4 | Quickstarts / paved roads | PARTIAL | Templates, docs, community (MDLC); data contracts and API catalog with integration examples. No "quickstart" by name |
| 5 | Staged releases (Alpha → GA) | PARTIAL | Shadow mode → eval gates → production; canary rollout; 5% controlled launch. No Alpha/Beta/GA labels on record |
| 6 | Enterprise AI governance | STRONG | Autonomy tiers, faithfulness evals, audit logs (30% → 80%); SR 11-7 model governance |
| 7 | Adoption metrics | STRONG | Forecast adoption, recommendation acceptance, action acceptance, team onboarding |
| 8 | Go-to-market motions | STRONG | Demos, proofs of concept, modular pricing, 2 upgrades (+$500K ACV each), every client renewed |
| 9 | Hands-on, works directly with early adopters, removes onboarding friction | STRONG | Codex prototype; 3 months of high-touch support; onboarding maintenance 5 → 3 weeks |
| 10 | LLMs and agentic AI | STRONG | Multi-agent system on LLMs and LangGraph |
| 11 | Tool access / MCP | STRONG | MCP tool access; guardrails in tool definitions |
| 12 | Model routing | STRONG | ~30% agent run cost cut |
| 13 | Identity and access policies | PARTIAL | Access controls and encryption on MDLC; PII blocking on data platform (not on resume). No agent identity/IAM on record |
| 14 | Tracing / logging | PARTIAL | Agent traces explained an adoption drop; audit logs. No tracing product built |

WEX is a payments company. The Amazon Business financing and fraud-score bullets carry that context, though the message doesn't ask for it.

## Gaps
| # | Requirement | Gap | Suggested response |
|---|---|---|---|
| 1 | Identity and access policies for agents | Partial (platform access controls, not agent identity) | Recruiter call: "My access-control work was at the ML platform level: access controls and encryption in Amazon's MLOps platform, and sensitivity tiers with PII blocking in the agent's data catalog at Keystone. I haven't owned agent identity or per-tool authorization, and I'd want to learn how WEX handles it." |
| 2 | Formal Alpha → Beta → GA release program | Partial | Cover letter: "I've shipped every AI launch in stages: the forecasting agent ran in shadow mode until it cleared >70% recall and acceptance gates, autonomous actions went out through a canary, and Amazon's financing product started at 5% of customers." |
| 3 | Quickstarts for agent builders | Partial | Referral framing: "She treated onboarding as a product on Amazon's ML platform (templates, docs, community) and cut per-team onboarding from 5 to 3 weeks." |
| 4 | Level fit | Risk | The title is "Product Manager"; she is a Principal. A recruiter may read flight risk or a level mismatch. Ask the level and comp band in the first call. Mitigate: the hands-on framing on the resume, and a clear reason in the call (governed agents at enterprise scale is the core problem she wants). |
| 5 | Comp | Risk | A "Product Manager" band at WEX is likely below the $380–400K floor in career-plan.md. [VERIFY with `/salary-research WEX Product Manager remote`]. Get the full package (base + bonus + equity) at the screen. |

## Reviews (first draft)
**Recruiter (6-second scan):** PASS. Summary line 2 and the first 3 Keystone bullets show "agentic AI platform", "MCP tool access", "staged release", "early adopters". Risk: the "Principal" title against a "Product Manager" req.

**ATS:** standard headers; no tables or text boxes; links resolve (`mailto:shifia.mittal09@gmail.com`, `https://www.linkedin.com/in/shifiamittal`, `https://github.com/shifiamittal`). JD terms in bullet text: agentic AI 2, AI platform 2, adoption 3, builder 2, go-to-market 2, paved road 1, staged 1, governance 2, LLM 1, tool access 1, MCP 1, model routing 1, access controls 1, traces 1, audit logs 1, early adopters 2, onboarding 1, hands-on 1, release 3. Missing (not claimable): quickstart, Alpha, GA, identity, tracing (as a product), logging (as a product).

**Hiring manager (Agentic AI platform lead):** credible. Would probe (1) what she built herself vs. engineering (the Codex prototype helps), (2) how MCP tools were authorized and scoped, (3) what she'd measure for builder adoption on day one, (4) why a Principal wants a PM role.

## Revisions made
- **Red (cut from Coinbase base):** modular services vs. monolith, managed-service deployment, CI/CD containerization, TRACE-only infra framing; the retired fraud-loss figure ("fraud loss rate fell 15%", Source Decision 26) is not used.
- **Green:** Codex prototype (K11), tiered autonomy and audit logs (K3), early-adopter support (K10/K21), agent traces (K5), GTM and pricing (K32/K34), API catalog as a paved road (K29), fraud score adoption by 6 teams (A21), onboarding as a product (A8/A20).
- **Orange (JD language):** "model routing", "staged the release", "paved road", "early adopters", "builder onboarding", "go-to-market", "governance".
- **Render pass:** fixed two short last lines (MDLC bullet, data-platform bullet); swapped the weak opener "Worked directly".
- Restored role-level years on Amazon titles (style guide; Coinbase had dropped them as a one-off).

## Regression check (v1 final)
- **Keyword count:** as above; "model routing" and "staged" added in the last round, nothing dropped.
- **Fact check:** every number matches Canonical Metrics: $7.5M ARR, $25M savings, 5 clients, 70% acceptance, 4 hrs/day → 4 hrs/week, 30% → 80% (K3), 50% → 70% (K10), 70% → 50% → 70% (K5), ~30% (K14), +$500K ACV ×2 (K32), 5 client dashboards (K29), 50K+/$71M, ~$18M/6 teams (A21), −40%/100+, 5 → 3 weeks/5 teams, 30 → 100/~400 science-weeks, ~20 teams/5 FTE, $40M/$100M+, 40+ leaders, $25M/45%.
- **Style guide:** SAD order, one message per bullet, results bolded, no first person, no Skills section, 2-line summary, years-only dates. Deviation: none with a qualitative result.
- **Render:** 1 page; dates on one line; no 1–3-word last lines; links checked in the .docx.

## Source check
| Resume bullet (first 60 chars) | Source | Match |
|---|---|---|
| Summary | Profile Basics; Canonical Metrics; K10; A8 | REWORDED |
| Led 0→1 product strategy and go-to-market for an enterprise… | K1; LinkedIn bullet ("go-to-market"); Source Decision 24 | REWORDED |
| Built a multi-agent system on LLMs, LangGraph and MCP tool a… | K2; Source Decision 18; Canonical (70%, 4 hrs/day) | REWORDED |
| Prototyped an agent in Codex to prove value while resources… | K11 | REWORDED |
| Set governance for agent actions after 60% of early automate… | K3 | REWORDED |
| Ran 3 months of high-touch support with early adopters, plus… | K10, K21 | REWORDED |
| Used agent traces to explain an adoption drop at one client… | K5 | REWORDED |
| Added model routing after pilot model costs exceeded the cost… | K14 | REWORDED |
| Ran go-to-market with Sales, Marketing and Finance: demoed t… | K32, K34, Keystone launches with Marketing, client retention | REWORDED |
| Created the paved road for app developers and scientists on… | K29, K15 | REWORDED |
| Launched Amazon Business’ 0→1 ML financing product through a… | A1, A7; S-team goal; 0→1 note | REWORDED |
| Wrote the PRFAQ and led a business fraud score that teams co… | A21 (placement follows Stripe v7) | REWORDED |
| Owned vision and roadmap for a self-service ML platform on AW… | A8, A20 | REWORDED |
| Treated builder onboarding as a product, with templates, doc… | A8 (templates, docs, community), A20 | REWORDED |
| Made governance a platform default (access controls, encrypt… | A9, A20, Source Decision 23 | REWORDED |
| Made privacy compliance a platform default under EU and US p… | A10 | REWORDED |
| Launched TRACE, a causal cost-attribution product that expla… | A11 | REWORDED |
| Launched self-service price-perception insight tools… | Amazon Pricing; Source Decision 20 | REWORDED |
| Cognizant line | Source Decision 21 | REWORDED |

**Bullets removed (no source):** 0 · **Flagged [UNVERIFIED]:** 0 · **INFERRED:** 0

## Text copy (from the .docx)
```
SHIFIA MITTAL
shifia.mittal09@gmail.com | 206-356-6348 | Seattle, WA, USA | linkedin.com/in/shifiamittal | github.com/shifiamittal
SUMMARY
Principal product manager with 11+ years shipping AI/ML products at scale, hands-on with builders and early adopters. Led an agentic AI platform at Keystone’s AI startup ($7.5M ARR) and a self-service ML platform at Amazon (100+ production models).
EXPERIENCE	2015 - Present (11 years)
Keystone.ai | AI division of Keystone, a 20+ year tech and economics advisory firm (450+ employees, PE-backed)
Principal Product Manager-Technical	2024 - Present
- Led 0→1 product strategy and go-to-market for an enterprise agentic AI platform, moving Keystone from consulting to product with 30+ engineers and data scientists; reached $7.5M ARR and $25M in annualized client savings across 5 Fortune 500 clients.
- Built a multi-agent system on LLMs, LangGraph and MCP tool access that diagnoses forecast problems and recommends fixes, with guardrails in tool definitions; staged the release through shadow mode and eval gates to 70% recommendation acceptance, cutting planner effort from 4 hrs/day to 4 hrs/week.
- Prototyped an agent in Codex to prove value while resources were constrained; over 70% of its recommendations were adopted, which won leadership’s approval to trade 2 months of planned accuracy work for agent capabilities.
- Set governance for agent actions after 60% of early automated actions were reversed: three autonomy tiers (act, recommend for approval, surface only), faithfulness evals, audit logs and a canary rollout; raised action acceptance from 30% to 80%.
- Ran 3 months of high-touch support with early adopters, plus interviews and workflow observation; found the blockers (explainability, review load, accuracy) and sequenced fixes, raising forecast adoption from 50% to 70%.
- Used agent traces to explain an adoption drop at one client (70% to 50% in 4 weeks): a warehouse move was missing from the agent’s data. Added the dataset and an escalate-on-missing-data guardrail, restoring adoption to 70%.
- Added model routing after pilot model costs exceeded the cost of manual work, sending simple agent tasks to low-cost models and ambiguous ones to stronger models; cut agent run cost ~30% with lower latency and unchanged quality.
- Ran go-to-market with Sales, Marketing and Finance: demoed the platform, scoped proofs of concept and priced modular subscriptions that start with forecasting and add agents; every client renewed, and 2 upgraded to agents (+$500K ACV each).
- Created the paved road for app developers and scientists on the data platform: data contracts, an API catalog (schemas, auth, integration examples) and release communication; the app team onboarded 5 client dashboards with no extra effort.
Amazon	2016 - 2024 (8 years)
Sr. Product Manager-Technical, Amazon Business Financing & Credit	2022 - 2024
- Launched Amazon Business’ 0→1 ML financing product through a 5% controlled launch, experimentation and monthly VP-level reviews against an S-team goal; scaled to 50K+ customers and $71M in incremental revenue.
- Wrote the PRFAQ and led a business fraud score that teams could call anywhere in the customer journey, choosing precision over recall to protect legitimate businesses; adopted by 6 teams, avoiding ~$18M in fraud losses.
Sr. Product Manager-Technical, ML Ops Developer Platform	2020 - 2022
- Owned vision and roadmap for a self-service ML platform on AWS SageMaker for 30+ data scientists, replacing ~1.5 months of engineering setup per model; cut deployment time 40% and scaled to 100+ production models with flat headcount.
- Treated builder onboarding as a product, with templates, documentation and community support instead of asking each new team for 1 HC; cut maintenance from 5 to 3 weeks per team and onboarded 5 new teams.
- Made governance a platform default (access controls, encryption, versioning, lineage, threshold-based monitoring) under Federal Reserve model-risk rules; expanded monitoring from 30 to all 100 production models, avoiding ~400 science-weeks of setup.
- Made privacy compliance a platform default under EU and US privacy law with Amazon’s privacy and legal teams; adopted across ~20 Amazon Payments teams, saving 5 science FTE per year.
Product Manager-Technical, Supply Chain Optimization	2018 - 2020
- Launched TRACE, a causal cost-attribution product that explained shipping-cost changes across 50+ drivers from 14 teams’ systems and recommended the top fix to sellers, driving $40M of the team’s $100M+ in savings.
Product Manager, Amazon Pricing	2016 - 2018
- Launched self-service price-perception insight tools benchmarking Amazon against 800+ retailers in 17 countries; adopted by 40+ global pricing leaders, with signals feeding the pricing models that set Amazon’s prices.
Cognizant Technology Solutions | Designed infrastructure solutions for 30+ APAC deals worth $25M (45% win rate)	2015 - 2016
EDUCATION
MBA, Marketing & Operations, IIT Roorkee (2013-15) | B.E., Chemical Engineering, Thapar University (2009-13)
```
