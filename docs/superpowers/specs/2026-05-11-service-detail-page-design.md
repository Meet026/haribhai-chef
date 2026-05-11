# Service Detail Page — Haribhai Rasoiya

**Date:** 2026-05-11  
**Feature:** Per-service detail page, accessible from "Learn More" on service cards  
**Approach:** Option A — `serviceData.js` + single dynamic `ServiceDetail.jsx` page

---

## Goal

When a user clicks "Learn More" on a service card (Catering, Displays, Waiters), they are navigated to a dedicated detail page at `/services/:id`. The page presents the service in depth: a large title, hero image, intro paragraph, a feature list, and a "Book Reservation" CTA that scrolls back to the contact form on the home page.

---

## New Files

### `src/data/serviceData.js`
Exports an array of service objects. Each object has:

```js
{
  id: string,           // matches the id in Services.jsx SERVICES array
  title: string,        // display name
  tagline: string,      // short italic sub-heading
  img: string,          // Unsplash image URL
  intro: string,        // 2-3 sentence intro paragraph
  featuresHeading: string, // e.g. "What You Get from Our Catering Services:"
  features: [
    { title: string, desc: string },  // 5 items per service
  ]
}
```

Services: `catering`, `displays`, `waiters`

### `src/pages/ServiceDetail.jsx`
Page component. Uses `useParams()` to get `:id`, looks it up in `serviceData`, and renders the page. Includes a "not found" fallback.

---

## Modified Files

### `src/App.jsx`
- Add import for `ServiceDetail`
- Add route: `<Route path="/services/:id" element={<ServiceDetail />} />`
- `NavbarWithCondition`: Navbar is shown on service detail pages (same transparent-on-hero logic as home page — but since service pages have a cream background, nav will render in light mode automatically)

### `src/components/Services.jsx`
- Change the "Learn More" `<a href="#contact">` button inside `ServiceCard` to `<Link to={`/services/${service.id}`}>` using React Router `Link`

---

## Page Layout — `ServiceDetail.jsx`

```
<section style="background: var(--surface-primary); padding: var(--space-32) 0 var(--space-24)">
  <div style="max-width: 900px; margin: 0 auto; padding: 0 var(--space-8)">

    [eyebrow — e.g. "Services" — uppercase, tracked, var(--text-muted)]
    [H1 — service.title — large serif display, centered, var(--text-heading)]
    [tagline — italic, var(--text-muted), centered, marginBottom: space-16]

    [Hero image — border-radius: 24px, width: 100%, max-height: 500px, object-fit: cover]

    [Intro paragraph — centered, max-width: 680px, margin: space-12 auto, var(--text-muted), font-weight: 300]

    [Divider — hr.divider]

    [featuresHeading — H2, serif, left-aligned, var(--text-heading), margin-top: space-16]

    [Feature list — each item stacked with margin-bottom: space-8]
      → H3 heading — serif, var(--text-heading)
      → p — var(--text-muted), font-weight: 300, line-height: 1.85

    [Divider — hr.divider]

    [CTA area — centered, margin-top: space-12]
      → "Book Reservation" button — <a href="/#contact" className="btn-secondary">
```

---

## Navigation

- "Learn More" in service cards: `<Link to="/services/catering">` (etc.)
- "Book Reservation" CTA: `<a href="/#contact">` — navigates to home and scrolls to contact
- Navbar back-navigation: users can use the logo link (already links to `/`) to return home

---

## Not-Found Fallback

If `:id` doesn't match any service in `serviceData`, render:
```
<div style="padding: 120px 48px; text-align: center">
  <p className="eyebrow">Services</p>
  <h2>Service not found</h2>
  <Link to="/" className="btn-secondary" style="marginTop: space-8">← Back to Home</Link>
</div>
```

---

## Design Tokens Used

| Property | Token |
|---|---|
| Page background | `var(--surface-primary)` |
| Title color | `var(--text-heading)` |
| Body/muted text | `var(--text-muted)` |
| Image radius | `24px` (editorial exception — aligns with screenshot reference) |
| Dividers | `hr.divider` (existing CSS class) |
| CTA button | `.btn-secondary` (existing CSS class) |
| Section padding | `var(--space-32)` top, `var(--space-24)` bottom |

---

## Success Criteria

1. `/services/catering`, `/services/displays`, `/services/waiters` all render correctly
2. "Learn More" buttons in service cards navigate to the correct detail page
3. "Book Reservation" navigates to `/#contact`
4. Navbar is visible on service detail pages
5. Unknown `:id` shows the fallback without crashing
6. Page uses only design tokens — no hardcoded colors
