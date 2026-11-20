# Dispute Prevention HM prep: addendum (2026-11-20)
Adds to `2026-11-20-stripe-dispute-prevention-hm-prep.md`. Sources: the Cindy Fashingbauer / Ishan Virk transcript you pasted (numbers as stated there), your library, general industry knowledge (marked [GENERAL] or [VERIFY]).

## 1. What Stripe offers in disputes (per the transcript)
Three layers:
1. **Deflection (before a dispute exists):** alerts and pre-dispute resolution (Verifi / Ethoca-type programs), Radar early-fraud-warning rules, purchase recognition. [VERIFY product names]
2. **Resolution (a dispute is filed):** Visa Compelling Evidence 3.0 / Order Insight style evidence to resolve before it becomes a chargeback.
3. **Representment:** Smart Disputes (automated evidence and response; priced at about 30% of recovered amount per the transcript).
Metrics he cited: 2.4%, 11%, 60%, 95%, 11x, $1.3B, $5B, 18%, 3x, 30% fee, 540 days, 29% growth, $425 all-in cost per dispute. Visa monitoring threshold moving to 1.5% from 2.2% (VAMP). Re-check each against the video before quoting; do not quote any you cannot place.

## 2. Is "Dispute Prevention" one product or the suite?
Inference: it is a **team and charter**, not one SKU. The transcript describes prevention as layers 1 and 2 (several tools). Smart Disputes sits in layer 3, and the JD lets the role grow into it. In the interview, ask: "Is Dispute Prevention the deflection and resolution layers, and how does the team relate to Smart Disputes?"

## 3. Biggest weaknesses (Addressing-Weaknesses framework)
Framework: name 2-3 perceived gaps, address them early, make this role the natural next step, under 2 minutes, only claim what you can discuss for 5 minutes.
| Gap the HM will see | Line to say (only true parts) | Evidence |
|---|---|---|
| No disputes/payments domain depth | "I haven't worked in disputes. I've spent this week on the lifecycle, reason codes and the three layers, and here is how I'd think about the first 90 days." | Study plan below, then show you can use terms correctly |
| No card-network negotiation | "I haven't negotiated with Visa or Mastercard. I have run vendor and data-partner evaluations and contracts: Moody's (~$2.8M 3-yr), data contracts/SLAs on TRACE, pricing K32." | Library K32, TRACE, Moody's |
| No formal P&L ownership | "I've owned economic profit on PBI and set pricing on Keystone; I haven't carried a P&L line." | PBI economic profit, K32 |
Do not claim network relationships or a P&L you did not hold.

## 4. Card networks, negotiation, P&L [GENERAL, not Stripe internals]
- **Card networks:** Visa, Mastercard, American Express, Discover, JCB, UnionPay (plus their programs and acquired vendors: Verifi under Visa, Ethoca under Mastercard).
- **What negotiation involves:** access to network programs and data (pre-dispute alerts, evidence sharing), fees and who pays them, dispute-rule and threshold changes (monitoring programs), liability for platform models, and timelines/SLAs. Leverage is volume and a credible case that a program lowers network losses. PMs usually prepare the business case and requirements; partnerships/legal lead the contract. Ask Ishan who leads it.
- **Owning P&L here:** revenue (per-resolution fees, Smart Disputes share, adoption among users), costs (network and vendor fees, waived fees, ML and ops), margin, and the indirect value of protecting payment volume. Ask what metrics the role is held to.

## 5. Domain study plan: exact items (about 6 hours across 3 days)
Day 1 (2h): lifecycle terms (cardholder, issuer, network, acquirer, representment, pre-arbitration, arbitration); the four dispute types (true fraud, friendly fraud, purchase confusion, merchant issue); reason codes to recognize: Visa 10.4, 13.1, 13.2, 13.3, 13.6, 13.7; Mastercard 4837, 4853, 4863 [VERIFY]. Self-test: explain what happens to $100 from complaint to resolution, and who pays fees.
Day 2 (2h): monitoring programs (Visa VAMP, Mastercard excessive chargeback), Verifi RDR and Order Insight, Ethoca alerts, Compelling Evidence 3.0, Radar EFW rules, Smart Disputes. Read Stripe's dispute docs pages yourself (I cannot reach docs.stripe.com from here; the network blocks it). Self-test: draw the three layers and place each tool.
Day 3 (2h): transcript numbers memorized (section 1), platform liability (Connect: merchant of record, fee payer), card vs LPM disputes, agentic-commerce dispute question. Self-test: 2-minute answer to "how would you reduce disputes by 20%?"

## 6. Story map for this role
| Likely question | Story | Expand? |
|---|---|---|
| Stay curious: unfamiliar domain | C1, C2 | Add a line on how you learned a new domain fast |
| Craft and beauty | C4 (API catalog), C6 (TRACE) | Add a concrete detail you refused to ship without (open slot) |
| AI fluency | C7, C8 | Fine; fill open confirmations |
| Pushed boundaries | C9 (K1 + K12) | **Draft this: Stripe named it** |
| Risk vs friction | A24 detection vs friction | Add as new, ties directly to disputes |
| Partner/vendor and commercials | Moody's, K32, K34 | New: tell it as a commercial-negotiation story |
| Prove value without full data | PBI economic profit | New: P&L-adjacent |
| Scrappy demo | K16 | Optional |

## 7. Your story doc vs the feedback
I could not re-read the Drive doc in this pass. Evidence in hand: Colleen's 11/09 note that product sense was strong but could use "more novel or unusual solutions", the 11/19 decline ("stronger candidates in process"), and the HM format (behavioral, humble yet decisive). Likely missing aspects: (a) a novel-solution moment inside each story, (b) the "decisive" beat: the call you made when data was incomplete, (c) domain-adjacent risk/fraud framing, (d) explicit "who I brought along". Say if you want me to check each story in the Drive doc against these four.

## 8. Radar HM transcript
Not found in Otter (searches for Stripe, Radar, Kadry, Cadre, fraud, interview, Colleen, your name after 11/10 returned only the 11/09 Colleen call and an unrelated cohort session). I cannot say where you fell short without it.
