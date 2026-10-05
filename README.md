# Website Company Profile — Koperasi Produsen Dirga Pangan Mandiri

Website company profile resmi untuk **Koperasi Produsen Dirga Pangan Mandiri**, koperasi produsen agribisnis peternakan ayam broiler terpadu berbasis kemitraan adil, fasilitas kandang modern *closed-house*, dan penanganan pasokan pangan higienis di Jawa Barat.

---

## 📋 Ikhtisar Proyek

Situs ini dibangun dengan arsitektur web modern berkinerja tinggi, mengutamakan kredibilitas kelembagaan berbadan hukum, transparansi operasional peternakan, serta konversi kemitraan B2B (restoran, katering, hotel, distributor) dan peternak plasma binaan.

- **Status Rilis:** Siap Produksi (Production Ready — Static Export)
- **Target Hosting:** Vercel (Hobby Tier — 100% Static HTML/CSS/JS, Rp 0/bulan)
- **Bahasa Situs:** Bahasa Indonesia (ID)
- **Desain:** Editorial minimalis modern berbasis *Warm Cream Canvas* (`#F8F8F2`), *Studio Ink* (`#1A1A1A`), dan aksen *Agri Green* (`#166534`).

---

## 🌟 Fitur Utama

1. **Struktur Halaman Lengkap (6 Rute Utama):**
   - **Beranda (`/`):** Hero tipografi berwibawa, 3 pilar keunggulan, capaian metrik angka kapasitas, ringkasan spesifikasi komoditas (Live Bird & Karkas Segar), kutipan integritas pengurus, cuplikan galeri, dan banner ajakan kemitraan.
   - **Profil (`/profil`):** Sejarah pendirian, visi & misi kelembagaan, 4 nilai inti koperasi, rincian legalitas resmi (NIB, AHU Kemenkop, Akta Notaris, IUP), serta protokol biosecurity 4 tingkat.
   - **Usaha & Kemitraan (`/usaha`):** Rantai pasok terpadu hulu-ke-hilir, spesifikasi teknis bobot komoditas, keunggulan teknologi otomasi kandang *closed-house*, alur 4 langkah kemitraan peternak plasma, dan Accordion FAQ interaktif.
   - **Keorganisasian (`/organisasi`):** Bagan struktur tata kelola hierarkis (RAT, Dewan Pengawas, Pengurus Inti, Pengelola Teknis), kartu profil dewan pengurus, dan komitmen *Good Cooperative Governance*.
   - **Galeri Dokumentasi (`/galeri`):** Tab filter kategori foto interaktif (*Fasilitas Kandang*, *Proses Panen*, *Kegiatan Anggota*), grid responsif dengan rasio aspek konsisten (16:9 & 4:3), serta Lightbox Modal interaktif dengan dukungan navigasi keyboard (`Esc`).
   - **Kontak & Lokasi (`/kontak`):** Detail kantor sekretariat dan sentra kandang Subang, formulir konsultasi kemitraan dengan validasi client-side, generator tautan WhatsApp resmi otomatis, tombol fallback `mailto:`, anti-spam honeypot, dan embed Google Maps responsif.

2. **Aksesibilitas & Komunikasi Instan:**
   - *Floating WhatsApp Action Button* dengan indikator status berdenyut (*pulse*) dan pesan default terformat otomatis.
   - Aksesibilitas WCAG 2.1 Level AA (*Skip to main content*, rasio kontras teks 15.3:1, fokus navigasi keyboard yang jelas).

3. **SEO On-Page & Kredibilitas Digital:**
   - Meta Title, Description, dan Canonical URL unik di setiap halaman.
   - Open Graph (OG) & Twitter Cards lengkap dengan banner visual 1200x630px.
   - Structured Data Schema.org (JSON-LD) `@graph` (`Organization` & `LocalBusiness`).
   - Auto-generated `sitemap.xml` dan `robots.txt` ramah mesin pencari.
   - Halaman 404 kustom bertema senada dengan navigasi pemulihan cepat.

---

## 🛠️ Tech Stack & Arsitektur

| Komponen | Teknologi |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router, Static Export `output: 'export'`) |
| **Bahasa Pemrograman** | [TypeScript](https://www.typescriptlang.org/) (Strict Type Checking) |
| **Styling & Desain** | [Tailwind CSS 3.4](https://tailwindcss.com/) dengan Token Desain Kustom |
| **Komponen UI Primitif** | Desain editorial modular terinspirasi [shadcn/ui](https://ui.shadcn.com/) |
| **Ikonografi** | [Lucide React](https://lucide.dev/) |
| **Font Tipografi** | [Inter via next/font/google](https://fonts.google.com/specimen/Inter) (*Zero Cumulative Layout Shift*) |
| **Data Hub** | `src/content/site-data.ts` (*Single Source of Truth*) |
| **Hosting & CDN** | Vercel Edge Network |

---

## 📂 Struktur Direktori

```text
├── docs/                 # Dokumentasi spesifikasi lengkap (00-BRIEF s/d 04-TASKS)
├── public/               # Aset statis publik
│   ├── images/           # Banner Open Graph (og-dirga-pangan.jpg)
│   └── robots.txt        # Direktif crawler perayap mesin pencari
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout, font Inter, navbar, footer, JSON-LD
│   │   ├── page.tsx      # SCR-001: Beranda
│   │   ├── profil/       # SCR-002: Profil & Legalitas
│   │   ├── usaha/        # SCR-003: Usaha & Kemitraan
│   │   ├── organisasi/   # SCR-004: Keorganisasian & Pengurus
│   │   ├── galeri/       # SCR-005: Galeri Dokumentasi
│   │   ├── kontak/       # SCR-006: Kontak, Form & Peta
│   │   ├── not-found.tsx # Halaman 404 Kustom
│   │   ├── icon.svg      # Favicon vektor resmi
│   │   └── sitemap.ts    # Route generator sitemap.xml otomatis
│   ├── components/       # Komponen UI modular
│   │   ├── layout/       # Navbar.tsx, Footer.tsx
│   │   ├── sections/     # ContactForm.tsx, GalleryView.tsx
│   │   ├── shared/       # Container, SectionHeading, StatCard, FeatureCard, WhatsAppFloating
│   │   └── ui/           # Button.tsx, Accordion.tsx, LightboxModal.tsx
│   ├── content/          # site-data.ts (Single Source of Truth seluruh konten)
│   ├── lib/              # utils.ts (helper cn untuk tailwind-merge)
│   └── styles/           # globals.css (CSS design tokens & keyframe animations)
├── next.config.mjs       # Konfigurasi Next.js static export
├── tailwind.config.ts    # Konfigurasi tokens warna, spacing, & border-radius
├── tsconfig.json         # Konfigurasi compiler TypeScript
├── vercel.json           # Security headers konfigurasi deployment Vercel
└── README.md             # Dokumentasi panduan operasional proyek
```

---

## 🚀 Panduan Memulai Cepat

### Prasyarat
- Node.js versi 18.17+ atau 20+
- npm versi 9+

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Menjalankan Server Pengembangan (Dev)
```bash
npm run dev
```
Buka browser di `http://localhost:3000` untuk melihat antarmuka secara lokal.

### 3. Verifikasi Kualitas Kode (QA)
```bash
# Pengecekan tipe data TypeScript
npx tsc --noEmit

# Pengecekan gaya dan kualitas kode ESLint
npm run lint
```

### 4. Melakukan Static Build (Produksi)
```bash
npm run build
```
Perintah ini akan mengompilasi seluruh halaman menjadi artefak HTML, CSS, JS, SVG, dan XML murni di dalam folder `out/`.

### 5. Menjalankan Pratinjau Build Statis
```bash
npx serve out
```
Buka URL pratinjau yang tertera (biasanya `http://localhost:3000`) untuk menguji perilaku live static export.

---

## ✏️ Panduan Memperbarui Konten

Seluruh data teks, identitas lembaga, nomor telepon/WhatsApp, alamat kantor, daftar legalitas resmi, harga/bobot komoditas, struktur pengurus, dan dokumentasi foto dikelola terpusat di satu file:

📁 **`src/content/site-data.ts`**

Contoh pembaruan nomor WhatsApp resmi koperasi:
```ts
// src/content/site-data.ts
export const contactData = {
  phoneDisplay: "+62 812-3456-7890", // Tampilan teks
  phoneRaw: "6281234567890",         // Format digit internasional tanpa tanda +
  email: "kontak@dirgapangan.id",
  // ...
};
```
Setelah mengubah data pada file tersebut, jalankan kembali `npm run build` untuk memperbarui seluruh halaman secara instan.

---

## 🔒 Konfigurasi Keamanan & Deployment Vercel

Situs ini menerapkan kebijakan keamanan statis tingkat tinggi melalui `vercel.json`:
- `X-Frame-Options: DENY` (Mencegah serangan *clickjacking*)
- `X-Content-Type-Options: nosniff` (Mencegah *MIME-type sniffing*)
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- Enforce HTTPS 100% via Vercel Edge TLS.

---

## 📄 Lisensi & Hak Cipta

© 2026 Koperasi Produsen Dirga Pangan Mandiri. Seluruh hak cipta dilindungi undang-undang.
#   K o p e r a s i - P r o d u s e n - D i r g a - P a n g a n - M a n d i r i  
 