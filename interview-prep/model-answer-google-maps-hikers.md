# Model Answer: Improve Google Maps for Hikers
Created 2026-10-28 · Stripe product sense round (asked 10/14/2026 and 07/09/2026)
Built on: the 7-step structure in `interview-prep/2026-10-27-product-case-playbook.md`, CIRCLES and the Product Sense framework in `insider-data/behavioral-interview-frameworks.md`, and the 2024 Stripe feedback in `context-library/interview-history.md` (state the goal, separate user types, bring a novel idea).

Timing: ~25 minutes. Each step ends with a check-in so the interviewer can steer. Spoken parts are in quotes; keep each one near 200 words.

---

## 0. Opening (30 sec)
"Thanks. I'll start with a few questions, set a goal, pick a user group, find their biggest problem, then go through solutions, pick one, and end with metrics."

## 1. Clarify (2 min)
Ask:
1. "Is the goal more hikers using Maps, more time in Maps per hike, or making hiking safer?"
2. "Mobile app only, and should I start in one market, say the US?"
3. "Any constraints I should know, like timeline or team?"

If the interviewer says "your call":
"I'll assume mobile, US first, and the goal is to make Maps the app hikers use from planning through finishing a hike. Today Maps gets people to the trailhead, and then many switch to a hiking app like AllTrails. Maps loses the most valuable part of the trip."

## 2. Goal and metric (1 min)
"My goal is that a hiker keeps using Maps after they park. My main metric is weekly active users who start trail navigation in Maps. Two metrics must not get worse: safety, measured as reported routing errors on trails, and battery drain per hour, because a dead phone on a trail is a real risk."
Check in: "Does that goal work for you?"

## 3. Segment users and pick one (3 min)
"I see three groups, split by experience and type of trip:
1. **Casual day hikers.** Beginners, families, tourists. Short, popular trails. They already search 'hikes near me' in Maps.
2. **Regular enthusiasts.** Hike most weekends, already use AllTrails or Strava. They want new trails, trail conditions and to track their stats.
3. **Backcountry and multi-day hikers.** Small, expert group. They use dedicated GPS apps or devices and need detailed topo maps and full offline use.

There's also a supply side: park services and land managers who own trail data and closures.

I'll pick **casual day hikers**, for two reasons. They're the largest group and already use Maps, so we start with an audience instead of winning one. And they feel the pain most: they don't know what they're getting into, and they're the most likely to get lost. Backcountry hikers are well served by specialist tools, and winning them would need hardware-grade reliability."
Check in: "Okay to go with casual day hikers?"

## 4. Pain points (3 min)
"I'll walk their trip from start to finish:
- **Before:** picking a trail that fits their fitness and time. Is it open? Will it be crowded?
- **Getting there:** Maps sends them to the park's address instead of the trailhead. Parking is full.
- **On the trail:** no signal, so the map stops loading. Not sure which way to go at a fork. Not sure whether they'll get back before dark.
- **After:** saving or sharing the hike.

I'll rank by how often it happens and how bad it is. Picking a trail happens on every hike but is low-stakes. Getting lost without signal happens less often but is the most serious, and it's exactly where Maps stops helping today. So I'll focus on: **'I'm on the trail with no signal and I'm not sure I'm on the right path or that I'll get back before dark.'**"

## 5. Solutions (5 min)
"Three ideas, from obvious to unusual:
1. **Trail mode with automatic offline maps.** When you navigate to a trailhead, Maps downloads the trail and surrounding area automatically. On the trail it gives directions at each junction: 'Keep left at the fork in 0.3 miles.'
2. **Turnaround time.** Maps uses your pace so far, the remaining distance and climb, and today's sunset to say: 'To get back before dark, turn around by 3:40 PM.' Add a trip plan you can share with a contact, and a check-in alert if you're not back by a set time.
3. **'People often go wrong here' alerts.** This uses data only Google has: anonymized location data from many hikers shows where people actually walk, which forks they take by mistake, and when trailhead parking fills up. Maps could warn you at a confusing junction, and show 'parking usually full by 9 AM' the way it shows busy times for restaurants."

## 6. Prioritize (3 min)
| Idea | Impact | Effort | Risk |
|---|---|---|---|
| Trail mode + offline | High: fixes the core problem | Medium: Maps already has offline maps and navigation | Low, if trail data is accurate |
| Turnaround time | High: safety, and nothing else does this simply | Medium | Medium: a wrong estimate can give false confidence |
| Wrong-turn alerts | High, and the most distinctive | High: needs enough hiking data first | Privacy, so it must be anonymized and opt-in |

"I'd ship **trail mode with offline maps first**, with **turnaround time** as the feature people talk about. Wrong-turn alerts come later, and trail mode is what makes them possible: every hiker using trail mode creates the anonymized data that alerts need. So the order is a plan, not just a ranking."

## 7. Metrics, risks, summary (2 min)
"**Main metric:** weekly active users who start trail navigation.
**Leading signs:** share of trips to a trailhead that continue into trail mode; offline download success rate; share of turnaround alerts that hikers act on.
**Must not get worse:** reported trail routing errors, battery drain per hour, and overall Maps performance.

**Risks:**
- Bad trail data could send someone the wrong way. I'd turn on trail mode only on trails whose data meets an accuracy bar, starting with a few well-mapped national parks, and partner with park services for closures.
- Turnaround estimates must be conservative and clearly labeled as estimates.

**Launch:** test with a small group first, measure against the accuracy and battery bars, then expand region by region.

**Summary:** For casual day hikers, the biggest problem is getting lost or caught out after dark once signal drops, which is exactly where Maps stops today. I'd build trail mode with automatic offline maps and a turnaround-time alert, measure weekly trail navigations, and use the anonymized data it produces to add wrong-turn alerts next."

---

## Likely follow-ups (one-line answers)
- **"Why would hikers leave AllTrails?"** "Most casual hikers don't have it yet. They already open Maps to get to the trailhead, so we keep them in the app they're using instead of asking them to download a new one."
- **"How does this make Google money?"** "Not directly at first. It keeps Maps the default outdoors app, and later trailhead businesses (gear shops, cafés) can appear the way local businesses do today."
- **"What if you had to pick only one feature?"** "Trail mode with offline maps. Without it, nothing else works without signal."
- **"How would you do this for backcountry hikers?"** "Different needs: detailed topo maps, multi-day offline, satellite messaging. I'd treat it as a separate later phase, not v1."
- **"What don't you like about Google Maps?"** (the 07/09/2026 version opened with this) "Navigation ends at the parking lot. For hikes, the part where I most need a map is the part Maps doesn't cover."

## Why this answer scores well
- **Goal stated before any solution** (Stripe 2024: "struggled to articulate goals").
- **Three user groups, one picked with two reasons** (Stripe 2024: "didn't distinguish types of users").
- **A novel idea that uses data only the company has** (Stripe 2024: "lacked novel solutions").
- **Sequencing logic:** the first feature creates the data for the third.
- **Must-not-get-worse metrics and safety risks** show judgment, not just ideas.
- **Check-ins after each step** keep it a conversation and stop you running long (your 350–650-word habit).

---

## Adding AI to this answer (added 2026-10-28)
Applies the library's two AI frameworks. Steps 1–4 unchanged; AI enters at step 5 and gets ~60 seconds in step 7.

**AI Productization, applied**
| Library step | For Google Maps for hikers |
|---|---|
| 1. Core superpower | Predicting from patterns across millions of trips; reading trail signs on the phone |
| 2. High-value problem | Lost without signal, or caught out after dark (step 4) |
| 3. Minimal product | One line: "Turn around by 3:40 PM to be back before dark." |
| 4. Feedback loop | Every finished hike's real return time improves the next prediction |
| 5. Human in the loop | It only advises; the hiker decides; it never reroutes on its own |

**Ideas, AI version:** turnaround time predicts *your* return from your pace, climb left, and how similar hikers slowed on this trail; wrong-turn alerts learn from anonymized hiker paths; new "Is this my trail?" camera check reads a signpost on the phone and matches it to the offline map. Skip a trail-picking chat assistant unless asked about planning (it solves the low-stakes pain).

**Step 7, AI Product Design checks (60 sec):** "A few things change because this is AI. It can be wrong, and here wrong means someone is out after dark. So it errs early: it shows a turnaround time it's confident in, never a later one. For trust, when it has little data on a trail it falls back to a simple distance-and-climb rule and labels it 'rough estimate.' Hallucination isn't a risk here because it doesn't generate text, just a time. It learns from every finished hike's real return time. Cost per use is near zero because it runs on the phone, which it has to anyway with no signal. For wrong-turn alerts, I'd favor precision over recall at launch: if half the alerts are false, hikers will ignore all of them. Before launch, I'd test it on past hikes, run it silently on real hikes, and go live only when it's rarely late."

**AI follow-ups:** "Good enough?" → test on past hikes vs. real return times, then run silently; the bar is about being late, not average accuracy. "New trail, no data?" → conservative rule labeled rough estimate until hikes accumulate. "Why on the phone?" → no signal, near-zero cost; a small model fits one narrow prediction.
