---
title: "Technical Architecture"
chapter: 19
description: "Core architecture, script organization, performance targets, and key systems"
icon: "Server"
---

# Technical Architecture

## 19.1 Core Architecture Principles

- **Server-authoritative:** all combat, loot, progression, and stage generation run on the server
- **Client handles:** rendering, input, camera, and visual feedback only
- **Modular script architecture:** each system (combat, enemies, stages, loot) is independent and reusable
- **Template-based content:** stages, enemies, and loot are data-driven through stored templates

## 19.2 Script Organization

| Location | Contents |
|----------|----------|
| ServerScriptService | Stage Manager, Combat Manager, Loot Manager, Progression Manager, Co-op Manager |
| ReplicatedStorage | Shared modules (damage calculation, affinity tables, item definitions) |
| StarterPlayerScripts | Camera Controller, Input Handler, HUD Controller |
| ServerStorage > StageTemplates | All stage templates organized by category |
| ServerStorage > EnemyTemplates | Enemy models with AI configuration values |
| ReplicatedStorage > ItemData | Weapon stats, shield stats, potion definitions |

## 19.3 Performance Targets

- Maintain 60 FPS on mid-range hardware
- Maximum 20 active enemies per stage to control server load
- Stage despawn system to manage memory (only current + previous stage loaded)
- Asset streaming for cosmetics and visual effects
- Network optimization: minimize RemoteEvent frequency, batch updates where possible

## 19.4 Key Technical Systems

| System | Owner | Priority |
|--------|-------|----------|
| Camera Controller (hybrid modes) | Scripter | Sprint 1 |
| Player Movement + Input | Scripter | Sprint 1 |
| Stage Manager (template spawning) | Scripter | Sprint 2 |
| Combat System (weapons, damage) | Scripter | Sprint 2 |
| Enemy AI Framework | Scripter | Sprint 3 |
| Loot & Inventory System | Scripter | Sprint 4 |
| Progression / Level-Up | Scripter | Sprint 4 |
| HUD / UI System | Both | Sprint 4–5 |
| Co-op Networking | Scripter | Sprint 7+ |
| Monetization / Shop | Both | Sprint 8+ |

## 19.5 Data Persistence

Player data is saved to Roblox DataStore:

- Player level and XP
- Inventory (weapons, shields, helmets, consumables)
- Highest stage reached
- Coins and gems
- Equipped items and cosmetics
- Daily login streak
- Battle Pass progress (post-MVP)

DataStore implementation must include retry logic and graceful failure handling for rate limits and network issues.

## 19.6 Client-Server Communication

- **RemoteEvents:** used for one-way communication (server → client notifications, client → server actions)
- **RemoteFunctions:** used sparingly for request-response patterns (inventory queries)
- **Minimize frequency:** batch damage numbers, loot pickups, and UI updates where possible
- **Validate all client input:** never trust the client for damage calculations, loot generation, or progression
