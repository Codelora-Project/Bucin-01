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

      {/* Main Website Content */}
      <AmbientBackground />

      <Navbar
        recipientName={siteContent.welcome.recipientName}
        hasEntered={hasEntered}
      />

      <HeroSection
        welcomeData={siteContent.welcome}
        hasEntered={hasEntered}
      />

      <GallerySection items={siteContent.gallery} />

      <MusicPlayer songs={siteContent.songs} autoPlayTrigger={hasEntered} />

      <QuizSection quizData={siteContent.quiz} />

      <SecretLetterSection loveLetter={siteContent.loveLetter} />

      <Footer
        recipientName={siteContent.welcome.recipientName}
        senderName={siteContent.welcome.senderName}
      />
    </div>
  );
}
