import React, { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
  const { ref: ref1, visible: v1 } = useScrollReveal();
  const { ref: ref2, visible: v2 } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      style={{
        background: "var(--surface-dark)",
        color: "var(--text-inverse)",
        padding: "140px 64px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Large decorative background text */}
      <div
        style={{
          position: "absolute",
          top: "-10px",
          left: "-40px",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(8rem, 18vw, 20rem)",
          fontWeight: 300,
          color: "rgba(250,247,242,0.03)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          letterSpacing: "-0.04em",
        }}
      >
        Let's Create
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left: CTA copy */}
        <div
          ref={ref1}
          style={{
            opacity: v1 ? 1 : 0,
            transform: v1 ? "translateY(0)" : "translateY(50px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <span className="eyebrow" style={{ color: "rgba(200,184,154,0.55)" }}>
            Contact
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              marginTop: "24px",
              color: "var(--color-ivory)",
              letterSpacing: "-0.02em",
            }}
          >
            Let's Create
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 300 }}>Your Gathering</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              lineHeight: 1.85,
              color: "rgba(250,247,242,0.5)",
              maxWidth: "380px",
              marginTop: "28px",
              fontWeight: 300,
            }}
          >
            Whether you're planning an intimate puja or a grand wedding banquet
            for 2,000 guests, we'd love to be part of your celebration. Reach
            out and let's talk flavours.
          </p>

          <div style={{ marginTop: "52px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="tel:+91XXXXXXXXXX"
              id="contact-call-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "11px 32px",
                borderRadius: "var(--radius-sm)",
                border: "1px solid rgba(200,184,154,0.35)",
                background: "transparent",
                color: "var(--color-ivory)",
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-ivory)";
                e.currentTarget.style.borderColor = "var(--color-ivory)";
                e.currentTarget.style.color = "var(--color-charcoal)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(200,184,154,0.35)";
                e.currentTarget.style.color = "var(--color-ivory)";
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = "translateY(1px)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              Call Us
            </a>
            <a
              href="mailto:haribhai@rasoiya.in"
              id="contact-email-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "11px 32px",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--color-muted-gold)",
                background: "transparent",
                color: "var(--color-muted-gold)",
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.25s ease, color 0.25s ease, transform 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-muted-gold)";
                e.currentTarget.style.color = "var(--color-charcoal)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--color-muted-gold)";
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = "translateY(1px)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              Email Us
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div
          ref={ref2}
          style={{
            opacity: v2 ? 1 : 0,
            transform: v2 ? "translateY(0)" : "translateY(50px)",
            transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
          }}
        >
          {submitted ? (
            <div
              style={{
                padding: "48px 0",
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontStyle: "italic",
                fontWeight: 300,
                color: "var(--color-muted-gold)",
                lineHeight: 1.5,
              }}
            >
              Thank you! Your submission has been received.
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              style={{ display: "flex", flexDirection: "column", gap: "0" }}
            >
              {[
                { id: "name",  label: "Your Name",      type: "text",  placeholder: "Ramesh Patel" },
                { id: "email", label: "Email Address",  type: "email", placeholder: "ramesh@example.com" },
                { id: "event", label: "Event Type",     type: "text",  placeholder: "Wedding, Pooja, Birthday…" },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id} style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "28px" }}>
                  <label
                    htmlFor={id}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(250,247,242,0.45)",
                    }}
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    style={{
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(200,184,154,0.25)",
                      padding: "12px 0",
                      color: "var(--color-ivory)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      fontWeight: 300,
                      outline: "none",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-muted-gold)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(200,184,154,0.25)")}
                  />
                </div>
              ))}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "36px" }}>
                <label
                  htmlFor="message"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(250,247,242,0.45)",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your event…"
                  style={{
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(200,184,154,0.25)",
                    padding: "12px 0",
                    color: "var(--color-ivory)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    fontWeight: 300,
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-muted-gold)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(200,184,154,0.25)")}
                />
              </div>
              <button
                type="submit"
                id="contact-submit-btn"
                style={{
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 40px",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--color-ivory)",
                  background: "var(--color-ivory)",
                  color: "var(--color-charcoal)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-muted-gold)";
                  e.currentTarget.style.borderColor = "var(--color-muted-gold)";
                  e.currentTarget.style.color = "var(--color-charcoal)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--color-ivory)";
                  e.currentTarget.style.borderColor = "var(--color-ivory)";
                  e.currentTarget.style.color = "var(--color-charcoal)";
                }}
                onMouseDown={(e) => (e.currentTarget.style.transform = "translateY(1px)")}
                onMouseUp={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                Send Enquiry →
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "120px",
          paddingTop: "40px",
          borderTop: "1px solid rgba(200,184,154,0.12)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--color-ivory)",
          }}
        >
          Haribhai Rasoiya
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.72rem",
            letterSpacing: "0.08em",
            color: "rgba(250,247,242,0.3)",
          }}
        >
          © {new Date().getFullYear()} · Ahmedabad, Gujarat · All rights reserved
        </p>
        <div style={{ display: "flex", gap: "28px" }}>
          {["Instagram", "WhatsApp", "Facebook"].map((social) => (
            <a
              key={social}
              href="#"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(250,247,242,0.35)",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-muted-gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,247,242,0.35)")}
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
