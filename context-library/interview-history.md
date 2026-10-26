# Interview History

Last updated: 2026-10-15
Total interviews: 4 (3 companies), plus a recruiter screen for Count (Albert Squiers, not recorded)
Outcomes: 2 rejected (LawnStarter at HM review, Count after Round 2), 1 stalled (Ascerta)

Auto-maintained by `/interview-debrief`. After each real interview, run the debrief and this file updates automatically with questions, scores, signals, and patterns. Full debriefs with rewrites are in `interview-debriefs/`.

## Patterns (4 interviews, 2026-09-28 → 2026-10-12)

### Strengths
- **AI product / agents / evals:** avg **7.3/10** (7, 8, 7, 7). The forecasting agent (K2), the quality-slip story (K5) and eval design (K4) consistently land. The quality-slip story scored 8 and is your best behavioral answer.
- **Prioritization with data:** avg **7.5/10** when told as a story (Count R2 adoption sequencing 50 → 60 → 70 = 8; Count R1 customer-vs-roadmap = 7).
- **Questions to interviewers (when specific):** Count R2's PMF/revenue question plus playing back the answer = 8.

### Weaknesses
- **Leadership / people / process questions:** avg **4.8/10** (team alignment 4.5, underperformer 5, working with engineers 6, weakness 4). You answer with generic mechanics (SMART goals, standups, 1:1s) instead of a story. You have the stories: K20 (dotted-line PM turnaround), K13 (engineering pushback), K16 (CEO demo).
- **Plans and vision questions:** avg **4.7/10** (30–60 days 4.5, 5-year vision 4.5, AI-native org 5). Generic and not tailored to the company, even when you had specific context from the same call.
- **Length:** most answers run 350–650 words against a 200-word target. Filler words ("basically," "right?," "kind of," "like") show up throughout. **Confirmed habit (4 of 4 interviews).**
- **Metric drift:** numbers changed between interviews: deployment 6 → 2 months (canonical 6 → 4), ">80% adopted" (canonical 70%), "if I remember, ~30%" cost cut (unconfirmed), Keystone team size changed three times in one answer. **Confirmed habit (3 of 4).**
- **Current-employment claim:** "currently at Keystone" in **4 of 4** interviews. Role ended Mar 2026. Highest-risk issue in the pipeline.
- **Technical, non-AI (incident debugging):** 5/10 (one data point). Didn't segment the failing 5%, mitigate first, or use your payments background.

### Other patterns
- **Same closing question everywhere:** "What's the ideal candidate?" at Count R1, Pay-i, and LawnStarter. Replace it with a company-specific question.
- **Story reuse:** the K16 demo story was told in both Count rounds; K2 appeared in every interview. K2 is strong, but rotate K6, K13, K17, A1, A11 so later rounds hear new evidence.
- **Domain bridging missed:** at Count (accounting/payments) your Amazon B2B Payments & Lending work never came up.

### Recommended Practice
1. `/mock-interview behavioral`: "Tell me about your leadership style," "How do you handle an underperformer," "How do you work with engineers." Answer with K20 / K13 / K1 in **under 200 words**, timed.
2. `/mock-interview execution`: "First 90 days as Head of Product at [company]." Use the interviewer's own context and give a deliverable for each phase.
3. `/mock-interview technical`: "Payment API failing for 5% of users," "Agent quality dropped overnight." Practice: stabilize → segment → what changed → trace → fix → prevent.
4. Drill the canonical metrics card (experience library, bottom table) before every interview.
5. Practice the departure line until it's automatic: "most recently at Keystone.ai" / "my role ended in a restructuring this spring."

---

## Interview Log

### 2026-10-12 - Count - Head of Product - Round 2
- **Interviewer:** Chris Smith, co-founder (acting CTO; ex-Amazon, ex-Meta)
- **Format:** Founder interview: prioritization, engineering process, technical troubleshooting
- **Questions asked:**
  1. Current role and what you want next - Score: 7/10 - Type: behavioral (TMAY)
  2. How do you think about priorities? - Score: 8/10 - Type: execution
  3. How do you work with engineers / what's your process? - Score: 6/10 - Type: execution
  4. First 30–60 days owning the whole product - Score: 4.5/10 - Type: execution
  5. Prioritizing inbound from clients, partners, support, QA, sales - Score: 5.5/10 - Type: execution
  6. Diagnose a payment API failing for 5% of users - Score: 5/10 - Type: technical
  7. Candidate questions - Score: 8/10
- **Overall assessment:** adequate-to-strong (6.5/10). Interviewer: "your answers were phenomenal."
- **Outcome:** **Rejected 2026-10-13** (via recruiter Albert Squiers), the day after this round. No feedback yet (requested 2026-10-15). Lesson: positive in-room signals ("phenomenal") didn't predict the outcome; the weaker answers (30–60 days 4.5, intake process 5.5, troubleshooting 5) were on the exact problems Chris said the role exists to solve.
- **Signals:** Probed prioritization and intake process hardest (that's the job). Sold the company (runway, revenue doubling, IPO).
- **Key improvement:** Tailor plans to the company's stated problems; on incidents, segment and mitigate first.
- **Next round prediction:** Offer or final round with both founders; possible backlog/90-day take-home. Check comp against your floor first (seed-stage).

### 2026-10-05 - Count - Head of Product - Round 1
- **Interviewer:** Derek Harn, COO and co-founder
- **Format:** Founder screen: background, speed, leadership
- **Questions asked:**
  1. Background and what you're looking for - Score: 5.5/10 - Type: behavioral (TMAY)
  2. Experience in a fast-moving startup - Score: 4.5/10 - Type: behavioral
  3. Customer request vs. planned roadmap - Score: 7/10 - Type: execution
  4. Leadership style / aligning the team - Score: 4.5/10 - Type: behavioral
  5. Handling an underperformer (+ example) - Score: 5/10 - Type: behavioral
  6. How you got into this space / technical background - Score: 6/10 - Type: behavioral
  7. Where in 5–10 years - Score: 4.5/10 - Type: culture fit
- **Overall assessment:** adequate (5.5/10). Advanced.
- **Signals:** Probed speed and deciding with incomplete data (3 questions); wanted examples, not principles.
- **Key improvement:** Tell stories, not mechanics. Bring in the Amazon B2B payments background.
- **Next round prediction:** Co-founder Chris on prioritization and technical judgment (confirmed).

### 2026-09-28 - Ascerta - Principal Product Manager - AI Startup - Round 1
- **Interviewer:** Darren Hogben, recruiter
- **Format:** Screen: fit, AI agent deep dive, hardest problem
- **Questions asked (inferred; interviewer audio missing):**
  1. Background and fit - Score: 6.5/10 - Type: behavioral
  2. Agentic product you built - Score: 7/10 - Type: technical / AI
  3. Hardest customer problem - Score: 7/10 - Type: behavioral (0→1)
  4. Explainability follow-up - Score: 7/10 - Type: technical / AI
  5. Customer engagement - Score: 7/10 - Type: behavioral
- **Overall assessment:** adequate (7/10, low confidence)
- **Signals:** Not enough audio.
- **Key improvement:** Metric discipline: said 6 → 2 months (canonical 6 → 4) and ">80% adopted" (canonical 70%).
- **Outcome:** Pending. The recruiter said the team hasn't reviewed the recording yet.
- **Next round prediction:** Unknown. Expect deep dives on AI unit economics (K14).

### 2026-09-28 - LawnStarter - Principal PM, Service Experience - Round 1 (recruiter screen)
- **Interviewer:** Kate Acuzar, recruiter
- **Format:** Recruiter screen with AI product depth
- **Questions asked:**
  1. Where are you in your career / fit - Score: 5/10 - Type: behavioral (TMAY)
  2. Product superpowers + example - Score: 6/10 - Type: behavioral
  3. Area to improve - Score: 4/10 - Type: behavioral (weakness)
  4. AI product shipped: good enough to ship, impact - Score: 7/10 - Type: technical / AI
  5. Quality slip example - Score: 8/10 - Type: technical / AI
  6. AI decision with unclear trade-offs - Score: 6/10 - Type: behavioral (trade-off)
  7. Building an AI-native product org - Score: 5/10 - Type: product strategy
  8. Changed a leader's mind with evidence - Score: 6/10 - Type: behavioral
  9. Reasons for last 3 moves - Score: 5/10 - Type: behavioral
  10. References + rating - Score: 7/10 - Type: logistics
  11. Comp expectations - Score: 5/10 - Type: comp
  12. Sponsorship - Score: 10/10 - Type: logistics
- **Overall assessment:** adequate (6/10). Endorsed to the hiring manager, then **rejected** at hiring-manager review. No feedback given. Possible factors from the transcript (hypotheses, not stated reasons): long answers, a weak weakness answer (4/10), and an AI-native org answer framed around cutting engineers.
- **Signals:** 4 AI-quality questions (the role is eval infrastructure). Possible resume mismatch on Kate's side.
- **Key improvement:** State launch gates; answer the weakness question with your prepared answer; keep answers under 200 words.
- **Next round prediction:** CEO Steve chronological walkthrough → leadership competency loop → references.

### ~2024 - Stripe - PM (role not recorded) - initial screening, rejected
- **Source:** "Stripe Behavioral Interview preparation.docx" in Drive (last modified 2024-06-12), section "Stripe feedback call". Logged 2026-10-24.
- **Rounds:** recruiter prep call, then the initial screening: Product Sense and a behavioral (Users First) interview.
- **Feedback from Stripe:**
  - *Product Sense:* needed a clearer framework for which users to prioritize; didn't distinguish types of users and types of restaurants (the case was restaurant-focused); lacked novel solutions.
  - *Users First:* struggled to articulate goals; took a while to synthesize notes, but showed ability to go deep; OK signal on serving internal stakeholders and partners, but wanted more examples with **external** users; explained well.
- **Outcome:** rejected after the initial screening (Product Sense + behavioral), confirmed by user 2026-10-24. Role not recorded.
- **Implications for the 2026 Radar process:** lead with external-user stories (SPORT/MOQ sellers, PBI business customers, Keystone enterprise clients, SPORT APIs for outside developers) over internal-platform ones; open product answers by naming the user segments and how you'll prioritize them, then state the goal before solutions. Expect "Have you interviewed with us before?" and have the re-application answer ready.

### Mock Session — Recruiter screen (Stripe Radar, question by question) — 2026-10-26
Questions: 9 (8 + bonus end-to-end story; several rewritten mid-session) | Avg Score (best attempt): 6.4/10
| Question | Structure | Specificity | Skill Demo | Overall |
|----------|-----------|-------------|------------|---------|
| Q1: Tell me about yourself | 8 | 6 | 6 | 6 |
| Q2: Why Stripe | 8 | 4 | 5 | 4 |
| Q3: Why are you looking | 8 | 7 | 7 | 7 (8 polished) |
| Q4: Level | 8 | 6 | 7 | 6 spoken / 9 written |
| Q5: Compensation (4 runs: 5, 5, 8, 5) | 8 | 8 | 9 | 8 |
| Q6: Weakness | 9 | 8 | 8 | 8 |
| Q7: What's changed since 2024 | 8 | 7 | 9 | 7 |
| Q8: Which role | 8 | 4 | 7 | 4 |
| Bonus: end-to-end fraud STAR (4 → 7 → 8) | 9 | 8 | 9 | 8 |
Patterns: Judgment and decisions come through strongly (precision trade-off, planners first, holding L4 and past pay). Numbers drift off-script: fraud result said as $15M ×2 and $8M before landing on $18M; "exposure" said as "losses"; 600% said as 200%; "SVP-level goals" and "entire Payments org" crept back. Hedging in comp ("I believe," "per my understanding," "I was hoping"). Scripted comp answers scored 8; improvised scored 5.

### Mock Session — Recruiter screen (Stripe Radar, full end-to-end call) — 2026-10-26
Questions: 12 | Avg Score: 6.5/10
| Question | Structure | Specificity | Skill Demo | Overall |
|----------|-----------|-------------|------------|---------|
| Q1: Background (TMAY) | 8 | 7 | 7 | 7 |
| Q2: Why Stripe | 8 | 5 | 5 | 5 |
| Q3: Why are you looking | 6 | 4 | 5 | 4 |
| Q4: Still at Keystone? | — | — | — | 1 → 8 after correction |
| Q5: Level | 8 | 6 | 7 | 6 |
| Q6: Comp (ask + range) | 8 | 7 | 7 | 7 |
| Q7: Which role | 8 | 5 | 6 | 5 |
| Q8: Past pay | 8 | 8 | 8 | 8 |
| Q9: Logistics | 8 | 8 | 8 | 8 |
| Q10: Candidate questions | 7 | 8 | 7 | 7 |
| Q11: Built the models? | 9 | 9 | 9 | 9 |
Patterns: Answers rewritten earlier in the day reverted under live flow (Why looking back to "at scale like Amazon"; level back to "S-team level goals"). New paraphrase slips: "$8 billion credit business," "500 customers," "drove $18M of fraud losses." First said "still working at Keystone" (left March 2026); corrected to the true answer. Strengths: calm, warm, honest, firm on level and past pay, clear model-ownership answer. Asked about the process right after the recruiter explained it.
