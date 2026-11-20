# Stripe Radar HM interview debrief (11/17, Kadry, 44 min)
Source: Otter transcript "Zoom Interviews with Stripe - Shifia (Product Manager, Radar)" (id Ty96TrFuznYTZfV8nlh9XTtBHoA). Graded with the Three Laws (structure, specificity, skill demonstration) and the Addressing-Weaknesses framework. Quotes are from the transcript.

## What happened
| Time | Segment | Grade |
|---|---|---|
| 0:03 | Intro (about 1.5 min) | Good: Keystone $7.5M ARR, PBI $71M, fraud $18M. Did not tie to the three Radar roles or name any gap |
| 0:04 | "What do you know about Radar?" | **Weak** (see miss 1) |
| 0:05 | Kadry describes 3 roles; asks which speaks to you | **Never answered** (miss 2) |
| 0:08 | Q1: simplified a complex system (TRACE) | Medium: strong content, unclear delivery, 2 follow-ups only half answered |
| 0:27 | Q2: problem nobody wanted (MLOps / SR 11-7) | Medium: good story, thin result and motive |
| 0:37 | Your questions | Good, but no closing pitch |

## Where you lost ground (ranked)
1. **You did not know Radar.** You said the role was "fraud prevention... the API centric role" and described identifying fraud patterns. Kadry corrected you at once: "abuse prevention, not fraud prevention, not typical payment fraud." You named no Radar feature (ML scores, rules, tiers, review tools). Kadry's team runs three real roles, so product knowledge was the cheapest thing to fix.
2. **You never said which of his three roles you want.** At 0:05 he said "I'd love to learn more about which one of them speaks more to you and why." You replied "we can leave questions towards the end," and it never came back. At the end you asked about his 6–12 month goals but still never picked one. A hiring manager reads that as no point of view.
3. **You used the wrong stories.** Neither story was fraud. You have an exact match: Amazon Business fraud, where rings bulk-registered business accounts (registration velocity, new domains, bot behavior) and you caught it upstream, $18M saved. That is his "account and policy abuse" role. You mentioned it for 10 seconds in the intro and never used it. For Q2, "nobody wanted it" could also have been the fraud work (new to fraud, new to regulation).
4. **Q1 follow-ups were partly unanswered.**
   - He asked what alternatives you considered. You did not name one.
   - He asked what led you to believe attribution was the root cause. You described the siloed teams but gave no data or evidence.
   - He interrupted to ask the difference between item and package cost. That means the setup was not clear: you led with "50+ drivers, 14 data sources" before the one-sentence problem.
   - You said "simplified" but mostly described the complexity. The simplification was the 3-4 recommendation actions the seller saw, which came last.
5. **Numbers.** "30,000 sellers" and "one and a half years" did not appear in your TRACE fact sheet (adherence numbers were blank there). Confirm the basis before quoting again. $40M is canonical. You also said your DS partner "reviewed results" and "testing with initial users" without a single customer reaction.
6. **Q2 result was thin.** The 4 weeks of monitoring setup per model was the hook, but you never said what it dropped to. The motive was "I found it interesting" and "to build trust." The risk-vs-scientist conflict you named was never resolved on air. "Millions of dollars" is vague.
7. **You missed the AI opening.** Kadry said agentic operations can investigate fraud root causes on behalf of the user. Your Forecasting Agent (root-cause investigation, autonomy tiers, evals) is exactly that. You did not offer it.
8. **No closing.** When he asked "anything else on my experience", you had no summary line ("I'd want the abuse role because...").

Also: the HM did not run the three-competency format Colleen described (stay curious / craft / AI fluency). It was two behavioral questions plus role discussion. Prepare for both formats.

## Why you may have been passed over
Inference, not stated by Stripe: Kadry liked you but the stories were not close to his problem, you gave no preference, and you showed little Radar knowledge, while other candidates in process likely did.

## Fixes to carry to the Dispute Prevention call (Ishan Virk)
1. Spend 2 hours on the product first. Be able to say, unprompted, the three dispute layers and what you would build.
2. Pick a role/area before you are asked and say why in one sentence tied to a story.
3. Lead with fraud (C1) and Moody's/pricing stories; open each with one sentence of problem, then the stakes, then the decision.
4. For every story, prepare "alternatives considered" (2 named options and why not) and "how I knew it was the root cause" (one data point).
5. Put a number and a before/after on every result; mark the open slots in the library.
6. Keep the AI example (Forecasting Agent) ready for any "agent investigates for the user" mention.
7. Prepare a 20-second closing: "I'd want X because of Y story; here is how I'd start."
