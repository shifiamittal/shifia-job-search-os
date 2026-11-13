# Rippling: Lead PM, Data Catalog. Recruiter Screen Prep

Prepared: 2026-11-13
Recruiter: Monique Cruz, Senior Technical Recruiter (inbound outreach)
Strategy: **Sell fit.** Qualify location, level and comp lightly along the way.
Stories featured: K6 (catalog + semantic layer), K18 (semantic layer disagreement), K29 (data platform APIs). Reserve: K7, A10.
Sources: `experience-library.md`, `qa-master.md`, `career-plan.md`, `insider-data/company-intel/rippling.md` (last updated 2026-03-24, **[VERIFY: Company intel last updated 2026-03-24. Key details may have changed.]**), and web search results (secondary sources; the fetch of Rippling's own pages failed, so read them yourself, see "Read first").

---

## 0. Read first (20 minutes)

1. Data Catalog post: https://www.rippling.com/blog/rippling-data-cloud-data-catalog
2. Data Cloud launch post: https://www.rippling.com/blog/introducing-rippling-data-cloud
3. Zero-Copy for Snowflake: https://www.rippling.com/blog/rippling-data-cloud-zero-copy-for-snowflake
4. LangChain case study on Rippling's agents: https://www.langchain.com/blog/how-rippling-went-ai-native-across-every-product-in-6-months-with-deep-agents-and-langsmith
5. The JD (exact requirements and pay range): https://jobs.somacap.com/companies/rippling/jobs/97027485-lead-product-manager-data-catalog

Then edit section 3 so every sentence in "What I know about Rippling" is something you actually read.

---

## 1. Correct these three things from Monique's message

| She said | Reality | What to say |
|---|---|---|
| "Your role at Keystone AI" (present tense) | LinkedIn says "Present." Last day was Mar 2026. | If asked: "My role was part of a restructuring at Keystone earlier this year. I've used the time to go deep on agent evaluation and retrieval with hands-on builds, and to be selective about my next role." Never claim current employment. |
| "Manage a team of engineers" | You set product direction for 30+ engineers and scientists. You led PMs on a dotted line. | "I led product direction for a 30+ person engineering and science group, and led PMs on a dotted line." |
| "Launching monetization platforms and driving adoption through field training" | Closest matches: K32 (pricing, packaging, unit economics) and K10 (free hands-on support per client to drive adoption). | Ask her which she means. Then: "At Keystone I set tier-based pricing and packaging, and drove adoption with hands-on support for early clients." |

---

## 2. Numbers card (canonical only)

| Topic | Figure |
|---|---|
| Keystone | $7.5M ARR; 5 enterprises; $25M annualized client savings; 30+ engineers and scientists |
| Deep Enterprise | WAPE -21%; deployment 6 → 4 months |
| Catalog + semantic layer (K6) | Clarification rate 50% → 30%; retrieval similarity 0.6 → 0.8; diagnostic failures from undescribed fields 60% → 40% |
| Metadata generation (K7) | Planner approval of AI-generated field descriptions 50% → 80%; coverage 60% → 80%; 95% of auto-published descriptions approved |
| Semantic layer (K18) | 70% of planner queries were natural language; synonym index handled 90% of high-frequency queries |
| Data platform | Deployment 3 months → 3 weeks; client data discovery 2 weeks; ~2 weeks/model of wrangling saved |
| API catalog (K29) | 5 client dashboards onboarded without extra platform support; platform-team capacity on app-team requests ~50% → 10% |
| Amazon | 8 years; ML platform for 30+ scientists and 100+ models; deployment ~4 months → half a day; privacy policy adopted across ~20 Payments teams (A10) |

Cautions: the override-rate 50% → 20% is cumulative across all interventions. Do not name Keystone's clients. For the K29 catalog say "I owned the API catalog and release communication; engineering built the tooling."

---

## 3. Core answers

### Tell me about yourself (about 90 seconds)
Present → Past (selective) → gap head-on → Future.

> "I'm a Principal PM with 11 years in AI and data products. Most recently at Keystone I took an agentic supply-chain platform from 0→1 to $7.5M ARR across five enterprises. The problem that defined it was grounding. Our agent kept hallucinating because fields had no descriptions, so I built a runtime data catalog and semantic layer: metadata generation with confidence gates, a synonym and concept layer, and lineage. Clarification rate dropped from 50% to 30%. Before that, eight years at Amazon building ML platforms for 30+ scientists and defining privacy-by-default policy across Payments. I haven't had a large PM team, so what excites me about this role is the scope: a catalog that sits under every Rippling product. That's what I'd like to explore with you."

### What I know about Rippling (about 45 seconds) **[edit after reading]**
> "I've been reading about Data Cloud, which launched this summer. What caught my attention is that the catalog isn't documentation. It's what the AI uses to choose the right objects, fields, joins and definitions. That was exactly my problem at Keystone. Our agent hallucinated because fields had no descriptions, and fixing it was a product problem, not a model problem. I also see Rippling is extending the catalog to warehouse data through Snowflake zero-copy, which makes the semantic layer more important, because definitions then have to hold across data Rippling doesn't own. I haven't used Rippling as a customer, so I'd love to hear where the catalog is today versus where it needs to go."

Optional, only if you've read it: Rippling announced on Nov 6 that Reprompt AI is joining to build agents.

### Why Rippling / why this role
Lead with the work, not the brand:
1. The catalog is the context layer that makes AI accurate and permission-safe. That is the problem I care about most.
2. I've built that layer once at Keystone, and a platform product at Amazon. Here it would span HR, IT and finance on a shared Employee Graph, which is a scale I couldn't reach at Keystone.
3. Specific hook: the catalog serves both people and AI (from the outreach message).

### Why did you leave Keystone?
> "I spent almost two years at Keystone taking an agentic AI platform from 0→1, helping drive the company's shift from consulting to product, reaching $7.5M ARR and deploying with five enterprises. I'm proud of that. What I want next is to set product direction and own customer and business outcomes at much larger scale, applying what I've learned about making agents reliable in production on a product where that's the core problem."

If asked directly about the layoff: use the restructuring line in section 1, then go back to what you built.

### What have you been doing since March?
> "Two things. First, building. My first job-search system let an LLM decide when the search was done, and it missed jobs I knew existed. I split it into deterministic discovery and agentic evaluation, and it hit 100% recall on benchmark sets. I'm now working on patent-search retrieval, comparing lexical and semantic retrieval with reranking. Second, being selective. I'm only pursuing roles where agent reliability is the core product problem."

(Both builds are retrieval and grounding work, which is the point.)

### Tell me about your experience with semantic layers / catalogs (K6 + K18)
- Situation: users kept re-asking the chatbot, and it hallucinated. It would repeat at every new client.
- Decision: evals showed a grounding gap, not a model or prompt problem. More than 60% of diagnostic failures involved a field with no description.
- Rejected: embedding fine-tuning, more chunks, prompt-only fixes.
- Built: runtime catalog injected into prompts (descriptions, trust tiers, sensitivity tiers incl. PII blocking), a metadata generation service with confidence gates, a semantic layer (synonym index → concept layer → disambiguation), lineage and impact analysis. CI/CD fails on undescribed fields.
- Result: clarification rate 50% → 30%; similarity 0.6 → 0.8; undescribed-field failures 60% → 40%.
- K18 add-on if asked about disagreement: the Head of DS pushed back on adding an abstraction. You agreed a decision rule up front, found 70% of queries were natural language, and built a minimal synonym index for the top 20 patterns with logging. It handled 90% of high-frequency queries.

### Do you have people-management experience?
> "I managed a Program Manager at Amazon and promoted him from L4 to L5. At Keystone I led PMs on a dotted line, including a performance turnaround, and I set direction for a 30+ person engineering and science group."

Never say "managed a team of PMs."

### Compensation
- Current pay: "I'd rather focus on the value I'd bring to this role. Washington postings include a range, so could you share what's budgeted for this position and level?"
- Expectations (only if she pushes after you've heard their range): "Based on my research for Principal-level roles in AI and the scope I've owned, I'm targeting total compensation in the range of $550–650K, and I'm flexible on the mix of base, equity and bonus."
- **Private:** floor $380–400K total comp. Ask for base, bonus and equity separately, and value the equity before calling anything "aligned" (LawnStarter lesson).
- Rippling intel (stale): Senior PM $250–420K TC, Staff PM $380–560K TC. Lead PM likely lands near the Staff band, so $600K is a stretch **[VERIFY with `/salary-research Rippling Lead PM Seattle`]**. A Seattle "Product Lead, Payments" listing showed a $180–280K base band; a different role, undated, so use it only as a rough guide.

### Are you interviewing elsewhere?
> "Yes, I'm in conversations with a few companies working on enterprise AI. This role stands out because it's the context layer for AI across the whole product, so I'd like to understand your timeline."

---

## 4. Questions to ask Monique

Qualifying (ask early, keep light):
1. Is the role on-site or hybrid in Seattle, or remote? (Rippling listings suggest 3 days a week on-site within about 30 miles of an office, and a Data Cloud role is listed in Seattle. Unconfirmed for this role.)
2. Is this an IC role, or does it include building a team? How many PMs and engineers are on it today?
3. What's the budgeted range, and how is it split across base, bonus and equity?
4. Process and timeline? (Intel: 4–5 rounds over 3–5 weeks.)

Fit-building (pick two or three):
1. Is the catalog's main consumer today Rippling's own AI agents, customers' BI users, or both?
2. How are business definitions authored: by Rippling, by customers, or AI-generated with review?
3. With Zero-Copy for Snowflake, who owns definitions for data that lives outside Rippling?
4. How do you see the catalog and the agent work (including the Reprompt team) fitting together?

---

## 5. Hypotheses to offer if she asks how you'd approach the role

Label these as a point of view, not as knowledge of Rippling's roadmap.

- **Ontology across HR, IT, finance:** start from the questions customers actually ask, not a full schema. Prioritize the top 20 concepts, log misses, expand from usage (K18). The Employee Graph is already a strong spine.
- **Trust at scale:** confidence tiers (>0.85 auto-publish with a label, 0.70–0.84 human review, <0.70 blocked) and a hard rule that undescribed fields fail the build (K6, K7).
- **Permissions and AI context:** sensitivity tiers and PII blocking in the catalog layer, so the model never sees restricted fields (K6). Rippling's AI is described as permission-aware, so ask how the catalog enforces it. Back it with A10 (privacy by default across ~20 Payments teams, presented to the VP of Data Privacy).

---

## 6. Gaps and how to handle them

| Gap | Handling |
|---|---|
| No HR / payroll domain | "The catalog problem is domain-independent. I ramped into supply chain at Keystone and fintech at Amazon, and I'll do the same here." |
| No large PM team | Don't volunteer it. If asked, use the people-management answer above. |
| Keystone end date | Use the restructuring line. Don't claim current employment. |
| Amazon title | Resume says Sr. PM-T 2016–2024. If asked: "I joined as a Product Manager in 2016 and was promoted to Senior PM-Technical in 2020." |
| Stale company intel | The Rippling intel file has no catalog specifics. Don't claim knowledge of their current catalog internals. |

---

## 7. Open items before the call

- [ ] Read the five sources in section 0 and edit "What I know about Rippling."
- [ ] Reply to Monique with your phone number and two time windows.
- [ ] Confirm what she meant by "monetization platforms… field training."
- [ ] Get the JD pay range and location terms.
- [ ] Run `/salary-research Rippling Lead PM Seattle` if you want a sourced number before the comp conversation.
- [ ] Decide: add Rippling to `/app-tracker` after the call.

## 8. After the call

Log the recruiter's answers (range, location, level, process) in `app-tracker.md`, then run `/interview-prep` for the hiring-manager round.
