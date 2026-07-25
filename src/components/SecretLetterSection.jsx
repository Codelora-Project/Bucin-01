import React, { useState } from 'react';
import { Lock, Mail, AlertCircle, KeyRound } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SecretLetterSection({ loveLetter }) {
  const [pinInput, setPinInput] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const correctPin = loveLetter?.pin || '1234';

  const handleKeyPress = (num) => {
    if (pinInput.length < 4) {
      setPinInput((prev) => prev + num);
      setErrorMsg('');
    }
  };

  const handleDelete = () => {
    setPinInput((prev) => prev.slice(0, -1));
    setErrorMsg('');
  };

  const handleClear = () => {
    setPinInput('');
    setErrorMsg('');
  };

  const handleUnlock = (e) => {
    if (e) e.preventDefault();
    if (pinInput.length === 0) return;

    setIsSubmitting(true);

    setTimeout(() => {
      if (pinInput === correctPin) {
        setIsUnlocked(true);
        setErrorMsg('');
        
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#e8889b', '#7a1d32', '#f7c5cc', '#ffffff', '#e6b86a'],
        });
      } else {
        setErrorMsg('Incorrect PIN. Please try again.');
        setPinInput('');
      }
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <section id="letter" style={{ position: 'relative', paddingBottom: '80px' }}>
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} color="var(--primary-rose)" />
            <span>confidential</span>
          </div>
          <h2 className="section-title">{loveLetter?.title || 'Sealed Letter'}</h2>
          <p className="section-subtitle">
            Enter the 4-digit PIN to read this private letter.
          </p>
        </div>

        {/* Secret Container */}
        <div
          className="glass-card-dark"
          style={{
            maxWidth: '640px',
            margin: '0 auto',
            padding: '36px 24px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(232, 136, 155, 0.2)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
          }}
        >
          {!isUnlocked ? (
            /* Locked Envelope & Keypad */
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(232, 136, 155, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto',
                  color: 'var(--maroon-accent)',
                  border: '1px solid rgba(232, 136, 155, 0.25)',
                }}
              >
                <Lock size={34} />
              </div>

              <h3 className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--deep-maroon)', marginBottom: '6px' }}>
                {loveLetter?.envelopeTitle || 'For Your Eyes Only'}
              </h3>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                {loveLetter?.hint || 'PIN Hint: 1234'}
              </p>

              {/* PIN Dots */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '14px',
                  marginBottom: '20px',
                }}
              >
                {[0, 1, 2, 3].map((idx) => {
                  const isFilled = pinInput.length > idx;
                  return (
                    <div
                      key={idx}
                      style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        border: '2px solid var(--primary-rose)',
                        background: isFilled ? 'var(--primary-rose)' : 'transparent',
                        transition: 'all 0.2s ease',
                      }}
                    />
                  );
                })}
              </div>

              {/* Error Message */}
              {errorMsg && (
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    background: 'rgba(211, 47, 47, 0.15)',
                    color: '#ef9a9a',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.82rem',
                    marginBottom: '16px',
                    fontWeight: 500,
                  }}
                >
                  <AlertCircle size={14} />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Keypad Dialer */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '10px',
                  maxWidth: '260px',
                  margin: '0 auto 24px auto',
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => handleKeyPress(num.toString())}
                    style={{
                      width: '58px',
                      height: '58px',
                      borderRadius: '50%',
                      border: '1px solid rgba(232, 136, 155, 0.2)',
                      background: 'rgba(30, 10, 16, 0.7)',
                      color: 'var(--deep-maroon)',
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      margin: '0 auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.94)')}
                    onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    {num}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={handleClear}
                  style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '50%',
                    border: 'none',
                    background: 'transparent',
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    margin: '0 auto',
                  }}
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={() => handleKeyPress('0')}
                  style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '50%',
                    border: '1px solid rgba(232, 136, 155, 0.2)',
                    background: 'rgba(30, 10, 16, 0.7)',
                    color: 'var(--deep-maroon)',
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  0
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '50%',
                    border: 'none',
                    background: 'transparent',
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    margin: '0 auto',
                  }}
                >
                  ←
                </button>
              </div>

              {/* Unlock Action Button */}
              <button
                onClick={handleUnlock}
                disabled={pinInput.length < 4 || isSubmitting}
                className="btn-romantic"
                style={{
                  width: '100%',
                  maxWidth: '260px',
                  padding: '12px 24px',
                  fontSize: '0.9rem',
                  opacity: pinInput.length < 4 ? 0.5 : 1,
                  cursor: pinInput.length < 4 ? 'not-allowed' : 'pointer',
                }}
              >
                <KeyRound size={16} />
                <span>{isSubmitting ? 'Unlocking...' : 'Unlock Letter'}</span>
              </button>
            </div>
          ) : (
            /* Unlocked Letter Revealed Screen */
            <div
              style={{
                background: 'rgba(18, 5, 9, 0.95)',
                padding: '32px 28px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(232, 136, 155, 0.3)',
                position: 'relative',
              }}
            >
              {/* Salutation */}
              <h3
                className="font-script"
                style={{
                  fontSize: '2.4rem',
                  color: 'var(--maroon-accent)',
                  marginBottom: '16px',
                }}
              >
                {loveLetter?.salutation || 'Dearest Beby,'}
              </h3>

              {/* Letter Content Body */}
              <div
                style={{
                  fontSize: '1.02rem',
                  color: '#f7e8ec',
                  lineHeight: 1.8,
                  whiteSpace: 'pre-line',
                  marginBottom: '28px',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {loveLetter?.content}
              </div>

              {/* Closing */}
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '2px' }}>
                  {loveLetter?.closing || 'Forever yours,'}
                </p>
                <h4
                  className="font-script"
                  style={{
                    fontSize: '1.8rem',
                    color: 'var(--deep-maroon)',
                  }}
                >
                  {loveLetter?.senderName}
                </h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
