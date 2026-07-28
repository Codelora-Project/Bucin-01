/**
 * PERSONAL WEBSITE CONTENT (ENGLISH)
 */

export const siteContent = {
  // 1. Hero & Welcome Screen Data
  welcome: {
    recipientName: "Clara Sayangg",
    senderName: "Me",
    title: "For You, My Everything",
    subtitle: "Every petal holds a whisper of how much you mean to me.",
    badge: "a love letter in bloom",
    startDate: "2023-02-14",
    heroImage: "https://i.pinimg.com/vwebp/736x/37/1d/09/371d09b7cceed0256e8ad4f01b9fa9d8.webp",
  },

  // 2. Photo & Video Gallery
  gallery: [
    {
      id: 1,
      type: "photo",
      src: "https://i.pinimg.com/736x/f9/a5/89/f9a589519eadc779d5aa01773c6355d0.jpg",
      caption: "Our first coffee date. We talked until time seemed to stand still.",
      tag: "you",
      date: "Feb 14, 2023",
      location: "Senja Coffee"
    },
    {
      id: 2,
      type: "photo",
      src: "https://i.pinimg.com/736x/d8/20/35/d820353e9749928badafacc1b9cafdbb.jpg",
      caption: "Sunset by the shore. A quiet moment that still feels so warm.",
      tag: "are",
      date: "May 28, 2023",
      location: "Seaside Beach"
    },
    {
      id: 3,
      type: "photo",
      src: "https://i.pinimg.com/736x/11/5b/dc/115bdccc81ee296f154e6bd07a3e8a8f.jpg",
      caption: "Laughing together for no reason at all. My favorite kind of happiness.",
      tag: "so",
      date: "Aug 12, 2023",
      location: "City Park"
    },
    {
      id: 4,
      type: "photo",
      src: "https://i.pinimg.com/736x/8a/41/72/8a417258931e1bb7f70a216ada4e04a6.jpg",
      caption: "Candid moment while you were immersed in your book.",
      tag: "truly",
      date: "Oct 05, 2023",
      location: "Library Cafe"
    },
    {
      id: 5,
      type: "photo",
      src: "https://i.pinimg.com/736x/9f/8a/8c/9f8a8c66583488c239d2d71e8579e5dd.jpg",
      caption: "New Year's Eve. Simply being next to you was more than enough.",
      tag: "beautiful",
      date: "Dec 31, 2023",
      location: "Rooftop"
    },
    {
      id: 6,
      type: "video",
      src: "/assets/beach.mp4",
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
      cover: "https://i.pinimg.com/vwebp/1200x/9b/87/40/9b8740ac3e979e2497179974a3f64951.webp"
    },
    {
      id: 2,
      title: "Best Part",
      artist: "Daniel Caesar & H.E.R.",
      src: "/assets/Best Part.mp3",
      cover: "https://i.pinimg.com/vwebp/736x/0a/92/02/0a9202e18ff9ca7d82106dd6f28e9dfd.webp"
    },
    {
      id: 3,
      title: "Perfect",
      artist: "Ed Sheeran",
      src: "/assets/Perfect.mp3",
      cover: "https://i.pinimg.com/736x/f4/25/fc/f425fc0f0aa0f201532af855446fa75e.jpg"
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
