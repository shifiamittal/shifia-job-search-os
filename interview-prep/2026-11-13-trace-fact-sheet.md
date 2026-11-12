# TRACE fact sheet (for the Stripe C6 answer and follow-ups)

Built 2026-11-13 from your Drive docs: **TRACE summary and questions** (**Summary**), **TRACE deep dive** (**Deep dive**), **Trace_Keystone_PR-FAQ_updated** (**PR-FAQ**: a Keystone technical-writing exercise written as a press release about "Product XYZ"; treat its figures and quotes as illustrative, not results), and your library (A11, canonical numbers).
Reference sheet, not an answer. **Legend:** ✅ consistent in your docs · ⚠️ sources conflict (see section 11) · ❓ not recorded.

## 1. The project in 60 seconds
At Amazon Seller Services, you led TRACE (the "ship COGS bridging" model): a product that explains **why an item's outbound shipping cost changed** from one month to the next, broken down by driver (distance, weight, package size, mode of shipment, and so on), and **recommends the actions** that would bring the cost back down. Shipping was about 50% of an item's operations cost. Sellers saw recommendations first by email, then on a Seller Central recommendations page, refreshed monthly with 15 months of history. Your role was customer problem identification, solution design, cross-functional alignment and implementation. The goal was $60M of seller savings; the library credits TRACE with $40M.

## 2. Key numbers
| Item | Value | Status |
|---|---|---|
| Share of item cost | ~50% is shipping | ✅ |
| Annual shipping operations spend | $50B (Summary, Deep dive); "$60B+ in 2021" (PR-FAQ) | ⚠️ use ~$50B |
| Cost per unit | $4.11 per unit (Summary); $5 per package (PR-FAQ) | ⚠️ different units; skip or specify |
| Org goal | $60M seller savings | ✅ library, Deep dive |
| TRACE savings | **$40M (library, canonical)**; the Summary and Deep dive say $100M and "YTD $158M"; library: $100M+ across SPORT, TRACE and MOQ | ⚠️ use $40M |
| Items covered | 60M+ (59M long-tail items binned into ~10K groups) | ✅ |
| Drivers modeled | ~50 (Deep dive), 55 independent variables, 90+ (PR-FAQ), 20+ drivers shown as $ contributions | ⚠️ say "dozens" or "50+" |
| Upstream data sources | 14 data tables with different owners (Deep dive); 15 (PR-FAQ); 10 in one passage | ⚠️ library: 14 systems, 14 teams |
| Data window | 15 months (Finance wanted 2 years) | ✅ |
| Data size | 5 TB (Deep dive) or 6 TB (Summary) | ⚠️ say "multi-terabyte" |
| Model compute | over 72 hours per monthly run on standard clusters | ✅ Deep dive |
| Long-tail threshold | items selling under 360 units a year; >90% of items, ~10% of shipments; 59M items → ~10K bins | ✅ |
| Accuracy | "improved from 70% to 90%" (Summary); "explains over 70% of changes" (PR-FAQ) | ⚠️ metric undefined; don't quote |
| Projected value | ~50 bps of ship cost, ~$300M free cash flow opportunity (PR-FAQ) | projection only |
| Timeline | PR-FAQ written Mar 2021; team staffed Sep 2021; seller launch Feb 2023; about 1 year to build the model | ✅ Summary |
| Marketplaces | US first; expansion to EU | ✅ |

## 2b. If asked "what is the PR-FAQ document?"
A press-release-style plan for the product ("Product XYZ"), including a 6-step solution, a technical architecture, strengths and limitations, success metrics and use-cases. The version in your Drive is an exercise written for a Keystone application; the quotes in it are illustrative. Do not cite its numbers (for example "$300M opportunity," "explains 70%") as achieved results.

## 3. The problem
- Shipping was about half of an item's operations cost, but **nobody could say how much each driver contributed.** There was only a qualitative understanding (more miles, labor rates, minimum wages, 1P/3P mix). ✅
- Many Amazon teams worked on pieces of it (network optimization, packaging, carrier contracts, catalog accuracy), and **each project reinvented the wheel**, with weak documentation, multiple datasets and no single science-based study. ✅
- Teams couldn't quantify the impact of their changes, for example whether lighter packaging actually lowered shipping cost. ✅
- Sellers saw a bill that went up with no way to know why or what to do. ✅
- From the metrics: shipped units grew about 10% year over year while ship cost grew about 15% (PR-FAQ, 2021); consumables' ship cost was up to 70% of price. 📄

## 4. What was built
**Output:** for each item, the month-over-month change in shipping cost expressed as **dollar contributions from each driver** (20+ drivers), **automated recommendations** to reverse the change, and a **seller-facing dashboard/page** with 15 months of history. ✅

**Why "change in cost," not cost:** the absolute cost comes from an operations rate card that nobody can change; the model explains what changed and why. ✅

**Method (how the complexity was reduced)**
1. **Foundation dataset:** 15 months of shipping data; package-level cost converted to item-level cost by splitting the used space by each item's volume and the unused space equally among items. ✅
2. **Isolate what sellers can't change:** orders were grouped by number of items (M), whether the order was split (K) and number of shipments (N) into about 12–13 "MKN" groups, so each group shares the same first fulfillment decision (which only Amazon's system controls). ✅
3. **Primary and secondary drivers:** you and Operations/Finance sorted the drivers; a secondary driver that predicts a primary one (for example item weight and package weight; number of warehouses with stock and ship distance) was kept out of the same regression; Science removed highly correlated factors. ✅
4. **Regression per group, then combine:** train a regression for each MKN group (and secondary regressions for each primary driver), combine the groups weighted by share, and project to item-level equations. ✅
5. **Bridge:** change in cost between two months = sum of each driver's coefficient times the change in that driver. ✅
6. **Plain-language output:** a rule engine converted drivers and anomalies into recommendations sellers can read, for example "the new packaging is bigger than last August; repackaging could save about $0.15 per unit" (illustrative, from the PR-FAQ). ✅
7. **PR-FAQ's three layers:** singles vs. multi-item packages; the regression model; and an anomaly-detection layer that flags large deviations. 📄

**Examples of recommendations (Deep dive):** increase supply in warehouses to cut ship distance; reduce package volume (an incentive for packaging reduction); reduce weight; switch air to ground; ship more units per box. ✅ **A worked example:** an item whose sales volume grew 2.1 times in a year while its package size didn't change; vendors weren't vacuum-packing a pillow; the tool quantified the saving and recommended it. ✅

## 5. Decisions and trade-offs (with the "because")
| Decision | Alternative | Why |
|---|---|---|
| Explain the **change** in cost | Explain absolute cost | The base cost comes from a fixed rate card; sellers need what moved |
| Model at the **shipment** level, grouped by MKN | Model at the order or item level | Sellers' controllable decisions sit at the shipment level; the first fulfillment decision can't be changed |
| **15 months** of data | Finance's 2 years | 95% of Finance's comparisons were against the latest quarter or the same quarter a year earlier; two years would have doubled the data, let macro factors like fuel prices dominate, and more than doubled month-to-month comparisons (about 105 pairs for 15 months vs. 276 for 24) |
| **Bin the long tail** (59M items → ~10K groups) | Remove those items, or give each its own result | Long-tail items were >90% of items; individual results would be unreliable; binning gives directional guidance |
| **Reuse another team's distance model** to remove last-mile distance | Build a new model | Last-mile distance doesn't depend on the seller or item; reuse saved 3–4 months of science effort (needed data access and conversion from truck to shipment level) |
| **Email first**, then Seller Central | Build the page first | First time sellers saw these recommendations; email was a low-tech lift |
| **Local** optimization (one item at a time) | Global optimization | Global optimization is very hard and needs high precision |
| **Cache** results; **pay the higher in-memory cost** | Recompute on the fly | Latency; the model would have needed recoding for real-time calculation |
| **Serverless** processing | Standard clusters, SageMaker, Cradle | Monthly runs took 72+ hours and failed on traditional clusters; SageMaker tasks timed out; Cradle doesn't support PySpark |

## 6. Technical architecture (if asked)
Data pipeline ingests from ~14–15 source tables into a Redshift warehouse (about 48 hours to fetch and process), moves to S3, a monthly **model runner** (PySpark on serverless EMR) trains and produces output, an **analysis manager** converts shipment-level equations into item-level projections and stores recommendations in a NoSQL store (Dynamo) as a data cube and cache, a **GET API** (input seller ID, output item-level recommendations) feeds the Seller Central UI. Monitoring via error logs. Microservice design for independent scaling. ✅

## 7. Data and quality
- Sources: contribution-profit tables, delivery data, transportation finance, fulfillment and placement data, shipment attributes. A consolidated table was built by joining on item ID. ✅
- **Data contracts and SLAs** with each upstream owner (refresh schedules, issue resolution, capacity); each source had different access, privacy and refresh rules; some access took longer than planned (for example data that required extra certification). ✅
- Engineer validations: data types, ranges, missing values, completeness, unit consistency, duplicate detection, unexpected nulls, truck-level cost summing to shipment-level cost. **PM validations:** completeness; cost summing correctly across levels; percent of cost explained. ✅
- Training split: 80% training, 10% test, 10% prediction. ✅

## 8. How you ran it
- PRDs, technical design reviews, bi-weekly sprints, daily stand-ups with data engineering. ✅
- Team: science, data engineers, software engineers, ML engineers, customer research and financial analysts (an analyst helped access financial data and find missing data). ✅
- Role: customer problem identification, solution design, cross-functional alignment and implementation. ✅
- Aligned Finance, Operations, Data Science, Data Engineering and Engineering; set data contracts and SLAs with upstream owners. ✅

## 9. Rollout and metrics
- Launch sequence: email recommendations, then a recommendations page in Seller Central; monthly refresh with 15 months of history. ✅
- Metrics: north star = total ship cost savings; plus active users, traffic, sellers and items recommended, sellers and items that acted, number of items with saving actions. A tracking tool captured "adhered" sellers and items. ✅
- Adherence numbers: ❓ blank in your docs.
- Use by Amazon's own teams: operations network changes, category-level insight, annual vendor negotiations, product placement, catalog accuracy, and the drop-ship decision (PR-FAQ use-cases).
- Product enhancement afterward: model improvement, internal-team use cases, a usage-tracking tool, EU expansion. ✅

## 10. What you didn't or couldn't do (be honest)
- A true controlled experiment: the model attributes change by regression, with drivers chosen with Operations and Finance; it is not an experiment. (Your library calls it "causal"; be ready to define it.)
- Global optimization (very difficult).
- Predict last-mile delivery by yourself (reused another team's data).
- The PR-FAQ's strengths-and-limitations section notes it could feel like a "black box" to business teams; onboarding sessions with examples were planned.

## 11. Conflicts and open items
1. **Savings:** $40M (library) vs. $100M / $158M YTD (docs). Use $40M unless you can explain the others.
2. **Number of data sources / drivers / data size:** use ranges ("14 sources," "dozens of drivers," "multi-terabyte").
3. **"Causal":** decide the wording you'll defend.
4. **Accuracy 70% → 90%:** define it or leave it out.
5. ❓ Adherence numbers (sellers and items that acted).
6. ❓ How the $40M was counted and attributed.
7. ❓ What you chose not to simplify.
8. ❓ Why email first, and what you learned.
9. ❓ Seller reactions.
