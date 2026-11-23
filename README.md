# MARTIN LOURDURAJ — CSVS CYBER GLASS PORTFOLIO V2.0

> **"Engineering the Future. Building Beyond Boundaries."**  
> Complete, production-grade, futuristic personal portfolio website for **Martin Lourduraj**, Founder & Full-Stack Architect at **CSVS IT Tech**.

**Live Production Domains:**
- Primary URL: [https://martinlourduraj.vercel.app/](https://martinlourduraj.vercel.app/)
- Secondary Alias: [https://csvs-cyber-glass-portfolio.vercel.app/](https://csvs-cyber-glass-portfolio.vercel.app/)
- Company Website: [https://csvsittech.in](https://csvsittech.in)

---

## 🌟 Visual Architecture & Cyber Glass V2.0 Design System

The portfolio features a high-performance cybernetic glassmorphism aesthetic:
- **Colour Palette:**
  - Midnight Background: `#050B18`
  - Deep Navy Surfaces: `#071426`
  - Electric Blue Energy: `#008CFF`
  - Neon Cyan Highlights: `#00D9FF`
  - Crimson Red Accents: `#FF1744`
  - Ice White Typography: `#F1F5F9`
- **Real Personal Portrait Component:** High-resolution portrait of Martin Lourduraj housed in a floating frosted-glass structure with dual orbital energy rings (clockwise blue ring, counterclockwise crimson ring), floating holographic technology badges, ambient backlighting, and 3D cursor perspective tilt.
- **Multiple Row-Wise Animation System:** Six independent, smooth animated horizontal rows:
  - **ROW 1 — Frontend Technologies Marquee:** Smooth continuous scrolling (right to left) for React 18, TypeScript, JavaScript ESNext, Tailwind CSS, HTML5, CSS3 3D, Vite, Remix.
  - **ROW 2 — Backend & Database Marquee:** Smooth continuous scrolling (left to right) for Python 3, Django ERP, PostgreSQL, MySQL, REST APIs, Redis, Celery, Node.js.
  - **ROW 3 — Cloud & DevOps Marquee:** Slow continuous scrolling (right to left) for AWS Cloud, Linux Systems, Docker Containers, Vercel Edge, Git, GitHub Actions, Nginx.
  - **ROW 4 — Featured Projects Horizontal Carousel:** Wide project cards with drag-to-scroll, touch swipe, keyboard navigation, previous/next controls, and interactive HUD detail modals. Features CSVS Nova HMS, medical_erp2, DoctoHub, remix-of-gen-tech-hub, and CSVS Automation & Nova AI.
  - **ROW 5 — Architectural Specializations:** 6 animated transparent cards with alternating entrance animations and floating motion covering Full-Stack Development, Healthcare ERP, Enterprise Architecture, Cloud Infrastructure, Automation, and Software Engineering.
  - **ROW 6 — Professional Journey Horizontal Timeline:** Verified professional milestones connected with animated laser lines, glowing node indicators, and staggered reveal transitions.
- **Dynamic 4-Theme Engine:**
  1. `Blue × Red Fusion` (Default HUD — Dual-Core Harmonic)
  2. `Cyber Blue` (Electric Sapphire)
  3. `Crimson Red` (Cyber Ruby)
  4. `Midnight Black` (Stealth Obsidian Void)
  *(State seamlessly preserved in `localStorage`)*
- **Live Indian Standard Time (IST) Clock:** Displays live time (UTC+05:30) with pulsing network activity indicator and Tamil Nadu, India location tracking.

---

## 🚀 Verified Personal & Enterprise Data

- **Name:** Martin Lourduraj
- **Professional Title:** Founder & Full-Stack Architect
- **Startup:** CSVS IT Tech ([csvsittech.in](https://csvsittech.in))
- **Direct Enterprise Email:** `contact@csvsittech.in`
- **Location:** Tamil Nadu, India (Global Cloud Operations)
- **GitHub Profile:** [@MartinLourduraj](https://github.com/MartinLourduraj)
- **Verified Public Repositories:**
  - [`medical_erp2`](https://github.com/MartinLourduraj/medical_erp2) — Hospital ERP handling OP, IP, Clinical Labs, Pharmacy, and Diagnostic Billing
  - [`DoctoHub`](https://github.com/MartinLourduraj/DoctoHub) — Doctor-Patient Clinical Social Network and appointment management suite
  - [`remix-of-gen-tech-hub`](https://github.com/MartinLourduraj/remix-of-gen-tech-hub) — Next-Gen Healthcare & Hospital Management Platform
  - **CSVS Nova HMS** — Flagship Enterprise Hospital Management & Laboratory Automation Suite (100% Data Sovereignty)

---

## 🛠️ Technology Stack

- **Framework:** React 18 & TypeScript (Strict static typing)
- **Bundler:** Vite 5 (Ultra-fast HMR and optimized tree-shaking)
- **Styling:** Tailwind CSS with custom glassmorphism utilities & cyber borders
- **Motion & 3D:** Interactive HTML5 2D Canvas aurora wave simulator + CSS 3D perspective tilt & matrix transforms
- **Icons:** Lucide React + custom cyber SVG icons
- **Deployment Target:** Vercel (Production configuration with `vercel.json` headers and serverless `/api/contact` function)

---

## 📂 Project Structure

```
csvs-cyber-glass-portfolio/
├── api/
│   └── contact.ts                       # Vercel serverless contact function with spam honeypot
├── public/
│   ├── favicon.svg                      # Futuristic hexagonal cyber glass favicon
│   ├── images/
│   │   ├── martin-lourduraj.webp        # Official professional portrait (WebP format)
│   │   ├── martin-lourduraj.png         # Official professional portrait (PNG fallback)
│   │   └── github-avatar.png            # Verified GitHub avatar source
│   ├── og-image.png                     # OpenGraph social sharing card
│   ├── robots.txt                       # Search engine crawler policies
│   └── sitemap.xml                      # Production XML sitemap
├── src/
│   ├── components/                      # Reusable UI & HUD components
│   │   ├── AnimatedCounter.tsx          # Scroll-triggered count up statistics
│   │   ├── CyberBackground.tsx          # Dual-core blue/crimson fluid canvas waves
│   │   ├── CyberHUDModal.tsx            # Glass HUD dialog for specifications & CV
│   │   ├── FeaturedProjectsRow.tsx      # ROW 4: Wide project cards horizontal drag/scroll
│   │   ├── GithubIcon.tsx               # SVG GitHub icon
│   │   ├── GlassCard.tsx                # Liquid glass container with gradient borders
│   │   ├── HorizontalJourneyTimeline.tsx# ROW 6: Horizontal professional timeline
│   │   ├── ISTClock.tsx                 # Live Indian Standard Time badge
│   │   ├── MagneticButton.tsx           # Cursor-pulling interactive button
│   │   ├── Marquee.tsx                  # Accessible infinite scrolling marquee
│   │   ├── Navbar.tsx                   # Floating transparent glass navigation
│   │   ├── PersonalPhoto.tsx            # Dedicated portrait with dual orbital rings
│   │   ├── SectionHeader.tsx            # HUD section badge, title & laser divider
│   │   ├── SpecializationsRow.tsx       # ROW 5: 6 animated specialization cards
│   │   ├── TechnologyRibbon.tsx         # Multi-layer ribbon (ROWS 1, 2, 3)
│   │   ├── ThemeToggle.tsx              # 4-theme engine switcher dropdown
│   │   └── TiltCard.tsx                 # 3D perspective mouse tilt with dynamic glare
│   ├── data/
│   │   └── portfolioData.ts             # Centralized single source of truth for all data
│   ├── hooks/
│   │   ├── useActiveSection.ts          # Scrollspy active section indicator
│   │   ├── useISTTime.ts                # Live Indian Standard Time clock hook
│   │   ├── useReducedMotion.ts          # Accessibility prefers-reduced-motion hook
│   │   └── useTheme.ts                  # Theme engine state & localStorage sync
│   ├── sections/
│   │   ├── HeroSection.tsx              # Fullscreen cinematic hero with photo & ribbon
│   │   ├── AboutSection.tsx             # Premium 4-card glass bento grid with portrait
│   │   ├── SkillsSection.tsx            # Interactive tech arsenal with category filters
│   │   ├── ProjectsSection.tsx          # Verified project cards with screenshot carousels
│   │   ├── GitHubSection.tsx            # Live GitHub repositories & fallback cache
│   │   ├── ExperienceSection.tsx        # Chronological timeline with glowing nodes
│   │   ├── CSVSStartupSection.tsx       # "Building Tomorrow with CSVS IT Tech" showcase
│   │   ├── AchievementsSection.tsx      # Verified governance & architecture badges
│   │   ├── ContactSection.tsx           # Direct verified glass contact terminal
│   │   └── Footer.tsx                   # Animated glass footer with back-to-top
│   ├── styles/
│   │   └── index.css                    # Tailwind base, utilities, cyber glass styles
│   ├── types/
│   │   └── index.ts                     # Strict TypeScript interfaces
│   ├── App.tsx                          # Root React component
│   └── main.tsx                         # Vite application entry point
├── .env.example                         # Non-secret environment variable template
├── package.json                         # Dependencies & build scripts
├── tailwind.config.js                   # Tailwind theme tokens & animations
├── tsconfig.json                        # TypeScript strict compiler options
├── vercel.json                          # Vercel deployment rewrites & security headers
└── vite.config.ts                       # Vite configuration
```

---

## 🖼️ How to Replace the Portrait Image

The portrait is decoupled and simple to update:
1. Replace `public/images/martin-lourduraj.webp` (or `martin-lourduraj.png`) with your updated portrait.
2. If using a different file name, update `photoUrl` in `src/data/portfolioData.ts`:
   ```ts
   export const PERSONAL_INFO = {
     ...
     photoUrl: "/images/your-new-photo.webp",
   };
   ```

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run TypeScript checks and production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🔒 Security & Performance Features

- **Strict Content Security & HTTP Headers:** Configured in `vercel.json` with `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and `Strict-Transport-Security`.
- **Anti-Spam Contact Terminal:** Built-in honeypot trap preventing bot submissions without user friction.
- **Reduced Motion Support:** Respects user's `prefers-reduced-motion` operating system preferences.
- **Screen Reader Accessible:** Duplicated marquee elements are marked with `aria-hidden="true"`.

---

© 2026 Martin Lourduraj · CSVS IT Tech. All rights reserved.
