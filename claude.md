# Project Context: Marquet NYC

## 1. Overview & Purpose
**Marquet NYC** is a premium, boutique catering and personal chef company based in New York City. The website is designed to be a high-end brand experience that showcases culinary artistry and converts visitors into clients (personal chef services, weddings, corporate events).

- **Design Philosophy:** Luxury-editorial, warmth-forward. It uses cream/ivory surfaces, serif display typography, and generous whitespace.
- **Target Audience:** High-income NYC residents, corporate event planners, and couples planning milestone celebrations.

## 2. Tech Stack
- **Core:** React 19 (Vite)
- **Styling:** Tailwind CSS v4 (using `@tailwindcss/vite`)
- **Animations:** 
  - **Framer Motion:** Used for component-level transitions and interactions.
  - **GSAP (GreenSock):** Used for advanced scroll-triggered animations and complex sequencing.
  - **Lenis:** Integrated for smooth inertial scrolling.
- **Routing:** React Router v7
- **Icons:** Lucide React

## 3. Project Structure
```text
/src
  ├── Home.jsx           # Main landing page component
  ├── App.jsx            # Entry router and Lenis/GSAP initialization
  ├── main.jsx           # React mount point
  ├── index.css          # Global styles, Tailwind imports, and design tokens
  ├── components/        # Reusable UI sections and layout components
  │   ├── Navbar.jsx     # Navigation bar with scroll-adaptive logic
  │   ├── Hero.jsx       # Landing hero section with animation
  │   ├── About.jsx      # Chef intro and brand story
  │   ├── Services.jsx   # Grid/Rows of service offerings
  │   ├── PopularDishes.jsx # Menu highlight showcase
  │   └── Contact.jsx    # Inquiry form section
  ├── pages/             # Route-level pages
  │   └── Menu.jsx       # Full menu listing page
  ├── hooks/             # Custom React hooks (if any)
  └── assets/            # Static images and SVGs
```

## 4. Key Design Tokens (from `index.css`)
- **Backgrounds:** `--color-cream` (#F5F0E8), `--color-ivory` (#FAF7F2)
- **Typography:**
  - **Display:** Serif (e.g., Playfair Display) for headings.
  - **Body:** Sans-serif (e.g., Jost/DM Sans) for readable content.
- **Accents:** `--color-muted-gold` (#B59A72) for links and highlights.

## 5. Development Guidelines
- **Animations:** Always prefer smooth, intentional motion. Use `gsap` for scroll-linked animations and `framer-motion` for state-driven UI changes.
- **Aesthetics:** Maintain the "luxury editorial" feel. Avoid bright, saturated colors. Use generous padding (`space-24`+ for sections).
- **Responsive:** Components should be mobile-first but prioritize the large-screen "premium" experience.
- **Interactive:** Follow the focus/hover patterns defined in `design.md` (e.g., `2px solid color-muted-gold` for focus).

## 6. Common Commands
- `npm run dev`: Start development server.
- `npm run build`: Production build.
- `npm run lint`: Run ESLint.

- **Inspiration Sources:** 
    - [Marquet NYC](https://www.marquet.nyc/) (Overall design)
    - [Catered Plate](https://cateredplate.framer.website/) (Dishes section layout)
    - [Awwwards](https://www.awwwards.com/) (General layout and interaction patterns)
