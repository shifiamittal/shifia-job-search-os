# Stripe Radar: Hiring Manager Interview Prep (v5: adjusted for the 11/09 prep call with Colleen)

Updated: 2026-11-10 (v5; adds Stripe's competency guidance from the 11/06 email and the 11/09 call) · Roles: PM, Radar – Fraud and Abuse Prevention (job 8306158, "JD1") · PM, Radar (job 8301646, integrations, partners, monetization, "JD2")
**How the pieces fit (OS design):** the **stories** live in `context-library/experience-library.md` (one copy: A22–A27, A10, A6, K12, K32, A13). **This prep doc** holds the plan, the scripts for this interview (section 10), story cards that point to the library (section 11), the numbers card and the practice plan. The study content is in `2026-11-09-stripe-hm-study-guide.md`. Story gaps are tracked in `context-library/story-coverage.md`.
Frameworks used: `insider-data/behavioral-interview-frameworks.md` (Addressing-Weaknesses, Why-here, STAR-L, Three Laws) and `context-library/interview-answer-style-guide.md`.

**Contents:** 0 Confirmed facts · 1 What the HM call covers · 2 Your recruiter screen · 3 What the HM is deciding · 4 **Competency plan (new)** · 5 Demonstrating L4 · 6 Two roles at a glance · 7 Your most relevant experience · 8 Gaps and the weakness framework · 9 Tiered autonomy and bot abuse · 10 Interview answers (10A competency answers, 10B other likely questions) · 11 Story cards · 12 Questions to ask the HM · 13 Numbers card · 14 Study · 15 Open items · 16 Practice plan

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

## 4. Competency plan: which examples to use for each competency
You'll use about six examples, one or two per competency. **Don't reuse a story across competencies** (style guide: one message per story). The fraud-score stories (A22–A24) are your domain proof; use them where they fit best and use other stories for the rest. The "need from you" column lists what only you can add; the open items are in section 15.

### Stay curious
| Question type (Colleen) | Primary example | Backup | Angle to stress | Need from you |
|---|---|---|---|---|
| **Dive into the details of a problem**: who you talked with, questions you asked, data you looked at | **A23** BFS 2.0: a deep dive into worldwide customer data found fraudsters who passed sign-up but acted like bots before their first order | **K6** (evals showed that over 60% of diagnostic failures came from undescribed fields, not the model); K5 (traces showed a warehouse move) | The questions you asked and the data you pulled, in order; what surprised you; who you talked with (buyer risk, data science) | The actual questions you asked and who you talked to |
| **Unfamiliar domain or stretch assignment** | **A10** ML privacy: new to EU/US privacy law for ML; read the requirements, asked privacy bar raisers and Legal whether model data was in scope | **K15/K33** SAP data at Keystone (reverse-engineering order, shipment and schedule-line tables with SQL); the MDLC move into ML deployment (in your "MDLC and MOQ" doc, not yet a library entry) | How you taught yourself, who you asked, and what you got wrong first | How you learned privacy law; what feedback you got when you joined the ML platform team |
| **Take an established process and create something new** | **K1** Keystone: every client was a consulting project (about seven people on site, 6+ months); you turned it into a product | A22 (fraud controls only after checkout → an upfront score); A8 (engineers scripting pipelines → self-service) | Why you questioned the process in the first place | Nothing needed |

### Create with craft and beauty
| Question type | Primary example | Backup | Angle to stress | Need from you |
|---|---|---|---|---|
| **Above and beyond for a better user experience** | **K9** planners didn't trust forecasts, so you built explainability per SKU, driver attribution (pricing, promotions) and plain-language narratives | **A24** care for the good customer: precision-first, a false-positive program targeting under 0.5% | The user, the detail you obsessed over, what "good enough" would have been | One specific detail you refused to ship without |
| **Iterating on something that wasn't complete** | **A2** the 5% test of credit at checkout got a lukewarm response; interviews showed small businesses needed their monthly eligibility up front; you redesigned around it | A12 (SPORT missed adoption; research showed you'd neglected the experience of acting on the recommendation) | What you saw that told you it wasn't done; what you changed | What the lukewarm feedback sounded like |
| **Meaty, complex, then simplified** | **A8** MDLC: months of scripted pipeline setup became a UI-first, self-service flow, plus documentation and a support community | K6 (a semantic layer so planners could ask in plain language); the 7-page → 1-page credit onboarding (abandonment −50%; facts in your PBI doc, no library entry yet) | The complexity you hid from the user and what you decided not to simplify | Which of these you'd rather use |

### AI fluency
Stripe's question is about **day-to-day use as a PM**, not only products you built. Prepare both.
| Question type | Primary example | Backup | Angle to stress | Need from you |
|---|---|---|---|---|
| **A workflow or product you built: what you solved, why AI, how you assess output** | **K2** forecasting agent (with K3, K4): planners spent about 4 hours a day reviewing forecasts; you used agents for the messy root-cause step and kept exception detection rules-based; human approval for anything that changes a forecast; outputs judged by expert reference cases, an LLM judge for grounding, and shadow-mode launch gates (over 70% acceptance, expert quality over 8/10); 4 hrs/day → 4 hrs/week; overstock $5M → $2M | K11 (a working prototype in Codex won 2 months of roadmap); K14 (model routing cut cost about 30%); S1 job-search system (agent vs. deterministic workflow) | "Why AI here, and why not everywhere": the hybrid rules-plus-agent design | Nothing needed |
| **Day to day: how you use AI to be a more effective PM** | **HAT-AI** (Keystone): an assistant that automated roadmap reporting, leadership newsletters and knowledge discovery across 15 finance products; 30 PMs; about 120 hours a week saved | Your own daily workflows (this Job Search OS, prototyping, analysis) | Concrete, repeated use, what you check, and a time AI was wrong | **Your actual daily AI use: tools, 2–3 workflows, how you check output, one failure.** HAT-AI isn't a library story yet. |

### One more example to have ready: "pushed the boundaries while bringing others along in a murky environment"
**K1 / K12** (the move from consulting to product; managed service vs. SaaS against leadership and investors), or **A22** (the fraud strategy that nobody owned). This is also your L4 evidence, so choose the one you haven't used elsewhere in the call.

### The product sense feedback: "more novel or unusual solutions"
The HM may not raise it, but show novelty in your examples. Real novel ideas in your work: behavior, not just registration data, to catch bots (A23); an in-memory cache to unblock a launch in a week instead of 22 (A25); the PR/FAQ instead of a requirements doc (A26); trust tiers for AI-generated metadata (K7); graded autonomy for agents (K3).

## 5. Demonstrating L4 in the HM conversation
**What the recruiter told you:** level is set from interview performance, the HM calls, years and past scope. Your years (11+) put you in the L3 range, so scope and performance have to carry L4. Stripe doesn't publish its rubric; the L4 description in company-intel (changes direction across teams they don't manage, shapes strategy beyond their area, grows other PMs) is directional.

**Seven signals, and your evidence for each:**
| Signal | What the HM should hear | Your evidence |
|---|---|---|
| 1. A problem nobody owned | You saw a gap across teams and took it | BFS: no fraud checks before checkout (A22); ML privacy rules nobody had defined (A10) |
| 2. Impact beyond your product | Other teams you didn't manage adopted it | BFS adopted by six teams (A27); privacy policy across ~20 Payments teams (A10) |
| 3. Strategy, not features | You set the direction and the why | BFS PRFAQ (A26); Keystone's move to a product business (K1) |
| 4. Business-model scope | You shaped how the company makes money | Keystone pricing: modules on annual subscriptions, all five clients renewed, two upgraded (K32) |
| 5. Influence against resistance | You changed a senior person's mind | Managed service vs. SaaS against leadership and investors (K12); VP-level alignment on privacy policy (A10) |
| 6. Decisions that outlasted you | The platform or policy continued | BFS as a shared score; MDLC defaults; privacy as platform policy |
| 7. Growing others | You developed PMs | A Program Manager promoted L4 → L5 (A13); three dotted-line PMs (K20); 50+ hiring interviews |

**L4 evidence check: where you're strong and where it's thin** (this is what to strengthen before the call; the numbers refer to the questions in section 15):

| Signal | Strength | What would strengthen it |
|---|---|---|
| 1. A problem nobody owned | **Strong** (A22, A10) | Nothing needed. |
| 2. Impact beyond your product | **Strong** (A27 six teams; A10 about 20 teams) | How the partner teams came to adopt (q6); one partner metric that moved (q5). |
| 3. Strategy, not features | **Strong** (A26, K1) | What pushback the PRFAQ got (q3). |
| 4. Business-model scope | **Strong, one story** (K32) | A backup story; the coverage grid shows none. |
| 5. Influence against resistance | **Medium**: K12 is solid; the A10 and A26 stories lack the pushback detail | What the VPs pushed back on (q4); what engineering and buyer risk challenged (q3). |
| 6. Decisions that outlasted you | **Thin**: the library doesn't record whether BFS, the privacy policy or the MDLC defaults continued after you left | Did the six teams keep using BFS, and is the policy still in force? (q8) |
| 7. Growing others | **Thin**: one report in 2016–18, three dotted-line PMs, and no mentee story | A growth story beyond one person (q9). |
| Years and level mapping | **Gap you can't close:** 11+ years vs. the recruiter's "L4 = 15+," and L6 at Amazon maps to Stripe L3 | Offset with scope and performance; ask the manager what would scope the role at L4. |

**Practical moves in the competency-based call:**
- The HM's questions will be about curiosity, craft and AI, so **L4 shows through the examples you choose and how you tell them**, not through a separate "L4 answer." Pick examples where other teams, other leaders or a murky situation were involved, and say so first ("six teams I didn't manage adopted it").
- Use your **"pushed the boundaries while bringing others along"** example (K1/K12, or A22) as the clearest L4 story. Stripe asked for it by name.
- Talk about scope, never titles or past levels.
- Ask one question about the team's strategy that shows altitude (section 12).
- Near the end, ask: "What would you need to see from me to scope this role at L4?"
- Optional: offer to send a one-page note after the call on how you'd approach the first 90 days. It shows initiative and Stripe's writing culture, but only if it's good.

---

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

## 7. Your most relevant experience (ranked for Radar)
Numbers are from `experience-library.md` canonical metrics and your call card. Use the **ownership words** in the style guide: "I led the strategy," "data science built the model."

1. **Business Fraud Score, Pay by Invoice (A21; S1–S3, S6).** You wrote the strategy (PRFAQ), were PM for 1.0 and 2.0, and six teams adopted it. About $18M in fraud losses avoided; BFS 2.0 caught fraudsters about 10 days earlier, lifted upfront detection about 15%, flagged about $2.7M in fraudulent credit lines; launch at about 99% precision after a 3-week shadow run. *Covers: JD1 items 1, 2, 4, 5; JD2 preferred "fraud/risk."*
2. **SPORT and MOQ APIs (A15, A16).** SPORT APIs integrated by 3 Amazon partner teams (adoption 1% → ~10%, combined with other work); MOQ in Seller Central and 2 Asian marketplaces. *Covers: JD2 "dashboard and API products," "integration partners."*
3. **Keystone pricing and business model (K32, S8).** Value-based modular pricing set with Sales, Finance and the CEO; all 5 clients renewed; 2 upgraded to agents (+$500K ACV each); $7.5M ARR. *Covers: JD2 "pricing and monetization," both JDs "commercial acumen."*
4. **Agents with tiered autonomy and evals (K3, K4, K5).** Action acceptance 30% → 80% after tiered autonomy; 70% recommendation acceptance at launch. *Covers: Stripe's new bot-abuse and AI-agent angle; "detection vs. friction" in a different setting.*
5. **ML privacy policy across ~20 Payments teams (S7/A10).** The L4 scope proof.
6. **Data platform, API catalog, SQL (K29, K30, K33).** SQL for client data profiling; 5 client dashboards onboarded with no extra effort; data-availability monitoring and delivery SLAs with a client's IT team. *Covers: "SQL," "technical dependencies and external relationships."*
7. **Developing PMs (A13, K20).** A Program Manager promoted L4 → L5; 3 dotted-line PMs; 50+ hiring interviews. *Covers: the L4 "grows other PMs" signal.*
8. **Failure (A6, S11).** Credit losses in the 5% launch; blended portfolio simulation cut losses 6–8%. *Covers: ownership, validating economics separately.*

---

## 8. Gaps in both roles, the experience that would close them, and how to handle them
**The OS framework (Addressing-Weaknesses):** the interviewer is already looking at your resume and has spotted two or three weaknesses. (1) Identify them from resume vs. JD. (2) Address them head-on and early, leading with strengths. (3) Make the role the natural next step. (4) Keep it tight, about two minutes. (5) Only say what you can discuss for five minutes. Reframe a gap by naming it neutrally, showing the nearest real evidence, and pointing to what you're doing about it.

| Gap | What a hiring manager would want to see | Your nearest real evidence | How to say it |
|---|---|---|---|
| **Payments fraud breadth (JD1)**: card testing, disputes, chargebacks, 3D Secure, free-trial and bot abuse | You've owned detection against attackers who adapt, in payments or a payments-like flow, and you understand dispute economics | BFS 2.0: bot-like sign-up behavior found before the first order, IP blocklist, false-positive program (A21) | "My fraud work was at the account level, fake businesses and bot sign-ups, not card payments. That's the part of Radar that's growing. I've studied how Radar handles it." Say the last sentence only after the study in `study-guide`. |
| **Fraud-analyst tooling and real-time decisions (JD1 preferred)** | Tools or decision APIs people use while the decision is live | Checkout credit API (decision lookup in real time, scores precomputed), human-review queue in the Keystone agent (K4), the challenge mechanism in BFS strategy | Be exact: "scores were precomputed; checkout looked up the answer." Don't claim analyst tooling you didn't build. |
| **Software engineering or data science background (JD1 preferred)** | Hands-on technical credibility | SQL on client data (K33), a working agent prototype (K11), MLOps platform with CI/CD and containerization (A8/A20), B.E. in chemical engineering | "I write SQL to understand data and prototype to prove value; engineers and scientists own the build." |
| **External developer ecosystem at Stripe's scale (JD2)** | You've shipped developer-facing APIs and watched integrators struggle | SPORT APIs integrated by 3 partner teams (A15); MOQ endpoints (A16); API catalog and release notes for app developers (K29) | "My APIs served partner teams and app developers, not an open ecosystem. The partner side is the same loop: find what blocks integration, fix the docs and the path to production." Then bring your friction-log observations from Stripe's own docs. |
| **Pricing for usage-based or developer products (JD2)** | You've priced something and seen what customers paid | Keystone: modules on annual subscriptions; rejected usage-based pricing for stated reasons (K32) | Show the reasoning for rejecting usage-based pricing, then say how you'd test it for Radar's new tiers. |
| **Partnerships "worth pursuing" (JD2, per the recruiter)** | A method for choosing partners and a case | Which of six BFS teams to integrate first; SPORT partner teams | [Open item: how you chose the partners and what you said no to.] |
| **Level and scope (both)** | L4 scope, not L3 | Section 5 | Never argue years. |
| **Didn't build the model (JD1)** | Clear ownership | A21 (data science built it) | "Data science built and validated the models. I set the strategy, goals, launch gates and integrations." |
| **Numbers drift under live flow** | The same numbers every time, under pressure | Your mocks averaged 6.4 and 6.5; scripted answers scored 8, improvised 5–7. Slips: "caught" for "avoided," "3 months" for "4 months," "currently at Keystone" | Numbers card (section 13). Say each number once and rehearse aloud twice. Say "most recently at Keystone." |
| **Still-open story details** | The second layer on every story (who pushed back, what you gave up) | The open items in section 15 | Answer the section 15 questions before the interview. |

---

## 9. How tiered autonomy connects to bot abuse and AI agents (corrected)
My earlier line, "tiered autonomy covers Stripe's bot-abuse and AI-agent angle," overstated it. Here is the accurate version.

**What tiered autonomy is (K3):** a rule for which actions an agent may take alone, which need approval, and which it only surfaces, decided by risk, confidence and reversibility. You built it after early automation of mid-confidence reversible actions led to 60% of actions being reversed. Action acceptance went from 30% to 80%.

**What it is not:** a bot detector. It doesn't show you've built detection of bots or agents.

**Why it's still relevant to Radar:** Stripe's bot abuse prevention (in preview, per your prep doc) has to tell legitimate AI agents buying on a customer's behalf from fraudulent bots, and then decide what to do: allow, challenge or block. That is a graded-response decision, the same shape as your tiers: allow when confident and low-risk, step up when unsure, block only when sure and the action is hard to undo. Your experience shows two things Radar's AI-agent work needs: designing a graded response around risk and reversibility, and measuring it (evals, launch gates, audit logs). It's a design-pattern link, not direct experience.

**The direct evidence for the bot angle is BFS 2.0:** fraudsters who passed registration but behaved like bots (repetitive, machine-like patterns before the first order), caught about 10 days earlier. Lead with that. Use tiered autonomy only as a supporting point about graded responses.

**Graded response in the fraud strategy (added 2026-11-09):** the underlying idea, a response graded by risk (block only when very sure, a lighter step like identity verification for the rest, each team choosing its action), is documented in your BFS work and is now in Q3 and story S1/A22. Don't call it "tiered autonomy" there; that's the Keystone agent term. One bridging sentence is fine: "I used the same principle later with agents."

---

## 10. Interview answers (scripts for this interview)
**Priority 1 is 10A: the competency answers**, because Stripe told you the HM's questions will be about curiosity, craft and AI fluency. **10B is the earlier set (Q1–Q15)**, still useful for the role conversation, your motivation ("why this team"), and follow-ups. Story-based answers point to the story's library entry (full spoken version there, one copy) and add only what's specific to this interview.

### 10A. Competency answers (priority for this call)
**[ASK]** = a fact only you can add. Each card gives the story, a draft **opening** (your voice; edit freely) and what to stress. Under the OS design the full spoken versions go in the library; the ones marked "not yet in the library" are the next to write once you confirm your picks (section 4) and answer section 15, N1–N9.

**C1. Stay curious: a time you dove into the details of a problem** · story **A23** (spoken version in the library)
*Opening:* "The fraud score was catching fraud at sign-up, but I wanted to know what it was missing. So I went into the worldwide customer data and asked one question: what do the fraudsters who pass our check do differently from real businesses before their first order? **[ASK: who you talked to and the next two questions you asked.]** The data showed machine-like, repetitive behavior in how they registered and browsed. That led to the behavioral model."
*Stress:* the order of your questions, the data you pulled, what surprised you. *Numbers:* fraudsters caught about 10 days earlier; upfront detection up about 15%; about $2.7M in fraudulent credit lines.

**C2. Stay curious: an unfamiliar domain or stretch assignment** · story **A10** (spoken version in the library; curiosity framing not yet written)
*Opening:* "Nobody on my team knew how EU and US privacy rules applied to ML models, and every science team was guessing. I started by reading the requirements myself, then asked the privacy bar raisers and Legal the question nobody had asked: is a model's output data in scope? **[ASK: how you learned the domain and what you got wrong first.]** The answer became a policy for about 20 Payments teams."
*Stress:* how you taught yourself, who you asked. Backups: SAP data at Keystone (K15/K33); moving into ML deployment (MDLC doc).

**C3. Stay curious: taking an established process and creating something new** · story **K1** (spoken version not yet written; facts in the library)
*Opening:* "At Keystone, every client project was a consulting engagement: about seven people on site for six months or more, and our revenue grew only as fast as our headcount. I asked why we kept rebuilding the same pieces for every client, and made the case for one product."
*Stress:* why you questioned the process. *Numbers:* $7.5M ARR; all five clients renewed; deployment 6 → 4 months.

**C4. Craft and beauty: going above and beyond for the user's experience** · story **K9** (spoken version not yet written); fraud-domain alternative **A24**
*Opening:* "The forecasts were accurate, but planners still overrode half of them, because they couldn't see why a number changed. I treated that as a design problem, not a modeling one: an explanation for each SKU in plain language, the drivers behind each change, like pricing and promotions, and narratives a business user could read. Adoption went from 50% to 60%." **[ASK: one detail you refused to ship without.]**
*Alternative (fraud):* care for the good customer: precision-first, so legitimate businesses weren't blocked, and a false-positive program targeting under half a percent.

**C5. Craft and beauty: iterating on something you felt wasn't complete** · story **A2** (spoken version not yet written)
*Opening:* "We launched credit at checkout to 5% of customers, and the response was lukewarm. It worked, but I didn't think it was finished. I interviewed small businesses and found they needed to know their monthly eligibility up front so they could plan purchases. We redesigned around that, with lower limits, transaction controls and a pause on delinquency." **[ASK: what the lukewarm feedback sounded like.]**
*Numbers:* the product reached 50K+ customers and $71M incremental revenue; say the redesign contributed.

**C6. Craft and beauty: something meaty and complex that you simplified** · story **A8** (spoken version not yet written)
*Opening:* "Every new model took months of engineering to deploy, because each team scripted its own pipeline on SageMaker. I made pipeline setup a UI scientists could configure in a few clicks instead of a Python script, even though it cost more to build, because entry-level scientists couldn't ramp up on scripts. I treated documentation and a support community as part of the product too."
*Numbers:* 100+ models with flat headcount; deployment time −40% (your doc also says "4 months to half a day of science effort": **[CONFIRM which to say]**).

**C7. AI fluency: a workflow or product you built: what you solved, why AI, how you assess the output** · story **K2** with K3, K4 (spoken version not yet written)
*Opening:* "At Keystone, planners spent about four hours a day reviewing thousands of forecasts and overriding them without clear logic. I used agents for the messy part, root-cause analysis, and kept exception detection rules-based, because it's well defined and cheaper. Anything that changed a forecast needed human approval. We judged the output with expert reference cases, an LLM judge for grounding, and launch gates in shadow mode: over 70% acceptance and expert quality over 8 out of 10. Planner review time went from four hours a day to four a week, and client overstock from $5M to $2M."
*Stress:* why AI here and not everywhere; how you check output. *Add:* a time it failed (K5: adoption fell from 70% to 50% when the agent didn't know a warehouse had moved; you added the data and an escalate-when-missing rule).

**C8. AI fluency: how you use AI day to day to be a more effective PM** · story **HAT-AI** plus your own daily use (not yet in the library)
*Structure to fill in:* (1) the two or three things you do with AI every week as a PM, naming the tool and the task; (2) one workflow end to end: the problem, why AI, how you check the output; (3) one time AI was wrong and what you changed. **[YOUR WORDS: this is the answer only you can write; see N1.]**
*Evidence already on record:* HAT-AI at Keystone, an assistant that automated roadmap reporting, leadership newsletters and knowledge discovery across 15 finance products, for 30 PMs, saving about 120 hours a week; the agent prototype you built in Codex (K11) that won two months of roadmap.

**C9. "Pushed the boundaries of what's possible, while bringing others along in a murky environment"** · stories **K1 + K12** (spoken version of K12 is in the library)
*Opening:* "At Keystone, nobody knew whether clients would accept a standard product instead of a custom project, and leadership and investors wanted pure SaaS while our clients needed their data to stay in their own cloud. I aligned the CEO and CTO on the move to a product, ran 30+ engineers and scientists in parallel lanes, and recommended deploying as a managed service, which cost a month and won two clients that SaaS couldn't."
*Stress:* how you brought people along (who disagreed, what you showed them). This is your L4 example.

**Also be ready for:** a 60-second "tell me about yourself" and "why this team" (Q1 and Q2 below), because the HM may open with them.

### 10B. Other likely questions (Q1–Q15)
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

## 11. Story cards (full stories are in the library)
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

## 12. Questions to ask the HM (pick 4)
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

## 13. Numbers card (say exactly)
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

## 14. Study (summary; exact content in the study guide)
The exact content to learn, with self-tests, a hands-on friction-log exercise and a schedule, is in `interview-prep/2026-11-09-stripe-hm-study-guide.md`. In short:

1. **Payments basics (1.5 hours):** a card payment end to end; authorization vs. settlement; issuer, acquirer, network; chargebacks and disputes; 3D Secure; authorization rate. You'll be asked even in a fraud role.
2. **Radar as a product (1 hour):** rules, risk scores, review queue, dashboard, API; what Sessions 2026 added (account-level and multi-account abuse, free-trial abuse, bot abuse in preview, Signals); packaging and pricing changes. Use only what's confirmed in the recruiter-screen prep doc.
3. **Developer onboarding at Stripe (45 minutes, JD2):** read Radar's docs and one integration guide, and write down three friction points. Then you can answer "how would you improve onboarding" from experience.
4. **The manager:** find their background (LinkedIn, talks, Stripe blog) and ask Piyush Rohella for what this team is worried about.

---

## 15. Open items: questions for you that would level up the answers (on hold until we align on the sections above)
Ordered by value. "Levels up" names the answer or story each one improves.

**New: from the 11/09 call (ask these first)**

| # | Question for you | Levels up | Why it matters |
|---|---|---|---|
| N1 | **Your day-to-day AI use as a PM:** which tools, two or three workflows you repeat, how you check the output, and one time AI was wrong. | C8 | Stripe's AI fluency question is about day-to-day use; this is the answer only you can write |
| N2 | **HAT-AI:** what problem it solved, why AI, how it was built (tools), how you assessed outputs, who used it, what failed. | C8 | It's one line in the library today; it's your best "effective PM" example |
| N3 | For A23: the questions you asked, who you talked to, what surprised you. | C1 | Colleen's wording: who you talked with, questions you asked, data you looked at |
| N4 | For A10: how you learned privacy law, and what you got wrong first. | C2 | Shows curiosity, not just influence |
| N5 | One detail you refused to ship without (planner narratives in K9, the false-positive work in A24, or the UI in A8). | C4, C6 | Craft needs one concrete detail |
| N6 | What did the lukewarm feedback on credit at checkout sound like? | C5 | Makes the iteration real |
| N7 | Which craft examples do you prefer: K9 or A24; A8 or the 7-page → 1-page onboarding? | Section 4 | Lets me write the spoken versions |
| N8 | Any other unusual or novel solutions you shipped (the product sense feedback asked for more novelty)? | Sections 4, 10A | Shows creativity in the call |
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
| 14 | **Logistics:** the hiring manager's name and the call date. | Section 10 | Lets me tailor Q2, Q15 and your questions |
| 15 | **Action items, not questions:** fix the Drive doc ("$8 billion credit business," "Caught $18M," the stale "3 months deployment" line); do the hands-on Radar run so you can answer "have you used Radar?" | Q1, Q2 | Prevents slips like the recruiter-screen ones |

---

## 16. Practice plan
The call is next Monday or Tuesday. About six days.
1. **Day 1:** confirm your six examples (section 4) and answer N1–N9. I'll write the missing spoken versions in the library (A23 curiosity framing, K1, K9, A2, A8, K2 and HAT-AI).
2. **Day 2:** fix the facts in your Drive doc and the numbers card; say the card aloud. Read your recruiter-call slips (section 2).
3. **Day 3:** record each example aloud, about three to four minutes each, including the likely follow-up ("how did you know?", "who disagreed?"). Check each against the Three Laws.
4. **Day 4:** the AI-fluency drill: tell K2 and your day-to-day answer back to back. Then the "pushed the boundaries" story (K1 + K12).
5. **Day 5:** the Radar role conversation: read the study guide (payments and Radar basics) so you can follow what the HM says about the team, and rehearse your questions to him.
6. **Day 6:** a full mock hiring-manager conversation with `/mock-interview`, using Colleen's example question types; rerun your weakest answer. Night before: the numbers card, your six examples, your questions. No new material.
