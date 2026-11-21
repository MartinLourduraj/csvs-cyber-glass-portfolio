# MARTIN LOURDURAJ — CSVS CYBER GLASS PORTFOLIO V1.0

> **"Engineering the Future. Building Beyond Boundaries."**  
> Complete, production-ready, futuristic personal portfolio website for **Martin Lourduraj**, Founder & Full-Stack Architect at **CSVS IT Tech**.

---

## 🌟 Visual Architecture & Cyber Glass Design System

The portfolio is built with a cybernetic glassmorphism interface featuring:
- **Colour Palette:**
  - Midnight Background: `#050B18`
  - Deep Navy Surfaces: `#071426`
  - Electric Blue Energy: `#008CFF`
  - Neon Cyan Highlights: `#00D9FF`
  - Crimson Red Accents: `#FF1744`
  - Ice White Typography: `#F1F5F9`
- **Interactive Dual-Core Energy Background:** HTML5 Canvas fluid animation with electric blue originating from the left and crimson red from the right, converging into a central fusion harmonic with floating particles and cursor-reactive radiant ripples.
- **Dynamic 4-Theme Engine:**
  1. `Cyber Blue` (Default HUD)
  2. `Crimson Red` (Cyber Ruby)
  3. `Blue × Red Fusion` (Dual-Core Energy)
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
  - [`remix-of-gen-tech-hub`](https://github.com/MartinLourduraj/remix-of-gen-tech-hub) — Next-Gen Healthcare & Hospital Management Platform
  - [`medical_erp2`](https://github.com/MartinLourduraj/medical_erp2) — Hospital ERP handling OP, IP, Clinical Labs, Pharmacy, and Diagnostic Billing
  - [`DoctoHub`](https://github.com/MartinLourduraj/DoctoHub) — Doctor-Patient Clinical Social Network and appointment management suite
  - **CSVS Nova HMS** — Flagship Enterprise Hospital Management & Laboratory Automation Suite

---

## 🛠️ Technology Stack

- **Framework:** React 18 & TypeScript
- **Bundler:** Vite 5 (Ultra-fast HMR and optimized tree-shaking)
- **Styling:** Tailwind CSS with custom glassmorphism utilities & cyber borders
- **Motion & 3D:** Interactive HTML5 2D Canvas aurora wave simulator + CSS 3D perspective tilt & matrix transforms
- **Icons:** Lucide React + custom cyber SVG icons
- **Deployment Target:** Vercel (Ready with `vercel.json` headers and serverless `/api/contact` function)

---

## 📂 Project Architecture

```
csvs-cyber-glass-portfolio/
├── api/
│   └── contact.ts              # Vercel serverless contact function with spam honeypot
├── public/
│   ├── favicon.svg             # Futuristic hexagonal cyber glass favicon
│   ├── og-image.png            # OpenGraph social sharing card
│   ├── robots.txt              # Search engine crawler policies
│   └── sitemap.xml             # Production sitemap
├── src/
│   ├── assets/                 # Graphics & static assets
│   ├── components/             # Reusable UI & HUD components
│   │   ├── AnimatedCounter.tsx # Scroll-triggered count up statistics
│   │   ├── CyberBackground.tsx # Dual-core blue/crimson fluid canvas waves
│   │   ├── CyberHUDModal.tsx   # Glass HUD dialog for specifications & CV
│   │   ├── GithubIcon.tsx      # SVG GitHub icon
│   │   ├── GlassCard.tsx       # Liquid glass container with gradient borders
│   │   ├── ISTClock.tsx        # Live Indian Standard Time badge
│   │   ├── MagneticButton.tsx  # Cursor-pulling interactive button
│   │   ├── Marquee.tsx         # Infinite scrolling tools reel
│   │   ├── Navbar.tsx          # Floating transparent glass navigation
│   │   ├── SectionHeader.tsx   # HUD section badge, title & laser divider
│   │   ├── ThemeToggle.tsx     # 4-theme engine switcher dropdown
│   │   └── TiltCard.tsx        # 3D perspective mouse tilt with dynamic glare
│   ├── data/
│   │   └── portfolioData.ts    # Centralized single source of truth for all data
│   ├── hooks/
│   │   ├── useActiveSection.ts # Scrollspy active indicator
│   │   ├── useISTTime.ts       # Live Indian Standard Time clock hook
│   │   ├── useReducedMotion.ts # Accessibility prefers-reduced-motion hook
│   │   └── useTheme.ts         # Theme engine state & localStorage sync
│   ├── sections/
│   │   ├── HeroSection.tsx     # Fullscreen cinematic hero with rotating rings
│   │   ├── AboutSection.tsx    # Premium 6-card glass bento grid
│   │   ├── SkillsSection.tsx   # Interactive arsenal with category filters
│   │   ├── ProjectsSection.tsx # Verified project cards with screenshot carousels
│   │   ├── GitHubSection.tsx   # Live GitHub repositories & fallback cache
│   │   ├── ExperienceSection.tsx# Chronological timeline with glowing nodes
│   │   ├── CSVSStartupSection.tsx# "Building Tomorrow with CSVS IT Tech" showcase
│   │   ├── AchievementsSection.tsx# Verified governance & architecture badges
│   │   ├── ContactSection.tsx  # Direct verified glass contact terminal
│   │   └── Footer.tsx          # Animated glass footer with back-to-top
│   ├── styles/
│   │   └── index.css           # Glass tokens, theme variables, scanlines
│   ├── types/
│   │   └── index.ts            # TypeScript data contracts & interfaces
│   ├── App.tsx                 # Root component
│   └── main.tsx                # React DOM entrypoint
├── .env.example
├── index.html                  # SEO, OpenGraph, JSON-LD schema & Google Fonts
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vercel.json                 # Security headers & SPA rewrites
└── vite.config.ts
```

---

## 💻 Local Development & Verification

### 1. Install dependencies (if setting up fresh)
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```
The portfolio will start at `http://localhost:5173`.

### 3. Build for production
```bash
npm run build
```
Generates an optimized bundle in `dist/`.

### 4. Preview production build locally
```bash
npm run preview
```
Runs the compiled build locally at `http://localhost:4173`.

---

## 🌐 Vercel Deployment Guide

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: Martin Lourduraj CSVS Cyber Glass Portfolio V1.0"
   git remote add origin https://github.com/MartinLourduraj/csvs-cyber-glass-portfolio.git
   git push -u origin main
   ```

2. **Import into Vercel:**
   - Log in to [vercel.com](https://vercel.com).
   - Click **Add New Project** -> **Import Git Repository**.
   - Select `csvs-cyber-glass-portfolio`.
   - Framework Preset: **Vite**.
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Configure Environment Variables (Optional):**
   - `CONTACT_NOTIFICATION_EMAIL`: `contact@csvsittech.in`
   - `WEBHOOK_URL`: (Optional Slack/Discord webhook for instant contact notifications)

4. **Deploy:**
   - Click **Deploy**. Vercel will automatically build and publish the portfolio to your production domain!
