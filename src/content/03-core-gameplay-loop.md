---
title: "Core Gameplay Loop & Meta Loop"
chapter: 3
description: "Per-stage loop, cross-session meta loop, and session flow design"
icon: "RefreshCw"
---

# Core Gameplay Loop & Meta Loop

## 3.1 Core Loop (Per Stage)

1. Stage is dynamically spawned from template pool based on difficulty tier
2. Player spawns at stage entry point
3. Navigate 3D maze layout from top-down perspective
4. Avoid or fight enemies using pattern recognition and weapon choice
5. Collect coins, gems, and keys from the environment
6. Open chests for loot rewards (small chests free, large chests require keys)
7. Optionally engage mini-boss for high-value treasure
8. Reach the exit door to advance
9. Stage complete: XP awarded, loot tallied, next stage loads

The core loop repeats with increasing difficulty. Each run through the loop should take 2–5 minutes per stage.

## 3.2 Meta Loop (Across Sessions)

The meta loop is what brings players back between sessions. This is where retention lives.

- **Persistent character progression:** stats, level, and unlocks carry across sessions
- **Daily login rewards:** coins, potions, or cosmetic items for returning each day
- **Battle Pass progression:** free and premium tracks with seasonal cosmetics and rewards
- **Weekly challenges:** specific objectives (defeat 10 bosses, clear 5 stages with no damage) for bonus XP
- **Leaderboards:** fastest stage clear times, highest stage reached, boss kill counts
- **Cosmetic collection:** skins, pets, trail effects, and victory animations as long-term goals
- **Seasonal content:** new maze themes, enemies, and cosmetics each season (6–8 week cycles)

## 3.3 Session Flow

A typical session follows this pattern: Player loads into the hub lobby, checks daily rewards and Battle Pass progress, selects solo or co-op mode, enters a dungeon run of 5–10 stages, returns to the hub after completion or death, reviews loot and progression, and optionally starts another run or logs off.

Target session length is 15–30 minutes. Each run should feel complete and satisfying regardless of how far the player progressed.
