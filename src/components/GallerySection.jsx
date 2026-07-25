import React, { useState } from 'react';
import { Image as ImageIcon, Video, Calendar, MapPin, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function GallerySection({ items }) {
  const [filter, setFilter] = useState('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const filteredItems = items.filter((item) => {
    if (filter === 'photo') return item.type === 'photo';
    if (filter === 'video') return item.type === 'video';
    return true;
  });

  const handleOpenLightbox = (index) => {
    setSelectedItemIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedItemIndex(null);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedItemIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedItemIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  const currentItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  return (
    <section id="memories" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <div
            style={{
              fontSize: '0.88rem',
              fontStyle: 'italic',
              fontFamily: 'var(--font-serif)',
              color: 'var(--maroon-accent)',
              marginBottom: '12px',
              letterSpacing: '1px',
              opacity: 0.85,
            }}
          >
            captured in time
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: 400,
              marginBottom: '12px',
              lineHeight: 1.25,
            }}
          >
            <span style={{ color: 'var(--deep-maroon)' }}>Your Cherished </span>
            <span className="font-script" style={{ color: 'var(--maroon-accent)', fontSize: '1.2em' }}>
              Moments
            </span>
          </h2>
          <p className="section-subtitle" style={{ fontSize: '0.95rem' }}>
            A gallery of memories frozen in time, each telling a piece of our story.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          {[
            { key: 'all', label: 'All' },
            { key: 'photo', label: 'Photos' },
            { key: 'video', label: 'Videos' },
          ].map((btn) => (
            <button
              key={btn.key}
              onClick={() => setFilter(btn.key)}
              className={filter === btn.key ? 'btn-romantic' : 'btn-outline'}
              style={{
                padding: '7px 20px',
                fontSize: '0.825rem',
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Aesthetic 2x3 Picture Frame Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '28px',
            maxWidth: '960px',
            margin: '0 auto',
          }}
        >
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              style={{
                background: 'rgba(20, 7, 12, 0.85)',
                backdropFilter: 'blur(16px)',
                borderRadius: '24px',
                border: '1px solid rgba(232, 136, 155, 0.18)',
                padding: '14px 14px 16px 14px',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(232, 136, 155, 0.4)';
                e.currentTarget.style.boxShadow = '0 24px 50px rgba(0, 0, 0, 0.8), 0 0 20px rgba(232, 136, 155, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(232, 136, 155, 0.18)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.6)';
              }}
            >
              {/* Picture Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '280px',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  background: '#0d0305',
                }}
              >
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    muted
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.caption || 'Memory'}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                )}

                {/* Media Type Indicator */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(0, 0, 0, 0.65)',
                    backdropFilter: 'blur(8px)',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '0.72rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  {item.type === 'video' ? <Video size={12} /> : <ImageIcon size={12} />}
                  <span style={{ textTransform: 'capitalize' }}>{item.type}</span>
                </div>

                {/* Play Button overlay for video */}
                {item.type === 'video' && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: 'rgba(232, 136, 155, 0.85)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      boxShadow: '0 0 20px rgba(232, 136, 155, 0.4)',
                    }}
                  >
                    <Play size={20} fill="white" style={{ marginLeft: '2px' }} />
                  </div>
                )}
              </div>

              {/* Aesthetic Handwritten Word Tag at Bottom */}
              <div
                style={{
                  textAlign: 'center',
                  paddingTop: '12px',
                  paddingBottom: '2px',
                }}
              >
                <span
                  className="font-script"
                  style={{
                    fontSize: '1.45rem',
                    color: 'var(--maroon-accent)',
                    letterSpacing: '0.5px',
                    opacity: 0.9,
                  }}
                >
                  {item.tag || "remember"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      {currentItem && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(10, 3, 5, 0.92)',
            backdropFilter: 'blur(18px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={handleCloseLightbox}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: 'white',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
            }}
          >
            <X size={20} />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '24px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: 'white',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Navigation Next */}
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '24px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: 'white',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Modal Container */}
          <div
            className="glass-card-dark"
            style={{
              maxWidth: '860px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '24px',
              border: '1px solid rgba(232, 136, 155, 0.25)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: 'relative', width: '100%', maxHeight: '65vh', background: '#000' }}>
              {currentItem.type === 'video' ? (
                <video
                  src={currentItem.src}
                  controls
                  autoPlay
                  style={{ width: '100%', maxHeight: '65vh', objectFit: 'contain' }}
                />
              ) : (
                <img
                  src={currentItem.src}
                  alt={currentItem.caption}
                  style={{ width: '100%', maxHeight: '65vh', objectFit: 'contain' }}
                />
              )}
            </div>

            <div style={{ padding: '20px 24px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '0.82rem',
                  color: 'var(--rose-gold)',
                  marginBottom: '6px',
                }}
              >
                {currentItem.date && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={13} />
                    {currentItem.date}
                  </span>
                )}
                {currentItem.location && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={13} />
                    {currentItem.location}
                  </span>
                )}
              </div>
              <p style={{ fontSize: '0.98rem', color: '#f3e8ea', lineHeight: 1.5 }}>
                {currentItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
