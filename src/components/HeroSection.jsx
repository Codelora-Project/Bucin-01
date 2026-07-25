import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar } from 'lucide-react';

export default function HeroSection({ welcomeData, hasEntered }) {
  const [daysTogether, setDaysTogether] = useState(0);

  useEffect(() => {
    if (welcomeData?.startDate) {
      const start = new Date(welcomeData.startDate);
      const now = new Date();
      const diffTime = Math.abs(now - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysTogether(diffDays);
    }
  }, [welcomeData]);

  // If initial load before entry, keep elements hidden until hasEntered triggers stagger fade
  const staggerClass = hasEntered ? 'stagger-fade-in' : '';

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px',
        paddingBottom: '60px',
        position: 'relative',
      }}
    >
      <div className="section-container" style={{ textAlign: 'center' }}>
        {/* 1. Top Tagline */}
        <div
          className={staggerClass}
          style={{
            fontSize: '0.9rem',
            fontStyle: 'italic',
            fontFamily: 'var(--font-serif)',
            color: 'var(--maroon-accent)',
            marginBottom: '16px',
            letterSpacing: '1px',
            opacity: hasEntered ? undefined : 0,
            animationDelay: '350ms',
          }}
        >
          {welcomeData.badge || "a love letter in bloom"}
        </div>

        {/* 2. Main Serif Title */}
        <h1
          className={`font-serif ${staggerClass}`}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
            color: 'var(--deep-maroon)',
            marginBottom: '16px',
            fontWeight: 400,
            lineHeight: 1.25,
            maxWidth: '850px',
            margin: '0 auto 16px auto',
            letterSpacing: '-0.5px',
            opacity: hasEntered ? undefined : 0,
            animationDelay: '550ms',
          }}
        >
          {welcomeData.title}
        </h1>

        {/* 3. Subtitle */}
        <p
          className={staggerClass}
          style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: 'var(--text-secondary)',
            marginBottom: '36px',
            maxWidth: '580px',
            margin: '0 auto 36px auto',
            fontWeight: 300,
            opacity: hasEntered ? undefined : 0,
            animationDelay: '750ms',
          }}
        >
          {welcomeData.subtitle}
        </p>

        {/* 4. Days Counter */}
        {daysTogether > 0 && (
          <div
            className={`glass-card-dark ${staggerClass}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              padding: '12px 28px',
              marginBottom: '40px',
              border: '1px solid rgba(232, 136, 155, 0.2)',
              opacity: hasEntered ? undefined : 0,
              animationDelay: '950ms',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(232, 136, 155, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Calendar size={18} color="var(--primary-rose)" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                DAYS TOGETHER
              </span>
              <span style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--deep-maroon)' }}>
                {daysTogether.toLocaleString()} <span style={{ fontSize: '0.9rem', fontWeight: 400 }}>days with you</span>
              </span>
            </div>
          </div>
        )}

        {/* 5. Hero Polaroid Image */}
        {welcomeData.heroImage && (
          <div
            className={staggerClass}
            style={{
              maxWidth: '440px',
              margin: '0 auto 40px auto',
              position: 'relative',
              opacity: hasEntered ? undefined : 0,
              animationDelay: '1150ms',
            }}
          >
            <div
              className="glass-card-dark"
              style={{
                padding: '16px 16px 20px 16px',
                transform: 'rotate(-2deg)',
                transition: 'transform 0.4s ease',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(-2deg) scale(1)')}
            >
              <img
                src={welcomeData.heroImage}
                alt="Us Together"
                style={{
                  width: '100%',
                  height: '280px',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '12px',
                }}
              />
              <p className="font-script" style={{ fontSize: '1.5rem', color: 'var(--maroon-accent)' }}>
                Forever Us
              </p>
            </div>
          </div>
        )}

        {/* 6. Scroll Indicator */}
        <div
          className={staggerClass}
          style={{
            marginTop: '30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--text-muted)',
            fontSize: '0.75rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            opacity: hasEntered ? undefined : 0,
            animationDelay: '1350ms',
          }}
        >
          <span>SCROLL TO DISCOVER</span>
          <ChevronDown size={16} className="animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
}
