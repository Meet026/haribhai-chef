import { useEffect, useRef, useState } from "react";

// ── Responsive hook ───────────────────────────────────────────────────────────

function useBreakpoint() {
  const [w, setW] = useState(() => window.innerWidth);
  useEffect(() => {
    const handler = () => setW(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return {
    isMobile: w < 640,
    isTablet: w >= 640 && w < 1024,
    isDesktop: w >= 1024,
  };
}

// ── Inline SVG Icons ──────────────────────────────────────────────────────────

const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────

const SOCIALS = [
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
  { Icon: WhatsAppIcon, label: "WhatsApp", href: "#" },
  { Icon: FacebookIcon, label: "Facebook", href: "#" },
];

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "hi", label: "हिन्दी" },
];

const NAV_COLUMNS = [
  {
    header: "Navigate",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/#services" },
      { label: "Menu", href: "/menu" },
      { label: "About Us", href: "/#about-us" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    header: "Our Services",
    links: [
      { label: "Wedding Feasts", href: "/#services" },
      { label: "Pooja & Ritual Thali", href: "/#services" },
      { label: "Corporate Events", href: "/#services" },
      { label: "Birthday Celebrations", href: "/#services" },
      { label: "Social Gatherings", href: "/#services" },
    ],
  },
  {
    header: "Contact Us",
    links: [
      { label: "+91 98765 43210", href: "tel:+919876543210" },
      { label: "haribhai@rasoiya.in", href: "mailto:haribhai@rasoiya.in" },
      { label: "Ahmedabad, Gujarat", href: "#" },
    ],
  },
];

// shared link style
const linkStyle = {
  fontFamily: "var(--font-body)",
  fontSize: "0.8rem",
  fontWeight: 500,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "rgba(250,247,242,0.5)",
  textDecoration: "none",
  transition: "opacity 0.3s ease",
  display: "block",
};

const headerStyle = {
  fontFamily: "var(--font-body)",
  fontSize: "0.8rem",
  fontWeight: 500,
  color: "var(--color-muted-gold)",
  margin: 0,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
};

// ── Language Selector ─────────────────────────────────────────────────────────

function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(LANGUAGES[0]);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "7px 14px",
          borderRadius: 10,
          border: "1px solid rgba(200,184,154,0.2)",
          background: "rgba(200,184,154,0.07)",
          color: "rgba(250,247,242,0.65)",
          fontFamily: "var(--font-body)",
          fontSize: "0.8rem",
          fontWeight: 500,
          letterSpacing: "0.1em",
          cursor: "pointer",
          transition: "border-color 0.2s, background 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(200,184,154,0.4)";
          e.currentTarget.style.background = "rgba(200,184,154,0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(200,184,154,0.2)";
          e.currentTarget.style.background = "rgba(200,184,154,0.07)";
        }}>
        <GlobeIcon />
        {selected.label}
        <ChevronDownIcon />
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            bottom: "calc(100% + 6px)",
            left: 0,
            background: "#252522",
            border: "1px solid rgba(200,184,154,0.18)",
            borderRadius: 10,
            overflow: "hidden",
            minWidth: 140,
            zIndex: 10,
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          }}>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelected(lang);
                setOpen(false);
              }}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "9px 14px",
                background:
                  selected.code === lang.code
                    ? "rgba(200,184,154,0.12)"
                    : "transparent",
                border: "none",
                color:
                  selected.code === lang.code
                    ? "var(--color-muted-gold)"
                    : "rgba(250,247,242,0.6)",
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                cursor: "pointer",
                transition: "background 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => {
                if (selected.code !== lang.code) {
                  e.currentTarget.style.background = "rgba(200,184,154,0.07)";
                  e.currentTarget.style.color = "rgba(250,247,242,0.9)";
                }
              }}
              onMouseLeave={(e) => {
                if (selected.code !== lang.code) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "rgba(250,247,242,0.6)";
                }
              }}>
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Brand column ──────────────────────────────────────────────────────────────

function BrandColumn({ isMobile }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Logo + name */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 36,
            height: 36,
            background: "var(--color-muted-gold)",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 20C4 20 4 14 10 10C16 6 20 4 20 4C20 4 18 8 14 14C10 20 4 20 4 20Z"
              fill="var(--color-charcoal)"
            />
            <path
              d="M4 20L10 14"
              stroke="var(--color-charcoal)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--color-ivory)",
              lineHeight: 1.1,
              letterSpacing: "0.04em",
              margin: 0,
            }}>
            Haribhai Rasoiya
          </p>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          color: "rgba(250,247,242,0.45)",
          lineHeight: 1.75,
          fontSize: "0.8rem",
          fontWeight: 500,
          letterSpacing: "0.06em",
          maxWidth: isMobile ? "100%" : 300,
          margin: 0,
        }}>
        From intimate puja ceremonies to grand wedding banquets for 2,000 guests
        — authentic Gujarati flavours for every celebration.
      </p>

      {/* Socials */}
      <div style={{ display: "flex", gap: 8 }}>
        {SOCIALS.map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            style={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              border: "1px solid rgba(200,184,154,0.15)",
              background: "rgba(200,184,154,0.05)",
              color: "rgba(250,247,242,0.5)",
              textDecoration: "none",
              transition: "border-color 0.2s, background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(200,184,154,0.4)";
              e.currentTarget.style.background = "rgba(200,184,154,0.12)";
              e.currentTarget.style.color = "var(--color-muted-gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(200,184,154,0.15)";
              e.currentTarget.style.background = "rgba(200,184,154,0.05)";
              e.currentTarget.style.color = "rgba(250,247,242,0.5)";
            }}>
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
}

// ── FooterCard ────────────────────────────────────────────────────────────────

function FooterCard() {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  const gridCols = isDesktop ? "2fr 1fr 1fr 1fr" : isTablet ? "1fr 1fr" : "1fr";

  const contentPadding = isMobile
    ? "2rem 1.5rem"
    : isTablet
      ? "2rem 2rem"
      : "2.5rem 3rem";
  const gridGap = isMobile ? "2rem" : isTablet ? "2rem" : "3rem";
  const legalPadding = isMobile
    ? "16px 20px"
    : isTablet
      ? "16px 28px"
      : "18px 40px";

  return (
    <div style={{ width: "100%" }}>
      {/* Outer dark shell */}
      <div
        style={{
          background: "#252522",
          borderRadius: isMobile ? 28 : 48,
          border: "1px solid rgba(200,184,154,0.1)",
          boxShadow: "0 2px 40px rgba(0,0,0,0.35)",
          overflow: "hidden",
        }}>
        {/* Inner charcoal card */}
        <div
          style={{
            background: "var(--color-charcoal)",
            borderRadius: isMobile ? 22 : 40,
            margin: 8,
            boxShadow: "inset 0 1px 0 rgba(250,247,242,0.04)",
          }}>
          {/* Content grid */}
          <div
            style={{
              padding: contentPadding,
              display: "grid",
              gridTemplateColumns: gridCols,
              gap: gridGap,
            }}>
            {/* Brand column — spans full width on tablet */}
            <div style={{ gridColumn: isTablet ? "1 / -1" : undefined }}>
              <BrandColumn isMobile={isMobile} />
            </div>

            {/* Nav columns */}
            {NAV_COLUMNS.map(({ header, links }) => (
              <div
                key={header}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}>
                <h4 style={headerStyle}>{header}</h4>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.85rem",
                    padding: 0,
                    margin: 0,
                  }}>
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        style={linkStyle}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.opacity = "0.55")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.opacity = "1")
                        }>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Legal bar */}
        <div
          style={{
            padding: legalPadding,
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? "12px" : "1.5rem",
            flexWrap: "wrap",
          }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(250,247,242,0.3)",
              fontWeight: 500,
              margin: 0,
              fontSize: "0.8rem",
              letterSpacing: "0.06em",
            }}>
            © {new Date().getFullYear()} Haribhai Rasoiya. All rights reserved.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              flexWrap: "wrap",
            }}>
            <LanguageSelector />
            {["Privacy Policy"].map((item, i) => (
              <span
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                }}>
                {i === 0 && (
                  <div
                    style={{
                      width: 1,
                      height: 14,
                      background: "rgba(200,184,154,0.15)",
                    }}
                  />
                )}
                <a
                  href="#"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "rgba(250,247,242,0.3)",
                    fontWeight: 500,
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.55")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                  {item}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Default export ────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer
      id="site-footer"
      style={{
        width: "100%",
        background: "var(--surface-dark)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px 16px 48px",
        gap: 0,
        fontFamily: "var(--font-body)",
        overflow: "hidden",
      }}>
      <FooterCard />
    </footer>
  );
}
