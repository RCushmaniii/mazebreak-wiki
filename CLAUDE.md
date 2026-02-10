# MazeBreak GDD Wiki — Project Instructions

## Project Overview

Private documentation wiki for the MazeBreak Game Design Document. React SPA with Clerk auth, Fuse.js search, and markdown-driven content. Deployed on Vercel.

## Tech Stack

- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS 3 (dark mode only, no theme toggle)
- **Auth**: Clerk (Google sign-in, manual user provisioning, free tier)
- **Search**: Fuse.js client-side fuzzy search
- **Markdown**: react-markdown + remark-gfm + rehype-highlight
- **Routing**: React Router v6
- **Package Manager**: pnpm
- **Hosting**: Vercel (static SPA with `vercel.json` rewrites)

## Architecture

- All GDD content lives as `.md` files in `src/content/`
- `src/content/index.js` is the single source of truth for chapter ordering and navigation groups
- Markdown files are imported at build time via Vite's `import.meta.glob` with `?raw` query
- Frontmatter is stripped with regex (no gray-matter — it requires Node.js `fs`)
- Search index is built once at app initialization from all markdown content
- No backend, no API routes, no database — pure client-side SPA

## Key Files

- `src/content/index.js` — Chapter registry. Edit this when adding/removing/reordering chapters.
- `src/components/MarkdownRenderer.jsx` — Renders markdown with callout detection (warning/danger/success blockquotes)
- `src/hooks/useSearch.js` — Fuse.js search with result processing and snippet extraction
- `src/utils/searchIndex.js` — Builds the search index from all .md files
- `src/index.css` — All prose styling for rendered markdown (`.prose-wiki` class)
- `vercel.json` — SPA rewrite rules, critical for client-side routing on Vercel

## Content Conventions

- Chapter files use YAML frontmatter: `title`, `chapter`, `description`, `icon`
- Icons reference Lucide React component names (e.g., `Swords`, `Gamepad2`)
- Headings generate anchor IDs for table of contents navigation
- Blockquotes containing "Design Rule:" / "Warning:" / "Danger:" render with colored accents
- Tables are wrapped in a scrollable container for mobile

## Design System

- Dark mode only. Background: `#0F1117`. No light theme.
- Headings: JetBrains Mono. Body: Plus Jakarta Sans. Code: JetBrains Mono.
- Color palette defined as CSS variables in `src/index.css` and Tailwind tokens in `tailwind.config.js`
- Accent blue: `#3B82F6`. Warning amber: `#F59E0B`. Danger red: `#EF4444`. Success green: `#22C55E`.

## Development Commands

```powershell
pnpm dev          # Start dev server
pnpm build        # Production build (output: dist/)
pnpm preview      # Preview production build locally
pnpm lint         # Run ESLint
```

## Environment Variables

Only one required:

```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
```

Stored in `.env.local` (gitignored). The publishable key is safe for client-side exposure.

## Deployment

Push to `main` triggers Vercel auto-deploy. Set `VITE_CLERK_PUBLISHABLE_KEY` in Vercel's environment variables.

## Rules

- Do not add a light/dark theme toggle. This is dark mode only.
- Do not add a CMS or in-browser editor. Content is updated by editing `.md` files.
- Do not add features not in the PRD (comments, annotations, version history, public sharing).
- Do not use gray-matter or any Node.js-only package in browser code.
- Keep bundle size under 500 KB gzipped.
- All routes must require Clerk authentication — no public content.
- When adding a chapter: create the `.md` file, register in `src/content/index.js`, add to a group.
