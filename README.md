# MazeBreak GDD Wiki

Private, searchable documentation wiki for the MazeBreak Game Design Document. Provides instant access to all 24 GDD chapters with full-text search, chapter-based navigation, and Clerk-authenticated access restricted to the development team.

Built for a 2-person Roblox development team that needs to quickly reference design rules, enemy stats, system specs, and architecture decisions while working in Roblox Studio.

---

## Features

| Capability | Outcome |
|------------|---------|
| Full-text search (Ctrl+K) | Find any design rule, stat, or system spec across all 24 chapters in under 50ms |
| Chapter-based navigation | Sidebar with collapsible groups mirrors the GDD's logical structure |
| Markdown-driven content | Update GDD content by editing `.md` files and pushing to Git — Vercel auto-deploys |
| Clerk authentication | Access restricted to invited team members only via Google sign-in |
| Dark mode UI | High-contrast, developer-tool aesthetic designed for extended reference sessions |
| Responsive layout | Three-column desktop, single-column mobile — usable on any device |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS 3 |
| Auth | Clerk (Google sign-in, manual user provisioning) |
| Search | Fuse.js (client-side, fuzzy matching) |
| Markdown | react-markdown + remark-gfm + rehype-highlight |
| Routing | React Router v6 |
| Icons | Lucide React |
| Hosting | Vercel (static SPA) |

---

## Quick Start

### Prerequisites

- Node.js 18.17 or later
- pnpm (`corepack enable` if not installed)
- A Clerk account with an application configured (see [Auth Setup](#auth-setup))

### 1. Clone and install

```powershell
git clone https://github.com/RCushmaniii/mazebreak-wiki.git
cd mazebreak-wiki
pnpm install
```

### 2. Configure environment

```powershell
notepad .env.local
```

Add your Clerk publishable key:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
```

### 3. Start development server

```powershell
pnpm dev
```

The wiki will be available at `http://localhost:5173`. You'll see the Clerk sign-in screen — authenticate with a Google account that has been manually provisioned in your Clerk dashboard.

### 4. Build for production

```powershell
pnpm build
```

Output is written to `dist/`. The production build is approximately 357 KB gzipped.

---

## Auth Setup

This project uses Clerk's free Hobby tier with manual user provisioning (no public sign-up):

1. Create an application at [clerk.com](https://clerk.com)
2. Enable **Google** under Social Connections
3. Under **Settings**, disable **"Enable sign up"**
4. Under **Users**, click **Create User** and add each team member's Gmail address
5. Copy the **Publishable Key** from the Clerk dashboard into `.env.local`

Only manually-created users can authenticate. No one else can create an account.

---

## Project Structure

```
mazebreak-wiki/
├── public/                         # Static assets
├── src/
│   ├── main.jsx                    # Entry point, Clerk + Router providers
│   ├── App.jsx                     # Route definitions, auth wrappers
│   ├── index.css                   # Tailwind directives, prose styling, color system
│   ├── components/
│   │   ├── Layout.jsx              # Three-column shell (sidebar + content + TOC)
│   │   ├── Sidebar.jsx             # Collapsible chapter navigation
│   │   ├── Header.jsx              # Top bar: search trigger, user button
│   │   ├── SearchModal.jsx         # Ctrl+K search overlay with keyboard nav
│   │   ├── MarkdownRenderer.jsx    # Renders .md with tables, code blocks, callouts
│   │   ├── TableOfContents.jsx     # Right sidebar heading navigation
│   │   └── SearchHighlight.jsx     # Highlights matched terms in results
│   ├── pages/
│   │   ├── HomePage.jsx            # Dashboard with chapter cards by group
│   │   └── ChapterPage.jsx         # Single chapter reader with prev/next nav
│   ├── content/                    # All GDD chapters as .md files
│   │   ├── index.js                # Chapter registry (source of truth for nav)
│   │   ├── 01-game-overview.md
│   │   ├── ...                     # 21 numbered chapters
│   │   ├── appendix-a-damage-tables.md
│   │   ├── appendix-b-loot-tables.md
│   │   └── appendix-c-glossary.md
│   ├── hooks/
│   │   ├── useSearch.js            # Fuse.js index builder and query hook
│   │   └── useChapterContent.js    # Loads markdown, extracts headings, builds nav
│   └── utils/
│       ├── searchIndex.js          # Builds Fuse.js index from all .md files
│       └── markdownLoader.js       # Strips frontmatter, extracts heading structure
├── vercel.json                     # SPA rewrite rules for client-side routing
├── tailwind.config.js              # Custom color palette, fonts, spacing
├── vite.config.js                  # Vite config with .md asset support
└── package.json
```

---

## Adding or Updating Content

1. Edit or create a `.md` file in `src/content/`
2. If adding a new chapter, register it in `src/content/index.js`:
   - Add an entry to the `chapters` array
   - Add the chapter ID to the appropriate group in `chapterGroups`
3. Commit and push — Vercel auto-deploys within ~60 seconds

### Markdown Format

Each chapter uses YAML frontmatter followed by standard GitHub-flavored markdown:

```markdown
---
title: "Chapter Title"
chapter: 5
description: "One-line summary"
icon: "LucideIconName"
---

# Chapter Title

## Section Heading

Content with **bold**, *italic*, tables, code blocks, and blockquotes.

> **Design Rule:** Important rules render with visual emphasis.
```

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl+K | Open search |
| Escape | Close search |
| Arrow Up/Down | Navigate search results |
| Enter | Open selected result |
| Ctrl+[ | Previous chapter |
| Ctrl+] | Next chapter |

---

## Deployment

### Vercel (recommended)

1. Import the GitHub repo at [vercel.com](https://vercel.com)
2. Framework preset: **Vite**
3. Add environment variable: `VITE_CLERK_PUBLISHABLE_KEY`
4. Deploy

Subsequent pushes to `main` trigger automatic redeployment.

### Build Targets

| Metric | Target | Actual |
|--------|--------|--------|
| Bundle size (gzipped) | < 500 KB | 357 KB |
| First Contentful Paint | < 1.5s | Estimated < 1.5s on Vercel CDN |
| Search response time | < 50ms | Client-side, sub-50ms for 24 documents |

---

## Security

- All routes require Clerk authentication — no content is accessible without sign-in
- Public sign-up is disabled; users are manually provisioned in Clerk dashboard
- Only the Clerk publishable key is exposed client-side (designed for this purpose)
- `.env.local` is gitignored — no secrets in the repository
- No server-side code, API routes, or database connections

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
