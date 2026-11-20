# Stripe Dispute Prevention PM: role primer and hiring manager prep

Built 2026-11-20 from the job description Colleen Barnes sent (Payments Intelligence org, Disputes team, Dispute Prevention), your experience library and story-coverage grid, and public web sources. **Stripe's own docs were not reachable from this session** (docs.stripe.com is blocked), so product details below come from web-search summaries and third-party pages. Items marked **[VERIFY]** must be checked on Stripe's current pages before you rely on them in a conversation. The hiring manager is Ishan Virk (per Colleen's email).

---

## 1. Disputes in plain language

**What a dispute is.** A cardholder tells their bank (the issuer) that a charge is wrong. The issuer pulls the money back from the merchant's bank (the acquirer), and the merchant, or their processor such as Stripe, can respond with evidence. The cardholder's claim is recorded as a reason code. The money moves immediately; the merchant then has to prove the charge was valid.

**The usual path** (names vary by card network; sources are vendor guides, **[VERIFY]** against the network rules):
1. **Cardholder disputes** the charge with the issuer.
2. **Chargeback:** the network routes it to the acquirer with a reason code; the merchant is debited.
3. **Representment:** the merchant submits evidence (receipts, delivery proof, prior purchases, communications).
4. **Issuer decides:** accept, reject, or escalate (pre-arbitration).
5. **Arbitration** by the card network, which carries high fees and is rarely worth it for small amounts.

**Why people dispute (three very different problems):**
| Type | What it is | Who can fix it |
|---|---|---|
| **True fraud** | A stolen card was used; the cardholder never made the purchase | Fraud prevention (this is Radar's territory) |
| **Friendly fraud** | The real cardholder disputes a legitimate purchase, sometimes on purpose | Evidence, network rules, behavior signals |
| **Purchase confusion** | The cardholder doesn't recognize the charge (unclear name, a subscription renewal, a family member's purchase) | Clearer descriptors, receipts, notifications, issuer-facing data |
| **Merchant or service issues** | Item not received, not as described, cancelled subscription | The merchant, via customer service and refunds |

**Why it matters to the business:** each dispute costs the sale, a fee, and operational effort, and too many disputes can get a merchant placed in a **card-network monitoring program** with fines or even loss of the ability to accept cards. The JD's phrases "maintain healthy dispute rates" and "stay in good standing with payment networks" refer to that.

**Monitoring programs (illustrative; thresholds change, VERIFY):** Visa's program is called VAMP. Search summaries say the merchant "excessive" threshold was set at a higher level at first and moves to **1.5% from April 2026**, with a minimum volume before a merchant is flagged. Mastercard has an equivalent excessive-chargeback program. Don't quote thresholds in the interview unless you've confirmed the current numbers.

## 2. What Stripe offers in this space (what the JD describes)

From search summaries of Stripe's documentation and third-party pages. **[VERIFY all of these on Stripe's current pages]**
- **Before a dispute happens (prevention):**
  - **Visa Rapid Dispute Resolution (via Verifi):** merchants set rules so certain disputes are resolved automatically for a fee, before they count as chargebacks (the docs example is resolving potential fraud disputes under a set amount).
  - **Mastercard alerts (Ethoca):** rules that automatically resolve would-be chargebacks.
  - **Compelling Evidence 3.0 / Order Insight (Visa):** sending the issuer data about earlier successful transactions by the same cardholder so a dispute is blocked or defended. It needs prior transaction history.
  - **Radar rules** such as an early-fraud-warning rule that blocks payments likely to draw early fraud warnings.
- **After a dispute is filed:** **Smart Disputes** (automated evidence preparation and submission) **[VERIFY: described by a third-party blog, not Stripe's documentation]**.
- **Purchase recognition:** helping cardholders recognize a purchase (statement descriptor, receipts, notifications) so confused customers don't dispute.

The JD's vision: make these capabilities "available to businesses of every size, including large platforms and businesses that process payments across multiple providers," moving toward "an automated, hands-off approach."

## 3. The role in one paragraph
You would be the product owner (the JD says the GM) of Dispute Prevention: set the vision and roadmap, own the business performance (P&L, pricing, commercial terms), partner with engineering and data science on ML-powered automation and forecast models, and build relationships with card networks, vendors and partners. Two growth directions: new customer types (platforms, multi-processor merchants, new markets) and automation ("hands-off"), with room to expand into Smart Disputes and LLM-powered capabilities.

**What is different from Radar:** Radar decides, in real time, whether to let a payment through. Dispute Prevention works around the edges of a payment: it reduces disputes that happen *anyway*, resolves them early, and recovers revenue. It is also more **commercial and partner-driven** (network programs, vendors, pricing) than a pure ML product.

## 4. JD vs. your evidence
| JD requirement | Your evidence | Strength |
|---|---|---|
| 8+ years PM, B2B | 11+ years; enterprise (Keystone) and B2B payments (Amazon Business) | Strong |
| Analytical, SQL | K33 (SQL in Athena and Glue); PBI model and economic-profit analysis; TRACE | Strong |
| Scrappy, 0 to 1 | PBI 2.0 (0 to 1), Keystone consulting to product (K1), Business Fraud Score | Strong |
| Commercial and business acumen | Pricing and packaging (K32); economic profit as the decision rule (PBI); managed service vs. SaaS (K12) | Strong |
| Cross-functional leadership with B2B sales (discovery, technical evaluation, commercialization) | K34 (demo, proof of concept, pricing with the sales leader); flagship client deployment (K22) | Strong |
| Dashboard and API products | API catalog and release standard (C4, K29); PBI checkout API; TRACE through Seller Central APIs | Strong |
| Pricing and monetization models for B2B | K32 (modular subscriptions; rejected usage-based and percentage-of-savings pricing) | Strong, and relevant: a dispute product could be priced per resolution or as a share of recovered revenue |
| Technical fluency: APIs, architecture, integrations | Batch vs. live checkout design; native schema decision; microservices vs. monolith (K13) | Strong |
| Communication; distilling complexity | TRACE (C6), C4 | Strong |
| **Preferred:** fraud, risk or banking products | Business Fraud Score; PBI credit risk | Strong |
| **Preferred:** developer platforms and integration partners; high-stakes external relationships | K29 and K30 (client IT relationships); SPORT partner teams (3 integrated); TRACE data owners; Moody's vendor evaluation (from your notes) | Medium to strong |
| **Responsibility:** relationships with payment networks, vendors and partners; negotiate commercials | Closest: Moody's vendor evaluation (about $2.8M three-year cost, match rates), partner teams, client IT. **No card-network experience.** | **Gap** |
| **Responsibility:** own P&L | Owned an S-team goal and economic profit for PBI 2.0; pricing for Keystone. Not a formal P&L owner. | **Partial** |
| **Domain:** disputes and chargebacks | None directly; closest is fraud and false-positive trade-offs | **Gap** |

## 5. Gap lines (say them once, early, neutrally)
- **Disputes domain:** "My fraud work was at the account level, fake businesses and bot sign-ups, not card disputes. The core trade-off is the same: stopping the loss without adding friction for good customers. I've spent the past days learning the dispute lifecycle and Stripe's prevention tools, and I'd rather learn the rest of it from Ishan." (Say the learning sentence only after you've done the reading in section 7.)
- **Networks and commercials:** "I haven't negotiated with card networks. What I have done is evaluate and integrate an external data vendor, set data contracts and SLAs with upstream owners, and set pricing for an enterprise product. I'd expect to learn the network side quickly by pairing with the partnerships team."
- **P&L:** "I've owned the economic-profit logic of a credit product and set pricing for Keystone's enterprise offer; this role would be my first formal P&L."

## 6. How the hiring manager call may differ from the Radar one
The Radar call was competency-based (Stripe told you: curious, craft and beauty, AI fluency). Expect the same competency flavor from Stripe, **plus** role-specific probing here: product vision and strategy for disputes, metrics, partner and network thinking, pricing and commercial judgment. Ask Colleen whether it's the same format. Questions you may get, with the story that fits:

| Likely question | Story or approach |
|---|---|
| Walk me through your background and why Dispute Prevention | Your intro plus the common thread: reducing loss without hurting good customers (BFS, PBI) |
| Why Stripe, why payments | Your prepared answer (Why Stripe is in your doc) |
| How would you reduce a merchant's dispute rate? | Framework in section 8 |
| How would you price Dispute Prevention? | K32 pricing logic; options in section 8 |
| How would you expand to platforms and businesses that use several processors? | Section 8 (partnership and data-sharing questions) |
| Tell me about a time you dove into a problem (curiosity) | C1 (BFS arc) |
| A time you learned a new domain | C2 (credit, lending and regulation via MDLC) |
| Established process into something new | C3 (PBI credit decisioning) |
| Above and beyond for users | C4 (API catalog; developers are users) |
| Iterated on something incomplete | C5 (forecast platform) |
| Complex made simple | C6 (TRACE) |
| AI you built; how you use AI daily | C7, C8 |
| Pushed boundaries, brought others along (murky) | C9 (parked: draft it, or use C1 as a stopgap) |
| How do you work with partners and vendors? | K30, SPORT, Moody's evaluation, TRACE data contracts |
| A time you owned business performance | PBI economic profit; Keystone pricing and ARR |

## 7. Domain study plan (about 3 hours total)
1. **How a card payment becomes a dispute (45 min):** authorization, settlement, chargeback, representment. Read a neutral overview and one network's dispute guide. Be able to explain it in 90 seconds.
2. **Dispute prevention tools (45 min):** Verifi RDR, Ethoca alerts, Compelling Evidence 3.0 / Order Insight, Radar early-fraud-warning rules. **Read Stripe's current dispute pages** (docs.stripe.com/disputes), which I couldn't fetch. Write down three product limits for each (cost, eligibility, what it doesn't cover).
3. **Network monitoring programs (30 min):** why dispute rate thresholds matter and what happens in a program. Confirm the current Visa and Mastercard thresholds from primary sources before quoting any.
4. **Types of disputes (30 min):** fraud, friendly fraud, purchase confusion, merchant issues, and which tools address which.
5. **Competitors (30 min):** how other processors and specialist dispute vendors position this (for example Adyen, PayPal, Chargeflow, Chargebacks911). Note their pricing models.

## 8. How to think about product questions (frameworks to practice)
**A. "How would you reduce disputes for a merchant?"**
1. Segment disputes by type (true fraud, friendly fraud, purchase confusion, merchant issue) and by reason code. Different causes need different tools.
2. Prevent: fraud screening (Radar), clearer descriptors and receipts, pre-dispute alerts and automatic resolution, data sharing to issuers.
3. Resolve early: automatic responses within rules the merchant controls (amount thresholds, product types).
4. Recover: automated evidence submission; track win rate.
5. Measure all of it: dispute rate, prevented disputes, win rate, recovered revenue, false positives (good orders blocked or refunded), cost per case.

**B. "How would you price it?"** Options to compare, each with a trade-off: per-resolution fee; a percentage of recovered revenue; a subscription tier by volume; free for basic prevention and paid for automation. Your K32 lens: price on independently measurable value; avoid pricing that doesn't track value or that depends on the customer's execution. Question to ask: what do customers value most, a lower rate, fewer manual hours, or recovered revenue?

**C. "How would you serve platforms and merchants using multiple processors?"** What data you need from other processors, what you can offer without owning the payment, how you handle privacy and network rules, and whether this is a data-sharing product or a workflow product. Be honest that you'd start with customer discovery.

**D. "How would you decide between building a capability and using a partner like Verifi or Ethoca?"** Your Amazon experience: in-house for long-term capability versus buy for speed (PBI build-vs-buy), staged rollout to contain risk. Frame it as: control and differentiation versus time to market and network access.

**E. Hands-off automation:** the user defines the outcome (a dispute-rate target, a maximum cost per recovered dollar), the system chooses actions, and there are human approval boundaries for consequential steps (your C7 principle: accuracy is not the same as acceptability).

## 9. Questions to ask Ishan (pick four)
1. What does "hands-off dispute management" mean for the first customer segment you're targeting, and how do you know it's the right one?
2. Where do you see the biggest gap between Stripe's prevention tools and what platforms and multi-processor merchants ask for?
3. How does this team work with payment networks, and what are the biggest dependencies on them?
4. How is the product's P&L set up, and how are pricing decisions made?
5. What does success look like in the first six months for the PM in this role?
6. Where does the team expect LLM capabilities to matter most?

## 10. Three-day plan (adjust to your interview date)
- **Day 1:** do section 7 (3 hours). Decide on the C9 answer (or use C1). Update your intro and "why Dispute Prevention."
- **Day 2:** answer the product questions in section 8 aloud (A to E, two minutes each). Run a mock interview with a mix of competency and role-specific questions.
- **Day 3:** light review: gap lines, three least-sure answers, your questions, logistics. Confirm the format with Colleen.

## 11. Sources (used for the domain background; check before relying on specifics)
- Stripe's dispute prevention and Verifi pages, as summarized in search results (could not be fetched here): docs.stripe.com/disputes/get-started/prevention and docs.stripe.com/disputes/get-started/verifi
- Visa VAMP summaries: Chargeback Gurus, Solidgate, Equifax (secondary sources; thresholds changed during 2025–26)
- Chargeback lifecycle and reason-code guides: Pagos, Chargebacks911, Chargeback Gurus (vendor guides)
- Smart Disputes description: a third-party blog (Chargeflow); not Stripe documentation
