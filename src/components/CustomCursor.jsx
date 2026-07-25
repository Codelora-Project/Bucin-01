import React, { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor - Desktop mouse cursor enhancement.
 * Automatically disables & removes all elements on touch devices / mobile phones
 * to prevent static dot bugs at top-left corner.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect mobile touch devices
    const isTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0;

    if (isTouch) {
      setIsTouchDevice(true);
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animFrame;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 5}px, ${mouseY - 5}px, 0)`;
      }
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      }

      animFrame = requestAnimationFrame(render);
    };

    const onMouseDown = () => {
      if (dotRef.current) dotRef.current.style.transform += ' scale(1.4)';
      if (ringRef.current) ringRef.current.style.transform += ' scale(0.8)';
    };

    const onMouseUp = () => {
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${mouseX - 5}px, ${mouseY - 5}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  // Do NOT render cursor DOM on mobile phones / touch devices
  if (isTouchDevice) return null;

  return (
    <>
      <style>{`
        @media (pointer: coarse), (hover: none) {
          .custom-cursor-element {
            display: none !important;
          }
        }
      `}</style>

      {/* Main Cursor Dot */}
      <div
        ref={dotRef}
        className="custom-cursor-element"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: '#e8889b',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
          boxShadow: '0 0 8px rgba(232, 136, 155, 0.6)',
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      />

      {/* Trailing Outer Ring */}
      <div
        ref={ringRef}
        className="custom-cursor-element"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1.5px solid rgba(232, 136, 155, 0.5)',
          pointerEvents: 'none',
          zIndex: 99998,
          willChange: 'transform',
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      />
    </>
  );
}
