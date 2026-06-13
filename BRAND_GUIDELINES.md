# Gilded Nail Bar — Brand & Business Guide

**Version 2.0 — June 2026**

Prepared for the owner. This document covers the brand identity, the website (what's built, how it works, what's planned), and all business-critical details.

---

## 00 — Business Overview

### 0.1 The Vision

Gilded Nail Bar is a luxury nail artistry studio in Uptown Dallas (3636 McKinney Ave) that occupies the intersection of wabi-sabi minimalism and bespoke opulence. The brand rejects the fluorescent-lit, fast-turnover salon model in favor of quiet ritual, botanical ingredients, and hand-placed gold leaf precision.

The website is the digital front door. It must feel like walking into the physical space — warm beige, raw textures, no hard corners, no rush.

### 0.2 Current Status (v1 — Static Site)

The live website is a **single-page HTML/CSS/JS application** (no backend, no database). All data (services, bookings, reviews, gift cards) is client-side mock data stored in `localStorage`. This is intentional for v1 — it allows the owner to test the complete booking flow, review system, and admin dashboard without needing a server.

**Go-live date:** Not yet deployed to production domain. Currently on Vercel (preview).

### 0.3 Business Goals — What This Site Must Do

| Goal | Status | Notes |
|------|--------|-------|
| Let guests browse services and prices | ✅ Done (v1) | Full service catalog with categories, descriptions, prices |
| Let guests book appointments online | ✅ Done (v1, mock) | 4-step flow: Service → Stylist → Date/Time → Contact Info |
| Let guests see real-time slot availability | 📅 v2 | Currently uses localStorage mock data |
| Send confirmation emails + SMS reminders | 📅 v2 | Resend (email) + Twilio (SMS) |
| Owner admin dashboard | 📅 v2 | View bookings, confirm/cancel, block slots, manage services |
| Live reviews feed | 📅 v2 | Currently mock data in localStorage |
| Gallery with real nail art photography | 📅 v2 | Currently "Coming Soon" placeholder |
| Gift cards — purchase and send | ✅ Done (v1, mock) | UI complete, no payment gateway yet |
| Private events inquiry form | ✅ Done (v1) | Data saved to localStorage |
| SEO / Google Business presence | ✅ Partial | Schema.org structured data, OG tags, meta descriptions |

### 0.4 Target Audience

| Segment | Description |
|---------|-------------|
| **Primary** | Women 28–55, HHI $150K+, Uptown / Knox / Turtle Creek Dallas. Professionals, creatives, and socials who value design, craft, and discretion. |
| **Secondary** | Men seeking precision dry manicures. Bridal parties for private events. Brand collaborators (fashion editorials, trunk shows). |
| **Psychographic** | Values quality over quantity. Seeks experiences over transactions. Reads Kinfolk, Cereal, Monocle. |

---

## 01 — Website Feature Inventory (v1)

Every interactive feature on the site, explained for the owner.

### 1.1 Splash Screen

When a guest first visits the site, they see a full-screen entrance with an animated logo reveal:

1. **Concrete circle** blooms outward (0.05s after page load)
2. **Diamond** pops in (0.2s) — the center of the logo mark
3. **Monoline bars** draw outward from the diamond (0.55s / 0.7s)
4. **"Gilded"** slides down into place (1.1s) — gold foil shimmer begins
5. **"Nail Bar"** slides up into place (1.35s)
6. **Divider line** draws across (1.55s)
7. **"3636 McKinney Ave, Uptown Dallas"** types out character by character (1.8s)
8. Guest clicks **"ENTER SALON"** to proceed

The splash only appears once per session (controlled by `sessionStorage`). Returning visitors skip directly to the page content.

The diamond is clickable/tappable — tapping it triggers a sparkle burst animation.

### 1.2 Header & Navigation

- **Logo** (left): Inline text mark — "Gilded" in Cormorant Garamond, monoline–diamond–monoline separator, "Nail Bar" in IBM Plex Mono. Hovering the logo makes the diamond rotate 135° and the bars extend wider. The diamond also subtly follows the cursor (magnetic effect, ±5px).
- **"Menu" button** (right): Opens a full-screen mega menu with navigation links and a brand image panel.
- **"Book Appointment" button** (right): Sticky CTA that scrolls to the booking section.
- **Mobile**: Hamburger icon replaces the menu button on small screens.

### 1.3 Category Heroes (The Scroll Column)

Four full-viewport sections, one per service category:
- **MANICURES** (Structured Gel, Signature Gilded, etc.)
- **PEDICURES** (Stone Soak, Gilded Organic, etc.)
- **ENHANCEMENTS** (Aprés Gel-X, Hard Gel, etc.)
- **FINISHES & DETAILS** (Gold Foil Accent, Nail Art, etc.)

Each hero has a category number (01–04), a diamond accent, and an "Explore" button that scrolls to the service menu.

### 1.4 Services Menu (THE APOTHECARY → TREATMENTS & RITUALS)

- **Filter tabs**: ALL / MANICURES / PEDICURES / ENHANCEMENTS / FINISHES
- **Service cards**: Show name, description, price, and duration. Cards animate in on scroll with staggered fade-up.
- **Category headers**: "THE APOTHECARY" (section subtitle), "TREATMENTS & RITUALS" (section heading).
- **Prices are real** — do not change without owner approval.

### 1.5 Booking Wizard (4 Steps)

The booking flow is the most complex feature on the site:

| Step | Panel | What the guest does |
|------|-------|---------------------|
| 1 | Service | Selects a treatment from the catalog |
| 2 | Stylist | Selects a nail artist |
| 3 | Date & Time | Picks a date (Tue–Sat only) and an available 1-hour time slot (10AM–6PM) |
| 4 | Confirm | Enters name, email, phone, agrees to deposit policy, sees receipt |

**Business rules enforced:**
- Only Tuesday–Saturday dates are selectable (Sunday/Monday disabled)
- Time slots are 1-hour: 10:00, 11:00, 12:00, 1:00, 2:00, 3:00, 4:00, 5:00, 6:00 (9 slots per day per technician)
- Slots already booked are shown with a "Join waitlist" option
- Slots that have already passed today are disabled
- Guest can book up to 60 days in advance
- After confirming, a receipt modal shows with an ICS calendar download button

**Current limitation (v1):** All booking data is stored in `localStorage` under the key `gilded_booked_slots`. This means bookings are not synced between devices or persisted. This is the #1 feature to migrate to a real database in v2.

### 1.6 Reviews Section

- Guests can read existing reviews (mock data in v1) with star ratings (1–5)
- Guests can submit new reviews via a form (saved to localStorage)
- Reviews display: customer name, rating (visual stars using inline SVG), review text
- "Write a Review" toggle button shows/hides the submission form

### 1.7 FAQ Accordion

Six expandable questions about services, pricing, appointment policies, walk-ins, nail health, and gift cards. Clicking a question slides open the answer with a smooth `max-height` transition. The chevron arrow rotates 180° when open.

### 1.8 Loyalty Program ("Your Stamp Card")

A visual stamp card with 10 circles. Each click fills a stamp with a pop animation (scale bounce). When all 10 are filled, a "Claim Reward" button appears. A two-click confirmation system prevents accidental resets ("RESET CARD" → "CONFIRM RESET?" with 4s timeout).

**Current limitation (v1):** Stamps are stored in localStorage. In v2, this would be tied to a customer account.

### 1.9 Gallery (THE VAULT)

A filtered grid with tabs (ALL / MANICURES / PEDICURES / ENHANCEMENTS). Currently shows a "COMING SOON" overlay on each card — this is where real nail art photography will go in v2. Hovering a card reveals the overlay text.

### 1.10 Botanical Cabinet

A dark-themed section (bronze background, cream text) showcasing botanical ingredients used in treatments: Sea Salt Soak, French Green Clay, Manuka Honey, Argan Oil, Coconut Milk, Oat Milk. Each card has a Roman numeral (I–VI), ingredient name, and description. Cards stagger in on scroll with a 0.4s cascade delay between each.

### 1.11 Try-On Color Preview

A small interactive feature where tapping a polish color swatch shows a preview rectangle (80×80px) in that color. Does not use the camera — it's a simple visual reference for the guest.

### 1.12 Gift Cards

- Three preset amounts: $50, $100, $200 (with $75, $150, $250 also available via button toggle)
- Guest enters recipient email and optional message
- Confirmation modal shows before processing
- **Current limitation (v1):** No payment gateway — purchases are simulated in localStorage

### 1.13 Private Events Inquiry

A modal form for guests interested in private parties (bridal, birthday, corporate). Collects: name, email, phone, guest count, event type, preferred date, and notes. On submission, data is saved to localStorage (`gilded_private_events`). A success message displays, then the modal closes after 3 seconds.

### 1.14 Rebook Nudge

After 7 days, if a previous booking reminder exists in localStorage, a floating card appears in the bottom-right corner inviting the guest to rebook. The card has a close button and a "Book Again" link.

### 1.15 Footer (THE STUDIO)

Contains:
- Location: 3636 McKinney Ave, Suite 150, Dallas, TX 75204 (with Google Maps link)
- Contact: (214) 555-0145, info@gildednailbar.com
- Hours: Tue–Sat 10AM–7PM
- Accordion panels: "Visit Us", "Hours & Information", "Connect"
- Inline logo mark
- Copyright notice

---

## 02 — Website Roadmap (v2 — Full-Stack Migration)

### 2.1 Why Migrate

The current v1 site is static. To offer real-time booking, email/SMS notifications, an owner dashboard, and persistent data, the site needs a backend. The target stack is:

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) — hosted on Vercel |
| Database | PostgreSQL (Vercel Postgres or Neon) |
| ORM | Drizzle ORM |
| Auth | Auth.js (NextAuth v5) — owner login only |
| Email | Resend — confirmation + notification emails |
| SMS | Twilio — appointment reminders |
| Payments | (Stripe — for gift cards, future) |
| Images | `/public` folder — no external CDN |
| Styling | CSS Modules + global CSS variables (no Tailwind) |

### 2.2 Phase 1 — Real Integrations (Next Priority)

| Feature | What changes |
|---------|-------------|
| **PostgreSQL booking system** | Replace all localStorage booking data with a real database. Slots are queried from `appointments` and `blocked_slots` tables. |
| **Auth.js admin login** | Owner can log in with email/password to access a dashboard. Single owner role. |
| **Owner dashboard** | View all upcoming/past bookings, confirm or cancel appointments, block time slots (vacations/closures), manage services (add/edit/archive), manage technicians (add/edit/availability). |
| **Email notifications** | On booking: confirmation email to guest + notification email to owner. On cancellation: cancellation email. Via Resend. |
| **SMS reminders** | 24-hour-before appointment reminder via Twilio. |
| **Live reviews feed** | Reviews stored in database, owner approves before publishing, guest sees approved reviews only. |
| **Contact form** | Inquiries (from the "Contact" section) sent via Resend to owner email. |

### 2.3 Phase 2 — Content & Pages

| Feature | Description |
|---------|-------------|
| **Gallery** | Replace "Coming Soon" overlays with real photography. Image optimization via Next.js `<Image>` component. |
| **Team bios** | Profiles for each nail artist with photo, specialty, and bio. |
| **Gift cards (real)** | Purchase gift cards via Stripe. Send email to recipient with a unique code. |
| **Loyalty program (real)** | Track stamps in database. Automatic reward after 10 visits. |

### 2.4 Phase 3 — Performance & SEO

- Lighthouse score 95+ on all metrics
- Schema.org structured data (already partially implemented)
- Google Business Profile integration
- Next.js Image optimization for all photography
- Structured data for services, reviews, and FAQs

### 2.5 Phase 4 — Multi-Location (Future)

- Additional Texas locations with location-specific routing
- Location selector on the splash screen
- Per-location services, technicians, and availability

---

## 03 — Brand Foundation

### 3.1 Brand Essence

Gilded Nail Bar is a sanctuary of raw luxury — where the unadorned meets the precious. We sit at the intersection of wabi-sabi minimalism and bespoke opulence, offering nail artistry that honors natural form while indulging in rare materials and masterful technique.

### 3.2 Brand Pillars

| Pillar | Description |
|--------|-------------|
| **Raw Luxury** | Luxury stripped of pretension. Natural materials, honest textures, quiet opulence. |
| **Apothecary Craft** | Treatments rooted in botanical ingredients, formulated with the precision of an old-world apothecary. |
| **Artisan Precision** | Every service is a bespoke creation. Russian dry technique, hand-placed gold leaf, sculptural gel work. |
| **Sacred Ritual** | The appointment is a ritual, not a transaction. Stillness, attention, sensory care. |

### 3.3 Brand Persona

If Gilded Nail Bar were a person:
- **Archetype:** The Alchemist / The Curator
- **Character:** Quietly confident, discerning, warm but reserved. Speaks in carefully chosen words. Dressed in raw silk and aged leather. Collects Japanese ceramics and rare botanical extracts.
- **Aspirational References:** Le Labo (apothecary minimalism), C.O. Bigelow (heritage apothecary), Aesop (sensory formulations), Rick Owens (raw architectural forms), Axel Vervoordt (wabi-sabi interiors).

### 3.4 Mission Statement

To provide a sanctuary for hands and mind through precision nail artistry, botanical care, and an environment that honors stillness, material honesty, and the beauty of imperfection.

---

## 04 — Logo & Wordmark

### 4.1 Primary Logo (Current — Inline Text Mark)

The Gilded Nail Bar logo is an **inline text mark** built in HTML/CSS (no image file). It has three parts:

```
Gilded          ← Cormorant Garamond, italic, gold (#c4a67a) on splash
── ◆ ──        ← Monoline bar / diamond / monoline bar (1px lines, 6×6px diamond rotated 45°)
NAIL BAR        ← IBM Plex Mono, uppercase, bronze (#584638)
```

### 4.2 Logo Variations

| Variation | Use Case |
|-----------|----------|
| **Splash logo** (full) | Splash entrance screen — "Gilded" in gold with foil shimmer animation |
| **Header logo** | Fixed navigation bar — compact, bronze, smaller text |
| **Footer logo** | Footer — same as header, centered in the footer layout |
| **Gift card logo** | Inside the gift card purchase modal — same structure |

### 4.3 Logo Animation Rules

1. **Splash entrance**: Diamond appears first (scale 0→1), then bars draw outward, then "Gilded" slides in, then "Nail Bar" slides in. Total duration ~1.35s.
2. **After reveal**: Diamond pulses gently (breathing light effect, 3s cycle). "Gilded" has a continuous gold foil shimmer (gradient sweep, 5s cycle).
3. **Header hover**: Diamond rotates 135°, bars extend from 16px→24px width. Magnetic cursor effect: diamond follows mouse ±5px.
4. **Click/tap**: Clicking the splash diamond triggers a sparkle burst (scale to 1.6× + gold glow).

### 4.4 Logo Misuse

Never:
- Use the old PNG logo (`gilded_logo.png`) in the UI — it exists only for OG/schema.org meta tags
- Change the font or font weight of the text mark
- Change the diamond rotation angle (always 45°)
- Remove or replace the monoline bars
- Place the logo on a low-contrast background
- Use a different brand mark or icon

---

## 05 — Color Palette

### 5.1 Primary Palette

| Token | Hex | RGB | Use |
|-------|-----|-----|-----|
| `--bg-brand` | `#f8efe1` | 248, 239, 225 | Page background — cream silk |
| `--color-text` | `#584638` | 88, 70, 56 | Primary text, headers, borders — earthy bronze |
| `--color-gold` | `#c4a67a` | 196, 166, 122 | Accent — splash logo "Gilded", hero diamonds, button hover lines |

### 5.2 Secondary Palette

| Token | Hex | RGB | Use |
|-------|-----|-----|-----|
| `--bg-secondary` | `#f2ebe0` | 242, 235, 224 | Card shading, panel backgrounds, splash concrete circle |
| `--bg-concrete` | `#eae3d7` | 234, 227, 215 | Footer, dividers, raw stone zones |
| `--color-muted` | `#8a7c71` | 138, 124, 113 | Labels, descriptions, secondary text |
| `--border-color` | `rgba(88,70,56,0.25)` | — | Subtle borders, dividers, disabled states |

### 5.3 Accent Palette (Editorial Use Only)

| Name | Hex | Use |
|------|-----|-----|
| Gold Foil | `#c4a67a` | Accents, highlights (same as `--color-gold`) |
| Deep Espresso | `#3d3229` | Extreme depth — dark section text, overlays |

### 5.4 Color Rules

- **Never** introduce colors outside this palette
- **Never** use pure black (#000000) — use Deep Espresso or Bronze
- **Always** maintain 4.5:1 minimum contrast for body text (WCAG AA)
- The brand lives in warmth — avoid cool grays, blues, or stark whites
- Dark sections (botanical cabinet) use bronze background, cream text, gold card names

---

## 06 — Typography

### 6.1 Typeface Family

| Typeface | Weight Range | Usage |
|----------|-------------|-------|
| **Cormorant Garamond** | Light 300, Regular 400, Medium 500, Semibold 600, Italic variants | Headings, display, pull quotes — the brand voice |
| **IBM Plex Mono** | Light 300, Regular 400, Medium 500, Semibold 600 | UI labels, prices, metadata, step indicators, all-caps accents |
| **Inter** | Light 300, Regular 400, Medium 500, Semibold 600 | Body copy, descriptions, form inputs, navigation |

All fonts loaded via Google Fonts with `display=swap`.

### 6.2 Type Hierarchy

```
Level 1 — Hero Display
  Cormorant Garamond, Italic, 2.8rem / 3.2rem
  Letter-spacing: -0.01em, Weight: 500

Level 2 — Section Title
  Cormorant Garamond, Italic, 2.5rem / 2.8rem
  Letter-spacing: -0.01em, Weight: 500

Level 3 — Card / Component Title
  Cormorant Garamond, Italic, 1.4rem / 1.6rem
  Weight: 500

Level 4 — Subtitle / Meta
  IBM Plex Mono, Uppercase, 0.75rem / 1rem
  Letter-spacing: 0.2em, Weight: 400

Level 5 — Body Copy
  Inter, 0.95rem / 1.6, Weight: 400

Level 6 — Labels / Captions
  IBM Plex Mono, Uppercase, 0.65rem / 0.9rem
  Letter-spacing: 0.1em, Weight: 400

Level 7 — Pricing / Data
  IBM Plex Mono, 0.95rem / 1.2, Weight: 500
```

### 6.3 Type Rules

- No typefaces outside the specified three
- All-caps only with IBM Plex Mono — never with Cormorant or Inter
- Line length: 55–75 characters per line for body text
- Italic is reserved for Cormorant Garamond headings and pull quotes only
- Never use faux-bold, faux-italic, or synthetic typeface styling

### 6.4 Section Headers (Finalized — Do Not Change)

| Section | Subtitle (Mono) | Heading (Cormorant Italic) |
|---------|-----------------|---------------------------|
| Services | THE APOTHECARY | Treatments & Rituals |
| Gallery | — | The Vault |
| FAQ | — | Guidance & Etiquette |
| Location/Contact | — | The Studio |
| Botanical | — | (Section has dark background, no heading style) |

---

## 07 — Voice & Tone

### 7.1 Brand Voice Principles

| Principle | Description |
|-----------|-------------|
| **Sparse** | Fewer words, greater impact. Every word earns its place. |
| **Sensory** | Describe textures, temperatures, light, and materials. Evoke the physical. |
| **Precise** | "Hand-placed 24k liquid gold foil leaf" not "gold stickers." Technical accuracy is part of the luxury. |
| **Warm** | Never cold or corporate. The warmth of the cream silk background carries into the copy. |
| **Ritualistic** | Language of ceremony and care. The appointment is a ritual, the hands are honored. |

### 7.2 Do & Don't

| Do Say | Don't Say |
|--------|-----------|
| "A sanctuary for your hands" | "A nail salon" |
| "Hand-placed 24k liquid gold foil leaf accents" | "Gold nail stickers" |
| "Russian dry cuticle precision care" | "Cuticle trimming" |
| "Bespoke structured gel overlay" | "Gel nails" |
| "Botanical Cabinet" | "Products page" |
| "Guest" | "Customer" |
| "Reservation" | "Booking" (except in UI context) |
| "Master Artist" | "Nail tech" |

### 7.3 Tone Matrix

| Context | Tone | Example |
|---------|------|---------|
| Service description | Poetic, precise | "Dry cuticle precision care, structured base reinforcement, and hand-placed 24k liquid gold foil leaf accents." |
| Booking flow | Clear, warm | "Select the treatment you would like to reserve." |
| Error / validation | Direct, polite | "Please select a service before proceeding." |
| Confirmation | Celebratory, ritual | "Your reservation is confirmed. Thank you for choosing Gilded Nail Bar." |
| Social media | Intimate, editorial | "Saturday light on McKinney Ave. Gold foil, quiet hands." |
| FAQ | Helpful, thorough | "Our structured gel manicures typically last 2–3 weeks with proper aftercare." |

---

## 08 — Photography & Imagery

### 8.1 Image Direction

The Gilded visual language is raw, textured, and intimate. Images should feel editorial, not commercial.

**Subjects:**
- Close-cropped hands in natural poses — never splayed or artificial
- Hands interacting with raw materials: stone, ceramic, linen, gold leaf
- Salon interiors: concrete surfaces, natural light, linen curtains, aged brass
- Botanical ingredients in their raw state: honey, milk, salt, clay, argan oil
- Negative space — let the frame breathe

**Lighting:**
- Natural daylight only — no harsh studio strobes or ring lights
- Golden hour warmth, soft window light, directional north light
- High contrast but underexposed shadows — moody but not dark

**Post-Processing:**
- Desaturated slightly from natural (warm shift, not cool)
- Sepia tone lift in shadows (+8–12%)
- Reduced clarity / texture for skin (soft, not blurred)
- Film grain simulation (very subtle)

### 8.2 What Never to Photograph

- Fluorescent-lit salon shots
- Overhead group hands (the "Instagram nail spread")
- Hands holding phones, coffee cups, or props
- Busy backgrounds, patterned fabrics, or reflective surfaces
- Overly manicured models — real hands, real skin

### 8.3 Color Treatment

All imagery should carry the brand's warm beige undertone:
- White balance shifted +300K toward warmth
- Shadows tinted toward bronze `#584638`
- Highlights tinted toward cream `#f8efe1`
- Black point lifted slightly (no pure blacks in shadows)

---

## 09 — Iconography

### 9.1 Icon Style

- **Line weight:** 1.5px consistent stroke
- **Corners:** Rounded (stroke-linejoin: round, stroke-linecap: round)
- **Size:** 1em base, scaled proportionally
- **Color:** CurrentColor (inherits from text), always mono
- **Style:** Minimal, geometric, no filled areas
- **Animation:** Hover pulse or rotation on interactive icons

### 9.2 Icon System

The brand uses a **custom SVG sprite system** — all icons are defined as `<symbol>` elements in an inline `<svg>` block in `index.html`. There is no FontAwesome dependency. At page load, JavaScript replaces every `<i class="fa-...">` element with the corresponding inline SVG from the sprite.

**If you add new icons:** Define a new `<symbol id="icon-name">` in the SVG sprite block and add a mapping in the `faMap` object in `app.js`.

### 9.3 Icon Usage Rules

- Never use emoji as icons
- Never use third-party icon libraries (FontAwesome, Material Icons, Phosphor)
- Never color icons outside the brand palette
- All interactive icons must have `aria-hidden="true"` on the SVG and `aria-label` on the parent button

---

## 10 — Patterns, Textures & Materials

### 10.1 Physical Materials (Salon Space)

| Material | Application |
|----------|-------------|
| Raw concrete | Walls, counters, flooring |
| Linen | Curtains, towels, appointment cards |
| Aged brass | Fixtures, signage, tools |
| Matte ceramic | Product vessels, soak bowls |
| Uncoated paper | Business cards, menus, gift cards |
| Warm wood | Reception, shelving, furniture |

### 10.2 Digital Textures

- **Linen grain:** A subtle SVG noise filter overlay (`body::after`) at 0.025 opacity with `mix-blend-mode: multiply` — mimics the feel of raw linen fabric across the entire page
- **Border treatment:** Thin solid strokes (1px) — never border-radius on anything
- **Shadows:** Warm-toned using `rgba(88, 70, 56, 0.12)` — never cool gray shadows
- **Divider lines:** 80px wide, 1px high, bronze color

---

## 11 — Booking System (Detailed)

The most complex feature on the site. This section explains exactly how it works so the owner understands the flow and limitations.

### 11.1 Business Hours

| Day | Status | Hours |
|-----|--------|-------|
| Sunday | Closed | — |
| Monday | Closed | — |
| Tuesday | Open | 10:00 AM – 7:00 PM |
| Wednesday | Open | 10:00 AM – 7:00 PM |
| Thursday | Open | 10:00 AM – 7:00 PM |
| Friday | Open | 10:00 AM – 7:00 PM |
| Saturday | Open | 10:00 AM – 7:00 PM |

### 11.2 Slot Logic

- Appointments are **1-hour slots**
- 9 slots per day per technician: 10:00, 11:00, 12:00, 1:00, 2:00, 3:00, 4:00, 5:00, 6:00
- A slot is available if: the day is Tue–Sat, the slot is not already booked, it is not in blocked slots, and (if today) it has not already passed
- Guests can book up to 60 days in advance
- Sunday and Monday dates are grayed out and unselectable in the calendar

### 11.3 The 4-Step Flow

**Step 1 — Service:** Guest selects a treatment from the catalog. Services are organized by category. Selecting one highlights it with a bronze fill.

**Step 2 — Stylist:** Guest selects a preferred nail artist. Currently shows mock data (Elena, Marcus, Simone, Yuki).

**Step 3 — Date & Time:** Guest picks a date from a custom calendar (Tue–Sat only, 60-day lookahead). After selecting a date, available 1-hour time slots appear. Booked slots show a "Join waitlist" button. Past slots (for today) are grayed out.

**Step 4 — Contact Info:** Guest enters name, email, and phone number. Must agree to the deposit policy checkbox. "Confirm Appointment" button shows a receipt modal.

### 11.4 Receipt & Calendar Export

After confirming, a receipt modal shows:
- Service name, stylist name, date, time, total price
- "Add to Calendar" button downloads an ICS file (valid RFC 5545 format)
- A preparation checklist (arrive 5 min early, avoid cuticle oil, etc.)
- A receipt badge pulse animation

### 11.5 What v1 Does NOT Do (Waiting for v2)

- ❌ Real-time sync between devices
- ❌ Email confirmation to guest
- ❌ Email notification to owner
- ❌ SMS reminder 24h before
- ❌ Owner dashboard to view/manage bookings
- ❌ Block time slots (vacations, closures)
- ❌ Manage services or technicians

---

## 12 — Owner Dashboard (v2)

This will be built in Phase 1 of the v2 migration. The dashboard will be a password-protected page (Auth.js, single owner role) that lets the owner:

| Feature | Description |
|---------|-------------|
| **View bookings** | List of all upcoming and past appointments with guest contact info |
| **Confirm / Cancel** | Mark a booking as confirmed, or cancel with automatic notification |
| **Block slots** | Block specific date/time slots for vacations, closures, or personal time |
| **Manage services** | Add new services, edit prices/descriptions, archive retired ones |
| **Manage technicians** | Add/edit nail artists, set their availability |
| **View private events inquiries** | See all submitted private events form data |
| **View gift card purchases** | See all gift card transactions |

---

## 13 — Services & Pricing (Finalized)

These are the real services and prices. **Do not change without owner approval.**

| Category | Service | Price | Duration |
|----------|---------|-------|----------|
| Manicures | Signature Gilded Manicure | $120 | 60 min |
| Manicures | Structured Gel Manicure | $85 | 45 min |
| Manicures | The Restoration Manicure | $95 | 50 min |
| Manicures | Classic Organic Manicure | $65 | 30 min |
| Pedicures | Stone Soak Pedicure | $95 | 50 min |
| Pedicures | Gilded Organic Pedicure | $125 | 60 min |
| Pedicures | The Recovery Pedicure | $105 | 55 min |
| Pedicures | Classic Organic Pedicure | $75 | 35 min |
| Enhancements | Aprés Gel-X Extensions | $115 | 75 min |
| Enhancements | Hard Gel Overlay | $100 | 60 min |
| Enhancements | Gel-X Removal + New Set | $145 | 90 min |
| Finishes | Gold Foil Accent (per nail) | $12 | — |
| Finishes | Custom Nail Art (per nail) | $18 | — |
| Finishes | French Fade or Ombre | $15 | — |

---

## 14 — Social Media

### 14.1 Grid Aesthetic

- **Palette:** 80% cream/beige tones, 15% bronze text, 5% editorial color
- **Texture:** Slight film grain, warm desaturated tones
- **Layout:** Alternating product shots, detail macros, and text-on-cream cards
- **No:** Bright filters, hard shadows, busy compositions, hashtag-heavy captions

### 14.2 Instagram Feed Strategy

| Content Type | Frequency | Description |
|-------------|-----------|-------------|
| Nail Art Detail | 40% | Macro close-ups of gold foil, chrome, linework |
| Atmosphere | 25% | Salon interior, natural light, material details |
| Educational | 15% | Technique spotlights (Russian manicure, Gel-X process) |
| Text Cards | 10% | Typographic quotes, service announcements on cream background |
| Client / Editorial | 10% | Reposted client tags, editorial collaborations |

### 14.3 Profile

- **Avatar:** Logo mark on cream (square crop) — the inline text mark rendered as a square image
- **Bio format:** "3636 McKinney Ave, Uptown Dallas \_ Bespoke nail artistry \_ Tue–Sat 10–7 \_ Book via link"
- **Link:** Direct to booking page (v2), or link-in-bio tool (v1)

---

## 15 — Print & Physical Applications

| Item | Specs |
|------|-------|
| **Business Cards** | 400gsm uncoated cotton fiber, 85×55mm, letterpress bronze ink, blind emboss logo on reverse, IBM Plex Mono 7pt |
| **Gift Cards** | 600gsm matte board with bronze foil edge, cream stock, Cormorant Garamond logo, linen envelope with bronze wax seal |
| **Appointment Cards** | 300gsm uncoated cream, 120×50mm, handwritten slot for date/time |
| **Private Menu / Lookbook** | Saddle-stitched booklet, 210×270mm, 350gsm cover with bronze foil, 120gsm interior |

---

## 16 — Technical Notes

### 16.1 File Structure (Current)

| File | Purpose |
|------|---------|
| `index.html` | Single-page site markup (all sections, SVG sprite, structured data) |
| `styles.css` | Complete style system (~4200 lines) — design tokens, logo mark CSS, all animations, responsive |
| `app.js` | All JavaScript (~1800 lines) — splash entrance, booking wizard, navigation, reviews, gallery, FAQ, etc. |
| `BRAND_GUIDELINES.md` | This document |
| `gilded_logo.png` | Legacy PNG logo — kept for OG/schema.org meta tags only, not displayed in UI |
| `project_constitution.md` | Design + architecture standards reference |
| `task_plan.md` | Phase tracking (BLAST framework) |
| `CLAUDE.md` | AI assistant instructions |

### 16.2 No External Dependencies

The current site has zero runtime dependencies:
- No CSS frameworks (no Tailwind, no Bootstrap)
- No JavaScript libraries (no jQuery, no React, no Alpine)
- No icon libraries (FontAwesome icons are replaced with inline SVGs at runtime)
- No CDN-hosted assets
- All fonts loaded from Google Fonts with standard `<link>` tags

### 16.3 Browser Support

- Modern browsers: Chrome, Firefox, Safari, Edge (latest 2 versions)
- The site uses `background-clip: text` for the gold foil shimmer — supported in all modern browsers
- The site respects `prefers-reduced-motion` — all animations are disabled for users with that setting

---

## 17 — Key Contacts

| Role | Contact |
|------|---------|
| Salon Address | 3636 McKinney Ave, Suite 150, Dallas, TX 75204 |
| Phone | (214) 555-0145 |
| Email | info@gildednailbar.com |
| Website | https://www.gildednailbar.com (not yet live) |

---

## 18 — Quick Reference (Do's & Don'ts)

| Context | Do | Don't |
|---------|-----|-------|
| Logo | Use the inline text mark | Use the old PNG logo or any other image |
| Colors | Stay within brand palette | Introduce cool tones, pure black, or bright colors |
| Typography | Use three approved typefaces | Use system fonts, decorative, or variable fonts |
| Imagery | Shoot warm, raw, editorial | Use stock photos or flash photography |
| Voice | Write sparse, sensory, precise | Write corporate, wordy, or generic |
| UI | Thin borders, no radius, mono labels | Round corners, shadows, or gradients |
| Social | Warm desaturated grid, text cards | Bright filters, emoji-heavy, hashtag spam |
| Services | Use real names and real prices | Replace with placeholder copy |
| Booking | Understand it's mock data in v1 | Assume bookings are real/synced |

---

**Gilded Nail Bar — Brand & Business Guide v2.0**
*For inquiries: info@gildednailbar.com*
