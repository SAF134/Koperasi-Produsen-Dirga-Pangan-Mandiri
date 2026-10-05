# Implementation Tasks: Website Koperasi Produsen Dirga Pangan Mandiri

Dokumen ini memecah seluruh pekerjaan implementasi menjadi task-task modular terstruktur. Setiap task dirancang untuk dikerjakan dalam **1 sesi agent** dengan batasan ruang lingkup yang jelas dan kriteria penerimaan (_Acceptance Criteria_) yang dapat diverifikasi secara objektif.

---

## Ringkasan Roadmap & Dependensi

```text
[T-001: Inisialisasi Proyek & Tooling]
   └── [T-002: Design Tokens & Hub Konten Data]
         └── [T-003: Layout Global (Navbar, Footer, Floating WA)]
               └── [T-004: Komponen Reusable UI]
                     ├── [T-005: Halaman Beranda (/)]
                     ├── [T-006: Halaman Profil (/profil)]        (Dapat dikerjakan paralel)
                     ├── [T-007: Halaman Usaha (/usaha)]          (Dapat dikerjakan paralel)
                     ├── [T-008: Halaman Organisasi (/organisasi)](Dapat dikerjakan paralel)
                     ├── [T-009: Halaman Galeri (/galeri)]        (Dapat dikerjakan paralel)
                     └── [T-010: Halaman Kontak (/kontak)]        (Dapat dikerjakan paralel)
                           └── [T-011: SEO Teknis, 404, Sitemap & Metadata]
                                 └── [T-012: QA Akhir, Audit Lighthouse & Kesiapan Rilis]
```

---

### T-001 — Inisialisasi Repositori Next.js & Tooling Dasar

- **Terkait:** `NFR-006` | **Dependensi:** Tidak ada
- **Dokumen yang WAJIB dibaca:** `docs/03-TECH_STACK.md`
- **Ruang Lingkup:**
  - _Termasuk:_ Setup project Next.js dengan App Router, TypeScript, Tailwind CSS, utilitas `clsx` & `tailwind-merge` (`cn`), Lucide Icons, serta konfigurasi static export (`output: 'export'` di `next.config.mjs`).
  - _TIDAK termasuk:_ Pembuatan komponen halaman atau penulisan konten.
- **Acceptance Criteria:**
  - [x] Project Next.js terkonfigurasi dengan TypeScript tanpa error.
  - [x] `next.config.mjs` memiliki konfigurasi `output: 'export'` dan `images: { unoptimized: true }` (khusus mode static).
  - [x] File `vercel.json` dibuat di root untuk mendefinisikan security headers (mencegah bentrok compiler Next.js pada static export).
  - [x] Tailwind CSS dan PostCSS terpasang dan berfungsi.
  - [x] Perintah `npm run build` sukses menghasilkan folder `out/`.
- **Perintah Verifikasi:**
  ```bash
  npm run lint
  npx tsc --noEmit
  npm run build
  ```

---

### T-002 — Konfigurasi Design Tokens, Global CSS, & Hub Konten Terpusat

- **Terkait:** `NFR-002`, `NFR-003` | **Dependensi:** `T-001`
- **Dokumen yang WAJIB dibaca:** `docs/02-DESIGN.md`, `docs/03-TECH_STACK.md`
- **Ruang Lingkup:**
  - _Termasuk:_
    1. Konfigurasi `tailwind.config.ts` dan `src/styles/globals.css` dengan token warna (`--color-canvas` `#f8f8f2`, `--color-ink` `#1a1a1a`, `--color-agri-green` `#166534`, dll.) dan skala radius/spasi.
    2. Pembuatan file `src/content/site-data.ts` sebagai _Single Source of Truth_ yang memuat seluruh teks profil, visi-misi, rincian produk broiler, data kepengurusan, daftar galeri foto placeholder, legalitas, dan informasi kontak resmi/placeholder.
  - _TIDAK termasuk:_ Komponen visual UI.
- **Acceptance Criteria:**
  - [x] Variabel CSS tokens di `globals.css` terdefinisi dan terpapar di Tailwind class (`bg-canvas`, `text-ink`, `text-agri-green`, dll.).
  - [x] File `site-data.ts` memiliki tipe data TypeScript ketat (_strongly typed_) dan memuat seluruh data awal dari dokumen Brief & PRD.
- **Perintah Verifikasi:**
  ```bash
  npx tsc --noEmit
  npm run lint
  npm run build
  ```

---

### T-003 — Implementasi Layout Global (Navbar, Footer, & Floating WhatsApp)

- **Terkait:** `FR-001`, `FR-002`, `FR-003`, `NFR-002`, `NFR-003` | **Dependensi:** `T-002`
- **Dokumen yang WAJIB dibaca:** `docs/02-DESIGN.md` (Bagian 2 & 3), `docs/01-PRD.md`
- **Ruang Lingkup:**
  - _Termasuk:_
    1. Komponen `Navbar` responsif: wordmark logo, menu link desktop, indikator status _Live Green Dot_ ("Pasokan Aktif"), serta Mobile Drawer/Hamburger menu.
    2. Komponen `Footer`: 3 kolom informasi (tentang koperasi, tautan navigasi, kontak) dan hak cipta.
    3. Komponen `WhatsAppFloating`: Tombol WhatsApp mengambang di pojok kanan bawah dengan z-index tinggi dan target sentuh ramah seluler.
    4. Integrasi ke `src/app/layout.tsx`.
  - _TIDAK termasuk:_ Konten halaman individual.
- **Acceptance Criteria:**
  - [x] Navbar menempel di atas layar (_sticky/fixed_) dengan latar warm cream ber-backdrop blur halus.
  - [x] Menu seluler dapat dibuka/tutup dengan transisi mulus dan ramah aksesibilitas keyboard/ARIA.
  - [x] Floating WA muncul di semua rute dan mengarah ke URL `https://wa.me/...`.
- **Perintah Verifikasi:**
  ```bash
  npx tsc --noEmit
  npm run lint
  npm run build
  ```

---

### T-004 — Pembuatan Komponen Reusable UI

- **Terkait:** `FR-007`, `FR-008`, `NFR-003` | **Dependensi:** `T-002`, `T-003`
- **Dokumen yang WAJIB dibaca:** `docs/02-DESIGN.md` (Bagian 5)
- **Ruang Lingkup:**
  - _Termasuk:_
    1. `Container` dan `SectionHeading` (dengan eyebrow badge opsional).
    2. `Button` (varian Dark Studio Ink & Outlined Surface).
    3. `StatCard` (angka besar + label metrik).
    4. `FeatureCard` (kartu layanan/produk dengan 1px border halus dan hover subtle).
    5. `Accordion` (komponen tanya-jawab FAQ).
    6. `LightboxModal` (modal perbesaran gambar galeri dengan backdrop gelap dan tombol close).
  - _TIDAK termasuk:_ Perangkaian halaman spesifik.
- **Acceptance Criteria:**
  - [x] Setiap komponen menerima props dengan type definition TypeScript lengkap.
  - [x] Komponen tombol dan kartu memenuhi rasio kontras WCAG AA (≥ 4.5:1).
  - [x] Accordion dapat dibuka-tutup dengan animasi transisi yang menghormati `prefers-reduced-motion`.
- **Perintah Verifikasi:**
  ```bash
  npx tsc --noEmit
  npm run lint
  npm run build
  ```

---

### T-005 — Implementasi Halaman Beranda (`SCR-001` - `/`)

- **Terkait:** `FR-001`, `FR-002`, `FR-006`, `FR-012`, `SCR-001` | **Dependensi:** `T-003`, `T-004`
- **Dokumen yang WAJIB dibaca:** `docs/01-PRD.md` (SCR-001), `docs/02-DESIGN.md` (SCR-001 wireframe)
- **Ruang Lingkup:**
  - _Termasuk:_ Halaman `src/app/page.tsx` memuat: Hero typography dengan live status dot, 3 Pilar Keunggulan, Sekilas Komoditas & Kapasitas Ayam Broiler, 4 Metrik Kunci, Cuplikan Galeri Terpilih, dan Banner CTA Kemitraan.
  - _TIDAK termasuk:_ Halaman sub-rute lainnya.
- **Acceptance Criteria:**
  - [x] Seluruh bagian tampil sesuai wireframe ASCII `SCR-001`.
  - [x] Seluruh data teks dan angka ditarik langsung dari `site-data.ts` (termasuk status mutu "Higienis & Terstandar").
  - [x] Memiliki tepat 1 tag `<h1>` semantik dan seluruh gambar memiliki atribut `alt` deskriptif.
  - [x] Tampilan responsif sempurna di viewport mobile (360px) dan desktop (1200px).
- **Perintah Verifikasi:**
  ```bash
  npx tsc --noEmit
  npm run lint
  npm run build
  ```

---

### T-006 — Implementasi Halaman Profil Koperasi (`SCR-002` - `/profil`)

- **Terkait:** `FR-004`, `FR-012`, `SCR-002` | **Dependensi:** `T-003`, `T-004` _(Dapat Paralel)_
- **Dokumen yang WAJIB dibaca:** `docs/01-PRD.md` (SCR-002), `docs/02-DESIGN.md` (SCR-002 wireframe)
- **Ruang Lingkup:**
  - _Termasuk:_ Halaman `src/app/profil/page.tsx` memuat: Sejarah & latar belakang pendirian, Visi & Misi, Nilai-nilai inti koperasi, Kartu Kredensial Legalitas (NIB, Akta, AHU Kemenkop), dan Komitmen Biosecurity & Kesejahteraan Ternak.
- **Acceptance Criteria:**
  - [x] Bagian legalitas menyajikan nomor registrasi dengan format kartu terstruktur dan jelas.
  - [x] Memiliki tepat 1 tag `<h1>` semantik dan seluruh gambar memiliki atribut `alt` deskriptif.
  - [x] Navigasi breadcrumb atau kembali ke beranda berfungsi baik.
- **Perintah Verifikasi:**
  ```bash
  npx tsc --noEmit
  npm run lint
  npm run build
  ```

---

### T-007 — Implementasi Halaman Usaha & Produksi (`SCR-003` - `/usaha`)

- **Terkait:** `FR-006`, `FR-007`, `FR-012`, `SCR-003` | **Dependensi:** `T-003`, `T-004` _(Dapat Paralel)_
- **Dokumen yang WAJIB dibaca:** `docs/01-PRD.md` (SCR-003), `docs/02-DESIGN.md` (SCR-003 wireframe)
- **Ruang Lingkup:**
  - _Termasuk:_ Halaman `src/app/usaha/page.tsx` memuat: Spesifikasi komoditas ayam hidup (_live bird_) dan karkas segar, Teknologi Kandang Closed House, Diagram alur 4 langkah kemitraan peternak plasma, Accordion FAQ Usaha, dan CTA WhatsApp Divisi Usaha.
- **Acceptance Criteria:**
  - [x] Diagram alur kemitraan mudah dipahami secara visual di mobile maupun desktop.
  - [x] FAQ Accordion berfungsi interaktif dan dapat dibuka-tutup dengan mulus.
  - [x] Memiliki tepat 1 tag `<h1>` semantik dan seluruh gambar memiliki atribut `alt` deskriptif.
- **Perintah Verifikasi:**
  ```bash
  npx tsc --noEmit
  npm run lint
  npm run build
  ```

---

### T-008 — Implementasi Halaman Keorganisasian (`SCR-004` - `/organisasi`)

- **Terkait:** `FR-005`, `SCR-004` | **Dependensi:** `T-003`, `T-004` _(Dapat Paralel)_
- **Dokumen yang WAJIB dibaca:** `docs/01-PRD.md` (SCR-004), `docs/02-DESIGN.md` (SCR-004 wireframe)
- **Ruang Lingkup:**
  - _Termasuk:_ Halaman `src/app/organisasi/page.tsx` memuat: Visualisasi bagan tata kelola koperasi, Kartu profil Dewan Pengawas, Kartu profil Dewan Pengurus Inti (Ketua, Sekretaris, Bendahara), Keterangan Tim Operasional Lapangan/Kandang, dan Komitmen Good Cooperative Governance.
- **Acceptance Criteria:**
  - [x] Bagan struktur organisasi tampil hierarkis dan responsif.
  - [x] Kartu pengurus menampilkan foto/siluet placeholder berukuran proporsional dengan nama dan peran yang jelas.
  - [x] Memiliki tepat 1 tag `<h1>` semantik dan seluruh gambar memiliki atribut `alt` deskriptif.
- **Perintah Verifikasi:**
  ```bash
  npx tsc --noEmit
  npm run lint
  npm run build
  ```

---

### T-009 — Implementasi Halaman Galeri Dokumentasi (`SCR-005` - `/galeri`)

- **Terkait:** `FR-008`, `SCR-005` | **Dependensi:** `T-003`, `T-004` _(Dapat Paralel)_
- **Dokumen yang WAJIB dibaca:** `docs/01-PRD.md` (SCR-005), `docs/02-DESIGN.md` (SCR-005 wireframe)
- **Ruang Lingkup:**
  - _Termasuk:_ Halaman `src/app/galeri/page.tsx` memuat: Filter kategori (_Semua_, _Fasilitas Kandang_, _Pemanenan_, _Kegiatan Anggota_), grid foto responsif dengan aspect ratio 16:9/16:9, dan integrasi komponen `LightboxModal` untuk tampilan foto penuh saat diklik.
- **Acceptance Criteria:**
  - [x] Filter kategori menyaring daftar gambar tanpa reload halaman.
  - [x] Mengklik kartu gambar membuka Lightbox Modal lengkap dengan judul dan caption deskriptif.
  - [x] Modal dapat ditutup menggunakan tombol silang, klik di area luar, atau tombol keyboard `Esc`.
  - [x] Memiliki tepat 1 tag `<h1>` semantik dan seluruh gambar memiliki atribut `alt` deskriptif.
- **Perintah Verifikasi:**
  ```bash
  npx tsc --noEmit
  npm run lint
  npm run build
  ```

---

### T-010 — Implementasi Halaman Kontak, Form & Peta (`SCR-006` - `/kontak`)

- **Terkait:** `FR-009`, `FR-010`, `FR-011`, `SCR-006` | **Dependensi:** `T-003`, `T-004` _(Dapat Paralel)_
- **Dokumen yang WAJIB dibaca:** `docs/01-PRD.md` (SCR-006), `docs/02-DESIGN.md` (SCR-006 wireframe), `docs/03-TECH_STACK.md` (Bagian 3)
- **Ruang Lingkup:**
  - _Termasuk:_ Halaman `src/app/kontak/page.tsx` memuat:
    1. Detail kontak resmi (alamat kantor, sentra kandang, nomor WA, email, jam kerja).
    2. Formulir pesan dengan validasi client-side, anti-spam honeypot field, dan generator chat WhatsApp otomatis serta tombol fallback `mailto:` langsung.
    3. Embed peta Google Maps interaktif yang responsif dengan koordinat placeholder terstruktur sentra peternakan (`-6.5715, 107.7587`).
- **Acceptance Criteria:**
  - [x] Validasi form mendeteksi nama kosong, no. WA tidak valid, dan pesan < 10 karakter dengan pesan error yang ramah.
  - [x] Pengiriman form yang valid memicu format teks WhatsApp dan membuka tautan resmi tanpa error; tombol fallback `mailto:` tersedia.
  - [x] Honeypot field tersembunyi dari pandangan pengguna biasa namun menggagalkan submission otomatis bot jika terisi.
  - [x] Embed Google Maps tampil stabil tanpa overflow kontainer di layar ponsel.
  - [x] Memiliki tepat 1 tag `<h1>` semantik.
- **Perintah Verifikasi:**
  ```bash
  npm run lint
  npm run build
  ```

---

### T-011 — Konfigurasi SEO On-Page, 404 Kustom, Sitemap & Metadata

- **Terkait:** `NFR-005`, `FR-013` | **Dependensi:** `T-005` s/d `T-010`
- **Dokumen yang WAJIB dibaca:** `docs/01-PRD.md` (Bagian 6), `docs/03-TECH_STACK.md`
- **Ruang Lingkup:**
  - _Termasuk:_
    1. Konfigurasi `generateMetadata` / objek `metadata` di setiap rute halaman (`/`, `/profil`, `/usaha`, `/organisasi`, `/galeri`, `/kontak`) sesuai tabel PRD.
    2. Skema Open Graph dan JSON-LD `Organization` / `LocalBusiness` di root layout.
    3. Pembuatan `public/robots.txt` dan `src/app/sitemap.ts` (App Router metadata route yang otomatis menghasilkan sitemap.xml saat export).
    4. Implementasi halaman kustom `src/app/not-found.tsx` (404) dengan copy yang selaras tema.
- **Acceptance Criteria:**
  - [x] Seluruh halaman memiliki tag Title, Meta Description, dan Canonical URL yang valid dan unik.
  - [x] `robots.txt` dan `sitemap.xml` dapat diakses dan memuat 6 rute utama.
  - [x] URL sembarang (misal `/halaman-palsu`) menampilkan tampilan 404 berdesain senada dengan tombol kembali ke beranda.
- **Perintah Verifikasi:**
  ```bash
  npm run build
  ```

---

### T-012 — Optimasi Performa, Audit Lighthouse, & QA Pra-Rilis

- **Terkait:** Seluruh `NFR-001` s/d `NFR-007` | **Dependensi:** `T-011`
- **Dokumen yang WAJIB dibaca:** Seluruh dokumen `docs/`, `PLAYBOOK_COMPANY_PROFILE.md` (Checklist Sebelum Rilis)
- **Ruang Lingkup:**
  - _Termasuk:_
    1. Audit kompresi gambar (format WebP) dan kelengkapan atribut `alt`.
    2. Pengujian Lighthouse Chrome DevTools pada mode mobile throttle (Performance ≥ 90, Accessibility ≥ 92, Best Practices 100, SEO 100).
    3. Pengecekan seluruh broken links internal.
    4. Pengujian alur pengiriman formulir dan tombol WhatsApp di mobile viewport.
- **Acceptance Criteria:**
  - [x] Seluruh target `NFR-001` s/d `NFR-007` terpenuhi.
  - [x] Build statis bersih (`npm run build` sukses tanpa peringatan kritis).
  - [x] Tidak ada link rusak atau konsol error di browser.
- **Perintah Verifikasi:**
  ```bash
  npm run lint
  npx tsc --noEmit
  npm run build
  ```
