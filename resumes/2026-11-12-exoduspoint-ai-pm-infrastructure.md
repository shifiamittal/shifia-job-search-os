# ExodusPoint Capital: AI Product Manager, Infrastructure Services (New York)

Deliverable: `Shifia_Mittal_Resume_ExodusPoint_AI_PM.docx` / `.pdf` (one page, built from the R37 layout). Hiring manager named in the JD: Arram Han, CISO / Head of Infrastructure.

**Application purpose (user, 2026-11-12): interview practice. Not open to relocating to New York.**

**Keyword coverage: 14/15 JD requirements matched (5 strong, 9 partial, 1 none).** Calibration: 15 requirements is above average; the partials carry the score.

## Gaps
| # | JD requirement | Status | Response |
|---|---|---|---|
| 1 | Strong architecture foundation: networking, distributed systems; challenge designs | None (library says don't claim Kubernetes, networking, multi-region, capacity planning) | Interview answer on trade-offs you did own: managed service in client cloud, model routing, build vs buy on the rules engine. |
| 2 | 3+ years of practical LLM/AI services | Partial: about 2 years hands-on GenAI plus 8 years ML platforms | Frame as "2 years in production on LLM agents and RAG, 8 years running ML platforms." Never claim 3+. |
| 3 | Vector databases | Not on resume. Qdrant is listed as familiarity only. | Confirm whether Qdrant ran in the Keystone RAG pipeline; add if yes. |
| 4 | Managed vs self-hosted / open-weight inference | Cost and latency model evaluation only | Don't claim a managed vs self-hosted decision. |
| 5 | IAM, authN/Z, prompt injection, data leakage | Partial: access controls, encryption, anonymization, PII blocking, blocked direct forecast changes | No prompt injection or SSO evidence recorded. Prepare an answer. |
| 6 | ITIL, availability targets | User said yes with no detail | Not on resume until detailed (ITIL practices, SLAs signed or intended, uptime targets). |
| 7 | Google Cloud | None | Say AWS and Azure. |
| 8 | Observability | Monitoring and alerts present; the word "observability" is not | Add only if you describe it that way. |

## Traceability
| Bullet | Source | Match |
|---|---|---|
| Deep Enterprise platform, $7.5M ARR, $25M savings, 5 Fortune 500 clients | R37 bullet 1, library canonical | REWORDED |
| Security review, managed service, AWS and Azure IaC, 2 additional clients | Managed-service story (2026-10-20); multi-cloud (2026-10-24) | REWORDED |
| Multi-agent system, evals, blocked direct forecast changes, 70% acceptance, 4 hrs/day to 4 hrs/week | K2 story; launch thresholds ("no direct forecast changes") | REWORDED |
| RAG retrieval precision 0.58 to 0.81 | K8 | REWORDED. **Conflict:** another library line says 0.87. Used 0.81. Settle before sending. |
| Agent run cost ~30%, token costs, prompts and models | Library (2026-10-15); user confirmed token and prompt work 2026-11-12 | REWORDED |
| Data platform, 8 engineers, 3 months to 3 weeks | R37 bullet | EXACT |
| Production operations with client IT | K30 actions (monitoring, alerts, escalation forum) | REWORDED. SLAs left out (library [CONFIRM]). |
| Forecast adoption 50% to 70%, change management | K10; user 2026-11-12 | REWORDED |
| Credit systems vision, 3 vendors, built in-house, MVP | Library; user 2026-11-12 | REWORDED |
| Responsible AI in lending | R37 bullet | EXACT |
| MLOps platform, 30+ scientists | R37 bullet | EXACT |
| Model governance (SR 11-7), monitoring, versioning, inventory, 100+ models | Library governance features | REWORDED |
| GDPR and regulatory compliance, privacy defaults, ~20 teams, 5 FTE | Library; user 2026-11-12 | REWORDED |
| Supply Chain, Pricing, Cognizant | R37 bullets | EXACT (Cognizant shortened: "infrastructure deals" from library item 21) |

Removed vs R37: Amazon Business financing launch ($71M), SMB bias bullet, TRACE, Keystone pricing and lanes bullets, ROI-prototype bullet. Not carried over from Tower: HAT-AI, REI-Agent, job-search agent, training bullets.

## Reviews (2026-11-12; lenses applied by Claude)
- **Recruiter, PASS 7/10.** Title "Principal technical product manager" and platform scope read right for an AI platform PM. Risks: no New York location; first bullet is strategy and revenue, not infrastructure.
- **ATS, PASS WITH WARNINGS.** No tables, text boxes, headers or footers; links resolve. Found: LLM, RAG, embeddings, agents, MCP, AWS, Azure, security, compliance, GDPR, regulatory, monitoring, change management, managed service, token. Missing: vector database, function calling, observability, IAM, ITIL, GCP. Each lacks library evidence or user detail.
- **Hiring manager (CISO lens), probes:** how agent permissions were limited; prompt injection and data leakage; why 2 years of LLM experience fits a 3+ year ask; the managed-service decision and its cost (deployment took a month longer); SLA or availability evidence; Seattle vs New York.

## Risks
- Keystone shows "Present" (user decision); verification shows Mar 2026.
- Location mismatch with career plan; used for practice only.
- Precision metric conflict (0.81 vs 0.87).
