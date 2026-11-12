# C6 (TRACE) follow-up questions: prepared answers

Story: TRACE, explaining and reducing seller shipping cost (library A11; sources: your "TRACE summary and questions" and "TRACE deep dive" docs). Spoken, about 60–90 words each. **[YOURS]** = only you can supply; **[CONFIRM]** = verify before saying. These are prepared before the C6 answer is final, so adjust once it is written. Order is by likelihood.

**1. Why explain the change in cost, not the cost itself?**
"A product's absolute shipping cost comes from an operations rate card, which a seller can't change. What a seller can act on is why the cost moved: distance, package size, weight, mode of transport. So the model explains the change in cost between two periods by driver, and then points to the action that would bring it back."

**2. Is it really causal?** (likely from a data-literate HM)
"I'd describe it as a driver-attribution model. It's a regression that explains how much of the change in cost comes from each driver, with the drivers chosen with Operations and Finance, and correlated drivers separated so they don't double count. It tells a seller what moved the cost; it doesn't run an experiment." [CONFIRM how you describe it; the library calls it causal, so be consistent with what you can defend]

**3. Why 15 months of data and not the two years Finance wanted?**
"Finance wanted year-over-year comparisons. I looked at their calculations and found about 95% of their comparisons were against the latest quarter or the same quarter the year before, which 15 months covers. Two years would have doubled the data, let fuel-price swings dominate, and raised the month-to-month comparisons from 66 to 276, about four times the compute."

**4. Why bin the long tail instead of removing it?**
"Items that sell under 360 units a year were more than 90% of all items, about 59 million, but only about 10% of shipments. Removing them would have left most items with nothing; giving each its own result would have been unreliable. So I grouped them into about 10,000 bins of similar size, weight and category and gave directional guidance."

**5. How did you decide what to simplify, and what not to?**
[YOURS. Candidate, from your docs: you kept the model at the shipment level, because that is where a seller's choices live, even though it was harder; you chose not to attempt a global optimization, which is very hard to get precise; you simplified what sellers saw and the base cost. Say only what is true.]

**6. How did you handle Finance when they wanted two years?**
"I didn't argue from preference. I went into their own calculations, showed that nearly all of their comparisons fit within 15 months, and explained the compute and macroeconomic costs of doubling it. That let us agree on the smaller window without losing what they needed."

**7. How did you validate the model?**
"We split the shipment data into training, test and prediction sets, and checked the data at each step: types, ranges, missing values, completeness, and that the cost summed correctly from truck to shipment level. I also checked what share of the cost change the model explained." [CONFIRM: the doc mentions the model improving from 70% to 90% accuracy; define the metric before quoting it]

**8. How did you handle data from 14 different sources?**
"Each source had a different owner and different access, privacy and refresh rules, so I built those dependencies into the project plan and set data contracts with each team: refresh schedules, issue resolution and capacity. Some access still took longer than planned, such as data that needed extra certification, so the plan had slack for it."

**9. What was hard technically, and how did you solve it?**
"The model produced an equation at the shipment level, but sellers act on items, so it had to be converted across about 60 million items for every month-to-month comparison. That took over 72 hours and kept failing on standard clusters. We moved to serverless processing that scaled itself, and cached the results so sellers saw fast answers from a monthly refresh."

**10. Why did you launch by email first?**
[YOURS. Your docs say: it was the first time sellers had seen these recommendations, and email was a low-tech lift; you scaled to a Seller Central page afterward. Add what you learned from the email stage.]

**11. How did sellers respond?**
[YOURS. Adherence numbers (sellers and items that acted) are blank in your docs. If you have none, describe what you observed.]

**12. Give me an example of what a seller did with a recommendation.**
"One example: an item's sales volume had grown more than twofold in a year, but its package size hadn't changed. Before this, nobody could tell whether a smaller package would cut total shipping cost. The tool showed the impact, and the recommendation was to vacuum-pack the product. Other recommendations were to hold inventory in more warehouses to cut distance, reduce weight, or switch from air to ground." [CONFIRM the example is the one you want to use]

**13. How was the $40M measured?**
[YOURS. Your docs name total shipping-cost savings as the north-star metric, with active users, items analyzed and items that acted as supporting metrics. Say how savings were counted and attributed.] [CONFIRM $40M as the TRACE figure; your docs also show $100M and $158M]

**14. What was your role versus Data Science and Data Engineering?**
"I owned the customer problem, the solution design, the alignment across teams and delivery. I wrote the product requirements and the data requirements, validated the data, and ran design reviews, bi-weekly sprints and daily check-ins with data engineering. Data Science built the model; Data Engineering built the pipelines."

**15. How long did it take?**
"The vision was written in March 2021, the team was staffed in September 2021, and we launched the seller-facing platform in February 2023, with monthly refreshes and 15 months of history." [CONFIRM the dates]

**16. What would you do differently?**
[YOURS. Candidate ideas, not facts: define how savings are attributed before launch; engage the upstream data teams earlier, since some access took longer than planned. Use one only if you believe it.]

**17. How does this relate to Radar?**
"It's the same shape as 'why did fraud spike, and what do we do about it?' First attribute the change to its drivers, then recommend the action that matters most. It also needs reliable inputs from many upstream teams, so the data contracts and ownership I set up would carry over directly, and the answer must be simple enough for the person who has to act on it."

**18. A number looks inconsistent: how do you explain it?**
"I quote the $40M that TRACE drove directly. Larger figures I've seen combine it with other programs." [CONFIRM what the $100M and $158M figures represent before saying this]
