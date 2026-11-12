# Stripe Radar: Hiring Manager Interview Prep (v6: competency answers merged with domain proof, L4 and gaps)

Updated: 2026-11-10 (v6) · Roles: PM, Radar – Fraud and Abuse Prevention (job 8306158, "JD1") · PM, Radar (job 8301646, integrations, partners, monetization, "JD2")
**How the pieces fit (OS design):** the **stories** live in `context-library/experience-library.md` (one copy: A22–A27, A10, A6, K12, K32, A13). **This prep doc** holds the plan, the scripts for this interview (section 9), story cards that point to the library (section 10), the numbers card and the practice plan. The study content is in `2026-11-09-stripe-hm-study-guide.md`. Story gaps are tracked in `context-library/story-coverage.md`.
Frameworks used: `insider-data/behavioral-interview-frameworks.md` (Addressing-Weaknesses, Why-here, STAR-L, Three Laws) and `context-library/interview-answer-style-guide.md`.

**Contents:** 0 Confirmed facts · 1 What the HM call covers · 2 Your recruiter screen · 3 What the HM is deciding · 4 **Competency answers** (examples, domain proof, L4 signals, gaps, openings) · 5 L4 through the competency answers · 6 Two roles at a glance · 7 Gaps and how the answers handle them · 8 Tiered autonomy and bot abuse · 9 Other likely questions (Q1–Q15) · 10 Story cards · 11 Questions to ask the HM · 12 Numbers card · 13 Study · 14 Open items · 15 Practice plan

---

## 0. What's confirmed (and what isn't)
| Fact | Source |
|---|---|
| Hiring manager (HM) call **next week (Mon or Tue; exact slot not confirmed in my notes), 45 minutes, one HM for both roles.** The HM's name was heard as **"Cadre"** on the call (spelling unconfirmed). | You; Colleen call, 2026-11-09 |
| **Product sense cleared.** Feedback from the interviewer (Brendan), relayed by Colleen: a really strong **users-first mindset**; depth on the three-sided marketplace and users' needs; **structured thinking**; solutions that matched the problems; strong **product strategy** (competitors, trends, tied back to the business goal, clear metrics). Constructive: "you could have come up with more **novel or unusual solutions**," though that's hard in 45 minutes. | Colleen call, 2026-11-09 |
| **Format:** the HM describes the role, the team and what he's looking for; then the interview is **behavioral**: "tell me about a time when…" or "give me an example of…" about projects and product launches. **About one or two questions per competency, then follow-ups** on your examples. Time for your questions. A get-to-know-you call about your experience, products launched, user-first mindset, **domain experience**, working style and your motivation for joining the team. | Stripe email 2026-11-06; Colleen call 2026-11-09 |
| **Three competencies:** Stay curious · Create with craft and beauty · AI fluency (Stripe's definitions are in section 1). The HM won't announce them; his questions will touch all three. | Stripe email; Colleen call |
| Stripe asks for examples "where you've pushed the boundaries of what's possible, while bringing along others in an oftentimes murky product environment," and describes itself as "humble, yet decisive decision makers who take pride in the craftsmanship of our work." | Stripe email 2026-11-06 |
| "There's a big push at Stripe to leverage AI more and streamline workflows." | Colleen call |
| After the HM call: a virtual full loop of three interviews (execution/behavioral, analytical, technical/API and system design), a written **friction log** the HM grades, a debrief, references, and a packet to PM leadership (4–6 weeks total). | Colleen call 2026-10-26 |
| Level: IC; "most likely level 3, open to level 4"; set from interview performance, the HM calls, years and past scope. | Colleen call 2026-10-26 |
| Insider Loops guide on Stripe | **Not read.** The site doesn't load from this session. Paste its loop overview and any hiring-manager section and I'll fold it in. |

## 1. What the HM call covers (confirmed by Stripe's email and Colleen's 11/09 prep call)
**Structure, about 45 minutes** (my timing estimate; Stripe didn't give one):
1. **About 8–10 minutes: the HM describes the role, the team and what he's looking for.** Listen and take notes. Use his words in your answers.
2. **About 25 minutes: behavioral questions**, one or two per competency, with follow-ups. Plan for **about six examples**, about four minutes each including follow-ups.
3. **About 8–10 minutes: your questions and your motivation** ("why you're interested in joining our team").

**What Stripe's email says the call is for:** "to get a sense of your work experiences and impact you have made throughout your career," your "working style and previous experience in Product Management," "examples where you've pushed the boundaries of what's possible, while bringing along others in an oftentimes murky product environment," and "the results and impact you've made … and what led to those successes."

**The three competencies, in Stripe's words**
- **Stay curious:** "Stripe is an applied exercise in learning about how businesses tick and how the world works. Since the details and possibilities are infinite, we are always seeking to learn. We're energized by the unfamiliar, preferring the joy of discovery to the comfort of certainty."
- **Create with craft and beauty:** "With careful thought, anything can be made surprisingly great. Across every part of Stripe, we are committed to doing so. Well-crafted work indicates care for the user, and beautiful work indicates care for the world."
- **AI fluency:** "How are you using AI in your day to day and how do you leverage it to be a more effective PM?"

**What Colleen said to expect under each** (examples of question types, not the actual questions)
- *Stay curious:* are you asking why, seeking to learn, energized by the unfamiliar? A time you had to **dive into the details of a problem** (who you talked with, the questions you asked, the data you looked at); **taking on work in an unfamiliar domain** or a stretch assignment; **taking an established process and creating something new.**
- *Create with craft and beauty:* being meticulous and detail-oriented and creating great experiences for users; **going above and beyond**; a time you focused on the **quality** of something to deliver a better user experience; **iterating on something when you felt it wasn't complete**; something **meaty and complex that you simplified.**
- *AI fluency:* describe your depth of experience with AI **with a specific example**, such as a workflow or something you built: **what you were solving for, why you chose AI, how you assess the output**, and any other ways you use AI day to day.

**Also likely:** products you've launched, your user-first mindset, and **domain experience** relevant to the role (Colleen confirmed you should bring relevant examples).

## 2. Your recruiter screen: what you covered and what you missed
*(2026-10-26 call. Colleen's second call, 2026-11-09, changed the shape of the hiring manager round; see sections 0 and 1.)*

Stories and topics you used on the 2026-10-26 call: the pitch; **Keystone's move from consulting to product** (managed service vs. SaaS, 30+ engineers and scientists in parallel lanes); **the fraud strategy at Amazon Business** (600% exposure growth to about $200M, 99% precision, a shared score, behavioral and IP signals, fraudsters caught 10 days earlier, six teams); a one-line mention of the MLOps platform (30+ data scientists, 100+ models). It was a strong call: warm, clear, calm.

Gaps and slips to fix before the HM call:
| What happened | Fix |
|---|---|
| "**Catch** $18 million in fraud losses" | "**Avoided** about $18 million." |
| "Reduce a new client onboarding time from six months to **three** months" | Your canonical number is **6 → 4 months** for Deep Enterprise deployment. The 3-month figure is the data platform (3 months → 3 weeks). |
| "15% of **legitimate** orders were sidelined" | "Up to 15% of orders on some payment methods were held for manual review." |
| "Led 30 plus engineering and science teams" | "Directed 30+ engineers and scientists in parallel lanes." |
| Asked "are you familiar with the Radar products?" you answered from the job descriptions | This is the biggest gap. The HM will expect you to know Radar's product. See the study guide. |
| The recruiter asked for **technical decisions you personally drove**; your answer was mostly strategy plus one trade-off | Add a second, technical decision (the batch vs. real-time checkout API; the blocklist cache) |
| Level answer: you asked the right question but the recruiter's answer was **years-based** (L4 = 15+) | Don't argue years. Lead with scope evidence (section 5). |
| Not yet used: pricing (K32), SPORT/MOQ APIs, privacy policy, PRFAQ | These are your strongest answers for JD2 and for L4. |
| Not said: why Stripe | Prepare it (Q2). |

---

## 3. What the HM is deciding
1. **Curiosity:** do you dig into details and data, and get energized by unfamiliar domains?
2. **Craft:** do you care about quality and the user's experience beyond "good enough"?
3. **AI fluency:** do you use AI in real work, know why you chose it, and check its output?
4. **Impact and what led to it:** results, and the decisions behind them.
5. **Pushing boundaries while bringing others along, in a murky environment:** the influence-and-ambiguity signal, which is also your L4 evidence.
6. **User-first instinct and domain fit:** the product sense feedback was strong here; Radar's users are businesses with real pain.
7. **Motivation, and tone:** why this team, and "humble, yet decisive": own your decisions, credit others, and say what you learned and what you'd do differently.

## 4. Competency answers: the example for each question, with domain proof, L4 signals and the gap it bridges
Stripe's hiring manager will ask about **stay curious, create with craft and beauty, and AI fluency**. This section is the plan **and** the script for each question. Every example is chosen to do three jobs at once: **(1) show the competency, (2) prove domain experience for both roles** (JD1 fraud and abuse; JD2 integrations, partners and monetization), and **(3) carry L4 signals** (scope across teams you didn't manage, influence, murky ambiguity). Each block also names the **gap it bridges** (section 7). You'll use about six examples; **don't reuse a program across competencies.** Each block now also names one **backup story** from the library for a different angle or a follow-up. **[ASK]** = a fact only you can add; **[CONFIRM]** = a fact to check.

**How the six programs divide:** BFS (C1) · the move into credit and lending via MDLC (C2) · the credit product (C3) · analyst tooling (C4) · the Keystone forecast platform (C5) · TRACE (C6) · the Keystone agent (C7) · the consulting-to-product pivot (C9); pricing (K32) is the C3 backup. Everything in the library; spoken versions are written for A22–A27 and a few others, and the rest come after you confirm these picks.

### Stay curious

**C1. "Tell me about a time you dove into the details of a problem": who you talked with, the questions you asked, the data you looked at**
- **Example: the Business Fraud Score, 1.0 and 2.0 as one arc** (A22 + A23). Start with the strategy and the precision-first call, then the curiosity: what is the score missing?
- **Backup: A2, credit visibility vs. risk, the pivot from customer feedback.** Curiosity shown by listening to customers and changing course. Use it if the HM has already heard BFS in the role walkthrough or your recruiter notes.
- **Why it shows curiosity:** you didn't stop at a score that worked; you asked what it missed, went into the worldwide customer data, and found behavior, not registration data, was the gap.
- **Domain proof:** *JD1:* investigating an attack, finding a signal, detection vs. friction. *JD2:* the score as a shared service that six teams integrated.
- **L4 signals:** a problem nobody owned; strategy beyond your product; six teams you didn't manage adopted it; you found the next gap yourself.
- **Gaps it bridges:** payments-fraud breadth (you know the adversary: rings, bots, business accounts with thousands of users); "I didn't build the model" (data science built it; you set strategy, thresholds and launch gates); real-time decisions (the score gates sign-up and checkout).
- **Spoken version: FINAL, in the library (A23, "Stripe competency version, C1"; saved 2026-11-11).** About 330 words (about 2 minutes). Three questions (why the controls struggled; how fraudsters operate, with the surprise about coordinated rings; when we could have caught them), then the precision-first score, six teams, and BFS 2.0. Optional closer is in the library.
- **Cut first if long:** the closer, then "account relationships and registration patterns", then the credit-bureau mention.
- **Need from you:** what triggered the deep dive; what surprised you; the basis of the **$18M** figure (I left it out until we settle it; the model doc's estimate assumes much higher recall than the 0.95 launch threshold).

**C2. "Tell me about taking on work in an unfamiliar domain or a stretch assignment"**
- **Spoken version: FINAL, in the library (A8, "Stripe competency version, C2"; saved 2026-11-11).** About 285 words (cut list in the library gets it to about 200). Structure for reference: The domain move: from seller services strategy (supply chain) into Amazon's credit and lending business, where you had to learn credit, lending, regulation and later fraud from scratch.
  1. **The shift (about 20 sec):** you built strategy for seller services; you had not worked in credit, lending or fraud.
  2. **How you ramped (about 60 sec):** through MDLC, the platform that deployed 100+ credit and underwriting models (Jul 2020 – Jul 2022). You read SR 11-7 end to end and understood each regulatory requirement. You worked with the science teams to learn what governance had to do for them, then prioritized the features that served the scientists and met the regulation. **[ASK: whom you learned from, what you read beyond SR 11-7, what you got wrong first.]**
  3. **What it produced (about 40 sec):** monitoring as a default (30 to 100 models); onboarding treated as a product (**A8, A9**; A10 for privacy if he probes).
  4. **What it set up (about 20 sec):** the credit and regulatory grounding let you later own PBI growth and PBI 2.0 and the fraud strategy for the credit business (one sentence each; the details are in C3 and C1).
- **Backup: A10, privacy by default for ML across Amazon Payments** (about 20 teams, 5 science FTE per year). Use it if he probes data handling or regulation.
- **Why it shows the competency:** the learning path is real and sequential, and you converted regulation into product priorities that scientists wanted.
- **Reserve (not in the answer):** the first governance proposal that didn't land with engineering; use for failure or feedback questions (details in the library).
- **Don't say** "monitoring was a new domain." Say regulation, credit and lending were new. Monitoring was the feature you built once you understood them.
- **Domain proof:** *JD1:* credit, lending and fraud are Radar's risk space; fraud models drift, so monitoring and governance matter. *JD2:* a platform adopted by teams you didn't manage, with documentation and onboarding treated as a product.
- **L4 signals:** a regulated, high-stakes move; org-wide defaults (30 to 100 models; about 20 teams); influence over a senior technical manager (A9).
- **Gaps it bridges:** software and data-science depth; reliability of ML products; breadth across risk (credit, lending, fraud).
- **Need from you:** the ramp-up details above; whether the platform monitored the fraud score (**[CONFIRM]**).

**C3. "Tell me about taking an established process and creating something new"**
- **Example: rebuilding credit decisions for small businesses** (A1, A3, A4, A5, A14). Established process: bureau-based credit with large blanket credit lines. New: a layered decision on Amazon's own behavioral data.
- **Backup: K32, pricing, packaging and unit economics at Keystone** (with K34 for the land-and-expand deals). Established process: consulting priced by headcount (about $2M a year from an engagement needing about seven people on site, so it lost money). New: separately purchasable modules on annual subscriptions (forecasting about $1.5M a year, agents about +$500K), managed service included. You rejected usage-based pricing (counts don't track value) and percentage-of-savings pricing (savings depend on the client's execution). Five clients renewed, two upgraded to agents, support went from about seven people to about one per client. This is the **monetization evidence JD2 requires**; tell it with Sales and Finance as partners.
- **Why it shows the competency:** you questioned the premise (no bureau file doesn't mean not creditworthy) and rebuilt the decision in layers.
- **Domain proof:** *JD1:* risk decisioning with approval vs. losses as the detection-vs-friction trade-off; layered fraud controls. *JD2:* a checkout decision API (batch-computed scores, a live eligibility check), and the batch-vs.-real-time architecture call.
- **L4 signals:** you owned an S-team goal; a 0→1 product; 50K+ customers and $71M; monthly VP reviews; cross-functional across risk operations, fraud, legal, finance and engineering.
- **Gaps it bridges:** real-time decisions and APIs (the checkout call); fraud-analyst and risk tooling (the manual review path); commercial sense (the economics, not just approvals).
- **Spoken version: FINAL, in the library (A1, "Stripe competency version, C3"; saved 2026-11-12).** About 290 words (cut list in the library gets it to about 200). STAR-L: the bureau-data and $10K-minimum problem; two decisions (economic profit over approvals; batch scoring with a live purchase check); the hard part (20-30 customer test, monthly eligibility, pre-launch simulation adding less-risky enterprise customers); results; learning in the user's words.
- **Need from you:** what was new compared with the first version of the product (the library flags this).

### Create with craft and beauty

**C4. "Tell me about a time you went above and beyond to create a better experience for users"**
- **Example, first choice: the tools you built for credit analysts** (A14 note) **[ASK: this is the best fit for JD1's "tools for fraud analysts or risk teams," but the library has only one line]:** who the analysts were, what you automated, how you learned their work (shadowing?), the detail you refined, the impact.
- **Backup: the Keystone data platform's API catalog and release notes for app developers** (K29). Care for developers as users: documented every endpoint (what it returns, schema, authentication, an integration example) and wrote the release notes yourself. The app team onboarded five new client dashboards. *(Engineering built the tooling; you owned the catalog and the release communication.)* **If the analyst-tool details don't come back, this becomes the primary.**
- **Example, fallback (documented): the data platform's API catalog and release notes for app developers** (K29). Care for developers as users.
- **Why it shows craft:** craft is care for the user; here the users are analysts or developers, not end customers.
- **Domain proof:** *JD1:* analyst tooling. *JD2:* developer experience, documentation and the path to production.
- **L4 signals:** adoption by teams you didn't manage; a reusable interface, not a one-off.
- **Gaps it bridges:** fraud-analyst tooling (JD1 preferred); external-developer empathy (JD2).
- **Fallback opening (about 130 words):** "The app team wanted to build client dashboards, but the data was shaped like SAP tables, and every developer would have had to decode it. I designed generic data APIs and a data contract, then documented every endpoint: what it returns, the schema, how to authenticate, and an integration example. And I wrote the release notes myself every time one changed, so no one had to ask. The app team onboarded five new client dashboards with no extra effort." *(Don't claim the tooling: engineering built it; you owned the catalog and the release communication.)*

**C5. "Tell me about a time you iterated on something you felt wasn't complete"**
- **Example: the Keystone forecast platform, from accurate model to trusted product** (K9, K10; K21 for the early support). Story structure (spoken answer to be written next):
  1. **What wasn't complete:** an accurate ensemble forecast with a 50% planner override rate; accuracy wasn't the problem, trust was.
  2. **How you found out:** about three months of deliberate high-touch support to learn the real workflows, then interviews and workflow observation. Three blockers: explainability, manual review load, accuracy gaps.
  3. **How you iterated:** sequenced with RICE (explainability and review time hit every planner; accuracy gaps only some SKUs). Separated two user types, planners who needed to trust the forecast and the client's scientists who needed to debug it, and served planners first. Shipped feature-level explainability for planners and model-weight views for scientists, and moved retraining from weekly to quarterly plus on-demand to reduce volatility.
  4. **Result:** adoption 50% to 60% from the explainability step alone; override rate 50% to 20% across all interventions. One clause on the agent as the next step (that story is C7), then stop.
- **Backup: SPORT, from emailed recommendations to partner APIs** (A12, A15). Adoption was 1% against a 27% goal; you interviewed sellers who acted and who didn't, then built APIs so partner teams could show recommendations inside their workflows (three Amazon partner teams, adoption about 10% against 27%). Best example of owning a miss and of APIs for partners (JD2).
- **Why it shows craft and humility:** you didn't ship the model and move on; you kept going until users could trust and act on it.
- **Domain proof:** *JD1:* fraud decisions need reasons, so explainability for the people who act on a model's output is the same problem merchants and analysts have with Radar; the detection-vs-friction trade-off is also a trust trade-off. *JD2:* two user types with different needs is the same shape as merchants vs. developers.
- **L4 signals:** a flagship client at stake; sequencing across engineering and science; a platform feature, not a one-off.
- **Gaps it bridges:** software and data-science depth (retraining, volatility, explainability); the partner-API gap is carried by the backup (SPORT), which is honest about being Amazon partner teams, not outside developers.
- **Need from you:** the one thing planners said that changed what you built; whether explainability shipped before the agent (the library says yes).

**C6. "Tell me about something meaty and complex that you simplified"**
- **Example: TRACE, explaining shipping-cost changes** (A11). More than 50 cost drivers across 14 systems owned by 14 teams, simplified to two steps: explain why the cost changed, then recommend the top fix.
- **Backup: K6, data catalog and semantic layer for agent grounding.** Simplifying messy, many-system client data into something agents can use.
- **Why it shows craft:** you reduced a very complex causal problem to something a seller could act on.
- **Domain proof:** *JD1:* it's the same shape as "why did fraud spike, and what's the fix?" (root cause, then action). *JD2:* delivered through Seller Central APIs, with data contracts and SLAs with upstream owners.
- **L4 signals:** 14 teams and 14 systems aligned; Finance, Ops, data science and data engineering; $40M in savings.
- **Gaps it bridges:** software and data-science depth (causal model, data trade-offs, a multi-terabyte pipeline); technical dependencies and external relationships.
- **Opening (about 160 words):** "Shipping was about half of item cost, and the drivers were spread across 14 systems owned by 14 teams: more than 50 factors. A seller just saw a bill that went up. I simplified it to two steps: explain why the cost changed, then recommend the one action that fixes the most. I aligned Finance, Ops, data science and data engineering on that. I pushed for 15 months of training data instead of the two years Finance wanted, because it met about 95% of their needs without huge compute, and I set data contracts and SLAs with the upstream owners. We delivered it through Seller Central APIs, and it drove about $40 million in savings. It's the same shape as 'why did fraud spike, and what do we do about it?'"

### AI fluency

**C7. "Describe your depth of experience with AI with a specific example: what you were solving for, why you chose AI, how you assess the output"**
- **Example: the Keystone forecasting agent** (K2, with K3 and K4).
- **Backup: K5, AI product quality slip** (the adoption drop and what you changed in evaluation). Also usable as the failure follow-up. **[CONFIRM details in the library entry.]**
- **Why it shows AI fluency:** you chose where AI fit (root-cause analysis) and where it didn't (rules-based exception detection), kept human approval, and built evaluation and launch gates.
- **Domain proof:** *JD1:* graded responses by risk and reversibility (K3) mirror a block / step up / allow decision, and Radar's bot-abuse work has to separate legitimate AI agents from fraudulent ones (section 8). *JD2:* APIs and tools feeding client workflows.
- **L4 signals:** a flagship client at stake; engineering, science and executives aligned; a launch process other agents reused.
- **Gaps it bridges:** technical credibility on AI; reliability and evaluation.
- **Opening (about 190 words):** "At Keystone, planners spent about four hours a day reviewing thousands of forecasts and overriding them without clear logic. I used agents for the messy part, root-cause analysis, and kept exception detection rules-based, because it's well defined and cheaper. Anything that changed a forecast needed human approval. We judged the output with expert reference cases, an LLM judge for grounding, and launch gates in shadow mode: over 70% acceptance and expert quality over 8 out of 10. Planner review time went from four hours a day to four a week, and client overstock from $5 million to $2 million. One failure: adoption fell from 70% to 50% at one client because the agent didn't know a warehouse had moved. It gave a confident answer instead of escalating, so we added the data and a rule to escalate when information is missing."

**C8. "How are you using AI in your day to day to be a more effective PM?"**
- **Example: HAT-AI plus your own daily use.** HAT-AI automated roadmap reporting, leadership newsletters and knowledge discovery across 15 finance products for 30 PMs, saving about 120 hours a week.
- **Backup: S1, agent vs. deterministic workflow** (your personal project). Shows hands-on AI use outside work. **[ASK what you built, with which tools, and how you checked the output.]**
- **Structure to fill in:** (1) the two or three things you do with AI every week as a PM, naming the tool and the task; (2) one workflow end to end: the problem, why AI, how you check the output; (3) one time AI was wrong and what you changed. **[YOUR WORDS; see N1 and N2. This is the one answer only you can write.]**
- **Domain proof:** the Radar team will want a PM who uses AI to understand attacks and customers faster (for example, synthesizing customer feedback or analyzing attack data). **[ASK whether you do this.]**
- **Gaps it bridges:** none directly; it prevents the biggest risk, a thin answer to Stripe's most pointed question.

### The L4 example Stripe asked for by name

**C9. "Tell me about a time you pushed the boundaries of what's possible while bringing others along in a murky environment"**
- **Example: moving Keystone from consulting to a product business, and the managed-service call against leadership and investors** (K1, K12). Story structure (spoken answer to be written next):
  1. **The murk:** nobody knew whether clients would pay for a product; each engagement needed about seven people on site and revenue scaled with headcount.
  2. **Bringing people along:** aligned the CEO and CTO, chose forecasting as the MVP, kept data and deployment client-specific while productizing pipelines, monitoring and the app, and ran 30+ engineers and scientists.
  3. **The disagreement:** leadership and investors wanted pure multi-tenant SaaS for margin; clients needed their data in their own cloud. You recommended a managed service inside each client's environment and stated the cost up front (one month longer). You kept it from sliding back into consulting by productizing deployment (infrastructure as code, reusable components, upgrade processes).
  4. **Result:** deployment from six months to four, $7.5M ARR, every client renewed, two more data-residency clients that pure SaaS couldn't serve.
- **Backup: A7, launching with limited information** (credit with thin data). Another murky-environment example, with a smaller cast of people brought along.
- **Pricing and packaging (K32) now lives in C3's backup**, not here; if he asks "how did you decide what to charge?", pivot there.
- **Domain proof:** *JD2:* turning technical capabilities into a product people buy; integrating into client environments. *JD1:* less direct; use C1 for fraud.
- **L4 signals:** company-level strategy and business model; influence against leadership and investors; a decision that outlasted you.
- **Gaps it bridges:** level and scope; partnerships and external relationships (clients' IT and procurement).

### Novelty (the product sense feedback: "more novel or unusual solutions")
Make sure at least two answers contain an idea that wasn't the obvious one: behavior instead of registration data to catch bots (C1); batch scoring so checkout never waits on a model (C3); "explain, then prescribe" (C6); the rules-plus-agent split (C7).

## 5. Demonstrating L4 through the competency answers
**What the recruiter told you:** level is set from interview performance, the HM calls, years and past scope. Your years (11+) put you in the L3 range, so scope and performance have to carry L4. Stripe doesn't publish its rubric; the L4 description in company-intel (changes direction across teams they don't manage, shapes strategy beyond their area, grows other PMs) is directional.

**L4 doesn't need its own answer. It shows in the examples you pick and how you open them.** Where each signal appears in section 4:

| L4 signal | Where it shows | Strength |
|---|---|---|
| A problem nobody owned | C1 (fraud controls only after checkout); C2 (undefined "governance") | **Strong** |
| Impact beyond your product | C1 (six teams adopted the score); C6 (14 teams, 14 systems); C5 backup (three partner teams) | **Strong** |
| Strategy, not features | C1 (the strategy and the PRFAQ); C9 (the business model); C3 backup (pricing) | **Strong** |
| Business-model scope | C9 (pivot, managed service); C3 backup (pricing) | **Strong, one story** |
| Influence against resistance | C9 (leadership and investors); C2 (a senior technical manager) | **Medium**: ask what pushed back (section 14) |
| Decisions that outlasted you | C2 (monitoring as a default), C1 (a shared score) | **Thin**: the library doesn't record whether they continued after you left |
| Growing others | Not covered by the competency questions | **Thin**: one report in 2016–18, three dotted-line PMs, no mentee story; use Q13 if it comes up |
| Years and level mapping | n/a | **Gap you can't close:** 11+ years vs. the recruiter's "L4 = 15+"; L6 at Amazon maps to Stripe L3 |

**Practical moves**
- Open each example with the part that crosses teams ("six teams I didn't manage adopted it"), then the decision, then the number.
- Talk about scope, never titles or past levels.
- Ask one question about the team's strategy that shows altitude (section 11).
- Near the end, ask: "What would you need to see from me to scope this role at L4?"
- Optional: offer a one-page note after the call on how you'd approach the first 90 days (only if it's good).

## 6. Two roles at a glance (one manager, both roles)
| | JD1: Fraud and Abuse Prevention | JD2: Radar (integrations and partners) |
|---|---|---|
| The manager's core worry | Can you find a new attack, size it, and turn it into a defense that works for many merchants? | Can you get Radar into customers' and partners' systems and make money from it? |
| Lead with | **S1** BFS strategy → **S2** BFS 2.0 (the attack you found) → **S3** precision vs. friction | **S6** BFS adopted by 6 teams → **K32** pricing (all 5 clients renewed, 2 upgraded) → **A15/A16** APIs partners used |
| Support with | S4 blocklist launch, K3/K4 agent action safety (tiered autonomy, evals), K5 quality slip | S4, K29/K30 (data platform APIs, client IT dependency), checkout API (batch vs. real time) |
| Their word for success | Detection, friction, speed against evolving attacks, analyst tools, real-time decisions | Integration success, adoption, retention, revenue, documentation and onboarding |
| Your honest gap | No card testing, disputes, chargebacks or bot abuse experience; your fraud work was account-level fraud for B2B credit | No external developer ecosystem at Stripe's scale; pricing is B2B enterprise, not usage-based developer pricing |
| Fit (est., 2026-10-24) | 73/100 | ~74 |

**If one manager interviews you for both:** say it once and early: "Both roles use the same core of what I've done: ML decisions where a wrong call costs money, delivered through APIs, and priced for businesses. Which problem matters more to you right now?" Then lean into the answer.

**Recruiter framing and your evidence, by role (from the call and the library):**

The recruiter framed JD1 as "ML-heavy fraud and abuse products with data science, working to find fraud patterns proactively," and JD2 as "technical product development and commercial strategy: partnerships, monetization, building for developers; fraud experience helpful but not core."

| | JD1 evidence to lead with | JD2 evidence to lead with |
|---|---|---|
| Lead story | **A22** BFS strategy → **A23** BFS 2.0 (the attack you found) | **A27** BFS adopted by six teams → **K32** pricing |
| Second | **A24** 99% precision vs. friction | **A15** SPORT APIs (3 partner teams), **A16** MOQ APIs, **K29** API catalog |
| Technical decision | Blocklist cache vs. feature store (A25) | Checkout API: batch vs. real time |
| Their question for you | Can you find and size an attack? | Which partnerships are worth pursuing, and how do technical capabilities turn into revenue? |

**If asked which role you prefer:** "Both use the same core of what I've done: ML decisions where a wrong call costs money, delivered through APIs, priced for businesses. Which problem matters most to your team right now?" Then lean into the answer.

---

## 7. Gaps in both roles, and how the competency answers handle them
**The OS framework (Addressing-Weaknesses):** the interviewer is already looking at your resume and has spotted two or three weaknesses. (1) Identify them from resume vs. JD. (2) Address them head-on and early, leading with strengths. (3) Make the role the natural next step. (4) Keep it tight. (5) Only say what you can discuss for five minutes. Name the gap neutrally, show the nearest real evidence, then say what you're doing about it. **In this call, the evidence comes through the section 4 answers, and the short "gap line" below goes into the role conversation.**

| Gap | Handled in | How | Still needed |
|---|---|---|---|
| **Payments-fraud breadth** (card testing, disputes, 3D Secure, free-trial and bot abuse) | **C1**, C7, your questions to the HM | C1 shows you know the adversary (rings, bots, business accounts with thousands of users). Gap line: "My fraud work was at the account level, fake businesses and bot sign-ups, not card payments. That's the part of Radar that's growing. I've studied how Radar handles it." (Say the last sentence only after the study guide.) | The Radar hands-on run |
| **Fraud-analyst tooling and real-time decisions** | **C4** (analyst tools), **C3** (checkout decision API) | Be exact: "scores were precomputed; checkout looked up the answer." | The details of the analyst tools |
| **Software or data-science depth** | **C2**, **C6**, **C7** | SQL, monitoring and drift, a causal model, an agent prototype | Nothing |
| **External developer ecosystem at Stripe's scale** | **C5 backup (SPORT)**, **C4 backup (API catalog)** | "My APIs served partner teams and app developers, not an open ecosystem. The partner side is the same loop: find what blocks integration, fix the docs and the path to production." | How the partner teams came to integrate |
| **Pricing for usage-based or developer products** | **C3 backup (K32)**, Q10 | The reasoning for rejecting usage-based pricing; say how you'd test it for Radar's tiers | Nothing |
| **Partnerships "worth pursuing" (JD2, per the recruiter)** | **C5 backup**, C9 | Which partner teams, and why those first | How you chose them |
| **Didn't build the model** | **C1**, C2 | "Data science built and validated the models. I set the strategy, goals, launch gates and integrations." | Nothing |
| **Level and scope** | All answers (section 5) | Scope in every opening | Nothing |
| **Numbers drift under live flow** | Practice | Numbers card (section 12). Say each number once and rehearse aloud twice. Say "most recently at Keystone." | Rehearsal |
| **Still-open story details** | Section 14 | Answer the open items before the interview | Your answers |

## 8. How tiered autonomy connects to bot abuse and AI agents (corrected)
My earlier line, "tiered autonomy covers Stripe's bot-abuse and AI-agent angle," overstated it. Here is the accurate version.

**What tiered autonomy is (K3):** a rule for which actions an agent may take alone, which need approval, and which it only surfaces, decided by risk, confidence and reversibility. You built it after early automation of mid-confidence reversible actions led to 60% of actions being reversed. Action acceptance went from 30% to 80%.

**What it is not:** a bot detector. It doesn't show you've built detection of bots or agents.

**Why it's still relevant to Radar:** Stripe's bot abuse prevention (in preview, per your prep doc) has to tell legitimate AI agents buying on a customer's behalf from fraudulent bots, and then decide what to do: allow, challenge or block. That is a graded-response decision, the same shape as your tiers: allow when confident and low-risk, step up when unsure, block only when sure and the action is hard to undo. Your experience shows two things Radar's AI-agent work needs: designing a graded response around risk and reversibility, and measuring it (evals, launch gates, audit logs). It's a design-pattern link, not direct experience.

**The direct evidence for the bot angle is BFS 2.0:** fraudsters who passed registration but behaved like bots (repetitive, machine-like patterns before the first order), caught about 10 days earlier. Lead with that. Use tiered autonomy only as a supporting point about graded responses.

**Graded response in the fraud strategy (added 2026-11-09):** the underlying idea, a response graded by risk (block only when very sure, a lighter step like identity verification for the rest, each team choosing its action), is documented in your BFS work and is now in Q3 and story S1/A22. Don't call it "tiered autonomy" there; that's the Keystone agent term. One bridging sentence is fine: "I used the same principle later with agents."

---

## 9. Interview answers (scripts for this interview)
**Priority 1 is the competency answers in section 4**, because Stripe told you the HM's questions will be about curiosity, craft and AI fluency. **9B is the earlier set (Q1–Q15)**, still useful for the role conversation, your motivation ("why this team"), and follow-ups. Story-based answers point to the story's library entry (full spoken version there, one copy) and add only what's specific to this interview.

### 9A. Competency answers
These now live in **section 4** (each competency question has its example, domain proof, L4 signals, the gap it bridges and a draft opening), so there is one copy.

### 9B. Other likely questions (Q1–Q15)
Rules applied (`interview-answer-style-guide.md`): your voice, short spoken sentences, point first, under 200 words, one message per story, canonical numbers only, ownership words ("I set the strategy," "data science built the model"), "launched" only for what shipped.
Tags: **[CONFIRM]** = a fact only you can confirm · **[YOUR WORDS]** = a personal line I've guessed at; replace it with yours · Three Laws self-check at the end of each answer (Structure / Specificity / Skill demonstration, my own estimate before you've practiced them aloud).

Five answers already exist in other files and scored well; reuse them unchanged: *Why are you looking* (7–8), *What's your leadership style*, and the comp answers in the recruiter-screen prep.

---

### Q1. Tell me about yourself (~190 words)
**Framework:** Addressing-Weaknesses: Present → Past (selective) → weakness head-on → Future. Weaknesses covered: payments-fraud breadth, supply chain as most recent work.

"I'm a principal product manager with eleven years of building ML products where a wrong decision costs real money.

Most recently at Keystone.ai, I set product direction with the CEO and CTO for an agentic AI platform and for the company's move from consulting to a product business. It reached $7.5 million in ARR with five Fortune 500 clients, and all five renewed. I also set the pricing with Sales and Finance.

Before that, I spent eight years at Amazon, starting in Pricing and growing to senior technical PM. The work closest to Radar was in B2B payments and lending. I took a credit product from zero to 50,000 business customers and $71 million in revenue. I also led the fraud strategy for Pay by Invoice: a fraud score that checks every business at sign-up. Six teams adopted it, and it avoided about $18 million in fraud losses.

My fraud work was at the account level, fake businesses and bot sign-ups, not card payments. That's the part of Radar that's growing. **[Say this line only after you've done the Radar study.]**

That's why Radar. I want to solve this at Stripe's scale."

**Check:** Structure 8 · Specificity 8 · Skill demonstration 7. Every number is canonical. Don't add "led the CEO." Practice to land under 90 seconds.

---

### Q2. Why Stripe, and why Radar? (~160 words)
**Framework:** Why-here: mission and personal connection → role fit → one culture fact.

"Stripe's mission is to grow the GDP of the internet, and fraud is one of the biggest things holding businesses back from selling online. I've seen that up close. At Amazon, fraud rings used bots to register thousands of business accounts, and good customers got held up at checkout. **[YOUR WORDS: one sentence on why that problem matters to you.]**

What excites me about Radar is that it sees patterns across millions of businesses, so it can spot a new attack before any single merchant would. Stripe's recent work on account-level abuse, like multi-account and free-trial abuse, is the problem I worked on: telling a real new customer from a fraudster before the first transaction.

And I'm drawn to how Stripe writes. At Amazon, I got a new fraud strategy approved with a PR/FAQ, because the best ideas get clear when you have to write them down."

**Check:** Structure 8 · Specificity 7 · Skill demo 6. Use only Radar facts you've confirmed (study guide); say "Stripe says" for Stripe-reported figures. If the manager asks "what have you used of Radar?", you need a real answer: do the hands-on exercise first.

---

### Q3. Walk me through your biggest fraud project end to end
**Story:** A22 (S1). The full spoken version is in `context-library/experience-library.md`; practice it from there. Lead story for JD1. The graded-response wording (block only when very sure, a lighter step like identity verification for the rest, each team choosing its action) is already in A22.

**Check:** Structure 9 · Specificity 8 · Skill demo 9. Say "avoided," not "caught." **[CONFIRM]** whether BFS had defined score bands (high → block, medium → verify, low → allow); the wording above uses only documented facts. Optional bridge, one sentence: "I used the same principle later with agents: how much to automate depends on risk and reversibility." **Follow-ups:** "Why not tighten checkout?" (too late and too blunt); "What did data science do?" (built and validated the models; I set strategy, granularity, goal, launch gates and integrations); "What would you do differently?" **[YOUR ANSWER; open item 4].**

---

### Q4. Tell me about a new fraud or abuse pattern you found
**Story:** A23 (S2). The full spoken version is in `context-library/experience-library.md`; practice it from there. JD1's core question: a new attack you found.

**Check:** Structure 8 · Specificity 9 · Skill demo 9. **Follow-ups:** "How did you know they were fraudsters?" (confirmed fraud outcomes downstream; labels arrive late, so we made explicit assumptions and watched false positives separately); "Why not a rule?" (a rule catches one ring; behavior generalizes); "How long do you keep assessing someone who never orders?" (a window trade-off between detection and inference cost; we compared windows and picked the balance). Don't name exact features.

---

### Q5. How do you balance detection against customer friction?
**Story:** A24 (S3). The full spoken version is in `context-library/experience-library.md`; practice it from there. Detection vs. friction.
**Add for this interview:** For Radar, add one closing sentence: "For Radar, I'd set the threshold per segment. A large merchant and a new small business tolerate friction very differently."

**Check:** Structure 9 · Specificity 9 · Skill demo 9. **Follow-up:** "Isn't 25% recall low?" On its own, yes; it was one layer, and checkout controls and a blocklist rule caught the rest.

---

### Q6. How do you tell an isolated incident from a defense worth building? (~150 words)
**Framework:** method, then proof. **Direct JD1 line; no story of its own, so I use my method plus Q4.**

"I ask five questions. How much did it cost the customer, in money and in operational work? Does the same pattern show up for other customers? Do our existing signals already catch it? What would a defense cost good customers in friction? And what's the narrowest defense that works?

One attack on one merchant is an incident. The same behavior across many merchants is a pattern worth a product.

That's what happened in BFS 2.0. I only built a model because the machine-like behavior showed up across the worldwide data, not in one account. If it had been one ring, a blocklist rule would have been enough. Then I watched for the attackers adapting, because fraud doesn't stand still."

**Check:** Structure 8 · Specificity 6 · Skill demo 7. This is the weakest answer because it's a method, not a story. A real example where you chose a rule over a model would raise it (open item).

---

### Q7. How does your experience line up with these roles? (~160 words)
**Framework:** the recruiter told you to bring "examples on how your experience aligns to the roles." Two sets of three, then a question back.

"For the fraud and abuse role, three things. I've found a new attack pattern and turned it into a product, BFS 2.0. I've set a precision-first threshold where false positives cost real customers. And I've worked closely with data science on ML products. They built the models, and I set the strategy, goals and launch gates.

For the integrations and partners role, three things. I built APIs that other teams integrated: six teams on the fraud score, and three partner teams on SPORT. I priced a B2B ML product, where all five clients renewed and two upgraded by $500K each. And I managed a technical dependency with a client's IT team at Keystone.

The common thread is ML decisions delivered through APIs and priced for businesses.

Which of those matters most for your team right now?"

**Check:** Structure 8 · Specificity 8 · Skill demo 8. **[CONFIRM]** the "client IT dependency" claim is K30 (SLAs may have been intended, not signed). Say "managed" only.

---

### Q8. How would you measure Radar's success? (~150 words)
**Framework:** three sides, then one example.

"I'd measure three sides. Detection: fraud rate and dispute rate, and how fast we catch a new attack. Friction: the false-positive rate, authorization rate, and how many good customers get stepped up or reviewed. And the business and developer side: how many customers turn Radar on, revenue, retention, and for developers, how long it takes to integrate.

The key is to track friction next to detection, because you can always lower fraud by blocking more. In BFS, I paired the score with a false-positive program targeting under half a percent, so we could see what each point of detection cost good customers.

I'd also set a time-to-detect metric. With attackers who adapt, the question isn't only whether we catch it, but how soon."

**Check:** Structure 8 · Specificity 7 · Skill demo 7. The analytical interview covers this in depth later.

---

### Q9. Tell me about a technical decision you made on a real-time decision API (~170 words)
**Framework:** trade-off → decision → result. **Answers the recruiter's ask for "decisions you personally drove because of your technical understanding."**

"At Amazon Business, credit decisions at checkout had to be fast and reliable. The API took a customer, cart value and product category, and returned an approval.

The trade-off was batch against real time. Real-time scoring at checkout would have meant building a live model service, and it would have delayed the launch by about three months. I chose batch. We computed customer decisions ahead of time and cached them, so the checkout API only looked up the answer. We managed risk with exposure caps and category limits, and I kept real time on the roadmap.

The result: we launched about three months earlier, and credit approval for small businesses went from 4% to 15%, with no credit losses after full launch.

For Radar, the latency budget is tighter, so I'd ask which signals must be live and which can be precomputed."

**Check:** Structure 8 · Specificity 7 · Skill demo 8. **[CONFIRM]** your role in the batch decision (yours or engineering's), and the batch cadence (your library says weekly; your API notes say daily). Don't say "real time" for the checkout lookup.

---

### Q10. Tell me about a pricing decision (JD2)
**Story:** K32 (S8). The full spoken version is in `context-library/experience-library.md`; practice it from there. JD2 pricing.
**Add for this interview:** For Radar's new tiers, add: "I'd test where customers draw the line between basic and advanced controls." Don't quote Radar tier prices.

**Check:** Structure 8 · Specificity 9 · Skill demo 8. Don't quote Radar tier prices. Don't name clients. **[CONFIRM]** whether to say "about $2 million" and "$2.8 million" aloud (internal figures from your old company); rounded is fine if you're comfortable.

---

### Q11. How do you work with engineering and data science when you disagree or hit a constraint?
**Story:** A25 (S4). The full spoken version is in `context-library/experience-library.md`; practice it from there. Working with engineering when you hit a constraint.

**Check:** Structure 8 · Specificity 9 · Skill demo 9. **[CONFIRM]** what the cache gave up (open item 5; reuse by other models is my guess). You haven't named a design partner; don't invent one.

---

### Q12. Stripe values writing. Tell me about a time a document changed a decision
**Story:** A26 (S5), with A10 (S7) as the second example. The full spoken version is in `context-library/experience-library.md`; practice it from there. Writing and influence. Say the PRFAQ first, then one sentence on the privacy policy.

**Check:** Structure 8 · Specificity 8 · Skill demo 8. **[CONFIRM]** what pushback each document got (open items 1 and 3) so you can answer "who disagreed?"

---

### Q13. How do you grow other PMs, and how do you think about scope?
**Story:** A13 / K20 (S10). The full spoken version is in `context-library/experience-library.md`; practice it from there. Growing PMs and scope.
**Add for this interview:** For scope, close with: "I'd like to be judged on what changed beyond my own product: a fraud score six teams adopted, a privacy policy about 20 teams adopted, and a business model at Keystone."

**Check:** Structure 8 · Specificity 8 · Skill demo 7. Say "a program manager," not his name. Don't call the Keystone PMs "direct reports."

---

### Q14. Tell me about a failure
**Story:** A6 (S11). The full spoken version is in `context-library/experience-library.md`; practice it from there. Failure.

**Check:** Structure 8 · Specificity 8 · Skill demo 8. Say the 6–8% is a simulation. The pilot losses were real.

---

### Q15. What would your first 90 days look like? (~170 words)
**Framework:** plan, not a story; shows altitude and a writing habit. **[YOUR PLAN: edit to your judgment.]**

"In the first 30 days, I'd learn. I'd talk to customers about the attacks they're seeing, sit with the data scientists and engineers on how Radar's signals and rules work today, and read how recent attacks were handled.

In days 30 to 60, I'd pick one or two problems that matter most, using the five questions I use to separate one-off incidents from patterns, and write a one-page strategy memo for the team to challenge.

By day 90, I'd ship one narrow defense or integration with a clear measure for detection and for friction, and a plan for what comes next. For the partners and integrations role, I'd map the integration funnel and find where customers drop off.

I'd check this against what you see as the most urgent problem, because that matters more than my plan."

**Check:** Structure 7 · Specificity 5 · Skill demo 6. This is the weakest answer; it improves a lot once you know the team's real problem. Ask the manager first (question 2 in the prep file) and adapt.

---

**Which answers to practice first:**
1. Q1 and Q2 (the first five minutes decide the tone). 2. Q3 and Q4 (JD1). 3. Q7 and Q10 (JD2 and the recruiter's ask). 4. Q5, Q9, Q12. Then the rest.

---

## 10. Story cards (full stories are in the library)
The full spoken versions, facts and follow-ups live in **`context-library/experience-library.md`** (one copy; A = Amazon, K = Keystone). This section is a card per story: where it lives, a one-line hook, what it's for, and the L4 signal it proves. To practice a story, open its library entry. To change a story, edit the library entry. The "S" numbers are labels from the earlier story bank only (the library's own "S1" is the job-search system).

| Label | Library entry | Hook | L4 signal |
|---|---|---|---|
| **S1** | **A22** (facts: A21) | Led the fraud strategy for Pay by Invoice: a score that checks every business at sign-up; about $18M avoided; six teams adopted it | A problem nobody owned; strategy beyond your product |
| **S2** | **A23** | Found fraudsters who passed sign-up but behaved like bots before their first order; launched BFS 2.0; caught them about 10 days earlier | You found the problem yourself; a durable defense |
| **S3** | **A24** | Chose precision over recall (about 99% precision) because blocking a good customer costs more; layered controls; a 3-week shadow run | A policy-level decision; a friction measurement system |
| **S4** | **A25** | Turned a 22-week feature-store dependency into a one-week cache, with a guardrail against stale data | A launch-level trade-off; you named the real risk |
| **S5** | **A26** | Wrote the PR/FAQ that aligned engineering, buyer risk and leadership; its phases became the roadmap | A document that changed direction across teams |
| **S6** | **A27** | Designed the score as a service; six teams used it for different decisions | Cross-team adoption; managed dependencies |
| **S7** | **A10** | Defined how privacy rules apply to ML; presented to the VP of Data Privacy; about 20 Payments teams adopted it | Alignment at VP level; org-wide policy |
| **S8** | **K32** | Priced Keystone as modules on annual subscriptions; rejected usage- and savings-based pricing; all five renewed, two upgraded | A company-level business model |
| **S9** | **K12** | Recommended managed service over SaaS against leadership and investors; cost a month, won two clients | A company decision against resistance |
| **S10** | **A13, K20** | Promoted a program manager from L4 to L5; led three dotted-line PMs | Grows other PMs |
| **S11** | **A6** | The 5% launch had higher losses than expected; added a lower-risk segment; simulation showed 6–8% lower losses | Owning a portfolio-level miss |
| (no label) | **A15 · A16 · K29 · K30** | SPORT APIs · MOQ APIs · API catalog · client IT dependency | External developers and partners |

**Which story for which question**

| Question type | Fraud & Abuse role | Integrations role |
|---|---|---|
| Biggest impact / a strategy you set | **A22** | **A22**, or K32 |
| Investigated a new fraud or abuse pattern | **A23** | A23 |
| Hard trade-off / detection vs. friction | **A24** | A24 |
| Scope ruthlessly / engineering trade-off | **A25** | **A25** |
| Writing / aligning with a document | **A26** | **A26** |
| Integrations, platform adoption, partners | A27 | **A27**, A15, A16, K29 |
| Influence without authority | **A10** | **A10** |
| Pricing, monetization | K32 (if asked) | **K32** |
| Disagreeing with leadership | K12 | **K12** |
| Developing PMs | **A13 / K20** | **A13 / K20** |
| Failure | **A6** | **A6** |
| AI quality / monitoring in production | K5 | K5 |


**Which story for which competency question (new, from Stripe's guidance)**

| Competency question | Primary story | Backup |
|---|---|---|
| Stay curious: dive into the details (who, questions, data) | **A23** | K6, K5 |
| Stay curious: unfamiliar domain or stretch assignment | **A10** | K15/K33 (SAP data), the move into ML deployment |
| Stay curious: established process → something new | **K1** | A22, A8 |
| Craft: above and beyond for the user | **K9** | A24 (care for the good customer) |
| Craft: iterating on something not yet complete | **A2** | A12 |
| Craft: complex → simple | **A8** | K6, the 7-page → 1-page onboarding |
| AI fluency: a workflow you built and how you assess it | **K2** (with K3, K4) | K11, K14, S1 |
| AI fluency: day-to-day use | **HAT-AI** + your own daily use | S1 / the Job Search OS |
| Pushed boundaries, brought others along, murky environment | **K1 + K12** | A22 |

---

## 11. Questions to ask the HM (pick 4)
Colleen told you to bring questions; the HM will describe the role first, so ask follow-ups to what he said. Order by what you most need to know.

**New, tied to the three competencies (use at least one):**
- "How are PMs on this team using AI day to day, and what would you want me to do with it here?"
- "What does craft look like on this team? Can you give an example of a launch that got the details right?"
- "What's the most unfamiliar thing a new PM here has to learn in the first three months?"
- "What are you looking for in this hire beyond the job description?"

**From the earlier list:**
1. "Of the requirements in the JD, which one do you personally weight most?"
2. "What's the biggest problem you want this person to solve in the first six months?"
3. "What new attack types are customers raising right now, and how does the team decide between a rule, a model and a product change?" (JD1)
4. "Which partnerships and integrations does the team see as most valuable, and how do you decide?" (JD2)
5. "Radar is moving to four tiers. What does the team still need to learn about how customers value it?" (JD2; use only if you've confirmed the packaging details)
6. "How do PMs on this team write and decide? What's the document, and who reads it?"
7. "What would you need to see from me to scope this role at L4?"
8. "Is there anything I haven't explained clearly that I should expand on?"

---

## 12. Numbers card (say exactly)
| Topic | Say | Don't say |
|---|---|---|
| Fraud scope | Pay by Invoice (all of it); "I wrote the strategy and was PM for BFS 1.0 and 2.0; data science built the models" | "$8 billion credit business" for the fraud work; "I built the model" |
| Fraud result | About **$18M** fraud losses **avoided** · fraudsters caught about **10 days earlier** · upfront detection up about **15%** · about **$2.7M** fraudulent credit lines flagged · **6 teams** | "caught $18M"; "$15M," "$8M"; "fraud loss −15%"; "repeat fraud −5%" |
| Stakes | Exposure up **600%** to about **$200M**; up to **15%** of orders on some payment methods held for manual review | "200%"; "losses" for "exposure" |
| Threshold | About **99% precision, ~25% recall**, after a 3-week shadow run | Exact features |
| Keystone | **$7.5M ARR** · 5 Fortune 500 clients, all renewed · 2 upgraded (+$500K ACV each) · 30+ engineers and scientists · deployment **6 → 4 months** · data platform **3 months → 3 weeks** | "3 months" for Deep Enterprise; "$10M," "$5M"; "currently at Keystone" |
| Amazon financing | **50K+** business customers · **$71M** · SMB approval **4% → 15%** · launched **3 months earlier** (batch) | "millions of customers" |
| APIs | SPORT: **3 partner teams** integrated; adoption **1% → ~10%** (combined with other work) · MOQ: Seller Central and 2 marketplaces, ~60% higher adherence, $20M seller savings | "Outside developers used SPORT"; "27%" |
| Agents and AI | **70%** recommendation acceptance at launch · **30% → 80%** action acceptance (name it) · run cost **~30%** lower · HAT-AI: **15** finance products, **30** PMs, about **120 hours a week** saved (confirm the basis before saying it) | ">80%" |

---

## 13. Study (summary; exact content in the study guide)
The exact content to learn, with self-tests, a hands-on friction-log exercise and a schedule, is in `interview-prep/2026-11-09-stripe-hm-study-guide.md`. In short:

1. **Payments basics (1.5 hours):** a card payment end to end; authorization vs. settlement; issuer, acquirer, network; chargebacks and disputes; 3D Secure; authorization rate. You'll be asked even in a fraud role.
2. **Radar as a product (1 hour):** rules, risk scores, review queue, dashboard, API; what Sessions 2026 added (account-level and multi-account abuse, free-trial abuse, bot abuse in preview, Signals); packaging and pricing changes. Use only what's confirmed in the recruiter-screen prep doc.
3. **Developer onboarding at Stripe (45 minutes, JD2):** read Radar's docs and one integration guide, and write down three friction points. Then you can answer "how would you improve onboarding" from experience.
4. **The manager:** find their background (LinkedIn, talks, Stripe blog) and ask Piyush Rohella for what this team is worried about.

---

## 14. Open items: questions for you that would level up the answers (on hold until we align on the sections above)
Ordered by value. "Levels up" names the answer or story each one improves.

**New: from the 11/09 call (ask these first)**

| # | Question for you | Levels up | Why it matters |
|---|---|---|---|
| N1 | **Your day-to-day AI use as a PM:** which tools, two or three workflows you repeat, how you check the output, and one time AI was wrong. | C8 | Stripe's AI fluency question is about day-to-day use; this is the answer only you can write |
| N2 | **HAT-AI:** what problem it solved, why AI, how it was built (tools), how you assessed outputs, who used it, what failed. | C8 | It's one line in the library today; it's your best "effective PM" example |
| N3 | For A23: the questions you asked, who you talked to, what surprised you. | C1 | Colleen's wording: who you talked with, questions you asked, data you looked at |
| N4 | For A10: how you learned privacy law, and what you got wrong first. | C2 | Shows curiosity, not just influence |
| N5 | One detail you refused to ship without (planner narratives in K9, the false-positive work in A24, or the UI in A8). | C4, C6 | Craft needs one concrete detail |
| N6 | What did the lukewarm feedback on credit at checkout sound like? | C3 | Makes the iteration real |
| N7 | Which craft examples do you prefer: K9 or A24; A8 or the 7-page → 1-page onboarding? | Section 4 | Lets me write the spoken versions |
| N8 | Any other unusual or novel solutions you shipped (the product sense feedback asked for more novelty)? | Sections 4, 9A | Shows creativity in the call |
| N10 | How you ramped up on fraud and on credit/lending (people you talked to, cases, data, what you read, first wrong assumption)? | Sections 4 (C1, C2), 7 | Replaces generic ramp-up text with your real steps |
| N9 | The HM's name spelling and the exact date and time; did Colleen send a bio? | Section 0 | Lets me tailor the opening and your questions |

**Earlier items**

| # | Question for you | Levels up | Why it matters |
|---|---|---|---|
| 1 | Did BFS have defined score bands (e.g., high → block, medium → verify, low → allow), or did each team set its own thresholds? | A22, A24, Q3, Q5 | Makes the graded-response story exact; the HM will ask how the score was used |
| 2 | What did engineering or buyer risk challenge in the PRFAQ, and what did you change? | A26, Q12 | L4 signal 5 (influence against resistance) |
| 3 | What did the VPs and Directors push back on in the privacy policy? | A10, Q12 | L4 signal 5 |
| 4 | Which of the six BFS integrations was hardest, and did one partner's decision or metric improve? | A27, Q7 | JD2 evidence; signal 2 |
| 5 | How did the three SPORT partner teams come to integrate (you pitched, negotiated, or leadership mandated)? How did you choose which partners to pursue? | A15, Q7 | JD2 "partnerships worth pursuing" |
| 6 | What would you do differently on the fraud strategy? (Replace my suggestion with yours.) | A22, Q3 | Every HM asks it |
| 7 | **New:** After you left, did the six teams keep using BFS? Is the privacy policy still in force? Did the MDLC defaults continue? | A22, A27, A10 | L4 signal 6 (decisions that outlasted you) is currently thin |
| 8 | **New:** Is there a growth story beyond the Program Manager and the three dotted-line PMs (a mentee, an intern, a hire)? | A13, K20, Q13 | L4 signal 7 is thin |
| 9 | What did the in-memory cache give up compared with the feature store? | A25, Q11 | Makes the trade-off credible |
| 10 | Who made the batch-vs-real-time call on the checkout API, and what was the batch cadence (weekly or daily)? | Q9, A4 | Ownership and accuracy |
| 11 | Did "escalate when data is missing" become a rule for all Keystone clients, or a one-retailer fix? | K5 | Only if you use K5 |
| 12 | Have you worked with design on a user flow? | Q11 | JD asks for design partnership; I won't invent one |
| 13 | Do you want a written answer to "What's an area you're working on?" The Drive doc has one (stepping back from implementation detail) that scored 8; it isn't in Q1–Q15. | New Q16 | The HM may ask it |
| 14 | **Logistics:** the hiring manager's name and the call date. | Section 9 | Lets me tailor Q2, Q15 and your questions |
| 15 | **Action items, not questions:** fix the Drive doc ("$8 billion credit business," "Caught $18M," the stale "3 months deployment" line); do the hands-on Radar run so you can answer "have you used Radar?" | Q1, Q2 | Prevents slips like the recruiter-screen ones |

---

## 15. Practice plan
The call is next Monday or Tuesday. About six days.
1. **Day 1:** confirm your six examples (section 4) and answer N1–N9. I'll write the missing spoken versions in the library (A23 curiosity framing, K1, K9, A2, A8, K2 and HAT-AI).
2. **Day 2:** fix the facts in your Drive doc and the numbers card; say the card aloud. Read your recruiter-call slips (section 2).
3. **Day 3:** record each example aloud, about three to four minutes each, including the likely follow-up ("how did you know?", "who disagreed?"). Check each against the Three Laws.
4. **Day 4:** the AI-fluency drill: tell K2 and your day-to-day answer back to back. Then the "pushed the boundaries" story (K1 + K12).
5. **Day 5:** the Radar role conversation: read the study guide (payments and Radar basics) so you can follow what the HM says about the team, and rehearse your questions to him.
6. **Day 6:** a full mock hiring-manager conversation with `/mock-interview`, using Colleen's example question types; rerun your weakest answer. Night before: the numbers card, your six examples, your questions. No new material.

