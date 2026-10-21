# LinkedIn Experience Descriptions (v6, 2026-10-21)

One story per role: the problem, what I did about it in order, and the results, in short headed paragraphs. Up to 2,000 characters, with keywords from `linkedin/keyword-map.md` and a closing Focus line. The dense keyword version is in `linkedin/experience-descriptions-long.md`.

---

## Keystone.ai · Principal Product Manager – Technical (1,928 chars)
Jun 2024 – Present · Seattle, WA

Keystone.ai sold demand forecasting as consulting: every client needed its own team and 6+ months. I own product strategy, roadmap, tiered pricing and packaging, and go-to-market for Deep Enterprise, the enterprise AI platform that replaced that model. I work with the CEO and CTO and set direction for 20+ engineers and data scientists.

From consulting to a platform
I made the case for one product instead of custom builds, chose forecasting as the first AI use case, and productized the data pipelines, ML pipelines and AI capabilities every client reuses. Deployment fell from 6 months to 4 and forecast accuracy (WAPE) improved 21%. The business reached $5M ARR with 5 Fortune 500 clients and $25M in annual client savings.

From forecasts to agentic workflows
Accuracy alone didn't change behavior: planners still spent 4 hours a day reviewing and overriding forecasts. After a prototype hit 70%+ acceptance, I moved 2 months of roadmap to agents.
• Multi-agent system on LangGraph: orchestration, MCP tool calling, memory, RAG and human-in-the-loop approval.
• Agent evaluation and observability: reference cases, LLM-as-judge, launch thresholds, regression tests, production traces.
• Guardrails through risk-tiered autonomy, audit logs and canary rollouts.
Planner work fell to 4 hours a week, client overstock from $5M to $2M, and forecast adoption rose from 50% to 70%.

Grounding agents in client data
Context engineering with a semantic layer, data catalog and AI-generated metadata, plus model routing that cut agent cost ~30%. A multi-tenant data platform cut deployment from 3 months to 3 weeks and passed enterprise security review.

Extending AI to finance workflows
HAT-AI saves 30 PMs 120 hours a week across 15 finance products. REI-Agent runs governed, auditable financial analysis.

Focus: AI platforms · agentic AI · agent orchestration · agent evaluation · context engineering · use-case prioritization

Skills (top 3 first): Agentic AI · AI Platforms · AI Evaluation · AI Agents · Generative AI · Large Language Models (LLM) · Retrieval-Augmented Generation (RAG) · Workflow Automation · AI Strategy · Go-to-Market Strategy

---

## Amazon · Sr. Product Manager – Technical, Amazon Financial Services (1,826 chars)
Aug 2022 – Jun 2024 · Seattle, WA

Small businesses drove ~60% of Amazon Business sales, but only 4% qualified for credit, and ~100K left each year, partly for lack of it. I owned the ML-powered credit and financing products that closed that gap, from strategy and underwriting through launch and growth, and reported monthly to VP-level leadership on a program tied to an Amazon S-team lending goal.

Building the underwriting
I built SMB underwriting on Amazon behavioral data with data science, in-house rather than through an outside lender. Approvals rose from 4% to 15%, with exposure capped by risk tier and high-loss categories restricted.
• Partnered on the credit risk model: model selection, profit-based thresholds, SHAP explainability and model documentation.
• Chose batch over real-time underwriting for V1, pulling impact forward 3 months.
• Defined versioned REST APIs for credit eligibility at checkout and fraud checks at onboarding.

Keeping it safe
I owned fraud and trust & safety controls: the fraud team's risk model runs before credit decisions, with its threshold set at 0.99 precision to protect legitimate customers' credit lines, plus post-checkout transaction screening and blocklist rules.

Learning before scaling
A 5% A/B test showed checkout-only credit underperformed. Customer interviews revealed SMBs needed to see monthly eligibility to plan purchases, so I redesigned around monthly limits, transaction controls and delinquency pauses before scaling.

Scaling
• The financing product reached 50K+ business customers and $71M in incremental revenue.
• ML-personalized marketing added $15M in incremental revenue.
• Credit bureau integrations raised data coverage 17% and approvals 7%.
• An onboarding redesign cut abandonment 50%.

Focus: fintech · credit risk · machine learning · fraud prevention · experimentation · APIs

Skills (top 3 first): Machine Learning · Fintech · Credit Risk · Fraud Prevention · Experimentation (A/B Testing) · APIs · Growth Strategy

---

## Amazon · Sr. Product Manager – Technical, ML Ops Platform (1,784 chars)
Jul 2020 – Jul 2022 · Seattle, WA

Amazon Lending's risk models, behind $8B in credit, were growing 30% a year. Each one took 3–4 months of engineering to ship, with no central model governance. I owned vision, roadmap and adoption for MDLC, the model development lifecycle platform that fixed this: self-service MLOps on SageMaker for 30+ data scientists.

Designing the platform
I interviewed scientists, engineers and risk and compliance partners, then set three pillars: self-service ML pipelines, model governance and privacy, and onboarding run as a product.
• Chose a UI-first design, trading build cost for scientist adoption.
• Standardized pipelines, CI/CD, versioning, lineage and model inventory on SageMaker, Step Functions, Lambda, Glue and ECR.
• Auto-containerization from a git link saved ~2 engineering headcount.

Making governance automatic
• Automated model monitoring grew coverage from 30 to 100 models and avoided ~400 science-weeks of effort.
• The model portfolio became audit-ready.
• When a senior technical manager doubted scientists would use governance features, we tested it with customers together; the features launched.

Taking privacy beyond my org
With Legal and privacy bar raisers, I made privacy a default for ML across ~20 Amazon Payments teams: on-demand deletion, customer data-access requests and retention-based deletion. Shipping semi-automated in ~2 months instead of 1.5 years for full automation saved 5 science FTE a year.

Results
• Production models grew from 50+ to 100+, with no added headcount.
• Deployment time fell 40%; platform features saved 6 science headcount a year.
• NPS 8+ with scientists; 5 teams outside Lending adopted the platform.

Focus: MLOps · model development lifecycle · model governance · ML platforms · data privacy · developer productivity

Skills (top 3 first): MLOps · Model Governance · Machine Learning Platforms · Amazon SageMaker · Data Privacy · Platform Strategy · Developer Experience

---

## Amazon · Product Manager, Supply Chain & Cost Optimization (1,693 chars)
Nov 2018 – Jun 2020

Shipping was ~50% of item cost on Amazon (~$50B a year), and its drivers were spread across 50+ factors in 14 systems. I built three ML products that moved from explaining shipping cost to acting on it, delivering $100M+ in cost savings. I led a 7+ person engineering and science team and worked across 20+ senior stakeholders.

Explaining the cost: TRACE
A causal attribution product that explains shipping-cost changes and prescribes the top action for each seller.
• Unified data across 50+ cost drivers from 14 systems owned by 14 teams, with data contracts and SLAs.
• Built a multi-TB pipeline on EMR Serverless; negotiated 15 months of training data instead of 2 years, meeting 95% of needs at far lower compute cost.
• Delivered recommendations through Seller Central APIs: $40M in savings against a $60M org goal.

Moving inventory: SPORT
ML recommendations to move inventory from high- to lower-cost fulfillment channels. I won the VP of FBA's approval to recommend inventory placement to sellers. When adoption missed its goal, seller research showed the gap was in acting on recommendations, so I ran an auto-adherence pilot and redesigned discoverability; adoption rose ~10%.

Setting purchase thresholds: MOQ
ML recommendations for item-level purchase thresholds, scaled to 20K merchants and 120K offers, with ~60% higher adherence, lower shipping cost and no measurable conversion decline.

Getting alignment
Finance, Operations, data science, data engineering and engineering agreed on one design, and TRACE became the base for expanding to other marketplaces.

Focus: machine learning · recommender systems · causal inference · supply chain optimization · marketplace products

Skills (top 3 first): Machine Learning · Recommender Systems · Causal Inference · Supply Chain Optimization · Data Pipelines · Marketplace Products

---

## Amazon · Product Manager, Amazon Pricing (925 chars)
Oct 2016 – Oct 2018

Amazon's pricing leaders needed to know how customers saw Amazon's prices against other retailers, country by country. I owned the global price-perception program that answered that question and the tools they used to act on it.

Measuring price perception
I benchmarked Amazon's price perception against 800+ retailers in 17 countries. The signals fed Amazon's pricing models that set product prices and drove pricing changes.

Putting it in leaders' hands
I launched self-service pricing insight tools adopted by 40+ global pricing leaders, and designed automated price-perception dashboards that replaced manual reporting and saved analyst time.

Growing the team
I managed a Program Manager and supported their promotion from L4 to L5: coached them to run an external survey vendor and 30+ stakeholders across 15+ countries on their own, reviewed analysis before it reached stakeholders, and wrote the promotion document.

Skills (top 3 first): Pricing Strategy · Competitive Intelligence · People Management · Analytics

---

## Cognizant Technology Solutions · Business Analyst (199 chars)
May 2015 – Sep 2016 · Chennai, India

I owned the pre-sales lifecycle for infrastructure setup deals across Asia Pacific, working with technical solution architects to design solutions and pricing. Across 30+ deals worth $25M, I won 45%.

Skills: Pre-Sales · Solution Architecture · Pricing · Enterprise Technology

---

## Engineers India Limited · Intern
Leave blank or remove.
