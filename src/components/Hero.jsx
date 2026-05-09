import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
 * ─────────────────────────────────────────────────────────────
 *  HARIBHAI RASOIYA — Cinematic Scroll Hero
 *  Dark background is intentional — full-bleed food image hero
 *  is the one acceptable dark surface per design.md (hero variant)
 *
 *  5 PHASES:
 *    Phase 1  0.00 → 0.15  Luxury intro (Oval + Centered Serif Text)
 *    Phase 2  0.15 → 0.35  Text vanishes
 *    Phase 3  0.35 → 0.60  Oval expands
 *    Phase 4  0.60 → 0.85  Immersive takeover
 *    Phase 5  0.85 → 1.00  Fullscreen reveal
 * ─────────────────────────────────────────────────────────────
 */

export default function Hero() {
  const [phase, setPhase] = useState(0);
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const imgRef = useRef(null);
  const textGroupRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const floatRef = useRef(null);

  // ── Entry curtain sequence ────────────────────────────────
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 200);
    const t2 = setTimeout(() => setPhase(2), 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // ── Gentle floating at rest ──────────────────────────────
  useEffect(() => {
    if (phase < 2 || !frameRef.current) return;
    floatRef.current = gsap.to([frameRef.current, textGroupRef.current], {
      y: -10,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.05,
    });
    return () => floatRef.current?.kill();
  }, [phase]);

  // ── GSAP ScrollTrigger timeline ───────────────────────────
  useEffect(() => {
    if (!sectionRef.current || !frameRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1,
      },
    });

    // Phase 2: text vanishes
    tl.to(
      titleRef.current,
      { clipPath: "inset(0 0 100% 0)", y: -30, duration: 0.2, ease: "none" },
      0.15,
    )
      .to(
        taglineRef.current,
        { opacity: 0, y: 20, duration: 0.15, ease: "none" },
        0.15,
      )

      // Phase 3: oval expands
      .to(
        frameRef.current,
        {
          width: "75vw",
          height: "85vh",
          borderRadius: "40px",
          duration: 0.25,
          ease: "none",
        },
        0.35,
      )
      .to(imgRef.current, { scale: 1.1, duration: 0.25, ease: "none" }, 0.35)

      // Phase 4: immersive
      .to(
        frameRef.current,
        {
          width: "96vw",
          height: "94vh",
          borderRadius: "20px",
          duration: 0.25,
          ease: "none",
        },
        0.6,
      )
      .to(imgRef.current, { scale: 1.18, duration: 0.25, ease: "none" }, 0.6)

      // Phase 5: fullscreen
      .to(
        frameRef.current,
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0px",
          duration: 0.15,
          ease: "none",
        },
        0.85,
      )
      .to(imgRef.current, { scale: 1.25, duration: 0.15, ease: "none" }, 0.85);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  // Kill float on scroll
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20 && floatRef.current) {
        floatRef.current.kill();
        floatRef.current = null;
        gsap.to([frameRef.current, textGroupRef.current], {
          y: 0,
          duration: 0.4,
        });
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "500vh",
        background: "var(--color-charcoal)",
      }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--color-charcoal)",
        }}>
        {/* Ambient glow — warm gold radial */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(181,154,114,0.06) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />

        {/* CURTAIN — warm tan per design.md */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--color-warm-tan)",
            zIndex: 20,
            transform: phase >= 1 ? "translateX(100%)" : "translateX(0)",
            transition:
              phase >= 1
                ? "transform 1.4s cubic-bezier(0.77,0,0.18,1)"
                : "none",
            pointerEvents: phase >= 2 ? "none" : "all",
          }}
        />

        {/* EXPANDING FRAME */}
        <div
          ref={frameRef}
          style={{
            position: "relative",
            width: "36vw",
            height: "76vh",
            borderRadius: "1000px",
            overflow: "hidden",
            zIndex: 5,
            willChange: "width, height, border-radius",
            boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
            opacity: phase >= 1 ? 1 : 0,
            transition: "opacity 0.8s ease 0.3s",
          }}>
          <img
            ref={imgRef}
            src="/Hero_Photo.png"
            alt="Haribhai Rasoiya — authentic Gujarati catering"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              willChange: "transform",
            }}
          />
          {/* Subtle gradient overlay inside frame */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(28,28,26,0.35) 0%, transparent 50%, rgba(28,28,26,0.35) 100%)",
            }}
          />
        </div>

        {/* CENTERED BRAND TEXT */}
        <div
          ref={textGroupRef}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pointerEvents: "none",
            opacity: phase >= 2 ? 1 : 0,
            transition: "opacity 0.8s ease-out 0.5s",
          }}>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <h1
              ref={titleRef}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(4.5rem, 11vw, 12rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--color-ivory)",
                lineHeight: 1,
                margin: 0,
                whiteSpace: "nowrap",
                filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))",
                willChange: "clip-path, transform",
                letterSpacing: "-0.02em",
              }}>
              હરિભાઈ રસોયા
            </h1>
          </div>

          {/* Curved tagline */}
          <div
            ref={taglineRef}
            style={{
              position: "absolute",
              top: "calc(50% + 34vh)",
              width: "600px",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              willChange: "opacity, transform",
            }}>
            <svg
              viewBox="0 0 600 200"
              style={{ width: "100%", height: "auto", overflow: "visible" }}>
              <path id="curve" fill="none" d="M 50,40 Q 300,140 550,40" />
              <text
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fill: "rgba(250,247,242,0.65)",
                }}>
                <textPath
                  xlinkHref="#curve"
                  startOffset="50%"
                  textAnchor="middle">
                  Authentic Gujarati Catering · Since 2010
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Ambient Particles — warm gold tones */}
        <Particles />
      </div>
    </section>
  );
}

function Particles() {
  const items = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
      }}>
      {items.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: "var(--color-warm-tan)",
            borderRadius: "50%",
            opacity: 0.12,
            animation: `particleFloat ${p.duration}s ${p.delay}s infinite ease-in-out alternate`,
          }}
        />
      ))}
    </div>
  );
}
