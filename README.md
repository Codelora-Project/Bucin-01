# 💖 Website Bucin - Panduan Pengisian Konten & Penggunaan

Selamat datang! Website ini adalah sebuah **ruang digital romantis** yang dibuat khusus sebagai kejutan untuk pasangan Anda. Di dalamnya terdapat halaman pembuka pembawa mood, galeri foto & video kenangan, pemutar musik favorit, kuis kenangan interaktif, serta surat cinta rahasia yang dikunci dengan PIN.

Panduan ini dibuat untuk memudahkan Anda **mengganti foto, video, lagu, kuis, PIN, dan surat cinta** tanpa perlu memahami pemrograman yang rumit.

---

## 📁 1. Dimana Lokasi File Konten?

Semua pengisian konten dilakukan pada **satu file terpusat**:
👉 **`src/config/content.js`**

Semua file foto (`.jpg`, `.png`), video (`.mp4`), dan lagu (`.mp3`) milik Anda bisa ditaruh di folder:
👉 **`public/assets/`** *(jika folder belum ada, Anda bisa membuatnya di dalam folder `public`)*.

---

## 🛠️ 2. Cara Menambahkan File Foto, Video, & Lagu Pribadi

1. Siapkan file media Anda dan ganti namanya agar rapi, contoh:
   - Foto: `foto1.jpg`, `foto2.jpg`
   - Video: `video1.mp4`
   - Lagu: `lagu1.mp3`
   - Cover Lagu: `cover1.jpg`
2. Pindahkan file-file tersebut ke folder **`public/assets/`**.
3. Di file `src/config/content.js`, Anda cukup menuliskan lokasinya dengan awalan `/assets/nama-file.ext`. Contoh:
   `src: "/assets/foto1.jpg"`

---

## ✍️ 3. Panduan Mengedit `src/config/content.js`

Buka file `src/config/content.js` menggunakan text editor (VS Code / Notepad / Antigravity IDE).

### A. Mengubah Nama & Teks Pembuka (Welcome Screen)
```javascript
welcome: {
  recipientName: "Beby", // Ganti dengan nama panggilan pasangan Anda
  senderName: "Aku",      // Ganti dengan nama panggilan Anda
  title: "Untuk Beby, yang selalu ada di hariku.",
  subtitle: "Aku bikin website kecil ini buat kamu...",
  badge: "Special for you",
  startDate: "2023-02-14", // Format: YYYY-MM-DD (untuk hitungan hari bersama)
  heroImage: "/assets/foto-sampul.jpg", // Foto utama di halaman pembuka
}
```

---

### B. Mengisi Galeri Foto & Video Kenangan
Tambahkan atau ubah daftar `gallery`:

```javascript
gallery: [
  {
    id: 1,
    type: "photo", // Gunakan "photo" untuk foto
    src: "/assets/foto1.jpg", // Path file di public/assets/ atau URL online
    caption: "Kencan pertama di cafe favorit.",
    date: "14 Feb 2023",
    location: "Senja Coffee"
  },
  {
    id: 2,
    type: "video", // Gunakan "video" untuk file video MP4
    src: "/assets/video1.mp4",
    caption: "Video singkat waktu jalan di pantai.",
    date: "15 Jan 2024",
    location: "Pantai Indah"
  }
]
```

---

### C. Menambahkan Lagu Favorit (Playlist)
Ubah daftar `songs` di file `content.js`:

```javascript
songs: [
  {
    id: 1,
    title: "Judul Lagu",
    artist: "Nama Penyanyi",
    src: "/assets/lagu1.mp3", // File MP3 di public/assets/
    cover: "/assets/cover1.jpg" // Foto album/sampul lagu
  }
]
```

---

### D. Mengubah Pertanyaan Kuis Kenangan
Ubah pertanyaan, opsi jawaban, dan jawaban yang benar di `quiz`:

```javascript
quiz: {
  title: "Kuis Kenangan",
  subtitle: "Beberapa pertanyaan singkat tentang hal-hal yang pernah kita lewati.",
  questions: [
    {
      id: 1,
      question: "Di mana pertama kali kita ngobrol santai berdua?",
      options: ["Kafe Dekat Kampus", "Taman Kota", "Bioskop", "Pasar Malam"],
      correctIndex: 0, // Indeks jawaban benar (0 = Opsi pertama, 1 = Opsi kedua, dst)
      explanation: "Waktu itu pesen kopi susu dan ngobrol lumayan lama."
    }
  ]
}
```

---

### E. Mengatur PIN & Menulis Surat Cinta Rahasia
Di bagian `loveLetter`, Anda bisa mengganti PIN pembuka (default: `1234`) dan menulis surat asli Anda:

```javascript
loveLetter: {
  title: "Surat Rahasia",
  hint: "Petunjuk PIN: Tanggal jadian kita", // Petunjuk untuk pasangan Anda
  pin: "1234", // Set 4 digit PIN rahasia (contoh: 1402)
  envelopeTitle: "Pesan Tertutup",
  salutation: "Halo Beby,",
  content: `Tulis pesan cinta tulus Anda di sini.
  
Anda bisa membuat beberapa paragraf dengan menekan tombol Enter.`,
  closing: "Salam hangat,",
  senderName: "Dari aku"
}
```

---

## 🚀 4. Cara Menguji & Menjalankan Website di Komputer

1. Buka terminal di folder project ini.
2. Jalankan perintah:
   ```bash
   npm run dev
   ```
3. Buka link **`http://localhost:5173/`** di browser Anda untuk melihat hasilnya secara langsung.

---

## 🌐 5. Cara Mempublikasikan ke Internet (Deploy Gratis ke Vercel)

Agar pasangan Anda bisa membuka link website ini langsung dari HP-nya:

1. Buat akun gratis di [Vercel.com](https://vercel.com).
2. Hubungkan repositori GitHub proyek ini ke Vercel (atau gunakan perintah `npx vercel` di terminal).
3. Vercel akan otomatis membuatkan link publik (contoh: `https://kejutan-beby.vercel.app`) yang bisa langsung Anda kirimkan ke pasangan Anda!

---

## 💡 Tips Penting
- **Kompres Ukuran Foto/Video**: Usahakan ukuran foto di bawah 1MB dan video di bawah 10MB agar loading di HP pasangan Anda tidak lambat. Anda bisa menggunakan situs kompres gratis seperti [TinyPNG.com](https://tinypng.com).
- **Format Musik**: Gunakan format file `.mp3` standar untuk compatibility terbaik di semua browser.
