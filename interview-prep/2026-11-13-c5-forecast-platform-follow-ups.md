# C5 (forecast platform iteration) follow-up questions: prepared answers

Story: the Keystone forecast platform at the flagship client (library K9/K10/K21, "Stripe competency version, C5"). Spoken, about 60–90 words each, from your confirmed facts. **[YOURS]** = only you can supply; **[CONFIRM]** = verify before saying. Order is by likelihood.

**1. Why not simplify the model instead of adding explanations?** (most likely)
"I set two guardrails: don't materially degrade accuracy, and make forecast changes explainable and stable. I looked at replacing the ensemble with a simpler model, but that would have given up the accuracy that made us better than the client's existing tool. The gap was trust, so I kept the model and built the missing product layer instead."

**2. How did you know accuracy wasn't enough?**
"Two signals. Planners overrode nearly half the forecasts even though they were more accurate than the old tool, and my team spent a lot of time answering their questions about why numbers changed. Interviews and the support sessions then showed me why: they couldn't explain the drivers, and forecasts swung from week to week."

**3. Why offer free support, and how did you convince executives?**
"It was a new product, not yet proven across many clients, so I expected planners to need help and wanted to build confidence early. Free hands-on support, about one person per client, also showed us which recurring issues needed product fixes. After the enhancements, support effort fell to 30% of where it started." **[YOURS: the argument you used with executives, for example the cost against the risk of losing the flagship client]**

**4. How did you prioritize?**
"I used RICE, which weighs reach, impact, confidence and effort. Explainability affected every planner, interviews gave me high confidence, and the effort was low, so it went first. Accuracy gaps affected only some products, so they ran in parallel as experiments. Later, an agent prototype showed over 70% acceptance, which moved that ahead of more accuracy work." **[CONFIRM the last sentence: it ties to C7]**

**5. Tell me about the manual test.**
"Before building anything, I explained the drivers of forecasts to planners by hand, using SHAP-based explanations. Adoption improved, which told me the explanations were the right fix. Only then did I productize them." **[YOURS: how many planners, how long, and what the adoption signal looked like]**

**6. What does the explainability feature actually show?**
"For each forecast, the top drivers behind the number, such as pricing and promotions, with plain-language narratives a business user can read. The client's scientists got a separate view of the top two model weights per product, week over week, because they needed to debug the model while planners needed to trust it."

**7. How did you measure override rate and adoption?**
[YOURS: how you counted it. Likely the share of forecasts planners changed from the system, tracked by week. Say what you actually did.]

**8. Why did retraining cause the swings, and why quarterly plus on-demand?**
"The model's weights could shift a lot with small input changes, and retraining weekly meant planners saw numbers move for reasons nobody could explain. Quarterly kept it stable; on-demand let the business retrain when something real changed. I made the cadence configurable so each client could set it."

**9. Why 20% and not zero?**
"Some overrides are legitimate. Planners know things the data doesn't, and the model couldn't forecast new product launches from shipment history, which is a known gap. The goal wasn't zero overrides; it was overrides that came from judgment, not from distrust." **[CONFIRM the new-product gap is something you'd say]**

**10. What didn't work, or what did you change after feedback?**
[YOURS. Documented in your notes: the ensemble was hard for the client's scientists to run and debug, its weights shifted with small input changes, and five visible pipeline steps felt complicated, so you chained the steps to run automatically in sequence and let users choose which algorithms the ensemble uses.]

**11. How did you make these platform features and not client fixes?**
"I built explainability and retraining configuration as configurable platform capabilities from the start, so every later client got them. That is why support effort per client fell."

**12. What would you do differently?**
[YOURS. Candidate ideas, not facts: offer explanations at launch rather than after seeing overrides; interview planners before launch. Use one only if you believe it.]

**13. How does this relate to Radar?**
"Radar has the same trust problem. A decision nobody can explain gets overridden or ignored, whether it's an analyst reviewing a flagged payment or a merchant asking why a charge was blocked. I'd give every decision a plain-language reason, keep the model stable enough that results don't shift without a reason, and work closely with the first merchants and analysts to learn what blocks adoption before scaling."

**14. How did free support affect the commercial side?**
[YOURS. Your pricing notes say managed services were included in the subscription and extra support was given free in early deployments to learn recurring problems; say how that played out for revenue if asked.]
