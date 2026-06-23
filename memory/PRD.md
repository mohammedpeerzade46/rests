# EMPIRE Restaurant — Landing Page PRD

## Original Problem Statement
Build a landing page for EMPIRE Restaurant, Bhatkal. Family dining destination near NWKRTC Bus Stand, Belalkanda, Bhatkal, Karnataka 581320. Phone/WhatsApp: 07676556639. Services include Dine-In, Takeaway, Home Delivery, No-Contact Delivery, Kerbside Pickup, Drive-Through. Menu covers Halal, Vegetarian, Quick Bites, Small Plates, Main Course, Desserts.

## User Personas
- **Travelers/Tourists** arriving at NWKRTC bus stand looking for nearby food
- **Local families** booking sit-down lunches/dinners and group occasions
- **College students** ordering takeaway/quick bites
- **Business diners** booking private dining for meetings

## Core Requirements (static)
- Showcase the restaurant identity (hero, ambience, menu)
- Provide a working table reservation flow saved to database
- Provide contact, location, opening hours, WhatsApp/Phone CTAs
- Highlight services, amenities, payments, "why choose us"

## Architecture
- Backend: FastAPI + MongoDB (motor) at /api prefix
  - `POST /api/reservations`, `GET /api/reservations`, `POST /api/contact`
  - Pydantic models, ISO timestamps, UUID ids, `_id` excluded
- Frontend: React 19 + Tailwind + shadcn/ui + framer-motion + lucide-react
  - Single landing route at `/` composed of modular section components
  - Reveal-on-scroll via IntersectionObserver, CSS marquee for services
- Design: Warm earthy archetype (Cormorant Garamond + Outfit, terracotta accent on cream)

## What's Been Implemented (2025-12)
- Sticky glass header with anchored navigation + mobile menu
- Hero with full-bleed image, dual CTA, address strip, hours badge
- Editorial marquee strip of services
- About section with stats, testimonial card, value props
- Menu Highlights (asymmetric tetris grid, 5 dishes)
- Gallery (asymmetric grid, 5 images)
- "Why Choose EMPIRE" dark section (6 value rows)
- Reservation form (Calendar+Popover+Select+Textarea), persists to DB, confirmation state
- Visit Us (embedded Google Map, address, phone, WhatsApp, opening hours, payments, parking)
- Footer with contact form (POST /api/contact), socials, copyright

## Test Coverage
- Backend: 11/11 pytest pass (health, reservation CRUD, validation, contact)
- Frontend: full e2e (nav, reservation flow, contact flow, mobile menu)

## Prioritized Backlog (Next)
**P1**
- Wire admin/staff dashboard to view & confirm reservations
- Add menu PDF download / full menu page
- Integrate WhatsApp Business API for auto-confirmations

**P2**
- Photo gallery lightbox
- Customer testimonials carousel
- Multilingual (English / Kannada)
- Online ordering integration (Swiggy/Zomato deep links)
