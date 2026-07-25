# PRD: Website Bucin (Kejutan Romantis untuk Pasangan)

**Status:** Draft
**Tanggal:** 26 Juli 2026
**Versi:** 1.0

## 1. Ringkasan (Overview)
Website Bucin adalah sebuah website personal romantis yang dibuat sebagai kejutan untuk pasangan, berisi galeri foto/video kenangan, pemutar musik, kuis/mini game seputar hubungan, dan surat cinta digital yang dikunci dengan password/PIN rahasia. Website ini tidak dibuat untuk momen spesifik (bukan anniversary/ulang tahun), melainkan sebagai kejutan random — sebuah "hadiah digital" yang bisa dibuka kapan saja pasangan mau merasakannya. Dibangun dengan React, dan akan langsung dieksekusi oleh AI coding agent dari nol.

## 2. Latar Belakang & Masalah (Problem Statement)
- Ucapan atau hadiah fisik terasa umum dan mudah dilupakan; pembuat ingin memberi sesuatu yang personal, interaktif, dan berkesan.
- Momen dan kenangan berdua (foto, lagu, cerita) sering tersebar di berbagai tempat (galeri HP, chat, medsos) dan tidak pernah dikemas jadi satu pengalaman utuh.
- Jika tidak dibuat, kejutan ini hanya akan berupa ucapan biasa yang kurang berkesan dibanding pengalaman digital yang dirancang khusus.

## 3. Tujuan & Metrik Keberhasilan (Goals & Success Metrics)
- Memberikan pengalaman digital yang personal dan berkesan untuk pasangan.
- Menyimpan dan menyajikan kenangan (foto/video, lagu, pesan) dalam satu tempat yang rapi dan menyenangkan untuk dijelajahi.
- Metrik keberhasilan (kualitatif, karena ini proyek personal bukan produk komersial):
  - Pasangan berhasil membuka seluruh bagian website (galeri, musik, kuis, surat) tanpa kendala teknis.
  - Semua fitur interaktif (kuis, unlock surat dengan PIN) berjalan mulus di HP maupun desktop.
- **Non-goals**: bukan aplikasi multi-user/publik, bukan produk yang akan dikomersialkan, tidak perlu sistem akun/login yang kompleks.

## 4. Target User / Persona
- **Pasangan (penerima kejutan)** — orang yang akan menerima link/akses website ini. Kebutuhannya: pengalaman yang mudah diakses (cukup buka link), terasa personal dan hangat, tidak butuh instruksi teknis. Pain point: kejutan gagal berkesan kalau website lambat, membingungkan, atau terasa generik.
- **Pembuat (user)** — yang membangun dan mengisi konten website. Kebutuhannya: mudah mengganti/menambah foto, lagu, dan teks tanpa harus mengubah banyak kode; ingin hasil akhir terasa estetik dan romantis.

## 5. User Stories
- Sebagai pasangan, saya ingin membuka website dan langsung disambut tampilan yang hangat dan personal, supaya saya merasa ini dibuat khusus untuk saya.
- Sebagai pasangan, saya ingin menjelajahi galeri foto/video kenangan berdua, supaya saya bisa bernostalgia.
- Sebagai pasangan, saya ingin mendengarkan lagu yang berarti buat hubungan kami sambil menjelajah website, supaya suasana lebih terasa.
- Sebagai pasangan, saya ingin memainkan kuis/game seputar hubungan kami, supaya pengalamannya interaktif dan seru, bukan cuma dibaca pasif.
- Sebagai pasangan, saya ingin membuka surat cinta rahasia dengan memasukkan PIN/password tertentu, supaya ada momen "unlock" yang terasa spesial dan personal.
- Sebagai pembuat, saya ingin bisa mengganti isi foto, lagu, pertanyaan kuis, dan teks surat dengan mudah, supaya saya bisa menyesuaikan konten tanpa harus paham detail kode.

## 6. Core Features (per Fase)

### Fase 1 — Inti Pengalaman
- **Landing / Welcome Screen** `[high]` — Halaman pembuka dengan sapaan personal dan ajakan untuk mulai menjelajah (tombol "Mulai" atau semacamnya).
  - **Animasi sambutan** — transisi lembut/animasi romantis saat halaman dibuka.
- **Galeri Foto & Video** `[high]` — Menampilkan koleksi foto/video kenangan berdua dalam layout menarik (grid atau carousel).
  - **Lightbox/preview** — foto/video bisa diklik untuk dilihat lebih besar.
  - **Caption per item** — tiap foto/video bisa punya keterangan singkat (kapan, di mana, cerita singkat).
- **Music Player** `[high]` — Pemutar musik yang bisa autoplay/diputar manual, menampilkan lagu-lagu yang berarti untuk hubungan.
  - **Kontrol dasar** — play/pause, next/prev jika ada lebih dari 1 lagu, volume.
- **Surat Cinta Terkunci (Password/PIN)** `[high]` — Bagian surat digital yang hanya bisa dibuka setelah memasukkan PIN/password yang benar.
  - **Form input PIN** — validasi input, pesan error ramah jika salah.
  - **Reveal surat** — animasi/transisi saat surat berhasil terbuka.

### Fase 2 — Interaktivitas
- **Quiz / Mini Game Seputar Hubungan** `[medium]` — Kuis interaktif berisi pertanyaan seputar kenangan/fakta tentang hubungan, dengan skor di akhir.
  - **Pertanyaan pilihan ganda** — beberapa soal dengan opsi jawaban.
  - **Hasil & pesan penutup** — menampilkan skor dan pesan personal di akhir kuis, apa pun hasilnya (tetap positif/romantis).

### Fase 3 — Polish & Sentuhan Akhir
- **Navigasi antar-section yang mulus** `[medium]` — transisi halus antar galeri, musik, kuis, dan surat (single-page scroll atau navigasi section).
- **Responsif penuh (mobile-first)** `[high]` — karena kemungkinan besar akan dibuka dari HP, tampilan harus optimal di layar kecil.
- **Detail dekoratif** `[low]` — elemen visual tambahan seperti partikel/animasi ambient (misalnya efek kelopak bunga atau bintang jatuh mengambang) untuk memperkuat mood romantis.

### Non-Functional Requirements
- **Performa**: aset gambar/video dioptimalkan agar loading cepat, terutama saat dibuka lewat koneksi mobile.
- **Aksesibilitas dasar**: kontras teks cukup terbaca, tombol cukup besar untuk disentuh di layar HP.
- **Privasi**: karena berisi foto/pesan pribadi, sebaiknya tidak diindeks mesin pencari (mis. tambahkan `robots.txt` disallow) jika di-deploy publik.

## 7. Desain & UX
- **Tema & Gaya Visual**: mood romantis dan hangat — palet warna soft (pink, merah muda, ungu lembut, atau merah maroon elegan sebagai aksen), dengan tipografi yang punya sentuhan personal (mis. font script/handwritten untuk judul, font bersih untuk teks isi).
- **Komponen visual kunci**: galeri foto bergaya carousel/grid dengan animasi hover lembut; tombol dan form dengan sudut membulat agar terasa lembut, bukan kaku.
- **Prinsip UX**: setiap transisi antar bagian harus terasa "smooth" dan disengaja — ini pengalaman personal, bukan aplikasi utilitas, jadi micro-interaction (animasi tombol, transisi halaman) penting untuk membangun mood. Momen unlock surat cinta harus jadi puncak emosional, sehingga animasinya perlu dibuat spesial.
- **Referensi**: tidak ada referensi produk spesifik yang disebutkan — arahan visual di atas jadi acuan utama agent.

## 8. Scope

### Dalam scope (in-scope)
- Semua fitur di Fase 1–3 (landing, galeri, music player, surat terkunci, kuis, responsif, polish visual).
- Konten (foto, lagu, teks, pertanyaan kuis) menggunakan data placeholder/dummy yang mudah diganti oleh pembuat.

### Di luar scope (out-of-scope)
- Sistem login/akun multi-user.
- Backend/database server (kecuali dibutuhkan untuk menyimpan file media besar — lihat Section 12).
- Fitur berbagi/publikasi ke publik luas atau SEO.
- Localization/multi-bahasa.

## 9. Alur Pengguna (User Flow)
1. Pasangan membuka link website → melihat landing screen dengan sapaan personal.
2. Menekan tombol mulai → diarahkan/scroll ke galeri foto & video kenangan, musik mulai diputar (atau tombol play manual).
3. Menjelajah galeri, melihat foto/video dengan caption.
4. Lanjut ke bagian kuis, menjawab pertanyaan seputar hubungan, melihat skor & pesan penutup.
5. Sampai ke bagian surat cinta, diminta memasukkan PIN/password.
6. Setelah PIN benar → surat cinta terbuka dengan animasi spesial sebagai penutup pengalaman.

## 10. Timeline
Tidak ada deadline khusus dari user. Estimasi relatif:
- **Fase 1**: fondasi utama, porsi pengerjaan terbesar.
- **Fase 2**: menyusul setelah Fase 1 stabil.
- **Fase 3**: tahap penghalusan di akhir, sebelum website siap dibagikan.

## 11. Risiko & Dependensi
- **Ukuran file media**: foto/video kenangan asli bisa berukuran besar dan memperlambat loading jika tidak dikompres — perlu strategi optimasi aset.
- **Konten personal**: pembuat perlu menyiapkan sendiri foto, lagu, dan teks surat sebelum website benar-benar "jadi" secara emosional — agent hanya menyediakan struktur & tempat untuk konten tersebut (placeholder).
- **Hosting**: jika ingin dibuka pasangan dari mana saja, perlu deploy ke hosting publik (mis. Vercel/Netlify); jika tidak, bisa dijalankan lokal saat momen kejutan berlangsung.

## 12. Open Questions & Assumptions
- **Asumsi**: tidak ada preferensi warna/tema spesifik yang disebutkan user, sehingga tema romantis (pink/merah muda/ungu lembut) diasumsikan sebagai default — bisa disesuaikan.
- **Asumsi**: konten (foto, lagu, pertanyaan kuis, teks surat) akan diisi manual oleh pembuat setelah struktur website jadi; agent akan menyediakan placeholder yang jelas dan mudah diganti.
- **Terbuka**: apakah website perlu di-deploy online (butuh hosting) atau cukup dijalankan lokal saat momen kejutan? Ini akan menentukan apakah perlu setup deployment.
- **Terbuka**: apakah lagu untuk music player akan berupa file audio yang diunggah sendiri, atau sekadar link ke platform streaming? Ini menentukan pendekatan teknis music player.
- **Terbuka**: berapa banyak foto/video kira-kira yang akan dimasukkan? Ini memengaruhi apakah perlu strategi loading/lazy-load khusus.

## 13. Agent Build Spec (untuk AI Coding Agent)

### 13.1 Tech Stack & Constraints
- **Framework**: React (greenfield, dari nol). Styling bebas dipilih agent (disarankan CSS Modules atau Tailwind untuk kecepatan build), asal konsisten dan mendukung animasi halus.
- **Codebase**: mulai dari nol, tidak ada kode existing yang perlu diintegrasikan.
- **Infra/Deployment**: belum ditentukan user (lihat Open Questions) — agent boleh membangun sebagai aplikasi React standar yang bisa dijalankan lokal (`npm run dev`) dan disiapkan agar mudah di-build untuk deploy static hosting (Vercel/Netlify) kalau nanti dibutuhkan.

### 13.2 Data Model
Karena tidak ada backend, data disimpan sebagai konfigurasi lokal (JS/JSON) di dalam project:

| Entitas | Field | Tipe | Keterangan |
|---------|-------|------|------------|
| GalleryItem | src | string | path/URL ke file foto atau video |
| GalleryItem | type | string | `"photo"` atau `"video"` |
| GalleryItem | caption | string | keterangan singkat, opsional |
| Song | title | string | judul lagu |
| Song | src | string | path/URL ke file audio |
| QuizQuestion | question | string | teks pertanyaan |
| QuizQuestion | options | string[] | daftar opsi jawaban |
| QuizQuestion | correctIndex | number | index jawaban benar |
| LoveLetter | pin | string | PIN/password untuk membuka surat |
| LoveLetter | content | string | isi teks surat |

Relasi: semua entitas berdiri sendiri (tidak ada relasi antar-entitas), disimpan sebagai satu file konfigurasi konten (mis. `content.js`) yang mudah diedit pembuat.

### 13.3 API / Integration Contracts
Tidak ada API eksternal wajib di Fase 1–3 (semua data lokal/statis). Jika ke depan dibutuhkan penyimpanan media besar di luar bundle aplikasi, itu di luar scope versi ini (lihat Section 12).

### 13.4 Task Breakdown (Checklist untuk Agent)

**Fase 1**
- [ ] **TASK-1**: Setup project React baru dengan struktur folder dasar (components, assets, content config).
  - **Acceptance criteria**: `npm run dev` berhasil menjalankan aplikasi kosong tanpa error.
- [ ] **TASK-2**: Buat file konfigurasi konten (`content.js`) berisi struktur data dummy untuk galeri, lagu, kuis, dan surat sesuai Data Model di 13.2.
  - **Acceptance criteria**: file berisi minimal 3 item galeri dummy, 1 lagu dummy, 3 pertanyaan kuis dummy, dan 1 surat dummy dengan PIN contoh.
- [ ] **TASK-3**: Buat komponen Landing/Welcome Screen dengan sapaan personal dan tombol mulai.
  - **Acceptance criteria**: halaman tampil saat aplikasi dibuka, tombol mulai berfungsi mengarahkan/scroll ke section berikutnya.
  - **Depends on**: TASK-1
- [ ] **TASK-4**: Buat komponen Galeri Foto & Video dengan grid/carousel dan lightbox preview.
  - **Acceptance criteria**: item galeri dari `content.js` tampil, klik item membuka preview lebih besar, caption tampil jika ada.
  - **Depends on**: TASK-2
- [ ] **TASK-5**: Buat komponen Music Player dengan kontrol play/pause dan next/prev.
  - **Acceptance criteria**: lagu dari `content.js` bisa diputar/dijeda, tombol next/prev berfungsi jika lagu lebih dari satu.
  - **Depends on**: TASK-2
- [ ] **TASK-6**: Buat komponen Surat Cinta Terkunci dengan form input PIN dan validasi.
  - **Acceptance criteria**: input PIN salah menampilkan pesan error, PIN benar menampilkan konten surat dengan animasi reveal.
  - **Depends on**: TASK-2

**Fase 2**
- [ ] **TASK-7**: Buat komponen Quiz dengan pertanyaan pilihan ganda dan skor akhir.
  - **Acceptance criteria**: user bisa menjawab semua pertanyaan dari `content.js`, skor dihitung benar, pesan penutup personal tampil di akhir apa pun skornya.
  - **Depends on**: TASK-2

**Fase 3**
- [ ] **TASK-8**: Satukan semua section (landing, galeri, musik, kuis, surat) dalam satu alur navigasi/scroll yang mulus.
  - **Acceptance criteria**: user bisa berpindah antar section tanpa reload halaman, transisi terasa halus (tidak patah-patah).
  - **Depends on**: TASK-3, TASK-4, TASK-5, TASK-6, TASK-7
- [ ] **TASK-9**: Terapkan styling tema romantis (warna, tipografi) dan pastikan tampilan responsif di layar mobile.
  - **Acceptance criteria**: aplikasi tampil rapi tanpa elemen terpotong pada lebar layar 375px (mobile) hingga desktop.
  - **Depends on**: TASK-8
- [ ] **TASK-10**: Tambahkan detail dekoratif (animasi ambient ringan) tanpa mengganggu performa.
  - **Acceptance criteria**: animasi berjalan halus (tidak menyebabkan lag terlihat) di perangkat mobile standar.
  - **Depends on**: TASK-9

### 13.5 Edge Cases & Error Handling
- PIN surat cinta salah dimasukkan berkali-kali → tetap tampilkan pesan error ramah, tidak ada lockout (karena ini bukan sistem keamanan sungguhan).
- File media (foto/video/lagu) gagal dimuat → tampilkan fallback (placeholder image/ikon) agar tidak merusak layout.
- Kuis dijawab tanpa memilih opsi → tombol "lanjut" nonaktif sampai user memilih jawaban.
- Autoplay musik diblokir browser (kebijakan umum browser modern) → sediakan tombol play manual sebagai fallback.

### 13.6 Batas Otonomi Agent (Guardrails)
- **Boleh diputuskan sendiri oleh agent**: pilihan library styling (CSS Modules/Tailwind/dll), struktur folder detail, jenis animasi/transisi spesifik, layout persis galeri (grid vs carousel), konten placeholder dummy.
- **Wajib dikonfirmasi ke user dulu**: keputusan deploy ke hosting publik (karena menyangkut privasi foto/pesan pribadi), penambahan dependency besar di luar React inti (mis. backend/database), dan perubahan besar pada struktur data konten yang akan memengaruhi cara user mengisi kontennya sendiri.