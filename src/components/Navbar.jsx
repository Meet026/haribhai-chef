import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Services", href: "services", type: "anchor" },
  { label: "Menu", href: "/menu", type: "route" },
  { label: "About Us", href: "about-us", type: "anchor" },
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const timer = setTimeout(() => setNavVisible(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (isHomePage) {
        const heroEl = document.querySelector(".hero-section");
        const threshold = heroEl ? heroEl.offsetHeight : window.innerHeight;
        setScrolledPastHero(window.scrollY >= threshold);
      } else {
        setScrolledPastHero(window.scrollY > 50);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname, isHomePage]);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onDark = (isHomePage && !scrolledPastHero) || mobileMenuOpen;
  const navColor = onDark ? "var(--color-ivory)" : "var(--color-charcoal)";
  const navBg = onDark ? "transparent" : "rgba(245, 240, 232, 0.85)";

  const anchorHref = (id) => (isHomePage ? `#${id}` : `/#${id}`);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        id="main-nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: isMobile ? "20px 24px" : "26px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: navColor,
          background: navBg,
          opacity: navVisible ? 1 : 0,
          transform: navVisible ? "translateY(0)" : "translateY(-24px)",
          backdropFilter: onDark ? "none" : "blur(10px)",
          WebkitBackdropFilter: onDark ? "none" : "blur(10px)",
          transition:
            "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1), background 0.3s ease, color 0.3s ease",
        }}>
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: isMobile ? "1rem" : "1.2rem",
            fontWeight: 400,
            letterSpacing: "0.04em",
            color: mobileMenuOpen ? "var(--color-ivory)" : navColor,
            textDecoration: "none",
            transition: "opacity 0.3s ease, color 0.3s ease",
            position: "relative",
            zIndex: 1001,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.65")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
          હરિભાઈ રસોયા
        </Link>

        {/* Desktop nav */}
        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: "36px" }}>
            {/* Services dropdown */}
            <div ref={dropdownRef} style={{ position: "relative" }}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                style={{
                  background: "none",
                  border: "none",
                  color: navColor,
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  transition: "opacity 0.3s ease",
                  padding: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.55")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                Services
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  style={{
                    transform: servicesOpen ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform 0.3s ease",
                  }}>
                  <line
                    x1="5"
                    y1="0"
                    x2="5"
                    y2="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="0"
                    y1="5"
                    x2="10"
                    y2="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>

              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 16px)",
                  left: "50%",
                  background: "rgba(28,28,26,0.92)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(200,184,154,0.15)",
                  borderRadius: "4px",
                  padding: "6px",
                  minWidth: "220px",
                  zIndex: 10,
                  opacity: servicesOpen ? 1 : 0,
                  pointerEvents: servicesOpen ? "all" : "none",
                  transform: servicesOpen
                    ? "translateX(-50%) translateY(0)"
                    : "translateX(-50%) translateY(-8px)",
                  transition: "opacity 0.28s ease, transform 0.28s ease",
                }}>
                {[
                  "Wedding Catering",
                  "Corporate Events",
                  "Birthday Celebrations",
                  "Pooja & Rituals",
                  "Social Gatherings",
                  "Large Format Events",
                ].map((s) => (
                  <a
                    key={s}
                    href={anchorHref("services")}
                    onClick={() => setServicesOpen(false)}
                    style={{
                      display: "block",
                      padding: "10px 16px",
                      color: "var(--color-ivory)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8rem",
                      fontWeight: 400,
                      letterSpacing: "0.06em",
                      textDecoration: "none",
                      borderRadius: "2px",
                      transition: "background 0.2s ease, color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(181,154,114,0.15)";
                      e.currentTarget.style.color = "var(--color-muted-gold)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "var(--color-ivory)";
                    }}>
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <Link
              to="/menu"
              style={{
                color: navColor,
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.5")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
              Menu
            </Link>

            <a
              href={anchorHref("about-us")}
              style={{
                color: navColor,
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.5")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
              About Us
            </a>

            <a
              href={anchorHref("contact")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 28px",
                borderRadius: "2px",
                border: `1px solid ${onDark ? "rgba(200,184,154,0.5)" : "var(--color-charcoal)"}`,
                background: "transparent",
                color: navColor,
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition:
                  "background 0.25s ease, color 0.25s ease, border-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = onDark
                  ? "var(--color-ivory)"
                  : "var(--color-charcoal)";
                e.currentTarget.style.color = onDark
                  ? "var(--color-charcoal)"
                  : "var(--color-ivory)";
                e.currentTarget.style.borderColor = onDark
                  ? "var(--color-ivory)"
                  : "var(--color-charcoal)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = navColor;
                e.currentTarget.style.borderColor = onDark
                  ? "rgba(200,184,154,0.5)"
                  : "var(--color-charcoal)";
              }}>
              Get In Touch
            </a>
          </nav>
        )}

        {/* Mobile hamburger button */}
        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              width: "40px",
              height: "40px",
              position: "relative",
              zIndex: 1001,
            }}>
            {/* Bar 1 */}
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: mobileMenuOpen ? "var(--color-ivory)" : navColor,
                borderRadius: "2px",
                transition:
                  "transform 0.35s cubic-bezier(0.77,0,0.18,1), opacity 0.2s ease, background 0.3s ease",
                transform: mobileMenuOpen
                  ? "translateY(6.5px) rotate(45deg)"
                  : "none",
              }}
            />
            {/* Bar 2 */}
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: mobileMenuOpen ? "var(--color-ivory)" : navColor,
                borderRadius: "2px",
                transition: "opacity 0.2s ease, background 0.3s ease",
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            {/* Bar 3 */}
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: mobileMenuOpen ? "var(--color-ivory)" : navColor,
                borderRadius: "2px",
                transition:
                  "transform 0.35s cubic-bezier(0.77,0,0.18,1), background 0.3s ease",
                transform: mobileMenuOpen
                  ? "translateY(-6.5px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        )}
      </header>

      {/* ─── Mobile Full-Screen Overlay Menu ─── */}
      <div
        aria-hidden={!mobileMenuOpen}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          background: "var(--color-charcoal)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? "all" : "none",
          transition: "opacity 0.45s cubic-bezier(0.22,1,0.36,1)",
        }}>
        {/* Ambient gold glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 60%, rgba(181,154,114,0.07) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            width: "100%",
            padding: "0 40px",
          }}>
          {/* Services */}
          <MobileNavLink
            href={anchorHref("services")}
            type="anchor"
            open={mobileMenuOpen}
            delay={0}
            onClick={closeMobileMenu}>
            Services
          </MobileNavLink>

          <div
            style={{
              width: "40px",
              height: "1px",
              background: "rgba(200,184,154,0.2)",
              margin: "4px 0",
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? "scaleX(1)" : "scaleX(0)",
              transition: "opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s",
            }}
          />

          {/* Menu */}
          <MobileNavLink
            href="/menu"
            type="route"
            open={mobileMenuOpen}
            delay={1}
            onClick={closeMobileMenu}>
            Menu
          </MobileNavLink>

          <div
            style={{
              width: "40px",
              height: "1px",
              background: "rgba(200,184,154,0.2)",
              margin: "4px 0",
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? "scaleX(1)" : "scaleX(0)",
              transition: "opacity 0.4s ease 0.25s, transform 0.4s ease 0.25s",
            }}
          />

          {/* About Us */}
          <MobileNavLink
            href={anchorHref("about-us")}
            type="anchor"
            open={mobileMenuOpen}
            delay={2}
            onClick={closeMobileMenu}>
            About Us
          </MobileNavLink>

          {/* CTA */}
          <div
            style={{
              marginTop: "48px",
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? "translateY(0)" : "translateY(16px)",
              transition:
                "opacity 0.5s ease 0.35s, transform 0.5s cubic-bezier(0.22,1,0.36,1) 0.35s",
            }}>
            <a
              href={anchorHref("contact")}
              onClick={closeMobileMenu}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 40px",
                borderRadius: "2px",
                border: "1px solid rgba(200,184,154,0.4)",
                background: "transparent",
                color: "var(--color-ivory)",
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}>
              Get In Touch
            </a>
          </div>
        </nav>

        {/* Bottom tagline */}
        <p
          style={{
            position: "absolute",
            bottom: "40px",
            fontFamily: "var(--font-body)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(250,247,242,0.3)",
            opacity: mobileMenuOpen ? 1 : 0,
            transition: "opacity 0.5s ease 0.5s",
          }}>
          Authentic Gujarati Catering · Since 2010
        </p>
      </div>
    </>
  );
}

function MobileNavLink({ href, type, open, delay, onClick, children }) {
  const baseDelay = 0.08 + delay * 0.1;
  const style = {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(2.4rem, 10vw, 4rem)",
    fontWeight: 300,
    fontStyle: "italic",
    color: "var(--color-ivory)",
    textDecoration: "none",
    letterSpacing: "-0.01em",
    lineHeight: 1.1,
    display: "block",
    padding: "12px 0",
    opacity: open ? 1 : 0,
    transform: open ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${baseDelay}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${baseDelay}s`,
    textAlign: "center",
  };

  if (type === "route") {
    return (
      <Link to={href} style={style} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} style={style} onClick={onClick}>
      {children}
    </a>
  );
}
