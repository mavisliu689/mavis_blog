# CLAUDE.md — Mavis Blog Project Guide

> This file provides comprehensive context for Claude Code (and other AI assistants) working on this project.
> Last updated: 2026-02-23 | Version: 1.0.0

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Architecture & Data Flow](#architecture--data-flow)
5. [Development Commands](#development-commands)
6. [Coding Conventions](#coding-conventions)
7. [Component Guide](#component-guide)
8. [Styling System](#styling-system)
9. [Content Management (Blog Posts)](#content-management-blog-posts)
10. [Deployment](#deployment)
11. [Common Tasks & Recipes](#common-tasks--recipes)
12. [Known Limitations & Technical Debt](#known-limitations--technical-debt)
13. [Future Roadmap](#future-roadmap)
14. [Important Notes & Guardrails](#important-notes--guardrails)

---

## Project Overview

**Mavis Blog** is a minimalist personal blog built for Mavis Liu. It is a statically exported Next.js site that renders Markdown files as blog posts. The blog features:

- **Markdown-based content** — posts are written as `.md` files with YAML frontmatter
- **Tag-based filtering** — posts can be filtered by tags on the homepage
- **Full-text search** — client-side search across titles, excerpts, and tags
- **Dark/Light theme** — toggleable, with system preference detection and localStorage persistence
- **Scroll reveal animations** — intersection observer-based fade-in effects
- **Static export** — outputs to `./out` for deployment to GitHub Pages (or any static host)
- **Bilingual content** — supports both English and Chinese (Traditional) posts

---

## Tech Stack

| Layer        | Technology                     | Version   |
|--------------|--------------------------------|-----------|
| Framework    | Next.js (App Router)           | ^14.2.0   |
| Language     | TypeScript                     | ^5.0.0    |
| UI Library   | React                          | ^18.2.0   |
| Styling      | Tailwind CSS + CSS Variables   | ^3.4.0    |
| Markdown     | gray-matter + react-markdown   | ^4.0.3 / ^9.0.1 |
| MD Plugins   | remark-gfm, rehype-raw         | ^4.0.0 / ^7.0.0 |
| Build Tool   | PostCSS + Autoprefixer         | ^8.4.0 / ^10.4.0 |
| Font         | Inter (Google Fonts)           | —         |
| Deploy       | GitHub Actions + GitHub Pages  | —         |

---

## Project Structure

```
mavis_blog/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions: build & deploy to GitHub Pages
├── posts/                      # Blog post Markdown files (content source)
│   ├── building-a-personal-blog.md
│   ├── design-principles.md
│   └── thoughts-on-learning.md
├── public/
│   └── images/                 # Static assets (avatar, post images, etc.)
│       └── README.md
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles, CSS variables, prose, animations
│   │   ├── layout.tsx          # Root layout (html > body > ThemeProvider > Header/Footer)
│   │   ├── page.tsx            # Homepage (server component: fetches posts & tags)
│   │   ├── about/
│   │   │   └── page.tsx        # About page
│   │   └── posts/
│   │       └── [slug]/
│   │           └── page.tsx    # Dynamic post page (SSG with generateStaticParams)
│   ├── components/
│   │   ├── Header.tsx          # Sticky nav bar with theme toggle (client)
│   │   ├── Footer.tsx          # Footer with social links (server)
│   │   ├── ThemeProvider.tsx   # Dark/light theme context provider (client)
│   │   ├── HomeClient.tsx      # Homepage interactive UI: search + tag filter (client)
│   │   ├── PostCard.tsx        # Blog post preview card with tags (server)
│   │   ├── TagChip.tsx         # Tag filter button with deterministic colors (client)
│   │   └── ScrollReveal.tsx    # Intersection observer scroll animation wrapper (client)
│   └── lib/
│       ├── posts.ts            # Markdown/frontmatter parsing (fs-based, server only)
│       └── tagColors.ts        # Deterministic tag color mapping (8-color palette)
├── next.config.js              # Next.js config (static export, optional basePath)
├── tailwind.config.ts          # Tailwind config (dark mode: class, custom animations)
├── tsconfig.json               # TypeScript config (strict, path alias @/*)
├── postcss.config.js           # PostCSS plugins (tailwindcss, autoprefixer)
├── package.json                # Dependencies and scripts
└── CLAUDE.md                   # This file
```

---

## Architecture & Data Flow

### Rendering Strategy

- **Static Site Generation (SSG)** — the entire site is statically exported via `next build` with `output: 'export'`
- No server-side runtime required at deploy time
- All pages are pre-rendered at build time

### Data Flow

```
posts/*.md  →  src/lib/posts.ts (gray-matter)  →  Server Components  →  Client Components
                    ↓                                    ↓
              PostMeta / Post                     HomeClient (search/filter)
              (slug, title, date,                 PostCard (display)
               excerpt, tags, content)            TagChip (tag UI)
```

1. **Build time**: `src/lib/posts.ts` reads all `.md` files from `posts/` using Node.js `fs` module
2. **Server components** (`page.tsx`, `posts/[slug]/page.tsx`) call lib functions to get post data
3. **Client components** (`HomeClient`, `TagChip`) receive data as props for interactivity (search, filter, theme toggle)

### Component Rendering Boundaries

| Component         | Server / Client | Why                                      |
|-------------------|-----------------|------------------------------------------|
| `layout.tsx`      | Server          | Root layout, metadata                    |
| `page.tsx` (home) | Server          | Fetches posts at build time              |
| `HomeClient`      | Client          | Search input, tag filter state           |
| `PostCard`        | Server*         | Pure display (*wrapped in ScrollReveal)  |
| `ScrollReveal`    | Client          | Uses IntersectionObserver                |
| `Header`          | Client          | Theme toggle button                      |
| `Footer`          | Server          | Static content                           |
| `ThemeProvider`   | Client          | localStorage, DOM class manipulation     |
| `TagChip`         | Client          | onClick handler                          |
| `[slug]/page.tsx` | Server          | SSG with generateStaticParams            |

---

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Static export to ./out
npm run start        # Serve production build (not used for static export)
npm run lint         # Run Next.js linter
```

---

## Coding Conventions

### General Rules

- **Language**: TypeScript (strict mode enabled)
- **Path aliases**: Use `@/*` to reference `./src/*` (e.g., `import { getAllPosts } from '@/lib/posts'`)
- **Components**: One component per file, named export default, PascalCase filenames
- **Client components**: Must have `'use client'` directive at the top of the file
- **Styling**: Use Tailwind CSS utility classes + CSS custom properties (variables). Avoid inline `style={{}}` unless necessary for dynamic values (e.g., tag colors)
- **No external state management**: Use React Context (ThemeProvider) and local `useState` only

### File Naming

- Components: `PascalCase.tsx` (e.g., `PostCard.tsx`, `ThemeProvider.tsx`)
- Library/utilities: `camelCase.ts` (e.g., `posts.ts`, `tagColors.ts`)
- Pages: `page.tsx` (Next.js App Router convention)
- Layouts: `layout.tsx` (Next.js App Router convention)

### Import Order (Preferred)

1. React / Next.js imports
2. Third-party libraries
3. Local components (`@/components/*`)
4. Local utilities (`@/lib/*`)
5. Types/interfaces

### TypeScript Conventions

- Use `interface` for component props (e.g., `interface PostCardProps { ... }`)
- Use `type` for simple unions or aliases (e.g., `type Theme = 'light' | 'dark'`)
- Avoid `any` — use proper types
- Export shared types from their source module (e.g., `PostMeta` from `lib/posts.ts`)

---

## Component Guide

### ThemeProvider (`src/components/ThemeProvider.tsx`)

- Wraps entire app in `layout.tsx`
- Provides `{ theme, toggle }` via React Context
- Reads system preference via `window.matchMedia('(prefers-color-scheme: dark)')`
- Persists choice to `localStorage` under key `"theme"`
- Toggles `.dark` class on `<html>` element
- Hides content until mounted to prevent flash of unstyled content (FOUC)

### Header (`src/components/Header.tsx`)

- Sticky top navigation bar with backdrop blur
- Contains: site name (link to home), "Blog" link, "About" link, theme toggle button
- Sun/moon SVG icon based on current theme

### HomeClient (`src/components/HomeClient.tsx`)

- Client-side interactive homepage
- Receives `posts` and `tags` as props from server component
- Features: search input (filters by title/excerpt/tags), tag filter chips
- Renders filtered `PostCard` list

### PostCard (`src/components/PostCard.tsx`)

- Displays a single blog post preview (title, date, excerpt, tags)
- Wrapped in `ScrollReveal` for animation
- Links to `/posts/[slug]`
- Uses `getTagColor()` for deterministic tag coloring

### TagChip (`src/components/TagChip.tsx`)

- Reusable tag button with deterministic colors
- Supports `active` state (ring highlight)
- Used in homepage tag filter bar

### ScrollReveal (`src/components/ScrollReveal.tsx`)

- Generic wrapper for scroll-triggered fade-in animation
- Uses `IntersectionObserver` with `threshold: 0.1`
- Adds `.visible` class on intersection (once, then unobserves)
- CSS: `.reveal` (hidden) -> `.reveal.visible` (shown)

### Footer (`src/components/Footer.tsx`)

- Static footer with copyright and social links (GitHub, Twitter/X, LinkedIn)
- Social links currently point to generic URLs — should be updated to real profiles

---

## Styling System

### CSS Custom Properties (Variables)

Defined in `src/app/globals.css`:

| Variable           | Light Mode  | Dark Mode   | Usage                          |
|--------------------|-------------|-------------|--------------------------------|
| `--background`     | `#fafafa`   | `#0f0f0f`   | Page background                |
| `--foreground`     | `#1a1a1a`   | `#e5e5e5`   | Primary text                   |
| `--card-bg`        | `#ffffff`   | `#1a1a1a`   | Card backgrounds               |
| `--card-border`    | `#e5e7eb`   | `#2a2a2a`   | Borders, dividers              |
| `--muted`          | `#6b7280`   | `#9ca3af`   | Secondary/muted text           |
| `--accent`         | `#6366f1`   | `#818cf8`   | Accent color (indigo)          |
| `--accent-light`   | `#a5b4fc`   | `#6366f1`   | Lighter accent variant         |
| `--accent-bg`      | `#eef2ff`   | `#1e1b4b`   | Accent background              |
| `--gradient-start`  | `#6366f1`   | `#818cf8`   | Gradient start (indigo)        |
| `--gradient-end`    | `#ec4899`   | `#f472b6`   | Gradient end (pink)            |

### Dark Mode

- Controlled via `class` strategy (`.dark` on `<html>`)
- Tailwind config: `darkMode: 'class'`
- All theme switching handled by `ThemeProvider`

### Custom CSS Classes

- `.gradient-text` — gradient text effect (indigo to pink)
- `.tag-chip` — pill-shaped tag button with hover scale
- `.search-input` — styled search input with focus ring
- `.prose` — custom Markdown rendering styles (headings, paragraphs, lists, code, blockquotes, etc.)
- `.reveal` / `.reveal.visible` — scroll animation states

### Tag Color System

- 8 predefined color palettes in `src/lib/tagColors.ts` (indigo, green, purple, orange, pink, teal, blue, yellow)
- Each palette has `bg`, `text`, `darkBg`, `darkText` properties
- Color assignment is deterministic based on tag name hash
- Note: `darkBg` and `darkText` exist in the palette but are NOT currently used in components (potential enhancement)

### Font

- **Inter** — loaded from Google Fonts CDN via `@import` in `globals.css`
- Fallback: `system-ui, -apple-system, sans-serif`

---

## Content Management (Blog Posts)

### How Posts Work

1. Create a `.md` file in the `posts/` directory
2. Add YAML frontmatter at the top
3. Write content in Markdown (GFM supported)
4. The post will appear on the homepage after rebuild

### Frontmatter Schema

```yaml
---
title: "Your Post Title"        # Required — displayed as heading
date: "YYYY-MM-DD"              # Required — used for sorting (newest first)
excerpt: "Short description."   # Required — displayed in post card preview
tags: ["Tag1", "Tag2"]          # Optional — array of tag strings for filtering
---
```

### Supported Markdown Features

- Standard Markdown (headings, paragraphs, links, images, bold, italic)
- GitHub Flavored Markdown (GFM) via `remark-gfm`: tables, strikethrough, task lists, autolinks
- Raw HTML via `rehype-raw`: inline HTML elements in Markdown
- Code blocks with language hints (no syntax highlighting plugin currently)

### Slug Convention

- The filename (without `.md`) becomes the URL slug
- Example: `posts/my-new-post.md` → `/posts/my-new-post`
- Use lowercase, hyphen-separated names

---

## Deployment

### GitHub Pages via GitHub Actions

- Workflow: `.github/workflows/deploy.yml`
- Trigger: push to `main` branch, or manual `workflow_dispatch`
- Process: checkout → setup Node 20 → `npm ci` → `npm run build` → upload `./out` → deploy to GitHub Pages
- Node version: 20

### basePath Configuration

If deploying to `https://username.github.io/repo-name/`:
- Uncomment `basePath: '/mavis_blog'` in `next.config.js`
- If deploying to a custom domain or root (`username.github.io`), leave it commented

### Image Optimization

- `images.unoptimized: true` in `next.config.js` (required for static export)
- All images served as-is from `public/`

---

## Common Tasks & Recipes

### Add a New Blog Post

1. Create `posts/your-post-slug.md`
2. Add frontmatter (title, date, excerpt, tags)
3. Write Markdown content
4. Run `npm run dev` to preview

### Add a New Page

1. Create `src/app/your-page/page.tsx`
2. Export a default React component
3. Add navigation link in `src/components/Header.tsx`

### Add a New Component

1. Create `src/components/YourComponent.tsx`
2. Add `'use client'` directive if it uses hooks, event handlers, or browser APIs
3. Import and use in the desired page or layout

### Update Social Links

- Edit `src/components/Footer.tsx`
- Replace the generic `href` values with actual profile URLs

### Update Site Metadata

- Edit `src/app/layout.tsx` — the `metadata` export
- Title: `'Mavis Liu — Blog'`
- Description: `'Personal blog by Mavis Liu. Thoughts on technology, design, and life.'`

### Add a New Tag Color

- Edit `src/lib/tagColors.ts`
- Add a new object to the `TAG_COLORS` array with `bg`, `text`, `darkBg`, `darkText`

---

## Known Limitations & Technical Debt

All original 10 limitations have been resolved (2026-02-23):

1. ~~**No syntax highlighting**~~ — **FIXED**: `rehype-highlight` wired up in `[slug]/page.tsx` with custom theme-aware highlight styles in `globals.css`.
2. ~~**Dark mode tag colors**~~ — **FIXED**: New `.tag-color` CSS class uses CSS variables (`--tag-bg-light/dark`, `--tag-text-light/dark`) for automatic dark mode switching. Applied in PostCard, TagChip, and `[slug]/page.tsx`.
3. ~~**Social links are placeholders**~~ — **FIXED**: Updated to real profiles: GitHub (mavisliu689), LinkedIn (mavis-liu-807a36305), Instagram (mavis_zip), Threads (@mavis_zip). Twitter icon replaced with Instagram + Threads.
4. ~~**Contact email is placeholder**~~ — **FIXED**: Updated to `mavis930600@gmail.com` in About page.
5. ~~**No avatar image**~~ — **FIXED**: About page now uses `next/image` with `public/images/avatar.jpg`. User must place their avatar image at that path.
6. ~~**No RSS feed**~~ — **FIXED**: RSS feed generated via route handler at `/feed.xml`. RSS `<link>` tag added to layout head.
7. ~~**No SEO per-post metadata**~~ — **FIXED**: `generateMetadata()` added to `[slug]/page.tsx` with dynamic title, description, and OpenGraph tags.
8. ~~**No 404 page**~~ — **FIXED**: Custom `not-found.tsx` created with gradient 404 heading, message, and "Back to Home" button.
9. ~~**No pagination**~~ — **FIXED**: Homepage paginated at 6 posts per page with Previous/Next buttons and page number indicators. Resets to page 1 on search/tag filter change.
10. ~~**Font loaded from CDN**~~ — **FIXED**: Migrated from Google Fonts CSS `@import` to `next/font/google` (`Inter`) with CSS variable `--font-inter` for optimal loading performance.

---

## Future Roadmap

The following features are planned or recommended for future versions. Each item includes a priority level and estimated complexity.

### v1.1 — Polish & Quick Wins

- [ ] **Wire up syntax highlighting** — import and add `rehype-highlight` to ReactMarkdown plugins in `[slug]/page.tsx`. Add highlight.js CSS theme. (Priority: High | Complexity: Low)
- [ ] **Fix dark mode tag colors** — use `darkBg`/`darkText` from tagColors when theme is dark. (Priority: High | Complexity: Low)
- [ ] **Update social links & email** — replace placeholder URLs with real profile links. (Priority: High | Complexity: Low)
- [ ] **Add avatar image** — place `avatar.jpg` in `public/images/`, update About page to use `<Image>`. (Priority: Medium | Complexity: Low)
- [ ] **Per-post SEO metadata** — generate dynamic `<title>` and `<meta description>` for each post page using `generateMetadata()`. (Priority: Medium | Complexity: Low)
- [ ] **Custom 404 page** — create `src/app/not-found.tsx` with styled error page. (Priority: Low | Complexity: Low)

### v1.2 — Content & Discovery

- [ ] **RSS/Atom feed** — generate `feed.xml` at build time for RSS readers. (Priority: Medium | Complexity: Medium)
- [ ] **Sitemap generation** — auto-generate `sitemap.xml` for SEO. (Priority: Medium | Complexity: Low)
- [ ] **Table of contents** — auto-generated TOC for long posts from heading structure. (Priority: Medium | Complexity: Medium)
- [ ] **Reading time estimate** — calculate and display estimated reading time per post. (Priority: Low | Complexity: Low)
- [ ] **Related posts** — show related posts at the bottom based on shared tags. (Priority: Low | Complexity: Medium)
- [ ] **Pagination or infinite scroll** — paginate homepage when post count exceeds ~20. (Priority: Low | Complexity: Medium)

### v1.3 — Performance & DX

- [ ] **Self-host Inter font** — migrate from Google Fonts CDN to `next/font/google` for better performance. (Priority: Medium | Complexity: Low)
- [ ] **Image optimization pipeline** — add image processing for post images (resize, WebP conversion). (Priority: Low | Complexity: Medium)
- [ ] **MDX support** — upgrade from `.md` to `.mdx` to allow interactive React components inside posts. (Priority: Low | Complexity: Medium)
- [ ] **ESLint + Prettier config** — add consistent code formatting rules. (Priority: Medium | Complexity: Low)
- [ ] **Husky + lint-staged** — pre-commit hooks for code quality. (Priority: Low | Complexity: Low)

### v2.0 — Feature Expansion

- [ ] **Comment system** — integrate Giscus (GitHub Discussions) or similar for post comments. (Priority: Medium | Complexity: Medium)
- [ ] **Newsletter subscription** — email signup form (e.g., Buttondown, Resend). (Priority: Low | Complexity: Medium)
- [ ] **Analytics** — add privacy-friendly analytics (Plausible, Umami, or Vercel Analytics). (Priority: Medium | Complexity: Low)
- [ ] **i18n support** — structured internationalization for bilingual (EN/ZH-TW) content with language toggle. (Priority: Medium | Complexity: High)
- [ ] **CMS integration** — optional headless CMS (e.g., Notion, Contentlayer, Sanity) as an alternative to local Markdown files. (Priority: Low | Complexity: High)
- [ ] **Portfolio/Projects page** — showcase page for projects with cards, links, and descriptions. (Priority: Medium | Complexity: Medium)
- [ ] **Tags page** — dedicated `/tags` page listing all tags with post counts and links. (Priority: Low | Complexity: Low)
- [ ] **Search enhancement** — full-text search with Fuse.js or Pagefind for better relevance ranking. (Priority: Low | Complexity: Medium)

### v3.0 — Platform Evolution

- [ ] **Migrate to Next.js 15+** — adopt latest App Router features, React Server Components improvements. (Priority: Future | Complexity: Medium)
- [ ] **Migrate to Tailwind CSS v4** — upgrade when stable, adopt new configuration format. (Priority: Future | Complexity: Medium)
- [ ] **OG Image generation** — dynamic Open Graph images for social sharing using `@vercel/og` or Satori. (Priority: Future | Complexity: Medium)
- [ ] **View transitions API** — smooth page transitions using the View Transitions API. (Priority: Future | Complexity: Medium)
- [ ] **PWA support** — add service worker, manifest for offline reading capability. (Priority: Future | Complexity: Medium)
- [ ] **Draft posts** — support `draft: true` frontmatter field to hide unpublished posts from production. (Priority: Future | Complexity: Low)

---

## Important Notes & Guardrails

### Do NOT

- Do not modify files inside `node_modules/`, `.next/`, or `out/` — these are generated
- Do not use `fs` module in client components — it only works in server-side code
- Do not remove `'use client'` from components that use hooks or browser APIs
- Do not add inline `<script>` tags — use Next.js patterns instead
- Do not commit `.env` files or secrets
- Do not change `output: 'export'` in `next.config.js` unless migrating away from static hosting

### Do

- Always test both light and dark mode after UI changes
- Always test with `npm run build` before deploying (catches SSG errors that `dev` mode misses)
- Keep post slugs URL-friendly (lowercase, hyphens, no special characters)
- Use CSS variables (`var(--*)`) for theme-aware colors instead of hardcoded values
- Use `@/*` path alias for all imports from `src/`
- Maintain the server/client component boundary — keep data fetching in server components
- When adding new CSS, add it to `globals.css` to keep styles centralized

### Environment

- Node.js: v20 (as specified in CI/CD workflow)
- Package manager: npm (uses `package-lock.json`, not yarn or pnpm)
- OS: macOS (development), Ubuntu (CI/CD)
