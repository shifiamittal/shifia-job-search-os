# LinkedIn Commenting Plan (2 comments a day)

Goal: get seen by the people who hire Principal PMs in enterprise AI, AI platforms and MLOps, and by the people they follow. Every comment is written and posted by you.

## The daily rule
- **Comment 1: a person at a target company** (Tier 1 or Tier 2).
- **Comment 2: a voice in your field** (Tier 3), on a post your target hiring managers are likely reading.
- Comment within the first 1–2 hours of a post. Early comments get seen most.
- Turn on the bell (notifications) for everyone on this list so new posts reach you.

## Tier 1: product leaders at your top targets (find and add names)
Your repo has no named product leaders at these companies yet, so build this list once (about 20 minutes):
1. LinkedIn search: `"Director of Product" OR "Head of Product" OR "VP Product"` + company, filter People → Seattle area or company.
2. Keep only people who posted in the last 30 days, about AI agents, AI platforms, evals or MLOps.
3. Aim for 2–3 per company:

| Company | Teams to look for | Names (fill in) |
|---|---|---|
| Anthropic | Claude Enterprise, Claude platform | |
| OpenAI | Enterprise, API / agents platform | |
| Google | Cloud AI, Vertex AI, agent platforms | |
| Microsoft | Copilot Studio, Azure AI Foundry, Copilot agents | |
| Salesforce | Agentforce, Data Cloud | |
| ServiceNow | AI Agent products, Now Assist | |
| Databricks | Mosaic AI, agent evaluation | |
| Snowflake | Cortex AI | |

## Tier 2: warm contacts at target companies (from connection-tracker.md)
Comment whenever they post. A comment keeps you top of mind before a referral ask.
- **Piyush Rohella**, Product Manager, Stripe (your former teammate at Amazon B2B Payments and Lending)
- **Cal Lennon**, Keystone.ai
- **Himavanth Kurnala** and **Mini Manakame**, your former Amazon managers, wherever they are now
- Ex-Amazon PMs now at target companies: ask Nitin for 5 names

## Tier 3: voices in your field
Widely followed by AI product and ML platform people. Check each one's recent posts before adding them to your rotation; keep the 6–8 whose topics match yours.
- **Aakash Gupta**: PM careers and AI PM; his comment sections are full of PM leaders and recruiters
- **Lenny Rachitsky**: product management broadly
- **Hamel Husain** and **Shreya Shankar**: LLM evals, your strongest topic
- **Harrison Chase**: LangChain / LangGraph, the stack you shipped on
- **Chip Huyen**: AI engineering and ML systems
- **Eugene Yan**: applied LLMs, evals, recommender systems
- **Marily Nika** and **Aishwarya Naresh Reganti**: AI product management

## What a good comment looks like
3–4 sentences. Add one thing from your own work the post didn't cover. Never "Great post!" and never praise alone.

Topics where you have real, specific experience to add:
- **Evals and launch gates:** you launched agents only after shadow mode and set thresholds (>70% exception recall, >70% acceptance).
- **Tiered autonomy:** "accuracy of an action is not the same as acceptability"; action acceptance went from 30% to 80% after you moved to tiers.
- **Agent vs. deterministic workflow:** your job-search system missed jobs until discovery became deterministic.
- **Agents degrading in production:** adoption at one retailer fell from 70% to 50% when the agent lacked new location data.
- **Model routing and cost:** ~30% lower agent cost.
- **Model governance and privacy for ML platforms:** MDLC, privacy as a default across ~20 teams.
- **Consulting to product:** what to standardize vs. keep per client.

Example (on a post about agent evals):
> We learned the same thing shipping forecasting agents to enterprise planners: offline accuracy didn't predict whether planners would accept a recommendation. What helped was a shadow-mode gate (exception recall and acceptance both above 70%) before any agent touched production. Curious whether you weight acceptance or task success more when the two disagree.

Client names stay out of comments ("a Fortune 500 CPG client").

## Weekly tracking
Count comments in the Friday check-in. Target: 10 a week. Note any comment that led to a reply, a connection or a DM.
