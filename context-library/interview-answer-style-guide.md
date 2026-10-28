# Interview Answer Style Guide

Last updated: 2026-10-28
Source: lessons from the Coinbase recruiter-screen prep (2026-10-27), where answers took many rounds to finalize, plus the Stripe Radar mocks (2026-10-26). `/interview-prep` and `/mock-interview` apply every rule here to the first draft. Change a rule here, not in a single prep doc.

## Before drafting anything
1. **Read what already exists:** the most recent prep files in `briefings/` and `interview-prep/` (reuse answers that scored 8+), `interview-history.md` (weak question types and past scores), `qa-master.md` (delivery rules and prepared scripts), and this guide.
2. **Ask one batch of questions** before the first draft, not one at a time:
   - Your strategy for this call (e.g., "position as a fit" vs. "lead with my strengths and be upfront about the gap")
   - Which stories to feature (e.g., ML Ops platform vs. data platform)
   - Answer format you want (default below)
   - Facts only you know (familiarity with the company's product, unconfirmed numbers)
3. **Build a numbers card** from the canonical metrics in `experience-library.md` and put it at the top of the prep doc.

## Drafting rules
- **Use the framework for each question** (`insider-data/behavioral-interview-frameworks.md`):
  - Tell me about yourself: Addressing-Weaknesses Framework. **Present → Past (selective) → weakness head-on → Future.** Never chronological.
  - Why here: mission + personal connection, role fit, a specific culture fact.
  - Why this job / what are you looking for: lead with where you're going; tie to the role's responsibilities.
  - End-to-end projects: accomplishment arc (challenge → struggle → triumph).
  - Technical decisions: tradeoff → decision → result, each with a number.
- **Default answer format for projects:** Situation → Stakes → Key decisions (not features) → The hard part → Results. Frame actions as decisions with a tradeoff ("I chose X over Y because Z").
- **Close the loop:** if the situation names a problem (e.g., deployment time), the results must say what happened to it.
- **One message per story; don't repeat the same example across answers in one call** (e.g., don't use the Keystone infrastructure-as-code example in both "Why us" and "What are you looking for").
- **Reuse proven structures:** "Two things I've done best: platform strategy for technical teams, and building at scale. Keystone gave me the first; at Amazon every role was at scale, for example…" (scored 8.5–9/10).

## Voice and length
- **Your voice, not an AI's.** Start from your own wording; edit only what's needed. Short spoken sentences, one idea each.
- **Banned:** phrases like "the hard part moves," "lands on infrastructure," "high-trust platform," "operating model," "leverage," "robust," "streamline." No stacked parentheticals.
- **Under 200 words** per answer (pitch ~200, others 60–150). Give a short version for recruiter calls.
- **One strong draft, not three options.** Offer alternatives only when asked.
- **Two strong points beat three weak ones.**
- **Don't end the pitch on a negative.** State a gap neutrally ("one layer above core infrastructure"); say "I haven't owned X" only when asked, and once.

## Accuracy rules (the mistakes that kept recurring)
- Use only canonical numbers, attached to the right product:
  - Keystone platform deployment **6 → 4 months** ("helped cut"); data platform deployment **3 months → 3 weeks**; data platform onboarding **2 months → 2 weeks**. Don't mix them.
  - Amazon ML Ops: deployment **−40%**; models **50+ → 100+** with **flat headcount** (not "no engineers," not "no science effort"); monitoring coverage **30 → all 100** (a different metric); **5** new teams; "scientists rated it **8+ out of 10**" (not "NPS 8").
  - Agent: **70%** recommendation acceptance at launch (not >80%); **30% → 80%** is action acceptance after tiered autonomy (name it if used); run cost **~30%** lower.
  - SMB credit: **approval rates** 4% → 15%.
- Don't say "3–4 months" next to "−40%" (the math invites questions); say "months of engineering effort."
- Don't call a former employer non-compliant; say "no consistent monitoring or governance, which was a regulatory risk."
- Don't say you "led" the CEO/CTO; say "set product direction with the CEO and CTO."
- Claim "launched" only for what shipped; say "designed" otherwise.
- Learn the company's mission word for word (e.g., Coinbase: "increase economic freedom").

## Before showing a draft
Self-check every answer and fix it first:
- Three Laws (structure, specificity, skill demonstration) at 8+ each
- Word count within the target
- Every number checked against canonical metrics
- Every detail is something you can talk about for 5 minutes (framework Step 5)
- Reads like you speaking, not a document
