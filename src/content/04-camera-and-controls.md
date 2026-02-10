---
title: "Player Controls & Camera System"
chapter: 4
description: "Hybrid camera system, smooth-follow and fixed-frame modes, controls, and transition rules"
icon: "Camera"
---

# Player Controls & Camera System

## 4.1 Camera Overview

MazeBreak uses a hybrid camera system that dynamically switches between smooth-follow and fixed-frame modes depending on gameplay context. The camera is not just visual — it is a gameplay tool that controls pacing, tension, and fairness. The 3D perspective uses a top-down/isometric angle (approximately 45 degrees) that provides clear visibility of maze corridors while maintaining depth and atmosphere.

## 4.2 Camera Mode 1: Smooth Follow (Default)

**Used in:** Most exploration areas, standard maze navigation, enemy traversal sections.

- Camera smoothly follows the player on X and Z axes from above
- Slight forward-facing bias (camera offset in movement direction) so players can see upcoming threats
- Vertical (Y-axis) movement is dampened to avoid disorientation
- No sudden snaps or jerks; motion is always predictable
- Reinforces exploration, speed, and confident movement

## 4.3 Camera Mode 2: Fixed Frame (Lock-In)

**Used in:** Boss fights, trap-heavy rooms, puzzle rooms, high-precision challenge sections.

- Camera locks to a predefined position showing the entire challenge area
- Camera does not follow the player within this arena
- Clear screen boundaries define the play space
- Reinforces pattern recognition, situational awareness, and skillful execution
- Ensures no off-screen threats or hidden hazards during critical encounters

## 4.4 Camera Transition Rules

Transitions between camera modes must be deliberate, readable, and predictable. Transitions are triggered by entering a trigger zone, passing through a doorway or gate, dropping into a boss arena, or activating a puzzle mechanism.

> **Design Rule:** The player should always understand when and why the camera changes. Visual cues (subtle screen fade, audio sting, environmental framing such as walls closing or doors locking) communicate transitions.

## 4.5 Boss Camera Design

Boss encounters always use fixed camera mode. Boss arenas are designed to fit fully within one screen, clearly show attack patterns, and prevent off-screen threats. No boss attack should ever originate from outside the visible play area. Player deaths during boss fights should always feel earned.

## 4.6 Trap & Puzzle Camera Design

Trap and puzzle sections often use fixed camera mode to allow full visibility of mechanisms, emphasize timing and sequencing, and prevent camera movement from adding artificial difficulty. Examples include spike timing rooms, moving platform puzzles, and laser or hazard grids. In these sections, the challenge is the puzzle itself — the camera never becomes the obstacle.

## 4.7 Player Controls

Controls remain identical regardless of camera mode to preserve muscle memory.

| Action | Keyboard | Mobile (Phase 2) |
|--------|----------|-------------------|
| Move | WASD / Arrow Keys | Virtual joystick |
| Attack | Left Mouse / Space | Attack button |
| Block (if shield) | Right Mouse / Shift | Shield button |
| Interact / Open | E | Interact button |
| Use Potion | Q | Potion button |
| Inventory | Tab / I | Inventory icon |

> **Control Design Rule:** Inputs must never change meaning between camera modes. Camera mode must not affect responsiveness. Precision is prioritized over animation flourish.

> **Fairness Rule:** If a player dies, it should never be because they could not see what was happening.

## 4.8 Technical Notes

- Camera mode is controlled by stage triggers
- Camera logic is handled by a centralized Camera Controller in StarterPlayerScripts
- Stage templates define camera zones
- Boss and puzzle rooms explicitly declare fixed-camera bounds
- This ensures reusability across stages, clean hierarchy, and easy iteration
