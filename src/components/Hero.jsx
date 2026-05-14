import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const frameRef = useRef(null);
  const imgRef = useRef(null);
  const textGroupRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const curtainRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const stickyEl = stickyRef.current;
    const frameEl = frameRef.current;

    // ── 1. INITIAL STATE ──────────────────────────────────────
    gsap.set(curtainRef.current, { xPercent: 0 });
    gsap.set(frameEl, { opacity: 0, scale: 0.95 });
    gsap.set(textGroupRef.current, { opacity: 0 });
    gsap.set(titleRef.current, { y: 20 });
    gsap.set(taglineRef.current, { opacity: 0, y: 10 });

    // ── 2. INTRO SEQUENCE ─────────────────────────────────────
    const introTl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    introTl
      .to(curtainRef.current, {
        xPercent: 100,
        duration: 1,
        ease: "expo.inOut",
        delay: 0.2,
      })
      .to(frameEl, { opacity: 1, scale: 1, duration: 0.8 }, "-=0.6")
      .to(textGroupRef.current, { opacity: 1, duration: 0.6 }, "-=0.4")
      .to(titleRef.current, { y: 0, duration: 0.6 }, "-=0.6")
      .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.4");

    // ── 3. FLOAT ANIMATION ────────────────────────────────────
    const floatAnim = gsap.to([frameEl, textGroupRef.current], {
      y: -6,
      duration: 2.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.05,
      paused: true,
    });

    introTl.add(() => floatAnim.play());

    // ── 4. SCROLL TIMELINE ────────────────────────────────────
    // Re-creatable so resize can refresh dimensions without visual drift.
    let scrollTl = null;

    const setupScrollAnim = () => {
      if (scrollTl) scrollTl.kill(); // also kills scrollTl.scrollTrigger in GSAP 3

      // Reset any inline size GSAP may have set, then read CSS-computed size.
      gsap.set(frameEl, { clearProps: "width,height" });

      // rAF ensures the browser has painted the CSS size before we measure.
      requestAnimationFrame(() => {
        const { width: fw, height: fh } = frameEl.getBoundingClientRect();
        // Lock dimensions so CSS aspect-ratio can't fight GSAP mid-tween.
        gsap.set(frameEl, { width: fw, height: fh });

        // Use sticky container dimensions — matches 100dvh exactly.
        const targetW = stickyEl.clientWidth;
        const targetH = stickyEl.clientHeight;

        scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
              if (self.progress > 0.001 && floatAnim.isActive()) {
                floatAnim.pause();
                gsap.to([frameEl, textGroupRef.current], {
                  y: 0,
                  duration: 0.2,
                  ease: "power1.out",
                });
              } else if (self.progress <= 0.001 && !floatAnim.isActive()) {
                floatAnim.play();
              }
            },
          },
        });

        scrollTl
          .to(
            titleRef.current,
            { opacity: 0, y: -100, duration: 0.15, ease: "none" },
            0,
          )
          .to(
            taglineRef.current,
            { opacity: 0, y: 60, duration: 0.15, ease: "none" },
            0,
          )
          .to(
            frameEl,
            {
              width: targetW,
              height: targetH,
              borderRadius: 0,
              duration: 0.6,
              ease: "none",
            },
            0.1,
          )
          .to(imgRef.current, { scale: 1.2, duration: 0.6, ease: "none" }, 0.1);
      });
    };

    setupScrollAnim();

    // Refresh after intro so ScrollTrigger recalculates with final positions.
    introTl.add(() => { ScrollTrigger.refresh(); });

    // Skip intro if user arrives mid-scroll.
    const skipIntroOnScroll = () => {
      if (window.scrollY > 10) {
        introTl.progress(1);
        window.removeEventListener("scroll", skipIntroOnScroll);
      }
    };
    window.addEventListener("scroll", skipIntroOnScroll);

    // Debounced resize: re-snapshot frame and rebuild scroll animation.
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setupScrollAnim, 150);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      introTl.kill();
      if (scrollTl) scrollTl.kill();
      floatAnim.kill();
      clearTimeout(resizeTimer);
      window.removeEventListener("scroll", skipIntroOnScroll);
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="hero-section">
      <div ref={stickyRef} className="hero-sticky-container">
        <div className="hero-ambient-glow" />
        <div ref={curtainRef} className="hero-curtain" />

        <div ref={frameRef} className="hero-frame">
          <img ref={imgRef} src="/Hero_Photo.png" alt="Haribhai Rasoiya" />
          <div className="hero-frame-overlay" />
        </div>

        <div ref={textGroupRef} className="hero-text-group">
          <div className="hero-title-wrapper">
            <h1 ref={titleRef} className="hero-title">
              હરિભાઈ રસોયા
            </h1>
          </div>

          <div ref={taglineRef} className="hero-tagline-container">
            <svg viewBox="0 0 600 120" className="hero-tagline-svg">
              <path id="curve-path" fill="none" d="M 50,20 Q 300,100 550,20" />
              <text className="hero-tagline-text">
                <textPath
                  xlinkHref="#curve-path"
                  startOffset="50%"
                  textAnchor="middle">
                  Authentic Gujarati Catering · Since 2010
                </textPath>
              </text>
            </svg>
          </div>
        </div>

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
    <div className="hero-particles">
      {items.map((p) => (
        <div
          key={p.id}
          className="hero-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animation: `particleFloat ${p.duration}s ${p.delay}s infinite ease-in-out alternate`,
          }}
        />
      ))}
    </div>
  );
}
