---
title: "Level & Stage Design"
chapter: 8
description: "Stage templates, dynamic generation, difficulty scaling, and the Stage Manager system"
icon: "Map"
---

# Level & Stage Design

## 8.1 Stage Characteristics

- Each stage is a short, intense 3D maze experience lasting 2–5 minutes
- Maze corridors viewed from top-down perspective with 3D walls, floors, and lighting
- Clear entry and exit points; players always know where they are going
- Stages are self-contained: each is playable and testable in isolation

## 8.2 Dynamic Stage Generation

MazeBreak uses a template-based dynamic stage generation system. Stages are not manually placed in sequence. Instead, a central Stage Manager selects, spawns, aligns, and removes stages at runtime. This enables high replayability with handcrafted quality.

### Stage Template Contents

Each stage template is a self-contained Model stored in ServerStorage containing:

- 3D maze geometry (walls, floors, decorative elements)
- Enemy spawn points with tier and type markers
- Loot spawn points with rarity tier markers
- Mini-boss trigger areas
- Entry point and exit door positions
- Camera zone definitions (smooth-follow vs fixed-frame regions)
- Logic markers and difficulty values

**Storage:** Templates are stored in `ServerStorage > StageTemplates`, organized by category.

> **Design Rule:** Every stage must be playable in isolation.

## 8.3 Stage Categories

| Category | Purpose | Frequency |
|----------|---------|-----------|
| Early Stages | Simple layouts, teach mechanics | Common in first runs |
| Mid Stages | Mixed enemies, tighter timing | Core of most runs |
| Late Stages | Fast enemies, elites, complex mazes | High-difficulty runs |
| Mini-Boss Stages | Optional high-risk encounter | 1 per run |
| Boss Stages | Major milestone encounter | Every 5–10 stages |
| Risk-Reward Stages | Dangerous paths, premium loot | Randomly inserted |

## 8.4 Stage Spawning Logic

The Stage Manager selects a template based on difficulty tier, player progression, and recent stage history (avoiding repeats). It clones the template from ServerStorage, positions it relative to the previous stage exit, parents it to Workspace, and activates enemies and triggers. Old stages despawn for performance and memory control.

The Stage Manager follows this sequence:

1. Selects a template based on difficulty tier, player progression, and recent stage history
2. Clones the template
3. Aligns it to the previous stage exit
4. Parents it to Workspace
5. Activates enemies and triggers

## 8.5 Difficulty Scaling

Difficulty is modified through enemy speed, enemy count, trap timing, loot rarity, and boss pattern complexity. The same template can feel different across runs through these tuning parameters.

> **Randomization Rule:** Controlled randomness only. Learnable patterns remain intact. Loot tables are tiered. Difficulty progression stays consistent across runs.

## 8.6 Difficulty Curve

| Phase | Stages | Enemies | Traps | Loot |
|-------|--------|---------|-------|------|
| Early | 1–5 | Tier 1 only, slow | Simple, telegraphed | Copper coins, basic gear |
| Mid | 6–15 | Tier 1–2 mixed | Moderate timing | Silver/Gold, better weapons |
| Late | 16–25 | Tier 2–3, faster | Tight timing, combos | Gems, rare equipment |
| Endgame | 25+ | Tier 3 + Boss | Expert precision | Diamond, legendary drops |

## 8.7 Failure & Reset Integration

- Death resets the player to the start of the current stage
- The stage fully resets: enemies, loot, and triggers all return to initial state
- Dying 3 times on the same stage: player remains on that stage, stage fully resets, no additional punishment beyond loss of progress
