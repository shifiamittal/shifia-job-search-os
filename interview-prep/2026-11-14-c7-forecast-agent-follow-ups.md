# C7 (Forecast Agent) follow-ups: prepared by the user, saved 2026-11-14

Story: the Keystone Forecast Agent (library K2/K3/K4/K5, "Stripe competency version, C7"). The answers below are the user's own text, saved as written. Notes in [brackets] are cautions, not spoken lines.

## Cautions before you say these aloud
1. **The ">80% adoption" figure.** Your library and your style guide use **70% of recommendations accepted at launch**; the 80% figure is *action acceptance after the tier redesign* (30% to 80%). Several answers below say "adoption exceeded 80%." Consider "about 70% accepted at launch" unless you can define and defend 80%.
2. **The worked examples are illustrative.** The 22% and 25% forecast increases, the stale retailer feed, the missing partition and the "golden test case" come from the design doc's synthetic scenarios, which the doc says are fictional and "not to be presented as a production incident or measured lift." Say "for example, a case like..." and don't present them as real cases. The real production example is the warehouse-relocation incident (library K5).
3. **"Improved forecast accuracy by 20%"** is the platform's advantage over the client's incumbent tool, not something the agent did. Say "about 20% more accurate than the incumbent."
4. **Unconfirmed statements:** the LLM-vs-expert disagreement process ("intended adjudication approach") and the "difficult to scale support across enterprise customers" stake.

## The answer (final)
See the library entry "Stripe competency version, C7" (under K4).

## Follow-ups

**Why did you use AI instead of deterministic software?**
I used AI selectively. Detecting unusual forecasts was largely deterministic: we could apply rules for unexpected movements, missing data, or historical bias. The harder problem was investigation. Suppose a retailer's forecast increased 25%. A planner might need to determine whether it was driven by a genuine promotion, a change in demand, a data issue, or model degradation. Our agent could formulate hypotheses, query relevant datasets, retrieve historical incidents, and test competing explanations. For example, it might discover that an upcoming promotion explains the increase, but the promotional uplift needs confirmation from Sales. The recommendation would be to review the forecast with that promotion assumption, rather than automatically override it or retrain the model. That flexibility was why I chose agentic AI for investigation, while keeping detection and consequential decisions outside the LLM.

**How does a typical AI investigation work?**
- Exception: Forecast increases 25% for a retailer's product. The increase is material enough to warrant investigation, but isn't proof that the forecast is wrong.
- Hypotheses generated: Promotion? Data issue? Demand shift? Model behavior?
- Tools and evidence: Compare prior forecasts, check input lineage, inspect orders and shipments, retrieve promotion records, and review similar past cases.
- Finding: A promotion is scheduled, and the data appears consistent, but final promotional coverage hasn't been confirmed.
- Recommendation: Request Sales confirmation; retain the baseline pending review; do not recommend an unsupported adjustment.

**Why did you need AI for this? Couldn't you solve it with traditional software?**
We didn't need AI for the entire workflow. Identifying suspicious forecasts could be handled through rules because the criteria were explicit. The difficult part was investigating why a forecast looked wrong. Causes varied across data quality, model behavior, promotions, and business changes, and each investigation required different evidence. An agent could form hypotheses, select the right tools, investigate the evidence, and synthesize a recommendation. Encoding all those investigation paths as rules would have been difficult to maintain and extend.

**How did you determine which part of the workflow to automate?**
I started by observing how demand planners reviewed forecasts. Their workflow included identifying exceptions, investigating causes, deciding whether to accept or adjust the forecast, and escalating recurring technical issues. I separated tasks based on predictability and risk: rules for repeatable checks, an agent for context-dependent investigations, and human approval for consequential forecast decisions.

**How did you decide how much autonomy to give the agent?**
I considered the consequence of an incorrect action. Investigating a forecast and proposing a recommendation were lower-risk activities, but actually changing a forecast could affect inventory and supply decisions. So I deliberately kept the agent in a recommendation role. Planners reviewed and approved changes, while the system retained the reasoning and evidence for review.

**How did you know the agent was giving correct answers?**
I didn't treat correctness as a single metric. We assessed whether the agent identified the right exception, retrieved relevant evidence, diagnosed the issue accurately, and recommended an appropriate action. We used reference cases with expected diagnoses and acceptable recommendations, automated checks for objective behavior, LLM-based evaluation for evidence grounding, and domain experts for business judgment. This let us identify whether a failure came from detection, retrieval, reasoning, or the recommendation itself.

**How did you create your evaluation dataset? What was ground truth?**
We used historical forecast-investigation scenarios and established what information was available, what the issue was, and which recommendations were acceptable. Domain experts reviewed the expected diagnoses and actions. Importantly, there could be more than one acceptable recommendation, including escalating when evidence was insufficient.

**Why did you need both LLM-as-judge and human evaluation?**
They answered different questions. Deterministic checks could verify objective requirements such as whether a tool succeeded or a required approval was present. An LLM judge could assess whether the explanation was supported by the evidence the agent provided. But only domain experts could reliably judge whether a recommendation made business sense given forecasting and operational context. I didn't want a plausible, well-written explanation to be mistaken for a correct decision.

**How did you decide the agent was good enough to launch?**
We evaluated it against historical reference cases and then ran it in shadow mode alongside the existing planner workflow. Planners reviewed its recommendations without the agent changing forecasts. I established approximately 70% recommendation acceptance as a launch requirement. We also assessed output quality, evidence support, tool reliability, and approval safeguards. After launch, adoption exceeded 80%. [See caution 1.]

**What happened when the agent didn't have enough information or made a mistake?**
The design required the agent to distinguish confirmed facts from hypotheses and unresolved questions. When important context was missing, it should identify the missing information and escalate rather than confidently recommend a forecast change. We used trace inspection and evaluation cases to understand where failures originated, then improved the relevant data access, reasoning, or guardrail.

**What was the hardest trade-off?**
One significant trade-off was maximizing automation versus maintaining decision control. We could automate the investigation, but forecast changes had downstream inventory implications. I chose to keep planners in the approval loop, accepting some human effort in exchange for a lower risk of costly incorrect decisions.

**What would you do differently, or what did you learn?**
I'd put even more emphasis on missing-context and abstention scenarios in early evaluations. A diagnosis can be consistent with the data the agent retrieved yet wrong because critical business context wasn't available. The important learning was to measure not only whether the agent produced a supported answer, but whether it had sufficient evidence to recommend action at all.

## What data the agent needed
| Data source | Why the agent needed it |
|---|---|
| Forecast outputs and versions | Understand the original prediction and what changed |
| Orders, shipments, historical actuals | Analyze observed demand and fulfillment patterns |
| Data quality and pipeline status | Identify stale, missing, or incorrectly processed inputs |
| Model inputs and evaluation history | Investigate feature problems, historical bias, and model degradation |
| Promotions and business events | Determine whether forecast movements have legitimate business explanations |
| Historical investigations and overrides | Understand precedent and prior resolution outcomes |
| Planning policies and approvals | Determine what actions can be recommended and who must approve them |

## What actually made the system agentic?
The agent did more than apply a fixed decision tree or summarize retrieved documents. It could examine a flagged forecast, formulate possible explanations, decide which data to inspect next, use tools to gather evidence, revise its assessment, and recommend what should happen. For example:
- Observed issue: A forecast has increased significantly.
- Possible explanations: A promotion, a change in customer orders, data corruption, or model behavior.
- Agent investigation: Retrieve forecast lineage, check data quality, inspect registered business events, compare historical patterns, and identify whether additional information is required.
- Output: A supported diagnosis, unresolved questions, and a recommendation to accept, review, adjust, or escalate the forecast.

The reasoning was adaptive. But numeric calculations, data queries, permission checks, and final forecast changes were constrained by software and human decision-making.

## AI evaluation end to end
I managed evaluation across three stages: offline testing, shadow-mode validation, and production monitoring.

First, offline, I assembled historical forecast-investigation cases with expected diagnoses, acceptable recommendations, and unsafe actions. I evaluated the system in layers. Deterministic tests checked exception detection and tool reliability; LLM-as-judge assessed whether explanations were grounded in evidence; and domain experts evaluated whether the diagnosis and recommendation were appropriate for the business situation.

Second, in shadow mode, the agent investigated live exceptions without changing forecasts. Planners reviewed its recommendations alongside their normal workflow. I used approximately 70% planner recommendation acceptance as our launch threshold, while also checking reliability and approval safeguards.

Third, in production, I monitored recommendation adoption, planner corrections, tool failures, and execution traces. When quality declined, I could distinguish a missing-data issue from a retrieval, reasoning, or recommendation failure and add the case to regression testing.

Post-launch recommendation adoption exceeded 80%, and planner effort fell from four hours daily to four hours weekly. [See caution 1.]

## Evaluation: the details worth memorizing
- Deterministic checks: Is the factual or procedural requirement met?
- LLM-as-judge: Is the agent's explanation grounded in the evidence it retrieved?
- Human expert: Is the business diagnosis and recommended action actually appropriate?

| Evaluation layer | Key metric or evidence | Failure it catches |
|---|---|---|
| Exception detection | Precision, recall, top-queue usefulness | Important exceptions missed or excessive false alerts |
| Data retrieval | Correct source, data freshness, relevant evidence | Wrong, missing, or stale context |
| Tool use | Successful and valid tool calls | Invalid queries, tool failures, incorrect input scope |
| Diagnosis | Expert-acceptable root cause, supported claims | Incorrect reasoning or unsupported explanations |
| Recommendation | Expert-acceptable action, appropriate scope | Technically plausible but harmful advice |
| Safety | Approval and permission compliance | Unauthorized forecast changes |
| Live usability | Planner acceptance, corrections, time saved | Agent works technically but creates more work |
| Operational efficiency | Latency, failures, cost per useful case | Agent costs too much or misses deadlines |

## Illustrative examples [see caution 2: say "for example, a case like..."]
**Example 1: a product forecast increases 22%.** The system flags it for review, but that doesn't necessarily mean the forecast is wrong. The investigator finds a possible promotion and a stale retailer data feed. Rather than assuming the feed caused the change, it checks whether the forecast used the affected data. If the feed was complete when the forecast was generated, the agent shouldn't blame it for the increase. It can instead request confirmation of the promotion before recommending an adjustment.

**Example 2: a missing input affects a forecast.** A retailer's order feed has a missing partition. Unlike the first case, checking the forecast's input lineage reveals that the missing records were part of the snapshot used by the model. The agent can now establish a connection between the data defect and the forecast. It recommends reviewing a validated corrected forecast while separately routing the data-pipeline repair to Engineering.

Demonstrates: distinguishing an observed incident from its actual impact, separating current-cycle action from long-term repair, and avoiding unsupported recommendations.

[Note: for a real production-failure question, the warehouse-relocation incident (K5) is the better example. It illustrates how missing business context can cause an incorrect diagnosis, and why you needed trace analysis, improved data access, and abstention.]

**How did you build your golden dataset and establish ground truth?**
I built our evaluation cases around real forecasting situations, including normal business changes, data-quality incidents, model problems, and ambiguous cases. For each case, the reference data included the forecast, historical and business context available at the time, an acceptable diagnosis, and a set of acceptable or unsafe recommendations. Demand planners and Data Science experts evaluated the expected outcomes. We didn't require exact textual matches, because multiple recommendations could be valid. Instead, we assessed whether the diagnosis was supported, whether the recommendation made operational sense, and whether the agent recognized missing evidence.

**Example of a golden test case: stale retailer data feed** [illustrative]
- Input supplied to the agent: The new forecast is 22% higher than the previous version. A retailer feed is currently stale, but the original forecast used a complete snapshot captured before the feed failed. A promotion is also scheduled.
- Expected diagnosis: The feed failure is real but isn't established as the cause of the forecast increase. The promotion is a potential explanation requiring confirmation.
- Acceptable recommendations: Ask for confirmation of promotional assumptions, retain or review the baseline, and route feed remediation separately.
- Unacceptable output: Claim the stale feed caused the forecast increase and recommend automatically suppressing or overriding the forecast.

## Forecast exception scenarios to understand
- Scenario A: a legitimate promotion. Anomalous doesn't necessarily mean wrong; the correct action could be no adjustment.
- Scenario B: a confirmed data defect. The difference between detecting an incident and proving its impact on a specific forecast.
- Scenario C: a warehouse relocation. How incomplete business context can create a plausible but wrong recommendation, and how evaluation and monitoring improve the product.

| Exception | Possible root cause | Appropriate recommendation |
|---|---|---|
| Forecast increases sharply | Confirmed promotion or seasonal event | Retain the forecast if evidence supports the increase; seek commercial confirmation if needed |
| Forecast increases without an apparent business event | Missing promotion information, outlier, or model problem | Investigate business context before proposing an adjustment |
| Forecast falls unexpectedly | Retailer warehouse or distribution-network relocation | Validate location mappings and destination changes; avoid treating it automatically as lost demand |
| Forecast is unusually low | Missing or stale orders/POS data used in model inputs | Repair or backfill data, evaluate the affected forecast, and consider a temporary reviewed adjustment |
| Forecast consistently underpredicts | Persistent model bias or changed demand patterns | Investigate feature coverage and training data; evaluate retraining |
| Forecast spikes after a one-time large order | Exceptional historical transaction affecting features | Investigate outlier treatment; consider a bounded adjustment |
| Forecast diverges from shipments | Supply constraints prevent fulfilling demand | Compare orders and shipments; distinguish unmet demand from observed fulfilled volume |
| Forecast increases during a seasonal promotion | Model omitted promotion timing or uplift | Validate promotional inputs; consider a planner-approved scenario adjustment |
| Accuracy deteriorates after a model release | Model or feature regression | Compare against prior model version and investigate rollback or retraining |
| Missing actuals produce apparent poor accuracy | Incomplete evaluation data rather than forecast failure | Correct the evaluation data before recommending model changes |
| Multiple causes appear simultaneously | Promotion plus stale data plus historical bias | Separate supported findings, investigate each contribution, and escalate if necessary |
| Forecast changes but remains within expected variation | Normal noise | No action; avoid creating unnecessary planner work |

## Technical architecture
1. Separate workflow state from LLM state. A forecast case may stay open for days, waiting for Sales or planner feedback. A database and workflow coordinator maintain that state; the LLM doesn't need to remain running.
2. Give agents narrowly scoped tools. The agent should retrieve exactly the relevant forecast run and customer data rather than have unrestricted database access.
3. Make tools return explicit failures. If the lineage service times out, the result must say the lookup failed, not return an empty response that the agent mistakes for no problem.
4. Handle forecast version changes. If a new weekly forecast supersedes an existing one, old recommendations must be reassessed rather than applied blindly.
5. Keep authorization independent of the LLM. Since the actual agent was recommendation-only, its permissions should not permit direct forecast changes. Any downstream update belongs to an authenticated human-approved workflow.

## Short answers to AI-related follow-ups
| Question | Suggested answer |
|---|---|
| How did you handle hallucinations? | We required evidence-backed diagnoses and distinguished confirmed facts from hypotheses. We checked the source and time scope of evidence, used an LLM judge for grounding, and relied on expert review for business correctness. When evidence was insufficient, the agent needed to escalate rather than recommend an unsupported forecast change. |
| How did you debug an incorrect output? | I inspected the execution trace to identify the earliest failure: missing source data, incorrect retrieval, tool error, unsupported reasoning, or an inappropriate recommendation. We fixed the responsible component and added the failure to regression tests. |
| What did you change when evals failed? | The intervention depended on the failure. Missing data meant correcting access or ingestion; retrieval failures required search improvements; wrong reasoning required prompt or workflow changes; unsafe actions required stronger policy controls. We didn't assume every failure was a model-quality problem. |
| How did you control latency and cost? | We kept inexpensive exception screening deterministic and reserved agentic investigation for material cases. The key optimization was cost per useful planner decision, while ensuring recommendations arrived before the planning deadline. |
| How did you handle changing business context? | The agent used current operational data and historical context, but it also needed to recognize missing business information. Changes such as retailer relocations were a good example of why the system needed updated reference data and an escalation path. |
| How did you prevent unsafe actions? | I deliberately made the agent recommendation-only. Forecast changes had downstream inventory implications, so planners approved consequential decisions rather than giving the model direct execution authority. |
| What if LLM and human evaluators disagreed? | The domain expert's assessment was the reference for business correctness. We'd inspect the evidence, rubric, and judge result, determine the cause of disagreement, and use the case to improve future evaluation. [This is the intended adjudication approach; exact historical procedure needs confirmation.] |
| What was your personal technical contribution? | I decomposed the planner workflow, determined where AI versus rules belonged, defined agent responsibilities and data requirements, set the human-approval boundary, and drove the evaluation and launch strategy with Science and Engineering. |
| How did you know users trusted it? | We observed recommendation acceptance during shadow mode and adoption after launch. More importantly, planners spent substantially less time investigating forecasts, showing the system reduced work rather than adding another review burden. |
| How did you approach scale? | We screened forecasts using inexpensive rules, grouped and prioritized exceptions, and invested agent reasoning in the cases most likely to affect planner decisions. We also needed to monitor performance and cost by customer and exception type. |

**What is different about deploying agents versus conventional ML models?**
In conventional predictive ML, you're often evaluating a relatively defined input-to-output relationship, such as forecasting demand. An agent executes a workflow: it selects tools, retrieves changing information, makes intermediate decisions, and generates recommendations. That introduces additional failure points around retrieval, tool execution, state, permissions, and reasoning. So I evaluate both the final output and the path the agent followed.

**How did you handle agent failures in production?**
I wanted to distinguish infrastructure failures from reasoning failures. If a tool failed or critical data was unavailable, the agent shouldn't silently turn that into a business conclusion. We tracked execution traces to identify where the workflow broke, and for consequential decisions the fallback was human investigation rather than an unsupported automated action.

**How would you deploy a new prompt or model version safely?**
I'd run the new version against a frozen evaluation set, compare its diagnosis, recommendation quality, tool behavior, latency, and cost against the existing version, and check for regressions in high-risk cases. Then I'd use a shadow or limited rollout before expanding. I'd also version the prompt, model, retrieval configuration, and policy separately so failures could be traced to a specific change.

**How do you roll back an agent?**
I distinguish rolling back the software or model from reversing its actions. A bad release can be stopped by returning traffic to the prior known-good configuration. But if an agent has already changed external state, you need an audit trail and an explicit reversal or compensation procedure. In the Forecast Agent, keeping forecast changes under human control reduced that execution risk.

**How do you manage cost and latency at scale?**
I wouldn't send every forecast to an expensive reasoning model. I'd use inexpensive deterministic screening, prioritize material exceptions, and invoke the agent only when contextual investigation adds value. I'd monitor cost per useful recommendation and completion before the planner's decision deadline, not just tokens or average model latency.
