# Q&A Master Document

Last updated: 2026-10-15
Status: Second pass. **[DRAFT]** = written by Claude from your experience library and interview history; edit it into your own voice. **[CONFIRM]** = needs a fact only you know.

**Delivery rules (from your interview history, 4 of 4 interviews):**
- Every spoken answer under **200 words** (~75 seconds). Stop, then let them follow up.
- Tell a story, not mechanics. If you hear yourself say "SMART goals," "standups," or "1:1s" without a name and a result, switch to the story.
- Use the canonical metrics only (bottom of `experience-library.md`). No "if I remember" numbers.
- Never say "currently at Keystone." Say "most recently at Keystone.ai."
- Cut filler: "basically," "right?," "kind of," "like."

## Compensation

### "What is your current pay?"
**Strategy:** Avoid sharing. Redirect to the role's range. (In Washington State, employers can't ask about pay history, and job postings must include a pay range.)
**Script:** "I'd rather focus on the value I'd bring to this role. Washington postings include a range, so could you share what's budgeted for this position and level?"
**Private (never share):** Current total comp $400K. Floor $380–400K.
**Backup if pressed:** "My recent total compensation has been in the $400K range, but I'm focused on the right package for this scope."
**Data source for range:** levels.fyi (run `/salary-research` per company)

### "What are your compensation expectations?"
**Target:** $600K total comp. Floor: $380–400K. State a range of about $550–650K so $600K sits in the middle.
**Source:** Not yet sourced. Run `/salary-research [company] Principal PM Seattle` to validate per company. Adjust the range down for companies whose posted band tops out below $550K, rather than quoting a number above their band.
**Script (big tech / late-stage):** "Based on my research for Principal-level PM roles in AI, and the scope I've owned ($5M ARR product line, 8 years shipping ML at Amazon), I'm targeting total compensation in the range of $550–650K. I'm flexible on the mix of base, equity, and bonus depending on the full package."
**Script (seed / Series A–B startup, e.g., Count):** [DRAFT] "I know early-stage packages are weighted toward equity. Before we go further, could you share the cash and equity ranges for the role? I want to make sure we're in the same zone, and I'd evaluate the equity on ownership percentage and the last valuation, not just the share count."
**Private note for startups:** Minimum base **$250K** if the equity is strong (confirmed 2026-10-15). Below that, walk away regardless of equity.

### How base fits into your $600K TC target
Total comp = base + annual bonus + equity per year (+ sign-on in year 1). At big tech, base is usually the smaller part at Principal level and equity makes up the rest. Rough Seattle-area pattern [VERIFY with `/salary-research` per company, since this is general knowledge, not sourced data]:
- **Big tech (Microsoft, Google, Salesforce):** base often ~$220–300K. A $600K TC means roughly half or more comes from equity and bonus.
- **Frontier AI labs (OpenAI, Anthropic):** bases tend to run higher, with equity on top.
- **Startups:** lower base, more equity, and that equity is worth much less certain money. Value it at a steep discount.
**Working targets:** base **$275K** for forms that ask base only [GUESS: middle of the range above; replace once `/salary-research` gives real numbers]. Floor **$250K** base.

### Application form "Desired salary" (numeric field)
- If optional: leave it blank.
- If required and the posting shows a range: enter the top of the posted range.
- If required with no range: enter **600000** for total comp fields, **275000** for base-only fields.

### "What level are you targeting?"
[DRAFT] "Principal PM, or Head of Product / Director at a growth-stage company. I'd rather level on scope than title: at Keystone.ai I owned product strategy for a pivot from consulting to product that reached $5M ARR, and at Amazon I owned platforms used by 30+ scientists and products that drove $71M in revenue. I'm happy to walk through scope so you can map it to your levels."

## Common Questions

### "Why did you leave Keystone?" / "Why are you looking?"
Context (private): laid off from Keystone.ai; last day Mar 2026. Position as seeking larger scale. Never deny the layoff, and never say you're currently employed there, if asked directly.

Your own framing from the story doc: (1) the chance to set product direction and be accountable for customer and business outcomes; (2) transforming complex B2B workflows with AI and technology.

**Primary script:** "I spent almost two years at Keystone.ai taking an agentic AI platform from 0→1, helping drive the company's shift from consulting to product, reaching $5M ARR and deploying with five enterprises. I'm proud of that. What I want next is to set product direction and own customer and business outcomes at much larger scale, applying what I've learned about making agents reliable in production (evaluation, human-in-the-loop design, risk-tiered autonomy) on a product where that's the core problem."

**If asked directly ("Are you still there?" / "Were you laid off?" / "When did you leave?"):** "My role was part of a restructuring at Keystone.ai earlier this year. I've used the time to go deep on agent evaluation and retrieval with hands-on builds, and to be selective about my next role." Keep it to one or two sentences, then move back to what you built. Use this answer as-is; the facts will show up in verification anyway.

### "What have you been doing since March?"
[DRAFT] "Two things. First, building. I built my own AI job-search system and learned something I now use in every agent design conversation: my first version let an LLM decide when the search was done, and it missed jobs I knew existed. I split it into deterministic discovery and agentic evaluation, and it hit 100% recall on benchmark sets at Adobe, NVIDIA, and CrowdStrike. I'm now working on patent-search retrieval, comparing lexical and semantic retrieval with reranking. Second, being selective. I'm only pursuing roles where agent reliability is the core product problem."

### "Walk me through your resume" / "Why each move?"
LawnStarter asked "reasons for your last 3 moves" and it scored 5/10. One sentence per move, each pointing forward.
Reasons confirmed by you 2026-10-15; wording is [DRAFT].
- **MBA (IIT Roorkee) → Cognizant (2015):** business analyst in pre-sales, designing infrastructure solutions and pricing for $25M APAC deals.
- **Cognizant → Amazon (2016):** "I wanted to own technology products at a technology company, and Amazon was the company I most wanted to work for."
- **Amazon Pricing → Supply Chain (2018):** "It was my move into a core ML and technical product role: building recommendation and causal-attribution products, not insight tools."
- **Supply Chain → MLOps Platform (2020):** "A chance to move to Seattle and into a much more ML-heavy role, owning the platform that scientists used to ship models."
- **MLOps → Financial Services (2022):** "A re-org within the same business, which gave me an end-to-end revenue product: ML-based financing with growth and risk outcomes." Say "re-org" plainly; don't dress it up as a choice.
- **Amazon → Keystone.ai (2024):** "An intentional shift. After eight years I wanted to see how products get built outside Amazon and take on a larger scope: product strategy for the whole company, not one team."
- **Keystone → next:** use the "Why did you leave Keystone?" script.
**The story arc in one line:** "Each move took me closer to the ML core, then to owning product for a whole company. Now I want to bring that company-level scope to much larger scale." This ties Keystone (more scope) to what's next (more scale), so the two departures don't sound contradictory.

### "What was your title at Amazon?"
Accurate answer (use this if a recruiter or background check asks): "I joined as a Product Manager in 2016 and was promoted to Senior PM-Technical in 2020." Don't volunteer the title history; describe the work.

### "Why do you want to work at [company]?"
Your real drivers (private, use selectively): building real AI products, brand, compensation, and a long-term career step up. Lead with the first one externally.
Template: (1) their specific agent/AI platform bet and where it's going; (2) the connection to your work: production agents (forecasting agent), ML platforms (Amazon MLOps), or your domains (supply chain, fintech, payments); (3) the scale or customer base you couldn't reach at Keystone. `/interview-prep` customizes this per company.

### "Why should we hire you?"
[DRAFT] Structure: their top problem → your matching proof → the thing few candidates have.
"Three reasons. First, I've shipped agents into production for Fortune 500 enterprises, not just demos: a multi-agent forecasting system that cut planners' review time from four hours a day to four hours a week, with tiered autonomy and human approval. Second, I've built the platforms underneath AI products: Amazon's MLOps platform for 30+ scientists and 100+ models, and Keystone's data platform. Third, I know when *not* to use an agent, which matters as much as knowing how to build one. [Close with the one problem from their JD you'd take on first.]"

### "What is your greatest weakness?"
(From your story doc.) "One area I've been working on is calibrating how deep I go into technical details. When I was launching Keystone's Data Platform, I initially wrote some of the queries myself, which slowed us down. I quickly realized this and shifted to setting guardrails like data quality, contracts, and adoption, and let Engineering focus on implementation. Since then, I've been more deliberate about going deep only where it changes the product decision. I give Engineering clarity on the data model, key entities, and customer requirements, and let them own the implementation detail."
**Delivery note:** at LawnStarter you improvised a different answer and scored 4/10. Use this one as written.

### "What is your biggest failure?"
Primary: **A6, PBI 2.0 SMB economics miss** (Amazon). Losses ran higher than expected in the 5% soft launch. You owned not validating portfolio economics, blended in a safer enterprise segment (simulation showed 6–8% lower losses), and relaunched with positive economics. Learning: validate the customer opportunity and the portfolio economics separately.
Backup: **A12, SPORT adoption miss** (missed the annual goal; fixed the end-to-end experience; hit adoption in 1–1.5 years).
AI-specific: **K5, agent quality slip** (adoption 70% → 50% → 70%). Your highest-scoring answer so far (8/10).
Note: if you also tell A3, say "no losses after full launch," which fits with A6's pilot losses.

### "What are your strengths?"
(From your story doc.)
1. **Turning customer-problem ambiguity into product strategy:** Deep Enterprise pivot, explainability (adoption 50% → 70%), forecasting agent, Amazon SMB credit.
2. **Product judgment on short- vs. long-term trade-offs:** high-touch support before automating, data platform demo middle ground, managed services vs. SaaS.
3. **AI/ML technical depth combined with executive influence:** data platform, Amazon MLOps (30+ scientists, 100+ models), forecasting agent.
Pick one strength and tell its story; don't list all three.

### "How technical are you?"
(From your story doc.) Broad fluency across data engineering, software architecture and APIs, cloud infrastructure, ML, and agentic AI, including deployment, evaluation, monitoring, and governance. Depth at the product-decision level: understand how components interact, challenge assumptions, weigh quality, latency, cost, and scale, and investigate hands-on through queries and analysis. Proof: K2/K6 architecture deep-dives; S1 job-search build.

### "How do you prioritize?"
(From your story doc.) Two levels: **investment** (customer/business outcome → pain points → impact vs. effort) and **sequencing** (dependencies with Eng/Science → the smallest slice that proves value or tests the riskiest assumption). Example: A1, the SMB credit product launched to 5%, then scaled. Scored 8/10 at Count R2 when told with the adoption sequencing story (K10: 50% → 70%).

### "How do you handle requests from sales, support, clients, and partners?"
Scored 5.5/10 at Count R2. [DRAFT]
"One intake, one bar. At Keystone, a PM I led was getting pulled between client requests and platform work, and the integration roadmap slipped. We set a rule: every request gets assessed against current product priorities, then we delegate, defer, adjust the roadmap, or escalate if it would displace committed work. Sales and support could see where their request landed and why. The roadmap got back on track, and engineering stopped feeling torn between client and company direction. The point isn't the tool; it's that the trade-off is explicit and the requester hears the answer."
(Story: K20. Don't reuse it for the leadership question in the same interview; use K13 there instead.)

### "How do you work with engineers?"
Scored 6/10 at Count R2. Lead with K13, not process. [DRAFT]
"I bring the problem and the constraints, and I'm willing to be argued out of a solution. At Keystone I pushed for modular services instead of a monolith because Fortune 500 procurement needed selective deployment. Engineering pushed back on the timeline. Instead of arguing architecture, I framed it as business risk: six weeks now versus a rewrite later if a client's security review failed. We aligned on interface contracts early. We passed the flagship client's security review on time, and a second client onboarded six months later with no refactor."

### "What is your leadership style?" / "How do you manage a team?" / "How do you align a team?"
Scored 4.5/10 at Count R1 because you described mechanics. Lead with the story. [DRAFT]
"Clear direction, real ownership, and coaching that fits the person. During Keystone's pivot to product, the CPO and I organized product work into three lanes: customer data and deployment, forecasting models, and the planner app, each with an owner and explicit decision rights. One of the PMs I led on a dotted line was struggling to balance client requests against platform work, and their team fell behind. I gave specific feedback, set a decision rule for incoming requests, and reviewed their calls weekly, pulling back as their judgment improved. Their team caught up and engineering hit its goals with no delays."
Say "dotted-line PMs" or "PMs I led" for Keystone. For Amazon you can say "a Program Manager I managed."

### "How have you developed someone on your team?"
Story: A13. [DRAFT, ~130 words]
"In Amazon Pricing, I managed a Program Manager for two years. He was an L4, and the gap to L5 was independence: running a project end-to-end, working with 30+ stakeholders across 15+ countries on his own, turning analysis into business recommendations, handling conflicting requirements, and managing our external survey vendor without me in the room. I coached him through each piece: how to run the vendor and stakeholders, how to deep-dive the survey results, and how to write requirements for automated dashboards. Early on I reviewed his results before they went to stakeholders, and I stepped back as his judgment proved out. He ended up leading the price-perception surveys end-to-end and publishing high-quality reports on schedule. I wrote his promotion document, and he was promoted to L5. What I took from it: people grow fastest when you hand over real ownership in stages and stay close enough to coach, not to do the work."
(~170 words. Promotion was in 2018, if asked.)

### "How do you handle an underperformer?"
Scored 5/10 at Count R1. Use K20 in full (specific feedback → plan → weekly coaching → less oversight as they improve → result). Under 200 words.

### "Do you have people-management experience?" / "Why Head of Product without direct reports?"
[DRAFT] "Yes, though more through leadership than headcount. At Amazon I managed a Program Manager and promoted him from L4 to L5. At Keystone I led PMs on a dotted line, including turning around one PM's performance. I've also mentored four or five junior PMs and interns, onboarded new PMs, and run 50+ hiring interviews at Keystone and Amazon. The Head of Product job at a company your stage is mostly setting direction with the CEO, owning outcomes, and building the first team. That's what I did at Keystone: I partnered with the CEO and CTO to move the company from consulting to product and led 20+ engineers and scientists through it. Hiring and growing the PM team is the part I'm looking forward to."
Be precise if probed: one direct report, a Program Manager (not a PM). Don't round it up to "a team."

### "Tell me about working in a fast-moving startup"
Scored 4.5/10 at Count R1. Use K16. [DRAFT]
"At Keystone, the CEO needed an event-stream capability for a high-stakes prospect demo. The full build was three months; we had about three weeks. I met the CEO one-on-one to find what the prospect actually needed to see, which was event-based features and a credible innovation story, not live ingestion. We built the features from existing data first and kept live ingestion for later. I partnered with the VP of Engineering to ring-fence the team. We shipped in two to three weeks, the prospect became a paying customer, accuracy improved 5%, and the work became the foundation of the data platform."

### "Your first 30 / 60 / 90 days?"
Scored 4.5/10 at Count R2: generic and not tied to what the interviewer had told you. Fill the brackets with their words from the same call. [DRAFT framework]
- **First 30 days, learn:** talk to [N] customers and every function lead; read the last quarter of support tickets and lost deals; map the roadmap to revenue. *Deliverable:* a one-page "what I heard" doc with the top 3 problems, shared with the founders.
- **By 60 days, decide:** a prioritized roadmap tied to [the problem they named, e.g., intake chaos, enterprise readiness], plus one intake process every team uses. *Deliverable:* roadmap and decision rules, agreed with engineering.
- **By 90 days, ship:** one visible win on [their top problem], and a metric everyone reviews weekly. *Deliverable:* shipped improvement plus a dashboard.
Anchor with proof: "At Keystone I started the same way: planner interviews and workflow observation before building, which is how we found explainability was the adoption blocker (50% → 70%)."

### "How would you build an AI-native product org?"
Scored 5/10 at LawnStarter. [DRAFT]
"Three habits. First, PMs prototype: at Keystone I built an agent prototype in Codex to prove value before asking for engineering time, and the data convinced leadership to swap two months of planned work for it. Second, evals are part of the spec: every AI feature ships with reference cases, launch thresholds, and production monitoring, the way we ran the forecasting agent (shadow mode, >70% recall and acceptance before production). Third, automate the PM busywork: our HAT-AI assistant handled roadmap reporting and newsletters for 30 PMs and saved 120 hours a week. The result is PMs spending their time with customers and on judgment calls."

### "How do you approach responsible AI / AI safety in products?"
[DRAFT] "Accuracy of an action isn't the same as acceptability. At Keystone we initially automated mid-confidence actions and 60% got reversed because the agent couldn't show its evidence. We reset to tiered autonomy: autonomous only for low-risk, reversible actions above a confidence bar; recommend-and-approve with evidence for the middle; surface-only for the rest. Guardrails live in the tool definitions, not the prompts, with audit logs and independent faithfulness evals. Action acceptance went from 30% to 80%."
(Story: K3. "30% → 80%" is action acceptance after the tiered-autonomy reset; the canonical 70% is recommendation acceptance at launch. Both confirmed 2026-10-15. If asked, name which metric you mean.)

### "How do you think about AI cost / unit economics?"
[DRAFT] "In our forecasting agent pilot, model cost was higher than the cost of doing the work by hand, which kills a product. We tested models on cost, latency, quality, and adoption, then routed simple cases to cheap models and only ambiguous ones to strong models. In a small pilot that cut cost about 30% and lowered latency, with no change in quality or adoption. Now I track cost per accepted recommendation, not cost per call."
(Story: K14. 30% confirmed 2026-10-15.)

### "Where do you see yourself in 3–5 years?"
Scored 4.5/10 at Count R1: too generic. Close with a company-specific line. [DRAFT]
"Leading a product organization and accountable for product direction and customer and business outcomes in enterprise AI. I'll get there by building a strong cross-functional team, scaling products that drive measurable customer impact, and growing future product leaders. Concretely here, that means [company outcome, e.g., 'taking the product from your first enterprise customers to a repeatable platform'] and building the PM team that owns it."

### "Tell me about yourself" (2 min max)
Use the short version by default. Use the fuller one only when they say "take your time" or "walk me through your background."

**Short (default, ~130 words):** "I am a Principal PM-T with 11+ years building ML/AI products that solve customer problems at scale. Most recently at Keystone, I led a 0→1 agentic AI platform to help Fortune 500 clients make supply chain decisions, and led Keystone's pivot from consulting-led to product-led, enabling $5M ARR with flagship deployments at Fortune 500 manufacturers. I've built and scaled AI products including forecasting, credit decisioning, and supply chain optimization that drove up to $100M in top- and bottom-line impact, plus the platforms underneath them (MLOps and a data platform). A big part of my role has been aligning C-suite executives and leading large cross-functional teams. [Company-specific close]"

**Fuller (Claude draft):**
"I'm a Principal Technical Product Manager with 11+ years building AI and ML products, eight of them at Amazon and almost two at Keystone.ai.

At Amazon I shipped ML into production across very different problems: supply chain recommendation and causal-attribution products that delivered over $100M in cost savings, the MLOps platform that let 30+ scientists double the number of production models with no added headcount, and an ML financing product I scaled to 50,000 customers and $71M in incremental revenue.

At Keystone I led the company's move from consulting to product. I owned strategy and go-to-market for an agentic AI supply chain platform that reached $5M ARR, and I built a multi-agent forecasting system with risk-tiered autonomy and human approval that cut planners' manual work from four hours a day to four hours a week.

What connects all of it is turning messy, manual enterprise decisions into AI systems people trust. And I stay hands-on: I recently built my own job discovery system and found that the right answer was a deterministic retrieval layer with agents doing evaluation, which got 100% recall on benchmark sets.

That's why I'm excited about [role]: [company-specific hook]."

**Domain bridge:** for fintech, payments, or accounting companies (e.g., Count), swap in Amazon B2B Payments & Lending: SMB credit approval 4% → 15%, $71M incremental revenue. You missed this at Count R1.

## Questions to Ask Interviewers

Stop using "What does the ideal candidate look like?" (used at Count R1, Pay-i, and LawnStarter). Pick 2 from the right column and tailor them. Your best-scoring question (8/10) was specific to the company's PMF and revenue, followed by playing back the answer.

| Interviewer | Questions |
|---|---|
| Founder / CEO | "What has to be true in 12 months for this hire to have been the right call?" · "Where are you seeing pull from customers that the product doesn't serve yet?" · "What's the decision you most want a product leader to take off your plate?" |
| Engineering lead | "Where does product–engineering friction show up today?" · "How do you decide when an AI feature is good enough to ship?" · "What's the piece of the system you'd rebuild if you could?" |
| Hiring manager (big tech) | "What's the hardest open problem on this team's roadmap?" · "How is success measured for this role in the first year?" · "How do you evaluate agent quality before and after launch?" |
| Recruiter | "What's the interview loop and timeline?" · "What's the budgeted range for this level?" · "What's made past candidates successful or unsuccessful in this loop?" |

Always end with: "Is there anything about my background you'd like me to clarify?"

## References
Named at LawnStarter: Keystone CEO, Keystone President, two Amazon L7 managers.
| Reference | Role | Best placed to speak to | Contact |
|---|---|---|---|
| Greg Richards | CEO, Keystone.ai | Consulting → product pivot (K1), CEO disagreements (K16, K17), $5M ARR | kept offline |
| Brad Miller | President, Keystone.ai | Data platform (K15: onboarding 2 months → 2 weeks; deployment 3 months → 3 weeks) and your full Keystone tenure | kept offline |
| Himavant Kurnala | L7 manager, Amazon Supply Chain (2018–2020) | SPORT, TRACE ($40M), MOQ; $100M+ combined savings; cross-team alignment across 14 systems | kept offline |
| Mini Manakame | L7 manager, Amazon Pricing (2016–2018) | Price perception across 800+ retailers in 17 countries; insight tools for 40+ pricing leaders; managing and developing Piyush | kept offline |
Ask Mini to mention your management of Piyush. A reference confirming people management helps with Weakness 1.
**If asked for a reference from your most recent Amazon role (2020–2024):** you're choosing not to offer one. Script: "My strongest references from Amazon are the managers I worked with longest and most closely, in Pricing and Supply Chain. For my recent work, Keystone's CEO and President cover the last two years." Your Keystone references cover your most recent work, which is what most checks focus on.
Contact details are kept outside this repo (it syncs to GitHub).
Before each reference check: send the reference the role, the JD's top 3 requirements, and the 2 stories you'd like them to mention.

## Logistics

### Visa / Work Authorization
US Green Card holder. Authorized to work in the US; no sponsorship required now or in the future.

### Relocation Willingness
"I'm based in Seattle and not looking to relocate. I'm open to Seattle-area on-site or hybrid roles, and to fully remote roles."

### LinkedIn Easy Apply saved answers (from export, update these)
- "Years of Product Management": saved as **8**. Update to 10–11 (Amazon 2016 → present).
- "Years of People Management": saved as **0**. Update to **2** (managed a Program Manager in Amazon Pricing, 2016–2018), so it matches what you say in interviews.
- "Years of IT experience" / "Working experience": saved as **9**. Update to 11.
- Sponsorship required: No. Authorized to work in the US: Yes.

### Start Date Availability
Available immediately; no notice period required.

### "Are you interviewing elsewhere?"
[DRAFT] "Yes, I'm in conversations with a few companies working on enterprise AI. This role stands out because [specific reason], so I'd like to understand your timeline."
If you have a later-stage process or offer, name the stage (not the company) to create urgency: "I'm in final rounds elsewhere, so it would help to know your timeline."

### Remote/Hybrid/In-Person Preference
"I'm in Seattle and open to on-site, hybrid, or fully remote."
