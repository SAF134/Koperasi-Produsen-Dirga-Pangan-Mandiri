# Tech Stack, Deployment, & Security: Website Koperasi Produsen Dirga Pangan Mandiri

Dokumen ini mendefinisikan arsitektur teknis, dependensi perangkat lunak, konfigurasi ekspor statis, penanganan formulir, dan strategi deployment untuk memastikan pemenuhan seluruh NFR (*Non-Functional Requirements*) secara sederhana, stabil, dan tanpa biaya operasional berulang (*Rp 0 operational cost*).

---

## 1. Pilihan Stack & Rasionalisasi NFR

### 1.1 Stack Utama (Rekomendasi Terpilih)

| Lapisan / Komponen | Teknologi Terpilih | Versi Stabil Target | Alasan & Korelasi NFR |
|---|---|---|---|
| **Framework** | Next.js (App Router, Static Export) | `14.2.x` / `15.x` | Menghasilkan file statis murni (`output: 'export'`) dengan TTFB ultra cepat (< 50ms di CDN), zero server maintenance, dan pemenuhan `NFR-001` & `NFR-006`. |
| **Bahasa** | TypeScript | `^5.x` | Type-safety ketat, mencegah runtime error pada struktur data konten (`site-data.ts`), dan mempercepat autocompletion komponen. |
| **Styling** | Tailwind CSS | `^3.4.x` | Zero runtime overhead CSS, utilitas kelas berbasis tokens yang ringkas, serta kemudahan implementasi tata letak responsif (`NFR-002`). |
| **UI Primitives** | Radix UI / shadcn/ui | Komponen Terkurasi | Aksesibilitas bawaan standar industri (keyboard navigation, ARIA attributes) untuk Dialog, Accordion, dan Drawer (`NFR-003`). |
| **Ikon Modular** | Lucide React | `^0.400.x` | Ikon SVG bersih, ukuran bundle sangat ringan berkat tree-shaking otomatis, konsisten dengan gaya desain editorial. |
| **Manajemen Konten** | Structured TypeScript Data (`site-data.ts`) | Native | *Single Source of Truth*. Konten dapat diedit langsung oleh pemilik tanpa butuh CMS eksternal yang kompleks. |

### 1.2 Alternatif yang Dipertimbangkan

1. **Astro (Static Site Generator):**
   - *Kelebihan:* Zero JS default, kecepatan optimal untuk halaman statis.
   - *Alasan Tidak Dipilih:* Pengguna secara spesifik menetapkan preferensi Next.js + React ecosystem (shadcn/ui), dan Next.js Static Export sudah terbukti mampu mencapai skor Lighthouse 95–100 untuk company profile.
2. **Vite + React SPA (Single Page Application):**
   - *Kelebihan:* Setup tooling sangat ringan.
   - *Alasan Tidak Dipilih:* Kurang optimal untuk SEO bawaan (`NFR-005`), karena membutuhkan server prerender atau SSR untuk menghasilkan tag HTML Open Graph dan meta per-halaman yang ramah crawler mesin pencari.

---

## 2. Struktur Folder Proyek

```text
Website-Koperasi-Produsen-Dirga-Pangan-Mandiri/
├── docs/                               # Seluruh dokumen perencanaan (Playbook)
│   ├── 00-BRIEF.md
│   ├── 01-PRD.md
│   ├── 02-DESIGN.md
│   ├── 03-TECH_STACK.md
│   └── 04-TASKS.md
├── public/                             # Aset statis yang disajikan langsung oleh browser
│   ├── images/                         # Aset foto fasilitas, panen, profil pengurus
│   ├── og-dirga-pangan.jpg             # Aset pratinjau media sosial (1200x630px)
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/                            # Next.js App Router (Halaman & Routing)
│   │   ├── layout.tsx                  # Root layout, Google Font Inter, Navbar & Footer
│   │   ├── page.tsx                    # Beranda (SCR-001)
│   │   ├── profil/page.tsx             # Profil Koperasi (SCR-002)
│   │   ├── usaha/page.tsx              # Usaha & Produksi (SCR-003)
│   │   ├── organisasi/page.tsx         # Keorganisasian (SCR-004)
│   │   ├── galeri/page.tsx             # Galeri Foto (SCR-005)
│   │   ├── kontak/page.tsx             # Kontak & Lokasi (SCR-006)
│   │   └── not-found.tsx               # Halaman 404 Kustom
│   ├── components/                     # Komponen Modular UI
│   │   ├── ui/                         # Komponen basis shadcn (button, card, dialog, accordion)
│   │   ├── layout/                     # Navbar, Footer, MobileNav
│   │   ├── shared/                     # SectionHeading, Container, WhatsAppButton, StatusBadge
│   │   └── sections/                   # HeroSection, ValueProps, StatCounter, GalleryGrid, ContactForm
│   ├── content/
│   │   └── site-data.ts                # PUSAT DATA TUNGGAL: Teks, legalitas, nomor WA, alamat
│   ├── lib/
│   │   └── utils.ts                    # Helper clsx & tailwind-merge (cn)
│   └── styles/
│       └── globals.css                 # Import Tailwind & CSS custom properties (Tokens)
├── AGENTS.md                           # Panduan kerja agent implementasi
├── README.md                           # Dokumentasi proyek & quick start
├── next.config.mjs                     # Konfigurasi Next.js (output: 'export', security headers)
├── package.json                        # Definisi dependensi & skrip npm
├── postcss.config.mjs
├── tailwind.config.ts                  # Pemetaan design tokens ke kelas Tailwind
└── tsconfig.json                       # Konfigurasi TypeScript compiler
```

---

## 3. Penanganan Formulir Kontak & Anti-Spam

Karena website berjalan sebagai situs statis murni (*Static Export* tanpa database backend mandiri), penanganan interaksi kontak dirancang melalui alur yang andal dan ramah pengguna:

### 3.1 Skema Pengiriman (Dual Strategy)
1. **Primer (Direct WhatsApp Formatter):**
   - Saat pengunjung mengisi formulir (Nama, Perusahaan, Kategori Kebutuhan, Pesan) dan menekan *"Kirim via WhatsApp"*, skrip client-side memformat pesan secara rapi:
     ```text
     Halo Tim Koperasi Produsen Dirga Pangan Mandiri,
     Nama: [Nama Pengunjung]
     Usaha/Perusahaan: [Nama Usaha]
     Kategori: [Pemesanan Karkas / Kemitraan]
     Pesan: [Isi Pesan]
     ```
   - Browser secara otomatis membuka API WhatsApp resmi (`https://wa.me/62812XXXXXXXX?text=...`).
   - *Keuntungan:* 100% reliabel, interaksi instan dua arah, tidak ada kegagalan kirim email server.
2. **Sekunder / Fallback (Direct Mailto Action):**
   - Menggunakan tautan aksi `mailto:` langsung berformat terstruktur (`mailto:kontak@dirgapangan.id?subject=...&body=...`) sebagai fallback murni tanpa memerlukan ketergantungan pada backend database maupun layanan form pihak ketiga (zero external dependency).

### 3.2 Pertahanan Anti-Spam & Keamanan Form
- **Honeypot Field:** Menyertakan input field tersembunyi berlabel `fax_number` atau `company_website` dengan styling `display: none !important; opacity: 0; pointer-events: none;`. Jika field ini terisi saat form disubmit, sistem mendeteksi input bot otomatis dan langsung membatalkan proses.
- **Validasi Ketat Client-Side:**
  - Nama: Wajib diisi, minimal 3 karakter.
  - Nomor WhatsApp: Validasi regex nomor Indonesia (`/^(\+62|62|0)8[1-9][0-9]{6,10}$/`).
  - Pesan: Minimal 10 karakter, maksimal 1000 karakter.
- **Sanitasi Data:** Melakukan escape string terhadap karakter spesial HTML untuk mencegah potensi *Cross-Site Scripting* (XSS) sebelum diteruskan ke WhatsApp URI.
- **Nir-Penyimpanan Data Sensitif:** Data pengunjung tidak disimpan di local storage atau server publik manapun.

---

## 4. Strategi Optimasi (Performa & Web Vitals)

1. **Format & Kompresi Gambar:**
   - Semua gambar foto menggunakan format modern **WebP** atau **AVIF** dengan tingkat kompresi kualitas 80–85%.
   - Dimensi gambar disesuaikan dengan kontainer: gambar hero beresolusi maksimal 1600x900px, kartu galeri/profil beresolusi maksimal 800x600px.
2. **Lazy-Loading Cerdas:**
   - Seluruh gambar di bawah lipatan layar (*below-the-fold*) memiliki atribut native `loading="lazy"` dan `decoding="async"`.
   - Gambar pada Hero Banner diberikan prioritas `priority={true}` (atau `fetchpriority="high"`) untuk menjamin skor LCP (*Largest Contentful Paint*) < 2.0 detik.
3. **Optimasi Tipografi (Zero CLS):**
   - Menggunakan `next/font/google` dengan subset `latin` dan `display: 'swap'`. Font diunduh saat build-time dan di-host secara lokal/self-hosted oleh Next.js, meniadakan ketergantungan koneksi eksternal ke server Google Fonts saat runtime.
4. **Ukuran Bundle (Tree-Shaking):**
   - Mengimpor ikon Lucide secara individual (misal `import { Check, Phone } from 'lucide-react'`).
   - Target total initial bundle JavaScript: **< 85 KB gzipped**.

---

## 5. Deployment & Operasional

| Aspek | Spesifikasi Teknis |
|---|---|
| **Hosting Platform** | **Vercel** (Hobby Plan — Gratis) |
| **Metode Build** | Static Export (`output: 'export'` di `next.config.mjs` menghasilkan folder `/out`) |
| **Domain & DNS** | Domain Koperasi (opsional, misal `dirgapangan.id`) dipetakan via CNAME/A Record ke Vercel Edge Network |
| **Sertifikat SSL** | Otomatis diterbitkan dan diperbarui via Let's Encrypt / Vercel Edge TLS (Enforce HTTPS) |
| **CI/CD Pipeline** | Otomatis membangun (*auto-deploy*) setiap kali ada `git push` ke branch `main` |
| **Pratinjau (Preview)** | Setiap branch fitur atau pull request secara otomatis menghasilkan URL *Preview Deployment* |
| **Rollback** | Kemampuan *Instant Rollback* 1-klik ke versi stabil sebelumnya melalui dashboard Vercel jika terjadi kendala produksi |

---

## 6. Keamanan Dasar (Security Baseline)

1. **Enforce HTTPS:** Seluruh trafik HTTP secara otomatis dialihkan ke HTTPS dengan TLS 1.3.
2. **Security Headers (dikonfigurasi via `vercel.json`):**
   *Catatan Arsitektur:* Karena Next.js menggunakan `output: 'export'`, konfigurasi `headers` di dalam `next.config.mjs` tidak didukung oleh compiler statis Next.js. Seluruh security headers dikonfigurasi melalui file `vercel.json` di root:
   ```json
   {
     "headers": [
       {
         "source": "/(.*)",
         "headers": [
           { "key": "X-Frame-Options", "value": "DENY" },
           { "key": "X-Content-Type-Options", "value": "nosniff" },
           { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
           { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
         ]
       }
     ]
   }
   ```
3. **Zero Secrets in Repository:** Mengingat situs merupakan static export tanpa database, tidak ada database password, API key rahasia, atau credentials privat yang disimpan di repositori.
4. **Pemeriksaan Dependensi:** Memastikan rutin menjalankan `npm audit` untuk mencegah dependensi dengan celah keamanan kritis (*zero high/critical vulnerabilities*).

---

## 7. Estimasi Biaya Bulanan (Monthly Cost Breakdown)

| Layanan / Kebutuhan | Penyedia / Opsi | Biaya Bulanan |
|---|---|---|
| **Hosting & Global CDN** | Vercel (Hobby Tier) | **Rp 0** |
| **Sertifikat SSL / TLS** | Vercel Edge SSL | **Rp 0** |
| **Form Handling & WhatsApp API** | Direct WhatsApp Web/App Link | **Rp 0** |
| **Analitik Pengunjung** | Cloudflare Web Analytics / Vercel Analytics (Tingkat Dasar) | **Rp 0** |
| **Domain Koperasi (`.id` / `.com`)** | Registrar Resmi (PANDI / Niagahoster / Idwebhost) | ~Rp 15.000 – Rp 25.000 / bulan *(dibayar Rp 180.000–Rp 300.000 per tahun)* |
| **TOTAL BIAYA OPERASIONAL MVP** | — | **Rp 0 / bulan** *(hanya biaya domain tahunan saat live)* |

---

## 8. Panduan Pengujian & Verifikasi (Quality Assurance Protocol)

Sebelum setiap rilis atau saat menyelesaikan task implementasi, rangkaian verifikasi berikut wajib dieksekusi:

1. **Type Checking:**
   ```bash
   npx tsc --noEmit
   ```
   *Ekspektasi:* 0 error TypeScript.
2. **Linting:**
   ```bash
   npm run lint
   ```
   *Ekspektasi:* Lolos tanpa error atau warning kritis.
3. **Production Static Build:**
   ```bash
   npm run build
   ```
   *Ekspektasi:* Berhasil menghasilkan artefak statis di folder `out/` dengan exit code 0.
4. **Verifikasi Tautan Rusak (Broken Link Check):**
   Memastikan seluruh navigasi antar 6 rute (`/`, `/profil`, `/usaha`, `/organisasi`, `/galeri`, `/kontak`) serta tautan footer dan tombol CTA terhubung tanpa menghasilkan 404 yang tidak disengaja.
5. **Audit Google Lighthouse (Chrome DevTools Incognito):**
   - Performance: ≥ 90 (Mobile) / ≥ 95 (Desktop)
   - Accessibility: ≥ 92
   - Best Practices: 100
   - SEO: 100
6. **Pengujian Perangkat Nyata (Real Device Testing):**
   Membuka build lokal (`npx serve out`) pada minimal 1 smartphone fisik (atau emulasi jaringan lokal) untuk menguji kemudahan sentuhan tombol navigasi dan keakuratan deep-link WhatsApp.
