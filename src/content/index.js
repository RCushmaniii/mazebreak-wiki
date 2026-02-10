/**
 * MazeBreak GDD Wiki - Chapter Registry
 * 
 * This is the single source of truth for which chapters exist and their order.
 * To add a new chapter:
 *   1. Create a new .md file in this directory
 *   2. Add an entry to the `chapters` array below
 *   3. Add the chapter ID to the appropriate group in `chapterGroups`
 *   4. Commit and push — Vercel auto-deploys
 */

export const chapters = [
  {
    id: "game-overview",
    chapter: 1,
    title: "Game Overview & High Concept",
    file: "01-game-overview.md",
    icon: "Gamepad2",
    description: "Game identity, target audience, high concept, and competitive landscape"
  },
  {
    id: "design-pillars",
    chapter: 2,
    title: "Design Pillars",
    file: "02-design-pillars.md",
    icon: "Columns3",
    description: "Skill Over Luck, Meaningful Progression, Risk vs Reward — the non-negotiable foundation"
  },
  {
    id: "core-gameplay-loop",
    chapter: 3,
    title: "Core Gameplay Loop & Meta Loop",
    file: "03-core-gameplay-loop.md",
    icon: "RefreshCw",
    description: "Per-stage loop, cross-session meta loop, and session flow design"
  },
  {
    id: "camera-and-controls",
    chapter: 4,
    title: "Player Controls & Camera System",
    file: "04-camera-and-controls.md",
    icon: "Camera",
    description: "Hybrid camera system, smooth-follow and fixed-frame modes, controls, and transition rules"
  },
  {
    id: "combat-system",
    chapter: 5,
    title: "Combat System",
    file: "05-combat-system.md",
    icon: "Swords",
    description: "Weapons, damage affinities, defensive mechanics, and combat flow rules"
  },
  {
    id: "enemy-design",
    chapter: 6,
    title: "Enemy Design System",
    file: "06-enemy-design.md",
    icon: "Skull",
    description: "Threat tiers, enemy archetypes, damage affinities, and late-game variants"
  },
  {
    id: "boss-system",
    chapter: 7,
    title: "Boss System",
    file: "07-boss-system.md",
    icon: "Crown",
    description: "Mini-bosses, main bosses, victory rewards, and boss design rules"
  },
  {
    id: "level-and-stage-design",
    chapter: 8,
    title: "Level & Stage Design",
    file: "08-level-and-stage-design.md",
    icon: "Map",
    description: "Stage templates, dynamic generation, difficulty scaling, and the Stage Manager system"
  },
  {
    id: "economy-loot-progression",
    chapter: 9,
    title: "Economy, Loot & Progression",
    file: "09-economy-loot-progression.md",
    icon: "Coins",
    description: "Currencies, gems, equipment, consumables, chests, and the level-up system"
  },
  {
    id: "game-rules-fail-states",
    chapter: 10,
    title: "Game Rules & Fail States",
    file: "10-game-rules-fail-states.md",
    icon: "ShieldAlert",
    description: "Health system, damage rules, invulnerability, environmental hazards, and death penalties"
  },
  {
    id: "onboarding-tutorial",
    chapter: 11,
    title: "Onboarding & Tutorial Flow",
    file: "11-onboarding-tutorial.md",
    icon: "GraduationCap",
    description: "First-run experience, progressive system introduction, and new player retention"
  },
  {
    id: "ui-hud-design",
    chapter: 12,
    title: "UI / HUD Design",
    file: "12-ui-hud-design.md",
    icon: "Layout",
    description: "In-game HUD elements, menu screens, and HUD design rules"
  },
  {
    id: "audio-feedback",
    chapter: 13,
    title: "Audio & Feedback Design",
    file: "13-audio-feedback.md",
    icon: "Volume2",
    description: "Sound categories, audio design rules, and priority system for gameplay audio"
  },
  {
    id: "visual-style-art",
    chapter: 14,
    title: "Visual Style & Art Direction",
    file: "14-visual-style-art.md",
    icon: "Palette",
    description: "Art style, visual priorities, color language, and seasonal themes"
  },
  {
    id: "multiplayer-social",
    chapter: 15,
    title: "Multiplayer & Social Features",
    file: "15-multiplayer-social.md",
    icon: "Users",
    description: "Phased multiplayer rollout: social layer, co-op mode, and competitive mode"
  },
  {
    id: "monetization",
    chapter: 16,
    title: "Monetization Design",
    file: "16-monetization.md",
    icon: "DollarSign",
    description: "Revenue tiers, pricing, Battle Pass, and what is never sold"
  },
  {
    id: "retention-live-ops",
    chapter: 17,
    title: "Retention & Live Ops",
    file: "17-retention-live-ops.md",
    icon: "TrendingUp",
    description: "Daily hooks, weekly engagement, seasonal content cadence, and retention targets"
  },
  {
    id: "analytics-metrics",
    chapter: 18,
    title: "Analytics & Success Metrics",
    file: "18-analytics-metrics.md",
    icon: "BarChart3",
    description: "KPIs, telemetry events, and difficulty tuning signals"
  },
  {
    id: "technical-architecture",
    chapter: 19,
    title: "Technical Architecture",
    file: "19-technical-architecture.md",
    icon: "Server",
    description: "Core architecture, script organization, performance targets, and key systems"
  },
  {
    id: "accessibility",
    chapter: 20,
    title: "Accessibility",
    file: "20-accessibility.md",
    icon: "Accessibility",
    description: "Accessibility features for Roblox's diverse young audience"
  },
  {
    id: "risk-register",
    chapter: 21,
    title: "Risk Register",
    file: "21-risk-register.md",
    icon: "AlertTriangle",
    description: "Top project risks, impact assessment, and mitigation strategies"
  },
  {
    id: "appendix-a-damage-tables",
    chapter: "A",
    title: "Damage Tables",
    file: "appendix-a-damage-tables.md",
    icon: "Table",
    description: "Relative damage scales for weapons, enemies, and environmental hazards"
  },
  {
    id: "appendix-b-loot-tables",
    chapter: "B",
    title: "Loot Tables",
    file: "appendix-b-loot-tables.md",
    icon: "Package",
    description: "Drop probabilities by chest type and stage tier"
  },
  {
    id: "appendix-c-glossary",
    chapter: "C",
    title: "Glossary",
    file: "appendix-c-glossary.md",
    icon: "BookOpen",
    description: "Definitions of key terms used throughout the GDD"
  }
];

export const chapterGroups = [
  {
    group: "Core Design",
    chapters: ["game-overview", "design-pillars", "core-gameplay-loop"]
  },
  {
    group: "Systems",
    chapters: ["camera-and-controls", "combat-system", "enemy-design", "boss-system"]
  },
  {
    group: "Content & Economy",
    chapters: ["level-and-stage-design", "economy-loot-progression", "game-rules-fail-states"]
  },
  {
    group: "Player Experience",
    chapters: ["onboarding-tutorial", "ui-hud-design", "audio-feedback", "visual-style-art"]
  },
  {
    group: "Business & Growth",
    chapters: ["multiplayer-social", "monetization", "retention-live-ops", "analytics-metrics"]
  },
  {
    group: "Technical",
    chapters: ["technical-architecture", "accessibility", "risk-register"]
  },
  {
    group: "Appendices",
    chapters: ["appendix-a-damage-tables", "appendix-b-loot-tables", "appendix-c-glossary"]
  }
];
