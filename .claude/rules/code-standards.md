# Code Standards

Rules that apply across all code in this project.

## HTML

- Semantic elements only: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`
- ARIA labels on all non-text interactive elements

## CSS

- No CSS frameworks (no Tailwind, no Bootstrap)
- Reference design tokens via `var(--token-name)` — never hardcode color or font values
- All component-level styles in colocated `.module.css` files (v2)
- WCAG AA contrast minimum (4.5:1 for body text)

## TypeScript / JavaScript

- TypeScript in all Next.js (v2) code — no `any`, no `// @ts-ignore`
- No comments unless the WHY is non-obvious (hidden constraint, subtle invariant, workaround)

## Images

- Images go in `/public` — reference as `/image-name.png` in `<Image src=...>` (v2) or directly in HTML (v1)
- No external image CDN

## General

- Do not add features, refactor, or introduce abstractions beyond what the task requires
- Do not add error handling for scenarios that cannot happen
- No backwards-compatibility shims for removed code
