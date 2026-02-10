---
title: "Multiplayer & Social Features"
chapter: 15
description: "Phased multiplayer rollout: social layer, co-op mode, and competitive mode"
icon: "Users"
---

# Multiplayer & Social Features

## 15.1 Phase 1: Solo + Social Layer (Launch)

The full game works as a single-player experience at launch. Social features add engagement without requiring co-op.

- **Shared server lobby (hub area):** players see each other, show off cosmetics, emote, and chat
- **Leaderboards:** fastest stage clear times, highest stage reached, most bosses defeated
- **Ghost runs:** see a faint replay of another player's best run on a stage you're attempting
- **Social presence** drives Roblox's discovery algorithm and improves game visibility

## 15.2 Phase 2: Co-Op Mode (Post-Launch Update)

- **2-player co-op dungeon runs:** both players navigate the same maze together
- **Revive mechanic:** if one player dies, the other has a short window to revive them
- **Co-op exclusive stages** with split paths requiring both players to trigger mechanisms
- **Loot sharing:** both players receive loot from chests (no competition for drops)
- **Boss health and damage** scale for two players

## 15.3 Phase 3: Competitive Mode (If Engagement Supports It)

- **Race mode:** two players race through the same maze layout simultaneously in parallel instances
- **Challenge mode:** send a stage to a friend with your best time and challenge them to beat it

## 15.4 Why This Phasing Works

- Phase 1 is low dev cost and gives you social hooks for Roblox's algorithm
- Phase 2 is the real engagement driver but requires networking, sync, and co-op stage design — save it for when the core is stable
- Phase 3 is aspirational and only worth building if the player base supports it

## 15.5 Technical Considerations

Co-op requires server-authoritative combat, synchronized enemy AI, and reliable player state replication. The single-player systems should be fully stable before co-op development begins. Co-op introduces a significant networking complexity increase that must be tested thoroughly.

> **Design Rule:** Build and test single-player first, then layer co-op on top. Do not try to build both simultaneously.
