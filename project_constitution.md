# Gilded Nail Bar Project Constitution

This constitution establishes the standards, principles, and guidelines for the Gilded Nail Bar web application development. All developers and agents must adhere to this document.

---

## 1. Brand Identity & Persona
* **Core Theme**: High-end, bespoke luxury nail care with a raw, wabi-sabi apothecary aesthetic.
* **Tone**: Elegant, professional, welcoming, premium — inspired by Le Labo Fragrances.
* **Target Audience**: Clients looking for high-quality nail designs, luxurious salon experiences, and convenient digital booking.

---

## 2. Design System (UI/UX Pro Max)

### 2.1 Color Palette
* **Primary Background**: Cream Silk (`#f8efe1`) — extracted from the official logo background.
* **Secondary Background**: Warm Beige (`#f2ebe0`) for selected states and card shading.
* **Concrete / Stone**: `#eae3d7` for footer and divider blocks.
* **Primary Text**: Earthy Bronze-Brown (`#584638`) — extracted from the official logo text.
* **Secondary Text**: Muted Taupe (`#8a7c71`) for descriptions and labels.
* **Borders**: `rgba(88, 70, 56, 0.25)` light, `#584638` strong.

### 2.2 Typography
* **Headers**: `Cormorant Garamond`, serif, italicized. Classic, sophisticated, high-fashion.
* **Labels / UI**: `IBM Plex Mono`, monospace, all-caps. Typewriter-label aesthetic.
* **Body**: `Inter`, sans-serif. Highly readable, modern, and clean.

### 2.3 Animations & Micro-Interactions
* **Transitions**: Global standard of `0.4s cubic-bezier(0.16, 1, 0.3, 1)`.
* **Interactive Borders**: Thin solid dark borders, no border-radius anywhere.
* **Scroll Reveals**: Smooth fade-up elements on scroll.
* **Loading States**: Shimmer skeleton cards for gallery and service lists.

---

## 3. Architecture & Code Quality
* **Structure**: Clean HTML5 semantic layout (`<header>`, `<main>`, `<section>`, `<footer>`).
* **Styling**: Component-based vanilla CSS using custom properties (CSS variables) for design token mapping. No Tailwind, no Bootstrap, no CSS frameworks.
* **JavaScript**: Modern, modular ESM-compatible JS without framework overhead.
* **Mock Integrations**: Simulated endpoints for local testing (client-side storage for bookings and guest reviews).

---

## 4. Content & Copy Guidelines
* **Tone**: Poetic, sparse, sensory. Focus on feeling and outcome, not procedure.
* **Formatting**: Short lines, generous whitespace. Copy reads like poetry, not a brochure.
* **Service descriptions**: "Hand-placed 24k liquid gold foil leaf accents" not "Polish application with gold stickers."
* **Business details**: Address, phone, hours, service names, prices are **real and finalized** — never replace with placeholder copy.

---

## 5. Accessibility & SEO (Audit Standards)
* **Contrast**: Text contrast must exceed WCAG AA standards (4.5:1 for body text). Bronze-brown (#584638) on cream silk (#f8efe1) yields 5.1:1 — compliant.
* **ARIA Roles**: Explicit labels for non-text components and booking flow steps.
* **Metadata**: Comprehensive open graph, page titles, and description tags on page load.
* **Performance**: Target 95+ score by optimized asset loading and layout shift minimization.
* **Schema**: Structured data (LocalBusiness, Service, Review, FAQ, Product) for rich search results.
