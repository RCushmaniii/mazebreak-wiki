---
title: "Loot Tables"
chapter: "B"
description: "Drop probabilities by chest type and stage tier"
icon: "Package"
---

# Appendix B: Loot Tables

Loot drop probabilities by chest type and stage tier. To be finalized during economy balancing (Sprint 5).

## Chest Drop Rates

| Item | Small Chest (Early) | Small Chest (Late) | Large Chest |
|------|--------------------|--------------------|-------------|
| Copper Coins (1–5) | 80% | 40% | 10% |
| Silver Coins (1–3) | 15% | 40% | 30% |
| Gold Coins (1–2) | 5% | 15% | 30% |
| Basic Weapon | 10% | 5% | 0% |
| Advanced Weapon | 0% | 5% | 20% |
| Small Shield | 5% | 5% | 5% |
| Rare Shield | 0% | 2% | 10% |
| Healing Potion | 20% | 15% | 15% |
| Speed Potion | 5% | 10% | 15% |
| Gem (any) | 0% | 5% | 40% |

Probabilities are rolled independently per slot. Each chest has 1–3 item slots depending on type.

## Enemy Drop Rates

| Enemy Tier | Coin Drop | Key Drop | Potion Drop |
|-----------|----------|---------|-------------|
| Tier 1 | 80% (copper) | 1% | 5% |
| Tier 2 | 90% (copper/silver) | 3% | 8% |
| Tier 3 | 95% (silver/gold) | 5% | 10% |
| Mini-Boss | 100% (gold) | 20% | 25% |
| Boss | 100% (gold + gem) | N/A | 50% |

## Gem Distribution (Large Chests)

| Gem | Drop Rate within Gem Pool |
|-----|--------------------------|
| Sapphire | 50% |
| Emerald | 30% |
| Ruby | 15% |
| Diamond | 5% |

## Boss Loot

Boss loot is guaranteed and not subject to randomization:

- 1 guaranteed Gold Coin drop (5–10 coins)
- 1 guaranteed Gem drop (Emerald or better)
- 1 guaranteed equipment drop (weapon or armor, scaled to current difficulty tier)
- Sufficient XP for a level-up (or near level-up)

> **Balancing Note:** These values are starting points. Expect significant tuning during Sprint 7 playtesting. Make all loot table values easily configurable in a shared module, not hardcoded across multiple scripts.
