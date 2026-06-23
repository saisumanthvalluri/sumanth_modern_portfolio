# 🚀 Sai Sumanth Valluri — Developer Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A modern, fully responsive, accessible personal portfolio built with Next.js 15, React 19, TypeScript & Tailwind CSS.**

[🌐 Live Demo](https://your-portfolio.com) · [📬 Contact](mailto:vsaisumanth9951@gmail.com) · [🐛 Report Bug](https://github.com/yourprofile/portfolio/issues)

</div>

---

## 📸 Preview

| Dark Mode | Light Mode |
|-----------|------------|
| ![Dark Mode Preview](https://placehold.co/600x340/0F1221/7B6FF0?text=Dark+Mode) | ![Light Mode Preview](https://placehold.co/600x340/F0F2FF/5B4FE8?text=Light+Mode) |

---

## ✨ Features

- 🌗 **Light / Dark Mode** — Seamless toggle via `next-themes`, defaults to dark, persists across sessions
- ⚡ **Next.js 15 App Router** — Server Components, file-based routing, optimised metadata
- 🎨 **Eye-Catching UI** — Animated gradient orbs, rotating avatar ring, mesh background, scroll-reveal animations
- ⌨️ **Typewriter Effect** — Role titles cycle with a blinking cursor
- 📱 **Fully Responsive** — Mobile-first design, tested across all breakpoints
- ♿ **Accessible (WCAG 2.1)** — Semantic HTML, ARIA labels, focus-visible styles, skip navigation, reduced-motion support
- 🔍 **SEO Optimised** — Full OpenGraph, Twitter Card, sitemap-ready metadata, web manifest
- 🧩 **Component-Based Architecture** — Reusable, typed components with clear separation of concerns
- 📊 **Single Data Source** — All resume content lives in `data/portfolio.ts` — one file to update everything
- 🚀 **Performance First** — Lazy loading, code splitting, optimised Google Fonts, CSS custom properties

---

## 🗂️ Project Structure

```
sumanth-portfolio/
├── app/
│   ├── layout.tsx              # Root layout — fonts, SEO metadata, ThemeProvider
│   ├── page.tsx                # Home page — assembles all sections
│   └── globals.css             # CSS design tokens, animations, utility classes
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky blur navbar, active section tracking, mobile menu
│   │   └── Footer.tsx          # Social links, copyright
│   │
│   ├── sections/
│   │   ├── Hero.tsx            # Name, typewriter role, animated avatar, stats, CTA buttons
│   │   ├── About.tsx           # Bio, core competencies, achievement highlights
│   │   ├── Experience.tsx      # Work timeline, education, availability card
│   │   ├── Skills.tsx          # Categorised tech stack with animated badges
│   │   ├── Projects.tsx        # Project cards grid with gradient banners
│   │   └── Contact.tsx         # Contact form (mailto), contact info, social links
│   │
│   └── ui/
│       ├── Button.tsx          # Polymorphic button/anchor, 3 variants (primary/outline/ghost)
│       ├── SectionTitle.tsx    # Reusable eyebrow + heading + subtitle
│       ├── ThemeToggle.tsx     # Sun/Moon icon toggle
│       └── ProjectCard.tsx     # Project card with gradient banner, tech chips, links
│
├── data/
│   └── portfolio.ts            # ⭐ Single source of truth — all resume data lives here
│
├── hooks/
│   └── useScrollReveal.ts      # IntersectionObserver scroll-reveal + typewriter hooks
│
├── public/
│   └── manifest.json           # PWA web manifest
│
├── types/
│   └── index.ts                # Shared TypeScript interfaces
│
├── next.config.ts              # Next.js 15 config (TS supported ✅)
├── tailwind.config.ts          # Tailwind config with custom tokens & animations
├── tsconfig.json               # TypeScript config with path aliases
└── postcss.config.js           # PostCSS config
```

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript 5.7](https://www.typescriptlang.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) + CSS Custom Properties |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Fonts** | Space Grotesk · Inter · JetBrains Mono (Google Fonts) |
| **Icons** | Inline SVGs (zero runtime dependency) |
| **Animations** | CSS Keyframes + Intersection Observer API |
| **Deployment** | [Vercel](https://vercel.com/) (recommended) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v20.0.0 or higher
- **npm** v10+ (or `yarn` / `pnpm`)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourprofile/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev        # Start development server with hot reload
npm run build      # Create optimised production build
npm run start      # Start production server (after build)
npm run lint       # Run ESLint
```

---

## 🎨 Customisation Guide

### 1. Update Your Personal Info

Everything is in one file — **`data/portfolio.ts`**:

```ts
// data/portfolio.ts

export const personalInfo = {
  name: "Your Name",
  email: "you@example.com",
  phone: "+91 XXXXXXXXXX",
  location: "Your City, Country",
  about: "Your bio...",
  resumeUrl: "/resume.pdf",   // Place your resume in /public/resume.pdf
};

export const experiences = [ /* your jobs */ ];
export const projects = [ /* your projects */ ];
export const skillCategories = [ /* your skills */ ];
```

### 2. Add Your Profile Photo

In `components/sections/Hero.tsx`, replace the placeholder block with:

```tsx
import Image from "next/image";

// Replace the placeholder <div> with:
<Image
  src="/profile.jpg"          // Place your photo in /public/profile.jpg
  alt="Your Name"
  fill
  className="object-cover object-top"
  priority
/>
```

### 3. Update Social Links

```ts
// data/portfolio.ts
export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", url: "https://linkedin.com/in/YOUR_HANDLE", icon: "linkedin" },
  { name: "GitHub",   url: "https://github.com/YOUR_HANDLE",      icon: "github" },
  { name: "Email",    url: "mailto:you@example.com",               icon: "email" },
];
```

### 4. Change the Colour Theme

All colours are CSS custom properties in `app/globals.css`:

```css
:root {
  --primary: #5B4FE8;   /* Change to your brand colour */
  --accent:  #00C9A7;   /* Change the accent colour */
}
.dark {
  --primary: #7B6FF0;   /* Dark-mode variant */
  --accent:  #00C9A7;
}
```

### 5. Update SEO Metadata

```ts
// app/layout.tsx
export const metadata: Metadata = {
  title: "Your Name | Your Role",
  description: "Your SEO description...",
  metadataBase: new URL("https://your-domain.com"),
  // ...
};
```

---

## 📦 Adding Your Resume

Place your resume PDF at:

```
public/
└── resume.pdf    ← Drop it here
```

The **Download Resume** button in the Hero section and Navbar will automatically serve it.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended — zero config)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments on every push.

### Deploy to Netlify

```bash
npm run build
# Upload the .next folder or connect via Netlify's GitHub integration
```

### Self-Hosted

```bash
npm run build
npm run start   # Runs on port 3000 by default
```

---

## 🔧 Design Tokens Reference

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--bg` | `#F0F2FF` | `#070A13` | Page background |
| `--surface` | `#FFFFFF` | `#0F1221` | Card backgrounds |
| `--surface-2` | `#F8F9FF` | `#141828` | Input / subtle backgrounds |
| `--primary` | `#5B4FE8` | `#7B6FF0` | Buttons, links, accents |
| `--accent` | `#00C9A7` | `#00C9A7` | Highlights, badges |
| `--text` | `#0D0D1A` | `#EEF0FF` | Primary text |
| `--muted` | `#64748B` | `#8892A4` | Secondary text |
| `--border` | `#E2E8F0` | `#1E2340` | Card / input borders |

---

## 🧩 Component API

### `<Button />`

```tsx
<Button
  variant="primary"   // "primary" | "outline" | "ghost"
  size="md"           // "sm" | "md" | "lg"
  href="/some-link"   // Renders as <a> when provided
>
  Click Me
</Button>
```

### `<SectionTitle />`

```tsx
<SectionTitle
  eyebrow="Section Label"
  title="Main Heading"
  subtitle="Optional supporting text"
  align="center"        // "center" | "left"
/>
```

### `useScrollReveal()`

```tsx
const { ref, isVisible } = useScrollReveal(0.1); // threshold optional

<div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
  Animates in when scrolled into view
</div>
```

---

## ♿ Accessibility

- Semantic HTML5 landmarks (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`, `<article>`)
- All interactive elements have `aria-label` or visible text
- `aria-expanded` on mobile menu toggle
- `role="list"` / `role="listitem"` on non-`<ul>` lists
- `role="alert"` on form status messages
- `focus-visible` ring on all focusable elements
- `prefers-reduced-motion` — all animations disabled when user prefers
- Colour contrast meets **WCAG 2.1 AA** standards

---

## 📄 License

This project is open source under the [MIT License](LICENSE). Feel free to use it as a template for your own portfolio — a ⭐ star is always appreciated!

---

## 🙋 Author

**Sai Sumanth Valluri**

- 📧 [vsaisumanth9951@gmail.com](mailto:vsaisumanth9951@gmail.com)
- 💼 [LinkedIn](https://linkedin.com/in/yourprofile)
- 🐙 [GitHub](https://github.com/yourprofile)
- 📍 Hyderabad, Telangana, India

---

<div align="center">

Crafted with ❤️ and a lot of ☕ &nbsp;|&nbsp; Built with **Next.js 15** & **React 19**

</div>
