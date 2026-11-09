# Stripe Radar: What to Study Before the Hiring Manager Call

Written: 2026-11-09 · Plan: `2026-11-09-stripe-radar-hiring-manager-prep.md`
Time: about 7 hours over 4–5 days.

**Read this first.** I couldn't open Stripe's website or documentation from this session (the host doesn't load), so I haven't verified any Stripe-specific detail below. The payments content is standard industry knowledge. The Radar details come from your recruiter-screen prep doc (2026-10-24) and from my general knowledge of Radar. Items marked **[VERIFY]** are ones to check on Stripe's own page before you say them aloud. If a page title below doesn't match, search the docs for the topic.

Goal for each block: you can say the "exact content" aloud, and you pass the self-test.

---

## Block 1: Payments 101 (45 minutes)

**Where:** Stripe's docs introduction to payments, or any card-payments explainer; then make your own one-page diagram.

**Exact content to learn:**

*The parties*
- **Cardholder:** the customer. **Merchant:** the business selling. **Payment service provider (PSP):** Stripe, which collects the card details securely and routes the payment. **Acquirer:** the merchant's bank side that sends the payment into the card network. **Card network:** Visa, Mastercard, etc., which carries the message and sets rules. **Issuer:** the cardholder's bank, which decides to approve or decline.

*The flow of one card payment*
1. **Checkout:** the customer enters card details; the PSP turns them into a token.
2. **Authorization:** merchant → PSP → acquirer → network → issuer. The issuer checks funds, its own fraud signals, and may ask for authentication (3D Secure). It returns approve or decline in seconds.
3. **Capture:** the merchant confirms it wants the money (often immediately).
4. **Clearing and settlement:** transactions are batched; money moves from issuer to merchant, minus fees, usually within days.
5. **After the payment:** refunds and disputes.

*Terms you must be able to define in one sentence*
- **Authorization rate:** approved payments divided by attempted payments. Fraud controls that block too much lower it.
- **Decline reasons:** insufficient funds, issuer decline, suspected fraud.
- **3D Secure (3DS):** an extra authentication step (a challenge) for the cardholder. It adds friction but can shift liability for fraud-related disputes to the issuer. **[VERIFY the exact liability rules.]**
- **Chargeback / dispute:** the cardholder disputes a charge with the issuer; the merchant is debited, pays a dispute fee, and can submit evidence. **Early fraud warning:** an issuer's signal that a charge may be fraud, before a dispute, which lets a merchant refund and avoid the dispute. **[VERIFY the lifecycle and fee details.]**
- **Card-not-present (CNP):** online payments; fraud losses typically land on the merchant.

*Fraud and abuse types (say what each is and how it behaves)*
- **Stolen card use:** a thief buys with a stolen card number.
- **Card testing:** many small authorizations to find which stolen cards still work.
- **Account takeover:** a thief logs into a real customer's account.
- **Friendly fraud:** the real cardholder disputes a legitimate purchase.
- **Free-trial abuse and multi-accounting:** one person creates many accounts to get repeated trials or promos.
- **Bot sign-ups:** automated registration at scale. This is the closest to your BFS work.
- **Refund and promo abuse.**
- **AI-agent abuse:** automated buyers that may be legitimate or fraudulent. **[VERIFY how Stripe describes it.]**

*The friction tools (the response side)*
- Block, allow, step up with 3DS, send to manual review, ask for identity verification, limit or delay.

**Self-test (answer aloud, 90 seconds each):** (1) Explain what happens when a customer pays by card, from tap to settlement. (2) Where in that flow can fraud be stopped, and what does each stop cost a good customer? (3) What is the difference between a decline, a block and a dispute?

---

## Block 2: Radar as a product (60–75 minutes)

**Where:** Stripe's Radar product page; Radar documentation (overview, rules, risk evaluation, reviews, lists, testing); Stripe's Sessions 2026 Radar announcements. **[VERIFY page titles and current content.]**

**Exact content to learn:**

*What it is.* Stripe's fraud-prevention product. Machine learning models trained on data from Stripe's global network evaluate each payment and give a risk assessment; businesses can add their own rules and review queues. A dashboard and APIs let them control it.

*The pieces to be able to name* **[VERIFY each]:**
- **Risk score and risk level** on every payment (for example, normal, elevated, highest), and the **default rules** that act on them (for example, block at the highest level, send elevated to review).
- **Rules:** conditions on attributes of the payment (amount, country, email, IP, card details, risk score or level) that **block, allow, review or request 3D Secure**.
- **Block and allow lists** (values like emails, IPs, card fingerprints).
- **Manual review queue** for payments a rule or the model flags.
- **Radar for Fraud Teams:** the higher tier for custom rules, more signals, and tools for analysts. **[VERIFY what's in each tier.]**
- **Radar's data signals:** device and behavior signals collected through Stripe.js, plus network-wide history of a card or email across Stripe businesses.

*What's new in 2026 (from your recruiter-screen prep doc, 2026-10-24; Stripe-reported, so say "Stripe says")* **[VERIFY against Stripe's announcement]:**
- Expansion to **account-level fraud**, including **multi-account abuse** (Stripe says more than 1 in 6 sign-ups at AI companies on its network are linked to it).
- **Free-trial abuse prevention** (generally available). **Bot abuse prevention**, including telling legitimate AI agents from fraudulent bots (in preview).
- Signals for disputes, multi-account and account-sharing abuse, merchant risk, and Issuing authorization fraud.
- Risk data for payments **on and off Stripe** (Stripe Signals).
- **New packaging:** four tiers (Lite, Standard, Plus, Pro) from Jan 22, 2027; Lite stays free on standard Stripe pricing (basic card fraud and card testing); custom rules, backtesting and adaptive 3D Secure begin at Plus; dynamic risk thresholds at Pro. **Don't quote tier prices** (they came from third-party blogs).
- From **Oct 21, 2026**, Radar pricing applies to **all supported payment methods** and **every payment in a subscription**.
- Stripe says Radar blocked $110B in fraud in 2025. **Not confirmed, so don't say:** "token abuse protection" and "help winning disputes."

*Your point of view to prepare (one minute, in your own words).* Where would you focus first, and why? A strong version uses your evidence: account-level abuse before the first transaction (BFS 2.0), graded responses by risk (your tiers), and measuring friction next to detection.

**Self-test:** (1) Explain Radar in 90 seconds to a founder with no fraud team. (2) What does Radar do when a payment is "elevated risk"? (3) Name two things that are new in 2026 and why they matter. (4) What would you build first for account-level abuse, and how would you measure it?

---

## Block 3: The developer side and API principles (45 minutes)

**Where:** Stripe's API reference introduction; docs on idempotent requests, versioning, webhooks, errors and the testing page. **[VERIFY each.]**

**Exact content to learn:**
- **REST and JSON** over HTTPS; **API keys** (and restricted keys) for authentication.
- **Idempotency keys:** retrying a request safely does not create a duplicate payment.
- **Versioning:** the API is versioned by date, so existing integrations keep working when Stripe changes it.
- **Webhooks / events:** Stripe notifies the merchant's system of events (for example, a payment succeeded, a review opened, an early fraud warning). **[VERIFY the event names for Radar.]**
- **Test mode** with test card numbers, so developers can try everything without real money.
- **Where Radar shows up for developers:** the outcome of a payment includes a risk level (and, for some tiers, a risk score), and developers can manage lists and reviews through the API and the dashboard. **[VERIFY the exact fields and what each tier exposes.]**

**Why it matters:** JD2 asks for developer empathy, the technical interview covers API and system design, and the friction log tests API understanding.

**Self-test:** (1) Why do payment APIs need idempotency? (2) Why version by date? (3) What would a developer need from Radar in a payment response to act on it in real time? (4) Explain your checkout credit API (customer, cart value and category in; approval out) in 60 seconds, including the batch vs. real-time decision.

---

## Block 4: Hands-on friction log (90–120 minutes). The most valuable block.

The take-home is a **friction log** (written communication, API understanding, user's-first), graded by the hiring manager. A practice run also gives you real material for "how would you improve developer onboarding?" and Radar questions in the call.

**Steps (test mode only, no real data):**
1. Create a free Stripe account and stay in test mode.
2. Follow a quickstart to accept a payment (Checkout or the embedded payment form) in a language you know.
3. Turn on Radar in test mode and view the default rules. Try a custom rule if your account allows. **[VERIFY what's available.]**
4. Use Stripe's Radar test cards to trigger a block, an elevated-risk review and a highest-risk payment. The test card numbers are on Stripe's testing page. **[VERIFY them there; don't rely on memory.]**
5. Find the payment in the dashboard, open its risk details, and process a review.
6. Set up a webhook and watch the events.

**Log as you go, with a timestamp.** One row per friction point:

| Time | What I was trying to do | What I expected | What happened | How it felt | Severity (1–5) | Suggested fix |
|---|---|---|---|---|---|---|

**Finish with a one-page summary:** your top three problems, why each matters to a business user, and one change you'd make first. Write it in plain, short sentences, user first, with the exact words on the screen when you quote an error.

**Self-test:** can you describe, from memory, the three biggest points where a new developer would get stuck?

---

## Block 5: Metrics and trade-offs vocabulary (30 minutes)

Learn the definitions cold; use your BFS numbers as the example for each.

| Term | Meaning | Your example |
|---|---|---|
| Precision | Of everything flagged, how much was actually fraud | ~99% at BFS launch |
| Recall | Of all fraud, how much was flagged | ~25% for the score alone, with other layers catching the rest |
| False-positive rate | Good customers wrongly flagged | BFS false-positive program, target under half a percent |
| Fraud rate / loss rate | Fraud by count or by amount | ~$18M avoided |
| Dispute rate | Disputes divided by payments | (not your metric; know the definition) |
| Authorization rate | Approved divided by attempted | (know that over-blocking lowers it) |
| Review rate | Share sent to manual review | Up to 15% of orders on some payment methods before BFS |
| Time to detect | How fast a new attack is caught | ~10 days earlier with BFS 2.0 |
| Friction | Good customers stepped up, reviewed or blocked | Your "no single control has to be perfect" principle |

**Self-test:** "Raising the threshold cut false positives by half and missed 10% more fraud. Ship it?" Practice answering with the cost of each error.

---

## Block 6: Competitive context (20 minutes)

**Where:** each vendor's product page, plus one comparison article. **[VERIFY.]**
Names to know: **Sift, Forter, Riskified, Signifyd, Kount (Equifax), Adyen RevenueProtect, PayPal's fraud tools.**
Be able to say in 60 seconds: what a third-party vendor offers that a processor's built-in tool may not (data from several payment providers, specialization), and what Radar offers (Stripe's network data, native integration, one API). Don't claim superiority; show you know the trade-off.

---

## Block 7: Writing and culture (30 minutes)

- Read **two or three Stripe documentation pages** and one **annual letter** (Stripe publishes these on its site). **[VERIFY where.]** Note what makes them clear: user first, concrete example, short sentences, the exact next step.
- Re-read your **BFS PR/FAQ** (or a summary) so you can describe its structure in 30 seconds.
- Learn the mission word for word: Stripe's mission is to **increase the GDP of the internet**.

---

## Block 8: The hiring manager (30 minutes, once you have the name)

- Their path at Stripe and before it; any talks, blog posts or posts about Radar, fraud, payments or developer products.
- Ask **Piyush Rohella** what the Radar team is worried about right now (a referral conversation, not a script).
- Write down two questions that show you read their work.

---

## Suggested schedule (adjust to your date)

| Day | Do |
|---|---|
| 1 | Block 1 (payments) and Block 5 (metrics vocabulary). Fix the number slips in your Drive doc. |
| 2 | Block 2 (Radar) and Block 6. Rewrite Q2 (Why Radar) in your own words. |
| 3 | Block 3 (APIs) and Block 4 (friction log, first half). |
| 4 | Block 4 (friction log, second half and the one-page summary). Block 7. Block 8 if the name arrives. |
| 5 | Full mock hiring-manager conversation with `/mock-interview`; rerun the weakest answers. Night before: numbers card and questions only. |

## Final check (say each aloud without notes)
1. A card payment, tap to settlement, in 90 seconds.
2. What Radar is, what's new, and where you'd focus.
3. Your account-level fraud work in one sentence, and how it maps to Radar.
4. Three friction points from your hands-on run.
5. Your checkout API decision and what real time would have cost.
