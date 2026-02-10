---
title: "Damage Tables"
chapter: "A"
description: "Relative damage scales for weapons, enemies, and environmental hazards"
icon: "Table"
---

# Appendix A: Damage Tables

Exact damage values will be defined during Sprint 3 (Enemy AI) and tuned throughout playtesting. The framework below establishes the relative scale.

## Player Damage (Base Values)

| Damage Source | Base Range | Affinity Bonus | Affinity Penalty |
|--------------|-----------|---------------|-----------------|
| Player Dagger | 8–12 per hit | +30% if effective | N/A |
| Player Sword | 12–18 per hit | +30% if effective | N/A |
| Player Bow | 10–14 per hit | +30% if effective | N/A |
| Player Spell (AoE) | 15–25 per cast | +30% if effective | N/A |

## Enemy Damage (Base Values)

| Damage Source | Base Range | Notes |
|--------------|-----------|-------|
| Tier 1 Enemy | 5–10 per hit | Survivable, teaches positioning |
| Tier 2 Enemy | 12–20 per hit | Punishing if careless |
| Tier 3 Enemy | 25–40 per hit | Requires deliberate engagement |
| Boss Attack | 30–60 per hit | Massive, demands pattern mastery |
| Environmental Hazard | 15–30 or Instant Death | Clearly telegraphed |

## Baseline Stats

- **Player starting health:** 100 HP
- **Values above assume** a fresh character with no equipment bonuses
- **Invulnerability window:** ~0.75 seconds after taking damage
- **Block damage reduction:** varies by shield type (see Chapter 9)

## Affinity Effectiveness Matrix

| Enemy | Weakness (+30%) | Resistance (-25%) |
|-------|----------------|-------------------|
| Zombie | Fire, Explosive | None |
| Ghost | Spell/Energy | Physical |
| Goblin | Freeze, Explosive | None |
| Orc | Explosive, Fire (slight) | Physical |
| Stone Monster | Explosive/Vibration | Physical |

> **Reminder:** Each enemy has at most ONE weakness OR ONE resistance, never both. Physical damage is never resisted.
