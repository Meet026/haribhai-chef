import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getServiceById } from "../data/serviceData";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = getServiceById(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!service) {
    return (
      <div
        style={{
          background: "var(--surface-primary)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          padding: "120px 48px",
          textAlign: "center",
        }}
      >
        <p className="eyebrow" style={{ color: "var(--text-muted)" }}>
          Services
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "2.5rem",
            fontWeight: 400,
            color: "var(--text-heading)",
          }}
        >
          Service not found
        </h2>
        <Link
          to="/"
          className="btn-secondary"
          style={{ marginTop: "8px" }}
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "var(--surface-primary)",
        minHeight: "100vh",
        paddingTop: "128px",
        paddingBottom: "96px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        {/* ── Eyebrow + Title ── */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p
            className="eyebrow"
            style={{ color: "var(--text-muted)", marginBottom: "20px" }}
          >
            Services
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 400,
              color: "var(--text-heading)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            {service.title}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "var(--text-muted)",
              letterSpacing: "0.01em",
            }}
          >
            {service.tagline}
          </p>
        </div>

        {/* ── Hero Image ── */}
        <div
          style={{
            width: "100%",
            borderRadius: "24px",
            overflow: "hidden",
            marginBottom: "48px",
            maxHeight: "500px",
          }}
        >
          <img
            src={service.img}
            alt={service.title}
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* ── Intro ── */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
            lineHeight: 1.85,
            color: "var(--text-muted)",
            fontWeight: 300,
            textAlign: "center",
            maxWidth: "680px",
            margin: "0 auto 48px",
          }}
        >
          {service.intro}
        </p>

        <hr className="divider" style={{ marginBottom: "48px" }} />

        {/* ── Features heading ── */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            fontWeight: 400,
            color: "var(--text-heading)",
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
            marginBottom: "48px",
          }}
        >
          {service.featuresHeading}
        </h2>

        {/* ── Feature list ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {service.features.map((feature, i) => (
            <div key={i}>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "var(--text-heading)",
                  letterSpacing: "-0.01em",
                  marginBottom: "10px",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  lineHeight: 1.85,
                  color: "var(--text-muted)",
                  fontWeight: 300,
                  maxWidth: "720px",
                }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <hr className="divider" style={{ margin: "64px 0 48px" }} />

        {/* ── CTA ── */}
        <div style={{ textAlign: "center" }}>
          <a href="/#contact" className="btn-secondary">
            Book Reservation
          </a>
        </div>
      </div>
    </div>
  );
}
