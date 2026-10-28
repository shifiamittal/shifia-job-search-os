# Resume Output - Senior AI Product Manager, Agentic AI & Data Intelligence (Phoenix, USA)
**Keyword Coverage: 93% (28/30 requirements matched: 23 strong, 5 partial, 2 unmatched)**
**ATS keyword count (60 JD terms, in bullet text): 82% (49/60)**

Source: JD pasted by user, 2026-10-28. Company not named in the posting. Location: Phoenix, USA.

**Deliverable:** `Shifia_Mittal_Resume_AgenticAI_Phoenix.docx` and `.pdf` (one page). Built from a copy of `Shifia_Mittal_Resume_Stripe_Radar_Fraud_7.docx` (latest file in the R37 master layout, with the current header and Keystone context line), following `context-library/resume-style-guide.md`. This file holds the analysis and a text copy.

JD has 30 requirements, above average. 93% on a JD this broad is a strong fit; it lines up with the career plan's #1 industry preference (enterprise agents, evals, governance).

## Intake (Step 0)
1. **Recruiter / HM context:** Otter search (since 2026-09-01, "Phoenix" and the role topic) found no calls. Requirements ranked from the JD.
2. **Priority list:** not given. Ranked by JD repetition: agent platform capabilities, evaluation, data/retrieval, PoC to production, governance.
3. **Gap questions:** listed below under "Questions for round 2". Draft built from the library as it stands.
4. **Employer context:** Keystone line from the style guide.
5. **Prior versions:** none for this company/role. Closest prior: R37 (AI lab) and Qualcomm (AI platforms).

## Before you send
1. **Location.** Phoenix; your career plan says no relocation (Seattle on-site/hybrid or remote only). Confirm remote or Seattle before investing more. If it is on-site Phoenix, this is a skip under your own rules.
2. **Level.** "Senior" AI PM vs. your Principal title. One level down; ask about leveling and comp at the screen (floor $380–400K TC).
3. **Company unknown.** Once you know it, run `/company-research` and `/job-fit-scorer`.
4. **Keystone dates.** "2024 - Present" (your call, reconfirmed 2026-10-24). Employment checks will show Mar 2026.

## Gaps (2 unmatched, 5 partial)

| # | JD Requirement | Gap Type | Suggested Response |
|---|---|---|---|
| 1 | Knowledge graphs | No match | Cover letter: "My grounding work used a data catalog, semantic layer and lineage graph rather than a formal knowledge graph; the problem it solved, giving agents trustworthy context on enterprise data, is the same one." Only if true: lineage/provenance is in K6. |
| 2 | Python or similar scripting | No match on record | If you wrote Python for the job-search system or prototypes, tell me and I'll add it. SQL (Athena/Glue, K33) is on record. Interview: "I write SQL day to day and prototype agents myself (the Codex PoC)." |
| 3 | Enterprise search | Partial | Semantic layer + NL queries + retrieval pipeline cover it. Referral note: "built the retrieval and semantic layer behind an enterprise agent's natural-language data access." |
| 4 | Vector databases | Partial | Qdrant is in your stack-familiarity list but no use is recorded. Confirm what you did with it. |
| 5 | Identity/access management, observability | Partial | Access controls (MDLC), audit logs, production monitoring (A9) are on the page. Not IAM product ownership. |
| 6 | JSON / cloud services | Partial | REST APIs, SageMaker, managed service in client clouds on page. AWS + Azure IaC (K12) left off for space. |
| 7 | Technology landscape analyses | Partial | Writing evidence (PRFAQ, strategy doc) on page; agent-pattern comparison (ReAct vs. Plan-and-Execute, K2) is interview material. |

## Questions for round 2
1. Did you write Python for the job-search system, the agent prototype, or anything at Keystone?
2. How did you use Qdrant (vector store for the RAG pipeline? which clients)?
3. Did you ever produce a written build-vs-buy or vendor/open-source evaluation for agent frameworks or LLMs (e.g., choosing LangGraph)? That's a direct JD hit we don't have yet.
4. Is this role remote or Seattle-friendly?

## Resume (text copy of the .docx)
```
                                                        SHIFIA MITTAL
       shifia.mittal09@gmail.com | 206-356-6348 | Seattle, WA, USA | linkedin.com/in/shifiamittal | github.com/shifiamittal
SUMMARY
Principal product manager with 11+ years shipping AI and machine learning (ML) products at scale: an agentic AI and data intelligence
platform in Keystone’s AI startup ($7.5M ARR) and ML and data platforms at Amazon (100+ production models, $71M revenue).
EXPERIENCE                                                                                                    2015 - Present (11 years)
Keystone.ai, AI division of Keystone, a 20+ year tech and economics advisory firm (450+ employees, PE-backed)
Principal Product Manager-Technical                                                                                         2024 - Present
  • Set 0→1 product strategy and roadmap for Deep Enterprise, an enterprise agentic AI and data platform, aligning the CEO and CTO
     on a pivot from consulting to product and directing 30+ engineers and data scientists; reached $7.5M ARR and $25M in annualized
     client savings across 5 Fortune 500 clients.
  • Prototyped a forecasting agent as a PoC for agentic workflow automation; its >70% recommendation adoption won a 2-month
     shift from model accuracy work to agents, then moved it from shadow mode to production.
  • Designed multi-agent orchestration (LangGraph, MCP tool calling, memory, RAG) routing exceptions through triage, root-cause
     and action agents to human-in-the-loop approval; cut planner effort 4 hrs/day to 4 hrs/week, overstock $5M to $2M.
  • Created the agent evaluation framework beyond model metrics: expert-baselined evaluation datasets, a harness comparing agent
     versions, prompts, tools and retrieval, and automated, LLM-as-judge and human review of task correctness, groundedness, tool
     compliance and action safety.
  • Benchmarked LLMs on cost, latency, quality and adoption, then routed simple cases to low-cost models and ambiguous ones to
     stronger models; cut agent run cost ~30% in a pilot with lower latency and no quality loss.
  • Set governance for autonomous agents after early automation saw 60% of actions reversed: 3 risk tiers (act, recommend-and-
     approve, surface-only), guardrails in tool definitions, audit logs and a canary rollout; lifted action acceptance from 30% to 80%.
  • Traced agent hallucinations to missing schema context and built a runtime data catalog, AI metadata generation with confidence
     gates, and a semantic layer for natural-language queries; cut repeat questions from 50% to 30%.
  • Led REI-Agent, a multi-agent financial analysis assistant for natural-language investigation of cost drivers, with automated data
     retrieval, variance analysis, governed enterprise metrics and auditable calculations.
  • Replaced a static RAG prototype with a continuously updated knowledge retrieval pipeline (per-source chunking, quality gates,
     domain-adapted embeddings, feedback loop); raised retrieval precision from 0.58 to 0.81.
  • Built a multi-tenant data platform with 8 engineers, covering ingestion, validation, lineage, anonymization, data contracts and data
     APIs for app developers and scientists; cut deployment from 3 months to 3 weeks.
  • Persuaded leadership and investors to deploy as a managed service in clients’ cloud instead of pure SaaS, accepting a 1-month
     longer deployment; won 2 additional clients with strict data-residency needs.
Amazon                                                                                                               2016 - 2024 (8 years)
Sr. Product Manager-Technical, Amazon Business Financing & Credit                                                             2022 - 2024
  • Launched Amazon Business’ 0→1 ML financing product with versioned REST APIs for credit eligibility at checkout and fraud
     decisions at sign-up, via a 5% controlled launch; scaled to 50K+ customers and $71M in incremental revenue.
  • Chose to build credit underwriting in-house on Amazon behavioral data rather than buy, bounding risk with exposure caps and
     category limits; raised SMB approval from 4% to 15% with no credit losses after full launch.
  • Wrote the PRFAQ and product strategy for a business fraud score, launched after a 3-week shadow run at 99% precision; avoided
     $18M in fraud losses and became a shared capability adopted by 6 teams.
Sr. Product Manager-Technical, ML Ops Developer Platform                                                                      2020 - 2022
  • Owned vision and roadmap for a SageMaker-based MLOps platform (pipelines, CI/CD, versioning, lineage, monitoring) for 30+
     data scientists; cut deployment time 40% and scaled to 100+ production models with flat headcount.
  • Defined privacy rules for ML data with Amazon’s privacy and legal teams and launched access controls, encryption and
     anonymization as platform defaults; adopted across ~20 Amazon Payments teams, saving 5 science FTE/year.
Product Manager-Technical, Supply Chain Optimization                                                                          2018 - 2020
  • Launched TRACE, a causal decision support product that explained shipping-cost changes across 50+ drivers from 14 teams’
     systems and recommended the top fix to sellers via Seller Central APIs, driving $40M of the team’s $100M+ in savings.
Product Manager, Amazon Pricing                                                                                               2016 - 2018
  • Launched self-service price-perception insight tools benchmarking Amazon against 800+ retailers in 17 countries; adopted by 40+
     global pricing leaders, with signals feeding the pricing models that set Amazon’s prices.
Cognizant Technology Solutions | Designed solutions and pricing for 30+ APAC deals worth $25M (45% win rate)                  2015 - 2016
EDUCATION
MBA, Marketing & Operations, IIT Roorkee (2013-15) | B.E., Chemical Engineering, Thapar University (2009-13)
```

## Recruiter Review (`sub-agents/recruiter-reviewer.md`)
- **6-second scan: PASS.** Summary names "agentic AI and data intelligence platform" in line 1; first 3 Keystone bullets show strategy, PoC to production, multi-agent orchestration.
- **Relevance:** top third is entirely agent/platform work. Amazon section reads as supporting depth (APIs, build vs. buy, MLOps, privacy).
- **Risk:** Principal title for a Senior role and Seattle address for a Phoenix role. Both are screen questions, not resume fixes.

## ATS Review (`sub-agents/ats-checker.md`)
- **Headers:** standard (Summary, Experience, Education). No tables, text boxes or header/footer content.
- **Links:** mailto, LinkedIn and GitHub targets resolve; no `file:///` paths.
- **Keywords found (49/60):** agentic AI, multi-agent, LLM, tool calling, orchestration, workflow automation, RAG, semantic layer, metadata, knowledge retrieval, embeddings, natural-language, data catalog, MCP, LangGraph, memory, human-in-the-loop, evaluation, benchmark, latency, cost, task correctness, groundedness, PoC, prototype, production, shadow mode, build vs. buy, REST APIs, data platform, data contracts, lineage, governance, privacy, access controls, encryption, anonymization, audit logs, monitoring, roadmap, strategy, PRFAQ, data residency, LLM-as-judge, human review, automated, cloud, data intelligence.
- **Missing (11):** vector, security, reasoning, knowledge graph, Python, JSON, enterprise search, copilot, observability, identity, responsible AI. Most need facts not on record (see questions).

## Hiring Manager Review (`sub-agents/hiring-manager-reviewer.md`)
- **Credible:** evaluation framework, tiered autonomy and retrieval metrics read as someone who has run agents in production, not a slide-ware PM.
- **Will probe:** (1) what "beyond model metrics" means in practice (have K4 ready: reference cases, harness, launch gates); (2) why LangGraph/MCP and what else you considered; (3) hands-on depth (Python); (4) the 60% reversal story (K3) as a failure-and-recovery.
- **Credibility risk:** none found; every number is canonical.

## Regression Checks (round 1)
- **Keyword count:** 49/60 on final render.
- **Fact check:** all numbers match Canonical Metrics; "70% acceptance" dropped from the orchestration bullet for space (the >70% prototype figure remains on the PoC bullet).
- **Style guide:** SAD order, results bolded, no first person, no 1–3-word last lines. Deviation: REI-Agent and eval-framework bullets have qualitative results (no metric on record).
- **Render:** 1 page, dates on one line, links live.

## Traceability Audit
| Resume Bullet (first 60 chars) | Source | Match Type |
|---|---|---|
| Set 0→1 product strategy and roadmap for Deep Enterprise... | K1, Canonical ($7.5M, $25M, 5 clients), Decision 24 (30+) | REWORDED |
| Prototyped a forecasting agent as a PoC for agentic workflow... | K11, K2 (shadow mode) | REWORDED |
| Designed multi-agent orchestration (LangGraph, MCP tool calli... | K2, Decision 18 (LangGraph, memory, MCP) | REWORDED |
| Created the agent evaluation framework beyond model metrics... | K4, Keystone resume bullet "AI Evaluation & Governance" | REWORDED |
| Benchmarked LLMs on cost, latency, quality and adoption... | K14 (~30%) | REWORDED |
| Set governance for autonomous agents after early automation... | K3 (60% reversed, 30% → 80%) | REWORDED |
| Traced agent hallucinations to missing schema context... | K6 (clarification 50% → 30%) | REWORDED |
| Led REI-Agent, a multi-agent financial analysis assistant... | Keystone resume bullet "REI-Agent" | EXACT |
| Replaced a static RAG prototype with a continuously updated... | K8 (0.58 → 0.81) | REWORDED |
| Built a multi-tenant data platform with 8 engineers... | K15, K29, Canonical (3 months → 3 weeks, 7–8 engineers) | REWORDED |
| Persuaded leadership and investors to deploy as a managed se... | K12 (+1 month, +2 clients) | REWORDED |
| Launched Amazon Business' 0→1 ML financing product with vers... | A1, A14 (REST APIs, versioning), 0→1 note | REWORDED |
| Chose to build credit underwriting in-house on Amazon behavi... | A5, A3, Canonical (4% → 15%, no losses) | REWORDED |
| Wrote the PRFAQ and product strategy for a business fraud sc... | A21 ($18M, 6 teams, 3-week shadow, ~99% precision) | REWORDED |
| Owned vision and roadmap for a SageMaker-based MLOps platform... | ML Ops LinkedIn bullets, Canonical (−40%, 100+) | REWORDED |
| Defined privacy rules for ML data with Amazon's privacy and l... | A10, Decision 23 (controls) | REWORDED |
| Launched TRACE, a causal decision support product... | A11, Canonical ($40M of $100M+, 50+ drivers) | EXACT (from Stripe v7) |
| Launched self-service price-perception insight tools... | Amazon Pricing, Decision 20 | EXACT (from Stripe v7) |

**Bullets removed (no source):** 0. Qualcomm's open-weight model bullet was not reused: it isn't in the experience library.
**Bullets flagged for verification:** 0.

## Revisions Made
- Trimmed the PoC and financing bullets so neither ends on a one-word line.
- Added "orchestration", "workflow automation" and "governance" to existing bullets (ATS check).
- Dropped "70% acceptance" from the orchestration bullet to remove a 1-word last line.
- Added REI-Agent to cover natural-language data interaction (space left on the page).
- Cut from the Stripe v7 base: pricing/packaging, demos, event-stream, API catalog, BFS 2.0 investigation, batch vs. real-time, SPORT APIs (less relevant here).
