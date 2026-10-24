# Recruiter Screen Question Bank

Built: 2026-10-24, from your Otter recordings. Answers are tuned for the Stripe Radar screen (Mon 2026-10-26) and reusable for other screens; swap the company-specific lines.

**Calls read in full (6):**
| Date | Company | With | Type |
|---|---|---|---|
| 2026-09-28 | LawnStarter (Principal PM, service experience) | Kate Acuzar, recruiter | Recruiter screen, 52 min |
| 2026-09-28 | Ascerta, via Prime Team Partners | Darren Hogben, agency recruiter | Agency screen, 27 min (only your side was recorded; questions inferred from your answers) |
| 2026-10-05 | Count (product leadership) | Derek Harn, COO/co-founder | Founder screen, 34 min |
| 2026-10-08 | R37 AI Lab (Principal TPM) | Amber O'Brien, sourcer | Recruiter screen, 21 min |
| 2026-10-12 | Count | Chris Smith, co-founder | Second screen, 32 min |
| 2026-10-13 | Keystone (AI PM, CFO team) | Rohit Chatterjee | Intro call, 22 min |

The Fuel Talent call (Albert Squiers, 2026-09-28) recorded only a "call cannot be completed" message. No other recruiter calls are in Otter before August 2026.

Scores come from `interview-history.md` where they exist. Every answer below is under 200 words, opens with the point, and uses only numbers from the canonical metrics table.

---

## Fix these first: things you said on calls that don't match your record

Recruiters write notes, and Stripe verifies employment. These came up in the transcripts:

| What you said | Call | What to say instead |
|---|---|---|
| "Currently, I'm a principal technical product manager at Keystone" / "I'm working there" | LawnStarter, Ascerta, Count ×2, R37 (all after March 2026) | "Most recently at Keystone.ai." If asked: "I wrapped up there in March." |
| Credit product "scaled to millions of users" | R37 | **50,000+ business customers** |
| "More than 80% of our recommendations were adopted" | Ascerta | **70%** recommendation acceptance at launch |
| Deployment "six months to literally two months" | Ascerta | **6 months to 4 months** (Deep Enterprise); data platform 3 months to 3 weeks |
| "Seven years at Amazon" | LawnStarter | **About eight years** (2016–2024) |
| "I joined Amazon as a program manager" | Count (Derek) | Your library now says Product Manager in Pricing from 2016 (updated 2026-10-24). Pick one and use it everywhere; a background check will show what Amazon's HR record says |
| Named the client (Hershey's) | Keystone intro | Fine inside Keystone; never externally. Say "a flagship Fortune 500 CPG client" |
| Salary: "industry standard for this level" | LawnStarter, R37 | Ask for the level and full package first, then give a range (Q30) |

---

## A. Opening and fit

### Q1. "Tell me about yourself" / "Where are you in your career, and what are you looking for?"
**Asked at:** LawnStarter, Count ×2, R37, Ascerta (every screen). **Last scores:** 5, 5.5, 6.5, 7.
**What went wrong:** you opened with "let me make sure I got the question right," said "currently at Keystone," and ran 3–4 minutes with a three-part wish list.
**Answer (~150 words, ~70 seconds):**
"I'm a Principal Technical PM with 11+ years building ML products that businesses pay for and depend on.

At Amazon, I spent two years in B2B Payments and Lending. I scaled an ML financing product to 50,000+ business customers and $71M in incremental revenue, and I owned how it used Amazon's fraud model: the threshold, the blocking rules and the checkout controls. That cut the fraud loss rate 15% while keeping friction low for legitimate businesses. Before that, I built seller products and exposed them through APIs that partner teams built into their own tools.

Most recently at Keystone.ai, I led a 0-to-1 agentic AI platform to $7.5M ARR. I set the pricing with Sales and the CEO; all five of our enterprise clients renewed, and two upgraded.

What I want next is that same mix at much larger scale: ML decisions, delivered through APIs, sold to businesses. That's why Radar caught my attention."

### Q2. "What made you interested in this role?" / "Why us?"
**Asked at:** LawnStarter, Ascerta, R37, Count. **Pattern:** your answers were sincere but generic ("AI is core customer value," "high ownership culture").
**Answer for Stripe (~110 words):**
"Three reasons. First, Stripe's network: one business can't spot a new attack early, but Stripe sees payments across millions of businesses, and Radar blocked $110 billion in fraud last year. Second, where Radar is going: past checkout into accounts, free trials and AI agents, plus scoring payments processed elsewhere and new pricing tiers in January. Third, I've done both halves: I set a fraud threshold on a real credit product where blocking a good customer was the expensive mistake, and I've shipped APIs partner teams integrated and priced a B2B ML product."
**Rule:** name two things only this company has, then one proof from your work.

### Q3. "Did you have a chance to check us out? What do you know about us?"
**Asked at:** R37.
**Answer for Stripe (~60 words):** "Yes. Radar had its biggest upgrade at Sessions this year: account fraud and token abuse, coverage for payments on and off Stripe, and dispute help. Free trial abuse prevention is live, bot abuse prevention is in preview, and there's new four-tier pricing from January. I'm curious which of those each of these two roles owns."
End with a question; it turns the check into a conversation.

---

## B. Strengths and weaknesses

### Q4. "What product superpowers would you bring? Give me a recent example."
**Asked at:** LawnStarter. **Last score:** 6.
**What went wrong:** three generic traits (ownership, bias for action, customer problem) and a long example.
**Answer (~140 words):** "Two. First, I find the problem customers aren't asking about. At Keystone.ai our forecasts were 20% more accurate than the incumbent, but planners still spent four hours a day reviewing and overriding them. Nobody filed a ticket; I found it by watching their workflow. I prototyped an agent that flags forecast problems, finds the cause and recommends the fix, then shipped it through evaluation gates. Review time went from four hours a day to four hours a week, and 70% of recommendations were accepted at launch.

Second, I turn ML into something a business will pay for. At Keystone I priced that work in modules: clients started on forecasting, all five renewed, and two added agents for about $500K more a year each."

### Q5. "What's an area you're still working to improve?"
**Asked at:** LawnStarter. **Last score:** 4 (your lowest). **What went wrong:** you improvised ("I still depend on engineers to deploy my prototypes"), which sounds like a gap in the job, not a growth area.
**Answer (~110 words, from qa-master):** "Calibrating how deep I go into technical detail. When I launched Keystone's data platform, I wrote some of the queries myself, and it slowed the team down. I shifted to owning the guardrails: data quality, data contracts and adoption, and let engineering own the implementation. Now I go deep only where it changes the product decision. I give engineering clarity on the data model, the key entities and the customer requirements, and I leave the how to them. It's made me faster, and the team owns more."
**Delivery:** say it as written. Don't add a second weakness.

---

## C. Your experience

### Q6. "Walk me through an AI product you shipped to real users. How did you decide it was good enough to ship? What numbers did it move?"
**Asked at:** LawnStarter, Ascerta. **Last score:** 7.
**Answer (~170 words):** "The goal was to cut the four hours a day that a Fortune 500 client's planners spent reviewing forecasts. I built a multi-agent system: a rules-based step flags forecast exceptions, an LLM agent investigates in a fixed order (data, then features, then model, then outside signals) and recommends a fix, and planners approve or reject it in the app.

'Good enough to ship' was defined up front: we ran it in shadow mode and set launch gates of over 70% exception recall, over 70% recommendation acceptance on expert-reviewed cases, and no automatic changes to forecasts. The evaluation mixed rules-based checks, LLM-as-judge for grounding and expert scoring.

In production we tracked acceptance, rejection reasons, cost per accepted recommendation, latency and traces. Results: review time from four hours a day to four hours a week, 70% acceptance at launch, and the client's overstock cost from $5M to $2M."

### Q7. "How did you know when quality slipped?"
**Asked at:** LawnStarter. **Last score:** 8 (your best answer). Keep it.
**Answer (~110 words):** "Production monitoring. At one retailer, recommendation acceptance fell from 70% to 50% over four weekly cycles. The traces showed the retailer had moved a warehouse, and the agent didn't have location data, so it made a confident recommendation instead of escalating. We added the location dataset, added a guardrail to act only with sufficient information, and added regression tests for that failure. Acceptance came back to 70%. The lesson I took: agents degrade on cases you haven't seen, so monitoring and regression testing are part of the product, not an afterthought."

### Q8. "Tell me about an AI decision where the right answer wasn't obvious and reasonable people disagreed."
**Asked at:** LawnStarter. **Last score:** 6. **What went wrong:** the cost story was right but took four minutes to reach the trade-off.
**Answer (~140 words):** "In our pilot, the agent cost more per accepted recommendation than doing the work by hand, and the client started asking whether it was worth it. Engineering and some of leadership wanted to keep the strongest model everywhere, because a cheaper one might give worse recommendations. I tested it instead of debating it: I compared models on cost, latency, quality and acceptance, then routed simple, low-impact cases to a cheaper model and kept the strong model for ambiguous, high-impact ones. In a small pilot, cost dropped about 30%, latency improved, and acceptance didn't change. What settled it was the full cost per decision, AI plus human time, not model quality alone."

### Q9. "Tell me about a time you changed a leader's mind with evidence."
**Asked at:** LawnStarter. **Last score:** 6. **What went wrong:** the data-platform story lacked a clear "they believed X, I showed Y."
**Answer (~140 words, K12):** "Keystone's leadership and investors wanted pure multi-tenant SaaS for the margins. Our enterprise clients had hard data-residency and control requirements, and I didn't think SaaS would close them. I recommended deploying as a managed service inside each client's cloud. The objection was that it would slide us back into consulting, so I showed how we'd productize deployment with infrastructure as code, reusable components and an upgrade process, and framed it as sequencing: prove repeatable deployment first, then build the platform. It cost a month of extra deployment time, and I said so up front. It won two more clients that pure SaaS couldn't have served."

### Q10. "What's the hardest customer problem you've worked on?"
**Asked at:** Ascerta. **Last score:** 7.
**Answer (~150 words, K1):** "Moving Keystone from consulting to product. Every client needed about seven people on site for six months, and revenue grew only as fast as headcount. Clients were starting to ask for something they could demo, and we had nothing.

I noticed we were rebuilding the same data pipelines, models and dashboards for every client, so I made the case to the CEO and CTO for a product. I picked forecasting as the first product, because it sits at the center of supply-chain decisions and its impact is measurable. We standardized the pipelines, models, monitoring and app, and kept data and deployment client-specific.

Deployment went from six months to four, we reached $7.5M ARR across five Fortune 500 clients, all of which renewed, and support dropped from about seven people per client to about one."

### Q11. "How did you drive adoption?" (often a follow-up on explainability)
**Asked at:** Ascerta, Count (Chris). **Last scores:** 7, 8.
**Answer (~130 words, K10):** "After launch, only 50% of forecasts were used. I combined the adoption data with planner interviews and watching them work, and found three blockers: they couldn't explain the forecast to their leadership, reviewing it took too much manual effort, and accuracy had gaps. I sequenced by impact and effort. Explainability first: we showed which drivers, like a promotion, moved each forecast, which took adoption from 50% to 60%. Then the agent for the manual review, which took it to about 70%. Accuracy work ran in parallel. That ordering mattered: the cheapest fix was the one blocking trust."

### Q12. "How did you work with customers and stakeholders?"
**Asked at:** Ascerta. **Last score:** 7.
**Answer (~100 words):** "I was the single point of contact in early deployments, on purpose, so I'd hear the problems first. Weekly sessions with the demand planners who used the product: what we'd changed, what we'd learned, their feedback. Monthly reviews with the executive sponsor, the chief supply chain officer: adoption, blockers, and the support I needed from him to get his team to switch. Bi-weekly results reviews with leadership on both sides. That cadence is a big part of why every client renewed."

### Q13. "Have you worked on products at scale?" (R37 framed it as 0-to-1 *and* scale)
**Asked at:** R37.
**Answer (~100 words):** "Both. At Amazon, I took an ML financing product from a 5% controlled launch to 50,000+ business customers and $71M in incremental revenue, and I owned the MLOps platform behind 100+ production models. Seller-facing products I built saved $100M+ across thousands of sellers. At Keystone.ai, I did the 0-to-1: a new platform that reached $7.5M ARR. Scale taught me to launch small with controls and expand on evidence; the startup taught me to pick the smallest thing worth shipping."
Never say "millions of users."

### Q14. "Tell me about influencing executives."
**Asked at:** R37. **What went wrong:** long and abstract ("I have that muscle of influence").
**Answer (~120 words):** "The biggest was getting Keystone's CEO and CTO to move a 20-year consulting business to a product. I didn't argue it in principle. I showed them that we were rebuilding the same pipelines, models and dashboards for every client, that each deployment took about seven people and six months, and that clients were asking for a product to demo. I proposed starting with one product, forecasting, with a clear line between what we'd standardize and what would stay client-specific. That made it a bounded bet rather than a company overhaul. At Amazon, the equivalent was monthly reviews with VP leadership on a program tied to a company-level goal."

---

## D. Working style and leadership

### Q15. "Do you have experience in a fast-moving startup? Big companies can be slow."
**Asked at:** Count (Derek). **Last score:** 4.5. **What went wrong:** you described Keystone's size instead of telling a story about speed.
**Answer (~130 words, K16):** "Yes. At Keystone.ai, the CEO needed an event-stream capability for a high-stakes prospect demo, and the full build was three months. I met him one-on-one to find the real need: event-based features and a credible story about where the product was going. I split the work: event-stream features from data we already had, now, and live ingestion later. I partnered with the VP of Engineering to ring-fence a small team. We shipped in two to three weeks, the demo went out on time, the prospect became a paying customer, and the work became the foundation of our data platform. Speed for me means finding the smallest outcome worth shipping now, in a way that still compounds."

### Q16. "A customer request comes in that conflicts with the roadmap. How do you decide?"
**Asked at:** Count (Derek and Chris). **Last scores:** 7, 5.5.
**Answer (~110 words):** "I ask whether it's a one-off or a pattern. If several customers have the same problem, it's roadmap input; if it's one customer, I look for the smallest slice that serves them without derailing the team. The event-stream demo is an example: rather than pause the platform or lose the prospect, we built the slice of the platform the demo needed, which also moved the platform forward. When it truly conflicts, I make the trade-off explicit with the requester and leadership: what moves, what slips, and why."

### Q17. "What's your leadership style? How do you align a team?"
**Asked at:** Count (Derek). **Last score:** 4.5. **What went wrong:** SMART goals, standups and 1:1s; mechanics with no story.
**Answer (~120 words, qa-master + K20):** "Clear direction, real ownership, and coaching that fits the person. During Keystone's move to product, the CPO and I split the product work into three lanes, customer data and deployment, forecasting models, and the planner app, each with an owner and clear decision rights, and we ran weekly cross-team reviews. One of the PMs I led on a dotted line was struggling to balance client requests against platform work, and their team fell behind. I gave specific feedback, set a decision rule for incoming requests, and reviewed their calls weekly, pulling back as their judgment improved. Their team caught up, and engineering hit its goals with no delays."

### Q18. "How do you handle an underperformer? Give me an example."
**Asked at:** Count (Derek). **Last score:** 5.
**Answer (~110 words, K20):** "I make the gap specific, agree on a plan, and coach closely until it closes. At Keystone, a PM I led on a dotted line kept saying yes to client requests that displaced committed platform work, and their integration roadmap slipped. I told them exactly what I was seeing and its effect on engineering. We agreed on a rule: assess each request against priorities, then delegate, defer, adjust or escalate. We reviewed their decisions in weekly one-on-ones, and I stepped back as they improved. Their team got back on track, and engineering met its goals with no delays."
Say "dotted-line" for Keystone. Don't use the Amazon doc-review example; it's thinner.

### Q19. "How did you get into this space? Are you technical?"
**Asked at:** Count (Derek). **Last score:** 6.
**Answer (~120 words):** "I'm an engineer by degree with an MBA, and I moved into ML products at Amazon. I went deep on purpose: on the MLOps platform I worked through deployment end to end with 30+ data scientists and an engineering team, on the financing product I partnered with the data scientists on the credit model and set the fraud threshold, and I've defined REST APIs and data contracts. I write SQL for analysis, and I build hands-on: I built my own AI job-search system, and redesigning it taught me when not to use an agent. I'm fluent enough to argue a design with engineers and explain it to a customer, and I leave the implementation to engineering."

### Q20. "How do you think about priorities?"
**Asked at:** Count (Chris). **Last score:** 8. Keep the structure.
**Answer (~90 words):** "At two levels. Which customer problems to invest in, by impact and effort; then the order to ship. The adoption story is my example: three blockers, and I shipped the cheapest one that was blocking trust first, explainability, which took adoption from 50% to 60%; then the agent, to about 70%; with accuracy running in parallel."

### Q21. "How do you work with engineers? What's your process?"
**Asked at:** Count (Chris). **Last score:** 6. **What went wrong:** described sprint mechanics.
**Answer (~110 words, K13):** "I bring them the problem and the constraints early, and I treat disagreement as a business question. At Keystone I pushed for modular services instead of a monolith, because Fortune 500 clients needed to deploy only some parts and pass security review. Engineering pushed back on the timeline. I reframed it from tech debt to business risk: six weeks up front versus a rewrite later. We agreed on the interfaces early. We passed the flagship client's security review on time, and the second client onboarded with no refactor. Day to day it's the usual cadence: quarterly roadmap, two-week sprints, demos."

### Q22. "What would you do in your first 30 to 60 days?"
**Asked at:** Count (Chris). **Last score:** 4.5. **What went wrong:** generic, not tied to what Chris had just told you.
**Answer for Stripe (~120 words):** "First 30 days, learn: talk to customers and to sales, support and partner teams about where Radar integrations stall or where new attacks show up; read the support and dispute data; learn the roadmap and the January pricing change. Deliverable: a one-page 'what I heard' with the top three problems. By 60, decide: a prioritized plan for the biggest one, agreed with engineering and data science, with the metric we'll move. By 90, ship one visible win. That's how I started at Keystone: interviews and watching planners work before building, which is how we found explainability was the real blocker."
**Rule:** fill the plan with words the interviewer used earlier in the same call.

### Q23. "Requests come in from clients, partners, support, QA, sales and leadership. How would you set priorities?"
**Asked at:** Count (Chris). **Last score:** 5.5.
**Answer (~120 words):** "One intake, one set of rules. Everything comes into a single place, tagged by source, customer and problem, not by solution. I review it weekly with engineering against the goals we've agreed on: anything that blocks revenue or a committed date, anything that hits many customers, then improvements. I publish what's in, what's out and why, so sales and support can tell customers honestly. Commitments to customers go through me. At Keystone, that's how a dotted-line PM's team got back on track: a rule to assess each request against priorities, then delegate, defer, adjust or escalate."

### Q24. "Walk me through diagnosing a payment API that's failing for 5% of users."
**Asked at:** Count (Chris). **Last score:** 5. **What went wrong:** started with JSON formats; didn't segment the 5%, mitigate first, or use your payments background. **Very likely at Stripe.**
**Answer (~170 words):** "First, stop the bleeding, then find the cause. I'd confirm the scope: are these errors, like timeouts and 5xx, or declines? Declines are often working as intended. Then segment the 5%: by card network, issuer, country, payment method, API version, client SDK, merchant and time. A failure that clusters tells you where to look. Next, what changed: a deploy, a config or feature flag, a dependency like an issuer or network, or an upstream data schema. If a recent deploy lines up, roll it back or fail over; retries need idempotency keys so we don't double-charge. Then root-cause and fix. Then prevent: alerting on error rates per segment rather than overall, canary releases, and data contracts with upstream teams. At Amazon I designed the checkout eligibility call to read a precomputed assessment rather than run a model at checkout, precisely to keep that path fast and dependable."

### Q25. "How would you build an AI-native product org?"
**Asked at:** LawnStarter. **Last score:** 5. **What went wrong:** framed around cutting engineers from five to two.
**Answer (~120 words):** "I'd change what PMs and engineers spend time on, not just the headcount. PMs prototype and test with customers in days, so engineering time goes to production quality: reliability, evaluation and security. Every AI feature ships with evaluation from day one: golden datasets, launch gates, and production monitoring of the metric customers care about, like acceptance. And I'd measure cost per accepted decision, not cost per call. At Keystone, I prototyped the agent myself to prove more than 70% of recommendations would be adopted, which got leadership to move two months of roadmap to it. What most orgs get wrong is shipping AI features without a way to know when they degrade."

---

## E. Career story

### Q26. "Walk me through your last three moves. What's motivating a move now?"
**Asked at:** LawnStarter. **Last score:** 5. **What went wrong:** long, and the promotions story crowded out the reasons.
**Answer (~120 words, one sentence per move):**
- **Pricing → Supply Chain (2018):** "Promoted, and I wanted ML products with sellers as customers."
- **Supply Chain → MLOps (2020):** "I wanted to own the platform underneath ML: 30+ scientists, 100+ models."
- **MLOps → Financing & Credit (2022):** "Back to customer-facing ML, with real money at risk: lending and fraud."
- **Amazon → Keystone.ai (2024):** "Company-level scope: product strategy for a whole company moving from consulting to product."
- **Now:** "I've had the company-level scope; now I want it at much larger scale, on payments and risk, which was some of my favorite work."
**One line that ties it together:** "Each move took me closer to the ML core, then to owning product for a whole company. Now I want that scope at much larger scale."

### Q27. "Where do you see yourself in 5–10 years?"
**Asked at:** Count (Derek). **Last score:** 4.5. **What went wrong:** generic "lead a larger org."
**Answer for Stripe (~80 words):** "Owning a bigger part of how Stripe protects businesses, and growing other PMs along the way. Concretely, I'd like to have helped Radar move from protecting checkout to protecting the whole customer lifecycle, including agent-driven payments, and to be trusted with a broader area and a team. I care more about the size of the problem than the title."

### Q28. "Who did you report to in your last roles, and how would they rate you?"
**Asked at:** LawnStarter. **Last score:** 7.
**Answer (~70 words):** "At Keystone.ai, the CEO and the President. At Amazon, two L7 senior managers; one of them promoted me, and the other is now a director. I'd expect eight or nine from each. What they'd say is that I took on the ambiguous problem nobody owned and shipped it, and I'm happy to connect you." Names and contact details: see `qa-master.md` → References. Give names only when asked.

---

## F. Logistics

### Q29. "Do you need sponsorship now or in the future?" / "Are you authorized to work in the US?"
**Asked at:** LawnStarter, R37, Keystone, Ascerta. **Last score:** 10.
**Answer:** "No. I'm a Green Card holder."

### Q30. "What are your salary expectations?"
**Asked at:** LawnStarter, R37, Ascerta. **Last score:** 5. **What went wrong:** "industry standard," which gives them nothing and gives up your anchor.
**Answer for Stripe:**
1. "Could you share which level each role is scoped at, and the full package for that level: base, bonus and equity?"
2. If pressed: "For senior PM scope at Stripe, I'm targeting total compensation in the mid-to-high $500s, and I'm flexible on the mix."
3. Never share current pay: "Washington postings include a range, so could you share what's budgeted for this level?"
**For other companies:** "$550–650K total compensation," adjusted to their band (qa-master). Startups: ask for cash and equity ranges first.

### Q31. "Where are you based? Are you OK with the office expectations?"
**Asked at:** R37, Keystone, Count, Ascerta.
**Answer for Stripe:** "Seattle area, in Redmond. Stripe's Seattle office works, and 50% in the office is fine."
Not open to relocating; fully remote also works for other companies.

### Q32. "Where are you in your search? Interviewing elsewhere?"
**Asked at:** Ascerta.
**Answer:** "Yes, a few conversations in enterprise AI. This one stands out because of the fraud and AI-agent overlap. What's your timeline?"
If you're at a late stage somewhere, say so; it can speed things up.

### Q33. "What's your timeline / when could you start?"
Not asked yet; common. **Answer:** "I'm available to start right away." (Same as qa-master.)

---

## G. Your questions back (you asked these on every call; keep the best)

| Question | Asked at | Keep? |
|---|---|---|
| "What's the ideal person you're looking for?" | LawnStarter, Ascerta, Count | Yes, but sharpen: "What would make someone great in the first six months?" |
| "What's your process?" | R37 | Yes: "What's the loop, and is there a written exercise?" |
| "Where is the company in product-market fit and revenue?" | Count | Yes, at startups. At Stripe: "Which of the two teams is earlier-stage?" |
| "What's the biggest product challenge for this person?" | Count | Yes, the best question you asked |
| "Is the role new? Are you interviewing many candidates?" | R37, Keystone | Optional; ask about level instead at Stripe |

For Stripe, lead with: (1) level for each role, (2) the loop and written exercise, (3) the hiring managers' biggest gaps.

---

## Practice order before Monday (out loud, timed)
1. **Q1 Tell me about yourself:** under 75 seconds
2. **Q5 Weakness:** your lowest score; say it as written
3. **Q30 Comp:** the three steps, no "industry standard"
4. **Q26 Moves:** one sentence each
5. **Q24 Payment API:** likely later in Stripe's loop
6. **Q2 Why Stripe** and **Q27 Five years** (the Stripe versions)
