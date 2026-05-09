import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const MARQUEE_TEXT = 'Weddings · Celebrations · Pooja Thali · Corporate Catering · Birthday Feasts · Ritual Meals · ';

function MarqueeTrack() {
  return (
    <div
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '20px 0',
        background: 'var(--surface-primary)',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          animation: 'marqueeScroll 20s linear infinite',
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--text-muted)',
              padding: '0 40px',
              letterSpacing: '-0.01em',
            }}
          >
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default function About() {
  const { ref: ref1, visible: v1 } = useScrollReveal();
  const { ref: ref2, visible: v2 } = useScrollReveal();

  return (
    <section
      id="about-us"
      style={{
        background: 'var(--surface-primary)',
        color: 'var(--text-primary)',
        paddingTop: '160px',
        paddingBottom: '80px',
        transition: 'var(--transition-bg)',
      }}
    >
      {/* Main content */}
      <div
        style={{
          padding: '0 64px 100px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* Left: heading */}
        <div
          ref={ref1}
          style={{
            opacity: v1 ? 1 : 0,
            transform: v1 ? 'translateY(0)' : 'translateY(50px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          <span className="eyebrow" style={{ color: 'var(--text-muted)' }}>
            About
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              marginTop: '20px',
              color: 'var(--text-heading)',
              letterSpacing: '-0.02em',
            }}
          >
            A Family Craft,
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Three Generations</em>
            <br />
            in the Making
          </h2>
        </div>

        {/* Right: body copy + CTA */}
        <div
          ref={ref2}
          style={{
            opacity: v2 ? 1 : 0,
            transform: v2 ? 'translateY(0)' : 'translateY(50px)',
            transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              lineHeight: 1.9,
              color: 'var(--text-muted)',
              marginBottom: '28px',
              fontWeight: 300,
            }}
          >
            What started as Haribhai's small kitchen in the lanes of Ahmedabad has grown into Gujarat's most trusted catering house. We cook the way our grandmothers did — with fresh ingredients, slow-simmered dals, hand-rolled rotis, and a belief that every meal is an act of love.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              lineHeight: 1.9,
              color: 'var(--text-muted)',
              fontWeight: 300,
            }}
          >
            Over 10,000 events. Hundreds of thousands of plates served. The same recipe. The same devotion.
          </p>
          <div style={{ marginTop: '48px' }}>
            <a
              href="#about-us"
              id="about-our-story-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '11px 32px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-default)',
                background: 'transparent',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-charcoal)';
                e.currentTarget.style.borderColor = 'var(--color-charcoal)';
                e.currentTarget.style.color = 'var(--color-ivory)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'var(--border-default)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = 'translateY(1px)')}
              onMouseUp={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <MarqueeTrack />

      {/* Stats row */}
      <div
        style={{
          padding: '80px 64px 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px',
          borderTop: '1px solid var(--border-subtle)',
          marginTop: '80px',
        }}
      >
        {[
          { num: '37+', label: 'Years of Excellence' },
          { num: '10,000+', label: 'Events Catered' },
          { num: '50+', label: 'Signature Dishes' },
        ].map(({ num, label }) => {
          const { ref, visible } = useScrollReveal();
          return (
            <div
              key={label}
              ref={ref}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3rem, 5vw, 5rem)',
                  fontWeight: 300,
                  color: 'var(--text-heading)',
                  lineHeight: 1,
                }}
              >
                {num}
              </p>
              <p
                className="eyebrow"
                style={{ color: 'var(--text-muted)', marginTop: '10px' }}
              >
                {label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
