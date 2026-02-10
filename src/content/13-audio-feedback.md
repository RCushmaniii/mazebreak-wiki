---
title: "Audio & Feedback Design"
chapter: 13
description: "Sound categories, audio design rules, and priority system for gameplay audio"
icon: "Volume2"
---

# Audio & Feedback Design

## 13.1 Audio Categories

| Category | Purpose | Examples |
|----------|---------|---------|
| Combat SFX | Communicate attack outcomes | Hit sounds, block sounds, miss/whiff sounds |
| Enemy Telegraphs | Warn players of incoming attacks | Wind-up grunts, charge-up tones, slam impacts |
| Affinity Feedback | Communicate damage effectiveness | Crunchy hit = effective, dull thud = resisted |
| Environmental | Build atmosphere and signal hazards | Trap clicks, door mechanisms, ambient dungeon |
| UI/Feedback | Confirm player actions | Loot pickup, level-up fanfare, chest open |
| Music | Set mood and pace | Exploration theme, boss battle theme, hub theme |

## 13.2 Audio Design Rules

- Every enemy attack type has a unique audio telegraph that plays before the visual wind-up
- Effective damage sounds are satisfying and crunchy; resisted damage sounds dull and muted
- Boss phase transitions have distinct audio stings that alert the player to pattern changes
- Camera mode transitions use subtle audio cues (door lock sound, arena seal)
- Music intensity scales with combat engagement (adaptive/layered music system)
- All critical gameplay audio is distinguishable from background music

## 13.3 Audio Priority

When multiple sounds compete, priority order is:

1. Enemy telegraph sounds (highest)
2. Player damage taken
3. Player attack sounds
4. Environmental hazards
5. Loot/UI feedback
6. Ambient/music (lowest)

This ensures players always hear the most gameplay-critical information first.

## 13.4 Music Design

- **Hub theme:** Calm, inviting, social. Encourages players to linger and explore the lobby.
- **Exploration theme:** Atmospheric tension with moderate energy. Builds anticipation.
- **Combat theme:** Layered on top of exploration when enemies engage. Higher energy, rhythmic.
- **Boss theme:** Distinct, memorable, intense. Each boss should ideally have a unique musical identity.
- **Victory fanfare:** Short, satisfying, celebratory. Plays on boss defeat and major milestones.

## 13.5 Feedback Design (Visual + Audio Combined)

Every significant gameplay event has both visual and audio feedback:

- **Taking damage:** Screen flash + hit sound + health bar animation
- **Dealing effective damage:** Large orange numbers + crunchy hit sound + enemy flinch
- **Dealing resisted damage:** Small gray numbers + dull thud + minimal enemy reaction
- **Level-up:** Screen overlay + fanfare + stat increase display
- **Boss kill:** Celebration particles + victory music + reward cascade
- **Death:** Death animation + somber sound + screen fade to death screen
