# 💖 Deep Dark Romantic Personal Website — Customization & Setup Guide

Welcome! This website is an intimate, atmospheric **digital love letter** created as a personal surprise. It features a dark velvet aesthetic, twinkling stars, 3D falling flower petals, a persistent music player, an interactive memory trivia quiz, an aesthetic frame gallery, and a sealed secret love letter.

This guide explains **how to personalize photos, videos, music, quiz trivia, secret letter PIN, and content** without needing complex coding knowledge.

---

## 📁 1. Content File Location

All website content and customization are centralized in **one single file**:  
👉 **`src/config/content.js`**

Place all your custom image (`.jpg`, `.png`), video (`.mp4`), and audio (`.mp3`) files into the folder:  
👉 **`public/assets/`**

---

## 🛠️ 2. How to Add Your Own Photos, Videos, & Songs

1. Add your files into the **`public/assets/`** folder.
2. In **`src/config/content.js`**, reference them using the path `/assets/filename.ext`.  
   *Example:* `src: "/assets/my-photo.jpg"` or `src: "/assets/my-song.mp3"`

---

## ✍️ 3. Personalizing `src/config/content.js`

Open `src/config/content.js` in your text editor.

### A. Welcome Screen & Names
```javascript
welcome: {
  recipientName: "Clara Sayangg", // Name of your partner
  senderName: "Me",               // Your name / nickname
  title: "For You, My Everything",
  subtitle: "Every petal holds a whisper of how much you mean to me.",
  badge: "a love letter in bloom",
  startDate: "2023-02-14",       // YYYY-MM-DD format (calculates days together)
  heroImage: "/assets/hero-photo.jpg", // Main polaroid cover image
}
```

---

### B. Aesthetic Photo & Video Gallery Grid
Add or update items in `gallery`. You can add a romantic `tag` (1 word in script font) below each frame:

```javascript
gallery: [
  {
    id: 1,
    type: "photo",                // Use "photo" or "video"
    src: "/assets/photo1.jpg",    // Path inside public/assets/
    caption: "Our first coffee date. We talked until time seemed to stand still.",
    tag: "you",                   // 1-word poetic script tag under the frame
    date: "Feb 14, 2023",
    location: "Senja Coffee"
  },
  {
    id: 2,
    type: "video",                // Video clip
    src: "/assets/video1.mp4",
    caption: "A short clip walking along the beach together.",
    tag: "always",
    date: "Jan 15, 2024",
    location: "Ocean Breeze"
  }
]
```

---

### C. Favorite Song Playlist
Update the `songs` playlist array:

```javascript
songs: [
  {
    id: 1,
    title: "Sampai Jadi Debu",
    artist: "Banda Neira",
    src: "/assets/Sampai Jadi Debu.mp3", // Path inside public/assets/
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&auto=format&fit=crop"
  }
]
```

---

### D. Memory Trivia Quiz
Customize questions, options, correct answers (`correctIndex`), and closing messages:

```javascript
quiz: {
  title: "Our Memory Trivia",
  subtitle: "A gentle quiz about the moments we have shared together.",
  questions: [
    {
      id: 1,
      question: "Where did we have our very first casual coffee chat?",
      options: ["Campus Coffee Shop", "City Park", "Cinema XXI", "Night Market"],
      correctIndex: 0, // 0 = 1st option, 1 = 2nd option, etc.
      explanation: "We ordered iced coffee and talked for hours until evening."
    }
  ]
}
```

---

### E. Secret Sealed Letter & PIN Code
Customize your 4-digit PIN (default: `1234`) and your personal letter:

```javascript
loveLetter: {
  title: "Sealed Letter",
  hint: "PIN Hint: 1234",          // Hint for your partner
  pin: "1234",                     // Set 4-digit PIN (e.g. "1402")
  envelopeTitle: "For Your Eyes Only",
  salutation: "Dearest Clara,",
  content: `Write your sincere heart-felt letter here.
  
Press Enter to create paragraphs.`,
  closing: "Forever yours,",
  senderName: "With all my love"
}
```

---

## 🚀 4. How to Run Locally

1. Open your terminal in this project folder.
2. Run:
   ```bash
   npm run dev
   ```
3. Open **`http://localhost:5173/`** in your browser.

---

## 🌐 5. Deploying Online for Free (Vercel / Netlify)

To share a private link with your partner:

1. Create a free account at [Vercel.com](https://vercel.com).
2. Connect your GitHub repository (or run `npx vercel` in terminal).
3. Vercel will generate a private link (e.g., `https://for-clara.vercel.app`) to send to your partner!

---

## 💡 Optimization Tips
- **Image/Video Compression**: Keep photos under 1MB and videos under 10MB using free tools like [TinyPNG.com](https://tinypng.com) for ultra-fast loading on mobile phones.
- **Audio Format**: Use standard `.mp3` format for maximum browser compatibility.
