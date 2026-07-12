# AstraX Nexus — Static Site

Premium handcrafted website for AstraX Nexus, a South African technology & creative studio.
Pure HTML, CSS, and JavaScript — **no build step required**.

## Run locally

Just open `index.html` in your browser.

For best results (so relative asset paths and the chat widget behave identically), serve the folder:

```bash
# Python 3
python3 -m http.server 8000

# or with Node
npx serve .
```

Then visit http://localhost:8000

## Structure

```
/
├── index.html          Home
├── about.html          About + team (Owen, William, Molatelo, Lebo)
├── services.html       Services with flip cards
├── portfolio.html      Portfolio + lightbox
├── gallery.html        Masonry gallery
├── pricing.html        Retainer / Project toggle
├── contact.html        Form + WhatsApp / Email
├── dashboard.html      Admin UI preview
└── assets/
    ├── css/styles.css  Full design system
    ├── js/main.js      Nav, footer, chat mount, form, tabs, lightbox
    ├── js/chatbot.js   Nexi — local-knowledge-base chatbot
    └── images/         Logo & mascot images
```

## Features

- Sticky glassmorphism navbar with scroll state
- Dark theme with luxury gold (#D4AF37) accents
- Reusable navbar/footer/chat injected via JavaScript on every page
- Animated stat counters, flip cards, lightbox, masonry gallery
- Pricing toggle (monthly retainer / project)
- Fully mobile responsive
- Nexi chatbot — vanilla JS with a local knowledge base (services, pricing, timeline, contact, team)
- SEO metadata + Open Graph tags per page

## Team

- Owen Gwaka — Founder, Web & AI
- William — Co-Founder, Marketing
- Molatelo Thoka — Co-Founder, Marketing
- Lebo — Co-Founder, Graphic Design
