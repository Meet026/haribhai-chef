import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const SERVICES = [
  {
    num: '01',
    title: 'Wedding Feasts',
    desc: 'From intimate nikkahs to grand baraat receptions — we orchestrate a culinary celebration that your guests will speak of for generations.',
    img: '/hero_food.png',
  },
  {
    num: '02',
    title: 'Pooja & Ritual Thali',
    desc: 'Sacred ceremonial meals crafted with devotion. Pure ghee, hand-ground spices, and time-honoured recipes offered with reverence.',
    img: '/thali.png',
  },
  {
    num: '03',
    title: 'Corporate Events',
    desc: 'Elevate your next conference, offsite, or product launch with our signature Gujarati buffet, reimagined for the boardroom.',
    img: '/catering.png',
  },
];

function ServiceRow({ service, index }) {
  const { ref, visible } = useScrollReveal();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0',
        minHeight: '520px',
        borderTop: '1px solid var(--border-subtle)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)',
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      {/* Text side */}
      <div
        style={{
          order: isEven ? 1 : 2,
          padding: '80px 64px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '20px',
          background: 'var(--surface-section)',
        }}
      >
        <span className="eyebrow" style={{ color: 'var(--text-muted)' }}>
          {service.num} —
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: 'var(--text-heading)',
            letterSpacing: '-0.02em',
          }}
        >
          {service.title}
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            lineHeight: 1.8,
            color: 'var(--text-muted)',
            maxWidth: '380px',
            fontWeight: 300,
          }}
        >
          {service.desc}
        </p>
        <a
          href="#contact"
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
            alignSelf: 'flex-start',
            marginTop: '8px',
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
          Book Now
        </a>
      </div>

      {/* Image side */}
      <div
        style={{
          order: isEven ? 2 : 1,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <img
          src={service.img}
          alt={service.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1.04)',
            transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)',
            display: 'block',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(245,240,232,0.04)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
}

export default function Services() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="services"
      style={{
        background: 'var(--surface-section)',
        padding: '120px 0 0',
      }}
    >
      {/* Section header */}
      <div
        ref={ref}
        style={{
          padding: '0 64px 80px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            fontWeight: 400,
            lineHeight: 1,
            color: 'var(--text-heading)',
            maxWidth: '600px',
            letterSpacing: '-0.02em',
          }}
        >
          What We{' '}
          <em style={{ fontStyle: 'italic' }}>Bring</em>
          <br />
          to the Table
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.78rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            maxWidth: '180px',
            textAlign: 'right',
            lineHeight: 1.7,
          }}
        >
          Serving Gujarat's Finest Since 1987
        </p>
      </div>

      {/* Service rows */}
      {SERVICES.map((s, i) => (
        <ServiceRow key={s.num} service={s} index={i} />
      ))}
    </section>
  );
}
