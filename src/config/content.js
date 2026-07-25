/**
 * PERSONAL WEBSITE CONTENT (ENGLISH)
 */

export const siteContent = {
  // 1. Hero & Welcome Screen Data
  welcome: {
    recipientName: "Beby",
    senderName: "Me",
    title: "For You, My Everything",
    subtitle: "Every petal holds a whisper of how much you mean to me.",
    badge: "a love letter in bloom",
    startDate: "2023-02-14",
    heroImage: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop",
  },

  // 2. Photo & Video Gallery
  gallery: [
    {
      id: 1,
      type: "photo",
      src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000&auto=format&fit=crop",
      caption: "Our first coffee date. We talked until time seemed to stand still.",
      tag: "you",
      date: "Feb 14, 2023",
      location: "Senja Coffee"
    },
    {
      id: 2,
      type: "photo",
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1000&auto=format&fit=crop",
      caption: "Sunset by the shore. A quiet moment that still feels so warm.",
      tag: "are",
      date: "May 28, 2023",
      location: "Seaside Beach"
    },
    {
      id: 3,
      type: "photo",
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop",
      caption: "Laughing together for no reason at all. My favorite kind of happiness.",
      tag: "so",
      date: "Aug 12, 2023",
      location: "City Park"
    },
    {
      id: 4,
      type: "photo",
      src: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=1000&auto=format&fit=crop",
      caption: "Candid moment while you were immersed in your book.",
      tag: "truly",
      date: "Oct 05, 2023",
      location: "Library Cafe"
    },
    {
      id: 5,
      type: "photo",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
      caption: "New Year's Eve. Simply being next to you was more than enough.",
      tag: "beautiful",
      date: "Dec 31, 2023",
      location: "Rooftop"
    },
    {
      id: 6,
      type: "video",
      src: "https://assets.mixkit.co/videos/preview/mixkit-couple-walking-hand-in-hand-on-the-beach-41484-large.mp4",
      caption: "A short clip walking along the beach together.",
      tag: "always",
      date: "Jan 15, 2024",
      location: "Ocean Breeze"
    }
  ],

  // 3. Songs Playlist
  songs: [
    {
      id: 1,
      title: "Sampai Jadi Debu",
      artist: "Banda Neira",
      src: "/assets/Sampai Jadi Debu.mp3",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Until I Found You",
      artist: "Stephen Sanchez",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Perfect",
      artist: "Ed Sheeran",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=300&auto=format&fit=crop"
    }
  ],

  // 4. Memory Quiz
  quiz: {
    title: "Our Memory Trivia",
    subtitle: "A gentle quiz about the moments we have shared together.",
    questions: [
      {
        id: 1,
        question: "Where did we have our very first casual coffee chat?",
        options: ["Campus Coffee Shop", "City Park", "Cinema XXI", "Night Market"],
        correctIndex: 0,
        explanation: "We ordered iced coffee and talked for hours until evening."
      },
      {
        id: 2,
        question: "Which sweet treat do we grab most often together?",
        options: ["Sweet Pancake", "Ice Cream / Boba", "Spicy Snacks", "Pizza"],
        correctIndex: 1,
        explanation: "We loved queuing for ice cream on warm afternoons."
      },
      {
        id: 3,
        question: "What makes every little moment feel complete?",
        options: ["Leaning on shoulders", "Holding hands", "Laughing together", "All of the above"],
        correctIndex: 3,
        explanation: "Every single moment with you is precious."
      }
    ],
    closingMessages: {
      perfect: "Your memory is extraordinary. Thank you for holding every little detail close to your heart.",
      good: "You remembered almost everything! Thank you for being such a wonderful part of my life.",
      keepTrying: "No matter the score, every single memory with you remains priceless to me."
    }
  },

  // 5. Sealed Secret Love Letter
  loveLetter: {
    title: "Sealed Letter",
    hint: "PIN Hint: 1234",
    pin: "1234",
    envelopeTitle: "For Your Eyes Only",
    salutation: "Dearest Beby,",
    content: `If you have reached this section and unlocked this letter, I simply want to say thank you.

There is no special occasion today. I just wanted to create a quiet, beautiful space for you to open whenever you want to feel a touch of warmth in the middle of a busy day.

Thank you for your endless patience, your kindness, and the gentle comfort you bring into my life every single day. The simplest moments feel deeply meaningful when shared with you.

I hope we continue walking side by side, supporting each other's dreams, and creating endless beautiful memories together.`,
    closing: "Forever yours,",
    senderName: "With all my love"
  }
};
