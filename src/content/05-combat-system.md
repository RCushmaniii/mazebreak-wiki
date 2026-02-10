---
title: "Combat System"
chapter: 5
description: "Weapons, damage affinities, defensive mechanics, and combat flow rules"
icon: "Swords"
---

# Combat System

## 5.1 Combat Overview

Combat in MazeBreak is deliberate, pattern-based, and punishment-driven. Enemies are designed to be readable, while player success depends on timing, positioning, and commitment. The system rewards patience, precision, learning enemy behavior, and smart risk assessment. Button mashing is actively punished through recovery frames and commitment windows.

## 5.2 Weapon Classes

Each weapon class fills a distinct combat role. No weapon is strictly better than another; each supports different playstyles and has clear tradeoffs.

| Weapon | Role | Speed | Range | Risk Profile |
|--------|------|-------|-------|-------------|
| Dagger | Fast melee | Very Fast | Short | High risk, high reward |
| Sword | Balanced melee | Medium | Medium | Medium risk, consistent |
| Bow | Precision ranged | Medium | Long | Lower risk, aim-dependent |
| Spell | Area control | Slow | Medium | High impact, cooldown-gated |

**Dagger:** Very fast attack speed with shortest range. Excels at hit-and-run tactics. Punishes missed attacks or greed. Rewards aggressive, confident players with strong positioning.

**Sword:** Moderate attack speed and range. Reliable damage output. Flexible against most enemy types. The most consistent and beginner-friendly weapon.

**Bow:** Long range, requires accurate aiming. Lower damage per hit but strong against fast or dangerous enemies. Rewards patience and accuracy over aggression.

**Spell:** Damages multiple enemies in an area. Effective against clustered threats. Slower activation with cooldown. Encourages strategic positioning and crowd control.

## 5.3 Weapon Attributes

Weapons are defined by a shared attribute set:

- **Damage:** Base damage per hit
- **Attack Speed:** Time between attacks
- **Range:** Effective hit distance
- **Damage Radius:** Area affected (if applicable)

These attributes interact with enemy threat tier, damage affinities, and player progression bonuses.

## 5.4 Damage Affinity System

The game uses exactly four damage types: Physical, Explosive, Fire, and Freeze. This is a lightweight affinity system, not a full elemental system. Think Monster Hunter, not Pokémon.

| Rule | Detail |
|------|--------|
| Damage Types | Physical, Explosive, Fire, Freeze (exactly four) |
| Enemy Affinities | Each enemy may have ONE resistance OR ONE weakness, never both |
| Physical Baseline | Physical damage is never resisted by any enemy |
| Freeze Behavior | Freeze focuses on movement control, not raw damage |
| Explosive Behavior | Explosive damage is rare, high-impact, and limited in availability |
| Progression Gate | Ignoring affinities never blocks progress; it only reduces efficiency |
| Feedback | Visual and audio feedback communicates effectiveness clearly |

> **Design Rule:** This system rewards awareness but never blocks progress. If a player ignores damage affinities entirely, they can still beat the game.

## 5.5 Damage Affinity Interaction

Weapons and attacks may interact differently with enemy types:

- Some weapons are more effective against certain enemies
- Some enemies resist certain damage types
- No enemy is immune to any damage type
- Effective hits deal +30% damage with satisfying visual/audio feedback
- Resisted hits deal -25% damage with muted visual/audio feedback

## 5.6 Defensive Combat

- Blocking reduces incoming damage when a shield is equipped
- Positioning and spacing are the primary defensive tools
- Poor positioning causes damage to stack quickly against the player
- After taking damage, a brief invulnerability window prevents rapid damage stacking
- Defense is about avoiding mistakes, not absorbing unlimited damage

## 5.7 Combat Flow Rules

- Combat is never chaotic; enemy attacks are clearly telegraphed with visual and audio cues
- Multiple enemies increase pressure through coordination, not randomness
- Mistakes compound quickly, encouraging careful play over recklessness
- Every hit taken is the result of a readable mistake the player could have avoided

> **Core Combat Rule:** Combat logic is server-authoritative. Weapon behavior is modular and reusable. Hit reactions provide clear feedback. Damage numbers and effects are readable at a glance.
