# LinkedIn Experience Descriptions (v2, 2026-10-21)

Paste-ready. Character counts are for the description box (LinkedIn max 2,000). Built from `context-library/experience-library.md` plus facts you confirmed in other sessions on 2026-10-20 (fraud controls, REST APIs, A/B test, VP reporting, privacy-by-default, monitoring coverage, data-residency clients, adoption metrics). Tuned to the keyword synthesis in `linkedin/job-market-synthesis.md`.

Your answers applied: business customers, product unnamed; credit-losses line dropped; MDLC and $8B kept; "Fortune 500 clients"; title stays "Product Manager"; supply chain team and VP FBA added.

---

## Keystone.ai · Principal Product Manager – Technical (1991 chars)
Jun 2024 – Present · Seattle, WA

Keystone.ai builds Deep Enterprise, an agentic AI platform that automates supply chain planning workflows for Fortune 500 clients. I own product strategy, roadmap, pricing and go-to-market, partner with the CEO and CTO, and set direction for 20+ engineers and data scientists.

• Led the pivot from consulting to a product-led B2B SaaS model: $5M ARR, $25M in annualized client savings, 5 enterprise customers in production.
• Took Deep Enterprise from 0→1 to 1→N: MVP in 3 months, forecast accuracy (WAPE) up 21%, enterprise deployment cut from 6 months to 4.
• Prototyped, then shipped a multi-agent system (exception triage, root-cause diagnosis, retrain/override) with tool use, RAG, orchestration and human-in-the-loop approval. Planner effort fell from 4 hours a day to 4 hours a week and client overstock cost from $5M to $2M.
• Designed risk-tiered autonomy with guardrails, audit logs and canary rollouts; autonomous action acceptance rose from 30% to 80%.
• Built AI evaluation and observability: expert reference cases, LLM-as-judge, launch thresholds, regression tests and production traces. Agents launched at 70% recommendation acceptance and helped lift forecast adoption from 50% to 70%.
• Ran agents in shadow mode before production. When adoption at one retailer fell from 70% to 50%, traced it to missing location data, added an act-only-with-sufficient-information guardrail, and restored 70%.
• Grounded agents with a semantic layer, data catalog and AI-generated metadata; model routing cut agent cost ~30%.
• Designed a multi-tenant data platform (ingestion pipelines, validation, lineage, model-ready APIs) that cut deployment from 3 months to 3 weeks. Shipped a managed deployment model that passed enterprise security review and onboarded 2 more clients with data-residency requirements.
• Launched AI assistants for enterprise knowledge workers: HAT-AI (30 PMs, 15 finance products, 120 hours saved a week) and REI-Agent for governed, auditable financial analysis.

Skills (top 3 first): Agentic AI · AI Agents · Generative AI · Large Language Models (LLM) · Retrieval-Augmented Generation (RAG) · AI Evaluation · Workflow Automation · Data Platforms · Product Strategy · Go-to-Market Strategy

---

## Amazon · Sr. Product Manager – Technical, Amazon Financial Services (1887 chars)
Aug 2022 – Jun 2024 · Seattle, WA

Owned ML-powered credit and financing products for business customers on Amazon Business, from strategy, underwriting and risk models through experimentation, launch and growth. Reported monthly to VP-level leadership; the program supported an Amazon S-team goal to grow lending.

• Launched an ML-based financing product and scaled it to 50K+ business customers, driving $71M in incremental revenue through larger basket sizes.
• Built new SMB underwriting on Amazon behavioral data with data science, raising SMB credit approvals from 4% to 15% while capping exposure by risk tier and restricting high-loss categories.
• Built underwriting in-house as a differentiating capability rather than partnering with an outside lender.
• When a 5% test of checkout-only credit underperformed, customer interviews showed SMBs needed to see monthly eligibility to plan purchases; redesigned around monthly limits, transaction controls and delinquency pauses.
• Validated with a 5% A/B test and controlled rollout before scaling; chose batch over real-time underwriting for V1, pulling impact forward 3 months.
• Owned fraud and trust & safety controls for the product: integrated the fraud team's risk model before credit decisions, set its threshold at 0.99 precision to protect legitimate customers' credit lines, and added post-checkout transaction screening and blocklist rules.
• Partnered with data science on the credit risk model (model selection, thresholds set for economic profit, SHAP explainability for business stakeholders).
• Defined REST APIs exposing model decisions (credit eligibility at checkout, fraud checks at onboarding) with backward-compatible versioning.
• Scaled a global credit product with ML-personalized marketing ($15M incremental revenue), credit bureau integrations (+17% data coverage, +7% approval lift), and an onboarding redesign that cut abandonment 50%.

Skills (top 3 first): Machine Learning · Fintech · Credit Risk · Fraud Prevention · Experimentation (A/B Testing) · APIs · Growth Strategy

---

## Amazon · Sr. Product Manager – Technical, ML Ops Platform (1748 chars)
Jul 2020 – Jul 2022 · Seattle, WA

Owned vision, roadmap and adoption for MDLC, the SageMaker-based self-service MLOps platform behind Amazon Lending's risk models ($8B in credit extended), used by 30+ scientists. Before MDLC, each of 50+ risk models (growing 30% a year) took 3–4 months of engineering to ship, with no central governance.

• Interviewed scientists, engineers and risk and compliance partners, then set three pillars: self-service ML pipelines (UI-first, a deliberate cost trade-off for scientist adoption), model governance and privacy, and onboarding run as a product with templates, docs and a scientist community.
• Scaled the platform from 50+ to 100+ production models with standardized pipelines, CI/CD, versioning, lineage and model inventory. Model deployment time fell 40% and model volume doubled with no added headcount.
• Launched automated model monitoring, growing coverage from 30 to 100 models and avoiding ~400 science-weeks of one-time effort.
• Made privacy a platform default for ML across Amazon Payments with Legal and privacy bar raisers: on-demand deletion, customer data-access requests and retention-based deletion. Shipped semi-automated in ~2 months instead of 1.5 years for full automation; saved 5 science FTE a year and was adopted by ~20 teams.
• Built auto-containerization from a git link, saving ~2 engineering headcount; platform features saved 6 science headcount a year overall.
• Made the model portfolio audit-ready, reached NPS 8+ with scientists, and onboarded 5 teams outside Lending.
• Resolved a governance disagreement with a senior technical manager by testing the adoption assumption with customers together; the automated governance features launched.
• Built on AWS: SageMaker, Step Functions, Lambda, Glue and ECR.

Skills (top 3 first): MLOps · Machine Learning Platforms · Amazon SageMaker · Model Governance · Data Privacy · Platform Strategy · Developer Experience

---

## Amazon · Product Manager, Supply Chain & Cost Optimization (1665 chars)
Nov 2018 – Jun 2020

Built ML recommendation and causal attribution products for inventory, pricing and shipping decisions across Amazon and thousands of marketplace sellers, delivering $100M+ in cost savings. Led a 7+ person engineering and science team, worked across 20+ senior stakeholders, and won the VP of Amazon FBA's approval for SPORT to recommend inventory placement to sellers.

• Shipping was ~50% of item cost (~$50B a year), so cost attribution was a top org priority.
• TRACE: launched a causal attribution product that explains shipping-cost changes and prescribes the top action. Unified operational and financial data across 50+ cost drivers from 14 systems owned by 14 teams, and surfaced recommendations to sellers through Seller Central APIs; $40M in savings against a $60M org goal.
• Aligned Finance, Operations, data science, data engineering and engineering on TRACE's design; set data contracts and SLAs with upstream owners, built a multi-TB pipeline on EMR Serverless, and negotiated 15 months of training data instead of 2 years, meeting 95% of needs at far lower compute cost.
• SPORT: built an ML inventory-optimization product recommending moves from high- to lower-cost fulfillment channels. After a missed adoption goal, research with sellers showed the gap was in acting on recommendations; ran an auto-adherence pilot and redesigned discoverability, lifting adoption ~10%.
• MOQ: built an ML recommendation product for item-level purchase thresholds, scaled to 20K merchants and 120K offers with ~60% higher adherence and lower shipping cost, and no measurable conversion decline.
• Built the foundation to expand TRACE to other Amazon marketplaces.

Skills (top 3 first): Machine Learning · Recommender Systems · Causal Inference · Supply Chain Optimization · Data Pipelines · Marketplace Products

---

## Amazon · Product Manager, Amazon Pricing (784 chars)
Oct 2016 – Oct 2018

Owned Amazon's global price-perception program and the insight tools pricing leaders used to set pricing strategy.

• Benchmarked Amazon's price perception against 800+ retailers in 17 countries and launched self-service pricing insight tools adopted by 40+ global pricing leaders.
• Price-perception signals from these tools fed Amazon's pricing models that set product prices, and drove pricing changes.
• Designed requirements for automated price-perception dashboards, replacing manual reporting and saving analyst time.
• Managed a Program Manager and supported their promotion from L4 to L5: coached them to run an external survey vendor and 30+ stakeholders across 15+ countries independently, reviewed analysis before it reached stakeholders, and wrote the promotion document.

Skills (top 3 first): Pricing Strategy · Competitive Intelligence · People Management · Analytics

---

## Cognizant Technology Solutions · Business Analyst (199 chars)
May 2015 – Sep 2016 · Chennai, India

• Owned the pre-sales lifecycle with technical solution architects, designing infrastructure setup solutions and pricing for $25M in deals across Asia Pacific.
• Worked 30+ deals with a 45% win rate.

Skills: Pre-Sales · Solution Architecture · Pricing · Enterprise Technology

---

## Engineers India Limited · Intern
Leave blank or remove.
