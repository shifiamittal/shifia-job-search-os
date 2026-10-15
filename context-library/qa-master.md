# Q&A Master Document

Last updated: 2026-10-15
Status: First draft. **[DRAFT]** = written by Claude from your LinkedIn/resume; edit it into your own voice. **[CONFIRM]** = needs a fact only you know.

## Compensation

### "What is your current pay?"
**Strategy:** Avoid sharing. Redirect to the role's range. (In Washington State, employers can't ask about pay history, and job postings must include a pay range.)
**Script:** "I'd rather focus on the value I'd bring to this role. Washington postings include a range, so could you share what's budgeted for this position and level?"
**Private (never share):** Current total comp $400K. Floor $380–400K.
**Backup if pressed:** "My recent total compensation has been in the $400K range, but I'm focused on the right package for this scope."
**Data source for range:** levels.fyi (run `/salary-research` per company)

### "What are your compensation expectations?"
**Target:** $600K total comp. Floor: $380–400K. State a range of about $550–650K so $600K sits in the middle.
**Source:** Not yet sourced. Run `/salary-research [company] Principal PM Seattle` to validate per company.
**Script:** "Based on my research for Principal-level PM roles in AI, and the scope I've owned ($5M ARR product line, 8 years shipping ML at Amazon), I'm targeting total compensation in the range of $X–$Y. I'm flexible on the mix of base, equity, and bonus depending on the full package."

## Common Questions

### "Why are you leaving your current role?"
Context (private): laid off from Keystone.ai; last day Mar 2026. Position as seeking larger scale. Never deny the layoff, and never say you're currently employed there, if asked directly.

Your own framing from the story doc: (1) the chance to set product direction and be accountable for customer and business outcomes; (2) transforming complex B2B workflows with AI and technology.

**Primary script:** "I spent almost two years at Keystone.ai taking an agentic AI platform from 0→1, helping drive the company's shift from consulting to product, reaching $5M ARR and deploying with five enterprises. I'm proud of that. What I want next is to set product direction and own customer and business outcomes at much larger scale, applying what I've learned about making agents reliable in production (evaluation, human-in-the-loop design, risk-tiered autonomy) on a product where that's the core problem."

**If asked directly ("Are you still there?" / "Were you laid off?" / "When did you leave?"):** "My role was part of a restructuring at Keystone.ai earlier this year. I've used the time to go deep on agent evaluation and retrieval with hands-on builds, and to be selective about my next role." Keep it to one or two sentences, then move back to what you built. Use this answer as-is; the facts will show up in verification anyway.

### "Why do you want to work at [company]?"
Your real drivers (private, use selectively): building real AI products, brand, compensation, and a long-term career step up. Lead with the first one externally.
Template: (1) their specific agent/AI platform bet and where it's going; (2) the connection to your work: production agents (forecasting agent), ML platforms (Amazon MLOps), or your domains (supply chain, fintech); (3) the scale or customer base you can't reach at Keystone. `/interview-prep` customizes this per company.

### "What is your greatest weakness?"
(From your story doc.) "One area I've been working on is calibrating how deep I go into technical details. When I was launching Keystone's Data Platform, I initially wrote some of the queries myself, which slowed us down. I quickly realized this and shifted to setting guardrails like data quality, contracts, and adoption, and let Engineering focus on implementation. Since then, I've been more deliberate about going deep only where it changes the product decision. I give Engineering clarity on the data model, key entities, and customer requirements, and let them own the implementation detail."

### "What is your biggest failure?"
Primary: **A6, PBI 2.0 SMB economics miss** (Amazon). Losses ran higher than expected in the 5% soft launch. You owned not validating portfolio economics, blended in a safer enterprise segment (simulated losses −6–8%), and relaunched with positive economics. Learning: validate the customer opportunity and the portfolio economics separately.
Backup: **A12, SPORT adoption miss** (missed the annual goal; fixed the end-to-end experience; hit adoption in 1–1.5 years).
AI-specific: **K5, agent quality slip** (adoption 70% → 50% → 70%).
Note: if you also tell A3, say "no losses after full launch," which fits with A6's pilot losses.

### "What are your strengths?"
(From your story doc.)
1. **Turning customer-problem ambiguity into product strategy:** Deep Enterprise pivot, explainability (adoption 50% → 70%), forecasting agent, Amazon SMB credit.
2. **Product judgment on short- vs. long-term trade-offs:** high-touch support before automating, data platform demo middle ground, managed services vs. SaaS.
3. **AI/ML technical depth combined with executive influence:** data platform, Amazon MLOps (30+ scientists, 100+ models), forecasting agent.

### "How technical are you?"
(From your story doc.) Broad fluency across data engineering, software architecture and APIs, cloud infrastructure, ML, and agentic AI, including deployment, evaluation, monitoring, and governance. Depth at the product-decision level: understand how components interact, challenge assumptions, weigh quality, latency, cost, and scale, and investigate hands-on through queries and analysis. Proof: K2/K6 architecture deep-dives; S1 job-search build.

### "How do you prioritize?"
(From your story doc.) Two levels: **investment** (customer/business outcome → pain points → impact vs. effort) and **sequencing** (dependencies with Eng/Science → the smallest slice that proves value or tests the riskiest assumption). Example: A1, the SMB credit product launched to 5%, then scaled.

### "What is your leadership style?" / "How do you manage a team?"
(From your story doc.) Outcome-driven and collaborative: clear direction, meaningful ownership with explicit decision rights, coaching adapted to the person, and mechanisms (OKRs, stand-ups, demos, 1:1s). Example: organized Keystone's pivot into 3 lanes with the CPO.
Say "dotted-line PMs" or "PMs I led," never "my direct reports." Use K20 for "manage performance."

### "Where do you see yourself in 3–5 years?"
(From your story doc, adapted.) "Leading a product organization and accountable for product direction and customer and business outcomes in enterprise AI. I'll get there by building a strong cross-functional team, scaling products that drive measurable customer impact, and growing future product leaders."

### "Tell me about yourself" (2 min max)
Your latest version (from the story doc): "I am a Principal PM-T with 11+ years building ML/AI products that solve customer problems at scale. Most recently at Keystone, I led a 0→1 agentic AI platform to help Fortune 500 clients make supply chain decisions, and led Keystone's pivot from consulting-led to product-led, enabling $5M ARR with flagship deployments at Fortune 500 manufacturers. I've built and scaled AI products including forecasting, credit decisioning, and supply chain optimization that drove over $100M in cost savings and $71M in incremental revenue, plus the platforms underneath them (MLOps and a data platform). A big part of my role has been aligning C-suite executives and leading large cross-functional teams. [Company-specific close]"

Fuller alternative (Claude draft):
"I'm a Principal Technical Product Manager with 11+ years building AI and ML products, eight of them at Amazon and almost two at Keystone.ai.

At Amazon I shipped ML into production across very different problems: supply chain recommendation and causal-attribution products that delivered over $100M in cost savings, the MLOps platform that let 30+ scientists double the number of production models with no added headcount, and an ML financing product I scaled to 50,000 customers and $71M in incremental revenue.

At Keystone I led the company's move from consulting to product. I owned strategy and go-to-market for an agentic AI supply chain platform that reached $5M ARR, and I built a multi-agent forecasting system with risk-tiered autonomy and human approval that cut planners' manual work from four hours a day to four hours a week.

What connects all of it is turning messy, manual enterprise decisions into AI systems people trust. And I stay hands-on: I recently built my own job discovery system and found that the right answer was a deterministic retrieval layer with agents doing evaluation, which got 100% recall on benchmark sets.

That's why I'm excited about [role]: [company-specific hook]."

## Logistics

### Visa / Work Authorization
US Green Card holder. Authorized to work in the US; no sponsorship required now or in the future.

### Relocation Willingness
"I'm based in Seattle and not looking to relocate. I'm open to Seattle-area on-site or hybrid roles, and to fully remote roles."

### LinkedIn Easy Apply saved answers (from export, update these)
- "Years of Product Management": saved as **8**. Update to **9** (Oct 2016 – Mar 2026 ≈ 9.4 years; don't round up to 10–11).
- "Years of People Management": saved as **0**. Accurate for formal reports; fine to leave.
- "Years of IT experience" / "Working experience": saved as **9**. Update to **10** (May 2015 – Mar 2026 ≈ 10.9 years; 11 if you round up).
- Sponsorship required: No. Authorized to work in the US: Yes.

### Start Date Availability
Available immediately; no notice period required.

### "Are you interviewing elsewhere?"
[DRAFT] "Yes, I'm in early conversations with a few companies working on enterprise AI agents. This role stands out because [specific reason], so I'd like to understand your timeline."

### Remote/Hybrid/In-Person Preference
"I'm in Seattle and open to on-site, hybrid, or fully remote."
