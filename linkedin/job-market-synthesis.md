# Job Market Synthesis: Last 2 Weeks (2026-10-07 → 2026-10-21)

Source: LinkedIn and Indeed job-alert emails in Gmail. 61 product roles after dropping non-PM alerts (engineering, legal, ops, sales). Alert emails carry titles only, so title counts are exact; JD-level keywords come from the strongest-fit postings, read through search results (the network blocks most job boards). Counts are approximate where a title is generic.

## What the 61 roles are

| Cluster | Roles | Examples |
|---|---|---|
| Agentic AI / AI agents / GenAI in the title | ~21 | AWS Principal TPM Agentic AI (Velocity Labs; Amazon Quick), Microsoft Principal PM Cowork/Autopilot, Google Sr PM Agentic Applications, ServiceNow Distinguished PM AI Agent Products, Intuit Principal TPM Enterprise AI Workflow Enablement, Intuit Sr Staff PM Agent Runtime, DigitalOcean Principal PM Agentic AI Infrastructure, Procore Principal PM Enterprise AI Enablement, T-Mobile Principal AI PM and GenAI Platforms & Adoption, Amazon AI Principal PM-T Customer Service, Traba Staff PM AI Agents, Stripe Staff PM Agentic Commerce, Okta for AI Agents, Cisco AI Knowledge Graph, NVIDIA AI Frameworks |
| Data / AI / cloud platforms | ~9 | Cisco Sr Staff PM Data Platform, Walmart Distinguished Platform PM, Microsoft Principal PM Search Platform (retrieval), Lambda Staff PM Compute and Storage, Salesforce Hyperforce, REI Platform PM, Marsh Data & Digital |
| Workflow products | 3 | Zillow Principal PM Directed Workflows, Rippling Workflow Studio, Intuit AI Workflow Enablement |
| Marketplace / fintech / commerce | ~7 | Stripe (x2), Peach Finance, Hopper API Marketplace, Microsoft Commercial Marketplace, Amazon Sponsored Products |
| Other Principal/Staff PM | ~21 | Atlassian, Docker, GitLab, F5, Autodesk, CrowdStrike, Zillow, Providence, Docusign Search, Meta, Anthropic (Claude; Trust & Safety) |

About 1 in 3 roles has agentic AI or AI agents in the title. Another ~1 in 5 is a platform role. "Technical" appears in ~10 titles (Amazon, AWS, Intuit, T-Mobile, F5).

## Keywords to rank for (ordered by how often they show up)

1. **Agentic AI, AI agents, multi-agent** (title-level, ~21 roles)
2. **Technical product manager; platform** (AI platform, data platform, GenAI platform, ML platform)
3. **Workflow automation, enterprise workflows, AI enablement and adoption** (Intuit, Procore, T-Mobile, Zillow, Rippling)
4. **0→1 and 1→N; prototyping; recent hands-on shipping** (ServiceNow, Microsoft)
5. **Agent architecture: tool use, orchestration, planning, memory** (ServiceNow, Intuit, Amazon Customer Service)
6. **Quality and reliability; evaluation; guardrails; governance and auditability** (Microsoft Cowork, ServiceNow)
7. **Cost vs. speed vs. reliability trade-offs** (Microsoft Cowork)
8. **RAG, semantic search, knowledge graph, retrieval** (Cisco, Microsoft Search Platform)
9. **AI/ML lifecycle, data ingestion pipelines, MLOps** (Cisco Splunk AI Foundations, Cisco Data Platform)
10. **Enterprise knowledge workers; non-engineering functions (Finance, Legal)** (ServiceNow, Intuit)
11. **Influencing VP-level stakeholders; driving change in other orgs** (Intuit)
12. **Working backwards, roadmap ownership, pricing/positioning/GTM** (AWS)
13. **APIs, MCP, SDKs** (Amazon Customer Service, Intuit)
14. **Trust & safety, fraud, privacy, security, data residency** (Anthropic, Okta, OpenAI)
15. **Marketplace, fintech, payments** (Stripe, Hopper, Microsoft)

## Where your experience covers them

- Covered strongly: 1, 2, 3, 4, 5 (no "memory"), 6, 7 (model routing), 8 (RAG, semantic layer), 9, 10 (HAT-AI, REI-Agent), 11 (VP FBA, VP-level reporting), 12, 14 (fraud controls, privacy-by-default, data residency), 15.
- Partial: 13 (REST APIs, Seller Central APIs, model-ready APIs; no MCP or SDK work on record).
- Not on record: MCP, agent memory, SDKs, SOC 2/SSO, pricing/packaging. Add only if true.

## Sources (JD detail)
- AWS Velocity Labs and Amazon Quick: amazon.jobs/en/jobs/10560785 and dreamworkhq.com listings
- Microsoft Cowork/Autopilot: freehire.me and zapply.jobs listings
- ServiceNow Distinguished PM, AI Agent Products: freehire.me and zapply.jobs listings
- Intuit AI Workflow Enablement Lead: jobs.intuit.com/job/mountain-view/principal-product-manager-ai-workflow-enablement-lead/27595/97158663056
- Amazon AI Principal PM-T, Customer Service: zapply.jobs listing
- Cisco Data Platform and AI Knowledge Graph: careers.cisco.com and freehire.me listings

---

## Update: Apify run, 2026-10-21 (full job descriptions)

Source: `context-library/job-descriptions.md` (64 jobs, last 14 days). Only 11 match your target market. The rest are product owner, contract, healthcare ops, or generic Senior PM roles that LinkedIn's fuzzy title search let through.

On-target roles: AWS TPM, Emerging Planning Solutions (AI/ML sales planning; closest domain match), Docker Principal PM AI Gateway, 1mind AI PM Agents & Orchestration, Hyperproof Principal Platform PM (agentic GRC), Paylocity Principal Group PM AI Labs, Apollo.io Principal Product Builder Data, Mysten Labs Product Lead AI, Ellipsis Health Forward Deployed PM AI Assistant, Luxury Presence Staff PM Search & AI Visibility, Summit K12 Principal PM Platform, Novellia Head of Product.

New language these full JDs use (beyond the earlier list):
- **Eval-driven development, release gates, task success rate, hallucination and tool-error rates** (1mind, Hyperproof)
- **Agent runtime, multi-agent handoffs, shared state, memory, trust ladder (assist / co-pilot / autonomous), human checkpoints** (1mind)
- **Grounding and trust frameworks, auditability, AI safety guardrails** (Hyperproof, Mysten)
- **Model routing, fallback, inference cost management; quality vs latency vs cost** (Docker)
- **AI-assisted prototyping (Claude Code, Cursor, Codex)** (Apollo, Mysten, Paylocity, Luxury Presence)
- **Data catalog, accuracy, freshness, provenance, telemetry; build vs buy vs partner** (Apollo)
- **Intelligent recommendations for planning; change management, UAT, adoption KPIs** (AWS)
- **Packaging, pricing, positioning, GTM** (Mysten, Docker)
- **Customer deployments as launches: integrations, configuration, go-live** (Ellipsis)
- **AI-driven product development lifecycle** (Paylocity)

Changes made to the Keystone entry: "eval-driven development" and "release gates", "prototyped in Codex", and the autonomy ladder named (autonomous, approve, surface-only).

**Search tuning:** 53 of 64 jobs were off-target. Suggested `search.json` changes, not yet applied (they change what each paid run returns):
- titles: "Principal Product Manager AI", "Principal Technical Product Manager", "Staff Product Manager AI", "Group Product Manager AI", "Head of Product AI", "Director of Product AI"
- exclude_keywords: add "Product Owner", "contract", "W2", "Associate", "Workday", "Shopify"
- companies: seed from `target-companies.md` for a second, company-scoped run
