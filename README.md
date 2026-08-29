# Gangadhar Yadav

Personal site and blog. React, Vite, and Tailwind. No backend.

## Run locally

Needs Node 18 or newer.

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Write a blog post

1. Copy `src/content/blog/_template.md` to a new file, for example `src/content/blog/my-post.md`.
2. The file name becomes the URL: `/blog/my-post`.
3. Fill in the frontmatter and write Markdown.

```md
---
title: My post
date: 2026-08-29
description: Shown on the blog index.
tags: [notes]
---

Your writing here.
```

- Set `draft: true` to keep a post off the site.
- Files that start with `_` are ignored.
- Put images in `public/blog/` and link them as `/blog/filename.png`.

Site copy (name, work, projects, social links) lives in `src/data/site.js`.

## Deploy

This is a static app. Push the repo, then connect it to Vercel, Netlify, or GitHub Pages.

```bash
git remote add origin https://github.com/aryan7081/gangadhar.git
git branch -M main
git push -u origin main
```

If you deploy to GitHub Pages at `https://aryan7081.github.io/gangadhar/`, set `base: '/gangadhar/'` in `vite.config.js`.
