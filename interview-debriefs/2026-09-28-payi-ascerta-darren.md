# Interview Debrief - Pay-i / Ascerta, Product role - Round 1
Date: 2026-09-28 per the Otter summary [VERIFY: the export file is dated Oct 1]
Interviewer: Darren Hogben (title unknown [CONFIRM])
Format: Screen (fit, logistics/comp, AI agent deep dive, hardest customer problem, explainability, customer engagement)
Source: Otter transcript "Discuss Pay I _ Ascerta Product role".
Overall Score: 7/10, **confidence LOW**

**⚠ Transcript quality: poor.** Almost none of Darren's audio was captured. Only your side is transcribed, and several of your lines are cut off ("I actually did not. It wasn't listed on the…"). The questions below are **inferred from your answers**. 6 answer segments graded; logistics segments not graded. If you remember his actual questions, tell me and I'll regrade.

**Company/role:** Not clear from the transcript. The Otter summary calls it "Pay I / Ascerta," an enterprise, AI-first organization. [CONFIRM: company name, role title, and whether Pay-i and Ascerta are the same company.]

---

## ⚠ Critical: metric inconsistencies
In this interview you used two numbers that conflict with the canonical metrics you confirmed this week:
| You said | Canonical | Risk |
|---|---|---|
| Deployment "six months to literally two months" | **6 → 4 months** | If a later round or a reference hears 4 months, it looks like inflation |
| ">80% of recommendations adopted" | **70%** | You locked 70% on 2026-10-15 |

And again: "I'm working there" (Keystone). See the Count Round 2 debrief for the correction script.

---

## Questions & Grades

### Q1 (inferred): "Walk me through your background and why this role."
**Type:** Behavioral (fit)
**Your answer (summary):** Led end-to-end enterprise platforms; launched agentic products with cost/value trade-offs; MLOps (30+ scientists, 100+ models), data platform (10+ scientists), Deep Enterprise; wants platform work in complex manual industries; AI-first and pre-PMF fit.

**Law 1 — Structure: 6/10.** Three supporting points, but about 400 words.
**Law 2 — Specificity: 7/10.** 30+ scientists, 100+ models, 10+ scientists.
**Law 3 — Skill Demonstration: 7/10.** Mentioning **cost trade-offs** early was smart if the company is about AI costs.

**Overall: 6.5/10**
**Tightening:** Cut the platform list to the strongest one (MLOps) and lead with the agent cost work (K14), since it's closest to their focus.

### Q2 (inferred): Comp, location, work authorization, search stage
**Your answer:** The comp range wasn't listed; "equity would help reach comp at my recent level"; Redmond; green card; early in the search with a couple of initial rounds.
**Grade:** Not graded (partial audio). Good: work authorization was brief and confident. Note: "early in my search" weakens leverage. Next time: "I'm in process with a few companies, and I'm prioritizing roles focused on enterprise AI."

### Q3 (inferred): "Tell me about an agentic product you built."
**Type:** Technical / AI product
**Your answer (summary):** The forecasting platform was 20% better than the incumbent, but ops teams spent 4 hrs/day reviewing it, and Keystone experts were tied up supporting them. You built an investigator (rules) plus an agentic action-taker (hypotheses, tools, skills, loops) with a UI; evals with golden datasets, shadow mode, and production metrics (adoption, hours saved, latency, cost, traces). Result: 4 hrs/day → 4 hrs/week; **">80% adopted"**.

**Law 1 — Structure: 7/10.** Problem → architecture → evals → results.
**Law 2 — Specificity: 7/10.** Strong, but the adoption figure is wrong (should be 70%).
**Law 3 — Skill Demonstration: 8/10.** Shows end-to-end agent product ownership including evals; this is your differentiator.

**Overall: 7/10**
**Rewrite of the result line:** "Planner review time went from four hours a day to four hours a week, 70% of recommendations were adopted, and overstock at the flagship client fell from $5M to $2M." (K2)

### Q4 (inferred): "What's the hardest customer problem you've solved?"
**Type:** Behavioral (0→1 / strategy)
**Your answer (summary):** Deep Enterprise: the shift from consulting to product. Noticed common problems across clients (legacy forecasts, low trust, rebuilt pipelines, 6-month deployments); pitched the CEO; forecasting as the MVP; deploy in the client environment; productized pipelines; adoption as a product problem. **"Six months to literally two months"**; 5 new clients.

**Law 1 — Structure: 7/10.** Clear "why it was hard" framing.
**Law 2 — Specificity: 6/10.** Deducted for the 6 → 2 claim (canonical is 6 → 4).
**Law 3 — Skill Demonstration: 8/10.** Strategy, executive influence, and product judgment (managed service vs. SaaS).

**Overall: 7/10**
**Fix:** "…cut deployment from six months to four, reached $5M ARR, and onboarded five enterprise clients." (K1)

### Q5 (inferred): Explainability follow-up
**Your answer:** Planners couldn't explain forecast changes (retailer, promo, display); you launched SHAP-based feature contributions in a UI so planners could explain changes to their leadership. This increased trust and adoption.
**Law 1: 7 · Law 2: 6 · Law 3: 7 → 7/10.** Good translation of an ML concept for a non-technical audience. Add the number: adoption 50% → 70% (K10).

### Q6 (inferred): "How did you engage customers?"
**Your answer:** Single point of contact; weekly sync with demand planners (progress, findings, feedback); monthly sync with the Chief Supply Chain Officer sponsor for adoption and buy-in.
**Law 1: 7 · Law 2: 6 · Law 3: 7 → 7/10.** Concrete cadence across two levels. Add one example of feedback that changed the roadmap (K10/K21).

---

## Interviewer Signals
Signals are limited because the interviewer audio is missing. From your side: you thanked Darren for "details on the process" and said "I really look forward to the next steps." The Otter summary says the meeting "concluded with interest in proceeding." [Low confidence]

## Next-Round Prediction
Not enough evidence. If it's an AI-cost-focused company, expect deep dives on LLM unit economics: cost per accepted recommendation, model routing (K14), and token/tool-call cost tracking.

## Action Items
1. [ ] **Tell me the status:** heard back? It's been 17 days.
2. [ ] Confirm the company name, role title, and Darren's role.
3. [ ] If there's a next round, correct the two numbers naturally ("to be precise, deployment went from six to four months").
4. [ ] Turn on a two-sided recording setting in Otter (or join with the computer audio) so the interviewer's questions are captured next time.
