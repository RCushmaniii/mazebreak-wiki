---
title: "UI / HUD Design"
chapter: 12
description: "In-game HUD elements, menu screens, and HUD design rules"
icon: "Layout"
---

# UI / HUD Design

## 12.1 In-Game HUD Elements

| Element | Position | Purpose |
|---------|----------|---------|
| Health Bar | Top-left | Current HP / Max HP |
| Coin Counter | Top-left (below health) | Current coins collected this run |
| Equipped Weapon | Bottom-center | Active weapon icon + name |
| Potion Slot | Bottom-center (beside weapon) | Available potions + quick-use |
| Key Indicator | Bottom-right | Number of keys held |
| Mini-Map | Top-right | Simplified maze layout, player position, exit marker |
| Boss Health Bar | Top-center (boss fights only) | Boss name + HP |
| Damage Numbers | Floating above enemies | Damage dealt, color-coded by affinity effectiveness |
| Stage Counter | Top-right (below mini-map) | Current stage number |

## 12.2 Menu Screens

- **Main Menu / Hub:** character display, play button, shop, Battle Pass, leaderboards, settings
- **Inventory Screen:** equipped weapon, shield, helmet, consumables, cosmetics
- **Shop Screen:** cosmetic items for purchase with gems or Robux
- **Battle Pass Screen:** free and premium track progress, claimable rewards
- **Leaderboard Screen:** rankings by stage, speed, boss kills
- **Settings:** audio, controls, accessibility options

## 12.3 HUD Design Rules

- HUD must not obstruct gameplay view; keep elements at screen edges
- All information must be readable at a glance during combat
- Color-coding is consistent: green = healing/positive, red = damage/danger, blue = freeze, orange = fire
- HUD scales appropriately for different screen sizes
- During boss fights, the boss health bar takes priority at top-center
- Mini-map can be toggled off by the player if desired
