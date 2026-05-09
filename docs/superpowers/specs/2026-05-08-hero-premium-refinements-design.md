# Hero Section — Premium Refinements Design

**Date:** 2026-05-08  
**File:** `src/components/Hero.jsx`  
**Status:** Approved

---

## Problem Statement

Two compounding issues prevent the hero from feeling luxury-grade:

1. **Text not premium** — The brand name floats over the oval with no framing. Just a large italic serif with nothing contextualising it. No hierarchy, no visual full stop.

2. **Scroll animation feels broken** — `scrub: 0.1` + phases starting at 15% progress means the user can scroll significantly before anything moves. Every transition uses `ease: "none"` making it linear and mechanical. Doesn't match the "luxury clockwork" spec.

---

## Design Decisions (from brainstorming)

| Decision | Choice | Rationale |
|---|---|---|
| Text position | Over the oval (layered) | Cinematic, disappears on scroll |
| Text treatment | Eyebrow + name + gold dot | English eyebrow gives context, dot closes composition |
| Scroll personality | Overlapping phases from pixel 0, scrub 2s | Cinematic slow-motion, never snappy |

---

## Section 1: Text Treatment

The centered text group layered over the oval gets a three-part composition:

```
HARIBHAI RASOIYA          ← eyebrow: Jost, 10px, 0.28em spacing, warm-tan (#C8B89A), uppercase
                          ← 8px gap
હરિભાઈ રસોયા              ← h1: Playfair Display, italic, 300 weight, clamp(4.5rem,11vw,12rem), ivory
                          ← 10px gap
     •                    ← gold dot: 5px circle, rgba(200,184,154,0.6), centered
```

- Eyebrow and gold dot are new elements; they animate out with the title as a unit
- `textGroupRef` wraps all three
- `titleRef` wraps only the h1 (used in clip-path animation — scope unchanged)
- Add `eyebrowRef` and `dotRef` as separate refs for independent fade control if needed, but animating the whole `textGroupRef` as a unit is sufficient

---

## Section 2: Scroll Timeline

### Configuration
- `scrub: 2` (was `0.1`) — 2-second lag, luxury clockwork
- `start: "top top"`, `end: "bottom bottom"` — unchanged, spans 500vh
- Section height: 500vh — unchanged

### Phase Timeline

All values are fractional progress (0.0 = top, 1.0 = bottom of 500vh):

| Phase | Elements | Start | End | Easing |
|---|---|---|---|---|
| Text fade | `textGroupRef` opacity 1→0, y 0→−20px | 0.00 | 0.28 | `power2.inOut` |
| Oval expand (step 1) | frame: 36vw→75vw, 76vh→85vh, radius 1000px→40px | 0.18 | 0.52 | `power2.inOut` |
| Image zoom | `imgRef` scale 1.0→1.3 | 0.00 | 1.00 | `power1.inOut` |
| Oval expand (step 2 — immersive) | frame: 75vw→96vw, 85vh→94vh, radius 40px→20px | 0.45 | 0.75 | `power2.inOut` |
| Oval expand (step 3 — fullscreen) | frame: 96vw→100vw, 94vh→100vh, radius 20px→0 | 0.72 | 1.00 | `power1.inOut` |

Key overlaps:
- Text (0.00–0.28) and oval step 1 (0.18–0.52) **overlap by 0.10** — oval begins growing while text is mid-fade
- Oval step 2 (0.45–0.75) begins while step 1 is still finishing
- Image zoom runs the full duration (very subtle pull-through from pixel 0)

### Kill float on scroll
Change threshold from `scrollY > 20` to `scrollY > 10` so the float dies immediately when scroll begins.

---

## Section 3: Float & Ambient Refinements

| Property | Old | New |
|---|---|---|
| Float amplitude (y) | ±10px | ±6px |
| Float duration | 3s | 4s |
| Ambient glow opacity | 0.06 | 0.09 |
| Float kill threshold | scrollY > 20 | scrollY > 10 |

Particles: no change (12 particles, warm-tan, 0.12 opacity, 10–20s cycle).

---

## Implementation Scope

**Single file change:** `src/components/Hero.jsx`

Changes:
1. Add eyebrow `<div>` and gold dot `<div>` inside `textGroupRef`
2. Rewrite GSAP ScrollTrigger timeline with new offsets, easing, and scrub value
3. Update float animation (amplitude + duration)
4. Update scroll kill threshold

No new dependencies. No new files. No CSS changes required.

---

## Non-Goals

- No changes to the curtain animation (phase 1 entry sequence)
- No changes to particles
- No Lenis integration (ScrollTrigger scrub:2 is sufficient)
- No responsive breakpoint changes
- No changes to any other component
