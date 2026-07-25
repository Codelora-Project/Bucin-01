import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ recipientName, senderName }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(232, 136, 155, 0.15)',
        background: 'rgba(12, 3, 5, 0.8)',
        backdropFilter: 'blur(10px)',
        padding: '36px 24px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <p
          className="font-script"
          style={{
            fontSize: '1.6rem',
            color: 'var(--maroon-accent)',
            marginBottom: '6px',
          }}
        >
          {senderName || 'Me'} & {recipientName || 'Beby'}
        </p>

        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
          A gentle digital space created to hold every cherished memory.
        </p>

        <button
          onClick={scrollToTop}
          className="btn-outline"
          style={{
            padding: '6px 16px',
            fontSize: '0.78rem',
          }}
        >
          <ArrowUp size={13} />
          <span>Back to top</span>
        </button>
      </div>
    </footer>
  );
}
