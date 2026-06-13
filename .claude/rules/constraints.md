# Constraints — What Must Never Change

These are hard guardrails. Do not override them, even if asked to "improve" something.

## Brand & Design

- Color palette and typography are **finalized** — do not substitute or alter any token values
- The luxury warm-cream aesthetic is intentional — do not lighten, darken, or simplify the visual language
- Do not add Tailwind, Bootstrap, or any CSS framework

## Business Content

- Business details (address, phone, hours, service names, prices) are **real** — never overwrite with placeholder text
- Services, technician names, and pricing in `SERVICES_DATA` / `STYLISTS_DATA` are real salon data

## Booking

- Do not use a third-party booking service (Vagaro, Square, Mindbody, Calendly)
- Booking is always **custom in-house** logic

## Architecture

- No Express or separate backend server — all server logic via Next.js Server Actions or API routes
- No external booking/scheduling SaaS integrations
