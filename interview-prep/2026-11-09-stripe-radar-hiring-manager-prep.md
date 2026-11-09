# Stripe Radar: Hiring Manager Interview Prep (v3, one document: plan, answers and stories)

Updated: 2026-11-09 · Roles: PM, Radar – Fraud and Abuse Prevention (job 8306158, "JD1") · PM, Radar (job 8301646, integrations, partners, monetization, "JD2")
**This is the single working document.** The answers (section 9) and the stories (section 10) are inline here; edit them here. Copies elsewhere, for reference only: facts and spoken versions in `context-library/experience-library.md` (A22–A27, A10, A6, K12, K32, A13); the original story bank in `interview-prep/2026-10-25-stripe-l4-story-bank.md`; the earlier answers file `2026-11-09-stripe-hm-answers-draft-v1.md`; the study content in `2026-11-09-stripe-hm-study-guide.md`.
Frameworks used: `insider-data/behavioral-interview-frameworks.md` (Addressing-Weaknesses, Why-here, STAR-L, Three Laws) and `context-library/interview-answer-style-guide.md`.

**Contents:** 0 Confirmed facts · 1 What the HM call covers · 2 Your recruiter screen · 3 What the HM is deciding · 4 Demonstrating L4 · 5 Two roles at a glance · 6 Your most relevant experience · 7 Gaps and the weakness framework · 8 Tiered autonomy and bot abuse · 9 Interview answers Q1–Q15 · 10 Stories S1–S11 · 11 Questions to ask the HM · 12 Numbers card · 13 Study · 14 Open items · 15 Practice plan

---

## 0. What's confirmed (and what isn't)
| Fact | Source |
|---|---|
| Hiring manager (HM) call **next week, 45 minutes**, **one HM for both roles**, name not known yet | You, 2026-11-09 |
| **Product sense interview cleared** (Zoom, 2026-11-06, ~47 minutes) | You; Otter summary |
| Stripe's loop after the HM call: a **virtual full loop** of three interviews (execution/behavioral, analytical/metrics and trade-offs/experiments, technical/API and system design), plus a **written take-home "friction log"** (written communication, API understanding, "user's-first PM"; **the HM grades it**), then debrief, references, and a packet to PM leadership. Whole process 4–6 weeks. | Recruiter call (Colleen Barnes), Otter, 2026-10-26 |
| Both roles go through the same process. IC role; "most likely level 3, open to level 4"; recruiter described L3 as roughly 8–15 years and L4 as 15+ and said you're "on the cusp." Level is decided at the end, from **interview performance, the HM calls, years, and what you've done**. | Recruiter call |
| The recruiter's own words on the HM call: the HM will "talk a lot more about those roles and the team, what the scope of the roles would be, and what you would be doing." She told you to **come with questions and examples of how your experience aligns to the roles.** | Recruiter call |
| Insider Loops guide on Stripe | **Could not read.** The site doesn't load from this session. Paste its loop overview and any hiring-manager section and I'll fold it in. |

---

## 1. What the HM call typically covers
Stripe doesn't publish this, so treat it as directional. Two sources agree:
- **Your recruiter** describes it as a two-way conversation about the roles, the team and scope, where you bring examples and questions. The HM also grades your friction log, so expect questions about your written and developer-facing instincts.
- **Third-party prep sites** (search results, not read in full) describe a 45–60 minute conversation on product thinking, collaboration, your PM philosophy, past product work, "why Stripe," building developer-focused products and your written communication style. Passing it leads to the final loop. See [Exponent](https://www.tryexponent.com/guides/stripe-product-manager-interview), [IGotAnOffer](https://igotanoffer.com/blogs/product-manager/stripe-product-manager-interview), [Leland](https://www.joinleland.com/library/a/stripe-product-manager-interview) and [Supra Insider](https://suprainsider.substack.com/p/76-what-we-learned-about-pm-interviews). Insider Loops summarizes Stripe as product sense first, written culture, technical depth and rigorous calibration.
- Your product sense interviewer said Stripe PMs near Radar need deep empathy for complex business-user pain points across industries (from the Otter summary; the transcript wasn't read).

**What that means for 45 minutes:** about 10 minutes of you (pitch and why Stripe), about 15–20 of the HM explaining the roles and probing your fit, about 10–15 of your questions. Don't plan for 10 deep stories. Plan for **one pitch, one lead story per role, and strong questions.**

Also expect: **writing** (Stripe is a writing culture; your BFS PRFAQ is the proof), **technical depth** (APIs, real-time decisions, how a payment works), **developer empathy** (JD2), and **SQL/data** (both JDs name it).

Likely questions from Stripe's question bank (company-intel, Glassdoor/Blind): "Why Stripe? Why payments?", "How do you decide with incomplete information?", "Design a fraud detection product for Stripe merchants," "Improve Stripe's developer onboarding," "Payment success rate dropped 2%: what do you investigate?", "How does online payment processing work end to end?"

---

## 2. Your recruiter screen: what you covered and what you missed
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
| Level answer: you asked the right question but the recruiter's answer was **years-based** (L4 = 15+) | Don't argue years. Lead with scope evidence (section 4). |
| Not yet used: pricing (K32), SPORT/MOQ APIs, privacy policy, PRFAQ | These are your strongest answers for JD2 and for L4. |
| Not said: why Stripe | Prepare it (Q2). |

---

## 3. What the HM is deciding
1. **Is there a real match for this team's problem?** For JD1: someone who can find new attacks and turn them into detection and control products. For JD2: someone who can bring Radar into customers' and partners' systems and own the commercial side.
2. **Judgment on trade-offs, with numbers.** Detection vs. customer friction; speed vs. reliability; what to build now vs. later.
3. **Technical and written depth.** Can you explain an API or a model decision clearly? The friction log is graded by this person.
4. **Scope.** Does your experience look like L3 (owns one area) or L4 (changes things across teams)? The HM call feeds the level decision.
5. **User-first instinct.** Radar's users are businesses with real pain; empathy for them is the stated value.

---

## 4. Demonstrating L4 in the HM conversation
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

**Practical moves in a 45-minute call:**
- Open every story with the part that crosses teams ("six teams I didn't manage adopted it"), then the decision, then the number.
- Talk about scope, never titles or past levels.
- Ask one L4-shaped question about the team's strategy (section 8), which shows altitude.
- Near the end, ask: "What would you need to see from me to scope this role at L4?"
- Optional: offer to send a one-page note after the call on how you'd approach the first 90 days. It shows initiative and Stripe's writing culture, but only if it's good.

---

## 5. Two roles at a glance (one manager, both roles)
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

## 6. Your most relevant experience (ranked for Radar)
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

## 7. Gaps in both roles, the experience that would close them, and how to handle them
**The OS framework (Addressing-Weaknesses):** the interviewer is already looking at your resume and has spotted two or three weaknesses. (1) Identify them from resume vs. JD. (2) Address them head-on and early, leading with strengths. (3) Make the role the natural next step. (4) Keep it tight, about two minutes. (5) Only say what you can discuss for five minutes. Reframe a gap by naming it neutrally, showing the nearest real evidence, and pointing to what you're doing about it.

| Gap | What a hiring manager would want to see | Your nearest real evidence | How to say it |
|---|---|---|---|
| **Payments fraud breadth (JD1)**: card testing, disputes, chargebacks, 3D Secure, free-trial and bot abuse | You've owned detection against attackers who adapt, in payments or a payments-like flow, and you understand dispute economics | BFS 2.0: bot-like sign-up behavior found before the first order, IP blocklist, false-positive program (A21) | "My fraud work was at the account level, fake businesses and bot sign-ups, not card payments. That's the part of Radar that's growing. I've studied how Radar handles it." Say the last sentence only after the study in `study-guide`. |
| **Fraud-analyst tooling and real-time decisions (JD1 preferred)** | Tools or decision APIs people use while the decision is live | Checkout credit API (decision lookup in real time, scores precomputed), human-review queue in the Keystone agent (K4), the challenge mechanism in BFS strategy | Be exact: "scores were precomputed; checkout looked up the answer." Don't claim analyst tooling you didn't build. |
| **Software engineering or data science background (JD1 preferred)** | Hands-on technical credibility | SQL on client data (K33), a working agent prototype (K11), MLOps platform with CI/CD and containerization (A8/A20), B.E. in chemical engineering | "I write SQL to understand data and prototype to prove value; engineers and scientists own the build." |
| **External developer ecosystem at Stripe's scale (JD2)** | You've shipped developer-facing APIs and watched integrators struggle | SPORT APIs integrated by 3 partner teams (A15); MOQ endpoints (A16); API catalog and release notes for app developers (K29) | "My APIs served partner teams and app developers, not an open ecosystem. The partner side is the same loop: find what blocks integration, fix the docs and the path to production." Then bring your friction-log observations from Stripe's own docs. |
| **Pricing for usage-based or developer products (JD2)** | You've priced something and seen what customers paid | Keystone: modules on annual subscriptions; rejected usage-based pricing for stated reasons (K32) | Show the reasoning for rejecting usage-based pricing, then say how you'd test it for Radar's new tiers. |
| **Partnerships "worth pursuing" (JD2, per the recruiter)** | A method for choosing partners and a case | Which of six BFS teams to integrate first; SPORT partner teams | [Open item: how you chose the partners and what you said no to.] |
| **Level and scope (both)** | L4 scope, not L3 | Section 4 | Never argue years. |
| **Didn't build the model (JD1)** | Clear ownership | A21 (data science built it) | "Data science built and validated the models. I set the strategy, goals, launch gates and integrations." |
| 5 | **Numbers drift under live flow** | Your mocks averaged 6.4 and 6.5; scripted answers scored 8, improvised 5–7 | Numbers card (section 12), say each number once, rehearse out loud twice. |
| 6 | **Still-open story details** | A hiring manager will ask for the second layer | Get the answers to the open items in section 14 before the interview. |

---

## 8. How tiered autonomy connects to bot abuse and AI agents (corrected)
My earlier line, "tiered autonomy covers Stripe's bot-abuse and AI-agent angle," overstated it. Here is the accurate version.

**What tiered autonomy is (K3):** a rule for which actions an agent may take alone, which need approval, and which it only surfaces, decided by risk, confidence and reversibility. You built it after early automation of mid-confidence reversible actions led to 60% of actions being reversed. Action acceptance went from 30% to 80%.

**What it is not:** a bot detector. It doesn't show you've built detection of bots or agents.

**Why it's still relevant to Radar:** Stripe's bot abuse prevention (in preview, per your prep doc) has to tell legitimate AI agents buying on a customer's behalf from fraudulent bots, and then decide what to do: allow, challenge or block. That is a graded-response decision, the same shape as your tiers: allow when confident and low-risk, step up when unsure, block only when sure and the action is hard to undo. Your experience shows two things Radar's AI-agent work needs: designing a graded response around risk and reversibility, and measuring it (evals, launch gates, audit logs). It's a design-pattern link, not direct experience.

**The direct evidence for the bot angle is BFS 2.0:** fraudsters who passed registration but behaved like bots (repetitive, machine-like patterns before the first order), caught about 10 days earlier. Lead with that. Use tiered autonomy only as a supporting point about graded responses.

**Graded response in the fraud strategy (added 2026-11-09):** the underlying idea, a response graded by risk (block only when very sure, a lighter step like identity verification for the rest, each team choosing its action), is documented in your BFS work and is now in Q3 and story S1/A22. Don't call it "tiered autonomy" there; that's the Keystone agent term. One bridging sentence is fine: "I used the same principle later with agents."

---

## 9. Interview answers: Q1–Q15 (full, interview-ready drafts)
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

### Q3. Walk me through your biggest fraud project end to end (~200 words)
**Framework:** STAR-L / accomplishment arc. **Lead story for JD1.** (A22)

"**Situation.** Amazon Business used fraud controls built for consumers, and they ran after checkout. They didn't fit businesses, where one account can have thousands of users placing large orders that look suspicious. And fraud rings used bots to register thousands of accounts that nobody could catch until checkout.

**Stakes.** Fraud exposure across Amazon Business grew 600%, to about $200 million, while up to 15% of orders on some payment methods were held for manual review.

**Decisions.** I led the fraud strategy and made four calls. One, check for fraud across the customer journey, from registration to the first purchase. Two, block only when the score was very sure, about 99% precision, and give everyone else a lighter response, like identity verification. Three, build one shared score and let each team choose its response: block, verify or filter. Six teams did. Four, keep watching for new patterns, and add behavioral and IP signals when fraudsters started acting like bots.

**Result.** About $18 million in fraud losses avoided, fraudsters caught about 10 days earlier, and upfront detection up about 15%.

**Learning.** Fraud prevention isn't one gate. It's the right check at each step."

**Check:** Structure 9 · Specificity 8 · Skill demo 9. Say "avoided," not "caught." **[CONFIRM]** whether BFS had defined score bands (high → block, medium → verify, low → allow); the wording above uses only documented facts. Optional bridge, one sentence: "I used the same principle later with agents: how much to automate depends on risk and reversibility." **Follow-ups:** "Why not tighten checkout?" (too late and too blunt); "What did data science do?" (built and validated the models; I set strategy, granularity, goal, launch gates and integrations); "What would you do differently?" **[YOUR ANSWER; open item 4].**

---

### Q4. Tell me about a new fraud or abuse pattern you found (~190 words)
**Framework:** accomplishment arc; investigation → product. **JD1's core question.** (A23)

"The score was good at catching fraud at sign-up, but I wanted to know what it was missing. I led a deep dive into our worldwide business-customer data and found a pattern: fraudsters who passed the registration score but behaved unlike any real business before their first order. They moved through sign-up and browsing in repetitive, machine-like ways.

That told me the gap wasn't the model's accuracy. It was the signals. A registration snapshot can't see behavior. So I launched BFS 2.0, a behavioral model that keeps assessing each new customer from registration to the first transaction, using non-transaction behavior like browsing and account settings. I partnered with the buyer-risk team to reuse insights from their model, and added IP intelligence with a blocklist for suspicious IPs.

It caught fraudsters about 10 days earlier on average, lifted upfront detection about 15%, and flagged about $2.7 million in fraudulent credit lines. Then I set up a false-positive program with a target under half a percent, so good customers didn't pay for it."

**Check:** Structure 8 · Specificity 9 · Skill demo 9. **Follow-ups:** "How did you know they were fraudsters?" (confirmed fraud outcomes downstream; labels arrive late, so we made explicit assumptions and watched false positives separately); "Why not a rule?" (a rule catches one ring; behavior generalizes); "How long do you keep assessing someone who never orders?" (a window trade-off between detection and inference cost; we compared windows and picked the balance). Don't name exact features.

---

### Q5. How do you balance detection against customer friction? (~190 words)
**Framework:** trade-off → decision → result. (A24)

"In fraud, the expensive mistake isn't always missing fraud. It's blocking a good customer. For the Business Fraud Score, a false positive meant suspending a legitimate business's credit line, which could be thousands to hundreds of thousands of dollars.

So I made precision the priority over recall, on purpose. The score ran at registration, and buyer risk's controls still checked every order after checkout. So the score didn't need to catch everything. It needed to be right when it acted. Before launch, I required a three-week shadow run on live traffic, because a model can look great offline and drift on real data. I set the launch threshold where the score was right about 99% of the time, accepting that it would catch only about a quarter of fraud on its own. On live shadow data, it made essentially no false suspensions at that threshold.

Then I kept measuring the friction side, with a false-positive program targeting under half a percent.

For Radar, I'd set the threshold per segment. A large merchant and a new small business tolerate friction very differently."

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

### Q10. Tell me about a pricing decision (~170 words) (JD2)
**Framework:** trade-off → decision → result. (K32)

"At Keystone, consulting was losing money. The flagship engagement brought in about $2 million a year but needed about seven people on site, around $2.8 million in cost.

With the CEO, Sales and Finance, I split the offer into separate modules on annual subscriptions: forecasting at roughly $1.5 million a year, and agentic capabilities at about $500K more, with managed services included.

I rejected two alternatives. Usage-based pricing, because forecast or action counts don't track the value a customer gets. And percentage-of-savings pricing, because savings depend on the client's execution, so we'd end up in attribution disputes.

Two clients started on forecasting and upgraded to agents, about $500K each. All five clients renewed. Support per client dropped from about seven people to about one.

For Radar's new tiers, I'd test where customers draw the line between basic and advanced controls."

**Check:** Structure 8 · Specificity 9 · Skill demo 8. Don't quote Radar tier prices. Don't name clients. **[CONFIRM]** whether to say "about $2 million" and "$2.8 million" aloud (internal figures from your old company); rounded is fine if you're comfortable.

---

### Q11. How do you work with engineering and data science when you disagree or hit a constraint? (~160 words)
**Framework:** trade-off → decision → result. (A25)

"Midway through BFS 2.0, we hit a dependency. The IP blocklist was supposed to live in our ML platform's feature store. That work was estimated at 22 weeks, which would have pushed the launch out a full quarter. Fraud rings don't wait a quarter.

Engineering proposed hosting the blocklist in a refreshable in-memory cache instead, about a week of work. I made the call to do it, with one condition: the design had to guarantee the cache always loaded the latest version, with no risk of stale or corrupted data. That was the real risk, not the storage choice.

We shipped on schedule, and the blocklist and IP rules contributed about 10% of the new upfront detection."

**Check:** Structure 8 · Specificity 9 · Skill demo 9. **[CONFIRM]** what the cache gave up (open item 5; reuse by other models is my guess). You haven't named a design partner; don't invent one.

---

### Q12. Stripe values writing. Tell me about a time a document changed a decision (~190 words)
**Framework:** accomplishment arc. (A26, with A10 as the second example)

"I wrote the Business Fraud Score PR/FAQ instead of a requirements document, because the hard part wasn't the requirements. It was getting engineering, buyer risk and leadership to agree on a different strategy. It opened with the customer outcome: one score, at sign-up, that any team could use. The FAQ took on the hard questions directly: how big the problem was, why business fraud is harder than consumer fraud, the trade-off between fraud control and friction, and a four-phase roadmap. Credit Systems engineering used it to start technical design, and its phases became the roadmap through BFS 2.0.

I used the same approach for a privacy policy for ML models. Nobody had defined how EU and US privacy rules applied to ML. I wrote the requirements with Legal and took them to the VP of Data Privacy and Payments leaders. It became platform policy across about 20 Payments teams.

My rule: goal and customer first, then the decision and its trade-off, then the evidence."

**Check:** Structure 8 · Specificity 8 · Skill demo 8. **[CONFIRM]** what pushback each document got (open items 1 and 3) so you can answer "who disagreed?"

---

### Q13. How do you grow other PMs, and how do you think about scope? (~170 words)
**Framework:** accomplishment arc. (A13, K20)

"At Amazon, I managed a program manager in Pricing for two years. To reach the next level, he had to run projects on his own. I coached him to run a 15-country survey with an outside vendor and more than 30 stakeholders, reviewed his analysis before it went out, and wrote his promotion document. He was promoted from L4 to L5.

At Keystone, I led three PMs on a dotted line. One struggled to balance client requests against platform work, and engineering felt stretched. I set an improvement plan, with weekly one-on-ones, and reduced oversight as they improved. Engineering met the goals with no delays.

I've also run more than 50 hiring interviews.

On scope, I'd like to be judged on what changed beyond my own product: a fraud score six teams adopted, a privacy policy about 20 teams adopted, and a business model at Keystone."

**Check:** Structure 8 · Specificity 8 · Skill demo 7. Say "a program manager," not his name. Don't call the Keystone PMs "direct reports."

---

### Q14. Tell me about a failure (~150 words)
**Framework:** STAR-L with the lesson. (A6)

"When we launched credit for small businesses to 5% of customers, credit losses came in higher than expected, and we couldn't scale to the full segment. That was on me. I'd validated that customers wanted the product, but not that the controls would deliver acceptable portfolio economics.

I worked with science to add a lower-risk group of larger businesses to the portfolio. Our simulation showed the blended portfolio cut losses 6 to 8%. We relaunched to the blended segment with positive economics, and there were no credit losses after full launch.

The lesson I still use: validate the customer opportunity and the economics separately, especially in risk products, where a good customer outcome can hide a bad portfolio."

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

## 10. Stories S1–S11 (full spoken versions)
The full spoken versions are in this section. Each story's supporting facts are in the library entry named after the arrow (`context-library/experience-library.md`; A = Amazon, K = Keystone). The "S" numbers are story labels only; the library's own "S1" is the job-search system. These versions match the library, including the graded-response wording in S1.

| Index label | What it is | Library entry |
|---|---|---|
| **S1** | Business Fraud Score strategy, Pay by Invoice | **A22** (facts: A21) |
| **S2** | BFS 2.0: the attack the score missed | **A23** |
| **S3** | 99% precision vs. customer friction | **A24** |
| **S4** | Unblocking the BFS 2.0 launch (blocklist cache) | **A25** |
| **S5** | The PRFAQ | **A26** |
| **S6** | BFS adopted by six teams | **A27** |
| **S7** | ML privacy policy across Payments | **A10** |
| **S8** | Keystone pricing | **K32** |
| **S9** | Managed service vs. SaaS | **K12** |
| **S10** | Developing PMs | **A13, K20** |
| **S11** | Failure: credit-loss miss | **A6** |
| (not indexed) | SPORT APIs · MOQ APIs · API catalog · client IT dependency | **A15 · A16 · K29 · K30** |


### S1 → A22: End-to-end fraud strategy for Pay by Invoice (the Business Fraud Score)
- **Source:** Stripe L4 story bank S1 (2026-10-25), built on A21 and the BFS PRFAQ, model doc and BFS 2.0 launch note; moved into this library 2026-11-09. Ownership words: "I led the strategy," "data science built the model." Never "I built the model."
**Use for:** biggest impact, a strategy you set, 0→1, influence across teams. Covers all of Pay by Invoice (PBI), not one customer segment. Metrics come only from your BFS PRFAQ, model doc and BFS 2.0 launch note.

**STAR-L version (~200 words, final 2026-10-25; on the OS STAR-L framework):**
- **Situation:** "Amazon Business used fraud controls that were built for consumers and ran after checkout. They didn't fit businesses, where one account can have thousands of users placing large orders, which looked suspicious. And fraud rings used bots to register thousands of accounts that couldn't be caught until checkout."
- **Stakes:** "As a result, fraud exposure across Amazon Business grew 600% to about $200 million, while up to 15% of orders on some payment methods were held for manual review."
- **Actions:** "I led the fraud strategy and made four decisions:
  1. I introduced fraud detection across the customer journey, from registration to before the first purchase.
  2. I set the score for 99% precision, so we blocked only when it was very sure, and gave everyone else a lighter response, like identity verification, with checkout controls for the rest.
  3. I built one shared score that other teams could use, like credit lines and the small-business credit card, and let each team choose its response: block, verify or filter. Six teams adopted it.
  4. I kept monitoring for new fraud patterns, and added behavioral and IP signals when fraudsters started acting like bots."
- **Result:** "We avoided about $18 million in fraud losses, caught fraudsters 10 days earlier, and lifted upfront detection about 15%."
- **Learning:** "Fraud prevention isn't one gate; it's the right check at each step."

**30-second version (recruiter screen):** "I owned the fraud strategy for Amazon Business's Pay by Invoice credit. I created a fraud score that assesses every business at sign-up, before it gets a credit line, tuned for precision and layered with checkout controls. It avoided about $18 million in fraud losses, its behavioral version caught fraudsters about 10 days earlier, and six teams adopted the score."

**L4 signals:** a problem nobody owned; strategy beyond your own product; adopted by six teams you didn't manage; a platform that outlasted you.
**Likely follow-ups:**
- *"Why not just tighten checkout controls?"* "Checkout is too late and too blunt: by then good customers absorb the friction. Assessing at registration lets you be precise early and lighter later."
- *"How did you get six teams to adopt it?"* Use A27.
- *"What did data science do versus you?"* "They built and validated the models. I set the strategy, the granularity, the precision-first goal, the launch gates and the integrations."
- *"What would you do differently?"* "Push real-time access earlier; batch scoring meant some teams waited a day for a score." (Only say this if it's true for you. If not, choose your own.)

- **Graded response (added 2026-11-09):** the wording above uses only documented facts: block only at high precision; identity verification as the challenge (A21 strategy); each of the six teams chose its own action (A27). [CONFIRM: were there defined score bands, e.g. high → block, medium → verify, low → allow, or did each team set its own thresholds?] Same principle later with agents: how much to automate depends on risk and reversibility (K3). Don't call this "tiered autonomy"; that term is the Keystone agent design.

### S2 → A23: Finding the attack the score missed: BFS 2.0
- **Source:** Stripe L4 story bank S2 (2026-10-25), built on A21 and the BFS PRFAQ, model doc and BFS 2.0 launch note; moved into this library 2026-11-09. Ownership words: "I led the strategy," "data science built the model." Never "I built the model."
**Use for:** investigating a new fraud or abuse pattern , data-driven decisions, customer insight.

**Spoken version (~200 words):**
"The score was catching fraud at sign-up well, but I wanted to know what it was missing. I led a deep dive into our worldwide business-customer data and found a pattern: fraudsters who passed the registration score but behaved unlike any real business before their first order. They moved through sign-up and browsing in repetitive, machine-like ways that real people don't.

That told me the gap wasn't the model's accuracy; it was the signals. A registration snapshot can't see behavior. So I launched BFS 2.0: a behavioral model that keeps assessing each new customer from registration until their first transaction, using non-transaction behavior like browsing and account settings. I partnered with the buyer-risk team to reuse insights from their gestural-data model, and added IP intelligence from internal and external sources, with a blocklist that stops registrations and orders from suspicious IPs.

It caught fraudsters about 10 days earlier on average than our buyer-risk systems, lifted upfront detection about 15%, and flagged about $2.7 million in fraudulent credit lines. Next, I set up a false-positive program with a target below half a percent, so good customers didn't pay for it."

**L4 signals:** you found the problem yourself; a durable defense (a new model and a blocklist), not a one-off rule; partnership with another team's science.
**Likely follow-ups:**
- *"How did you know they were fraudsters, not unusual customers?"* "Confirmed fraud outcomes downstream. Labels arrive late, so we made explicit assumptions about when fraud happened, and we watched false positives separately."
- *"How long do you keep assessing someone who never orders?"* "That was a trade-off I made: detection improves with a longer window, but inference cost grows for customers who may never transact. We compared performance across different time-to-first-order windows and picked the one that balanced detection against inference cost."
- *"Would you do it as a rule instead?"* "A rule would have caught one ring and broken when they adapted. Behavior generalizes."
- Don't name exact features or blocklist mechanics; say "behavioral and IP signals."

### S3 → A24: Detection vs. customer friction
- **Source:** Stripe L4 story bank S3 (2026-10-25), built on A21 and the BFS PRFAQ, model doc and BFS 2.0 launch note; moved into this library 2026-11-09. Ownership words: "I led the strategy," "data science built the model." Never "I built the model."
**Use for:** hard trade-offs, ML product decisions, how you measure success. **This is the core trade-off in fraud and risk products.**

**Spoken version (~190 words):**
"In fraud, the expensive mistake isn't always missing fraud; it's blocking a good customer. For the Business Fraud Score, a false positive meant suspending a legitimate business's credit line, which could run from thousands to hundreds of thousands of dollars.

So I made precision the priority over recall, on purpose. The score ran at registration, and the buyer-risk team's controls still checked every order after checkout, so the score didn't need to catch everything; it needed to be right when it acted. Before launch, I required a three-week shadow run on live traffic and a back-test, because a model can look great offline and drift on real data. I set the launch threshold where the score was right about 99% of the time, accepting that it would catch only about a quarter of fraud on its own. On live shadow data, it made essentially no false suspensions at that threshold.

Then I kept measuring the friction side: a false-positive program targeting under half a percent. The principle I took away: decide which mistake is expensive, and design layers so no single control has to be perfect."

**L4 signals:** a policy-level decision for the product; layered defenses across teams; a measurement system for friction.
**Likely follow-ups:**
- *"Why 25% recall? Isn't that low?"* "On its own, yes. But it was one layer. Checkout controls and a blocklist rule caught the rest, and the score made those layers more precise."
- *"How would you set this threshold for a different business?"* "Per segment. An enterprise merchant and a new small business tolerate friction very differently, so I'd let the threshold vary with the cost of a false positive."

### S4 → A25: Unblocking the BFS 2.0 launch
- **Source:** Stripe L4 story bank S4 (2026-10-25), built on A21 and the BFS PRFAQ, model doc and BFS 2.0 launch note; moved into this library 2026-11-09. Ownership words: "I led the strategy," "data science built the model." Never "I built the model."
**Use for:** scoping ruthlessly, speed vs. quality, working with engineers, technical fluency. 

**Spoken version (~160 words):**
"Midway through BFS 2.0, we hit a dependency. The IP blocklist was supposed to live in our ML platform's feature store, and that work was estimated at 22 weeks, which would have pushed the launch out a full quarter. Fraud rings don't wait a quarter.

Engineering proposed hosting the blocklist in a refreshable in-memory cache instead: about a week of work. I made the call to do it, with one condition: the design had to guarantee the cache always loaded the latest version of the list, with no risk of serving corrupted or stale data. That was the real risk, not the storage choice. Once that was designed in, we shipped on schedule, and the blocklist and IP rules ended up contributing about 10% of the new upfront detection."

**L4 signals:** a launch-level trade-off; you named the actual risk; the long-term option was preserved.
**Likely follow-ups:**
- *"What did you give up?"* [Your answer. One likely candidate: reuse, since the feature store would have made the list available to other models. Say it only if that was the real trade-off.]

### S5 → A26: The PRFAQ that started it (writing)
- **Source:** Stripe L4 story bank S5 (2026-10-25), built on A21 and the BFS PRFAQ, model doc and BFS 2.0 launch note; moved into this library 2026-11-09. Ownership words: "I led the strategy," "data science built the model." Never "I built the model."
**Use for:** writing culture, aligning stakeholders with a document, communicating complex problems.

**Spoken version (~150 words):**
"I wrote the Business Fraud Score PRFAQ instead of a traditional requirements document, because the hard part wasn't the requirements; it was getting engineering, buyer risk and leadership to agree on a different strategy. It opened with the customer outcome: a single score, at sign-up, that any team could use. The FAQ took on the hard questions directly: how big the problem was, why business fraud is harder than consumer fraud, the trade-off between fraud control and friction, how the score fits with buyer risk's existing models, and a four-phase roadmap with a long-term vision beyond Amazon Business. Credit Systems engineering used it to start storyboarding and technical design, and its phases became the roadmap through BFS 2.0. My rule for writing: goal and customer first, then the decision and its trade-off, then the evidence."

**L4 signals:** a document that changed direction across teams; it became the roadmap.
**Likely follow-ups:** *"What pushback did you get?"* [Your answer: what engineering or buyer risk challenged, and what you changed.]

### S6 → A27: A platform other teams built on: BFS adoption
- **Source:** Stripe L4 story bank S6 (2026-10-25), built on A21 and the BFS PRFAQ, model doc and BFS 2.0 launch note; moved into this library 2026-11-09. Ownership words: "I led the strategy," "data science built the model." Never "I built the model."
**Use for:** integrations, platform adoption, partners, technical dependencies. 

**Spoken version (~180 words):**
"I designed the Business Fraud Score as a service, not a feature, because the value grew with every team that used it. The question for each team was: what decision does this score make better for you?

For buyer risk, it became an input to their fraud models: the score could flag every account on a risky domain, even ones that hadn't ordered yet, which their transaction-level models couldn't see. For credit, it removed credit lines from fraudulent customers. Sign-up verification used it to decide who to block or challenge. Business Prime used it to filter fraud out of their sign-up metrics and decide who sees a free trial. Payment verification used it to decide when to require micro-deposits, and the small-business card team used it to trigger identity checks.

Six teams adopted it. Each integration had its own dependency to manage: data engineering for offline feeds, our ML platform for serving, the clickstream team for behavioral data, and Legal for what we could act on."

**L4 signals:** cross-team adoption you drove; integration design per partner; managing dependencies.
**Likely follow-ups:**
- *"Which integration was hardest, and why?"* [Your answer.]
- *"How did you measure integration success?"* "Did the score change the partner's decision, and did their fraud or friction metric move? Adoption counted only if it changed a decision." Add a real example if you have one.

### S7 → A10: Org-wide policy without authority: ML privacy across Amazon Payments
- **Spoken version (Stripe L4 story bank S7, 2026-10-25):**
**Use for:** influence without authority, org-wide change, compliance. (A10)

### S8 → K32: Pricing that customers renewed into (Keystone)
- **Spoken version (recruiter-screen prep, 2026-10-24; draft, refine with the user):** "Yes. At Keystone.ai, the goal was to turn a consulting business into a product business. One flagship engagement brought in $2M a year but needed about seven people on site. With the CEO, Sales and Finance, I split the offer into modules on annual subscriptions: forecasting at about $1.5M a year, agentic capabilities on top at about $500K. We rejected usage-based pricing, because forecast counts don't track value, and percentage-of-savings, because savings depend on the client's execution and invite attribution fights. All five clients renewed through the move to product, and two added agents, about $500K more a year each." L4 signal: a company-level business model, not a pricing tweak.

### S9 → K12: Disagreeing with leadership and investors: managed service vs. SaaS
- **Spoken version (recruiter-screen prep Q9, 2026-10-24):** "Keystone's leadership and investors wanted pure multi-tenant SaaS for the margins. Our enterprise clients had hard data-residency and control requirements, and I didn't think SaaS would close them. I recommended deploying as a managed service inside each client's cloud. The objection was that it would slide us back into consulting, so I showed how we'd productize deployment with infrastructure as code, reusable components and an upgrade process, and framed it as sequencing: prove repeatable deployment first, then build the platform. It cost a month of extra deployment time, and I said so up front. It won two more clients that pure SaaS couldn't have served." L4 signal: a company decision against leadership and investors, with its cost stated up front.

### S10 → A13 / K20: Developing PMs
- **Spoken version ("How do you develop other PMs?", recruiter-screen prep, 2026-10-24):** "By handing over real ownership in stages and staying close enough to coach. At Amazon I managed a Program Manager whose gap to L5 was independence. I moved ownership to him step by step: our external survey vendor, then 30+ stakeholders across 15+ countries, reviewing his work less as his judgment proved out. I wrote his promotion document, and he was promoted to L5. At Keystone.ai I led three PMs on a dotted line. One kept saying yes to client requests that displaced platform work; I gave specific feedback, set a decision rule for requests, and reviewed their calls weekly until their team was back on track. I've also run 50+ hiring interviews across Keystone and Amazon." Be precise if probed: one direct report, a Program Manager; the Keystone PMs were dotted-line. L4 signal: grows other PMs. Same answer covers K20.

### S11 → A6: Failure: the credit-loss miss
- **Spoken version (~150 words; Stripe L4 story bank S11, 2026-10-25):**
"When we launched credit for small businesses to 5% of customers, credit losses came in higher than expected, and we couldn't scale to the full segment. That was on me: I'd validated that customers wanted the product, but not that the controls would deliver acceptable portfolio economics. I worked with science to add a lower-risk group of larger businesses to the portfolio; our simulation showed the blended portfolio cut losses 6 to 8%. We relaunched to the blended segment with positive economics, and there were no credit losses after full launch. The lesson I still use: validate the customer opportunity and the economics separately, especially in risk products, where a good customer outcome can hide a bad portfolio."
**L4 signals:** owning a portfolio-level miss; a fix that changed the strategy, not just the threshold.

---

## 11. Questions to ask the HM (pick 4)
You were told to bring questions. Order by what you most need to know.
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
| Agents | **70%** recommendation acceptance at launch · **30% → 80%** action acceptance (name it) · run cost **~30%** lower | ">80%" |

---

## 13. Study (summary; exact content in the study guide)
The exact content to learn, with self-tests, a hands-on friction-log exercise and a schedule, is in `interview-prep/2026-11-09-stripe-hm-study-guide.md`. In short:

1. **Payments basics (1.5 hours):** a card payment end to end; authorization vs. settlement; issuer, acquirer, network; chargebacks and disputes; 3D Secure; authorization rate. You'll be asked even in a fraud role.
2. **Radar as a product (1 hour):** rules, risk scores, review queue, dashboard, API; what Sessions 2026 added (account-level and multi-account abuse, free-trial abuse, bot abuse in preview, Signals); packaging and pricing changes. Use only what's confirmed in the recruiter-screen prep doc.
3. **Developer onboarding at Stripe (45 minutes, JD2):** read Radar's docs and one integration guide, and write down three friction points. Then you can answer "how would you improve onboarding" from experience.
4. **The manager:** find their background (LinkedIn, talks, Stripe blog) and ask Piyush Rohella for what this team is worried about.

---

## 14. Open items (on hold until we align on the sections above)
1. A26 PRFAQ pushback · 2. A27 hardest of the six integrations · 3. A10 privacy policy pushback · 4. A22 "what I'd do differently" and score bands · 5. A25 what the cache gave up · 6. How the 3 SPORT partner teams came to integrate, and how you chose partners · 7. Keystone agent guardrail scope · 8. Any design partnership · 9. Fix your Drive doc: "$8 billion credit business," "Caught $18M," and the stale "3 months deployment."

---

## 15. Practice plan
Adjust to the interview date. If you have 3 days or fewer, do 1, 2, 4 and 5.
1. Fix the facts in section 14 and the numbers card; say the card aloud.
2. Record S1, S2, S3 and S6 (A22, A23, A24, A27), one at a time, under 90 seconds each. Check each against the Three Laws.
3. One product-sense case, timed (users-first opening), and one metrics case.
4. Payments and Radar study (section 13).
5. Full mock hiring manager interview: `/mock-interview` with the manager's likely questions and the Stripe question bank; rerun your weakest answers.
6. Night before: numbers card, three stories per role, your questions for the manager. Skip new material.
