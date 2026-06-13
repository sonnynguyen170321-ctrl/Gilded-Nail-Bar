# Gilded Nail Bar — CLAUDE.md

## Project Overview

Luxury nail salon website for **Gilded Nail Bar**, located at 3636 McKinney Ave, Uptown Dallas TX. Solo project. Content (services, prices, address, hours, contact) is **real and finalized** — do not replace with placeholder copy.

---

## Current Stack (v1 — Static)

- `index.html` — semantic HTML5 single-page site
- `styles.css` — vanilla CSS with custom properties (design tokens)
- `app.js` — tab logic, mock data, booking step navigation

All booking and review data is currently **client-side mock only** (localStorage). This is intentional for v1.

---

## Target Stack (v2 — Full-Stack Migration)

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

- Use Next.js Server Actions for form submissions and mutations
- Use Next.js API routes only for webhooks (Twilio, Resend) or third-party callbacks
- Do not introduce Express or a separate backend server
- The v2 migration is a **redesign** — not a pixel-for-pixel port of v1. Keep the dark luxury brand identity but evolve the layout and component structure in Next.js
- All database queries use Drizzle ORM — define schema in `/src/db/schema.ts`, query via Drizzle's typed query builder
- CSS structure: one global `globals.css` for CSS custom properties (design tokens) only; all component-level styles in colocated `.module.css` files

---

## Roadmap (work one phase at a time — do not scaffold ahead)

1. **Real integrations** — PostgreSQL booking system, Auth.js admin login, email/SMS notifications, live reviews feed, contact form
2. **More pages / content** — gallery, team bios, gift cards, loyalty program
3. **Performance & SEO** — Lighthouse 95+, schema.org structured data, Google Business integration, Next.js Image optimization
4. **Multi-location** — additional TX locations with location-specific routing and data

---

## Booking System (Phase 1 — most complex feature)

### Business Hours & Slot Logic
- Open **Tuesday – Saturday, 10am – 7pm**. Closed Sunday and Monday.
- Appointments are **1-hour slots**: 10:00, 11:00, 12:00, 13:00, 14:00, 15:00, 16:00, 17:00, 18:00 (9 slots/day/technician)
- A slot is available if: the day is Tue–Sat, the slot is not already booked, and it is not in `blocked_slots`
- Clients can book up to **60 days in advance** (sensible default — adjust if needed)

### Flow (4 steps)
1. **Service** — client selects a service (category + specific service)
2. **Technician** — client selects a preferred nail technician/artist
3. **Date / Time** — client picks from available slots (business hours minus booked/blocked)
4. **Contact info** — name, phone number, email → confirmation screen

### Notifications on booking
- **Client**: confirmation email (Resend) + SMS reminder (Twilio)
- **Salon owner**: notification email with booking details (Resend)

### Admin dashboard (owner only)
- Protected by Auth.js — single owner role, email/password login
- View all upcoming and past bookings
- Confirm / cancel individual bookings
- Block off time slots (vacations, closures)
- Manage services (add, edit, archive)
- Manage technicians (add, edit, availability)

---

## Database Schema Intent (PostgreSQL)

```
services
  id, name, description, price_cents, duration_minutes, category, active

technicians
  id, name, bio, photo_url, specialties[], active

appointments
  id, service_id → services, technician_id → technicians,
  customer_name, customer_email, customer_phone,
  date (DATE), time_slot (TIME), status (pending|confirmed|cancelled),
  created_at

blocked_slots
  id, technician_id → technicians, date, time_slot, reason

reviews
  id, customer_name, rating (1–5), body, approved (bool), created_at
```

Prices stored as **cents** (integer) to avoid float precision issues. Display as dollars in UI.

---

## Environment Variables (v2)

```
DATABASE_URL
NEXTAUTH_SECRET
NEXTAUTH_URL
OWNER_EMAIL
RESEND_API_KEY
TWILIO_ACCOUNT_SID
TWILIO_AUTH_TOKEN
TWILIO_PHONE_NUMBER
```

---

## Design System

### Colors (finalized — do not change)
| Token | Value | Use |
|---|---|---|
| `--bg-primary` | `#0c0c0e` | Page background |
| `--bg-secondary` | `rgba(18,18,22,0.7)` + `backdrop-filter: blur(12px)` | Cards / glass panels |
| `--accent-gold` | `#D4AF37` | Primary accent |
| `--accent-champagne` | `#E5C158` | Hover / active gold |
| `--text-primary` | `#F5F5F7` | Body text |
| `--text-secondary` | `#A1A1A6` | Labels, descriptions |

### Typography
- **Headers**: `Cormorant Garamond` (serif)
- **Body / UI**: `Inter` (sans-serif)
- **Mono / labels**: `IBM Plex Mono`

### Motion
- All transitions: `300ms cubic-bezier(0.4, 0, 0.2, 1)`
- Scroll reveals: fade-up on entry
- Skeleton shimmer for loading states (gallery, services, bookings)

---

## Code Standards

- No CSS frameworks (no Tailwind, no Bootstrap)
- No UI component libraries — build everything from scratch
- CSS structure: `globals.css` for design token variables only; all component styles in `.module.css` files colocated with the component
- Reference design tokens via `var(--token-name)` inside CSS Modules — never hardcode color or font values
- WCAG AA contrast minimum (4.5:1 for body text)
- ARIA labels on all non-text interactive elements
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`
- TypeScript in all Next.js code — no `any`, no `// @ts-ignore`
- No comments unless the WHY is non-obvious
- Images go in `/public` — reference as `/image-name.png` in `<Image src=...>`

---

## Key Files (v1 static)

| File | Purpose |
|---|---|
| `index.html` | Full single-page site markup |
| `styles.css` | All styling — dark luxury theme |
| `app.js` | Tab logic, mock data, booking step navigation |
| `project_constitution.md` | Design + architecture standards reference |
| `task_plan.md` | Phase tracking (BLAST framework) |
| `gilded_logo.png` | Primary brand logo |

---

## What Not to Change

- Color palette and typography are finalized — do not substitute or "improve" them
- Business details (address, phone, hours, service names, prices) are real — never overwrite with placeholder text
- The luxury dark aesthetic is intentional — do not lighten backgrounds or simplify the visual language
- Do not add Tailwind, Bootstrap, or any CSS framework
- Do not use a third-party booking service (Vagaro, Square, Mindbody) — booking is always custom in-house
