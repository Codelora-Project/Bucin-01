import React, { useEffect, useRef } from 'react';

/**
 * AmbientBackground - Lau Bloom Style Atmospheric Engine
 * - Twinkling stars & glowing cosmic particles
 * - 3D Tumbling Sakura flowers & Rose petals falling continuously
 * - Instant screen coverage (0s delay)
 * - Rendered at zIndex: 50 with pointerEvents: none
 */
export default function AmbientBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const isMobile = window.innerWidth < 768;
    const petalCount = isMobile ? 45 : 85;
    const starCount = isMobile ? 30 : 60;

    const particles = [];
    const stars = [];

    // Rich sakura & rose colors
    const colors = [
      'rgba(242, 182, 193, ', // soft sakura pink
      'rgba(255, 214, 224, ', // pastel rose
      'rgba(232, 136, 155, ', // warm rose glow
      'rgba(247, 202, 211, ', // blush
      'rgba(214, 111, 131, ', // deep crimson
    ];

    // Initialize stars across screen
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.7 + 0.2,
        alphaChange: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    // Initialize falling petals ALREADY distributed across full viewport height
    for (let i = 0; i < petalCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height, // Distributed 0 to height for INSTANT visibility!
        size: Math.random() * 11 + 9,
        speedY: Math.random() * 1.1 + 0.5,
        speedX: Math.random() * 0.7 - 0.35,
        oscillationSpeed: Math.random() * 0.02 + 0.008,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.04,
        flipSpeed: Math.random() * 0.04 + 0.01,
        flip: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.65 + 0.35,
        colorPrefix: colors[Math.floor(Math.random() * colors.length)],
        type: Math.random() > 0.3 ? 'petal' : 'flower',
      });
    }

    // Draw single falling petal with 3D flip transform
    const drawPetal = (p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.scale(Math.cos(p.flip), 1);

      ctx.fillStyle = p.colorPrefix + p.opacity + ')';

      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.bezierCurveTo(
        p.size * 0.85, -p.size * 0.4,
        p.size * 0.95, p.size * 0.5,
        0, p.size
      );
      ctx.bezierCurveTo(
        -p.size * 0.95, p.size * 0.5,
        -p.size * 0.85, -p.size * 0.4,
        0, -p.size
      );
      ctx.closePath();
      ctx.fill();

      // Subtle Petal Highlight
      ctx.strokeStyle = p.colorPrefix + (p.opacity * 0.5) + ')';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, -p.size * 0.7);
      ctx.lineTo(0, p.size * 0.6);
      ctx.stroke();

      ctx.restore();
    };

    // Draw 5-petal sakura flower
    const drawFlower = (p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.scale(Math.cos(p.flip * 0.5), 1);

      ctx.fillStyle = p.colorPrefix + (p.opacity * 0.95) + ')';

      const petalCount = 5;
      const petalLength = p.size * 0.75;

      for (let i = 0; i < petalCount; i++) {
        ctx.save();
        ctx.rotate((i * Math.PI * 2) / petalCount);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(
          -petalLength * 0.45, -petalLength * 0.6,
          -petalLength * 0.35, -petalLength,
          0, -petalLength
        );
        ctx.bezierCurveTo(
          petalLength * 0.35, -petalLength,
          petalLength * 0.45, -petalLength * 0.6,
          0, 0
        );
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      // Flower center stamen
      ctx.fillStyle = 'rgba(255, 240, 210, ' + (p.opacity * 0.95) + ')';
      ctx.beginPath();
      ctx.arc(0, 0, p.size * 0.22, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Render Twinkling Stars
      stars.forEach((s) => {
        s.alpha += s.alphaChange;
        if (s.alpha > 0.85 || s.alpha < 0.15) {
          s.alphaChange = -s.alphaChange;
        }
        ctx.fillStyle = `rgba(255, 248, 234, ${s.alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Render Falling Petals & Flowers
      particles.forEach((p) => {
        p.y += p.speedY;
        p.angle += p.rotationSpeed;
        p.flip += p.flipSpeed;
        p.x += Math.sin(p.y * p.oscillationSpeed) * 0.8 + p.speedX;

        // Reset particle when off bottom of screen
        if (p.y > height + 40) {
          p.y = -30;
          p.x = Math.random() * width;
        }
        if (p.x > width + 40) {
          p.x = -30;
        } else if (p.x < -40) {
          p.x = width + 30;
        }

        if (p.type === 'flower') {
          drawFlower(p);
        } else {
          drawPetal(p);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 50,
      }}
    />
  );
}
