# Gilded Nail Bar Project Constitution

This constitution establishes the standards, principles, and guidelines for the Gilded Nail Bar web application development. All developers and agents must adhere to this document.

---

## 1. Brand Identity & Persona
* **Core Theme**: High-end, bespoke luxury nail care.
* **Tone**: Elegant, professional, welcoming, and premium.
* **Target Audience**: Clients looking for high-quality nail designs, luxurious salon experiences, and convenient digital booking.

---

## 2. Design System (UI/UX Pro Max)
To prevent "boring white walls" and deliver a stunning first impression, we implement the following:

### 2.1 Color Palette
* **Primary Background**: Midnight Slate (`#0c0c0e`) with dynamic radial gradients.
* **Secondary Background**: Obsidian Glass (`rgba(18, 18, 22, 0.7)`) with `backdrop-filter: blur(12px)`.
* **Accent Gold**: Liquid Gold (`#D4AF37`) and Champagner (`#E5C158`).
* **Text Primary**: Snow White (`#F5F5F7`) for high contrast and modern look.
* **Text Secondary**: Platinum Silk (`#A1A1A6`) for descriptions and subtle labels.
* **Glow/Aurora**: Soft gold/amber aura (`rgba(212, 175, 55, 0.08)` to `rgba(229, 193, 88, 0.03)`).

### 2.2 Typography
* **Headers**: `Playfair Display`, serif. Elegant, classic, and high-fashion.
* **Body/UI**: `Inter`, sans-serif. Highly readable, modern, and clean.

### 2.3 Animations & Micro-Interactions
* **Transitions**: Global standard of `300ms cubic-bezier(0.4, 0, 0.2, 1)`.
* **Interactive Gold Borders**: Glowing active state borders.
* **Scroll Reveals**: Smooth fade-up elements on scroll.
* **Loading States**: Shimmer skeleton cards for gallery and service lists.

---

## 3. Architecture & Code Quality
* **Structure**: Clean HTML5 semantic layout (`<header>`, `<main>`, `<section>`, `<footer>`).
* **Styling**: Component-based vanilla CSS using custom properties (CSS variables) for design token mapping. No Tailwind CSS unless requested.
* **JavaScript**: Modern, modular ESM-compatible JS without framework overhead, ensuring super-fast loading speeds and custom transition controls.
* **Mock Integrations**: Simulated endpoints for local testing (client-side storage for bookings and guest reviews).

---

## 4. Accessibility & SEO (Audit Standards)
* **Contrast**: Text contrast must exceed WCAG AA standards (4.5:1 for body text).
* **ARIA Roles**: Explicit labels for non-text components and booking flow steps.
* **Metadata**: Comprehensive open graph, page titles, and description tags on page load.
* **Performance**: Target 95+ score by optimized asset loading and layout shift minimization.
