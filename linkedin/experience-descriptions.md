# LinkedIn Experience Descriptions (v5, 2026-10-21)

Full length (up to 2,000 characters) with the keywords from `linkedin/keyword-map.md`, laid out to scan: a 2–3 line summary, short labeled sections, one idea per bullet, and a closing Focus line. The earlier dense version is in `linkedin/experience-descriptions-long.md`.

---

## Keystone.ai · Principal Product Manager – Technical (1,924 chars)
Jun 2024 – Present · Seattle, WA

Enterprise AI platform for supply chain planning at Fortune 500 clients. I own AI product strategy, roadmap, tiered pricing and packaging, and go-to-market. I work with the CEO and CTO and set direction for 20+ engineers and data scientists.

STRATEGY AND GROWTH
• Led the pivot from consulting to a product platform: $5M ARR, $25M in annual client savings.
• 5 enterprise customers in production; deployment cut from 6 months to 4.
• Forecast accuracy (WAPE) improved 21%.
• Prioritized AI use cases: forecasting first, then agents once a prototype hit 70%+ acceptance.
• Productized data pipelines, ML pipelines and AI capabilities so each new client reuses them.

AGENTS
• Shipped a multi-agent system on LangGraph: orchestration, MCP tool calling, memory and RAG.
• Human-in-the-loop approval for exception triage, root-cause diagnosis and retrain/override.
• Planner work fell from 4 hours a day to 4 hours a week; client overstock from $5M to $2M.

EVALUATION AND GUARDRAILS
• Agent evaluation: reference cases, LLM-as-judge, launch thresholds, regression tests.
• Observability through production traces and AI quality and adoption KPIs.
• Risk-tiered autonomy with audit logs and canary rollouts; action acceptance rose from 30% to 80%.
• Agents launched at 70% acceptance; forecast adoption rose from 50% to 70%.

DATA AND CONTEXT
• Context engineering with a semantic layer, data catalog and AI-generated metadata.
• Model routing cut agent cost ~30%.
• Multi-tenant data platform (ingestion, validation, lineage, APIs): deployment from 3 months to 3 weeks.
• Managed deployment model passed enterprise security review.

AI FOR FINANCE WORKFLOWS
• HAT-AI assistant: 30 PMs, 15 finance products, 120 hours saved a week.
• REI-Agent: governed, auditable financial analysis in natural language.

Focus: AI platforms · agentic AI · agent orchestration · agent evaluation · context engineering · use-case prioritization

Skills (top 3 first): Agentic AI · AI Platforms · AI Evaluation · AI Agents · Generative AI · Large Language Models (LLM) · Retrieval-Augmented Generation (RAG) · Workflow Automation · AI Strategy · Go-to-Market Strategy

---

## Amazon · Sr. Product Manager – Technical, Amazon Financial Services (1,865 chars)
Aug 2022 – Jun 2024 · Seattle, WA

ML-powered credit and financing products for business customers on Amazon Business. I owned strategy, underwriting, risk models, experimentation, launch and growth, and reported monthly to VP-level leadership. The program supported an Amazon S-team goal to grow lending.

GROWTH
• Launched an ML financing product and scaled it to 50K+ business customers.
• Drove $71M in incremental revenue through larger basket sizes.
• ML-personalized marketing added $15M in incremental revenue.
• Onboarding redesign cut abandonment 50%.

UNDERWRITING AND RISK
• Built SMB underwriting on Amazon behavioral data: approvals rose from 4% to 15%.
• Capped exposure by risk tier and restricted high-loss categories.
• Built underwriting in-house rather than partnering with an outside lender.
• Credit bureau integrations: +17% data coverage, +7% approval lift.

ML AND DATA SCIENCE
• Partnered with data science on the credit risk model: model selection and profit-based thresholds.
• SHAP explainability and model documentation for business stakeholders.
• Chose batch over real-time underwriting for V1, pulling impact forward 3 months.

FRAUD AND TRUST & SAFETY
• Integrated the fraud team's risk model ahead of credit decisions.
• Set its threshold at 0.99 precision to protect legitimate customers' credit lines.
• Added post-checkout transaction screening and blocklist rules.

PLATFORM AND EXPERIMENTATION
• Defined versioned REST APIs for credit eligibility at checkout and fraud checks at onboarding.
• Validated with a 5% A/B test and controlled rollout before scaling.
• When a 5% test of checkout-only credit underperformed, interviews showed SMBs needed monthly eligibility to plan purchases.
• Redesigned around monthly limits, transaction controls and delinquency pauses.

Focus: fintech · credit risk · machine learning · fraud prevention · experimentation · APIs

Skills (top 3 first): Machine Learning · Fintech · Credit Risk · Fraud Prevention · Experimentation (A/B Testing) · APIs · Growth Strategy

---

## Amazon · Sr. Product Manager – Technical, ML Ops Platform (1,819 chars)
Jul 2020 – Jul 2022 · Seattle, WA

MDLC, Amazon Lending's model development lifecycle platform: self-service MLOps on SageMaker for 30+ data scientists and the risk models behind $8B in credit. I owned vision, roadmap and adoption.

THE PROBLEM
• 50+ risk models, growing 30% a year, each taking 3–4 months of engineering to ship.
• No central model governance.

PLATFORM
• Interviewed scientists, engineers and risk and compliance partners to set requirements.
• Set three pillars: self-service ML pipelines, model governance and privacy, onboarding as a product.
• Chose a UI-first design, trading build cost for scientist adoption.
• Ran onboarding with templates, docs and a scientist community.
• Standardized pipelines, CI/CD, versioning, lineage and model inventory.
• Auto-containerization from a git link saved ~2 engineering headcount.
• Built on AWS: SageMaker, Step Functions, Lambda, Glue, ECR.

RESULTS
• Scaled from 50+ to 100+ production models.
• Deployment time fell 40%; model volume doubled with no added headcount.
• Platform features saved 6 science headcount a year.
• NPS 8+ with scientists; 5 teams outside Lending adopted it.

MODEL GOVERNANCE
• Automated model monitoring: coverage from 30 to 100 models, ~400 science-weeks avoided.
• Made the model portfolio audit-ready.
• Tested an adoption concern with customers alongside a skeptical senior technical manager; the governance features launched.

PRIVACY ACROSS AMAZON PAYMENTS
• With Legal and privacy bar raisers, made privacy a default for ML across ~20 teams outside my org.
• Covered on-demand deletion, customer data-access requests and retention-based deletion.
• Shipped semi-automated in ~2 months instead of 1.5 years; saved 5 science FTE a year.

Focus: MLOps · model development lifecycle · model governance · ML platforms · data privacy · developer productivity

Skills (top 3 first): MLOps · Model Governance · Machine Learning Platforms · Amazon SageMaker · Data Privacy · Platform Strategy · Developer Experience

---

## Amazon · Product Manager, Supply Chain & Cost Optimization (1,698 chars)
Nov 2018 – Jun 2020

ML recommendation and causal attribution products for inventory, pricing and shipping decisions across Amazon and thousands of marketplace sellers: $100M+ in cost savings. Led a 7+ person engineering and science team and worked across 20+ senior stakeholders.

CONTEXT
• Shipping was ~50% of item cost (~$50B a year), so cost attribution was a top org priority.

TRACE: CAUSAL ATTRIBUTION
• Explains shipping-cost changes and prescribes the top action for each seller.
• Unified data across 50+ cost drivers from 14 systems owned by 14 teams.
• Surfaced recommendations through Seller Central APIs.
• $40M in savings against a $60M org goal; set up expansion to other marketplaces.
• Set data contracts and SLAs with upstream owners; built a multi-TB pipeline on EMR Serverless.
• Negotiated 15 months of training data instead of 2 years: 95% of needs at far lower compute cost.

SPORT: INVENTORY PLACEMENT
• ML recommendations to move inventory from high- to lower-cost fulfillment channels.
• Won the VP of FBA's approval for SPORT to recommend inventory placement to sellers.
• After a missed adoption goal, seller research showed the gap was in acting on recommendations.
• Ran an auto-adherence pilot and redesigned discoverability; adoption rose ~10%.

MOQ: PURCHASE THRESHOLDS
• ML recommendations for item-level purchase thresholds.
• Scaled to 20K merchants and 120K offers.
• ~60% higher adherence and lower shipping cost, with no measurable conversion decline.

STAKEHOLDERS
• Aligned Finance, Operations, data science, data engineering and engineering.

Focus: machine learning · recommender systems · causal inference · supply chain optimization · marketplace products · data pipelines

Skills (top 3 first): Machine Learning · Recommender Systems · Causal Inference · Supply Chain Optimization · Data Pipelines · Marketplace Products

---

## Amazon · Product Manager, Amazon Pricing (772 chars)
Oct 2016 – Oct 2018

Owned Amazon's global price-perception program and the insight tools pricing leaders used to set pricing strategy.

PRICING INSIGHTS
• Benchmarked Amazon's price perception against 800+ retailers in 17 countries.
• Signals fed Amazon's pricing models that set product prices, and drove pricing changes.
• Launched self-service pricing insight tools adopted by 40+ global pricing leaders.
• Designed automated price-perception dashboards that replaced manual reporting and saved analyst time.

PEOPLE MANAGEMENT
• Managed a Program Manager and supported their promotion from L4 to L5.
• Coached them to run an external survey vendor and 30+ stakeholders across 15+ countries on their own.
• Reviewed analysis before it reached stakeholders and wrote the promotion document.

Skills (top 3 first): Pricing Strategy · Competitive Intelligence · People Management · Analytics

---

## Cognizant Technology Solutions · Business Analyst (210 chars)
May 2015 – Sep 2016 · Chennai, India

• Owned the pre-sales lifecycle with technical solution architects for infrastructure setup deals across Asia Pacific.
• Designed solutions and pricing for $25M in deals.
• Worked 30+ deals with a 45% win rate.

Skills: Pre-Sales · Solution Architecture · Pricing · Enterprise Technology

---

## Engineers India Limited · Intern
Leave blank or remove.
