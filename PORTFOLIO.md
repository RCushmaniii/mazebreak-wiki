---
# === CONTROL FLAGS ===
portfolio_enabled: true
portfolio_priority: 29
portfolio_featured: false

# === CARD DISPLAY ===
title: "MazeBreak GDD Wiki"
tagline: "Private, searchable game design document wiki for a Roblox development team"
slug: "mazebreak-gdd-wiki"
category: "Developer Tools"
tech_stack:
  - "React 19"
  - "Vite 7"
  - "Tailwind CSS 3"
  - "Clerk Authentication"
  - "Fuse.js"
  - "React Router v6"
  - "Vercel"
thumbnail: "/images/mazebreak-wiki-01.png"

# === DETAIL PAGE ===
problem_solved: |
  Game design documents start as shared Word files or Google Docs that no one
  actually consults once development begins — they're too slow to search, too
  painful to navigate, and too disconnected from the development workflow.
  A 2-person Roblox team was losing momentum every time they needed to look up
  an enemy stat, verify a damage formula, or cross-reference loot tables across
  a 200+ page GDD, turning a 10-second lookup into a 2-minute context switch
  that broke creative flow in Roblox Studio.

# === MEDIA: PORTFOLIO SLIDES ===
slides:
  - src: "/images/mazebreak-wiki-01.png"
    alt_en: "MazeBreak GDD Wiki slide 1"
    alt_es: "MazeBreak GDD Wiki diapositiva 1"
  - src: "/images/mazebreak-wiki-02.png"
    alt_en: "MazeBreak GDD Wiki slide 2"
    alt_es: "MazeBreak GDD Wiki diapositiva 2"
  - src: "/images/mazebreak-wiki-03.png"
    alt_en: "MazeBreak GDD Wiki slide 3"
    alt_es: "MazeBreak GDD Wiki diapositiva 3"
  - src: "/images/mazebreak-wiki-04.png"
    alt_en: "MazeBreak GDD Wiki slide 4"
    alt_es: "MazeBreak GDD Wiki diapositiva 4"
  - src: "/images/mazebreak-wiki-05.png"
    alt_en: "MazeBreak GDD Wiki slide 5"
    alt_es: "MazeBreak GDD Wiki diapositiva 5"
  - src: "/images/mazebreak-wiki-06.png"
    alt_en: "MazeBreak GDD Wiki slide 6"
    alt_es: "MazeBreak GDD Wiki diapositiva 6"
  - src: "/images/mazebreak-wiki-07.png"
    alt_en: "MazeBreak GDD Wiki slide 7"
    alt_es: "MazeBreak GDD Wiki diapositiva 7"

# === MEDIA: VIDEO ===
video_url: "/video/MazeBreak__Taming_the_GDD.mp4"

# === LINKS ===
demo_url: "https://mazebreak-wiki.vercel.app/"
live_url: "https://mazebreak-wiki.vercel.app/"

# === OPTIONAL ===
tags:
  - "developer-tools"
  - "documentation"
  - "react"
  - "game-development"
  - "search"
  - "authentication"

# === REPO HEALTH STATUS ===
# Last audited: 2026-04-05
# Standards defined in: operating-system/delivery/repo-health-baseline.md
health_status:
  sentry: "-"
  testing: "-"
  ci_cd: "Y"
  health_endpoint: "n/a"
  security_headers: "Y"
  rate_limiting: "n/a"
  env_validation: "-"
  analytics: "DEFERRED"
  structured_logging: "-"
  dependabot: "Y"
  secret_scanning: "Y"
  db_backup: "-"
health_status:
  sentry: "-"
  testing: "-"
  ci_cd: "Y"
  health_endpoint: "n/a"
  security_headers: "-"
  rate_limiting: "n/a"
  env_validation: "n/a"
  analytics: "DEFERRED"
  structured_logging: "-"
  dependabot: "Y"
  secret_scanning: "Y"
  db_backup: "-"
---

## Overview

The MazeBreak GDD Wiki is a private documentation platform built for a 2-person Roblox game development team. It transforms a 30+ page Game Design Document into a searchable, navigable web application with 24 chapters covering everything from combat systems and enemy AI to monetization strategy and technical architecture.

The wiki serves as the single source of truth for all game design decisions, accessible instantly from any browser while working in Roblox Studio.

## The Challenge

Game development teams working from traditional design documents face compounding friction:

- **Navigation bottleneck:** A 30+ page Word document requires scrolling and Ctrl+F to find anything, breaking flow during active development
- **Cross-referencing difficulty:** Related systems (e.g., enemy damage and loot tables) live in separate sections with no linking between them
- **Search limitations:** Word's find function matches exact text only — no fuzzy matching, no relevance ranking, no snippet previews
- **Access control:** Sharing a Google Doc or Dropbox file offers limited control over who can view sensitive design decisions
- **Update friction:** Editing a shared document risks formatting issues, merge conflicts, and unclear version history
- **Context switching:** Developers working in Roblox Studio need to alt-tab to a separate application and manually locate the relevant section

Without a purpose-built reference tool, design documents become write-once artifacts that the team avoids consulting.

## The Solution

The MazeBreak GDD Wiki addresses each friction point with targeted design decisions:

**Instant Search:**
- Ctrl+K opens a command-palette-style search modal
- Fuse.js fuzzy matching finds results even with typos or partial terms
- Results show chapter title, matched section heading, and text snippet with context
- Keyboard navigation (arrow keys + Enter) keeps hands on the keyboard
- Sub-50ms response time — faster than the developer can finish typing

**Structured Navigation:**
- 24 chapters organized into 7 logical groups (Core Design, Systems, Content & Economy, etc.)
- Collapsible sidebar with active chapter highlighting
- Previous/Next chapter navigation at the bottom of every page
- Right-sidebar table of contents generated from H2/H3 headings with scroll tracking

**Effortless Content Updates:**
- Each chapter is a standalone markdown file with YAML frontmatter
- Edit a `.md` file, commit, push — Vercel auto-deploys within 60 seconds
- No CMS to learn, no database to manage, no build step to run manually
- Git history provides full version tracking for free

**Restricted Access:**
- Clerk authentication with Google sign-in
- Public sign-up disabled — only manually-provisioned users can access
- Zero monthly cost on Clerk's free Hobby tier
- No content visible without authentication

**Developer-First Design:**
- Dark mode UI inspired by Linear, Raycast, and Stripe Docs
- JetBrains Mono headings, Plus Jakarta Sans body text
- Syntax-highlighted code blocks for Luau snippets in the GDD
- Tables render with proper styling — critical for stat tables, damage matrices, and loot probabilities
- Design rule blockquotes render with colored accents (blue for rules, amber for warnings, red for danger)

## Video Walkthrough

[MazeBreak: Taming the GDD](/video/MazeBreak__Taming_the_GDD.mp4) — A full walkthrough of the documentation engine, demonstrating search, navigation, theming, and PDF export.

## Screenshots

![The Documentation Engine for Game Design](/images/mazebreak-wiki-01.png)
*Hero — The documentation engine transforms scattered design files into a single searchable platform.*

![The 200-Page Monster](/images/mazebreak-wiki-02.png)
*The Problem — Unreadable monoliths, scattered threads, and days wasted hunting for basic rules.*

![Order from Chaos](/images/mazebreak-wiki-03.png)
*The Workflow — Markdown native content, Git push, instant deploy. Single source of truth.*

![Documentation Engine Cover](/images/mazebreak-wiki-04.png)
*MazeBreak GDD Wiki — Purpose-built documentation for game development teams.*

![Smart Engineering Decisions](/images/mazebreak-wiki-05.png)
*Architecture — Vite eager imports, Fuse.js client-side search, React Router, and browser-native print.*

![Stop Managing Documents](/images/mazebreak-wiki-06.png)
*Value Proposition — Search speed of Algolia, reading experience of Stripe, cost of static HTML.*

![Taming the 200-Page GDD Monster](/images/mazebreak-wiki-07.png)
*Full Infographic — Problem, solution, architecture, and technical decisions at a glance.*

## Technical Highlights

- **React 19 + Vite 7:** Fast build times, hot module replacement, and modern React features
- **Client-Side Search Architecture:** Fuse.js indexes all markdown content at app initialization — no server required, no API latency, works offline after initial load
- **Vite Glob Imports:** All `.md` files imported at build time via `import.meta.glob` with raw query, eliminating runtime file fetching
- **Custom Markdown Pipeline:** react-markdown with remark-gfm for tables, rehype-highlight for code blocks, and custom component overrides for callout detection and anchor ID generation
- **Responsive Three-Column Layout:** Sidebar navigation + content area + table of contents on desktop, collapsing gracefully to single-column on mobile
- **SPA with Vercel Rewrites:** `vercel.json` configures catch-all rewrites so React Router handles all paths — direct links and browser refresh work correctly
- **357 KB Gzipped Bundle:** Entire application including all 24 chapters of GDD content ships under 500 KB

## Results

**For the Development Team:**
- Eliminated time spent scrolling through the Word document during development sessions
- Design rules and stat tables are accessible in 2-3 keystrokes from any browser
- Content stays current with the same Git workflow used for game code
- Both team members have authenticated access without sharing credentials or links

**Technical Demonstration:**
- Full-stack web application architecture (client-side SPA with auth and search)
- Authentication integration with third-party identity provider (Clerk + Google OAuth)
- Client-side search engine implementation with fuzzy matching and relevance ranking
- Custom markdown rendering pipeline with syntax highlighting and callout detection
- Dark mode design system with custom color palette, typography, and component styling
- Production deployment pipeline with automated builds and SPA routing configuration
- Developer experience focus — keyboard shortcuts, fast navigation, and minimal friction

This project demonstrates the ability to identify a workflow bottleneck, design a focused solution, and deliver a production-quality tool that integrates into an existing development process. It shows practical application of React, authentication, search, and deployment — not as isolated skills, but as a cohesive product solving a real team need.
