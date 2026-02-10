---
title: "Game Rules & Fail States"
chapter: 10
description: "Health system, damage rules, invulnerability, environmental hazards, and death penalties"
icon: "ShieldAlert"
---

# Game Rules & Fail States

## 10.1 Health System

- Player has a visible health pool displayed on the HUD
- Damage depends on enemy type, threat tier, and current player defense
- Players should survive small mistakes but be punished for repeated or careless ones
- Healing items restore health up to the player's current maximum; healing cannot exceed max health
- Healing is a limited resource and must be used strategically

## 10.2 Damage & Invulnerability

- After taking damage, the player gains a brief invulnerability window (approximately 0.5–1.0 seconds)
- This prevents rapid, unavoidable damage stacking from multiple enemies
- Visual feedback (character flashing, color change) clearly indicates invulnerability state
- Invulnerability does not prevent environmental instant-death hazards

## 10.3 Environmental Hazards

| Hazard | Damage Type | Behavior |
|--------|------------|----------|
| Spikes | High single hit | Timed or static, clearly visible |
| Crushing Blocks | Instant death | Slow, telegraphed movement |
| Pits / Kill Zones | Instant death | Clearly marked boundaries |
| Timed Traps | Moderate repeated | Rhythmic, learnable pattern |
| Boss Environmental | Varies | Unique per boss encounter |

Instant-death mechanics are rare, clearly signposted, and never ambiguous. If a hazard can kill instantly, the player must have clear warning and reaction time.

## 10.4 Death Penalty & Reset Rules

- Health reaching zero results in player death
- Dying resets the player to the start of the current stage
- The stage fully resets: enemies, loot, and triggers all return to initial state
- Dying 3 times on the same stage: player remains on that stage, stage fully resets, no additional punishment
- No loss of persistent progression (XP, level, inventory) on death
- In co-op: if one player dies, the other has a short window to revive them before full reset

> **Design Intent:** Failure should create tension and learning, not frustration or punishment spirals. Players should feel motivated to try again, not discouraged from continuing.
