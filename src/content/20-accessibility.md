---
title: "Accessibility"
chapter: 20
description: "Accessibility features for Roblox's diverse young audience"
icon: "Accessibility"
---

# Accessibility

Given the 9–16+ age range and Roblox's diverse audience, accessibility features improve both usability and retention.

## 20.1 Accessibility Features

| Feature | Purpose | Priority |
|---------|---------|----------|
| Colorblind-friendly damage indicators | Shape + color (not color alone) for affinity feedback | High |
| Adjustable camera smoothing | Reduce motion sensitivity | Medium |
| Scalable UI / HUD | Support different screen sizes and resolutions | High |
| Audio cue redundancy | Critical information conveyed both visually and audibly | High |
| Rebindable controls (if platform allows) | Support different input preferences | Low |
| Reduced screen shake option | Comfort for motion-sensitive players | Medium |
| Text size options for UI | Readability for younger players | Medium |

## 20.2 Accessibility Design Rules

- Color is never the sole indicator of any gameplay-critical information
- All enemy telegraphs have both visual and audio components
- Damage effectiveness is communicated through number size, color, and sound (three channels)
- UI elements maintain readable contrast ratios against all background types
- Screen shake and flash effects can be reduced or disabled in settings
- The game should be playable (if harder) with audio muted

## 20.3 Implementation Priority

High-priority accessibility features (colorblind indicators, scalable UI, audio redundancy) should be addressed during the main development sprints, not treated as polish. Medium and low priority features can be added post-MVP based on player feedback.
