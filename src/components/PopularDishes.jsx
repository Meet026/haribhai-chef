import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

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

const CARD_W = 340;
const CARD_H = 390;
const GAP = 32;

export default function PopularDishes() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);
  const eyebrowRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

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

  const totalWidth = ALL_DISHES.length * (CARD_W + GAP);
  const speed = 45;
  const duration = totalWidth / speed;

  return (
    <section
      ref={sectionRef}
      id="popular-dishes"
      style={{
        background: "var(--surface-primary)",
        position: "relative",
        overflow: "hidden",
        padding: "120px 0 100px",
      }}>
      {/* SVG Mask Definition */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="barrelClip" clipPathUnits="objectBoundingBox">
            {/* Precision Squircle: 1% inset to prevent hover clipping + crisp corners */}
            <path
              d="M 0.06,0.03 
                     Q 0.5,-0.01 0.94,0.03 
                     C 0.955,0.031 0.969,0.045 0.97,0.06 
                     Q 1.01,0.5 0.97,0.94 
                     C 0.969,0.955 0.955,0.969 0.94,0.97 
                     Q 0.5,1.01 0.06,0.97 
                     C 0.045,0.969 0.031,0.955 0.03,0.94 
                     Q -0.01,0.5 0.03,0.06 
                     C 0.031,0.045 0.045,0.031 0.06,0.03 Z"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Header */}
      <div
        style={{
          textAlign: "center",
          paddingBottom: "80px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}>
        <p
          ref={eyebrowRef}
          className="eyebrow"
          style={{
            color: "var(--text-muted)",
            marginBottom: "20px",
            opacity: 0,
          }}>
          From Our Kitchen
        </p>
        <h2
          ref={headRef}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.6rem, 5.5vw, 5.5rem)",
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
            fontSize: "clamp(0.88rem, 1.2vw, 1rem)",
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

      {/* Single Marquee Row */}
      <div
        className="marquee-container"
        style={{
          overflow: "visible",
          width: "100%",
          paddingTop: "20px", // Provide space for hover translation
          marginTop: "-20px", // Offset padding to prevent layout shift
          paddingBottom: "20px",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}>
        <div
          className="marquee-track"
          style={{
            display: "flex",
            gap: `${GAP}px`,
            width: "max-content",
            animation: `marqueeLeft ${duration}s linear infinite`,
            animationPlayState: isPaused ? "paused" : "running",
          }}>
          {[...ALL_DISHES, ...ALL_DISHES, ...ALL_DISHES].map((dish, i) => (
            <DishCard key={`dish-${i}`} dish={dish} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        ref={btnRef}
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

function DishCard({ dish }) {
  const imgRef = useRef(null);

  return (
    <div
      style={{
        flexShrink: 0,
        width: `${CARD_W}px`,
        textAlign: "center",
        cursor: "pointer",
        userSelect: "none",
        transition: "transform 0.4s cubic-bezier(0.2, 0, 0.2, 1)",
      }}
      onMouseEnter={(e) => {
        gsap.to(imgRef.current, {
          scale: 1.1,
          duration: 0.8,
          ease: "power2.out",
        });
        e.currentTarget.style.transform = "translateY(-10px)";
      }}
      onMouseLeave={(e) => {
        gsap.to(imgRef.current, {
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        });
        e.currentTarget.style.transform = "translateY(0)";
      }}>
      <div
        style={{
          width: "100%",
          height: `${CARD_H}px`,
          position: "relative",
          marginBottom: "32px",
          clipPath: "url(#barrelClip)",
          WebkitClipPath: "url(#barrelClip)",
          background: "var(--surface-section)",
          transform: "translateZ(0)",
        }}>
        <img
          ref={imgRef}
          src={dish.img}
          alt={dish.name}
          loading="lazy"
          draggable={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            willChange: "transform",
            transition: "transform 0.8s cubic-bezier(0.2, 0, 0.2, 1)",
          }}
        />
      </div>

      <div style={{ padding: "0 20px" }}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.6rem",
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
    </div>
  );
}
