# Changelog

## v1.1 - 2026-08-03
- 3 new skills: `/find-jobs`, `/build-referral-graph`, `/dashboard` (21 total, up from 18)
- New optional `job-lab/` folder: LinkedIn job + people sourcing via Apify (public data only) and Voyage embeddings for fit scoring. Setup guide: `setup/AUTOMATION-SETUP.md`
- New optional `dashboard/` folder: single-file local visual dashboard (funnel, bottleneck, next actions, job feed, referral coverage)
- Both additions are fully optional — the OS works with zero API keys and without ever opening the dashboard, exactly as in v1.0
- job-lab never logs into LinkedIn, never uses a session/cookie, and never sends a connection request or message — all outreach remains a manual draft
- No changes to v1.0 behavior or files; upgrading is additive only

## v1.0 - 2026-03-24
- Initial release
- 18 skills, 4 sub-agents, 250 company intel profiles
- Behavioral interview frameworks from 500+ coaching sessions
