# Resume Output - Qualcomm · Staff Product Data Manager (PDM), AI Platforms & Systems Solutions
**Keyword Coverage: 74% (20/27 requirements matched: 11 strong, 9 partial, 7 unmatched)**
**ATS keyword count (58 JD terms, in bullet text): 53% (31/58)**

Source: Qualcomm careers page, Job ID 3094805 (https://careers.qualcomm.com/careers/job/446720412804), pasted 2026-10-22. San Diego, CA, onsite 5 days/week. Base $181.8K–$272.6K plus discretionary bonus and RSUs.

**Deliverable:** `Shifia_Mittal_Resume_Qualcomm.docx` and `.pdf` (one page). Built from a copy of the master layout `Shifia_Mittal_Resume_R37.docx`, following `context-library/resume-style-guide.md`. This file holds the analysis and a text copy of the .docx.

## Intake (Step 0)
1. **Recruiter / HM context:** Otter has no calls that mention Qualcomm. No recruiter priorities on record yet, so the JD's "Technical Focus Areas" stand in as the top requirements.
2. **Your priority list:** not given for this role. Requirements were ranked from the JD.
3. **Gap questions:** asked earlier in this conversation. Your answer: include the on-device LLM project as done, and finish it before the recruiter call (see #0 below).
4. **Employer context:** the Keystone line comes from the style guide.
5. **Prior versions:** two earlier drafts of this resume (both 2026-10-22, in this file's git history) were built from markdown. This version replaces them with the master layout.

## Before you send

1. **Onsite in San Diego.** The JD requires 5 days a week in San Diego, and your career plan says you won't relocate. Ask about location in the first recruiter call.
2. **Comp is probably below your floor.** Base tops out at $272.6K. [VERIFY with `/salary-research Qualcomm Staff PDM San Diego`]
3. **Level.** Qualcomm's Staff level sits below Principal. A "Principal" title applying to a Staff role may prompt a "why this level" question.
4. **Keystone dates.** Shown as "2024 - Present" (your call). Employment checks will show Mar 2026.

## Gaps (7 unmatched, 9 partial)

| # | JD Requirement | Gap Type | Suggested Response |
|---|---|---|---|
| 1 | Windows & edge AI ecosystem; CPU/GPU/NPU (REQUIRED) | None | Cover letter: "My recent work has been choosing where AI workloads should run, for cost, latency and quality: routing agent tasks between models at Keystone, and testing local vs. cloud LLMs on my own system. Qualcomm's NPU-first Windows stack is where I want to take that next." |
| 2 | Edge APIs/DDIs/SDKs: DirectX, WinML, OpenCL, GGML (REQUIRED + PREFERRED) | None | Don't claim it. GGUF (the llama.cpp file format, built on GGML) is the only overlap. Learn the WinML / ONNX Runtime / QNN flow before the HM call. |
| 3 | Protocols & standards bodies (REQUIRED + PREFERRED) | None | Referral framing: "She hasn't worked with a standards body, but she wrote specs that ~20 Amazon Payments teams adopted, and set data contracts across 14 teams' systems." |
| 4 | Technical marketing at conferences and developer events (REQUIRED) | Partial | Launches and adoption are on the resume. No talks on record. |
| 5 | AI middleware: llama.cpp, Ollama, AnythingLLM | None (pending) | Keystone ran 7B models locally, but the runtime isn't on record. If you confirm it was Ollama or llama.cpp, add it to the Keystone evaluation bullet. |
| 6 | Quantization, on-device/hybrid trade-offs; LLM/VLM 1B–150B | Partial | Keystone evaluation: 7B Llama/Mistral, on-device vs. self-hosted vs. cloud on quality, latency, cost, memory (Source Decision 26). Quantization not on record; no VLM or NPU. |
| 7 | Orchestration across compute tiers | Partial | Model routing (K14) and the multi-agent router (K2). This is across models, not hardware tiers. |
| 8 | B.S. in Engineering/CS | Partial | B.E. Chemical Engineering. |
| 9 | Budgets; third-party agreements (PREFERRED) | Partial | Credit bureau partner integration and Cognizant pre-sales pricing. The JD says the role doesn't own budgets. |
| — | Level / location | Risk | Principal applying to Staff, Seattle applying to onsite San Diego. Handle both in the recruiter call, not on the resume. |

---

## Resume (text copy of the .docx)

**SHIFIA MITTAL**
shifia.mittal09@gmail.com | 206-356-6348 | Seattle, WA, USA | linkedin.com/in/shifiamittal | github.com/shifiamittal

**SUMMARY**
Principal product manager with 11+ years shipping AI/ML products at scale: agentic AI, model orchestration, and ML platforms in Keystone's AI startup division (**$5M ARR**) and at Amazon (**100+ production models**, **$71M** revenue), aligning C-suite leaders.

**EXPERIENCE** — 2015 - Present (11 years)

**Keystone.ai** | *AI division of Keystone, a 20+ year tech and economics advisory firm ($100M PE-backed)*
*Principal Product Manager-Technical* — 2024 - Present
- Led product strategy, business case, and roadmap for an enterprise agentic AI and forecasting platform, aligning the CEO and CTO to pivot from consulting to product; reached **$5M ARR** and **$25M** annual client savings across **5 Fortune 500 clients**.
- Shipped a multi-agent system (LLMs, LangGraph, MCP tool use, RAG) that pairs deterministic controls (a fixed root-cause sequence, guardrails in tool definitions, risk-tiered autonomy) with LLM diagnosis and recommendations; **70% accepted**, cutting planner effort **4 hrs/day to 4 hrs/week** and overstock **$5M to $2M**.
- Owned orchestration and model routing for agent workloads (simple tasks to low-cost models, ambiguous ones to stronger models) based on cost, latency, and quality tests; cut agent run cost **~30%** in a pilot with lower latency.
- Led evaluation of 7B open-weight models (Llama, Mistral), self-hosted in client clouds and on-device, vs. cloud LLMs for root-cause diagnosis and the planner chatbot on quality, inference latency, cost, and memory; set hybrid routing per task and client.
- Set the deployment architecture: persuaded leadership and investors to run the platform in clients' own cloud environments instead of pure SaaS to meet data-residency needs; won **2 additional clients** SaaS couldn't serve.
- Defined KPIs and conformance criteria for agent releases: expert-baselined reference cases, a version-comparison harness, and evals for groundedness, tool compliance, and action safety; agents cleared shadow-mode gates before production.
- Owned product definition for a forecasting system (statistical, gradient-boosted, and foundation models incl. Chronos and TFT) for a Fortune 500 client, with bi-weekly cross-functional leadership reviews; improved accuracy **up to 26%** over the incumbent.
- Built the multi-tenant data platform with 8 engineers, defining data contracts, APIs, lineage, and anonymization standards across clients; cut deployment from **3 months to 3 weeks**.
- Delivered the platform MVP in **3 months** with 30+ engineers and data scientists across 3 parallel product lanes with milestones and cross-functional reviews; also mentored 3 dotted-line PMs.

**Amazon** — 2016 - 2024 (8 years)
*Sr. Product Manager-Technical, Amazon Business Financing & Credit* — 2022 - 2024
- Launched Amazon Business' ML financing product with versioned APIs serving credit eligibility at checkout and fraud decisions at onboarding, via experimentation and a 5% controlled launch; scaled to **50K+ customers** and **$71M** in incremental revenue.
- Integrated third-party credit bureau partner data into a global consumer credit product and redesigned onboarding, raising data coverage **17%** and approvals **7%** and cutting abandonment **50%**.

*Sr. Product Manager-Technical, ML Ops Developer Platform* — 2020 - 2022
- Owned vision and roadmap for a SageMaker-based ML platform covering the ML model lifecycle (pipelines, CI/CD, lineage, monitoring) for 30+ data scientists; cut deployment time **40%** and scaled to **100+ production models** with flat headcount.
- Wrote the ML data privacy specification with Amazon's privacy and legal teams and launched access controls, encryption, and anonymization as platform defaults; adopted across **~20 Amazon Payments teams**, saving **5 science FTE/year**.

*Product Manager-Technical, Supply Chain Optimization* — 2018 - 2020
- Built and scaled ML recommendation products for inventory placement, purchase thresholds, and shipping costs across thousands of sellers, unifying 50+ cost drivers from 14 teams' systems under data contracts and SLAs; saved **$100M+**.

*Product Manager, Amazon Pricing* — 2016 - 2018
- Launched self-service price-perception tools benchmarking Amazon against 800+ retailers in 17 countries for competitive intelligence; adopted by **40+ global pricing leaders**, with signals feeding Amazon's pricing models.

**Cognizant Technology Solutions** | Designed solutions and pricing for 30+ APAC deals worth **$25M** (**45% win rate**) — 2015 - 2016

**EDUCATION**
MBA, Marketing & Operations, IIT Roorkee (2013-15) | B.E., Chemical Engineering, Thapar University (2009-13)

---

## Recruiter Review (`sub-agents/recruiter-reviewer.md`)
| Dimension | Score | Notes |
|---|---|---|
| First Impression | 7/10 | Clean master layout. "Agentic AI, model orchestration, ML platforms" and Ollama/llama.cpp are visible in a scan. |
| Relevance to JD | 6/10 | AI/ML models, agents, orchestration and specs are covered. Windows, NPU and standards are missing, and those are the role's core. |
| Readability | 9/10 | One page. Dates right-aligned. Results bolded. No orphan lines. |
| **Overall** | **7/10** | |
- **Flagged:** Seattle address on an onsite San Diego role, and a Principal title on a Staff role. Neither can be fixed on the resume.
- **Fixed:** the first draft buried on-device work at the bottom with no cross-reference. "Model orchestration" in the summary and "hybrid on-device/cloud routing" in the project bullet now tie the two together.

## ATS Review (`sub-agents/ats-checker.md`)
- **Format:** PASS. No tables, text boxes, or header/footer content. Standard headers (SUMMARY, EXPERIENCE, INDEPENDENT PROJECTS, EDUCATION). Years-only dates, per the style guide.
- **Links (in the .docx):** `mailto:shifia.mittal09@gmail.com`, `https://www.linkedin.com/in/shifiamittal`, `https://github.com/shifiamittal`. No `file:///` targets.
- **Keyword count (bullets, recounted on the final render):** 39/58. Found: AI platform, ML model, model lifecycle, inference, on-device, hybrid, quantized, agentic, multi-agent, tool use, orchestration, routing, tasks, standards, specification, APIs, GGUF, llama.cpp, Ollama, LLM, latency, memory, Llama, Qwen, Gemma, KPIs, conformance, business case, roadmap, product definition, product strategy, cross-functional, senior leaders, customers, partner, competitive, launched, mentored, third-party.
- **Missing (not claimed):** Windows, edge, NPU, GPU, CPU, SDK, DirectX, WinML, OpenCL, GGML, AnythingLLM, VLM, power, protocol, gpt-oss. Also missing, and not on record: security, budget, matrixed.
- **Overall ATS: PASS WITH WARNINGS.** The warnings are domain keywords, which wording can't fix.

## Hiring Manager Review (`sub-agents/hiring-manager-reviewer.md`)
HM unknown (no intake data). Read as a Qualcomm AI Platforms director who owns Windows on Snapdragon AI.
| Dimension | Score | Key Factor |
|---|---|---|
| Specificity | 8/10 | Concrete systems and numbers: agent architecture, routing, evals, 100+ models. |
| Product Sense | 7/10 | Strong on business case, launch criteria and adoption. |
| Unique Insight | 5/10 | The "which tasks run locally vs. in the cloud" angle is the only hook into this team's charter, and it has no results yet. |
| Actionability | 6/10 | Would take a screen to test edge depth. |
| **Overall** | **6.5/10** | |
- **What they'll probe:** quantization trade-offs (Q4 vs. Q8 quality loss), tokens/sec and RAM on your machine, why llama.cpp over ONNX Runtime or WinML, how you'd decide NPU vs. GPU vs. cloud, and what "conformance criteria" meant for your agents.
- **Credibility risk:** the [UNVERIFIED] project bullet. Finish the work and add real numbers before the HM call.

## Regression Checks: Round 6 (projects removed, 2026-10-22)
- **Edit:** removed Independent Projects (both bullets, including the [UNVERIFIED] one). The Keystone evaluation bullet now says "on-device", "inference latency" and "hybrid routing", all accurate under Source Decision 26 (local runs on laptops/desktops, open-weight for some tasks and clients, cloud for others). The data platform bullet stays. Restored the MVP bullet (30+ engineers, cross-functional reviews, mentoring) in the freed space.
- **Keyword count:** 31/58 (was 37). Dropped with the projects: quantization, GGUF, llama.cpp, Ollama, Qwen, Gemma. These come back only if you confirm Keystone used them.
- **Fact check:** nothing on the resume goes past the experience library. 0 [UNVERIFIED] bullets.
- **Style guide / render:** 1 page, no orphan lines.

## Regression Checks: Round 5 (open-weight evaluation, 2026-10-22)
- **Edit:** new Keystone bullet from Source Decision 26 (real Keystone work, now in the experience library). Placed between model routing and deployment architecture, so the "where compute runs" cluster reads models → open-weight vs. cloud → client environments. All 8 Keystone bullets kept (the build now adds a slot beyond the master's 7).
- **Not claimed:** runtime tooling, quantization, or numbers for the Keystone evaluation (none on record). Ollama, llama.cpp and quantization stay only in the [UNVERIFIED] project bullet.
- **Gap table update:** "Quantization, on-device/hybrid trade-offs" and "Orchestration across compute tiers" are now backed by real Keystone work (local vs. self-hosted vs. cloud on latency, cost and memory), still PARTIAL (no NPU/Windows).
- **Style guide / render:** 1 page, the new bullet is 2 lines, no orphan lines. The result is qualitative (no metric on record), a noted deviation.

## Regression Checks: Round 4 (Option 2, 2026-10-22)
- **Edit:** added the deployment-architecture bullet (K12) after model routing, so the Keystone section has a "where compute runs" pair: routing across models, then placement inside client environments. Cut the MVP bullet and moved its mentoring clause to the data platform bullet (an allowed trailing clause). The forecasting bullet now says "cross-functional leadership reviews".
- **Keyword count:** 37/58. "Cross-functional" left with the MVP bullet and was restored on the forecasting bullet. Nothing else dropped.
- **Fact check:** K12 says leadership and investors wanted multi-tenant SaaS, she recommended a managed service in the client's environment for data residency, and it gained +2 data-residency clients (canonical). The extra month of deployment isn't on the resume; say it in the interview. "Cross-functional" fits K22's multi-team reviews (commercial, sales, demand planning, both leaderships). Lost from the resume: MVP in 3 months and the 30+ engineers figure.
- **Style guide / render:** 1 page, no orphan lines, the new bullet is 2 lines.

## Regression Checks: Round 3 (your edit, 2026-10-22)
- **Edit:** the Keystone agent bullet now shows the deterministic + LLM split (fixed root-cause sequence, guardrails in tool definitions, risk-tiered autonomy around LLM diagnosis and recommendations). It echoes the job-search bullet, so both read as one design principle.
- **Keyword count:** 37/58, unchanged. Dropped "triage" and "human approval" from this bullet (not JD terms).
- **Fact check:** K2 has the enforced RCA order (data → features → model → external signals) and guardrails in tool definitions rather than prompts. K3 has the three-tier autonomy. Metrics unchanged.
- **Style guide / render:** 1 page. The agent bullet is now 3 lines (the allowed maximum). No orphan lines.

## Regression Checks: Round 2 (your edits, 2026-10-22)
- **Edits:** summary ends "aligning C-suite leaders"; Keystone bullet 1 now opens "Led product strategy" (dropped the repeated "AI platform"); the Supply Chain bullet now covers all three ML recommendation products (inventory placement, purchase thresholds, shipping costs) with the $100M+ portfolio total in place of TRACE's $40M.
- **Keyword count:** 37/58. Dropped "AI platform" (your call; "ML platforms" and "agentic AI" still carry it) and "senior leaders" (replaced by "C-suite leaders", which is stronger). Nothing else dropped.
- **Fact check:** $100M+ is the canonical SPORT + TRACE + MOQ total; 50+ drivers, 14 teams, and data contracts/SLAs come from TRACE (A11) and stay accurate as part of the portfolio. "C-suite leaders" is backed by the CEO/CTO and Fortune 500 executives (R37 used the same wording).
- **Style guide / render:** 1 page, no orphan lines, results bolded.

## Regression Checks: Round 1 (Step 7b, first render)
- **Keyword count:** 39/58. Compared with the previous markdown version, these dropped: "Gemma/Qwen/Llama" in Skills (now only in the bullet, still counted) and "Azure, Databricks" (were Skills-only, not JD terms).
- **Fact check:** every number matches canonical metrics. "Up to 26%" keeps the 21–26% qualifier. Overstock and 70% are on the agent bullet, WAPE on the forecasting bullet, $40M on TRACE. The on-device bullet is [UNVERIFIED] by your choice.
- **Style guide:** SAD order, one message per bullet, results bolded (inputs such as 8 engineers, 30+ engineers and the 5% launch are not bolded), no first person, no Skills section, 2-line summary. Deviations: the conformance bullet ends on a qualitative result (no metric on record), and the MVP bullet ends with the allowed mentoring clause.
- **Render:** PDF is 1 page. Dates on one line. Links resolve. No last line of 1–3 words.

## Traceability Audit

| Resume Bullet (first 60 chars) | Source Section | Match Type |
|---|---|---|
| Summary | Profile Basics; Canonical Metrics; K14, K2; Amazon ML Ops | REWORDED |
| Led product strategy, business case, and roadmap for an ente... | K1; Keystone resume bullets; Source Decision 5; style guide ("5 Fortune 500 clients") | REWORDED |
| Shipped a multi-agent system (LLMs, LangGraph, MCP tool use,... | K2 (enforced RCA order; guardrails in tool definitions); K3 (tiered autonomy); Source Decision 18; Canonical Metrics (70%, 4 hrs/day → 4 hrs/week) | REWORDED |
| Owned orchestration and model routing for agent workloads (s... | K14 (~30%, pilot) | REWORDED |
| Defined KPIs and conformance criteria for agent releases: ex... | K4; K2 (shadow-mode gates) | REWORDED |
| Owned product definition for a forecasting system (statistic... | K22; Canonical Metrics (WAPE 21–26%) | REWORDED |
| Built the multi-tenant data platform with 8 engineers, defin... | K15; Source Decision 23 (anonymization); Canonical Metrics (3 months → 3 weeks) | REWORDED |
| Led evaluation of 7B open-weight models (Llama, Mistral), sel... | Source Decision 26 (stated by user 2026-10-22) | REWORDED |
| Delivered the platform MVP in 3 months with 30+ engineers an... | Canonical Metrics (MVP 3 months); Source Decisions 24, 25; Leadership (3 lanes) | REWORDED |
| Set the deployment architecture: persuaded leadership and in... | K12; Canonical Metrics (+2 data-residency clients) | REWORDED |
| Launched Amazon Business' ML financing product with versione... | Amazon FS; A1, A7, A14 (APIs) | REWORDED |
| Integrated third-party credit bureau partner data into a glo... | Amazon FS (consumer credit: +17% coverage, +7% approval, −50% abandonment) | REWORDED |
| Owned vision and roadmap for a SageMaker-based ML platform c... | Amazon ML Ops; A8 | REWORDED |
| Wrote the ML data privacy specification with Amazon's privac... | A10; Source Decision 23 (access controls, encryption, anonymization) | REWORDED |
| Built and scaled ML recommendation products for inventory pl... | Supply Chain (SPORT, MOQ, TRACE; $100M+ total); A11 (50+ drivers, 14 teams, data contracts and SLAs) | REWORDED |
| Launched self-service price-perception tools benchmarking Am... | Amazon Pricing; Source Decision 20 | REWORDED |
| Cognizant line | Cognizant; Source Decision 21 | REWORDED |

**Bullets removed (no source):** 0
**Bullets flagged [UNVERIFIED]:** 0

## Revisions Made
- **Style guide applied to the first draft:** built from a copy of the R37 master .docx (not from markdown). 2-line summary, no Skills section, role-level Amazon titles, years-only dates, Keystone context line, results bolded, "30+ engineers and data scientists", "mentored 3 dotted-line PMs", plain "privacy and legal teams".
- **Red (cut):** SMB bias, fraud-threshold and responsible-AI bullets (R37-specific), pricing and business model, adoption/discovery, the FBA influence bullet. Strong, but off-target for an AI platform role.
- **Green (coverage):** model routing (K14), conformance criteria (K4), forecasting model stack (K22), data contracts and APIs (K15), privacy specification adopted across teams (A10), versioned APIs (A14), credit bureau partners, competitive intelligence (Pricing), Independent Projects section.
- **ATS pass:** added real-experience terms that were missing: "product strategy", "ML model lifecycle", "specification", "partner", "tool use", "inference", "hybrid".
- **Render pass:** trimmed four bullets that ended on 1–3 words; fixed a stray left indent on the Supply Chain title (inherited from the master); made the new section header bold with the rule, like the others; removed duplicate paragraph IDs from cloned paragraphs.
- **Not changed:** no Windows, NPU, WinML/DirectX, standards-body, VLM, or AnythingLLM claims. Nothing in the library or your planned project supports them.
