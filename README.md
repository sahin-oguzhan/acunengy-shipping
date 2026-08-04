# Maritime & Heavy Lift Logistics Platform

A high-performance, multi-lingual enterprise web application built for maritime logistics, fleet operations, and heavy-lift management. Powered by Next.js App Router and headless WordPress via GraphQL.

## Tech Stack

- **Framework:** Next.js 15+ (App Router, Server Components)
- **CMS:** Headless WordPress + WPGraphQL + ACF Pro + Polylang
- **Styling:** Tailwind CSS + CSS Variables (Theme System)
- **Icons:** Material Symbols Outlined
- **Animations:** Framer Motion / Custom CSS Transitions
- **Deployment:** Vercel / Node.js Container

## Key Features

- **Multi-language Architecture:** Internationalized routing (`/tr`, `/en`) driven by dictionary handlers and WPGraphQL language filters.
- **Headless CMS Integration:** Dynamic field extraction mapping ACF Custom Post Types (`services`, `specializations`, `industries`, `vessels`, `posts`).
- **Dynamic Content Routing:** Next.js dynamic routes (`[locale]/[slug]`) for localized insight pages and industry archives.
- **Interactive UI Components:** Expanding accordion grid system, smooth scrolling navigation, and theme toggling support.

## Project Structure

```text
src/
├── app/
│   └── [locale]/
│       ├── page.js             # Localized Homepage
│       ├── layout.js           # Root Layout with Theme & Global Navigation
│       ├── news/
│       │   └── page.js         # News & Insights Archive
│       └── [slug]/
│           └── page.js         # Dynamic News Detail Route
├── components/
│   ├── home/                   # Page Sections (Hero, About, Services, etc.)
│   ├── layout/                 # Global UI (Navbar, Footer, ThemeProvider)
│   └── ui/                     # Reusable Micro-components (FadeIn, Preloader)
├── dictionaries/               # Static Translation Files
└── lib/
    └── api.js                  # GraphQL Fetch Utility & Data Processing
```
