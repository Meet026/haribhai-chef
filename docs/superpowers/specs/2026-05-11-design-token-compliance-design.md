# Design Token Compliance Update — Haribhai Rasoiya

**Date:** 2026-05-11  
**Scope:** `Services.jsx`, `Contact.jsx`  
**Approach:** Option A — Inline token replacement (replace hardcoded values with CSS variables)

---

## Goal

Replace all hardcoded hex/rgba color values in components with the CSS design tokens already defined in `index.css`, so every color, shadow, and text tone references a single source of truth. Layout, shapes, and structure remain unchanged.

---

## Audit Summary

| Component     | Status                   | Action         |
|---------------|--------------------------|----------------|
| `index.css`   | Fully compliant          | No changes     |
| `Hero.jsx`    | Fully compliant          | No changes     |
| `About.jsx`   | Fully compliant          | No changes     |
| `Navbar.jsx`  | Fully compliant          | No changes     |
| `Contact.jsx` | ~90% — one rgba to token | Minor fix      |
| `Services.jsx`| Multiple violations      | Primary target |

---

## Changes — `Services.jsx`

### Card backgrounds (`SERVICES` array `cardBg` field)
| Current value | New value | Reason |
|---|---|---|
| `"#D6C9B0"` | `"var(--color-cream)"` | Closest warm-light surface token |
| `"#C4B49C"` | `"var(--color-warm-tan)"` | Near-identical (`#C4B49C` vs `#C8B89A`) |

### Button inside card (`btnBg` / `btnColor` fields)
| Current value | New value | Reason |
|---|---|---|
| `"#FAF7F2"` | `"var(--color-ivory)"` | Exact match |
| `"#2A2218"` | `"var(--color-dark-brown)"` | Exact match |

### Description text color (in `ServiceCard`)
| Current value | New value | Reason |
|---|---|---|
| `"rgba(42,34,24,0.65)"` | `"var(--text-muted)"` | design.md muted text token `#7A7060` |

### Card shadows (in `ServiceCard`)
| Location | Current value | New value |
|---|---|---|
| Default `boxShadow` (inline + `style` prop) | `"inset 0 -1px 0 rgba(0,0,0,0.06), 0 4px 24px rgba(0,0,0,0.06)"` | `"inset 0 -1px 0 rgba(0,0,0,0.06), var(--shadow-subtle)"` |
| Hover `boxShadow` (in `onMouseEnter`) | `"inset 0 -1px 0 rgba(0,0,0,0.06), 0 16px 48px rgba(0,0,0,0.12)"` | `"inset 0 -1px 0 rgba(0,0,0,0.06), var(--shadow-overlay)"` |

---

## Changes — `Contact.jsx`

### Input/textarea bottom border color
| Current value | New value | Reason |
|---|---|---|
| `"rgba(200,184,154,0.25)"` | `"var(--border-subtle)"` | Token is `rgba(200,184,154,0.3)` — near-identical |

This applies to: initial `borderBottom` style, and the `onBlur` handler restoring border color (3 occurrences total across the 3 text fields + textarea).

---

## What Is NOT Changing

- Card shape (rounded corners at 20px)
- Arch image shape in service cards
- "Learn More" button shape
- All layout, spacing, grid, and structure
- Opacity-based rgba variants used intentionally on the dark Contact section (e.g. ivory at 30%/45%/50% for layered text hierarchy — these are not replaceable with tokens without `color-mix()`)
- Hero.jsx ambient glow/overlay rgba values (intentional atmospheric effects)

---

## Success Criteria

1. No hardcoded color hex values remain in `Services.jsx` or `Contact.jsx`
2. All card backgrounds, text colors, and shadows reference CSS variables
3. Visual appearance is unchanged or improved by aligning with the design token palette
4. No layout or structural changes
