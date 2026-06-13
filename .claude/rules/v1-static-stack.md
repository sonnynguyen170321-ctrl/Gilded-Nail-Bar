---
paths:
  - "*.html"
  - "*.css"
  - "*.js"
---

# v1 Static Stack

The current codebase is a vanilla static site. No build step, no framework.

## File Map

| File | Purpose |
|---|---|
| `index.html` | Full single-page site markup |
| `styles.css` | All styling — luxury warm-cream theme |
| `app.js` | Tab logic, mock data, booking step navigation |
| `project_constitution.md` | Design + architecture standards reference |
| `task_plan.md` | Phase tracking (BLAST framework) |
| `gilded_logo.png` | Primary brand logo |

## Current Data Layer

All booking and review data is **client-side mock only** (localStorage via `mockSupabase`). This is intentional for v1 — do not introduce real API calls or backend dependencies to v1 files.
