# C4 (API catalog) follow-up questions: prepared answers

Story: the Keystone data platform's API catalog and release standard (library K29, "Stripe competency version, C4"). Answers are spoken, about 60–90 words, from your confirmed facts. **[YOURS]** = only you can supply; **[CONFIRM]** = verify before saying. Order is by likelihood.

**1. Why keep client-specific fields instead of one common schema?** (most likely)
"Forcing every client into one schema would have meant weeks of mapping per client, and it would have made conversations with client teams harder, because their data would no longer look like what they sent us. I kept data in its native shape to keep communication simple and onboarding fast. The cost was that developers had to understand each client's fields, which is why the field definitions and mappings in the catalog mattered so much." [CONFIRM the onboarding saving you want to quote; the library says about two weeks per client]

**2. How did you enforce the release standard?**
"The rule was simple: no endpoint shipped without a plain-language definition for every field and a working example." [YOURS: how it was enforced. Candidates, say only what's true: part of the release checklist, you reviewed each before release, engineers wrote drafts and you edited.]

**3. What did Engineering build, and what did you own?**
"Engineering built the API service and the tooling. I owned the product decisions: which data to expose as reusable APIs, keeping client fields in their native shape, and the documentation. I personally wrote the catalog, the field definitions and the release notes."

**4. How did you know developers were struggling?**
"Three signals. Our sprint stories were filled with new metric requests, and the platform work behind them went unprioritized. Developers kept asking in Slack and meetings what fields meant. And our own developers spent real time answering those questions. Requests waited about two sprints, and we were getting two to three every sprint."

**5. Why not just build the metrics for them, or give them a ready-made metrics layer?**
"Every new metric would have sent them back into our queue, and requests were already waiting about two sprints. Standard, reusable APIs let developers calculate their own metrics from the same data." [YOURS: whether you considered a pre-built metrics layer or BI tool, and why you rejected it]

**6. Which APIs did you expose, and how did you choose them?**
"Five kinds: demand and forecast series, order and shipment patterns, product data, customer data, and an event stream." [YOURS: how you chose them, for example by grouping the repeated dashboard requests]

**7. Why 10% and not zero?**
"The remaining work was small enhancements, such as adding fields or new data. Genuinely new capabilities still need the platform team, but routine metrics no longer did." [CONFIRM]

**8. How did you measure 50% to 10%?**
[YOURS: how you counted it. Likely from sprint stories or capacity tagged to the app team's requests. Say what you actually did.]

**9. How did you keep the catalog from going out of date?**
"Release notes were written for every API change, and no endpoint shipped without definitions and an example, so the documentation changed with the product." [YOURS: who updated the catalog and when. Don't claim the changelog tooling; Engineering built it.]

**10. What did developers say?**
[YOURS: any comment you remember. The factual evidence is that the app team onboarded five new client dashboards without additional platform support.]

**11. How did you handle authentication and breaking changes?**
"I documented how to authenticate and what changed in each release; Engineering owned the mechanisms." [CONFIRM the details if you're asked how: the authentication method and the versioning policy are not in your sources.]

**12. What would you do differently?**
[YOURS. Candidate ideas, not facts: generate parts of the catalog from the API definition so it can't drift; add a sandbox for trying calls. Use one only if you believe it.]

**13. How does this relate to Stripe?**
"Stripe's users are developers, and Radar has the same challenge: rules, risk signals and decisions are only useful if developers and analysts can understand them without asking. I'd apply the same standard: every signal defined in plain language, a working example, and a clear note whenever a model or rule changes."
