# Resume: Rippling, Product Lead, AI Semantics & Governance

Date: 2026-11-13 · Files: `resumes/Shifia_Mittal_Resume_Rippling.docx` (master) and `.pdf` (1 page, rendered and checked)
Base: `Shifia_Mittal_Resume_Coinbase.docx` (latest style-guide-compliant layout). Context: inbound recruiter outreach (Monique Cruz); recruiter screen not yet scheduled. Prep doc: `interview-prep/2026-11-13-rippling-data-catalog-recruiter-screen.md`.

**Keyword Coverage: 92% (12/13 requirements matched; 8 strong, 4 partial, 1 none).** Read it as strong fit with honest partials, not a perfect match.

## Framing
The role is the context layer for AI. The resume leads with the Keystone data catalog and semantic layer (K6, K7), then the data platform and API catalog (K15, K17, K29), then the forecasting agent as proof of production AI with human approval. Amazon is cut to the platform, governance and adoption work. Removed: fraud integration, CI/CD, managed-service/IaC, modular services, adoption-drop diagnosis, unit economics.

## Requirement match

| # | JD requirement | Match | Evidence on resume |
|---|---|---|---|
| 1 | Senior product leader owning complex data, platform, AI products at scale | STRONG | Keystone 0→1 ($7.5M ARR, 5 clients); Amazon ML platform (100+ models) |
| 2 | Data platforms, semantic layers, metadata systems, governance | STRONG | Catalog and semantic layer bullet; trust policy; data platform with lineage and data contracts |
| 3 | Product judgment in ambiguous technical domains | STRONG | Traced errors to missing descriptions, not the model; native schema decision |
| 4 | Competitive dynamics in data and AI | PARTIAL | Not shown on the resume (prep doc covers it for the call) |
| 5 | Lead through influence across teams and executives | STRONG | C-suite pivot; 30+ engineers and data scientists; ~20 Payments teams adopt privacy default |
| 6 | Systems thinking: data relationships, dependencies, permissions | PARTIAL | Lineage, PII-blocking sensitivity tiers, data contracts. Permission enforcement is unconfirmed. |
| 7 | Communication and storytelling | PARTIAL | Implied by persuading executives; not directly provable on paper |
| 8 | AI fluency, what good context looks like for an LLM | STRONG | Grounding catalog; field descriptions injected into prompts |
| 9 | Products that internal teams or developers adopt | STRONG | API catalog (5 dashboards, 50% → 10%); Amazon platform onboarding (5 teams) |
| 10 | High ownership at a late-stage startup | STRONG | Keystone consulting → product pivot |
| 11 | Production AI: context, grounding, retrieval, governance, tool/action interfaces | STRONG | Catalog; multi-agent system with tiered actions and human approval |
| 12 | Founder or early product leadership | PARTIAL | 0→1 product at Keystone; not a founder |
| 13 | Interface for external developers | NONE | Developer work was internal (app team, scientists) |

## Gaps

| # | Requirement | Gap | Suggested response |
|---|---|---|---|
| 1 | External developers | No match | Recruiter screen: "My developer-facing work was for internal app teams and scientists. The principle carries: no endpoint shipped without field definitions and a working example." |
| 2 | Access controls and permissions | Partial (sensitivity tiers, PII blocking) | Say only what's true. If you didn't own role-level enforcement, say you'd want to learn how Rippling's permission model feeds the catalog. **[CONFIRM before the call.]** |
| 3 | Competitive landscape | Partial | One sentence on how Rippling's unified, permissioned data differs from standalone semantic layers and catalogs. See the prep doc. |
| 4 | Large PM team | Not required by this JD | If asked: one direct report at Amazon (L4 → L5), dotted-line PMs at Keystone. |

## Reviews (first draft, run inline)

**Recruiter (6-second scan):** PASS. Top third shows "data catalog", "semantic layer", "governed", "AI agents". The summary fits in 2 lines.

**ATS:** Standard headers; no tables or text boxes; links resolve (`mailto:`, LinkedIn, GitHub). Keyword count in text: platform 11, semantic layer 2, data catalog 2, field descriptions/metadata 2, lineage 2, grounded 1, governed 1, PII/sensitivity 3, developer 2, adoption/onboarding 3, evaluation 1. Missing (not claimable): ontology, access controls, permissions.

**Hiring manager (Rippling product lead):** Credible. Would probe: (1) how permissions work in the catalog, (2) what was measured vs. estimated in 50% → 30%, (3) what she owned in the API catalog vs. engineering, (4) external developers. Credibility risk is low because nothing overclaims.

## Revisions made
- Summary rewritten: the data catalog and semantic layer lead, then the Amazon ML platform.
- Fixed a 3-line summary down to 2 lines, and a 2-word last line on the trust-policy bullet.
- Removed 6 bullets that don't serve this role (see Framing).
- Removed "AI label" detail from the trust policy bullet to keep it on 2 lines.

- v2 (after the three reviews): catalog and semantic layer bullet moved first; added the keywords metadata, retrieval, context and LLM (all in the library: K6, K7); added "privacy policy adopted by ~20 teams" to the summary; summary trimmed to 2 lines ("at scale" dropped to fit). Keystone dates left as "2024 - Present" by user decision. Permission-enforcement [CONFIRM] still open, so no permissions claim was added.

## Regression checks
- **Keywords:** recounted from the rendered PDF (above).
- **Facts:** every number matches `experience-library.md`; none of the dropped claims (recommendation acceptance 50% → 80%, "autonomous actions") appear.
- **Style guide:** SAD order, results bolded, no first person, no 1–3-word last lines, one message per bullet.
- **Render:** 1 page, dates on one line, links live.

## Source check

| Resume bullet (first 60 chars) | Source | Match |
|---|---|---|
| Led 0→1 product strategy and roadmap for an enterprise AI s… | Coinbase/R37 bullet; K1; canonical $7.5M ARR | EXACT |
| Traced repeated user questions and agent errors to missing f… | K6 (>60% failures, trust and sensitivity tiers, PII blocking, synonym index → concept layer, lineage; 50% → 30%; 60% → 40%) | REWORDED |
| Set a three-tier trust policy for AI-generated field descri… | K7 (0.85 / 0.70–0.84 / <0.70; coverage 60% → 80%; 95% approved); K6 (CI/CD fails on undescribed fields) | REWORDED |
| Launched a multi-agent system that flags forecast problems,… | K2/K3; Coinbase bullet; effort 4 hrs/day → 4 hrs/week canonical | REWORDED |
| Built a multi-tenant data platform with 8 engineers (ingest… | K15 (7–8 engineers; canonical 3 months → 3 weeks); K17 (native schema, standardize model-facing contract) | REWORDED |
| Wrote the platform's API catalog (field definitions, client… | K29 and C4 final (5 dashboards; ~50% → ~10%; "I owned the API catalog; engineering built the tooling") | REWORDED |
| Owned vision and roadmap for a self-service internal develop… | Coinbase bullet; A8 | EXACT |
| Replaced ~1.5 months of engineering setup per model with se… | Coinbase bullet; A8, A20 | EXACT |
| Turned team onboarding into a product, investing in documen… | Coinbase bullet; A20 (5 teams) | EXACT |
| Made threshold-based monitoring and alerting the platform de… | Coinbase bullet; A9 | EXACT |
| Made privacy compliance a platform default under EU and US p… | Coinbase bullet; A10 | EXACT |
| Launched Amazon Business' ML financing product via experime… | R37/Coinbase bullet; canonical $71M, 50K+ | EXACT |
| Launched TRACE, a causal cost-attribution product that expla… | Coinbase bullet; A11 | EXACT |
| Launched self-service price-perception insight tools benchma… | R37 bullet | EXACT |

Bullets removed (no source): 0. Flagged for verification: 0. One caution: the platform bullet attributes 3 months → 3 weeks to the platform as a whole, not to the native-schema decision alone (K17's own result was onboarding -2 weeks).

## Open items
- **Keystone dates** still show "2024 - Present" per your style guide. Employment verification will show Mar 2026, and Monique currently believes you're there. Change to "2024 - 2026" if you want to remove that risk. Your call.
- Answer the [CONFIRM] on permission enforcement, so I can add a bullet if it's true.
