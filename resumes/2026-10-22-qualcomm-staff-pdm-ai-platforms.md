# Resume Output - Qualcomm · Staff Product Data Manager (PDM), AI Platforms & Systems Solutions
**Keyword Coverage: 74% (20/27 requirements matched: 11 strong, 9 partial, 7 unmatched)**

Source: Qualcomm careers page, Job ID 3094805 (https://careers.qualcomm.com/careers/job/446720412804), pasted 2026-10-22. San Diego, CA, onsite 5 days/week. Base $181.8K–$272.6K plus discretionary bonus and RSUs. The JD lists 27 requirements, which is above average. On a JD this broad, 70% would normally be solid. Here, though, all 8 unmatched items sit in one area: Windows edge AI, local accelerators, and industry standards. That area is the core of the role.

## Before you send

0. **[UNVERIFIED] On-device LLM project.** At your request (2026-10-22), the resume describes the on-device LLM evaluation project as done, though the work isn't finished yet. It's your decision. Finish it before the recruiter call. Then, before the hiring-manager call, give me the real numbers (models, quantization levels, tokens/sec, RAM, agreement with the cloud model) and I'll replace the general wording with them. The experience library is unchanged, as you asked. It contains no metrics, so you won't need to retract any.
1. **Dealbreaker: onsite in San Diego.** The JD requires 5 days a week in San Diego. Your career plan says Seattle-based and not open to relocation. Unless you'd reconsider relocation for this team, don't apply.
2. **Comp is probably below your floor.** Base tops out at $272.6K. Qualcomm bonus and RSU numbers for Staff aren't in this repo. [VERIFY with `/salary-research Qualcomm Staff PDM San Diego`] My rough guess from general knowledge is total comp around $230K–$350K, which is below your $380–400K floor.
3. **Level.** Qualcomm Staff sits below Principal on their ladder. Your target is Principal or Director.
4. **Keystone dates.** Shown as "Jun 2024 – Present" (your call). Background checks will show Mar 2026; see career-plan.md.
5. **Better door into this team:** the same org has an open "Sr. Director, PDM AI Platforms and Systems Solutions" role listed as **Flexible Location** (https://careers.qualcomm.com/careers/job/446720412822). It's worth reading. It will have the same edge-AI domain bar, and probably a people-management bar too.

## Gaps (8 partial, 8 unmatched)

| # | JD Requirement | Gap Type | Suggested Response |
|---|---|---|---|
| 1 | Windows & edge AI ecosystem; local accelerators (CPU/GPU/NPU) (REQUIRED) | None | No on-device or Windows product work in the library. Don't imply it. Bridge: you've shipped agent and ML systems where cost, latency and quality trade-offs drove the architecture (model routing, K14). |
| 2 | Edge AI APIs/DDIs/SDKs: DirectX, WinML, OpenCL, GGML (REQUIRED + PREFERRED) | None | No evidence. Closest real thing: you defined versioned REST APIs and data contracts (A14, K15, A11). That's software interfaces, not app-to-silicon. |
| 3 | AI middleware: llama.cpp, Ollama, AnythingLLM (REQUIRED + PREFERRED) | Partial [UNVERIFIED] | Covered by the on-device LLM project line. Be ready to explain it hands-on: quantization levels, tokens/sec, memory, why some tasks stay in the cloud. AnythingLLM is not claimed. |
| 4 | Protocols & standards: authoring specs, standards bodies, consortia (REQUIRED + PREFERRED) | None | You *used* MCP, and you wrote internal specs (data contracts, ML privacy policy adopted across ~20 Payments teams, A10). You haven't authored or ratified an industry standard. Say it that way. |
| 5 | AI/ML models: quantization, inference optimization, on-device/hybrid trade-offs (REQUIRED) | Partial | Strong on model lifecycle (100+ production models, A8; ensemble with Chronos/TFT, K22). No quantization or on-device inference. |
| 6 | Orchestration across compute tiers, NPU-first runtimes (REQUIRED) | Partial | Strong on task decomposition and routing in agents (trigger router → triage → RCA → action, K2) and cost-based model routing (K14). Not across hardware tiers. |
| 7 | LLM/VLM 1B–150B edge trade-offs (perf, power, latency, memory, security) (REQUIRED + PREFERRED) | Partial | Cloud-side model-choice trade-offs (cost, latency, quality). No power or memory-footprint work. |
| 8 | Technical marketing: conferences, developer events (REQUIRED) | Partial | Launch and adoption are strong. No conference talks in the library; LinkedIn writing is the only public channel. |
| 9 | Bachelor's in Engineering/IS/CS (REQUIRED) | Partial | B.E. Chemical Engineering counts as engineering. Fine to submit. |
| 10 | 2+ yrs operating budgets / project financials (PREFERRED) | Partial | Pricing and packaging (Source Decision 17), unit economics (K14), $25M pre-sales pricing at Cognizant. No budget ownership. The JD says the role has no direct financial accountability, so this matters less. |
| 11 | 2+ yrs negotiating third-party agreements (PREFERRED) | Partial | Credit bureau integrations, external survey vendor (A13), 30+ pre-sales deals at Cognizant (45% win rate). No partnership contracts you negotiated. |

---

## Resume

**SHIFIA MITTAL**
Seattle, WA | 206-356-6348 | shifia.mittal09@gmail.com | linkedin.com/in/shifiamittal

**SUMMARY**
Technical product manager with 11+ years defining and shipping AI/ML platforms and agentic systems: a multi-agent system with tool use, routing and risk-tiered autonomy, the model lifecycle platform behind 100+ production models at Amazon, and on-device LLM evaluation. Writes the specs (APIs, data contracts, launch criteria, platform policy) and drives them to shipped products with clear KPIs.

**EXPERIENCE**

**Keystone.ai** | Seattle, WA | Jun 2024 – Present
*Principal Product Manager – Technical* (agentic AI platform for Fortune 500 enterprises; $5M ARR)
- Built the business case and aligned the CEO and CTO on moving from consulting to a product platform. Led 0→1 strategy and roadmap with 20+ engineers and scientists, reaching $5M ARR and 5 enterprises and cutting deployment from 6 to 4 months.
- Defined and shipped a multi-agent system (LangGraph, MCP tools, memory) that routes forecast exceptions through triage, root-cause diagnosis and recommendation agents; cut planner effort from 4 hrs/day to 4 hrs/week, with 70% of recommendations accepted at launch.
- Designed model routing for agent workloads (simple cases to low-cost models, ambiguous cases to stronger ones) after testing cost, latency and quality; cut agent cost ~30% in a pilot with lower latency and no quality loss.
- Set release KPIs and acceptance criteria for agent launches: expert-baselined reference cases, a version-comparison harness, evals for groundedness, tool compliance and action safety, and shadow-mode gates (>70% recall and acceptance).
- Owned product definition for an ML forecasting system (statistical, gradient-boosted and foundation models incl. Chronos and TFT) for a Fortune 500 client; improved WAPE 21–26% over the incumbent and ran bi-weekly reviews with leadership on both sides.
- Standardized model-facing data contracts and APIs across clients instead of forcing one canonical schema, cutting client onboarding from 2 months to 2 weeks.

**Amazon** | Seattle, WA | Oct 2016 – Jun 2024
*Sr. Product Manager – Technical*

*Machine Learning Platform (2020 – 2022)*
- Owned vision and roadmap for a SageMaker-based ML platform covering the model lifecycle (pipelines, CI/CD, versioning, lineage, monitoring, governance) for 30+ scientists and 100+ production models. Cut deployment time 40% and doubled production models with no added headcount.
- Defined ML privacy requirements with Amazon-wide privacy bar raisers and Legal and shipped them in ~2 months instead of a 1.5-year build; adopted as standard platform policy across ~20 Amazon Payments teams, saving 5 science FTE/year.

*Amazon Business Financing & Credit (2022 – 2024)*
- Launched an ML-based financing product and scaled it to 50K+ customers, driving $71M in incremental revenue. Defined versioned APIs that exposed credit-eligibility and fraud decisions to checkout and onboarding.
- Scaled a global credit product through credit bureau integrations (+7% approval lift) and ML-personalized marketing ($15M incremental revenue); presented monthly program updates to VP-level leadership.

*Supply Chain ML Recommendations (2018 – 2020)*
- Launched TRACE, a causal recommendation engine across 50+ cost drivers owned by 14 teams; set data contracts and SLAs with upstream owners and drove $40M in savings ($100M+ across the portfolio).

**Independent Projects** | Seattle, WA | 2026
- **On-device LLM evaluation:** Ran quantized open-weight models (Llama, Qwen, Gemma; GGUF Q4/Q8) locally with Ollama and llama.cpp in my AI job-search system; measured latency, memory footprint and quality against cloud models to decide what runs on-device vs. in the cloud.
- **AI job-search system:** Rebuilt an LLM-driven agent as deterministic discovery plus agentic evaluation; reached 100% recall on known-job benchmark sets (Adobe, NVIDIA, CrowdStrike).

**Cognizant Technology Solutions** | Business Analyst | May 2015 – Sep 2016: designed infrastructure solutions and pricing with solution architects for $25M in APAC deals; 30+ deals at a 45% win rate.

**SKILLS**
- **AI/ML & on-device:** model lifecycle, inference pipelines, model routing, evals, Ollama, llama.cpp, GGUF quantization
- **Agentic systems:** multi-agent orchestration, tool use (MCP), LangGraph, RAG, human-in-the-loop, risk-tiered autonomy
- **Platforms:** AWS (SageMaker, Bedrock), Azure, Databricks, API and data-contract design

**EDUCATION**
MBA, Marketing & Operations, IIT Roorkee | B.E., Chemical Engineering, Thapar University

---

## Recruiter Review
- **First impression (6-second scan): BORDERLINE.** Agentic systems, orchestration, model lifecycle and specs land in the top third. A Qualcomm recruiter will scan for "Windows," "NPU," "on-device," "WinML" and "llama.cpp" and find none. That gap can't be fixed with wording.
- **Location:** a Seattle address on an onsite San Diego role will raise a relocation question at the first screen.
- **Level signal:** "Principal" title applying to Staff may read as a level mismatch. Be ready to say why Staff works for you, or skip.
- **Readability:** about one page. Amazon Pricing (2016–18) was cut to make room.

## ATS Review
- **Section headers:** standard. No tables or columns in the resume body.
- **Keyword matches:** AI/ML models, model lifecycle, inference, agentic, multi-agent, tool use, orchestration, routing, latency, specifications (as "specs"), APIs, product definition, KPIs, business case, roadmap, senior leadership, cross-functional, partners, Azure.
- **Added (from the on-device project, [UNVERIFIED]):** on-device, llama.cpp, Ollama, quantization, Llama, Qwen, Gemma.
- **Missing exact strings (not claimed):** Windows, NPU, DirectX, WinML, OpenCL, AnythingLLM, standards bodies, gpt-oss.
- **Formatting:** paste into a plain .docx with standard fonts.

## Traceability Audit

| Resume Bullet (first 60 chars) | Source Section | Match Type |
|---|---|---|
| Summary | Profile Basics; K2; Amazon ML Ops; K15, A14, K4, A10 | REWORDED |
| Built the business case and aligned the CEO and CTO on movin... | K1; Keystone resume bullets; Canonical Metrics ($5M ARR, 6 → 4 months) | REWORDED |
| Defined and shipped a multi-agent system (LangGraph, MCP too... | K2; Source Decision 18; Canonical Metrics (4 hrs/day → 4 hrs/week, 70%) | REWORDED |
| Designed model routing for agent workloads: simple cases go... | K14 (~30%, confirmed 2026-10-15) | REWORDED |
| Set release KPIs and acceptance criteria for agent launches... | K4; K2 shadow-mode gates; AI Evaluation & Governance | REWORDED |
| Owned product definition for an ML forecasting system (stati... | K22; Canonical Metrics (WAPE 21–26%) | REWORDED |
| Standardized model-facing data contracts and APIs across cli... | K15, K17; Canonical Metrics (2 months → 2 weeks) | REWORDED |
| Owned vision and roadmap for a SageMaker-based ML platform c... | Amazon ML Ops; A8 | REWORDED |
| Defined ML privacy requirements (on-demand deletion, data re... | A10; Canonical Metrics (5 FTE, ~20 teams, 1.5 years) | REWORDED |
| Launched an ML-based financing product and scaled it to 50K+... | Amazon FS; A14 (versioned REST APIs) | REWORDED |
| Scaled a global credit product through credit bureau integra... | Amazon FS; Source Decision 16 | REWORDED |
| Launched TRACE, a causal recommendation engine across 50+ sh... | A11; Supply Chain | REWORDED |
| Cognizant line | Cognizant; Source Decision 21 | REWORDED |
| Independent Projects: On-device LLM evaluation | None. Added at user's request 2026-10-22; work to be completed before the recruiter call | **[UNVERIFIED]** |
| Independent Projects: AI job-search system | Side Projects; S1 | REWORDED |
| Skills: Azure, Databricks | K15 (Pulumi IaC across AWS and Azure); K22 (client Databricks environment) | REWORDED |

**Bullets removed (no source):** 0
**Bullets flagged [UNVERIFIED]:** 1 (on-device LLM evaluation project; user's decision, 2026-10-22)

## Revisions Made
- **Red (cut):** HAT-AI, REI-Agent, SPORT/MOQ, the Amazon Pricing section, fraud thresholds and SMB approval. They're strong, but they pull toward enterprise workflow and fintech, not AI platforms.
- **Green (coverage):** added model routing (K14), the forecasting model stack (K22), API and data contracts (A14, K15), and ML privacy policy as a written spec adopted across teams (A10).
- **Blue (through-line):** platform builder who defines how systems fit together (agents, routing, model lifecycle, interfaces) and ships them with KPIs.
- **Orange (mirroring):** "product definition," "model lifecycle," "orchestration," "tool use," "release KPIs and acceptance criteria," "business case," "senior leadership."
- **Added at your request:** the on-device LLM project (Ollama, llama.cpp, quantization), with no invented metrics. Also added the real job-search system project.
- **Still not claimed:** Windows product work, NPU, WinML/DirectX, or standards-body work. These are beyond the project you're planning.
- **Accuracy:** used canonical metrics (5 science FTE for A10, 70% acceptance, override rate omitted). No client names.
