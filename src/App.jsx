import React, { useState } from 'react';
import { siteContent } from './config/content';
import CustomCursor from './components/CustomCursor';
import WelcomeOverlay from './components/WelcomeOverlay';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import MusicPlayer from './components/MusicPlayer';
import QuizSection from './components/QuizSection';
import SecretLetterSection from './components/SecretLetterSection';
import Footer from './components/Footer';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Custom Romantic Cursor */}
      <CustomCursor />

      {/* Opening Intro Gate Overlay */}
      {!hasEntered && (
        <WelcomeOverlay
          recipientName={siteContent.welcome.recipientName}
          onEnter={handleEnter}
        />
      )}

      {/* Main Website Content with smooth fade-in reveal when entered */}
      <div
        className={hasEntered ? 'animate-page-enter' : ''}
        style={{
          opacity: hasEntered ? 1 : 0,
          transition: 'opacity 0.8s ease',
          pointerEvents: hasEntered ? 'auto' : 'none',
        }}
      >
        <AmbientBackground />

        <Navbar recipientName={siteContent.welcome.recipientName} />

        <HeroSection welcomeData={siteContent.welcome} />

        <GallerySection items={siteContent.gallery} />

        <MusicPlayer songs={siteContent.songs} autoPlayTrigger={hasEntered} />

        <QuizSection quizData={siteContent.quiz} />

        <SecretLetterSection loveLetter={siteContent.loveLetter} />

        <Footer
          recipientName={siteContent.welcome.recipientName}
          senderName={siteContent.welcome.senderName}
        />
      </div>
    </div>
  );
}
