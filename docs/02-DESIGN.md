# Design Guidelines & System Specification: Website Koperasi Produsen Dirga Pangan Mandiri

Dokumen ini mendefinisikan sistem desain antarmuka (UI) dan pengalaman pengguna (UX) resmi untuk Koperasi Produsen Dirga Pangan Mandiri. Seluruh tokens, proporsi layout, dan komponen diturunkan langsung dari spesifikasi dasar arsitektur editorial minimalis (*morning light on cream paper*) yang diselaraskan dengan kebutuhan representasi kelembagaan peternakan ayam broiler modern yang higienis, terorganisir, dan berorientasi kemitraan B2B.

---

## 1. Karakter Brand & Filosofi Desain

Karakter visual menggabungkan ketenangan estetika **editorial cetak berkualitas tinggi** dengan ketegasan **kelembagaan agribisnis pangan modern**.

### Tiga Prinsip Inti

1. **Restraint & Editorial Warmth (Ketenangan & Kehangatan Editorial)**
   - Kanvas utama menggunakan *Warm Cream Paper* (`#f8f8f2`) yang memberikan kehangatan kertas cetak, dipadukan dengan permukaan kartu *Card White* (`#ffffff`).
   - Teks utama mengutamakan *Studio Ink* (`#1a1a1a`) dengan keterbacaan tinggi.
   - **Tanpa Drop-Shadow Tebal:** Elevasi elemen diciptakan murni melalui pergeseran warna permukaan (*color-shift* dari kanvas krem ke kartu putih) dan garis batas tipis (*hairline border* 1px `#e5e5dc`). Tidak menggunakan bayangan buram berat atau gradien warna yang ramai.

2. **Grounded & Trustworthy (Membumi, Higienis, & Transparan)**
   - Representasi komoditas ayam broiler disajikan secara faktual, higienis, dan profesional melalui data terstruktur (kapasitas populasi, siklus panen, biosecurity closed house).
   - Aksen brand pertanian modern menggunakan *Deep Forest Green* (`#166534`) untuk kredibilitas kelembagaan dan *Mint Wash / Agri Light* (`#e8f5e9`) untuk kartu sorotan.
   - Indikator kesiapan operasional memanfaatkan *Live Green Status Dot* (`#10b981`) di header dan hero.

3. **Mobile-First & Direct Action (Kemudahan Akses Seluler & Aksi Cepat)**
   - Setiap halaman memprioritaskan kemudahan membaca di perangkat seluler dengan area sentuh tombol (*touch target*) minimal 44x44px.
   - Akses komunikasi instan ke WhatsApp tersedia di sudut kanan bawah layar (*Floating Action Button*) serta tombol aksi terarah di setiap penutup bagian halaman.

---

## 2. Design Tokens (Spesifikasi Teknis)

### 2.1 Palet Warna (Color Tokens)

| Token Name | Token CSS | Nilai Hex | Peran & Penerapan | Rasio Kontras vs Kanvas |
|---|---|---|---|---|
| **Cream Paper / Canvas** | `--color-canvas` | `#f8f8f2` | Latar belakang dasar seluruh halaman | Base (1.0:1) |
| **Card White / Surface** | `--color-surface` | `#ffffff` | Latar kartu konten, bilah navigasi, container modal | 1.08:1 (*Subtle elevation*) |
| **Studio Ink** | `--color-ink` | `#1a1a1a` | Teks judul utama, teks tubuh tebal, tombol aksi primer | **16.2:1** (WCAG AAA) |
| **Muted Ink** | `--color-muted-ink` | `#525252` | Teks sekunder, deskripsi pendukung, metadata | **5.3:1** (WCAG AA) |
| **Border Hairline** | `--color-border` | `#e5e5dc` | Garis pembatas kartu 1px dan divider section | N/A (Dekoratif/Batas) |
| **Border Dark** | `--color-border-dark` | `#1a1a1a` | Garis penegas aksen editorial tipis 1px | 16.2:1 |
| **Agri Forest Green** | `--color-agri-green` | `#166534` | Aksen brand koperasi: badge, link aktif, ikon primer | **6.8:1** (WCAG AAA) |
| **Agri Light / Mint Wash**| `--color-agri-light` | `#e8f5e9` | Latar kartu fitur khusus, tint highlight komoditas | N/A (*Surface wash*) |
| **Status Green** | `--color-status-green`| `#10b981` | Titik indikator operasional (*Live status dot*) | N/A (*Functional dot*) |
| **WhatsApp Green** | `--color-wa` | `#25d366` | Tombol Floating WhatsApp resmi | Kontras tinggi dgn putih |

### 2.2 Tipografi & Skala Teks (Typography Tokens)

- **Typeface Tunggal:** `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`  
- Tipografi bersifat geometris bersih tanpa serif, dengan pengetatan *letter-spacing* (*negative tracking*) pada judul besar untuk menghadirkan ketegasan arsitektural.

| Token Peran | Ukuran Desktop | Ukuran Mobile | Line Height | Tracking | Weight | Penggunaan |
|---|---|---|---|---|---|---|
| `display-hero` | 56px–72px | 36px–44px | 1.05 | -0.025em | 700 (Bold) | Kalimat utama Hero Beranda |
| `heading-1` | 36px–44px | 28px–32px | 1.15 | -0.025em | 700 (Bold) | Judul Utama Halaman (H1) |
| `heading-2` | 28px–32px | 24px | 1.25 | -0.02em | 600 (SemiBold) | Judul Section Tiap Halaman (H2) |
| `heading-3` | 20px–22px | 18px–20px | 1.35 | -0.015em | 600 (SemiBold) | Judul Kartu & Sub-bagian (H3) |
| `body-large` | 18px–20px | 16px–18px | 1.50 | Normal | 400 / 500 | Paragraf Pengantar / Lead Text |
| `body-base` | 16px | 15px–16px | 1.60 | Normal | 400 (Regular) | Teks paragraf umum |
| `caption-small`| 13px–14px | 12px–13px | 1.45 | +0.01em | 500 (Medium) | Label badge, metadata, legalitas |

### 2.3 Spasi, Kontainer, & Radius Sudut (Spacing & Geometry)

- **Base Unit:** 8px
- **Page Container Max-Width:** `1200px` (`max-w-7xl`), `px-4 sm:px-6 lg:px-8`
- **Vertical Section Spacing:**
  - Desktop: `96px–112px`
  - Mobile: `48px–64px`
- **Internal Card Padding:** `32px` (Desktop), `20px–24px` (Mobile)
- **Border Radius (Hanya 3 Nilai yang Diizinkan):**
  - `buttons`: `8px` (`rounded-lg`)
  - `cards` & `images`: `12px` (`rounded-xl`)
  - `tags`, `badges`, `status pills`: `9999px` (`rounded-full`)

### 2.4 Sistem Elevasi Permukaan (Surfaces & No-Shadow Rule)

Desain ini secara tegas meniadakan drop-shadow blur tebal:
```text
[ Level 0 ]: Cream Canvas (#f8f8f2)  -> Latar dasar seluruh halaman
[ Level 1 ]: Card White (#ffffff)    -> Kartu konten, navbar, modal dialog
[ Level 2 ]: Mint / Agri Wash (#e8f5e9) -> Kartu komoditas khusus / highlight
[ Divider ]: 1px Hairline (#e5e5dc)  -> Pembatas struktural antar kartu & section
```

---

## 3. Komponen Desain Terstandar (Component Inventory)

### 3.1 Top Navigation Bar (Header)
- **Struktur:**
  - Kiri: Wordmark tipografis `"DIRGA PANGAN"` (font-semibold, tracking-tight, Studio Ink `#1a1a1a`).
  - Tengah (Desktop): Tautan navigasi (`Beranda`, `Profil`, `Usaha`, `Organisasi`, `Galeri`, `Kontak`) dengan garis bawah penanda halaman aktif.
  - Kanan (Desktop): *Live Status Dot* hijau (`#10b981`) bertuliskan *"Pasokan Aktif"* serta tombol sekunder *"Hubungi Kami"*.
  - Mobile: Tombol Menu Hamburger yang membuka drawer navigasi vertikal responsif.
- **Permukaan:** Latar putih `#ffffff` atau krem ber-backdrop blur halus (`rgba(248, 248, 242, 0.95)`), 1px border bawah `#e5e5dc`, menempel (*sticky*) di bagian atas layar.

### 3.2 Display Hero
- **Struktur:** Kalimat pernyataan tegas berukuran display (56–72px desktop) dengan bobot 700 dan warna `#1a1a1a`.
- **Elemen:** Didahului oleh indikator status pasokan (*Live Green Dot*), diikuti oleh paragraf deskripsi berukuran 18–20px diatur rata kiri dengan spasi atas 32px, dan tombol aksi terarah.

### 3.3 Kartu Layanan & Fitur (Feature Card)
- **Struktur:** Radius sudut 12px, padding dalam 32px, border tipis 1px `#e5e5dc`.
- **Varian:**
  - *Varian Netral:* Latar putih murni (`#ffffff`), teks `#1a1a1a`, ikon fungsional Lucide.
  - *Varian Agri Wash:* Latar hijau lembut (`#e8f5e9`), digunakan untuk menonjolkan keunggulan sistem *closed house* dan kemitraan plasma.

### 3.4 Kartu Metrik Angka (Stat Card)
- **Struktur:** Menampilkan angka tebal 36–44px Studio Ink (`#1a1a1a`) dengan label deskripsi 14px di bawahnya.
- **Kepatuhan Data:** Menampilkan angka kapasitas populasi, jumlah mitra kandang, target siklus, dan status mutu *"Higienis & Terstandar"* (menggantikan klaim halal sementara sebelum sertifikasi resmi terbit).

### 3.5 Akordeon Tanya Jawab (Accordion FAQ)
- **Struktur:** Daftar pertanyaan yang dapat diciutkan (*collapsible*), dipisahkan oleh garis batas 1px `#e5e5dc`, dengan transisi buka-tutup halus yang mematuhi `prefers-reduced-motion`.

### 3.6 Grid Galeri & Lightbox Modal
- **Grid:** Rasio aspek konsisten 16:9 atau 4:3, radius 12px, border halus 1px.
- **Lightbox Modal:** Saat foto diklik, modal terbuka di atas kanvas dengan backdrop gelap (`rgba(0, 0, 0, 0.85)`), menampilkan gambar resolusi penuh, teks judul, tanggal/keterangan, serta tombol tutup di pojok kanan atas (dan penutupan melalui tombol keyboard `Esc`).

### 3.7 Tombol Aksi (Buttons)
- **Dark Filled Button (Primer):** Latar `#1a1a1a`, teks `#ffffff`, radius 8px, padding vertikal 12–14px horizontal 22–24px.
- **Outlined Button (Sekunder):** Latar `#ffffff`, border 1px `#e5e5dc`, teks `#1a1a1a`, radius 8px.
- **Floating WhatsApp Button:** Melayang di kanan bawah (`bottom: 24px, right: 24px`), latar `#25d366`, ikon WhatsApp putih, target sentuh 52x52px (mobile 48x48px).

---

## 4. Spesifikasi Halaman & Wireframe Tekstual [SCR-xxx]

### `SCR-001` Beranda (`/`)
```text
+------------------------------------------------------------------------+
| [NAVBAR] DIRGA PANGAN     [Beranda] [Profil] [Usaha] ...   [Hubungi WA]|
+------------------------------------------------------------------------+
| [HERO SECTION]                                                         |
| (•) Kemitraan Peternakan & Pasokan Terbuka (Status Dot Hijau)          |
|                                                                        |
| Pangan Berkualitas Dari Peternak Mandiri,                              |
| Menopang Pasokan Ayam Broiler Nasional.                                |
|                                                                        |
| Koperasi Produsen Dirga Pangan Mandiri mengelola produksi ayam broiler |
| closed house dengan standar biosecurity ketat & kemitraan terpadu.     |
|                                                                        |
| [ Tombol: Mulai Kemitraan Usaha ]   [ Tombol Teks: Pelajari Profil -> ]|
+------------------------------------------------------------------------+
| [3 PILAR NILAI UTAMA] (Padding 96px)                                   |
| +--------------------+ +--------------------+ +--------------------+  |
| | Standar Mutu Tinggi| | Kemitraan Adil     | | Pasokan Konsisten  |  |
| | Ayam sehat & higien| | Transparan & bina | | Suplai horeka/pasar|  |
| +--------------------+ +--------------------+ +--------------------+  |
+------------------------------------------------------------------------+
| [ANGKA CAPAIAN / METRIK KUNCI]                                         |
|   50.000+ Ekor/Siklus  |  15+ Kandang Closed House  | Higienis & Terstandar |
+------------------------------------------------------------------------+
| [CUPLIKAN FASILITAS & PRODUKSI] (Grid 3 Kolom, Rasio 16:9, Radius 12px)|
| [Foto Kandang Modern]      [Foto Pemeliharaan]      [Foto Hasil Panen] |
+------------------------------------------------------------------------+
| [CTA BANNER] Siap Menjadi Mitra Pasokan Atau Peternak Plasma?          |
| [ Tombol Primer: Hubungi Divisi Kemitraan via WhatsApp ]               |
+------------------------------------------------------------------------+
| [FOOTER] Legalitas NIB Koperasi | Navigasi | Alamat & Hak Cipta 2026   |
+------------------------------------------------------------------------+
```

### `SCR-002` Profil Koperasi (`/profil`)
```text
+------------------------------------------------------------------------+
| [PAGE HEADER] Profil & Integritas Kelembagaan                          |
| Fondasi peternakan rakyat modern yang berdaulat, mandiri, dan amanah.  |
+------------------------------------------------------------------------+
| [SEJARAH & LATAR BELAKANG]                                             |
| Narasi pendirian koperasi oleh gabungan peternak unggas rakyat...      |
+------------------------------------------------------------------------+
| [VISI & MISI]                                                          |
| Visi: Menjadi koperasi produsen unggas terdepan dan terpercaya.        |
| Misi: 4 komitmen operasional penyediaan sapronak dan jaminan pasar.    |
+------------------------------------------------------------------------+
| [KARTU KREDENSIAL LEGALITAS] (Grid Kartu Putih Border 1px)            |
| +----------------------------+ +----------------------------+          |
| | Nomor Induk Berusaha (NIB) | | Pengesahan Kemenkop RI     |          |
| | 1234567890123 [DRAFT]      | | AHU-0012345.AH.01.26 [DRAFT]          |
| +----------------------------+ +----------------------------+          |
+------------------------------------------------------------------------+
| [STANDAR BIOSECURITY & KESEJAHTERAAN TERNAK]                           |
| 4 Prinsip sterilisasi kandang, sanitasi air, dan pemantauan harian.    |
+------------------------------------------------------------------------+
```

### `SCR-003` Bidang Usaha & Produksi (`/usaha`)
```text
+------------------------------------------------------------------------+
| [PAGE HEADER] Kapasitas Produksi & Skema Kemitraan                     |
| Pasokan ayam broiler berkualitas dengan tata kelola kandang modern.    |
+------------------------------------------------------------------------+
| [SPESIFIKASI KOMODITAS BROILER]                                        |
| - Ayam Broiler Hidup (Live Bird): Rentang bobot panen 1.8 - 2.2 kg     |
| - Karkas Ayam Segar: Bersih, higienis, rantai pendingin terjaga        |
+------------------------------------------------------------------------+
| [TEKNOLOGI KANDANG CLOSED HOUSE]                                       |
| Gambar fasilitas + kontrol mikroklimat, ventilasi, dan suhu otomatis.  |
+------------------------------------------------------------------------+
| [ALUR 4 LANGKAH KEMITRAAN PLASMA]                                      |
| 1. Registrasi Lahan -> 2. Sapronak Berkualitas ->                      |
| 3. Pendampingan Teknis -> 4. Jaminan Penyerapan Panen                  |
+------------------------------------------------------------------------+
| [FAQ AKORDEON TANYA JAWAB]                                             |
| [v] Berapa minimal kuota pembelian ayam untuk skala horeka/distributor?|
| [v] Bagaimana tata cara menjadi peternak plasma kemitraan koperasi?    |
+------------------------------------------------------------------------+
```

### `SCR-004` Keorganisasian (`/organisasi`)
```text
+------------------------------------------------------------------------+
| [PAGE HEADER] Struktur Tata Kelola Koperasi                            |
| Berlandaskan musyawarah anggota, transparansi, dan akuntabilitas.      |
+------------------------------------------------------------------------+
| [BAGAN STRUKTUR ORGANISASI]                                            |
| Rapat Anggota Tahunan (RAT)                                            |
|       ├── Dewan Pengawas                                               |
|       └── Dewan Pengurus Inti (Ketua, Sekretaris, Bendahara)           |
|                 └── Tim Teknis & Pengelola Lapangan Kandang            |
+------------------------------------------------------------------------+
| [KARTU PROFIL PENGURUS] (Avatar siluet netral, nama, gelar, jabatan)   |
| [Foto Pengawas]   [Foto Ketua]   [Foto Sekretaris]   [Foto Bendahara]  |
+------------------------------------------------------------------------+
| [KOMITMEN GOOD COOPERATIVE GOVERNANCE]                                 |
| Penjelasan transparansi pembukuan kas dan pertanggungjawaban tahunan.  |
+------------------------------------------------------------------------+
```

### `SCR-005` Galeri Fasilitas & Dokumentasi (`/galeri`)
```text
+------------------------------------------------------------------------+
| [PAGE HEADER] Galeri Dokumentasi Kegiatan                              |
| Dokumentasi fasilitas kandang closed house, proses panen, & anggota.  |
+------------------------------------------------------------------------+
| [FILTER KATEGORI]                                                      |
| [ Semua ]  [ Fasilitas Kandang ]  [ Proses Panen ]  [ Kegiatan Anggota ]|
+------------------------------------------------------------------------+
| [GRID FOTO RESPONSIF (16:9 / 4:3, Radius 12px)]                        |
| [Foto 1: Kandang Modern]  [Foto 2: Kontrol Lingkungan] [Foto 3: Panen] |
| [Foto 4: Timbang Bobot]   [Foto 5: Distribusi Karkas]  [Foto 6: Temu]  |
| (Klik memicu Lightbox Modal dengan caption deskriptif dan tombol tutup)|
+------------------------------------------------------------------------+
```

### `SCR-006` Kontak & Lokasi (`/kontak`)
```text
+------------------------------------------------------------------------+
| [PAGE HEADER] Hubungi Tim Koperasi                                     |
| Siap melayani kebutuhan pasokan dan konsultasi kemitraan usaha Anda.   |
+------------------------------------------------------------------------+
| [KOLOM KIRI: DETAIL KONTAK RESMI]  | [KOLOM KANAN: FORMULIR PESAN]     |
| Kantor: Kawasan Sentra Peternakan  | Nama Lengkap: [___________]       |
| Jawa Barat, Indonesia              | Usaha/Perusahaan: [___________]   |
| WhatsApp: +62 812-XXXX-XXXX        | No. WhatsApp: [___________]       |
| Email: kontak@dirgapangan.id       | Kategori: [Pemesanan Karkas v]    |
| Jam Operasional: 08:00 - 17:00 WIB | Pesan: [________________________] |
|                                    |                                   |
| [ Tombol: Kirim Pesan WhatsApp ]   | [ Tombol: Ajukan Kemitraan ]      |
+------------------------------------------------------------------------+
| [GOOGLE MAPS INTERAKTIF EMBED 100% WIDTH]                              |
| [ Peta Lokasi Sentra Kandang & Kantor Sekretariat ]                    |
+------------------------------------------------------------------------+
```

---

## 5. Aksesibilitas (WCAG 2.1 Level AA) & Microcopy

1. **Kontras Warna:**
   - Teks utama Studio Ink `#1a1a1a` di atas Kanvas `#f8f8f2` memiliki rasio kontras **16.2:1** (melebihi standar WCAG AAA 7.0:1).
   - Teks sekunder `#525252` memiliki rasio **5.3:1** (lulus standar WCAG AA 4.5:1).
   - Tombol utama `#1a1a1a` dengan teks putih `#ffffff` memiliki rasio **16.2:1**.
2. **Fokus Keyboard (Focus Visible):**
   - Seluruh elemen interaktif wajib memiliki cincin fokus yang kontras (`focus-visible:ring-2 focus-visible:ring-[#166534] focus-visible:outline-none`).
3. **Formulir & Error Handling:**
   - Setiap elemen formulir wajib menggunakan label `<label>` eksplisit yang terhubung dengan `id` input.
   - Pesan validasi error muncul langsung di bawah field terkait.
4. **Alt Text Gambar:**
   - Seluruh gambar wajib memiliki atribut `alt` deskriptif faktual untuk pembaca layar (*screen reader*).
