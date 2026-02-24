# Nalin Homes

> Toronto first-time home buyer specialist portfolio -- property pages, buyer resources, and seller services by Nalin Sharma.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Components-000000?logo=shadcnui&logoColor=white)

## Overview

Nalin Homes is the client-facing portfolio website for Nalin Sharma, a Toronto-based licensed real estate salesperson and Master Certified Negotiation Expert who specializes in first-time home buyers. The site highlights over a decade of experience (160+ successful transactions, 60+ five-star reviews, 90%+ referral-based business) and walks visitors through both the buying and selling journey with dedicated landing pages, client testimonials, FAQ sections, and clear calls to action.

## Features

- **Buyer Landing Page** -- Hero section with rotating audience callouts, embedded Vimeo introduction video, authority stats bar (transactions, reviews, referral rate, average time to accepted offer), and featured client testimonials with star ratings
- **Seller Landing Page** -- Dedicated `/sellers` route with seller-specific hero, about section, stress transformation narrative, step-by-step selling process, property showcase, team profiles, case studies, testimonials, FAQ, and call to action
- **About Section** -- Professional bio with credentials (Licensed Real Estate Salesperson, Master Certified Negotiation Expert)
- **Process & Philosophy** -- Visual walkthrough of how Nalin guides buyers through the home purchasing journey
- **Stress Transformation** -- Pain-to-solution narrative addressing buyer anxiety
- **Testimonials** -- Curated client quotes with five-star ratings from real Toronto buyers
- **FAQ Accordion** -- Answers to common first-time buyer questions covering down payments, total costs, timelines, pre-approval, and competing offers
- **CTA Integration** -- Typeform-powered discovery call booking
- **SPA Routing** -- Client-side routing with React Router, including a 404 page and a custom `copy-404.mjs` build script for GitHub Pages SPA support

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Language | TypeScript 5 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 + tailwindcss-animate |
| UI Components | shadcn/ui (Radix primitives) |
| Routing | React Router DOM 6 |
| Forms | React Hook Form + Zod validation |
| Charts | Recharts |
| Icons | Lucide React |
| State | TanStack React Query |

## Getting Started

```bash
# Clone the repository
git clone git@github.com:izzydoesizzy/nalinhomes.git
cd nalinhomes

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

```
src/
├── assets/                # Hero backgrounds, photos, video thumbnails
├── components/
│   ├── About.tsx          # Meet Nalin bio section
│   ├── CTA.tsx            # Call-to-action with Typeform link
│   ├── FAQ.tsx            # Accordion-based buyer FAQ
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Buyer hero with video, stats, testimonials
│   ├── Navigation.tsx     # Site navigation bar
│   ├── NavLink.tsx        # Navigation link component
│   ├── ProcessPhilosophy.tsx  # Buying process walkthrough
│   ├── ServiceAreas.tsx   # Service areas section
│   ├── StressTransformation.tsx  # Pain-to-solution narrative
│   ├── Testimonials.tsx   # Client testimonial cards
│   ├── WhyChooseMe.tsx    # Differentiators section
│   ├── seller/            # Seller-specific components
│   │   ├── AboutNalin.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── MarketingExamples.tsx
│   │   ├── PropertyShowcase.tsx
│   │   ├── SellerCTA.tsx
│   │   ├── SellerFAQ.tsx
│   │   ├── SellerHero.tsx
│   │   ├── SellerTeam.tsx
│   │   ├── SellerTestimonials.tsx
│   │   ├── SellingProcess.tsx
│   │   ├── StressTransformation.tsx
│   │   └── WhySellersChooseMe.tsx
│   └── ui/                # shadcn/ui primitives
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── pages/
│   ├── Index.tsx          # Buyer landing page
│   ├── Sellers.tsx        # Seller landing page
│   └── NotFound.tsx       # 404 page
└── main.tsx               # App entry point
```

## Deployment

The project builds to static files suitable for any static hosting provider. A custom `scripts/copy-404.mjs` script copies `index.html` to `404.html` after build to support client-side routing on GitHub Pages.

```bash
# Production build
npm run build

# Preview the production build locally
npm run preview
```

---

**Tags:** `client-site`, `landing-page`
**Created:** 2026-01
**Status:** Functional
**Author:** [Izzy Piyale-Sheard](https://github.com/izzydoesizzy) -- @izzydoesizzy
