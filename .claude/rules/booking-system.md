---
paths:
  - "app.js"
  - "src/**/booking*/**"
  - "app/**/booking*/**"
  - "src/**/appointments*/**"
  - "src/**/schedule*/**"
---

# Booking System

## Business Hours & Slot Logic

- Open **Tuesday – Saturday, 10am – 7pm**. Closed Sunday and Monday.
- Appointments are **1-hour slots**: 10:00, 11:00, 12:00, 13:00, 14:00, 15:00, 16:00, 17:00, 18:00 (9 slots/day/technician)
- A slot is available if: the day is Tue–Sat AND the slot is not already booked AND it is not in `blocked_slots`
- Clients can book up to **60 days in advance**

## Booking Flow (5 steps — v1 current)

1. **Service** — client selects a service (category + specific service)
2. **Shop Add-ons** — optional artisanal products to add to reservation
3. **Technician** — client selects a preferred nail technician/artist
4. **Date / Time** — client picks from available slots (business hours minus booked/blocked)
5. **Contact info** — name, phone, email → confirmation receipt modal

## Notifications on Booking

- **Client**: confirmation email (Resend) + SMS reminder (Twilio)
- **Salon owner**: notification email with full booking details (Resend)

## Admin Dashboard (owner only)

- Protected by Auth.js — single owner role, email/password login
- View all upcoming and past bookings
- Confirm / cancel individual bookings
- Block off time slots (vacations, closures)
- Manage services (add, edit, archive)
- Manage technicians (add, edit, availability)

## Important

Do **not** integrate a third-party booking service (Vagaro, Square, Mindbody). Booking is always custom in-house.
