# KobetheBarber — Redesign Concept

An unsolicited website redesign concept for **KobetheBarber** (Kolby Williams), a personal-brand
barber in Gonzales, LA (1033 N Airline Hwy, Suite C). The business currently has **no real website** —
clients find it only through Booksy and social media.

## What this is

A polished, single-page, fully static site that turns Kobe's Booksy presence into a real
personal-brand website: a bold hero, a photo-forward portfolio, a clear services/pricing menu, real
reviews, and a location block — with every "Book" button linking to the **live Booksy profile**.

- **Live Booksy:** https://booksy.com/en-us/667432_kobethebarber_barber-shop_21538_gonzales

## Why a redesign helps

- **No website today** — nothing to rank in Google, nothing to share, no first impression the barber controls.
- **Portfolio buried in an app** — great cut photos live only inside Booksy's gallery; a site puts them front and center.
- **No branded home** — a personal brand (Est. 2021, strong logo, loyal following) deserves a page that looks the part.

## Real data used

All content is pulled from the **public Booksy listing**:

- Owner name: **Kolby Williams**
- Address: 1033 N Airline Hwy, Suite C, Gonzales, LA 70737
- Rating: 4.9 stars, 52 reviews
- Full service menu + prices (Supreme Cut $55, Men's Haircut $40, etc.)
- Real customer review quotes
- Real cut photos from the Booksy gallery (in `assets/photos/`)

### Not confirmed (intentionally not faked)

- **Phone number** — not published on Booksy. No `tel:` link is shown rather than invent one. See `<!-- TODO -->` in `index.html`.
- **Business hours** — not published; booking is appointment-based via Booksy. See `<!-- TODO -->`.

If Kolby wants more/newer photos on the site, drop them in `assets/photos/` (see `assets/photos/DROP-PHOTOS-HERE.md`).

## SEO

On-page SEO is baked in: unique `<title>` + meta description, JSON-LD structured data
(`@type: BarberShop` with real name, address, price range, rating, and Booksy `sameAs`),
canonical link, complete Open Graph + Twitter Card tags, plus `robots.txt` and `sitemap.xml`
at the repo root.

**Base URL placeholder:** the canonical, `og:url`, JSON-LD `url`/`image`, `robots.txt`,
and `sitemap.xml` all use the literal placeholder `https://kobethebarber.com/`.
When the real domain is known, do a single find-and-replace of that string across all files
before deploying.

Phone number and business hours are intentionally left out of the schema — neither is published
anywhere, so including them would mean inventing data.

## How to view

Open `index.html` in any browser (double-click it) — no build step, no dependencies.

## Tech

Static HTML/CSS/JS. One Google Fonts link (Anton + Inter). Responsive, accessible, animated with
`IntersectionObserver` scroll reveals and a CDN-free lightbox. Respects `prefers-reduced-motion`.

---

*Redesign concept / design pitch. Not the official KobetheBarber website.*
