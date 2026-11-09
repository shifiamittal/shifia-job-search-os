# Stripe Radar: Hiring Manager Answers (draft v1, for us to refine)

> **Note (2026-11-09):** these answers are now inline in `2026-11-09-stripe-radar-hiring-manager-prep.md` (section 9). That is the working copy; refine the answers there. This file is kept for reference.

Written: 2026-11-09 · For the 45-minute hiring manager call (one manager, both roles) · Plan: `2026-11-09-stripe-radar-hiring-manager-prep.md`
Rules applied (`interview-answer-style-guide.md`): your voice, short spoken sentences, point first, under 200 words, one message per story, canonical numbers only, ownership words ("I set the strategy," "data science built the model"), "launched" only for what shipped.
Tags: **[CONFIRM]** = a fact only you can confirm · **[YOUR WORDS]** = a personal line I've guessed at; replace it with yours · Three Laws self-check at the end of each answer (Structure / Specificity / Skill demonstration, my own estimate before you've practiced them aloud).

Five answers already exist in other files and scored well; reuse them unchanged: *Why are you looking* (7–8), *What's your leadership style*, and the comp answers in the recruiter-screen prep.

---

## Q1. Tell me about yourself (~190 words)
**Framework:** Addressing-Weaknesses: Present → Past (selective) → weakness head-on → Future. Weaknesses covered: payments-fraud breadth, supply chain as most recent work.

"I'm a principal product manager with eleven years of building ML products where a wrong decision costs real money.

Most recently at Keystone.ai, I set product direction with the CEO and CTO for an agentic AI platform and for the company's move from consulting to a product business. It reached $7.5 million in ARR with five Fortune 500 clients, and all five renewed. I also set the pricing with Sales and Finance.

Before that, I spent eight years at Amazon, starting in Pricing and growing to senior technical PM. The work closest to Radar was in B2B payments and lending. I took a credit product from zero to 50,000 business customers and $71 million in revenue. I also led the fraud strategy for Pay by Invoice: a fraud score that checks every business at sign-up. Six teams adopted it, and it avoided about $18 million in fraud losses.

My fraud work was at the account level, fake businesses and bot sign-ups, not card payments. That's the part of Radar that's growing. **[Say this line only after you've done the Radar study.]**

That's why Radar. I want to solve this at Stripe's scale."

**Check:** Structure 8 · Specificity 8 · Skill demonstration 7. Every number is canonical. Don't add "led the CEO." Practice to land under 90 seconds.

---

## Q2. Why Stripe, and why Radar? (~160 words)
**Framework:** Why-here: mission and personal connection → role fit → one culture fact.

"Stripe's mission is to grow the GDP of the internet, and fraud is one of the biggest things holding businesses back from selling online. I've seen that up close. At Amazon, fraud rings used bots to register thousands of business accounts, and good customers got held up at checkout. **[YOUR WORDS: one sentence on why that problem matters to you.]**

What excites me about Radar is that it sees patterns across millions of businesses, so it can spot a new attack before any single merchant would. Stripe's recent work on account-level abuse, like multi-account and free-trial abuse, is the problem I worked on: telling a real new customer from a fraudster before the first transaction.

And I'm drawn to how Stripe writes. At Amazon, I got a new fraud strategy approved with a PR/FAQ, because the best ideas get clear when you have to write them down."

**Check:** Structure 8 · Specificity 7 · Skill demo 6. Use only Radar facts you've confirmed (study guide); say "Stripe says" for Stripe-reported figures. If the manager asks "what have you used of Radar?", you need a real answer: do the hands-on exercise first.

---

## Q3. Walk me through your biggest fraud project end to end (~200 words)
**Framework:** STAR-L / accomplishment arc. **Lead story for JD1.** (A22)

"**Situation.** Amazon Business used fraud controls built for consumers, and they ran after checkout. They didn't fit businesses, where one account can have thousands of users placing large orders that look suspicious. And fraud rings used bots to register thousands of accounts that nobody could catch until checkout.

**Stakes.** Fraud exposure across Amazon Business grew 600%, to about $200 million, while up to 15% of orders on some payment methods were held for manual review.

**Decisions.** I led the fraud strategy and made four calls. One, check for fraud across the customer journey, from registration to the first purchase. Two, block only when the score was very sure, about 99% precision, and give everyone else a lighter response, like identity verification. Three, build one shared score and let each team choose its response: block, verify or filter. Six teams did. Four, keep watching for new patterns, and add behavioral and IP signals when fraudsters started acting like bots.

**Result.** About $18 million in fraud losses avoided, fraudsters caught about 10 days earlier, and upfront detection up about 15%.

**Learning.** Fraud prevention isn't one gate. It's the right check at each step."

**Check:** Structure 9 · Specificity 8 · Skill demo 9. Say "avoided," not "caught." **[CONFIRM]** whether BFS had defined score bands (high → block, medium → verify, low → allow); the wording above uses only documented facts. Optional bridge, one sentence: "I used the same principle later with agents: how much to automate depends on risk and reversibility." **Follow-ups:** "Why not tighten checkout?" (too late and too blunt); "What did data science do?" (built and validated the models; I set strategy, granularity, goal, launch gates and integrations); "What would you do differently?" **[YOUR ANSWER; open item 4].**

---

## Q4. Tell me about a new fraud or abuse pattern you found (~190 words)
**Framework:** accomplishment arc; investigation → product. **JD1's core question.** (A23)

"The score was good at catching fraud at sign-up, but I wanted to know what it was missing. I led a deep dive into our worldwide business-customer data and found a pattern: fraudsters who passed the registration score but behaved unlike any real business before their first order. They moved through sign-up and browsing in repetitive, machine-like ways.

That told me the gap wasn't the model's accuracy. It was the signals. A registration snapshot can't see behavior. So I launched BFS 2.0, a behavioral model that keeps assessing each new customer from registration to the first transaction, using non-transaction behavior like browsing and account settings. I partnered with the buyer-risk team to reuse insights from their model, and added IP intelligence with a blocklist for suspicious IPs.

It caught fraudsters about 10 days earlier on average, lifted upfront detection about 15%, and flagged about $2.7 million in fraudulent credit lines. Then I set up a false-positive program with a target under half a percent, so good customers didn't pay for it."

**Check:** Structure 8 · Specificity 9 · Skill demo 9. **Follow-ups:** "How did you know they were fraudsters?" (confirmed fraud outcomes downstream; labels arrive late, so we made explicit assumptions and watched false positives separately); "Why not a rule?" (a rule catches one ring; behavior generalizes); "How long do you keep assessing someone who never orders?" (a window trade-off between detection and inference cost; we compared windows and picked the balance). Don't name exact features.

---

## Q5. How do you balance detection against customer friction? (~190 words)
**Framework:** trade-off → decision → result. (A24)

"In fraud, the expensive mistake isn't always missing fraud. It's blocking a good customer. For the Business Fraud Score, a false positive meant suspending a legitimate business's credit line, which could be thousands to hundreds of thousands of dollars.

So I made precision the priority over recall, on purpose. The score ran at registration, and buyer risk's controls still checked every order after checkout. So the score didn't need to catch everything. It needed to be right when it acted. Before launch, I required a three-week shadow run on live traffic, because a model can look great offline and drift on real data. I set the launch threshold where the score was right about 99% of the time, accepting that it would catch only about a quarter of fraud on its own. On live shadow data, it made essentially no false suspensions at that threshold.

Then I kept measuring the friction side, with a false-positive program targeting under half a percent.

For Radar, I'd set the threshold per segment. A large merchant and a new small business tolerate friction very differently."

**Check:** Structure 9 · Specificity 9 · Skill demo 9. **Follow-up:** "Isn't 25% recall low?" On its own, yes; it was one layer, and checkout controls and a blocklist rule caught the rest.

---

## Q6. How do you tell an isolated incident from a defense worth building? (~150 words)
**Framework:** method, then proof. **Direct JD1 line; no story of its own, so I use my method plus Q4.**

"I ask five questions. How much did it cost the customer, in money and in operational work? Does the same pattern show up for other customers? Do our existing signals already catch it? What would a defense cost good customers in friction? And what's the narrowest defense that works?

One attack on one merchant is an incident. The same behavior across many merchants is a pattern worth a product.

That's what happened in BFS 2.0. I only built a model because the machine-like behavior showed up across the worldwide data, not in one account. If it had been one ring, a blocklist rule would have been enough. Then I watched for the attackers adapting, because fraud doesn't stand still."

**Check:** Structure 8 · Specificity 6 · Skill demo 7. This is the weakest answer because it's a method, not a story. A real example where you chose a rule over a model would raise it (open item).

---

## Q7. How does your experience line up with these roles? (~160 words)
**Framework:** the recruiter told you to bring "examples on how your experience aligns to the roles." Two sets of three, then a question back.

"For the fraud and abuse role, three things. I've found a new attack pattern and turned it into a product, BFS 2.0. I've set a precision-first threshold where false positives cost real customers. And I've worked closely with data science on ML products. They built the models, and I set the strategy, goals and launch gates.

For the integrations and partners role, three things. I built APIs that other teams integrated: six teams on the fraud score, and three partner teams on SPORT. I priced a B2B ML product, where all five clients renewed and two upgraded by $500K each. And I managed a technical dependency with a client's IT team at Keystone.

The common thread is ML decisions delivered through APIs and priced for businesses.

Which of those matters most for your team right now?"

**Check:** Structure 8 · Specificity 8 · Skill demo 8. **[CONFIRM]** the "client IT dependency" claim is K30 (SLAs may have been intended, not signed). Say "managed" only.

---

## Q8. How would you measure Radar's success? (~150 words)
**Framework:** three sides, then one example.

"I'd measure three sides. Detection: fraud rate and dispute rate, and how fast we catch a new attack. Friction: the false-positive rate, authorization rate, and how many good customers get stepped up or reviewed. And the business and developer side: how many customers turn Radar on, revenue, retention, and for developers, how long it takes to integrate.

The key is to track friction next to detection, because you can always lower fraud by blocking more. In BFS, I paired the score with a false-positive program targeting under half a percent, so we could see what each point of detection cost good customers.

I'd also set a time-to-detect metric. With attackers who adapt, the question isn't only whether we catch it, but how soon."

**Check:** Structure 8 · Specificity 7 · Skill demo 7. The analytical interview covers this in depth later.

---

## Q9. Tell me about a technical decision you made on a real-time decision API (~170 words)
**Framework:** trade-off → decision → result. **Answers the recruiter's ask for "decisions you personally drove because of your technical understanding."**

"At Amazon Business, credit decisions at checkout had to be fast and reliable. The API took a customer, cart value and product category, and returned an approval.

The trade-off was batch against real time. Real-time scoring at checkout would have meant building a live model service, and it would have delayed the launch by about three months. I chose batch. We computed customer decisions ahead of time and cached them, so the checkout API only looked up the answer. We managed risk with exposure caps and category limits, and I kept real time on the roadmap.

The result: we launched about three months earlier, and credit approval for small businesses went from 4% to 15%, with no credit losses after full launch.

For Radar, the latency budget is tighter, so I'd ask which signals must be live and which can be precomputed."

**Check:** Structure 8 · Specificity 7 · Skill demo 8. **[CONFIRM]** your role in the batch decision (yours or engineering's), and the batch cadence (your library says weekly; your API notes say daily). Don't say "real time" for the checkout lookup.

---

## Q10. Tell me about a pricing decision (~170 words) (JD2)
**Framework:** trade-off → decision → result. (K32)

"At Keystone, consulting was losing money. The flagship engagement brought in about $2 million a year but needed about seven people on site, around $2.8 million in cost.

With the CEO, Sales and Finance, I split the offer into separate modules on annual subscriptions: forecasting at roughly $1.5 million a year, and agentic capabilities at about $500K more, with managed services included.

I rejected two alternatives. Usage-based pricing, because forecast or action counts don't track the value a customer gets. And percentage-of-savings pricing, because savings depend on the client's execution, so we'd end up in attribution disputes.

Two clients started on forecasting and upgraded to agents, about $500K each. All five clients renewed. Support per client dropped from about seven people to about one.

For Radar's new tiers, I'd test where customers draw the line between basic and advanced controls."

**Check:** Structure 8 · Specificity 9 · Skill demo 8. Don't quote Radar tier prices. Don't name clients. **[CONFIRM]** whether to say "about $2 million" and "$2.8 million" aloud (internal figures from your old company); rounded is fine if you're comfortable.

---

## Q11. How do you work with engineering and data science when you disagree or hit a constraint? (~160 words)
**Framework:** trade-off → decision → result. (A25)

"Midway through BFS 2.0, we hit a dependency. The IP blocklist was supposed to live in our ML platform's feature store. That work was estimated at 22 weeks, which would have pushed the launch out a full quarter. Fraud rings don't wait a quarter.

Engineering proposed hosting the blocklist in a refreshable in-memory cache instead, about a week of work. I made the call to do it, with one condition: the design had to guarantee the cache always loaded the latest version, with no risk of stale or corrupted data. That was the real risk, not the storage choice.

We shipped on schedule, and the blocklist and IP rules contributed about 10% of the new upfront detection."

**Check:** Structure 8 · Specificity 9 · Skill demo 9. **[CONFIRM]** what the cache gave up (open item 5; reuse by other models is my guess). You haven't named a design partner; don't invent one.

---

## Q12. Stripe values writing. Tell me about a time a document changed a decision (~190 words)
**Framework:** accomplishment arc. (A26, with A10 as the second example)

"I wrote the Business Fraud Score PR/FAQ instead of a requirements document, because the hard part wasn't the requirements. It was getting engineering, buyer risk and leadership to agree on a different strategy. It opened with the customer outcome: one score, at sign-up, that any team could use. The FAQ took on the hard questions directly: how big the problem was, why business fraud is harder than consumer fraud, the trade-off between fraud control and friction, and a four-phase roadmap. Credit Systems engineering used it to start technical design, and its phases became the roadmap through BFS 2.0.

I used the same approach for a privacy policy for ML models. Nobody had defined how EU and US privacy rules applied to ML. I wrote the requirements with Legal and took them to the VP of Data Privacy and Payments leaders. It became platform policy across about 20 Payments teams.

My rule: goal and customer first, then the decision and its trade-off, then the evidence."

**Check:** Structure 8 · Specificity 8 · Skill demo 8. **[CONFIRM]** what pushback each document got (open items 1 and 3) so you can answer "who disagreed?"

---

## Q13. How do you grow other PMs, and how do you think about scope? (~170 words)
**Framework:** accomplishment arc. (A13, K20)

"At Amazon, I managed a program manager in Pricing for two years. To reach the next level, he had to run projects on his own. I coached him to run a 15-country survey with an outside vendor and more than 30 stakeholders, reviewed his analysis before it went out, and wrote his promotion document. He was promoted from L4 to L5.

At Keystone, I led three PMs on a dotted line. One struggled to balance client requests against platform work, and engineering felt stretched. I set an improvement plan, with weekly one-on-ones, and reduced oversight as they improved. Engineering met the goals with no delays.

I've also run more than 50 hiring interviews.

On scope, I'd like to be judged on what changed beyond my own product: a fraud score six teams adopted, a privacy policy about 20 teams adopted, and a business model at Keystone."

**Check:** Structure 8 · Specificity 8 · Skill demo 7. Say "a program manager," not his name. Don't call the Keystone PMs "direct reports."

---

## Q14. Tell me about a failure (~150 words)
**Framework:** STAR-L with the lesson. (A6)

"When we launched credit for small businesses to 5% of customers, credit losses came in higher than expected, and we couldn't scale to the full segment. That was on me. I'd validated that customers wanted the product, but not that the controls would deliver acceptable portfolio economics.

I worked with science to add a lower-risk group of larger businesses to the portfolio. Our simulation showed the blended portfolio cut losses 6 to 8%. We relaunched to the blended segment with positive economics, and there were no credit losses after full launch.

The lesson I still use: validate the customer opportunity and the economics separately, especially in risk products, where a good customer outcome can hide a bad portfolio."

**Check:** Structure 8 · Specificity 8 · Skill demo 8. Say the 6–8% is a simulation. The pilot losses were real.

---

## Q15. What would your first 90 days look like? (~170 words)
**Framework:** plan, not a story; shows altitude and a writing habit. **[YOUR PLAN: edit to your judgment.]**

"In the first 30 days, I'd learn. I'd talk to customers about the attacks they're seeing, sit with the data scientists and engineers on how Radar's signals and rules work today, and read how recent attacks were handled.

In days 30 to 60, I'd pick one or two problems that matter most, using the five questions I use to separate one-off incidents from patterns, and write a one-page strategy memo for the team to challenge.

By day 90, I'd ship one narrow defense or integration with a clear measure for detection and for friction, and a plan for what comes next. For the partners and integrations role, I'd map the integration funnel and find where customers drop off.

I'd check this against what you see as the most urgent problem, because that matters more than my plan."

**Check:** Structure 7 · Specificity 5 · Skill demo 6. This is the weakest answer; it improves a lot once you know the team's real problem. Ask the manager first (question 2 in the prep file) and adapt.

---

## Which answers to practice first
1. Q1 and Q2 (the first five minutes decide the tone). 2. Q3 and Q4 (JD1). 3. Q7 and Q10 (JD2 and the recruiter's ask). 4. Q5, Q9, Q12. Then the rest.
