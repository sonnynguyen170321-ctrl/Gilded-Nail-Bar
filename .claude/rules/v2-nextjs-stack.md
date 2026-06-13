---
paths:
  - "src/**/*.{ts,tsx}"
  - "app/**/*.{ts,tsx}"
  - "*.config.{ts,js,mjs}"
  - "package.json"
  - "next.config.*"
  - "drizzle.config.*"
---

# v2 Next.js Target Stack

The v2 migration is a **redesign** — not a pixel-for-pixel port of v1. Keep the warm luxury brand identity but evolve the layout in Next.js.

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Database | PostgreSQL — Vercel Postgres or Neon |
| ORM | Drizzle ORM (schema-as-code, TypeScript-first) |
| Auth | Auth.js (NextAuth v5) |
| Email | Resend |
| SMS | Twilio |
| Deployment | Vercel |
| Images | `/public` folder — no external CDN |
| Styling | CSS Modules (`.module.css`) per component + global CSS variables |

## Architecture Rules

- Use Next.js **Server Actions** for all form submissions and mutations
- Use Next.js **API routes only** for webhooks (Twilio, Resend) or third-party callbacks
- Do **not** introduce Express or a separate backend server
- All database queries use **Drizzle ORM** — define schema in `/src/db/schema.ts`, query via Drizzle's typed query builder
- CSS structure: one global `globals.css` for CSS custom properties (design tokens) only; all component-level styles in colocated `.module.css` files
- **TypeScript** in all Next.js code — no `any`, no `// @ts-ignore`
