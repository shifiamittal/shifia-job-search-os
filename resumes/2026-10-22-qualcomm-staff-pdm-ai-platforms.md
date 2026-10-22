# Resume Output - Qualcomm · Staff, Product Data Manager (PDM), AI Platforms & Systems Solutions
**Keyword Coverage: 83% (20/24 requirements matched: 13 strong, 7 partial, 4 unmatched)**

**Core technical fit is much lower than 83%.** Six of the 24 requirements are the Windows / edge-AI items the JD calls the center of the role. You have **0 strong, 3 partial, and 3 unmatched** on those six. The headline score is high because the general PM, AI-agent, and platform requirements match well. The posting lists 24 requirements, which is well above average, so a raw 83% overstates fit here.

Source: Qualcomm careers posting, Job ID 3094805 (pasted 2026-10-22). San Diego, CA. **Onsite 5 days a week.** Base range $181,800–$272,600, plus annual discretionary bonus and RSUs. REQUIRED/PREFERRED labels follow the posting's own sections. The "Technical Focus Areas" and "Windows Ecosystem" bullets are treated as required because the JD says the role "requires deep fluency in the Windows edge-AI stack."

## Before you apply

1. **Location is a dealbreaker in your career plan.** The role is full-time onsite in San Diego, 5 days a week. Your career plan says "Not open to relocation" and lists "role requires relocating from Seattle" under *What would make you say no*. Unless that has changed, don't apply. Two roles in the posting's "Similar jobs" list are marked **Flexible Location**: *Sr. Director, PDM AI Platforms and Systems Solutions* (same team) and *Staff PM – Linux Platforms and Ecosystem*. [VERIFY: "Flexible Location" is taken from the pasted listing. Open both postings before you decide.]
2. **Comp is likely below your floor.** Your floor is $380–400K total comp. Even at the top of the base band ($272.6K), bonus plus annual RSU value would need to add about $110K or more to reach it. Ask the recruiter for the full package at the first screen (your LawnStarter rule).
3. **The core technical gap is real.** Your library has nothing on Windows AI, NPUs, DirectX/WinML/OpenCL/GGML, llama.cpp/Ollama/AnythingLLM, on-device LLM trade-offs, or standards bodies. The resume below doesn't claim any of these. It leads with what transfers: agent orchestration, model routing on cost and latency, the model lifecycle, specs and interface contracts, and conformance criteria.
4. **Level.** At Qualcomm, Staff is below Principal. Your Principal title is above this band, so expect a leveling conversation.
5. **Dates and titles follow your earlier choices:** Keystone "Jun 2024 – Present" and Amazon "Sr. PM-T 2016–2024." My earlier advice still applies. Use "2024 – 2026" on the resume, because employment verification will show Mar 2026.

## Gaps (4 unmatched, 7 partial)

| # | JD Requirement | Gap Type | Suggested Response |
|---|---|---|---|
| 1 | Windows-ecosystem AI products/services on local accelerators (CPU, GPU, NPU) (REQUIRED) | No match | Don't claim it. Cover letter: "I haven't shipped on Windows silicon. What I bring is the platform side of the same problem: I've owned the model lifecycle for 100+ production models and run model routing that cut agent inference cost ~30% with lower latency. Those trade-offs get sharper, not different, on an NPU." |
| 2 | Edge AI APIs/DDIs/SDKs and app-to-silicon flow (DirectX, WinML, OpenCL, GGML) (REQUIRED) | No match | Not closable before an interview by claims alone. Fastest honest fix: a hands-on `/work-product`. Run Qwen, Llama, or Gemma through llama.cpp/Ollama on a Snapdragon X laptop, measure tokens/sec, memory, and power by quantization level, and write up the product gaps you hit. Add it to the experience library only after you've done it. |
| 3 | LLM/VLM ~1B–150B edge trade-offs (perf, power, latency, memory, security); Qwen, Llama, Gemma, gpt-oss (REQUIRED) | No match | Bridge from K14 in an interview, but present it as cloud-side: "I've made model-size vs. cost vs. latency vs. quality calls in production. I routed simple cases to cheaper models and saved ~30% with no quality loss. On-device adds power and memory budgets as hard constraints." |
| 4 | Drive ratification/adoption via standards bodies and consortia (PREFERRED + duty) | No match | Referral message: "My spec work has been internal: I defined ML privacy requirements that became platform policy across ~20 Amazon Payments teams, plus API and data contracts adopted across enterprise customers. I haven't worked in an external standards body, and I'd want to learn that from this team." |
| 5 | Authoring interoperability specs and protocols (REQUIRED) | Partial: internal specs, API contracts, and MCP as a consumer | Resume shows the privacy spec, REST API versioning, and model-facing data contracts. Say "built agents that call tools through MCP." Don't say you contributed to MCP. |
| 6 | Orchestration across compute tiers, NPU-first runtimes (REQUIRED) | Partial: agent routing and ML pipeline orchestration in the cloud | Resume shows the multi-agent router and model routing. Describe it as "model tiers," never "compute tiers" or NPU. |
| 7 | AI/ML model quantization, inference optimization, on-device/hybrid deployment (REQUIRED) | Partial: lifecycle strong, quantization/on-device none | Lead with the lifecycle depth (deployment, versioning, monitoring, governance). In an interview, name quantization as an area you're learning. |
| 8 | AI middleware (llama.cpp, Ollama, AnythingLLM) and AI app development flow (PREFERRED) | Partial: app dev flow yes (LangGraph, MCP, RAG, Bedrock, your own builds); middleware no | The job-search build and Codex prototype show the app flow. Item 2's work product would close the middleware half. |
| 9 | Technical marketing: conferences, developer events, launch and adoption (REQUIRED duty) | Partial: launch and developer adoption yes, conferences no | Resume shows MLOps developer adoption (templates, docs, community, NPS 8+). Your LinkedIn writing (the job-search post, 2,054 impressions) is the closest thing to a public technical voice. |
| 10 | 2+ years with operating budgets / project financials (PREFERRED) | Partial | Keystone tier pricing and packaging, PBI portfolio economics, Cognizant deal pricing. The JD also says the role carries no direct budget ownership, so this matters less. |
| 11 | 2+ years negotiating third-party agreements or partnerships (PREFERRED) | Partial | Cognizant pre-sales (30+ deals, 45% win rate), credit bureau integrations, enterprise client deployments at Keystone. You didn't own contract negotiation; don't say "negotiated." |

---

## Resume

**SHIFIA MITTAL**
Seattle, WA | 206-356-6348 | shifia.mittal09@gmail.com | linkedin.com/in/shifiamittal

**SUMMARY**
AI platform product leader with 11+ years taking ML and agentic systems from concept and business case to specification, launch, and adoption. Defines multi-agent orchestration with tool use (LangGraph, MCP), model routing across cost and latency tiers, and the conformance criteria, evals, and API and data contracts that let a platform scale across customers. Took an agentic AI platform from 0→1 to $5M ARR across 5 enterprise customers. At Amazon, owned an ML platform running 100+ production models and launched ML products that drove $71M in revenue and $100M+ in savings.

**EXPERIENCE**

**Keystone.ai** | Seattle, WA | Jun 2024 – Present
*Principal Product Manager – Technical* (enterprise AI decision platform for Fortune 500 companies; $5M ARR)
- Built the business case and aligned the CEO and CTO on pivoting Keystone from consulting to a product-led agentic AI platform; defined scope, MVP, and roadmap and directed 20+ engineers and scientists; reached 5 enterprise customers, cut deployment from 6 to 4 months, and improved forecast WAPE 21%.
- Defined and launched a multi-agent system (trigger router → exception triage → root-cause diagnosis → retrain/override) built on LangGraph with memory, tools called through MCP, RAG grounding, and risk-tiered autonomy; cut planner effort from 4 hrs/day to 4 hrs/week.
- Ran model experiments on cost, latency, quality, and adoption, then routed simple tasks to lower-cost models and ambiguous ones to stronger models; cut agent inference cost ~30% in pilot with lower latency and no loss in quality or adoption.
- Set launch conformance criteria (>70% exception recall, >70% recommendation acceptance, no autonomous forecast changes) and eval suites for correctness, groundedness, retrieval quality, tool compliance, action safety, and regression; moved from shadow mode to production at 70% acceptance.
- Defined model-facing data contracts and APIs (keys, timestamps, feature schemas) for a multi-tenant data platform across AWS and Azure; cut client onboarding from 2 months to 2 weeks and saved ~2 weeks of data wrangling per model.
- Turned planner interviews and workflow observation into a re-sequenced roadmap (explainability before automation); raised forecast adoption from 50% to 70%.

**Amazon** | Seattle, WA | Oct 2016 – Jun 2024
*Sr. Product Manager – Technical*

*Amazon Business Financing & Credit (2022 – 2024)*
- Launched an ML-based financing product on Amazon Business and scaled it to 50K+ customers ($71M incremental revenue); wrote the segment-specific strategy, ran a 5% controlled launch, raised SMB approval from 4% to 15%, and gave monthly program reviews to VP-level leadership.
- Defined REST APIs exposing ML credit-eligibility and fraud-screening decisions to checkout and onboarding, with backward-compatible versioning; scaled the product through credit bureau integrations (+17% data coverage, +7% approval lift).

*Machine Learning Platform (2020 – 2022)*
- Owned vision and roadmap for a SageMaker-based ML platform covering the full model lifecycle (pipelines, CI/CD, versioning, lineage, monitoring) for 30+ scientists and 100+ production models; cut deployment time 40% and doubled production models with no added headcount.
- Drove developer adoption by treating onboarding as a product (templates, docs, community, auto-containerization from a git link); NPS 8+ across 30+ scientists and 5 teams adopted outside the lending org.
- Defined ML privacy requirements (on-demand deletion, data return, retention-based deletion) with Amazon-wide privacy bar raisers and Legal; adopted as platform policy across Amazon Payments (~20 teams), saving 5 science FTE per year in my org.

*Supply Chain ML & Pricing (2016 – 2020)*
- Launched TRACE, a causal recommendation engine delivered through Seller Central APIs that unified 50+ shipping-cost drivers from 14 systems under data contracts and SLAs with upstream owners; drove $40M of $100M+ total savings across the supply chain ML portfolio.
- Benchmarked Amazon's price perception against 800+ retailers in 17 countries; launched self-service competitive-insight tools adopted by 40+ global pricing leaders.

**Cognizant Technology Solutions** | Business Analyst | May 2015 – Sep 2016: designed infrastructure solutions and pricing with solution architects for $25M in APAC deals (30+ deals, 45% win rate).

**INDEPENDENT WORK**
AI job-search system (2026): redesigned an LLM agent into deterministic discovery plus agentic evaluation; reached 100% recall on three company benchmark sets (86/86 jobs).

**SKILLS**
- **AI/ML models:** model lifecycle (deployment, versioning, lineage, monitoring), evaluation, explainability (SHAP), model governance and privacy
- **Agentic systems & orchestration:** multi-agent workflows, tool use, ReAct, RAG, model routing, human-in-the-loop, LangGraph, MCP
- **Product & specification:** business cases, product definition, KPIs and conformance criteria, API and data contracts, roadmaps, launch and adoption
- **Platforms:** AWS (SageMaker, Bedrock, Step Functions, Lambda, Glue, EMR), Azure, Databricks, Pulumi

**EDUCATION**
MBA, Marketing & Operations, Indian Institute of Technology (IIT) Roorkee | B.E., Chemical Engineering, Thapar University

---

## Recruiter Review
- **First impression (6-second scan): conditional PASS.** The top third hits AI platform, agentic systems, orchestration, specs, and conformance. A Qualcomm recruiter screening for "Windows," "NPU," or "on-device" will find none of them. That's honest, and it means this resume needs a referral to get past a keyword screen.
- **Relevance signal:** Summary and first Keystone bullets mirror the JD's own framing ("concept through adoption," "business case," "specification," "conformance criteria").
- **Readability:** One page with tight spacing. The Amazon sub-areas keep eight years from reading as one block.
- **Location:** The header shows Seattle and the role is onsite in San Diego. A recruiter will ask about relocation in the first call, so decide your answer first (see "Before you apply").

## ATS Review
- **Section headers:** Standard (Summary, Experience, Skills, Education). No tables or columns in the resume body.
- **Keyword matches:** product strategy, product definition, lifecycle, business case, roadmap, specification, conformance criteria, KPIs, agentic, multi-agent, tool use, orchestration, routing, model lifecycle, inference, evaluation, APIs, protocols (MCP), cross-functional, senior leadership, customer feedback, competitive, adoption, launch, AI/ML
- **Missing exact strings (not added, no evidence):** Windows, NPU, GPU, CPU, edge AI, on-device, hybrid, DirectX, WinML, OpenCL, GGML, llama.cpp, Ollama, AnythingLLM, quantization, Qwen, Llama, Gemma, gpt-oss, standards bodies, consortia
- **Dates:** Month/year at the employer level; years for Amazon sub-areas.
- **Formatting risk:** None in markdown. Paste into a plain .docx; arrows (→) in the agent bullet can render oddly in some ATS, so swap them for commas if your template has trouble.

## Traceability Audit

| Resume Bullet (first 60 chars) | Source Section | Original Text | Match Type |
|---|---|---|---|
| Summary: AI platform product leader with 11+ years taking ML... | Profile Basics; Keystone; Amazon; Source Decision 18 | 11+ years; Deep Enterprise 0→1, $5M ARR, 5 enterprises; LangGraph + MCP; MLOps 100+ models; $71M; $100M+ | REWORDED |
| Built the business case and aligned the CEO and CTO on pivot... | K1; Keystone resume bullets | "Aligned the CEO and CTO on a pivot to a product. Chose forecasting as the MVP… Ran 20+ engineers and scientists"; "WAPE by 21%… 6 months to 4 months… 5 enterprises" | REWORDED |
| Defined and launched a multi-agent system (trigger router →... | K2; Source Decision 18; Forecasting Agent bullet | "Trigger Router → Exception Triage Agent → RCA Diagnostic Agent → Retrain/Override Agent… RAG… three-tier autonomy"; "agents built on LangGraph, with memory, and called tools through MCP"; "4 hrs/day to 4 hrs/week" | REWORDED |
| Ran model experiments on cost, latency, quality, and adoptio... | K14 | "Experimented across models on cost, latency, quality, and adoption. Routed simple cases to cheap models and ambiguous cases to strong models… ~30% cost reduction, validated in a small pilot, with lower latency and unchanged quality and adoption" | REWORDED |
| Set launch conformance criteria (>70% exception recall, >70%... | K2; K4; AI Evaluation & Governance | "went to production at >70% exception recall and >70% recommendation acceptance, with no autonomous forecast changes"; eval coverage list; 70% acceptance at launch | REWORDED |
| Defined model-facing data contracts and APIs (keys, timestam... | K15; K17; Canonical Metrics | "data contracts and APIs, and Pulumi IaC across AWS and Azure"; "standardizing model-facing contracts (keys, timestamps, time-variant/invariant features)"; onboarding 2 months → 2 weeks; ~2 weeks/model | REWORDED |
| Turned planner interviews and workflow observation into a re... | K10 | "Triangulated adoption metrics with planner interviews and workflow observation… Sequenced deliberately… Forecast adoption 50% → 70%" | REWORDED |
| Launched an ML-based financing product on Amazon Business an... | Amazon FS; A1; Source Decisions 15, 16 | "$71M… 50K+ customers"; "segment-specific roadmap… Launched to 5%"; SMB approval 4% → 15%; monthly updates to VP-level leadership | REWORDED |
| Defined REST APIs exposing ML credit-eligibility and fraud-s... | A14; Amazon FS | "defined REST APIs exposing model output (credit eligibility at checkout; BFS block/continue at onboarding), with backward-compatible versioning"; "+17% data coverage, +7% approval lift" | REWORDED |
| Owned vision and roadmap for a SageMaker-based ML platform c... | Amazon ML Ops | "Owned vision, strategy, roadmap… 30+ scientists… 100+ production models… (pipelines, CI/CD, versioning, lineage, compliance monitoring)"; "−40%… doubled production model volume without additional headcount" | REWORDED |
| Drove developer adoption by treating onboarding as a product... | A8 | "scaling onboarding as a product (templates, docs, community). Auto-containerization from a git link… NPS 8+ across 30+ scientists; 5 teams onboarded outside lending" | REWORDED |
| Defined ML privacy requirements (on-demand deletion, data re... | A10; Canonical Metrics | "Defined the requirements for ML with Amazon-wide privacy bar raisers and Legal: on-demand deletion (OD3), returning customer data (DSAR), and programmatic deletion…"; "standard platform policy across Amazon Payments (~20 teams)"; "5 science FTE per year in your org" | REWORDED |
| Launched TRACE, a causal recommendation engine delivered thr... | A11; Supply Chain | "causal recommendation engine surfaced through Seller Central APIs"; "50+ cost factors across 14 systems"; "data contracts and SLAs with upstream owners"; "$40M… $100M+ across SPORT, TRACE, and MOQ" | REWORDED |
| Benchmarked Amazon's price perception against 800+ retailers... | Amazon Pricing | "Benchmarked Amazon's price perception across 800+ retailers in 17 countries; launched self-service insight tools adopted by 40+ global pricing leaders" | REWORDED ("competitive-insight" describes the same tools) |
| Cognizant: designed infrastructure solutions and pricing wit... | Cognizant; Source Decision 21 | "$25M in the Asia Pacific region"; "30+ infrastructure-setup deals with a 45% win rate" | REWORDED |
| AI job-search system (2026): redesigned an LLM agent into de... | Side Projects; S1 | "deterministic discovery… plus agentic evaluation… 100% recall… Adobe (41/41), NVIDIA (35/35), and CrowdStrike (10/10)" | REWORDED (86 = 41 + 35 + 10) |
| Skills: Azure, Databricks | K15; K22 | "Pulumi IaC across AWS and Azure"; "Deployed in the client's Databricks environment" | EXACT |

**Bullets removed (no source):** 0
**Bullets flagged for verification:** 0

## Revisions Made
- **Recruiter review:** Rewrote the summary's first line from "AI agents" to "AI platform… concept and business case to specification, launch, and adoption," mirroring the JD's lifecycle language.
- **ATS review:** Added the exact strings "conformance criteria," "business case," "product definition," "orchestration," and "model lifecycle," each backed by a bullet. Did **not** add Windows, NPU, edge, or middleware terms.
- **Accuracy:** Described model routing as "model tiers," not "compute tiers" (it ran in the cloud). Described MCP as "tools called through MCP," not protocol authorship.
- **Accuracy fix vs. the Rose International resume:** that file says privacy work "saved 6 science headcount" with "10 privacy bar raisers." Canonical metrics say **5 science FTE/year** for privacy (A10), while 6 HC is the MLOps platform total (A8), and the library no longer lists "10." This resume uses 5 FTE and "Amazon-wide privacy bar raisers." Fix the Rose file too if you reuse it.
- **RED cuts:** Dropped HAT-AI, REI-Agent, fraud thresholds, the $15M personalization result, MOQ, SPORT, and people management. They're strong, but they don't serve a platform/spec role and the page was full.
- **Clients:** None named (Source Decision 12).
