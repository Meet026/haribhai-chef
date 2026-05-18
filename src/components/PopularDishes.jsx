import React, { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import "./PopularDishes.css";

gsap.registerPlugin(ScrollTrigger);

const ALL_DISHES = [
  {
    id: 1,
    name: "Khaman",
    description:
      "Soft and fluffy steamed gram flour cakes, tempered with mustard seeds and curry leaves.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/SPECIAL_SURATI_KHAMAN.jpg/960px-SPECIAL_SURATI_KHAMAN.jpg",
  },
  {
    id: 2,
    name: "Dhokla",
    description:
      "A classic Gujarati snack made from fermented rice and chickpea batter.",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/65/Dhokla_on_Gujrart.jpg",
  },
  {
    id: 3,
    name: "Khandvi",
    description:
      "Delicate rolls made from gram flour and yogurt, perfectly seasoned.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Khandvi_%2810497367994%29.jpg/960px-Khandvi_%2810497367994%29.jpg",
  },
  {
    id: 4,
    name: "Undhiyu",
    description:
      "A mixed vegetable dish that is a hallmark of Gujarati winter cuisine.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Undhiyu.jpg/960px-Undhiyu.jpg",
  },
  {
    id: 5,
    name: "Jalebi",
    description:
      "Crispy, syrup-filled swirls that are the perfect sweet treat.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Basavanagudi_Kadalekai_Parishe_%282025%29_Bangalore_%2886%29.jpg/960px-Basavanagudi_Kadalekai_Parishe_%282025%29_Bangalore_%2886%29.jpg",
  },
  {
    id: 6,
    name: "Fafda",
    description: "Crunchy gram flour snack, traditionally served with Jalebi.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Namak_paray_made_at_home.jpg/960px-Namak_paray_made_at_home.jpg",
  },
  {
    id: 7,
    name: "Locho",
    description:
      "A surati specialty made from steamed gram flour with a unique texture.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Locho_-_Gujarati_Snack_-_Surat.jpg/960px-Locho_-_Gujarati_Snack_-_Surat.jpg",
  },
  {
    id: 8,
    name: "Handvo",
    description:
      "A savory vegetable cake made from a batter of lentils and rice.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Handavo3.jpg/960px-Handavo3.jpg",
  },
  {
    id: 9,
    name: "Thepla",
    description: "Healthy and delicious flatbreads made with fenugreek leaves.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Thepla_main.jpg/960px-Thepla_main.jpg",
  },
  {
    id: 10,
    name: "Basundi",
    description: "Sweet thickened milk flavored with cardamom and nutmeg.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/48/Basundi_in_Maharashtrian_style.jpg",
  },
];

const GAP = 32;

// Compute card width matching the CSS clamp() formula so marquee duration is accurate.
// Called once at mount — never on resize (avoids restarting the CSS animation).
function getFluidCardW() {
  if (typeof window === "undefined") return 340;
  const vw = window.innerWidth;
  return Math.min(340, Math.max(280, Math.round(100 + 0.2344 * vw)));
}

export default function PopularDishes() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);
  const eyebrowRef = useRef(null);

  // true  → mobile  (<768px): static 3-card list, no animation
  // false → tablet/desktop: marquee animation
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768,
  );


  useEffect(() => {
    const mqMobile = window.matchMedia("(max-width: 767px)");
    const onMobile = (e) => setIsMobile(e.matches);
    mqMobile.addEventListener("change", onMobile);
    return () => mqMobile.removeEventListener("change", onMobile);
  }, []);

  // Header scroll-reveal (all screen sizes)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        [eyebrowRef.current, headRef.current, subRef.current, btnRef.current],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  // Compute duration once — CSS clamp() handles visual sizing, this just drives speed.
  const duration = useMemo(
    () => (ALL_DISHES.length * (getFluidCardW() + GAP)) / 45,
    [],
  );

  return (
    <section
      ref={sectionRef}
      id="popular-dishes"
      className="popular-section-wrap"
      style={{
        background: "var(--surface-primary)",
        position: "relative",
        overflow: "hidden",
        padding: "120px 0 100px",
      }}>
      {/* SVG clip-path definition (used by all DishCards) */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="barrelClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.06,0.03 Q 0.5,-0.01 0.94,0.03 C 0.955,0.031 0.969,0.045 0.97,0.06 Q 1.01,0.5 0.97,0.94 C 0.969,0.955 0.955,0.969 0.94,0.97 Q 0.5,1.01 0.06,0.97 C 0.045,0.969 0.031,0.955 0.03,0.94 Q -0.01,0.5 0.03,0.06 C 0.031,0.045 0.045,0.031 0.06,0.03 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Header */}
      <div
        className="popular-header"
        style={{
          textAlign: "center",
          paddingBottom: "80px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}>
        <p
          ref={eyebrowRef}
          className="eyebrow"
          style={{ color: "var(--text-muted)", marginBottom: "20px", opacity: 0 }}>
          From Our Kitchen
        </p>
        <h2
          ref={headRef}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 5.5vw, 5.5rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "var(--text-heading)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            margin: "0 auto",
            opacity: 0,
          }}>
          Most Popular Dishes
        </h2>
        <p
          ref={subRef}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
            color: "var(--text-muted)",
            maxWidth: "460px",
            margin: "20px auto 0",
            lineHeight: 1.8,
            fontWeight: 300,
            opacity: 0,
          }}>
          Our menu is a celebration of tradition and authenticity, crafted to
          evoke the comforting flavours of home with a refined Gujarati touch.
        </p>
      </div>

      {/* ── Mobile: static 3-card vertical list ── */}
      {isMobile ? (
        <div className="dishes-static-grid">
          {ALL_DISHES.slice(0, 3).map((dish) => (
            <StaticDishCard key={dish.id} dish={dish} />
          ))}
        </div>
      ) : (
        /* ── Tablet / Desktop: marquee ── */
        <div
          className="marquee-container"
          style={{
            overflow: "visible",
            width: "100%",
            paddingTop: "20px",
            marginTop: "-20px",
            paddingBottom: "20px",
          }}
>
          <div
            className="marquee-track"
            style={{
              display: "flex",
              gap: `${GAP}px`,
              width: "max-content",
              animation: `marqueeLeft ${duration}s linear infinite`,
              animationPlayState: "running",
            }}>
            {[...ALL_DISHES, ...ALL_DISHES, ...ALL_DISHES].map((dish, i) => (
              <MarqueeDishCard key={`dish-${i}`} dish={dish} />
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div
        ref={btnRef}
        className="popular-cta"
        style={{ marginTop: "100px", textAlign: "center", opacity: 0 }}>
        <Link
          to="/menu"
          id="explore-menu-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "16px 48px",
            borderRadius: "var(--radius-sm)",
            background: "var(--color-charcoal)",
            color: "var(--color-ivory)",
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            border: "1px solid var(--color-charcoal)",
            transition:
              "background 0.3s ease, border-color 0.3s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--color-muted-gold)";
            e.currentTarget.style.borderColor = "var(--color-muted-gold)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--color-charcoal)";
            e.currentTarget.style.borderColor = "var(--color-charcoal)";
          }}
          onMouseDown={(e) =>
            (e.currentTarget.style.transform = "translateY(1px)")
          }
          onMouseUp={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }>
          Explore Menu
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

/* Marquee card — CSS clamp() controls size, GSAP handles hover image scale */
function MarqueeDishCard({ dish }) {
  return (
    <div className="marquee-card">
      <div className="marquee-card-img">
        <img
          src={dish.img}
          alt={dish.name}
          loading="lazy"
          draggable={false}
        />
      </div>
      <DishText dish={dish} nameSize="clamp(1.35rem, 0.9rem + 0.45vw, 1.6rem)" />
    </div>
  );
}

/* Static card — full width, no animation, for mobile */
function StaticDishCard({ dish }) {
  return (
    <div className="dish-card-static">
      <div className="dish-card-static-img">
        <img src={dish.img} alt={dish.name} loading="lazy" draggable={false} />
      </div>
      <DishText dish={dish} nameSize="1.4rem" />
    </div>
  );
}

/* Shared text block */
function DishText({ dish, nameSize }) {
  return (
    <div style={{ padding: "0 20px" }}>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: nameSize,
          fontWeight: 400,
          fontStyle: "italic",
          color: "var(--text-heading)",
          margin: "0 0 12px 0",
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
        }}>
        {dish.name}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.9rem",
          color: "var(--text-muted)",
          lineHeight: 1.6,
          fontWeight: 300,
          margin: 0,
          maxWidth: "280px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
        {dish.description}
      </p>
    </div>
  );
}
