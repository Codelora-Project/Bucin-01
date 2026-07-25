import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Disc, Music } from 'lucide-react';

export default function MusicPlayer({ songs, autoPlayTrigger }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isExpanded, setIsExpanded] = useState(true);

  const audioRef = useRef(null);
  const currentSong = songs[currentTrackIndex] || songs[0];

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Audio play error:", err);
      });
    }
  }, [autoPlayTrigger]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;

    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Audio play error:", err);
        });
    }
  };

  const handleNext = () => {
    const nextIdx = (currentTrackIndex + 1) % songs.length;
    setCurrentTrackIndex(nextIdx);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    const prevIdx = (currentTrackIndex - 1 + songs.length) % songs.length;
    setCurrentTrackIndex(prevIdx);
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatTime = (timeInSec) => {
    if (isNaN(timeInSec)) return '0:00';
    const mins = Math.floor(timeInSec / 60);
    const secs = Math.floor(timeInSec % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [currentTrackIndex]);

  return (
    <section id="music" style={{ position: 'relative' }}>
      <audio
        ref={audioRef}
        src={currentSong?.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNext}
      />

      <div className="section-container" style={{ paddingBottom: '30px' }}>
        <div className="section-header">
          <div className="section-tag">
            <Music size={14} color="var(--primary-rose)" />
            <span>soundtrack of us</span>
          </div>
          <h2 className="section-title">Favorite Songs</h2>
          <p className="section-subtitle">
            The melodies that bring back every feeling.
          </p>
        </div>

        <div
          className="glass-card-dark"
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            padding: '24px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(232, 136, 155, 0.2)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            {/* Vinyl Cover Art */}
            <div
              style={{
                position: 'relative',
                width: '96px',
                height: '96px',
                margin: '0 auto',
              }}
            >
              <img
                src={currentSong?.cover}
                alt={currentSong?.title}
                className={isPlaying ? 'animate-spin-slow' : ''}
                style={{
                  width: '96px',
                  height: '96px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid var(--rose-gold)',
                  boxShadow: isPlaying ? 'var(--glow-shadow)' : '0 4px 16px rgba(0,0,0,0.4)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: 'var(--deep-bg)',
                  border: '2px solid var(--maroon-accent)',
                }}
              />
            </div>

            {/* Song Info & Controls */}
            <div style={{ flex: 1, minWidth: '220px' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'var(--primary-rose)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                NOW PLAYING
              </span>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--deep-maroon)', marginBottom: '2px' }}>
                {currentSong?.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '12px' }}>
                {currentSong?.artist}
              </p>

              {/* Progress Slider */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {formatTime(currentTime)}
                </span>
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  style={{
                    flex: 1,
                    accentColor: 'var(--primary-rose)',
                    cursor: 'pointer',
                  }}
                />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {formatTime(duration)}
                </span>
              </div>
            </div>

            {/* Control Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                margin: '0 auto',
              }}
            >
              <button
                onClick={handlePrev}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--maroon-accent)',
                  cursor: 'pointer',
                  padding: '6px',
                }}
              >
                <SkipBack size={20} />
              </button>

              <button
                onClick={togglePlay}
                className="btn-romantic"
                style={{
                  width: '48px',
                  height: '48px',
                  padding: 0,
                  borderRadius: '50%',
                }}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} style={{ marginLeft: '2px' }} />}
              </button>

              <button
                onClick={handleNext}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--maroon-accent)',
                  cursor: 'pointer',
                  padding: '6px',
                }}
              >
                <SkipForward size={20} />
              </button>

              <button
                onClick={toggleMute}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '6px',
                }}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Audio Bar */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 90,
        }}
      >
        <div
          className="glass-card-dark"
          style={{
            padding: '8px 14px',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
            border: '1px solid rgba(232, 136, 155, 0.3)',
            background: 'rgba(18, 5, 9, 0.92)',
          }}
        >
          <div
            onClick={togglePlay}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--primary-rose), #a3324c)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
              className={isPlaying ? 'animate-spin-slow' : ''}
            >
              <Disc size={18} />
            </div>

            {isExpanded && (
              <div style={{ maxWidth: '130px' }}>
                <div
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'var(--deep-maroon)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {currentSong?.title}
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                  {isPlaying ? 'Playing...' : 'Paused'}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={togglePlay}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--maroon-accent)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
        </div>
      </div>
    </section>
  );
}
