import React, { useState, useEffect } from 'react';
import { Heart, Image, Music, HelpCircle, Mail } from 'lucide-react';

export default function Navbar({ recipientName }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'memories', 'music', 'quiz', 'letter'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'memories', label: 'Memories', icon: Image },
    { id: 'music', label: 'Music', icon: Music },
    { id: 'quiz', label: 'Trivia', icon: HelpCircle },
    { id: 'letter', label: 'Secret Letter', icon: Mail },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '12px 24px' : '20px 24px',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="glass-card-dark"
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: '9999px',
          background: scrolled ? 'rgba(18, 5, 9, 0.92)' : 'rgba(26, 9, 14, 0.75)',
          border: '1px solid rgba(232, 136, 155, 0.2)',
          boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.6)' : 'var(--glass-shadow)',
        }}
      >
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontWeight: '700',
            fontSize: '1.2rem',
            fontFamily: 'var(--font-script)',
          }}
        >
          <Heart size={18} fill="var(--primary-rose)" color="var(--primary-rose)" className="animate-pulse-glow" />
          <span>For {recipientName}</span>
        </a>

        <nav style={{ display: 'flex', gap: '6px' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? '600' : '400',
                  color: isActive ? 'white' : 'var(--text-secondary)',
                  background: isActive
                    ? 'linear-gradient(135deg, var(--primary-rose), #a3324c)'
                    : 'transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                <Icon size={14} />
                <span className="nav-label-text">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .nav-label-text {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
