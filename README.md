# Mavis Liu — Personal Blog

A minimalist personal blog built with Next.js, Tailwind CSS, and Markdown.

## Setup

```bash
npm install
npm run dev     # Start dev server at http://localhost:3000
npm run build   # Static export to ./out
```

## Adding Posts

Create a `.md` file in `/posts` with frontmatter:

```markdown
---
title: "Your Title"
date: "2026-01-01"
excerpt: "A short description."
tags: ["Tag1", "Tag2"]
---

Your content here...
```

## Deploy to GitHub Pages

1. Push to `main` branch
2. Go to repo Settings → Pages → Source: **GitHub Actions**
3. The workflow in `.github/workflows/deploy.yml` handles the rest

If deploying to `https://username.github.io/repo-name/`, uncomment `basePath` in `next.config.js`.

## Customization

- **Profile photo:** Add `avatar.jpg` to `public/images/`
- **Social links:** Edit `src/components/Footer.tsx`
- **Bio:** Edit `src/app/about/page.tsx`
