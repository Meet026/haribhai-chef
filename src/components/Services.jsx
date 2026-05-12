import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    id: "catering",
    title: "Catering",
    desc: "From intimate family gatherings to grand wedding receptions — we craft an authentic Gujarati feast your guests will cherish for years.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    // Warm parchment card
    cardBg: "var(--color-cream)",
    btnBg: "var(--color-ivory)",
    btnColor: "var(--color-dark-brown)",
  },
  {
    id: "displays",
    title: "Displays",
    desc: "Elegant live stations and curated food displays that turn every spread into a visual and culinary experience worth remembering.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    // Slightly richer tone — center card stands out
    cardBg: "var(--color-warm-tan)",
    btnBg: "var(--color-ivory)",
    btnColor: "var(--color-dark-brown)",
  },
  {
    id: "waiters",
    title: "Waiters",
    desc: "Trained, courteous service staff who understand the rhythm of an event and ensure every guest feels looked after from the first course to the last.",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    // Warm tan, matching the third variation
    cardBg: "var(--color-cream)",
    btnBg: "var(--color-ivory)",
    btnColor: "var(--color-dark-brown)",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const eyebrowRef = useRef(null);
  const cardsRef = useRef([]);

  // Stable device snapshot
  const device = useRef(null);
  if (!device.current) {
    const W = window.innerWidth;
    device.current = { isMobile: W < 768, isTablet: W >= 768 && W < 1024 };
  }
  const { isMobile } = device.current;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header stagger
      gsap.fromTo(
        [eyebrowRef.current, headingRef.current, subRef.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.14,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Cards stagger
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        background: "var(--surface-primary)",
        padding: isMobile ? "64px 20px 72px" : "100px 48px 112px",
        position: "relative",
        overflow: "hidden",
      }}>
      {/* Subtle grain texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
          opacity: 0.025,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
        {/* ── Section Header ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "48px" : "72px",
          }}>
          <p
            ref={eyebrowRef}
            className="eyebrow"
            style={{
              color: "var(--text-muted)",
              marginBottom: "16px",
              opacity: 0,
            }}>
            What We Offer
          </p>
          <h2
            ref={headingRef}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5.5vw, 5rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--text-heading)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: "0 auto 20px",
              opacity: 0,
            }}>
            Events We Cater
          </h2>
          <p
            ref={subRef}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.82rem, 1.1vw, 0.95rem)",
              color: "var(--text-muted)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.85,
              fontWeight: 300,
              opacity: 0,
            }}>
            Whether you're planning an intimate gathering or a grand
            celebration, we tailor our services to meet the unique needs of each
            occasion.
          </p>
        </div>

        {/* ── Service Cards Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? "20px" : "24px",
          }}>
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              isMobile={isMobile}
              ref={(el) => (cardsRef.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ServiceCard = React.forwardRef(function ServiceCard(
  { service, isMobile },
  ref,
) {
  const imgRef = useRef(null);

  const handleMouseEnter = () => {
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        scale: 1.07,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      gsap.to(imgRef.current, { scale: 1, duration: 0.8, ease: "power2.out" });
    }
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        background: service.cardBg,
        borderRadius: "20px",
        padding: isMobile ? "28px 20px 36px" : "36px 28px 44px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
        opacity: 0,
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        // Subtle inner shadow for depth
        boxShadow:
          "inset 0 -1px 0 rgba(0,0,0,0.06), var(--shadow-subtle)",
        transition:
          "transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease",
      }}
      onMouseEnter={(e) => {
        handleMouseEnter();
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow =
          "inset 0 -1px 0 rgba(0,0,0,0.06), var(--shadow-overlay)";
      }}
      onMouseLeave={(e) => {
        handleMouseLeave();
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "inset 0 -1px 0 rgba(0,0,0,0.06), var(--shadow-subtle)";
      }}>
      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: isMobile ? "2rem" : "clamp(1.8rem, 2.8vw, 2.4rem)",
          fontWeight: 400,
          fontStyle: "italic",
          color: "var(--color-dark-brown)",
          margin: 0,
          letterSpacing: "-0.01em",
          lineHeight: 1.1,
          textAlign: "center",
        }}>
        {service.title}
      </h3>

      {/* Arch image */}
      <div
        style={{
          width: "100%",
          position: "relative",
          // Arch shape: flat bottom, rounded arch top
          borderRadius: "100px 100px 0 0",
          overflow: "hidden",
          aspectRatio: "4 / 4.5",
          background: "rgba(0,0,0,0.08)",
        }}>
        <img
          ref={imgRef}
          src={service.img}
          alt={service.title}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            willChange: "transform",
          }}
        />

        {/* Subtle gradient overlay on image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, transparent 40%, rgba(0,0,0,0.18) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Learn More oval button — overlaps image bottom */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
          }}>
          <Link
            to={`/services/${service.id}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "11px 28px",
              borderRadius: "999px",
              background: service.btnBg,
              color: service.btnColor,
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 16px rgba(0,0,0,0.14)",
              border: "1px solid rgba(255,255,255,0.6)",
              transition:
                "background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-charcoal)";
              e.currentTarget.style.color = "var(--color-ivory)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = service.btnBg;
              e.currentTarget.style.color = service.btnColor;
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.14)";
            }}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.97)")
            }
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}>
            Learn More
          </Link>
        </div>
      </div>

      {/* Description below image */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.85rem",
          lineHeight: 1.75,
          color: "var(--text-muted)",
          textAlign: "center",
          fontWeight: 300,
          margin: 0,
          padding: "0 4px",
        }}>
        {service.desc}
      </p>
    </div>
  );
});
