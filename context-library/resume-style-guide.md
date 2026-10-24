# Resume Style Guide

Last updated: 2026-10-22
Source: Shifia's edits and feedback during the R37 AI Lab resume (2026-10-22). `/resume-tailor` applies every rule here to the first draft. Change a rule here, not in a single resume.

## Master file and layout
- **Master layout:** `resumes/Shifia_Mittal_Resume_R37.docx`. Copy it for each new role and edit the copy. Don't rebuild the layout from markdown.
- One page, US Letter, Calibri 10pt body. Margins: 0.4" top and bottom, 0.55" left and right.
- Dates are right-aligned with a single right tab stop at the right margin, never with tab padding.
- Render to PDF and check the page after every edit round.
- **Justify** the summary and every bullet (user's choice, 2026-10-24, Stripe resume). Word and LibreOffice leave the last line of each paragraph ragged, so short last lines still matter.

## Header
- `SHIFIA MITTAL`, centered.
- Contact line: `email | 206-356-6348 | Seattle, WA, USA | linkedin.com/in/shifiamittal | github.com/shifiamittal`
- Show full URLs as the link text, not "LinkedIn" or "GitHub". Links must be live: LinkedIn → `https://www.linkedin.com/in/shifiamittal`, GitHub → `https://github.com/shifiamittal`, email → `mailto:` with no stray characters.

## Sections
- **SUMMARY:** exactly 2 rendered lines. Lead with level + years + "shipping AI/ML products at scale", then Keystone (startup) and Amazon (scale) with 2–3 numbers, then influence.
- **EXPERIENCE** with total span on the right: `2015 - Present (11 years)`.
- **EDUCATION** with years.
- **No Skills section.** Every skill appears as proof inside a bullet.

## Employers and titles
- **Keystone.ai** | *AI division of Keystone, a 20+ year tech and economics advisory firm ($100M PE-backed)*. Context line on one line. Don't mention the 2026 spin-out.
  - Title: *Principal Product Manager-Technical*, `2024 - Present`
- **Amazon** `2016 - 2024 (8 years)`, with role-level titles and years:
  - *Sr. Product Manager-Technical, Amazon Business Financing & Credit* 2022 - 2024
  - *Sr. Product Manager-Technical, ML Ops Developer Platform* 2020 - 2022
  - *Product Manager-Technical, Supply Chain Optimization* 2018 - 2020
  - *Product Manager, Amazon Pricing* 2016 - 2018 (needs at least one bullet)
- **Cognizant Technology Solutions** | one line with a metric, `2015 - 2016`
- Title style is "…Product Manager-Technical" (hyphen, no spaces).
- Dates: years only.

## Bullets
- **SAD order:** Surface (what product or scope) → Action (what she did) → Data (result). Allowed deviations: a trailing mentoring clause, or a qualitative result when no metric is on record. Note any deviation.
- **One message per bullet.** Don't mix two products or two unrelated wins. Keep each result on the bullet for the product that produced it (e.g., overstock $5M → $2M belongs to the agent; WAPE belongs to the platform; shadow mode belongs to the agent).
- No bullet headers or bold labels at the start of bullets.
- Prefer 2 lines, 3 at most. No last line of 1–3 words; trim words until it pulls up.
- **Bold the metric with its result** (the D in SAD), so a hiring manager scanning bold text sees what moved and by how much: "**planner effort 4 hrs/day to 4 hrs/week**", "**agent run cost ~30%**", "**$71M incremental revenue**", not just "**~30%**". Don't bold inputs such as team size, launch percentage, or thresholds. (Updated 2026-10-22, Qualcomm resume.)
- Plain language over Amazon jargon ("privacy and legal teams", not "privacy bar raisers").
- **No AI-sounding prose** (user feedback, 2026-10-24, Stripe resume). Write like a person describing their work:
  - Plain verbs and nouns: "flags forecast problems, finds the cause", not "triages exceptions and diagnoses root causes"; "check how the data fit together", not "validate grain, keys, and join cardinality".
  - At most one parenthetical list per bullet, and only when the items carry weight (e.g., the API catalog's contents). No tech-stack lists unless the JD asks for that stack.
  - Vary the opening verb. Don't start most bullets with "Led", "Owned" or "Launched".
  - Two short sentences beat one long chain of semicolons and commas.
  - Avoid stock phrases: "reusable interfaces", "operating model", "intelligent automation", "aligning C-suite leaders", "drove", "spearheaded".
  - Keep JD keywords, but only where they read naturally.
- No first person ("I").
- Qualify ranges honestly ("up to 26%" when the range is 21–26%).

## Wording that has been decided
- "50K+ customers" (never "millions"); "$7.5M ARR" (never "$7.5MM"); "30+ engineers and data scientists" at Keystone; "mentored 3 dotted-line PMs".
- Don't write "HIPAA-like". Name the controls instead: access controls, encryption, anonymization, data residency.
- Bias work: thin-file SMB underwriting (business-level features only; owner attributes and ZIP excluded). Don't claim fair-lending review.
