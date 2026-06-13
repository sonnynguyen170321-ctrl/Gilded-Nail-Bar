---
paths:
  - "src/db/**"
  - "drizzle.config.*"
  - ".env*"
  - "src/**/schema*"
---

# Database Schema & Environment Variables

## PostgreSQL Schema Intent

Define schema in `/src/db/schema.ts` using Drizzle ORM. Never use raw SQL migrations directly — always go through Drizzle's typed schema.

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

**Prices stored as cents (integer)** to avoid float precision issues. Display as dollars in the UI (`price_cents / 100`).

## Required Environment Variables (v2)

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
