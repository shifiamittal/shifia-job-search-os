# Resume: Coinbase, Group PM, Core Infrastructure & Reliability

Date: 2026-10-24 · Files: `resumes/Shifia_Mittal_Resume_Coinbase.docx` (master) and `.pdf` (1 page, rendered and checked)
Base: `Shifia_Mittal_Resume_Stripe_Radar_Fraud.docx` (latest style-guide-compliant layout). Context: recruiter-sourced (Aga Weston-Ball); recruiter screen Tue Oct 27.

**Keyword Coverage: 83% (10/12 requirements matched; 4 strong, 6 partial).** Most matches are partial: this is an infrastructure role and the resume is honest about it.

## Framing
Platform PM one layer above infrastructure: MDLC as an internal developer platform (provisioning, CI/CD, monitoring, onboarding), Keystone multi-cloud managed-service deployment and agentic diagnostics, regulated lending, cost work. No claims of Kubernetes, networking, SLO, failover, or cloud-spend ownership.

## Requirement match

| JD requirement | Match | Evidence on resume |
|---|---|---|
| 10+ years PM | PARTIAL | 11+ years total; early Amazon years were Program Manager |
| 5+ years cloud infra / platform engineering / reliability | PARTIAL | ML Ops developer platform (2020–22) + Keystone data platform and multi-cloud deployment (2024–26); not core cloud infra |
| Multi-year platform strategy with measurable results | STRONG | MDLC roadmap (deployment −40%, 100+ models flat headcount); Keystone platform ($7.5M ARR) |
| Technical depth: compute, networking, storage, Kubernetes, multi-cloud, distributed systems | NONE (partial on containers, IaC, multi-cloud) | Gap |
| Cross-functional work in regulated, high-trust environments | STRONG | SR 11-7 monitoring, privacy compliance, fraud controls |
| Explaining strategy and cost tradeoffs to executives | STRONG | C-suite pivot; investors on managed service; VP reviews; 6 weeks vs. 10× rewrite |
| Responsible GenAI with human oversight | STRONG | Multi-agent system with human approval, shadow mode, evaluation gates |
| Roadmap for compute, networking, multi-region/multi-cloud | PARTIAL | Multi-cloud deployment (AWS, Azure); compute provisioning for users |
| SLOs, capacity planning, failover, incident reduction | NONE (partial on monitoring and incident diagnosis) | Gap |
| Evaluate/adopt infra tech, build vs. buy | PARTIAL | Modular services vs. monolith; managed service vs. SaaS |
| Align investments, cloud spend, compliance | PARTIAL | Agent run cost −30%; compliance strong; no cloud-spend ownership |
| Self-serve capabilities, developer experience | STRONG | Self-service provisioning, pipelines, CI/CD, onboarding as a product |

## Gaps

| # | Requirement | Gap | Suggested response |
|---|---|---|---|
| 1 | Kubernetes, networking, distributed systems depth | No match | Recruiter screen: "My platform work has been one layer above infrastructure: provisioning, CI/CD, and monitoring for 100+ production models, and multi-cloud deployment at Keystone. I haven't owned compute or networking directly." |
| 2 | SLOs, failover, capacity planning | Partial (threshold monitoring, incident diagnosis) | Bridge: "MDLC monitoring worked like SLOs: defined thresholds, alerts, and a required response on breach. I'd bring that discipline to infrastructure SLOs." Don't claim SLO ownership. |
| 3 | 5+ years cloud infra | Partial | Ask what made the profile stand out; if they need a classic infra PM, the gap is real. Bryan Gough intro can test fit. |
| 4 | Group PM people management | Not on resume | Use career-plan Weakness 1 wording: one direct report promoted L4 → L5; dotted-line PMs at Keystone. Team-size [CONFIRM] in A20 still open. |

## Reviews (first draft)

**Recruiter (6-second scan):** PASS with caveat. Top third shows "platforms", "self-service", "multi-cloud", "infrastructure-as-code", "reliability isolation". A recruiter matching "Kubernetes" or "SRE" won't find them, which is honest. Summary fits in 2 lines.

**ATS:** Standard headers; no tables or text boxes; links resolve (`mailto:`, LinkedIn, GitHub). Keyword count in text: platform 9, cost 7, engineering 5, self-service 4, deployment 4, roadmap 2, cloud 2, and 1 each for reliability, infrastructure-as-code, multi-cloud, compute, capacity, provisioning, CI/CD, monitoring, alerting, regulatory, compliance, security. Missing (not claimable): Kubernetes, networking, SLO, failover, multi-region, observability.

**Hiring manager (Sr. Director, Infra):** Credible as a platform PM; would probe (1) what she owned vs. what SageMaker did, (2) whether she has set SLOs or run incidents, (3) cloud cost ownership, (4) people management for a Group PM role. Credibility risk is low because nothing overclaims.

## Revisions made
- Summary cut from 3 lines to 2.
- Removed "NPS of 8+" (reads oddly on a resume; source phrasing ambiguous).
- Added the onboarding bullet (5 teams; maintenance 5 → 3 weeks) to fill space with a platform-adoption result.
- Fixed one-word last line (dropped "(Pulumi)" and "multi-tenant").
- Cognizant line shortened to one line; now says "infrastructure solutions".
- "won 2 additional clients" → "onboarded" (matches the source).

- v5 (user request): removed years from Amazon role-level titles (company span 2016 - 2024 kept); moved ML Ops Developer Platform above Financing & Credit. One-off for this resume; style guide unchanged.

## Source check
| Resume bullet (first 60 chars) | Source | Match |
|---|---|---|
| Led 0→1 product strategy and roadmap for an enterprise AI s… | Stripe/R37 bullet; K1; $7.5M canonical | REWORDED |
| Persuaded leadership and investors to deploy as a managed s… | K12 (managed service, IaC, 2 clients) + K15 (Pulumi IaC across AWS and Azure) | REWORDED (multi-cloud IaC for client deployments confirmed 2026-10-24) |
| Chose modular services over a monolith for reliability isol… | K13 | REWORDED |
| Launched a multi-agent system that flags forecast problems,… | K2/K3; R37 bullet | REWORDED |
| Diagnosed an agent adoption drop at one client (70% to 50% … | K5 | REWORDED |
| Fixed pilot unit economics, where model cost exceeded the c… | K14 | REWORDED |
| Built a multi-tenant data platform with 8 engineers (ingest… | K15; canonical 3 months → 3 weeks | REWORDED |
| Launched Amazon Business' ML financing product via experime… | R37 bullet; canonical $71M, 50K+ | EXACT |
| Integrated the fraud score, domain risk signals, and checko… | Source Decision 26; A14 | REWORDED |
| Owned vision and roadmap for a self-service internal develo… | A8; A20 (8+ eng HC/yr); deployment −40% confirmed 2026-10-24 | REWORDED |
| Replaced ~1.5 months of engineering setup per model with se… | A20 pipeline automation; A8 100+ models | REWORDED |
| Automated CI/CD so every mainline commit builds a versioned… | A20 containerization (~1 week/model; ~2 eng HC over 2 years) | REWORDED |
| Turned team onboarding into a product, investing in documen… | A20 onboarding; 5 teams confirmed 2026-10-24 | REWORDED |
| Made threshold-based monitoring and alerting the platform d… | A20 governance; A9 (30 → 100, ~400 science-weeks) | REWORDED |
| Made privacy compliance a platform default under EU and US … | A10 | REWORDED |
| Launched TRACE, a causal cost-attribution product that expl… | A11; canonical $40M of $100M+ | REWORDED |
| Launched self-service price-perception insight tools benchm… | R37 bullet | EXACT |
| Cognizant: Designed infrastructure solutions for 30+ APAC d… | Work history (infrastructure service solutions, $25M); Source Decision 21 | REWORDED |

Bullets removed (no source): 0. Flagged for verification: 0 (multi-cloud bullet confirmed 2026-10-24).

## Regression check (v4)
Keywords: no JD term dropped since v3 ("Pulumi" removed by choice; not a JD term). Facts: all numbers match canonical metrics. Style: SAD order, results bolded, no first person, no 1–3-word last lines. Render: 1 page, dates on one line, links live.

## Text copy (from the .docx)
```
SHIFIA MITTAL
shifia.mittal09@gmail.com | 206-356-6348 | Seattle, WA, USA | linkedin.com/in/shifiamittal | github.com/shifiamittal
SUMMARY
Principal product manager with 11+ years shipping platforms and AI/ML products at scale: an agentic AI platform at Keystone’s AI startup ($7.5M ARR) and, at Amazon, a self-service ML platform (100+ production models) and credit products ($71M revenue).
EXPERIENCE	2015 - Present (11 years)
Keystone.ai | AI division of Keystone, a 20+ year tech and economics advisory firm (450+ employees, PE-backed)
Principal Product Manager-Technical	2024 - Present
- Led 0→1 product strategy and roadmap for an enterprise AI supply chain platform, persuading C-suite executives to pivot from consulting to a product-led model and directing 30+ engineers and data scientists; reached $7.5M ARR and $25M in annualized client savings across 5 Fortune 500 clients.
- Persuaded leadership and investors to deploy as a managed service in clients’ cloud instead of SaaS, productizing multi-cloud deployment with infrastructure-as-code on AWS and Azure; onboarded 2 additional clients with strict data-residency needs.
- Chose modular services over a monolith for reliability isolation and selective deployment, showing 6 extra weeks cost less than a 10× rewrite later; passed the flagship client’s security review on time and onboarded a second client with no refactor.
- Launched a multi-agent system that flags forecast problems, diagnoses the root cause and recommends a fix, automating only low-risk, reversible actions and routing the rest to human approval; shipped through shadow mode and evaluation gates to 70% recommendation acceptance, cutting reviewer effort from 4 hrs/day to 4 hrs/week.
- Diagnosed an agent adoption drop at one client (70% to 50% over 4 weekly cycles), tracing it to a warehouse move missing from the agent’s data; added the dataset and an escalate-on-missing-data guardrail, restoring adoption to 70%.
- Fixed pilot unit economics, where model cost exceeded the cost of manual work, by routing simple cases to low-cost models and ambiguous ones to stronger models; cut agent run cost ~30% with lower latency and unchanged quality.
- Built a multi-tenant data platform with 8 engineers (ingestion, validation, lineage, data contracts, PII blocking), cutting deployment from 3 months to 3 weeks.
Amazon	2016 - 2024 (8 years)
Sr. Product Manager-Technical, ML Ops Developer Platform
- Owned vision and roadmap for a self-service internal developer platform on AWS SageMaker used by 30+ risk and credit data scientists; secured 8+ engineering HC a year and cut deployment time 40%.
- Replaced ~1.5 months of engineering setup per model with self-service provisioning and pipelines: users choose compute type and capacity, and runs trigger automatically on certified data; scaled to 100+ production models with flat headcount.
- Automated CI/CD so every mainline commit builds a versioned container image with identical dev and prod dependencies, removing a week of engineering work per model and saving ~2 engineering HC over 2 years.
- Turned team onboarding into a product, investing in documentation and community support instead of asking each new team for 1 HC; cut maintenance from 5 to 3 weeks per team and onboarded 5 new teams.
- Made threshold-based monitoring and alerting the platform default to meet Federal Reserve model-risk rules (SR 11-7), expanding coverage from 30 to all 100 production models and avoiding ~400 science-weeks of setup.
- Made privacy compliance a platform default under EU and US privacy law (deletion, data return, retention) with Amazon’s privacy and legal teams; adopted across ~20 Amazon Payments teams, saving 5 science FTE per year.
Sr. Product Manager-Technical, Amazon Business Financing & Credit
- Launched Amazon Business’ ML financing product via experimentation, a 5% controlled launch, and monthly VP-level reviews against an S-team goal; scaled to 50K+ customers and $71M in incremental revenue.
- Integrated the fraud score, domain risk signals, and checkout controls into SMB credit in a regulated lending business, setting the fraud threshold at 99% precision to protect legitimate businesses; fraud loss rate fell 15%.
Product Manager-Technical, Supply Chain Optimization
- Launched TRACE, a causal cost-attribution product that explained shipping-cost changes across 50+ drivers from 14 teams’ systems and recommended the top fix to sellers, driving $40M of the team’s $100M+ in savings.
Product Manager, Amazon Pricing
- Launched self-service price-perception insight tools benchmarking Amazon against 800+ retailers in 17 countries; adopted by 40+ global pricing leaders, with signals feeding the pricing models that set Amazon’s prices.
Cognizant Technology Solutions | Designed infrastructure solutions for 30+ APAC deals worth $25M (45% win rate) 	2015 - 2016
EDUCATION
MBA, Marketing & Operations, IIT Roorkee (2013-15) | B.E., Chemical Engineering, Thapar University (2009-13)
```
