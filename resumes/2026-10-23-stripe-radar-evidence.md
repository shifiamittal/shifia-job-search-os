# Stripe Radar PM: Evidence From Your Documents (working notes)

Sources read 2026-10-23: `API_cheating.docx` (API interview notes), `MDLC_and_MOQ.docx` (MDLC, MOQ, behavioral prep), and from Drive: SPORT API specs (V2/V3), Data Platform Product Strategy, Pay-by-Invoice Expansion dossier. Plus your chat answers on 2026-10-23.

Nothing here has been added to `experience-library.md` or the resume yet. Items marked [CONFIRM] need your answer first. Where a source conflicts with the canonical metrics table, the canonical table wins until you decide otherwise.

## Evidence mapped to the JD

| JD requirement | New evidence | Source | Status |
|---|---|---|---|
| Reliable APIs; technical fluency (pts 11, 34, 37) | PBI 2.0 checkout credit-decision API: request = customer id, cart value, cart category; response = approval status. API Gateway + containers on Fargate instead of Lambda because high transactions-per-second made Lambda too costly and slow (cold starts). Model output and approved categories pre-computed daily and cached, because request-time in-memory matching was too slow. Privacy-service integration for financial data. | API_cheating | Strong, [CONFIRM] whether Fargate was your decision or engineering's, and the TPS and latency numbers |
| Real-time decisioning (Radar is real-time) | MDLC "feature cache": internal customer features that were previously 1 day delayed were loaded into the pipeline so applications could be assessed in real time. | MDLC_and_MOQ | Strong, [CONFIRM] who built it and what changed |
| API and dashboard products (pt 34) | MOQ: three seller-facing endpoints (get recommendations, store seller action, show MOQ on the website) plus individual model endpoints reused by a second model. Data platform API service (time-series, event behavior, product master, customer master, event stream) used by the app team to build client dashboards. | MDLC_and_MOQ; Data Platform doc; your chat | Strong |
| Developer empathy; build vs. reuse (pts 35, 37) | SPORT APIs: chose a new database and REST design over existing RPC-based APIs that other clients couldn't use and developers found painful; trade-off was extra dev effort. Dropped item images to fix API latency. | API_cheating | Strong |
| External developers and integration partners (pt 43) | SPORT APIs designed for Amazon's Selling Partner developer APIs so external seller-partner services could show recommendations; named a partner portal and an internal portal (RIM) as consumers. | SPORT APIs V3 spec (Aug 2020) | Partial until you confirm it shipped, who used it, and results |
| Technical dependencies, high-stakes external relationships (pt 43) | SAP extraction delays at the flagship client: you built data-availability monitoring and set delivery SLAs with the client's IT. SAP and Snowflake connectors. | Data Platform doc; your chat | Strong |
| Onboarding, docs, path to production (pt 18) | MDLC onboarding: documentation, a community channel and support; removed the 1-headcount ask for new teams; onboarded 3 more teams the next year. Pipelines went from ~1.5 months of engineering to UI-configured; containerization from 1 week per model to a git link. | MDLC_and_MOQ | Strong, reconcile 3 vs 5 teams |
| Reliability and regulated models (pts 6, 42) | SR 11-7 model governance: drift monitoring (PSI, CSI), versioning, inventory; 100+ models; audit risk. | MDLC_and_MOQ | Strong |
| Configurable rules (Radar analog) | "Central Rules Engine" (MVP built; got reprioritized toward third-party lending) and a no-code credit-strategy platform mentioned in the Pay-by-Invoice dossier. | MDLC_and_MOQ; PBI dossier | Unknown, [CONFIRM] what each was and whether you owned them |
| Analytical rigor; test quickly (pts 24, 29) | MOQ: 13-week randomized test, all of a merchant's items in one arm, dial-up 5/10/50/100%, legal approval before full launch; explicitly rejected pre/post comparison. | MDLC_and_MOQ | Strong |
| Work with sales/field on adoption (pts 16, 33) | MOQ adoption: home-page card (5x seller visits), seller call-downs, account managers, mass emails. | MDLC_and_MOQ | Partial, [CONFIRM] your role with account managers |
| SQL (pt 25) | You said you wrote SQL to find primary and join keys, check joined datasets, define data-platform requirements, educate scientists and design catalogs. | Your chat | User-confirmed; no specific example yet |
| Pricing and monetization (pt 36) | Large-dollar seller loans: $17M additional capital, $2M profit for Amazon. Keystone tier pricing (details pending). | MDLC_and_MOQ | Partial, [CONFIRM] scope and what you set |
| Third-party integrations | Moody's integration (heading only); credit bureau integrations; external bank lending shift. | MDLC_and_MOQ; PBI dossier | [CONFIRM] what each was |

## Conflicts to resolve before anything goes on a resume

1. **Dates.** Your library puts MOQ and SPORT under Supply Chain (Nov 2018 – Jun 2020) and the ML platform from Jul 2020. But the SPORT API specs are dated Jul–Aug 2020 and the MOQ experiment ran Jan–Mar 2021. Did you run both during 2020–21? The resume sub-heading "Supply Chain ML Recommendations (2018 – 2020)" may be wrong.
2. **MOQ numbers.** Doc: ~$20M savings, adherence 60% and 62% higher. Library: ~60% higher adherence, TRACE $40M, $100M+ combined. Which figure is yours for MOQ alone?
3. **Teams onboarded to MDLC.** Doc: 3 more teams. Library: 5 teams outside lending.
4. **Privacy numbers.** Doc: 6 science headcount saved and "10 privacy bar raisers." Library: 5 science FTE and "Amazon-wide privacy bar raisers."
5. **People management.** Doc says "led a 3-member team once and promoted 2 of 3" and gave promotion feedback to 5+ technical partners. Library says one solid-line report (promoted L4 → L5). Which is right? I won't use either in Stripe materials until you decide.
6. **API documentation details.** The 300-requests-per-minute limit and rate-limit headers appear under a prompt to "create an example ... take inspiration from OpenAI's API." Did you ship that documentation, or is it an illustrative example? I won't claim it as shipped.
7. **Large-dollar loans.** The doc says both "$17M additional capital" and "unable to launch at full scale." Which is the final outcome?

## Draft bullets (not applied; need your confirmation)

- Defined the checkout credit-decision API (customer, cart value, category → approval) and the architecture for high transactions-per-second: containers instead of serverless functions to meet cost and latency limits, with daily pre-computed model output cached for real-time response.
- Shipped MOQ recommendations as seller-facing APIs and reusable model endpoints; validated in a 13-week randomized test across 20K merchants (all of a merchant's items in one arm), dialed up from 5% to 100% with legal approval; seller visits up 5x through a home-page card and account-manager outreach.
- Grew a self-service ML platform's adoption by removing the headcount ask for new teams and investing in documentation and a support community; 3 additional teams onboarded the following year.
- Owned the data platform API service (time-series, event, product-master, customer-master endpoints) and the standard forecasting data contract; the app team built client-facing dashboards on it and scientists used it from notebooks. Wrote SQL to profile client data, find keys and joins, and define platform requirements.
- Built data-availability monitoring and delivery SLAs with a Fortune 500 client's IT team to manage a shared SAP extraction dependency.

## Still open from earlier

Fraud adversary story (Q6), Keystone pricing numbers (Q11), sales objections and deal detail (Q12), a specific SQL analysis (Q16), and your own "why Radar / why fraud / why Stripe" (Q22).
