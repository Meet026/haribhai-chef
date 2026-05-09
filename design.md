# design.md — Marquet NYC
> Deep design analysis of [marquet.nyc](https://www.marquet.nyc/)  
> Generated from: full site inspection across Home, Menu, Services, and About pages

---

## One-Line Summary

Marquet's design system is a luxury-editorial, warmth-forward identity built on cream/ivory surfaces, serif display typography, and generous whitespace — communicating intimacy, refinement, and culinary artistry to an upscale NYC audience.

---

## 1. Overview / Purpose

### What the Product Is
Marquet is a boutique catering and personal chef company based in New York City, founded in 2019 by AnnaMarie Marquet. The website serves as both a brand experience and a client acquisition funnel — communicating trust, artistry, and warmth while guiding visitors toward booking a consultation.

### Design Goals
- **Branding**: Establish a premium, boutique identity that feels personal and craft-oriented, not corporate
- **Usability**: Simple, frictionless path from discovery → service exploration → booking
- **Emotional resonance**: Evoke warmth, comfort, and celebration through food imagery and tone
- **Performance**: Fast-loading with avif images, minimal JS, Webflow-based architecture

### Target Audience
- High-income NYC residents (personal chef clients)
- Corporate event planners and HR teams (conference/corporate catering)
- Couples planning weddings or milestone celebrations
- Individuals hosting intimate gatherings or dinner parties

### High-Level Design Philosophy
> *"Food should be as comforting as it is beautiful. And events should be as simple as they are stunning."*

The design mirrors this ethos: editorial restraint meets warmth. Layouts are generous and uncluttered. Typography is expressive but never overwrought. Photography does the heavy lifting — the UI steps back to let food and people take center stage.

---

## 2. Design Principles

### Core Rules
1. **Let the food speak** — Photography is always the hero; UI chrome is minimal
2. **Warmth over formality** — Cream/ivory tones, soft contrast, serif type feel approachable, not cold
3. **Simplicity as luxury** — White space is generous; information is never dense or rushed
4. **Personalisation as identity** — Copy and layout reinforce the boutique, custom-service feel
5. **Editorial pacing** — Sections breathe; scroll is intentional and rhythmic

### Do's
- Use full-bleed photography for section heroes
- Allow generous padding around all text blocks
- Maintain consistent section rhythm (text + image alternation)
- Use the split logo treatment only in hero contexts
- Prioritize legibility: dark text on light backgrounds

### Don'ts
- Avoid dense text walls or long unbroken paragraphs
- Don't use bright, saturated colors — all tones should feel muted, warm, and editorial
- Avoid geometric/san-serif boldness as primary display choices
- Don't use dropdowns or complex menus — keep navigation flat and simple
- Avoid dark backgrounds except for full-bleed CTA sections

### Brand UX Principles
- **Boutique**: Nothing feels mass-market or templated
- **Editorial**: Layout and type rhythm borrow from upscale food/lifestyle magazines
- **Intimate**: Personal chef photography, first-name chef reference, client testimonials
- **Calm**: Low visual noise, slow-reading content, no aggressive CTAs

---

## 3. Design Tokens (Foundations)

### Colors

#### Primary Palette
| Token | Value (Estimated) | Usage |
|---|---|---|
| `color-cream` | `#F5F0E8` | Primary background, surface |
| `color-ivory` | `#FAF7F2` | Section alternates, card backgrounds |
| `color-warm-white` | `#FFFFFF` | Pure white overlays |
| `color-charcoal` | `#1C1C1A` | Primary body text |
| `color-dark-brown` | `#2A2218` | Heading text, logo |
| `color-warm-tan` | `#C8B89A` | Accent lines, borders, dividers |

#### Secondary / Accent
| Token | Value (Estimated) | Usage |
|---|---|---|
| `color-muted-gold` | `#B59A72` | Hover states, link accents, decorative elements |
| `color-sage` | `#8A9E8B` | Subtle category labels, micro-accents |
| `color-dusty-rose` | `#C4A49A` | Occasional warm accent on testimonial areas |

#### Background / Surface
| Token | Usage |
|---|---|
| `surface-primary` → `color-cream` | Most page backgrounds |
| `surface-section` → `color-ivory` | Alternating content sections |
| `surface-dark` → `color-charcoal` | Full-bleed CTA sections (footer, booking) |
| `surface-card` → `color-warm-white` | Menu item cards, testimonial cards |

#### Text Colors
| Token | Usage |
|---|---|
| `text-primary` → `color-charcoal` | Body copy |
| `text-heading` → `color-dark-brown` | Display headings |
| `text-muted` → `#7A7060` | Supporting text, metadata, labels |
| `text-inverse` → `#FAF7F2` | Text on dark backgrounds |
| `text-link` → `color-muted-gold` | Inline links |

#### Border / Divider
| Token | Usage |
|---|---|
| `border-subtle` → `rgba(200,184,154,0.3)` | Card borders, section dividers |
| `border-default` → `color-warm-tan` | Form inputs, explicit dividers |

#### Semantic Colors
| Token | Estimated Value | Usage |
|---|---|---|
| `color-success` | `#7A9E7E` | Form success message |
| `color-error` | `#C47A6A` | Form error message ("Oops!") |
| `color-warning` | `#C4A455` | Alerts / notices |

#### States
| State | Treatment |
|---|---|
| Hover | Underline on links; slight opacity shift (0.85) on buttons |
| Active | Pressed opacity 0.7 |
| Disabled | Opacity 0.4, no pointer |
| Focus | Visible outline using `color-muted-gold` at 2px offset |

---

### Typography

#### Font Families
| Token | Family | Role |
|---|---|---|
| `font-display` | Serif (likely **Playfair Display** or similar high-contrast editorial serif) | Headlines, hero text |
| `font-body` | Humanist sans-serif (likely **Jost**, **DM Sans**, or **Lato**) | Body, nav, labels |
| `font-accent` | Italic serif variant | Pull quotes, taglines |

> **Note**: Exact font names require CSS inspection. Inferred from visual weight, x-height, and editorial character of the rendered text.

#### Font Weights
| Token | Weight | Usage |
|---|---|---|
| `weight-light` | 300 | Body paragraph text |
| `weight-regular` | 400 | Standard UI text |
| `weight-medium` | 500 | Navigation, labels |
| `weight-semibold` | 600 | Subheadings, card titles |
| `weight-bold` | 700 | Display headings, hero text |

#### Type Scale
| Token | Size | Line Height | Usage |
|---|---|---|---|
| `text-xs` | 11px | 1.4 | Metadata, captions |
| `text-sm` | 13px | 1.5 | Labels, tags, nav items |
| `text-base` | 16px | 1.7 | Body copy |
| `text-md` | 18px | 1.6 | Lead paragraphs |
| `text-lg` | 24px | 1.4 | Section subheadings |
| `text-xl` | 32px | 1.3 | H3, menu category headers |
| `text-2xl` | 48px | 1.1 | H2, section titles |
| `text-3xl` | 64px | 1.0 | H1, hero display |
| `text-display` | 80–120px | 0.9 | Stacked multi-line hero text |

#### Letter Spacing
| Token | Value | Usage |
|---|---|---|
| `tracking-tight` | -0.02em | Display / hero headings |
| `tracking-normal` | 0 | Body text |
| `tracking-wide` | 0.08em | All-caps labels, section intros |
| `tracking-widest` | 0.15em | Category tags (e.g., "Services", "Menu") |

#### Typography Usage
| Context | Font | Weight | Size Token |
|---|---|---|---|
| Hero headline | `font-display` | 700 | `text-display` |
| Section heading | `font-display` | 600 | `text-2xl` |
| Body copy | `font-body` | 300 | `text-base` |
| Navigation | `font-body` | 500 | `text-sm` |
| Eyebrow labels | `font-body` | 400 | `text-xs`, wide tracking |
| Menu item number | `font-display` | 300 | `text-lg` |
| CTA button | `font-body` | 500 | `text-sm`, wide tracking |

---

### Spacing

The site uses a **4px base grid** with generous multipliers typical of luxury editorial design.

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Micro gaps |
| `space-2` | 8px | Icon padding, tight inline |
| `space-3` | 12px | Tag padding |
| `space-4` | 16px | Base element padding |
| `space-6` | 24px | Card inner padding |
| `space-8` | 32px | Component gaps |
| `space-12` | 48px | Section sub-divisions |
| `space-16` | 64px | Component to component |
| `space-24` | 96px | Section padding vertical |
| `space-32` | 128px | Hero section padding |
| `space-48` | 192px | Major section breaks |

#### Section Spacing
- Top/bottom section padding: `space-24` to `space-32` (96–128px)
- Hero vertical padding: `space-32` to `space-48` (128–192px)
- Between sections: `space-16` to `space-24` (64–96px)

#### Component Padding
- Button: `space-3` vertical, `space-8` horizontal (12px / 32px)
- Card: `space-6` all sides (24px)
- Nav item: `space-3` vertical, `space-4` horizontal
- Input: `space-4` vertical, `space-4` horizontal

---

### Radius / Shapes

| Token | Value | Usage |
|---|---|---|
| `radius-none` | 0px | Most cards, images — sharp edges are intentional |
| `radius-sm` | 2px | Subtle rounding on buttons (near-square) |
| `radius-md` | 4px | Form inputs |
| `radius-full` | 9999px | Pill tags or badges (if used) |

**Shape Rules:**
- Cards: No border radius (`radius-none`) — sharp corners reinforce editorial luxury
- Buttons: Nearly flat, near-square shape (`radius-sm`) — avoid pill shapes
- Images: Always square or rectangular crops, no rounded corners
- Inputs: Minimal radius (`radius-md`) with bottom-border-only treatment preferred

---

### Elevation

The site uses a **predominantly flat design** — shadows are minimal or absent.

| Token | Value | Usage |
|---|---|---|
| `shadow-none` | none | Default for all cards and sections |
| `shadow-subtle` | `0 2px 12px rgba(0,0,0,0.06)` | Hover state on interactive cards |
| `shadow-overlay` | `0 8px 40px rgba(0,0,0,0.12)` | Modals, drawers |

**Layering Rules:**
- Use flat surfaces by default — the brand avoids depth through shadow
- Elevation via layering (image on background) is preferred over shadows
- Overlapping text on image uses dark overlay gradients, not box shadows
- Modals: one level of elevation only (`shadow-overlay`)

---

## 4. Layout System

### Grid System
- **Base grid**: 12-column grid
- **Gutter**: 24px desktop, 16px mobile
- **Common column combinations**:
  - 12/12: Full-bleed hero, image sections
  - 6/6: Two-column text+image splits
  - 4/8 or 3/9: Menu item number + content
  - 3×4: Three-column service/menu cards

### Container Widths
| Breakpoint | Max Container |
|---|---|
| Mobile (<768px) | 100% with 20px padding |
| Tablet (768–1024px) | 90% |
| Desktop (1024–1440px) | 1200px |
| Wide (>1440px) | 1400px |

### Alignment Rules
- Text-heavy sections: left-aligned (not centered) for editorial feel
- Hero text: left or center — varies by page
- Menu items: numbered left, content right (3:9 or 2:10 split)
- Section headers: often uppercase, spaced, centered or left

### Section Structure
Each page section follows a predictable rhythm:
1. **Eyebrow label** (uppercase, tracked, small) — e.g., "Services" or "Menu"
2. **Display heading** (large serif, often 2-line stacked)
3. **Body copy** (light weight, generous line height)
4. **CTA or visual** (button or full-bleed image)

### Whitespace Strategy
Whitespace is used aggressively as a luxury signal. Sections never feel crowded. The guiding principle: if in doubt, add more vertical space.

---

## 5. Components

### Navigation (Top Nav)
- **Purpose**: Primary wayfinding and brand anchor
- **Structure**: Logo left → nav links center → CTA button right
- **Variants**: Default (light bg) / Overlay (transparent on hero images)
- **States**: Default, hover (underline), active (current page)
- **Links**: Services (dropdown), Menu, About Us
- **CTA**: "Get In Touch" — outlined or filled button, right-aligned
- **Mobile**: Hamburger trigger → full-screen drawer with stacked links + social icons

### Buttons
- **Purpose**: Primary action trigger (booking, menu navigation)
- **Structure**: Text label, optional arrow icon
- **Variants**:
  - `btn-primary`: Dark fill, light text (`color-charcoal` bg, `color-cream` text)
  - `btn-secondary`: No fill, border + text (`border-default`, `text-primary`)
  - `btn-ghost`: Text only with underline (inline CTAs)
- **States**: Default, Hover (opacity shift + underline), Active, Disabled (opacity 0.4)
- **Sizing**: Single size — compact with generous letter spacing (uppercase labels)

### Cards (Menu Item)
- **Purpose**: Present individual menu categories
- **Structure**: Index number (serif, large, light weight) + Heading + Body text + CTA link + Image
- **Layout**: Two-column (text left, image right) or stacked on mobile
- **Variants**: Standard (odd) / Reversed (even) — alternating image position
- **States**: Default only — no interactive card hover (CTA links are hover targets)

### Hero / Banner Section
- **Purpose**: Emotional hook and brand introduction
- **Structure**: Full-bleed image + overlay + logo lockup (split SVG animation) + tagline
- **Variants**: Home hero (animated logo split), Interior hero (static image + heading)
- **States**: Loading (progressive image reveal), Default

### Forms (Contact / Booking)
- **Purpose**: Capture inquiry or schedule a call
- **Structure**: Full-bleed dark section + stacked form fields + submit button
- **Fields**: Name, email, event type, message (inferred from "book me" flow)
- **Input style**: Bottom-border only, no box border; cream text on dark background
- **States**: Default, Focus (border highlight in `color-muted-gold`), Error (red helper text), Success ("Thank you!" inline message)
- **Error message**: "Oops! Something went wrong while submitting the form."
- **Success message**: "Thank you! Your submission has been received!"

### Accordion / FAQ
- **Purpose**: Present common questions without page clutter
- **Structure**: Question (trigger) + Answer (collapsible panel)
- **Variants**: Collapsed (default), Expanded
- **States**: Default (chevron down), Active (chevron up, panel open)
- **Usage**: Menu page FAQ section

### Testimonials
- **Purpose**: Social proof through client voice
- **Structure**: Client name + location + headline quote + body quote
- **Layout**: Horizontal scroll or carousel
- **Variants**: Default card, Active/focused card
- **States**: Default, Hover, Active (in carousel)

### Image Gallery / Scrolling Grid
- **Purpose**: Visual showcase of events and food
- **Structure**: 3-column masonry or uniform grid of AVIF images
- **Variants**: 3-up (services sections), Alternating large/small
- **States**: Default, Hover (subtle scale or overlay)

### Footer
- **Purpose**: Secondary navigation and contact
- **Structure**: Full-bleed CTA section (dark) → Logo + nav links + social icons + attribution
- **Sections**:
  - "LET'S CREATE YOUR GATHERING" with "Schedule a Call" CTA
  - Inline contact form (repeated)
  - Social links: Instagram, LinkedIn
  - Design credit: sa-design.co
- **Text**: Cream on dark background

### Service Dropdown Menu
- **Purpose**: Reveal service sub-pages from nav
- **Structure**: "Services" trigger → dropdown with 4 items (Personal Chefs, Wedding Events, Conference Catering, Corporate Events)
- **Behavior**: Hover or click to open
- **States**: Default, Open, Hover item

---

## 6. Interaction & States

### Hover
- Links: Underline appears or color shifts to `color-muted-gold`
- Buttons: Opacity reduction (0.85), possible underline
- Cards: Very subtle shadow lift (`shadow-subtle`) or scale (1.01)
- Nav items: Underline or color shift

### Active / Pressed
- Buttons: Opacity 0.7, slight downward translate (1px)
- Nav items: Permanent underline for current page

### Focus
- All interactive elements: `2px solid color-muted-gold` outline with `2px` offset
- Inputs: Bottom border highlight in `color-muted-gold`

### Disabled
- Opacity: 0.4
- Cursor: `not-allowed`
- No hover effects applied

### Loading States
- Images: Native browser lazy-load with AVIF format; no custom skeleton inferred
- Form submit: Button likely shows loading text or spinner during async submission

### Error States
- Form: Inline error message in `color-error` below affected field
- Global error: Full-form error message ("Oops! Something went wrong...")

### Success States
- Form: "Thank you! Your submission has been received!" inline, replaces form or appears above it

### Feedback Patterns
- No toast notifications observed
- All feedback is inline within the form section

---

## 7. Responsive Design

### Breakpoints
| Token | Width | Description |
|---|---|---|
| `bp-mobile` | <480px | Small phones |
| `bp-mobile-lg` | 480–767px | Large phones |
| `bp-tablet` | 768–1023px | Tablets |
| `bp-desktop` | 1024–1279px | Small desktop |
| `bp-desktop-lg` | 1280–1439px | Standard desktop |
| `bp-wide` | ≥1440px | Large screens |

### Layout Changes Across Screen Sizes
| Section | Desktop | Mobile |
|---|---|---|
| Navigation | Horizontal logo + links + CTA | Hamburger → drawer |
| Hero | Full-bleed with overlay text | Stacked: image top, text below |
| Services grid | 3-column image grid | Single column scroll |
| Menu items | 2-column (text + image) | Stacked (text above, image below) |
| Testimonials | Horizontal carousel | Swipeable single card |
| Footer CTA | Side-by-side or stacked | Fully stacked |
| Form | 2-column field layout | Single column |

### Component Behavior
- Images: Always full-width on mobile, object-fit cover
- Buttons: Full-width on mobile (`width: 100%`)
- Typography: Display sizes scale down significantly (80px → 40px for hero text)
- Navigation: Collapses to hamburger at `bp-tablet`

### Touch Target Rules
- Minimum touch target: 44×44px (iOS HIG / WCAG 2.5.5)
- Nav links: Adequate padding ensures this is met
- Buttons: Full-height padding ensures minimum size
- Accordion triggers: Full-row clickable

---

## 8. Content & Typography Usage

### Heading Hierarchy
| Level | Usage | Example |
|---|---|---|
| H1 | Page title, hero display | "Our Menu" |
| H2 | Major section titles | "AnnaMarie Marquet", "Serving up thoughtful menus" |
| H3 | Menu item names, card titles | "Passed Canapes", "Grazing Tables" |
| H4 | Sub-category labels within sections | "Standard Bites", "Elevated Bites" |
| Eyebrow | Pre-heading context label | "Services", "Menu", "Meet the Chef" |

### Paragraph Spacing
- Paragraph margin-bottom: `space-4` to `space-6` (16–24px)
- Lead paragraphs: larger size (`text-md`) with more line-height (1.75)
- Lists: `space-2` between items (8px)

### Link Styles
- Body links: `color-muted-gold`, underline on hover
- Navigation links: No underline default, underline on hover
- CTA links: Button treatment or arrow-appended text link
- Footer links: Light text, underline on hover

### Tone & Voice Guidelines
- **Warm and personal** — first-person plural ("we"), chef referred to by first name
- **Poetic without being purple** — balanced elegance, not overwrought
- **Action-forward** — CTAs use active verbs: "Check our Menu", "Schedule a Call", "Get In Touch"
- **Reassuring** — FAQs written to dissolve hesitation, not as legal disclaimers
- **Community-focused** — repeated use of "gather", "gathering", "connect"

---

## 9. Accessibility

### Color Contrast
- Body text (`color-charcoal` on `color-cream`): estimated 8:1+ — **AAA compliant**
- Muted text (`text-muted` on `color-cream`): ~4.5:1 — **AA compliant**
- Light text on dark CTA section: ~10:1 — **AAA compliant**
- `color-muted-gold` on white: may approach AA minimum — **verify in implementation**

### Focus Visibility
- All interactive elements must have visible focus indicators
- Recommended: `outline: 2px solid #B59A72; outline-offset: 2px`
- Focus must not be removed (`outline: none` without replacement is a violation)

### Keyboard Navigation
- Tab order: Logo → Nav links → CTA → Main content → Footer
- Accordion: Space/Enter to toggle
- Carousel/testimonials: Arrow keys to navigate
- Modal (if applicable): Focus trap within open modal; Escape to close

### Screen Reader Considerations
- Hero images: `alt="Marquet canapes"` (observed in source) — maintain descriptive alts
- Decorative images (textures, dividers): `alt=""`
- Logo: `alt="Marquet"` or similar
- Section landmark roles: `<nav>`, `<main>`, `<footer>`, `<section>`
- FAQ accordion: Use `aria-expanded`, `aria-controls` attributes

### Minimum Touch Sizes
- 44×44px minimum for all tappable targets (WCAG 2.5.5 AA)
- Ensure carousel dots/controls meet this on mobile

---

## 10. Assets & Media

### Icons
- **Style**: Simple, line-based; not filled/solid
- **Usage**: Social icons (Instagram, LinkedIn) in nav and footer; possible arrow icons on CTAs
- **Size**: 20–24px display size
- **Format**: SVG inline or sprite
- **Color**: Inherits text color; hover shifts to `color-muted-gold`

### Logo
- **Format**: Multi-part SVG split into 8 segments (Logo-split1.svg through Logo-split8.svg)
- **Animation**: Segments animate in sequentially for hero entrance effect
- **Sizes**: Full lockup (hero), compact (nav)
- **Usage**: Only full lockup in hero; compact single SVG in header/footer

### Illustrations / Decorative SVG
- **Usage**: Tagline "Creating culinary gatherings since 2019" rendered as SVG text illustration
- **Style**: Handwritten or script-style; organic, not geometric

### Images
- **Format**: AVIF (primary), JPEG fallback
- **Style**: Warm-toned, natural light, food photography with shallow depth of field
- **Crops**: Landscape (hero, section banners), Portrait (chef photos), Square (grid items)
- **Composition**: Food close-ups, table settings, event scenes — no stock-photo feel
- **Usage rules**:
  - Always use real food/event photography
  - Maintain warm tonal consistency — no cold or blue-tinted images
  - Hero images should have enough negative space for text overlay
  - Avoid busy backgrounds for overlay text sections

### Textures
- Background texture AVIF used on homepage (`Texture-home2-.avif`) — subtle grain/linen
- Adds warmth without introducing competing visual elements

---

## 11. Theming / Modes

### Light Mode (Default — Only Mode Observed)
The site operates exclusively in light mode. A dark section exists for CTA/booking areas but is a design element, not a system theme toggle.

### Dark Section (CTA / Footer)
- Background: `color-charcoal` (`#1C1C1A`)
- Text: `color-cream` / `color-ivory`
- Button: Inverted (cream fill, dark text, or outlined cream)
- This is a layout variant, not a theme toggle

### Brand Themes
- Single brand theme — no multi-tenant or whitelabel requirements observed
- All pages share the same warm cream palette

### Surface Variations
| Surface | Background | Text |
|---|---|---|
| Default page | `color-cream` | `text-primary` |
| Alternate section | `color-ivory` | `text-primary` |
| Dark CTA | `color-charcoal` | `text-inverse` |
| Card | `color-warm-white` | `text-primary` |

---

## 12. Implementation Guidelines

### Token Usage Rules
- **Never hardcode hex values** in component styles — always reference design tokens
- All colors, sizes, spacing, and radii must map to CSS custom properties
- Example: Use `var(--color-cream)` not `#F5F0E8`

### Naming Conventions
```css
/* Colors */
--color-{name}            e.g. --color-cream, --color-charcoal
--surface-{role}          e.g. --surface-primary, --surface-dark
--text-{role}             e.g. --text-primary, --text-muted, --text-inverse
--border-{weight}         e.g. --border-subtle, --border-default

/* Typography */
--font-{role}             e.g. --font-display, --font-body
--text-{size}             e.g. --text-base, --text-xl, --text-display
--weight-{name}           e.g. --weight-light, --weight-bold
--tracking-{name}         e.g. --tracking-tight, --tracking-wide

/* Spacing */
--space-{n}               e.g. --space-4, --space-16, --space-32

/* Radius */
--radius-{name}           e.g. --radius-none, --radius-sm

/* Shadows */
--shadow-{name}           e.g. --shadow-none, --shadow-subtle
```

### CSS Custom Properties Root Example
```css
:root {
  /* Colors */
  --color-cream: #F5F0E8;
  --color-ivory: #FAF7F2;
  --color-charcoal: #1C1C1A;
  --color-dark-brown: #2A2218;
  --color-warm-tan: #C8B89A;
  --color-muted-gold: #B59A72;

  /* Surfaces */
  --surface-primary: var(--color-cream);
  --surface-dark: var(--color-charcoal);
  --text-primary: var(--color-charcoal);
  --text-inverse: var(--color-cream);
  --text-muted: #7A7060;

  /* Typography */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Jost', 'DM Sans', sans-serif;

  /* Spacing */
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-16: 64px;
  --space-24: 96px;
  --space-32: 128px;

  /* Radius */
  --radius-none: 0px;
  --radius-sm: 2px;
  --radius-md: 4px;

  /* Shadows */
  --shadow-none: none;
  --shadow-subtle: 0 2px 12px rgba(0,0,0,0.06);
}
```

### Design System Mapping
- Platform: **Webflow** (inferred from hosting and file structure)
- Token system: Should map to Webflow's global swatches and text styles, or be exported to Figma variables
- Component library: Webflow symbols / components

---

## 13. Examples / Patterns

### Pattern: Hero Section
```
[Full-bleed food image]
  ↳ Overlay: transparent gradient bottom
  ↳ Centered: Animated split logo (8 SVG parts)
  ↳ Below fold: Left-aligned display headline + body + CTA
```

### Pattern: Service/Menu Item Row
```
[Eyebrow: "01."]
[H3: "Passed Canapes"]
[Body: 2–3 sentence description]
[CTA: "Check our Menu" → ghost link]
[Right: Full-bleed image]
```
Even-numbered items flip: image left, text right.

### Pattern: Chef / About Section
```
[Eyebrow: "Meet the Chef"]
[H2: "AnnaMarie Marquet" — stacked across 2 lines]
[Body: 3–4 sentences, personal tone]
[CTA: "About Us" button]
[Right: Portrait + food detail photos in 3-up grid]
```

### Pattern: Testimonial Block
```
[Eyebrow: "MEET THE Clients WE'VE SERVED"]
[Horizontal scrolling cards]
  → Card: Name + Location + Bolded headline quote + Body quote
```

### Pattern: Full-Bleed CTA (Footer)
```
[Dark background section]
[Large stacked display text: "LET'S CREATE YOUR GATHERING"]
[CTA Button: "Schedule a Call" → Calendly]
[Below: Inline contact form]
```

### Pattern: FAQ Accordion
```
[H2: "Clarify Your Doubts"]
[Stacked accordion items]
  → [Question text] [Chevron icon]
    → [Expanded: Answer paragraph]
```

### Common Page Structure
```
Nav
Hero (full-bleed image + headline)
  ↓
Services/Menu overview (text + image rows)
  ↓
Featured content (chef, testimonials)
  ↓
CTA Section (dark, full-bleed)
  ↓
Footer (nav + social + contact)
```

---

## 14. Known Gaps / Limitations

### Not Covered (Requires CSS/DevTools Inspection)
- **Exact font names**: Display and body fonts inferred visually; confirm via DevTools or Webflow project
- **Exact hex values**: Colors estimated from visual analysis — extract true values from CSS variables or Webflow swatches
- **Animation specs**: Logo split animation timing, easing curves, and stagger delays not documented (requires JS/CSS inspection)
- **Breakpoint exact values**: Webflow default breakpoints used as basis; confirm in project settings
- **Icon set**: Specific icon library (Phosphor, Feather, custom SVG?) not confirmed

### Areas Needing Future Work
- **Dark mode**: Not implemented; a dark-mode token layer should be defined if ever required
- **Motion/Animation design system**: No formal animation tokens (duration, easing) documented
- **Loading / skeleton states**: Not observed — should be defined for any future dynamic content
- **Error page design** (404, 500): Not analyzed
- **Print styles**: Not defined
- **Email template design**: Likely needed for booking confirmations; not covered
- **CMS content model**: Menu items appear static; a headless CMS token model for content editors is not documented

---

*Analysis based on visual and markup inspection of marquet.nyc homepage, menu page, and navigation structure. Last analyzed: April 2026.*