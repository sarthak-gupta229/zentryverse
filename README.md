# 🎮 ZentryVerse — Awards-Inspired React Website

A visually rich, animation-heavy React website inspired by award-winning web experiences. Built with GSAP for smooth scroll-based animations, TailwindCSS for utility-first styling, and React 19 for a performant component architecture.

---

## ✨ Features

- **Cinematic Hero Section** — Full-screen video background with animated clip-path transitions
- **Scroll-Driven Animations** — Powered by GSAP & ScrollTrigger for buttery-smooth effects
- **Animated Titles** — Characters animate in on scroll with staggered GSAP timelines
- **Interactive Features Section** — Bento-grid layout with tilt/hover interactions
- **Marquee Banner** — Infinite scrolling ticker with contact CTA
- **Story Section** — Parallax image effect with 3D mouse-tracking tilt
- **Contact Section** — Stylised call-to-action with clip-path animations
- **Sticky Navbar** — Auto-hides on scroll down, reappears on scroll up with blur glass effect
- **Splash Loading Screen** — Animated atom loader on initial page load

---

## 🛠️ Tech Stack

| Technology                   | Purpose                                |
| ---------------------------- | -------------------------------------- |
| **React 19**                 | UI framework                           |
| **Vite 7**                   | Build tool & dev server                |
| **TailwindCSS 4**            | Utility-first CSS                      |
| **GSAP 3 + @gsap/react**     | Animations & ScrollTrigger             |
| **react-icons**              | Icon library                           |
| **react-use**                | Utility hooks (e.g. `useWindowScroll`) |
| **react-loading-indicators** | Splash screen loader                   |

---

## 📁 Project Structure

```
reactwebsite/
├── public/              # Static assets (images, videos, fonts)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky responsive navbar
│   │   ├── Hero.jsx         # Hero with video & clip-path animation
│   │   ├── About.jsx        # About section
│   │   ├── Features.jsx     # Interactive bento-grid feature cards
│   │   ├── Story.jsx        # Parallax tilt story section
│   │   ├── Marquee.jsx      # Infinite scrolling marquee banner
│   │   ├── Contact.jsx      # Contact/CTA section
│   │   ├── Footer.jsx       # Site footer
│   │   ├── AnimatedTitle.jsx # Reusable scroll-animated title
│   │   └── Button.jsx       # Reusable button component
│   ├── App.jsx          # Root component with page layout
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles & Tailwind directives
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── package.json         # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** v18 or higher → [Download](https://nodejs.org/)
- **npm** v9 or higher (comes with Node.js)

Verify your versions:

```bash
node --version
npm --version
```

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/awards-reactwebsite.git
cd awards-reactwebsite
```

> Replace `your-username` with your actual GitHub username.

---

### 2. Install Dependencies

```bash
npm install
```

This installs all packages listed in `package.json`, including React, GSAP, TailwindCSS, and Vite.

---

### 3. Start the Development Server

```bash
npm run dev
```

Open your browser and navigate to:

```
http://localhost:5173
```

The dev server supports **Hot Module Replacement (HMR)** — changes are reflected instantly without a full page reload.

---

### 4. Build for Production

```bash
npm run build
```

The optimised production bundle is output to the `dist/` directory.

---

### 5. Preview the Production Build

```bash
npm run preview
```

Starts a local server to preview the production build before deploying.

---

### 6. Lint the Code

```bash
npm run lint
```

Runs ESLint across all source files to catch errors and style violations.

---

## 🧩 Available Scripts

| Script            | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start development server at `localhost:5173` |
| `npm run build`   | Build optimised production bundle to `dist/` |
| `npm run preview` | Preview the production build locally         |
| `npm run lint`    | Run ESLint on all source files               |

---

## 🌐 Deployment

You can deploy the `dist/` folder to any static hosting provider:

- **Vercel** — `vercel --prod`
- **Netlify** — drag & drop `dist/` or connect via Git
- **GitHub Pages** — use the `gh-pages` npm package

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
