---
paths:
  - "*.css"
  - "**/*.module.css"
  - "styles.css"
  - "globals.css"
  - "src/**/*.{ts,tsx}"
  - "app/**/*.{ts,tsx}"
---

# Design System

The design system is **finalized** — do not substitute, "improve," or deviate from these tokens.

## Color Palette

| Token | Value | Use |
|---|---|---|
| `--bg-primary` | `#0c0c0e` | Page background |
| `--bg-secondary` | `rgba(18,18,22,0.7)` + `backdrop-filter: blur(12px)` | Cards / glass panels |
| `--accent-gold` | `#D4AF37` | Primary accent |
| `--accent-champagne` | `#E5C158` | Hover / active gold |
| `--text-primary` | `#F5F5F7` | Body text |
| `--text-secondary` | `#A1A1A6` | Labels, descriptions |

Always reference tokens via `var(--token-name)` — never hardcode color or font values.

## Typography

| Role | Font |
|---|---|
| Headers | `Cormorant Garamond` (serif) |
| Body / UI | `Inter` (sans-serif) |
| Mono / labels | `IBM Plex Mono` |

## Motion

- All transitions: `300ms cubic-bezier(0.4, 0, 0.2, 1)`
- Scroll reveals: fade-up on entry (Intersection Observer)
- Skeleton shimmer for loading states (gallery, services, bookings)

## CSS Structure Rules

- `globals.css` holds CSS custom properties (design tokens) **only**
- All component-level styles go in colocated `.module.css` files
- No CSS frameworks — no Tailwind, no Bootstrap
- No UI component libraries — build everything from scratch
- WCAG AA contrast minimum (4.5:1 for body text)
