# BNI Services – Insurance & Investment Website

A fully responsive, multi-page static website built for **BNI Insurance & Investment Services**, a financial advisory firm based in Vadodara, Gujarat. The site covers their complete service portfolio — Mutual Fund investments, Life Insurance, General Insurance, Franchise opportunities, and Freelance advisory roles — with a design focused on building client trust through clear communication and professional presentation.

![BNI Services Preview](assets/preview.png)

**Live site:** [anime123450.github.io/bni-services](https://anime123450.github.io/bni-services/)

---

## Pages

| File | Description |
|---|---|
| `index.html` | Homepage — hero section, key stats, services overview, why choose BNI, testimonials, CTA |
| `about.html` | Company story, founding timeline, team section, mission & values |
| `mutual-fund.html` | SIP, lumpsum, ELSS, and goal-based mutual fund advisory with consultation form |
| `general-insurance.html` | Health, motor, home & travel insurance plans with quote request form |
| `life-insurance.html` | Term plans, ULIPs, endowment policies and plan comparison |
| `franchise.html` | Franchise opportunity page — plans, investment table, earnings breakdown, FAQ, apply form |
| `freelance.html` | Freelance financial advisor recruitment — roles, earnings calculator, onboarding steps, testimonials |
| `contact.html` | Contact form, office address, phone/WhatsApp/email, embedded Google Map |

---

## Features

- **Zero dependencies** — pure HTML5, CSS3, and vanilla JavaScript. No frameworks, no npm, no build tools.
- **Responsive layout** — works on mobile, tablet, and widescreen. Hamburger menu collapses the full navbar on small screens.
- **1500px max-width layout** — wide container optimised for modern displays without feeling stretched on ultra-wide screens.
- **Real BNI logo** — official BNI Services logo used in the navbar and footer across every page.
- **Page loader** — branded BNI loader with animated progress bar plays on every page entry.
- **Scroll reveal animations** — sections, cards and elements animate in as the user scrolls using IntersectionObserver.
- **Sticky navbar** — shrinks on scroll, always accessible. Active page link highlighted automatically.
- **WhatsApp float** — persistent WhatsApp shortcut button on every page for instant client contact.
- **Sidebar forms** — each service page has a contextual lead capture form (quote / callback / apply) in the sidebar.
- **Consistent design system** — CSS custom properties for colors, typography, spacing, shadows, gradients, and transitions. Change a variable once, updates everywhere.
- **Purple brand theme** — complete purple color scheme (`#7c3aed`) matching the BNI Services brand identity.

---

## Project Structure

```
bni-services/
├── index.html
├── about.html
├── mutual-fund.html
├── general-insurance.html
├── life-insurance.html
├── franchise.html
├── freelance.html
├── contact.html
├── assets/
│   ├── bni-logo.png        # Official BNI Services logo (navbar + footer)
│   └── preview.png         # README hero screenshot
├── css/
│   └── style.css           # All styles — variables, layout, components, pages, utilities, responsive
└── js/
    └── main.js             # Page loader, navbar scroll behaviour, mobile menu, scroll reveal
```

---

## Design System

### Color Palette

| Token | Value | Used for |
|---|---|---|
| `--primary` | `#7c3aed` | Buttons, active links, badges, icons |
| `--primary-dark` | `#6d28d9` | Hover states |
| `--primary-light` | `#8b5cf6` | Subtle accents |
| `--accent` | `#f59e0b` | CTA buttons, highlighted text |
| `--dark` | `#0f172a` | Dark backgrounds, headings |
| `--success` | `#10b981` | Trust indicators, checkmarks |

### Typography

- **Headings** — `Syne` (Google Fonts) — geometric, modern, high visual weight
- **Body** — `Inter` (Google Fonts) — neutral, highly legible at all sizes

### Layout

- Container: `max-width: 1500px`, `padding: 0 2rem`, horizontally centered
- Section padding: `2.25rem 0` standard, `1.75rem 0` compact variant
- Sidebar pattern: 60/40 split (`detail-grid`) on service and opportunity pages
- Card grids: 3-column on desktop, 2 on tablet, 1 on mobile

---

## Key Pages — Section Breakdown

### Homepage (`index.html`)
Hero → Stats bar → Services cards → Why BNI → Testimonials → Partners → CTA → Footer

### Franchise (`franchise.html`)
Hero → Intro + key numbers → Benefits grid (6 cards) → Investment & plans table → How to join (4 steps) → Earnings estimator → FAQ accordion → CTA

### Freelance (`freelance.html`)
Hero → Role cards (MF / GI / LI advisor) → Why BNI freelance + perks → Earnings breakdown + sample income table → 4-step onboarding → Testimonials → Who should join → CTA

---

## Running Locally

No server or build step required. Open directly in any browser:

```bash
# macOS / Linux
open index.html

# Windows
start index.html
```

To serve over HTTP (e.g. for testing form behaviour or map embeds):

```bash
# Python 3
python -m http.server 8000
# Visit: http://localhost:8000
```

---

## Browser Support

| Browser | Version |
|---|---|
| Chrome | 120+ |
| Microsoft Edge | 120+ |
| Firefox | 121+ |
| Safari | 17+ |

---

## About BNI Services

BNI Insurance & Investment Services is a Vadodara-based financial advisory firm founded in 2013. AMFI registered and IRDAI authorised, they help 500+ families and businesses with Mutual Fund investments, Life Insurance, General Insurance, and financial planning across Gujarat.

**Office:** TF-39, Siddheshwar Hallmark, Ajwa Road, Vadodara – 390019
**Phone:** +91 70160 64136
**Web:** [bniservices.in](https://bniservices.in)
