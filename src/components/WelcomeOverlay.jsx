import React, { useState } from 'react';
import { Mail, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WelcomeOverlay({ recipientName, onEnter }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e) => {
    if (isOpening || isAnimating) return;
    setIsAnimating(true);

    // STEP 1: Fire flower petal explosion on the Welcome Overlay
    confetti({
      particleCount: 140,
      spread: 120,
      origin: { x: 0.5, y: 0.5 },
      colors: ['#f2b6c1', '#e8889b', '#ffd6e0', '#ffffff', '#d66f83', '#fce8eb', '#e2a9b2'],
      scalar: 1.3,
      ticks: 250,
      gravity: 0.7,
    });

    setTimeout(() => {
      confetti({
        particleCount: 70,
        angle: 60,
        spread: 90,
        origin: { x: 0.2, y: 0.5 },
        colors: ['#f2b6c1', '#e8889b', '#ffffff'],
      });
      confetti({
        particleCount: 70,
        angle: 120,
        spread: 90,
        origin: { x: 0.8, y: 0.5 },
        colors: ['#f2b6c1', '#e8889b', '#ffffff'],
      });
    }, 200);

    // STEP 2: Wait 1.2s for flower animation to fully finish on overlay card
    setTimeout(() => {
      // Start CSS fade-out transition
      setIsOpening(true);

      // STEP 3: Wait 600ms for fade-out to finish before triggering main page transition & audio
      setTimeout(() => {
        if (onEnter) {
          onEnter();
        }
      }, 650);
    }, 1250);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(14, 4, 7, 0.96)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        cursor: 'pointer',
        opacity: isOpening ? 0 : 1,
        transform: isOpening ? 'scale(1.08)' : 'scale(1)',
        transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: isOpening ? 'none' : 'auto',
      }}
    >
      {/* Deep Dark Velvet Card */}
      <div
        className="glass-card-dark"
        style={{
          maxWidth: '420px',
          width: '100%',
          padding: '40px 28px',
          textAlign: 'center',
          borderRadius: '24px',
          border: '1px solid rgba(232, 136, 155, 0.25)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
          position: 'relative',
          transform: isAnimating && !isOpening ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Soft Glowing Stamp */}
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'rgba(232, 136, 155, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px auto',
            color: 'var(--maroon-accent)',
            border: '1px solid rgba(232, 136, 155, 0.3)',
          }}
          className="animate-float"
        >
          <Mail size={26} />
        </div>

        {/* Script Heading */}
        <h2
          className="font-script"
          style={{
            fontSize: '2.8rem',
            color: '#ffffff',
            marginBottom: '8px',
            lineHeight: 1.2,
          }}
        >
          For {recipientName || 'You'}
        </h2>

        <p
          style={{
            fontSize: '0.92rem',
            color: 'var(--text-secondary)',
            marginBottom: '28px',
            lineHeight: 1.5,
          }}
        >
          A quiet note is waiting for you. Click anywhere to enter.
        </p>

        {/* Action Button */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 24px',
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, #e8889b 0%, #a3324c 100%)',
            color: 'white',
            fontSize: '0.88rem',
            fontWeight: 600,
            boxShadow: '0 6px 20px rgba(232, 136, 155, 0.35)',
          }}
        >
          <Heart size={15} fill="white" />
          <span>{isAnimating ? 'Opening...' : 'Open Letter'}</span>
        </div>
      </div>
    </div>
  );
}
