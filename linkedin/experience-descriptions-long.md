# LinkedIn Experience Descriptions (v3, 2026-10-21)

Paste-ready. Character counts are for the description box (LinkedIn max 2,000). Built from `context-library/experience-library.md` plus facts you confirmed in other sessions on 2026-10-20 (fraud controls, REST APIs, A/B test, VP reporting, privacy-by-default, monitoring coverage, data-residency clients, adoption metrics). Tuned to the keywords from the four target job descriptions in `linkedin/keyword-map.md` (Qualtrics, Intuit, Domino Data Lab, Procore).

Your answers applied: business customers, product unnamed; credit-losses line dropped; MDLC and $8B kept; "Fortune 500 clients"; title stays "Product Manager"; supply chain team and VP FBA added.

---

## Keystone.ai · Principal Product Manager – Technical (1,967 chars)
Jun 2024 – Present · Seattle, WA

Keystone.ai builds Deep Enterprise, an enterprise AI platform that runs agentic workflows for supply chain planning at Fortune 500 clients. I own AI product strategy, roadmap, tiered pricing and packaging, and go-to-market, partner with the CEO and CTO, and set direction for 20+ engineers and data scientists.

• Led the pivot from consulting to a product-led platform: $5M ARR, $25M in annualized client savings, 5 enterprise customers in production. Productized data pipelines, ML pipelines and AI capabilities so each new client reused them instead of rebuilding.
• Prioritized AI use cases: chose forecasting as the first, then traded 2 months of accuracy work for agents after a prototype showed over 70% recommendation acceptance. Forecast accuracy (WAPE) improved 21%; deployment fell from 6 months to 4.
• Shipped a multi-agent system on LangGraph covering agent orchestration, MCP tool calling, memory, RAG and human-in-the-loop approval. Planner effort fell from 4 hours a day to 4 hours a week; client overstock from $5M to $2M.
• Set guardrails through risk-tiered autonomy, audit logs and canary rollouts; autonomous action acceptance rose from 30% to 80%.
• Built agent evaluation and observability: reference cases, LLM-as-judge, launch thresholds, regression tests and production traces. Defined AI quality and adoption KPIs; agents launched at 70% acceptance.
• Drove adoption with planner interviews and 3 months of hands-on support; forecast adoption rose from 50% to 70%.
• Led context engineering with a semantic layer, data catalog and AI-generated metadata; model routing cut agent cost ~30%.
• Built a multi-tenant data platform (ingestion, validation, lineage, model-ready APIs) that cut deployment from 3 months to 3 weeks; a managed deployment model passed enterprise security review.
• Redesigned finance workflows with AI: HAT-AI (30 PMs, 15 finance products, 120 hours saved a week) and REI-Agent for governed, auditable financial analysis.

Skills (top 3 first): Agentic AI · AI Platforms · AI Evaluation · AI Agents · Generative AI · Large Language Models (LLM) · Retrieval-Augmented Generation (RAG) · Workflow Automation · AI Strategy · Go-to-Market Strategy

---

## Amazon · Sr. Product Manager – Technical, Amazon Financial Services (1,915 chars)
Aug 2022 – Jun 2024 · Seattle, WA

Owned ML-powered credit and financing products for business customers on Amazon Business, from strategy, underwriting and risk models through experimentation, launch and growth. Reported monthly to VP-level leadership; the program supported an Amazon S-team goal to grow lending.

• Launched an ML-based financing product and scaled it to 50K+ business customers, driving $71M in incremental revenue through larger basket sizes.
• Built new SMB underwriting on Amazon behavioral data with data science, raising SMB credit approvals from 4% to 15% while capping exposure by risk tier and restricting high-loss categories.
• Ran a 5% A/B test before scaling. Checkout-only credit underperformed, and customer interviews showed SMBs needed to see monthly eligibility to plan purchases, so I redesigned around monthly limits, transaction controls and delinquency pauses.
• Owned fraud and trust-and-safety controls for the product: integrated the fraud team's risk model before credit decisions, set its threshold at 0.99 precision to protect legitimate customers' credit lines, and added post-checkout transaction screening and blocklist rules.
• Partnered with data science on the credit risk model: model selection, thresholds set for economic profit, and SHAP explainability with model documentation for business stakeholders.
• Defined REST APIs exposing model decisions (credit eligibility at checkout, fraud checks at onboarding) with backward-compatible versioning.
• Scaled a global credit product with ML-personalized marketing ($15M incremental revenue), credit bureau integrations (+17% data coverage, +7% approval lift), and an onboarding redesign that cut abandonment 50%.

Skills (top 3 first): Machine Learning · Fintech · Credit Risk · Fraud Prevention · Experimentation (A/B Testing) · APIs · Growth Strategy

---

## Amazon · Sr. Product Manager – Technical, ML Ops Platform (1,785 chars)
Jul 2020 – Jul 2022 · Seattle, WA

Owned vision, roadmap and adoption for MDLC, Amazon Lending's model development lifecycle platform: self-service MLOps on SageMaker for the risk models behind $8B in credit, used by 30+ data scientists. Before MDLC, each of 50+ risk models (growing 30% a year) took 3–4 months of engineering to ship, with no central governance.

• Interviewed scientists, engineers and risk and compliance partners, then set three pillars: self-service ML pipelines (UI-first, a deliberate cost trade-off for scientist adoption), model governance and privacy, and onboarding run as a product with templates, docs and a scientist community.
• Scaled the platform from 50+ to 100+ production models with standardized pipelines, CI/CD, versioning, lineage and model inventory. Model deployment time fell 40% and model volume doubled with no added headcount.
• Launched automated model monitoring, growing coverage from 30 to 100 models and avoiding ~400 science-weeks of one-time effort.
• Drove change beyond my org: with Legal and privacy bar raisers, made privacy a platform default for ML across Amazon Payments (on-demand deletion, customer data-access requests, retention-based deletion). Shipped semi-automated in ~2 months instead of 1.5 years for full automation; saved 5 science FTE a year and was adopted by ~20 teams.
• Built auto-containerization from a git link, saving ~2 engineering headcount; platform features saved 6 science headcount a year overall.
• Made the model portfolio audit-ready, reached NPS 8+ with scientists, and onboarded 5 teams outside Lending.
• When a senior technical manager pushed back on governance features, tested the adoption assumption with customers together; the automated features launched.
• Built on AWS: SageMaker, Step Functions, Lambda, Glue and ECR.

Skills (top 3 first): MLOps · Model Governance · Machine Learning Platforms · Amazon SageMaker · Data Privacy · Platform Strategy · Developer Experience

---

## Amazon · Product Manager, Supply Chain & Cost Optimization (1,665 chars)
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
