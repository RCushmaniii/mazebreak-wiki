# MazeBreak GDD Wiki v1.0.0 — Initial Release

## Overview

Private, searchable documentation wiki for the MazeBreak Game Design Document. Gives the development team instant access to all 24 GDD chapters from any browser, replacing the 30+ page Word document with a fast, navigable web application.

---

## Features

### Search

- Full-text fuzzy search across all 24 chapters via Ctrl+K command palette
- Fuse.js engine indexes titles, headings, descriptions, and body content
- Results display chapter title, matched section heading, and text snippet
- Keyboard navigation (arrow keys, Enter, Escape)

### Navigation

- Sidebar with 7 collapsible chapter groups (Core Design, Systems, Content & Economy, Player Experience, Business & Growth, Technical, Appendices)
- Active chapter highlighting
- Previous/Next chapter navigation at bottom of every page
- Right-sidebar table of contents generated from H2/H3 headings with scroll tracking
- Ctrl+[ / Ctrl+] keyboard shortcuts for chapter navigation

### Content Rendering

- GitHub-flavored markdown with tables, code blocks, blockquotes, and lists
- Syntax highlighting for code blocks (Luau snippets, etc.)
- Callout detection: blockquotes containing "Design Rule:", "Warning:", or "Danger:" render with colored accents
- Horizontally scrollable tables on mobile

### Authentication

- Clerk integration with Google sign-in
- Public sign-up disabled — access restricted to manually provisioned team members
- All routes protected — no content visible without authentication
- Google avatar displayed via Clerk UserButton

### Theme

- Light/dark mode toggle in header (Sun/Moon icons)
- Defaults to system preference, persists choice in localStorage
- Flash-prevention script applies theme before first paint
- WCAG AA contrast ratios verified for both palettes

### Design

- Dark mode: `#0F1117` background, `#E8ECF4` text
- Light mode: `#FAFBFE` background, `#111827` text
- JetBrains Mono headings, Plus Jakarta Sans body, JetBrains Mono code
- Responsive: three-column desktop, single-column mobile

### Content

- 21 numbered chapters covering game overview through risk register
- 3 appendices: damage tables, loot tables, glossary
- Markdown-driven — update content by editing `.md` files and pushing to Git

### Deployment

- Vercel with automatic deploys from `main` branch
- SPA routing configured via `vercel.json`
- 358 KB gzipped bundle size

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS 3 |
| Auth | Clerk (Google sign-in) |
| Search | Fuse.js (client-side) |
| Markdown | react-markdown + remark-gfm + rehype-highlight |
| Routing | React Router v6 |
| Icons | Lucide React |
| Hosting | Vercel |

---

## Links

- **Live:** [mazebreak-wiki.vercel.app](https://mazebreak-wiki.vercel.app/)
- **Repo:** [github.com/RCushmaniii/mazebreak-wiki](https://github.com/RCushmaniii/mazebreak-wiki)
