---
title: "Asset Manifest"
chapter: "D"
description: "Complete inventory of all game assets: models, textures, audio, UI, and VFX with production status"
icon: "FolderOpen"
---

# Asset Manifest

This appendix catalogs every asset required to build MazeBreak. Each asset includes its build method, performance budget, and production priority. Assets are organized by category and tagged with a production status.

## Production Context

- **Player Character:** R15 Roblox avatar (no custom player model)
- **Environment:** Roblox primitives (Parts/CSG) with custom textures
- **Enemies, Weapons, Equipment, Props:** Custom Blender meshes exported as .fbx MeshParts
- **Art Style:** Stylized, semi-low-poly, clean silhouettes, flat-shaded or hand-painted textures
- **Map Style:** 2D maze layouts with 3D character models

## Performance Budget

| Category | Triangle Budget | Texture Size | Notes |
|----------|----------------|-------------|-------|
| Enemy models | 500–1,500 tris | 256x256 or 512x512 | Distinct silhouettes required |
| Weapons | 150–500 tris | 256x256 | Attach to R15 hand |
| Equipment (shields, helmets) | 200–500 tris | 256x256 | R15 accessories |
| Pickups (coins, potions, gems, keys) | 50–200 tris | 128x128 or vertex color | Small, seen briefly |
| Chests | 200–500 tris | 256x256 | Two states: closed and open |
| Environment meshes (doors, props) | 300–1,000 tris | 512x512 | Most environment uses primitives |
| Total per stage | ~50,000–80,000 tris | — | Includes all enemies and environment |
| Max simultaneous enemies | 20 on screen | — | Hard cap for performance |

## Asset Pipeline

| Step | Tool | Cost | Notes |
|------|------|------|-------|
| Concept art / reference | Claude + free image AI (Leonardo.ai free tier) | Free | Generate visual references before modeling |
| 3D modeling | Blender | Free | Primary modeling tool for all custom meshes |
| Rough blockouts | Meshy / Tripo3D free tier | Free (limited credits) | Optional: text-to-3D for starting shapes, clean up in Blender |
| Texturing | Blender texture paint + Material Maker | Free | Flat-shaded / hand-painted style |
| AI texture assist | Stable Diffusion (local) or Leonardo.ai free tier | Free | Generate texture maps and material references |
| Rigging and animation | Blender | Free | Enemy rigs, weapon animations |
| Export | Blender .fbx export | Free | Import to Roblox Studio as MeshParts |

## Status Key

| Status | Meaning |
|--------|---------|
| Not Started | Asset is defined but no work has begun |
| In Progress | Currently being modeled, textured, or rigged |
| Review | Asset is built and awaiting quality review |
| Done | Asset is imported into Roblox Studio and tested |
| Deferred | Not needed for MVP, planned for later |

---

## 1. Enemy Models

All enemies require: base mesh, idle animation, walk/move animation, attack animation, hit reaction, and death animation.

| ID | Asset Name | Archetype | Tri Budget | Build Method | Priority | Status |
|----|-----------|-----------|------------|-------------|----------|--------|
| EN-001 | Zombie | Flesh-Based | 800–1,200 | Blender mesh + rig | P0 | Not Started |
| EN-002 | Ghost | Ethereal | 400–800 | Blender mesh (transparency shader) | P1 | Not Started |
| EN-003 | Goblin | Agile Humanoid | 600–1,000 | Blender mesh + rig | P1 | Not Started |
| EN-004 | Orc | Heavy Humanoid | 1,000–1,500 | Blender mesh + rig | P1 | Not Started |
| EN-005 | Stone Monster | Construct | 800–1,200 | Blender mesh + rig | P2 | Not Started |
| EN-006 | Zombie Variant (Ranged) | Flesh-Based | Reuse EN-001 + projectile | Blender modification | P3 | Deferred |
| EN-007 | Goblin Variant (Shielded) | Agile Humanoid | Reuse EN-003 + shield mesh | Blender modification | P3 | Deferred |
| EN-008 | Orc Variant (Explosive) | Heavy Humanoid | Reuse EN-004 + VFX | Blender modification | P3 | Deferred |
| EN-009 | Ghost Variant (Trap-summoning) | Ethereal | Reuse EN-002 + trap mesh | Blender modification | P3 | Deferred |

### Animations Per Enemy

| Animation | Required For | Notes |
|-----------|-------------|-------|
| Idle | All enemies | Looping, subtle movement |
| Walk / Move | All enemies | Ghost floats, Zombie shambles, Goblin darts |
| Attack (telegraph) | All enemies | Clear wind-up before damage frame |
| Attack (strike) | All enemies | Damage frame with hit feedback |
| Hit reaction | All enemies | Brief flinch on taking damage |
| Death | All enemies | Collapse, dissolve, or fade depending on type |

---

## 2. Boss Models

> **Design Gap:** No specific bosses have been named or designed yet. The GDD defines boss rules and encounter structure but not individual boss identities. These entries are placeholders pending boss design decisions.

| ID | Asset Name | Encounter | Tri Budget | Build Method | Priority | Status |
|----|-----------|-----------|------------|-------------|----------|--------|
| BO-001 | First Boss (TBD) | Stage 5–10 milestone | 1,500–2,500 | Blender mesh + rig | P1 | Not Started |
| BO-002 | Second Boss (TBD) | Stage 15–20 milestone | 1,500–2,500 | Blender mesh + rig | P2 | Not Started |
| BO-003 | Third Boss (TBD) | Stage 25+ milestone | 1,500–2,500 | Blender mesh + rig | P3 | Deferred |
| BO-004 | Mini-Boss Template (TBD) | Mid-stage optional | 1,000–1,500 | Blender mesh + rig | P2 | Not Started |

### Boss Animations (Per Boss)

All standard enemy animations plus:

| Animation | Notes |
|-----------|-------|
| Phase transition | Visual shift when entering new attack phase |
| Special attack (x2–3) | Unique attack patterns per boss |
| Defeat / death | Extended celebration-worthy death sequence |

---

## 3. Weapons

All weapons attach to R15 right hand. Each needs: held pose mesh, attack animation (on the R15 rig or as tool animation), and optional particle/trail effect.

| ID | Asset Name | Class | Tri Budget | Build Method | Priority | Status |
|----|-----------|-------|------------|-------------|----------|--------|
| WP-001 | Basic Sword | Sword | 200–400 | Blender mesh | P0 | Not Started |
| WP-002 | Basic Dagger | Dagger | 100–250 | Blender mesh | P0 | Not Started |
| WP-003 | Basic Bow | Bow | 200–350 | Blender mesh | P1 | Not Started |
| WP-004 | Basic Spell Staff | Spell | 200–400 | Blender mesh | P1 | Not Started |
| WP-005 | Arrow Projectile | Bow ammo | 50–100 | Blender mesh | P1 | Not Started |
| WP-006 | Spell Projectile / AoE | Spell effect | Particle/VFX | Roblox ParticleEmitter | P1 | Not Started |
| WP-007 | Fire Sword (Tier 2) | Sword | Reuse WP-001 + fire VFX | Blender retexture | P2 | Not Started |
| WP-008 | Frost Dagger (Tier 2) | Dagger | Reuse WP-002 + ice VFX | Blender retexture | P2 | Not Started |
| WP-009 | Explosive Arrows (Tier 2) | Bow | Reuse WP-005 + explosion VFX | Blender retexture | P2 | Not Started |
| WP-010 | Advanced Sword (Tier 3) | Sword | 300–500 | Blender mesh | P3 | Deferred |
| WP-011 | Advanced Dagger (Tier 3) | Dagger | 200–350 | Blender mesh | P3 | Deferred |
| WP-012 | Advanced Bow (Tier 3) | Bow | 300–450 | Blender mesh | P3 | Deferred |
| WP-013 | Advanced Spell Staff (Tier 3) | Spell | 300–500 | Blender mesh | P3 | Deferred |

---

## 4. Defensive Equipment

Shields attach to R15 left hand. Helmets are R15 head accessories.

| ID | Asset Name | Slot | Tri Budget | Build Method | Priority | Status |
|----|-----------|------|------------|-------------|----------|--------|
| EQ-001 | Wooden Small Shield | Off-hand | 150–250 | Blender mesh | P0 | Not Started |
| EQ-002 | Wooden Large Shield | Off-hand | 200–350 | Blender mesh | P1 | Not Started |
| EQ-003 | Metal Small Shield | Off-hand | 200–300 | Blender mesh | P2 | Not Started |
| EQ-004 | Metal Large Shield | Off-hand | 250–400 | Blender mesh | P2 | Not Started |
| EQ-005 | Basic Helmet | Head | 200–350 | Blender mesh | P0 | Not Started |
| EQ-006 | Horned Helmet | Head | 250–400 | Blender mesh | P1 | Not Started |
| EQ-007 | Gemmed Helmet | Head | 300–500 | Blender mesh | P2 | Not Started |

---

## 5. Pickup Items

Small items collected during gameplay. Simple meshes, often with a glow or particle effect.

| ID | Asset Name | Type | Tri Budget | Build Method | Priority | Status |
|----|-----------|------|------------|-------------|----------|--------|
| PK-001 | Copper Coin | Currency | 30–60 | Blender mesh | P0 | Not Started |
| PK-002 | Silver Coin | Currency | 30–60 | Recolor PK-001 | P0 | Not Started |
| PK-003 | Gold Coin | Currency | 30–60 | Recolor PK-001 | P0 | Not Started |
| PK-004 | Sapphire Gem | Gem | 80–150 | Blender mesh (faceted) | P1 | Not Started |
| PK-005 | Emerald Gem | Gem | 80–150 | Recolor PK-004 | P1 | Not Started |
| PK-006 | Ruby Gem | Gem | 80–150 | Recolor PK-004 | P2 | Not Started |
| PK-007 | Diamond Gem | Gem | 80–150 | Recolor PK-004 | P2 | Not Started |
| PK-008 | Healing Potion | Consumable | 100–200 | Blender mesh (bottle) | P0 | Not Started |
| PK-009 | Speed Potion | Consumable | 100–200 | Recolor PK-008 | P1 | Not Started |
| PK-010 | Key | Consumable | 80–150 | Blender mesh (skeleton key) | P0 | Not Started |

---

## 6. Chests

Two states each: closed (default) and open (after interaction). Open state can be a separate mesh or animated lid.

| ID | Asset Name | Requires Key | Tri Budget | Build Method | Priority | Status |
|----|-----------|-------------|------------|-------------|----------|--------|
| CH-001 | Small Chest (closed) | No | 200–350 | Blender mesh | P0 | Not Started |
| CH-002 | Small Chest (open) | No | 250–400 | Blender mesh | P0 | Not Started |
| CH-003 | Large Chest (closed) | Yes | 300–450 | Blender mesh | P1 | Not Started |
| CH-004 | Large Chest (open) | Yes | 350–500 | Blender mesh | P1 | Not Started |

---

## 7. Environment — Stone Dungeon (Default Theme)

The default maze theme. Built primarily with Roblox primitives and custom textures. Custom meshes only where primitives are insufficient.

### Primitives (Roblox Parts + Textures)

| ID | Asset Name | Build Method | Priority | Status |
|----|-----------|-------------|----------|--------|
| ENV-001 | Stone Wall Segment | Part + stone texture | P0 | Not Started |
| ENV-002 | Stone Floor Tile | Part + floor texture | P0 | Not Started |
| ENV-003 | Ceiling Segment (if applicable) | Part + dark texture | P1 | Not Started |
| ENV-004 | Torch / Wall Light | Part + PointLight + particle fire | P0 | Not Started |
| ENV-005 | Spike Trap (up/down) | Parts + tween animation | P0 | Not Started |
| ENV-006 | Crushing Block | Part + tween animation | P1 | Not Started |
| ENV-007 | Kill Zone / Pit | Part + invisible kill volume | P1 | Not Started |

### Custom Meshes (Blender)

| ID | Asset Name | Tri Budget | Build Method | Priority | Status |
|----|-----------|------------|-------------|----------|--------|
| ENV-008 | Entry Door / Archway | 300–600 | Blender mesh | P0 | Not Started |
| ENV-009 | Exit Door / Archway | 300–600 | Blender mesh | P0 | Not Started |
| ENV-010 | Decorative Broken Weapons (prop) | 100–200 | Blender mesh | P2 | Not Started |
| ENV-011 | Scattered Coins (prop) | 50–100 | Blender mesh | P2 | Not Started |
| ENV-012 | Scorch Marks (decal) | N/A | Texture / Decal | P2 | Not Started |
| ENV-013 | Wooden Barricade (prop) | 200–400 | Blender mesh | P2 | Not Started |

### Textures Required (Stone Dungeon)

| ID | Asset Name | Size | Build Method | Priority | Status |
|----|-----------|------|-------------|----------|--------|
| TX-001 | Stone Wall texture (tileable) | 512x512 | AI-generated + cleanup | P0 | Not Started |
| TX-002 | Stone Floor texture (tileable) | 512x512 | AI-generated + cleanup | P0 | Not Started |
| TX-003 | Wooden Door texture | 512x512 | AI-generated + cleanup | P0 | Not Started |
| TX-004 | Metal Banding texture (chests/doors) | 256x256 | AI-generated + cleanup | P1 | Not Started |
| TX-005 | Torch flame particle sprite | 128x128 | Hand-painted or AI | P0 | Not Started |

---

## 8. Additional Environment Themes (Seasonal)

Each seasonal theme reuses the same primitive structure as Stone Dungeon but with new textures, lighting presets, and a few unique props.

| ID | Theme | Key Visual Changes | Priority | Status |
|----|-------|-------------------|----------|--------|
| TH-001 | Ice Caverns | Blue lighting, ice wall texture, icicle props, frost particle | P3 | Deferred |
| TH-002 | Volcanic Depths | Orange glow, lava floor texture, cracked stone, ember particles | P3 | Deferred |
| TH-003 | Shadow Realm | Purple lighting, ethereal texture, floating debris props | P3 | Deferred |
| TH-004 | Overgrown Ruins | Green tint, vine/moss textures, natural light shafts | P3 | Deferred |

Each theme requires approximately:
- 2–3 new tileable textures (walls, floor)
- 1–2 unique prop meshes
- 1 lighting preset / color configuration
- 1 particle effect set

---

## 9. UI Assets

UI in Roblox is built with ScreenGui / Frame / ImageLabel elements. These assets are 2D images or icons.

| ID | Asset Name | Type | Size | Priority | Status |
|----|-----------|------|------|----------|--------|
| UI-001 | Health Bar frame + fill | ScreenGui element | Scalable | P0 | Not Started |
| UI-002 | Boss Health Bar frame + fill | ScreenGui element | Scalable | P1 | Not Started |
| UI-003 | Coin Counter icon | ImageLabel | 64x64 | P0 | Not Started |
| UI-004 | Key Indicator icon | ImageLabel | 64x64 | P0 | Not Started |
| UI-005 | Equipped Weapon frame | ScreenGui element | Scalable | P0 | Not Started |
| UI-006 | Potion Slot frame | ScreenGui element | Scalable | P0 | Not Started |
| UI-007 | Mini-Map frame + player dot + exit marker | ScreenGui element | Scalable | P1 | Not Started |
| UI-008 | Damage Numbers (font/style) | BillboardGui | Scalable | P0 | Not Started |
| UI-009 | Stage Counter display | TextLabel | Scalable | P1 | Not Started |
| UI-010 | Main Menu layout | ScreenGui | Full screen | P1 | Not Started |
| UI-011 | Inventory Screen layout | ScreenGui | Full screen | P2 | Not Started |
| UI-012 | Shop Screen layout | ScreenGui | Full screen | P2 | Not Started |
| UI-013 | Death Screen | ScreenGui | Full screen | P1 | Not Started |
| UI-014 | Level-Up Screen / Animation | ScreenGui | Full screen | P1 | Not Started |
| UI-015 | Battle Pass Screen layout | ScreenGui | Full screen | P3 | Deferred |
| UI-016 | Leaderboard Screen layout | ScreenGui | Full screen | P3 | Deferred |

---

## 10. Audio Assets

Audio can be sourced from free libraries (Freesound.org, Pixabay audio) or generated. Roblox also has a built-in sound library.

### Sound Effects

| ID | Asset Name | Category | Priority | Status |
|----|-----------|----------|----------|--------|
| SFX-001 | Sword swing | Combat | P0 | Not Started |
| SFX-002 | Sword hit (effective) | Combat | P0 | Not Started |
| SFX-003 | Sword hit (resisted / muted) | Combat | P1 | Not Started |
| SFX-004 | Dagger swing | Combat | P0 | Not Started |
| SFX-005 | Dagger hit | Combat | P0 | Not Started |
| SFX-006 | Bow draw + release | Combat | P1 | Not Started |
| SFX-007 | Arrow impact | Combat | P1 | Not Started |
| SFX-008 | Spell cast | Combat | P1 | Not Started |
| SFX-009 | Spell impact / AoE | Combat | P1 | Not Started |
| SFX-010 | Player taking damage | Combat | P0 | Not Started |
| SFX-011 | Player death | Combat | P0 | Not Started |
| SFX-012 | Enemy hit reaction | Combat | P0 | Not Started |
| SFX-013 | Enemy death | Combat | P0 | Not Started |
| SFX-014 | Enemy attack telegraph | Combat | P0 | Not Started |
| SFX-015 | Block / shield impact | Combat | P1 | Not Started |
| SFX-016 | Coin pickup | UI/Feedback | P0 | Not Started |
| SFX-017 | Gem pickup | UI/Feedback | P1 | Not Started |
| SFX-018 | Potion use | UI/Feedback | P0 | Not Started |
| SFX-019 | Key pickup | UI/Feedback | P0 | Not Started |
| SFX-020 | Chest open (small) | UI/Feedback | P0 | Not Started |
| SFX-021 | Chest open (large) | UI/Feedback | P1 | Not Started |
| SFX-022 | Door open / close | Environment | P0 | Not Started |
| SFX-023 | Spike trap activation | Environment | P0 | Not Started |
| SFX-024 | Crushing block slam | Environment | P1 | Not Started |
| SFX-025 | Level-up chime | UI/Feedback | P0 | Not Started |
| SFX-026 | Boss phase transition sting | Boss | P1 | Not Started |
| SFX-027 | Boss defeat fanfare | Boss | P1 | Not Started |
| SFX-028 | Camera lock / arena seal | Environment | P1 | Not Started |
| SFX-029 | Menu button click | UI | P1 | Not Started |
| SFX-030 | Fire damage sizzle | Affinity | P2 | Not Started |
| SFX-031 | Freeze damage crack | Affinity | P2 | Not Started |
| SFX-032 | Explosive damage boom | Affinity | P2 | Not Started |

### Music Tracks

| ID | Asset Name | Context | Loop | Priority | Status |
|----|-----------|---------|------|----------|--------|
| MUS-001 | Hub / Main Menu theme | Safe area | Yes | P1 | Not Started |
| MUS-002 | Exploration theme (calm) | Early maze stages | Yes | P0 | Not Started |
| MUS-003 | Exploration theme (tense) | Mid-late stages | Yes | P1 | Not Started |
| MUS-004 | Combat intensity layer | Enemy engagement | Crossfade | P1 | Not Started |
| MUS-005 | Boss battle theme | Boss encounters | Yes | P1 | Not Started |
| MUS-006 | Victory / Boss defeat theme | Post-boss | No | P1 | Not Started |
| MUS-007 | Death / Game Over sting | Player death | No | P1 | Not Started |

---

## 11. VFX / Particle Effects

Built using Roblox ParticleEmitters, Beams, and BillboardGuis.

| ID | Asset Name | Context | Build Method | Priority | Status |
|----|-----------|---------|-------------|----------|--------|
| VFX-001 | Damage numbers (floating) | Combat | BillboardGui + tween | P0 | Not Started |
| VFX-002 | Effective damage flash (orange) | Affinity hit | Screen flash + particle | P1 | Not Started |
| VFX-003 | Resisted damage flash (gray) | Affinity hit | Screen flash + particle | P1 | Not Started |
| VFX-004 | Fire trail / burn effect | Fire damage | ParticleEmitter | P2 | Not Started |
| VFX-005 | Freeze / ice effect | Freeze damage | ParticleEmitter + tint | P2 | Not Started |
| VFX-006 | Explosion effect | Explosive damage | ParticleEmitter burst | P2 | Not Started |
| VFX-007 | Healing effect (green glow) | Potion use | ParticleEmitter | P1 | Not Started |
| VFX-008 | Speed boost trail | Speed potion | ParticleEmitter trail | P2 | Not Started |
| VFX-009 | Loot glow — white (common) | Loot rarity | PointLight + particle | P0 | Not Started |
| VFX-010 | Loot glow — green (uncommon) | Loot rarity | PointLight + particle | P1 | Not Started |
| VFX-011 | Loot glow — blue (rare) | Loot rarity | PointLight + particle | P1 | Not Started |
| VFX-012 | Loot glow — purple (epic) | Loot rarity | PointLight + particle | P2 | Not Started |
| VFX-013 | Loot glow — gold (premium) | Boss rewards | PointLight + particle | P2 | Not Started |
| VFX-014 | Chest open burst | Chest interaction | ParticleEmitter burst | P1 | Not Started |
| VFX-015 | Level-up celebration | Progression | ParticleEmitter + flash | P1 | Not Started |
| VFX-016 | Boss defeat particles | Boss victory | ParticleEmitter burst | P1 | Not Started |
| VFX-017 | Invulnerability flash | Player hit | Character tint flicker | P0 | Not Started |
| VFX-018 | Death screen fade | Player death | ScreenGui tween | P1 | Not Started |
| VFX-019 | Torch flame | Environment | ParticleEmitter | P0 | Not Started |

---

## 12. Cosmetic Assets (Post-MVP)

These are monetization-driven assets. None are required for the core game loop.

| ID | Category | Examples | Priority | Status |
|----|----------|---------|----------|--------|
| COS-001 | Weapon Skins | Flaming sword, crystal dagger, shadow bow | P3 | Deferred |
| COS-002 | Pets / Companions | Visual-only followers (high demand with target demo) | P3 | Deferred |
| COS-003 | Trail Effects | Movement trails behind player | P3 | Deferred |
| COS-004 | Victory Animations | Custom boss-kill celebrations | P3 | Deferred |
| COS-005 | Seasonal Cosmetic Sets | Themed to each seasonal environment | P3 | Deferred |

---

## Asset Count Summary

| Category | P0 (MVP) | P1 (Demo) | P2 (Polish) | P3 (Post-Launch) | Total |
|----------|----------|-----------|------------|------------------|-------|
| Enemy Models | 1 | 3 | 1 | 4 variants | 9 |
| Boss Models | 0 | 1 | 2 | 1 | 4 |
| Weapons | 2 | 4 | 3 | 4 | 13 |
| Equipment | 2 | 2 | 3 | 0 | 7 |
| Pickups | 5 | 3 | 2 | 0 | 10 |
| Chests | 2 | 2 | 0 | 0 | 4 |
| Environment (meshes) | 2 | 1 | 3 | 0 | 6 |
| Environment (primitives) | 4 | 3 | 0 | 0 | 7 |
| Textures | 3 | 1 | 1 | 8+ per theme | 13+ |
| UI Elements | 5 | 5 | 2 | 4 | 16 |
| Sound Effects | 14 | 12 | 6 | 0 | 32 |
| Music Tracks | 1 | 5 | 1 | 0 | 7 |
| VFX / Particles | 4 | 8 | 5 | 2 | 19 |
| Cosmetics | 0 | 0 | 0 | 5 categories | 5+ |
| **Totals** | **45** | **50** | **29** | **28+** | **152+** |
