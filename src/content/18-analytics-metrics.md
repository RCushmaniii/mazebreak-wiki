---
title: "Analytics & Success Metrics"
chapter: 18
description: "KPIs, telemetry events, and difficulty tuning signals"
icon: "BarChart3"
---

# Analytics & Success Metrics

## 18.1 Key Performance Indicators

| KPI | What It Measures | Target |
|-----|-----------------|--------|
| DAU (Daily Active Users) | Player engagement scale | 1,000+ within 3 months |
| D1 / D7 / D30 Retention | Player stickiness | 40% / 20% / 10% |
| ARPDAU | Revenue per daily user | Benchmark after launch |
| Session Length | Engagement depth | 15–25 minutes |
| Stage Completion Rate | Difficulty balance | 70–85% per stage |
| Boss Kill Rate | Challenge calibration | 40–60% first attempt |
| Shop Conversion | Monetization effectiveness | 2–5% of DAU |

## 18.2 Telemetry Events to Track

- Stage start, stage complete, stage death (with cause of death)
- Enemy kills by type, weapon used, and damage affinity match
- Chest opens, loot received, keys used
- Boss attempts, boss kills, boss deaths (with phase reached)
- Shop views, shop purchases, Battle Pass tier reached
- Session start, session end, session duration
- Co-op sessions initiated, co-op revives, co-op completions
- Tutorial completion rate, tutorial drop-off point

## 18.3 Difficulty Tuning Signals

- **Stage completion rate below 50%** → stage needs difficulty reduction
- **Stage completion rate above 95%** → stage may need to be harder
- **Players consistently die to the same enemy or hazard** → that element needs better telegraphing or a difficulty adjustment
- **Boss kill rate below 30% on first attempt** → boss needs clearer patterns
- **Boss kill rate above 70% on first attempt** → boss is too easy
- **Players skipping mini-bosses consistently** → reward isn't worth the risk, or mini-boss is too hard

## 18.4 Analytics Implementation Priority

Analytics should be added post-MVP (Phase 4 in the development schedule). For MVP, rely on Roblox's built-in analytics dashboard for basic DAU, session length, and retention metrics. Custom telemetry (cause of death, weapon usage, affinity effectiveness) is added when the player base is large enough to generate meaningful data.
