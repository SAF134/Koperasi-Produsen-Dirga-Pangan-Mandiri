# Product Requirements Document (PRD): Website Koperasi Produsen Dirga Pangan Mandiri

## 1. Tujuan & Non-Goals

### 1.1 Tujuan Produk
- **Membangun Kredibilitas Digital:** Menyediakan kanal resmi terpercaya bagi Koperasi Produsen Dirga Pangan Mandiri yang menginformasikan profil badan hukum, manajemen, dan standar operasional peternakan ayam broiler.
- **Mendukung Konversi Kemitraan B2B & Peternak:** Mempermudah calon pembeli partai besar (horeka, distributor, pedagang karkas) serta calon peternak plasma untuk mempelajari kapasitas dan menghubungi koperasi dalam < 30 detik.
- **Pusat Informasi Transparan:** Menyajikan data kapasitas kandang, alur mutu/biosecurity, dan dokumentasi fasilitas nyata secara rapi dan profesional.

### 1.2 Non-Goals (Batasan Rilis MVP Akhir Minggu Ini)
- Tidak menyediakan sistem transaksi e-commerce, keranjang belanja, atau payment gateway otomatis di website.
- Tidak menyediakan portal autentikasi (login/logout/dashboard) mandiri bagi anggota koperasi.
- Tidak menyertakan publikasi artikel/blog dinamis (ditunda ke Fase 2).
- Tidak mengimplementasikan multi-bahasa selain Bahasa Indonesia (versi EN ditunda ke Fase 2).

---

## 2. Persona Pengunjung

| Persona | Profil & Karakteristik | Kebutuhan Utama di Website |
|---|---|---|
| **P-1: Bpk. Bambang** *(Procurement Horeka / Distributor Karkas)* | Usia 38 tahun, membutuhkan pasokan karkas ayam broiler stabil, bersertifikasi aman/halal, dan tepat waktu. | Mengetahui tonase/kapasitas pasokan harian-mingguan, standar kebersihan/karkas, alamat kandang/kantor, dan tombol kontak WhatsApp cepat tim pemasaran. |
| **P-2: Bpk. Supardi** *(Peternak Mandiri / Calon Plasma)* | Usia 45 tahun, memiliki lahan/kandang di daerah dan ingin bermitra secara adil dengan koperasi produsen. | Mengetahui alur kemitraan, kepastian suplai pakan & DOC, sistem bagi hasil, serta bukti legalitas dan rekam jejak pengurus koperasi. |
| **P-3: Ibu Rina** *(Verifikator Dinas / Lembaga Keuangan)* | Usia 35 tahun, memerlukan konfirmasi status kelembagaan koperasi untuk pendataan atau fasilitas kerja sama. | Mengecek nomor legalitas resmi (NIB, Akta, AHU Kemenkop), susunan dewan pengawas/pengurus, serta transparansi kegiatan organisasi. |

---

## 3. Daftar Halaman & Struktur Section [SCR-xxx]

### `SCR-001` Beranda (`/`)
1. **Top Navigation Bar:** Logo entitas, navigasi menu (Beranda, Profil, Usaha, Organisasi, Galeri, Kontak), dan tombol cepat *"Hubungi Kami"*.
2. **Hero Section:** Headline nilai keunggulan pangan mandiri, sub-headline, indikator ketersediaan pasokan (*live status indicator*), 2 tombol CTA (*"Kemitraan Usaha"* dan *"Pelajari Profil"*).
3. **Pilar Keunggulan Koperasi:** 3 poin diferensiasi (Kualitas Ayam Terkontrol, Kemitraan Adil & Berdaya, Pasokan Berkelanjutan).
4. **Ringkasan Komoditas & Kapasitas:** Ringkasan produksi ayam broiler hidup dan karkas segar dengan spesifikasi bobot standar.
5. **Metrik Kunci / Statistik:** Tampilan 4 angka capaian (Kapasitas Populasi per Siklus, Jumlah Kandang Mitra, Target Panen Bulanan, Tahun Berdiri).
6. **Sekilas Tata Kelola:** Kutipan komitmen kepengurusan terhadap ketahanan pangan lokal.
7. **Highlight Galeri:** 4 cuplikan foto fasilitas kandang modern & kegiatan peternakan dengan tautan ke halaman Galeri lengkap.
8. **CTA Banner Penutup:** Ajakan kerja sama pasokan ayam broiler dan kemitraan peternak.
9. **Footer:** Identitas koperasi, ringkasan alamat, tautan cepat, dan hak cipta.

### `SCR-002` Profil Koperasi (`/profil`)
1. **Header & Hero Profil:** Judul halaman, latar belakang pendirian, dan filosofi nama Dirga Pangan Mandiri.
2. **Visi & Misi:** Pernyataan visi jangka panjang dan 4 misi operasional terukur.
3. **Nilai-Nilai Koperasi:** Integritas, Kemitraan Mandiri, Kualitas Higienis, Keberlanjutan Lingkungan.
4. **Legalitas & Legal Standing:** Tabel kartu nomor legalitas resmi (NIB, Izin Usaha Peternakan, Akta Pendirian, Pengesahan Kemenkop RI).
5. **Standar Kesejahteraan Ternak & Biosecurity:** Prinsip dasar pemeliharaan ramah lingkungan dan aman hayati.
6. **Footer**

### `SCR-003` Bidang Usaha & Produksi (`/usaha`)
1. **Header Usaha:** Penjelasan rantai pasok ayam broiler dari hulu ke hilir.
2. **Spesifikasi Produk:** Detail ayam hidup (*Live Bird*) dan ayam potong/karkas higienis (rentang bobot, kualitas daging).
3. **Fasilitas Kandang Modern:** Deskripsi teknologi kandang *Closed House* (kontrol suhu ventilasi otomatis, sanitasi ketat).
4. **Alur Kemitraan Peternak:** Diagram 4 langkah bermitra (Registrasi & Verifikasi Lahan -> Penyediaan Sapronak -> Pendampingan Pemeliharaan -> Pembelian Hasil Panen).
5. **FAQ Usaha:** Akordeon tanya-jawab seputar pasokan minimal pembelian, jadwal panen, dan syarat kemitraan.
6. **CTA Kontak Penjualan:** Tombol WhatsApp langsung ke Divisi Usaha.
7. **Footer**

### `SCR-004` Keorganisasian (`/organisasi`)
1. **Header Halaman:** Struktur tata kelola koperasi produsen berlandaskan Undang-Undang Perkoperasian.
2. **Bagan Struktur Organisasi:** Visualisasi alur koordinasi (Rapat Anggota Tahunan -> Dewan Pengawas -> Dewan Pengurus -> Manajer Operasional).
3. **Dewan Pengawas:** Kartu profil (foto, nama lengkap, jabatan).
4. **Dewan Pengurus Inti:** Kartu profil Ketua, Sekretaris, dan Bendahara (foto, nama, profil pengalaman ringkas).
5. **Tim Pengelola Lapangan & Teknis:** Keterangan tim pendamping peternak dan tenaga ahli kesehatan hewan.
6. **Komitmen Tata Kelola Bersih (Good Cooperative Governance):** Penjelasan pelaksanaan RAT tahunan dan transparansi buku kas.
7. **Footer**

### `SCR-005` Galeri Kegiatan & Fasilitas (`/galeri`)
1. **Header Galeri:** Pengantar dokumentasi visual kegiatan lapangan.
2. **Filter Kategori Sederhana:** Tab kategori (*Semua*, *Fasilitas Kandang*, *Proses Panen*, *Kegiatan Anggota*).
3. **Grid Foto Responsif:** Galeri foto dengan rasio aspek konsisten (16:9 / 4:3), judul, dan tanggal/keterangan singkat.
4. **Modal/Viewer Foto:** Tampilan perbesaran foto saat item galeri diklik beserta teks deskripsi.
5. **Footer**

### `SCR-006` Kontak & Lokasi (`/kontak`)
1. **Header Kontak:** Ajakan komunikasi terbuka bagi mitra dan publik.
2. **Informasi Titik Kontak:**
   - Alamat Kantor Sekretariat
   - Alamat Sentra Fasilitas Kandang
   - Nomor WhatsApp Resmi Admin
   - Alamat Emai
   - Hari & Jam Operasional Pelayanan
3. **Formulir Kontak Terstruktur:**
   - Input Nama Lengkap
   - Input Nama Usaha / Perusahaan
   - Input Nomor WhatsApp / Telepon
   - Pilihan Kategori Kebutuhan (*Pemesanan Pasokan Ayam*, *Kemitraan Peternak*, *Konsultasi Legalitas/Koperasi*, *Lainnya*)
   - Input Pesan / Keterangan
   - Tombol Kirim Pesan (dengan feedback status sukses/gagal langsung di UI)
4. **Akses Cepat WhatsApp:** Tombol direct-link dengan pesan template otomatis (*"Halo Admin Koperasi Dirga Pangan Mandiri, saya ingin berkonsultasi mengenai..."*).
5. **Peta Lokasi Interaktif:** Embed Google Maps responsif yang mengarah ke titik lokasi kantor.
6. **Footer**

---

## 4. Functional Requirements (FR-xxx)

| ID | Deskripsi Kebutuhan Fungsional | Prioritas (MoSCoW) |
|---|---|---|
| `FR-001` | Navigasi menu global yang responsif di seluruh halaman, memiliki indikator halaman aktif, dan mobile hamburger menu di layar seluler. | **Must Have** |
| `FR-002` | Tampilan status ketersediaan pasokan (*Live Status Dot*) pada navigasi/hero untuk menunjukkan kesiapan operasional. | **Should Have** |
| `FR-003` | Tombol Floating WhatsApp di sudut kanan bawah layar yang selalu dapat diakses di setiap halaman dengan template pesan yang relevan. | **Must Have** |
| `FR-004` | Presentasi data legalitas koperasi (NIB, Akta, AHU) dalam kartu kredensial yang rapi di halaman Profil. | **Must Have** |
| `FR-005` | Presentasi visual bagan struktur organisasi koperasi dengan pemisahan peran Pengawas, Pengurus, dan Manajemen Operasional. | **Must Have** |
| `FR-006` | Informasi spesifikasi produk ayam broiler dan alur kemitraan peternak di halaman Usaha. | **Must Have** |
| `FR-007` | Komponen interaktif akordeon FAQ di halaman Usaha untuk menjawab pertanyaan umum tanpa membebani panjang halaman. | **Should Have** |
| `FR-008` | Galeri foto dengan fitur penyaringan kategori (*Fasilitas*, *Panen*, *Anggota*) dan pembukaan pratinjau foto (*lightbox modal*). | **Must Have** |
| `FR-009` | Formulir kontak dengan validasi input client-side lengkap (nama wajib, format email/no WA valid, pesan minimal 10 karakter). | **Must Have** |
| `FR-010` | Mekanisme pengiriman formulir kontak yang terintegrasi (generasi tautan WhatsApp otomatis berisi ringkasan data formulir + fallback mailto). | **Must Have** |
| `FR-011` | Embed Google Maps interaktif yang responsif di halaman Kontak. | **Must Have** |
| `FR-012` | Tombol Call-to-Action (CTA) kontekstual di akhir setiap halaman yang mengarahkan pengunjung ke halaman Kontak atau WhatsApp. | **Must Have** |
| `FR-013` | Penanganan rute 404 Not Found dengan tautan navigasi kembali ke Beranda yang jelas dan selaras dengan tema situs. | **Should Have** |
| `FR-014` | Fitur filter bahasa bilingual (ID / EN) untuk konten internasional. | **Won't Have (MVP)** |
| `FR-015` | Fitur artikel blog / berita berkala dengan sistem pagination dan pencarian. | **Won't Have (MVP)** |

---

## 5. Non-Functional Requirements (NFR-xxx)

| ID | Parameter | Target Terukur | Cara Verifikasi |
|---|---|---|---|
| `NFR-001` | **Performa Loading** | - Google Lighthouse Score (Mobile): ≥ 90<br>- Google Lighthouse Score (Desktop): ≥ 95<br>- Largest Contentful Paint (LCP): < 2.5 detik<br>- Cumulative Layout Shift (CLS): < 0.1<br>- First Input Delay (FID) / INP: < 200 ms | Audit otomatis Chrome DevTools Lighthouse pada mode *Mobile Simulated (4G Throttle)* dan PageSpeed Insights. |
| `NFR-002` | **Responsivitas Layar** | - Tata letak adaptif sempurna dari lebar viewport **360px hingga 1920px+**.<br>- Bebas dari horizontal scrollbar yang tidak disengaja di semua resolusi seluler. | Pengujian pada resolusi 360x800 (Android standar), 390x844 (iPhone), 768x1024 (Tablet), dan 1440x900 (Desktop) via responsive emulator. |
| `NFR-003` | **Aksesibilitas (A11y)** | - Memenuhi standar **WCAG 2.1 Level AA**.<br>- Rasio kontras teks terhadap latar belakang minimal **4.5:1** untuk teks normal dan **3.0:1** untuk teks besar (≥24px).<br>- Seluruh tombol, form, dan tautan dapat diakses via navigasi keyboard (*Focus Visible*). | Audit Lighthouse Accessibility (Skor ≥ 92) dan pengecekan tabulasi keyboard (`Tab`, `Shift+Tab`, `Enter`). |
| `NFR-004` | **Kompatibilitas Browser** | Tampil dan berfungsi tanpa degradasi fungsi pada: Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge pada versi rilis stabil 2 tahun terakhir. | Pengujian rendering lintas engine (Chromium, Gecko/Firefox, dan WebKit/Safari mobile via responsive device emulator/Playwright) serta pengujian fisik pada browser Android & iOS. |
| `NFR-005` | **SEO On-Page** | - Skor Lighthouse SEO: **100**.<br>- Setiap halaman memiliki tag Title, Meta Description, dan Canonical URL unik.<br>- Terdapat 1 tag `<h1>` per halaman.<br>- Semua gambar memiliki atribut `alt` deskriptif.<br>- Tersedia `sitemap.xml` dan `robots.txt` valid. | Audit Lighthouse SEO dan validasi tag markup via DevTools. |
| `NFR-006` | **Kesiapan Ekspor Statis** | Seluruh halaman dapat di-build menjadi artefak statis murni tanpa ketergantungan runtime Node.js server dinamis (*100% Static HTML/CSS/JS export ready*). | Menjalankan build statis lokal (`next build` / static export command) dengan exit code 0 tanpa error. |
| `NFR-007` | **Keamanan & Privasi** | - Enforce koneksi terenkripsi HTTPS 100%.<br>- Zero secrets/credential dalam repositori publik.<br>- Sanitasi input formulir client-side untuk mencegah injeksi script. | Validasi konfigurasi header di `vercel.json`, code review sanitasi form input, dan verifikasi sertifikat SSL pada dashboard Vercel pasca-deploy. |

---

## 6. Spesifikasi SEO

### 6.1 Meta Title & Description Per Halaman

| Halaman | URL Path | Meta Title (50–60 karakter) | Meta Description (130–160 karakter) |
|---|---|---|---|
| **Beranda** | `/` | Koperasi Produsen Dirga Pangan Mandiri \| Ayam Broiler Berkualitas | Koperasi produsen peternakan ayam broiler terpadu. Menyediakan pasokan ayam karkas higienis, kemitraan peternak mandiri, dan pangan berkelanjutan. |
| **Profil** | `/profil` | Profil & Legalitas Resmi \| Koperasi Dirga Pangan Mandiri | Mengenal visi, misi, nilai luhur, dan legalitas resmi Koperasi Produsen Dirga Pangan Mandiri dalam mewujudkan kemandirian pangan nasional. |
| **Usaha** | `/usaha` | Produksi & Kemitraan Ayam Broiler \| Dirga Pangan Mandiri | Layanan produksi ayam broiler closed house, pasokan karkas berkualitas, dan program kemitraan peternak terpercaya bersama Koperasi Dirga Pangan Mandiri. |
| **Organisasi** | `/organisasi` | Struktur Pengurus & Pengawas \| Dirga Pangan Mandiri | Susunan dewan pengawas, pengurus inti, dan tata kelola organisasi Koperasi Produsen Dirga Pangan Mandiri yang transparan dan akuntabel. |
| **Galeri** | `/galeri` | Galeri Fasilitas Kandang & Kegiatan \| Dirga Pangan Mandiri | Dokumentasi visual fasilitas kandang ayam closed house modern, proses panen higienis, dan aktivitas anggota Koperasi Dirga Pangan Mandiri. |
| **Kontak** | `/kontak` | Kontak & Alamat Kantor \| Koperasi Dirga Pangan Mandiri | Hubungi Koperasi Produsen Dirga Pangan Mandiri untuk pemesanan karkas ayam, konsultasi kemitraan peternak, dan kunjungan kantor atau kandang. |

### 6.2 Konfigurasi Global SEO & Metadata
- **Open Graph (OG Tags):**
  - `og:site_name`: Koperasi Produsen Dirga Pangan Mandiri
  - `og:type`: `website`
  - `og:locale`: `id_ID`
  - `og:image`: `/images/og-dirga-pangan.jpg` (resolusi 1200x630px dengan rasio 1.91:1)
  - `twitter:card`: `summary_large_image`
- **Robots.txt & Sitemap:**
  - `robots.txt`: Mengizinkan seluruh bot mesin pencari (`User-agent: *`, `Allow: /`) dan mengarahkan ke sitemap.
  - `sitemap.xml`: Memuat seluruh 6 rute utama dengan `changefreq: weekly` dan prioritas yang disesuaikan (Beranda: 1.0, lainnya: 0.8).
- **Structured Data (Schema.org JSON-LD):**
  - Mengimplementasikan skema `Organization` dan `LocalBusiness` di root layout: nama resmi, bidang usaha peternakan unggas, alamat, jam operasional, dan tautan nomor kontak resmi.

---

## 7. Tabel Kebutuhan Konten

| Komponen Konten | Halaman | Status Kesiapan | Penanggung Jawab | Strategi Placeholder Sementara |
|---|---|---|---|---|
| **Logo Resmi Koperasi** | Seluruh Halaman (Navbar & Footer) | Belum Siap | Pemilik Proyek | Menggunakan SVG Wordmark tipografis elegan *"DIRGA PANGAN"* dengan ikon emblem daun/pangan modular. |
| **Data Legalitas (NIB, Akta, AHU)** | Profil (`/profil`) | Belum Siap | Pemilik Proyek | Nomor registrasi placeholder terformat jelas (`NIB: 1234567890123 [DRAFT]`, `AHU-0000.AH.01.26 [DRAFT]`). |
| **Foto Fasilitas Kandang & Panen (6–8 foto)** | Beranda, Usaha, Galeri | Belum Siap | Pemilik Proyek | Foto terkurasi kualitas tinggi dari open-license repository (tema *modern poultry closed house farm*). |
| **Foto & Profil Dewan Pengurus (4–5 orang)** | Organisasi (`/organisasi`) | Belum Siap | Pemilik Proyek | Avatar inisial netral / foto siluet profesional dengan nama dan titel terstandar. |
| **Alamat Fisik Kantor & Titik Google Maps** | Kontak & Footer | Belum Siap | Pemilik Proyek | Alamat placeholder terstruktur: *"Kawasan Sentra Peternakan Unggas, Jawa Barat, Indonesia"* dengan embed koordinat default peta (`-6.5715, 107.7587`). |
| **Nomor Telepon & WhatsApp Resmi** | Floating WA & Kontak | Belum Siap | Pemilik Proyek | Nomor placeholder berformat internasional (`+62 812-XXXX-XXXX`) yang langsung diarahkan saat data final tersedia. |

---

## 8. Analisis & Kebijakan Privasi
- **Analytics:** Menerapkan analitik nir-cookie yang ringan (*privacy-friendly analytics* seperti Cloudflare Web Analytics atau Vercel Analytics) yang tidak merekam identitas pribadi pengunjung, sehingga tidak memerlukan cookie consent banner yang mengganggu.
- **Kebijakan Pengisian Formulir:** Menampilkan catatan mikro di bawah formulir kontak: *"Informasi yang Anda kirimkan hanya digunakan oleh tim Koperasi Produsen Dirga Pangan Mandiri untuk keperluan korespondensi kemitraan usaha."*

---

## 9. Asumsi & Pertanyaan Terbuka

### 9.1 Asumsi
- Seluruh konten statis akan dikelola melalui modul data tunggal terpusat agar pengisian konten riil dapat dilakukan oleh pemilik proyek dalam waktu kurang dari 15 menit tanpa mengubah struktur layout.
- Integrasi pengiriman formulir pada mode statis menggunakan skema pesan terformat ke WhatsApp API serta cadangan tautan email `mailto:` langsung.

### 9.2 Pertanyaan Terbuka (Untuk Fase Review Konten Sebelum Rilis)
1. Berapa kapasitas populasi aktual kandang dan tonase panen rata-rata yang ingin dipublikasikan di bagian metrik angka?
2. Berapa nomor WhatsApp bisnis resmi yang akan menjadi penerima utama tombol WhatsApp?
3. Apakah ada dokumen sertifikasi higienitas/halal yang sudah terbit dan ingin ditampilkan nomornya di halaman Usaha?

---

## 10. Definition of Done (DoD) PRD
- [x] Semua 6 halaman di Brief tercantum secara lengkap (`SCR-001` s/d `SCR-006`).
- [x] Tiap NFR memiliki target numerik terukur dan metode verifikasi yang jelas.
- [x] Seluruh kebutuhan konten yang belum siap telah teridentifikasi beserta penanggung jawab dan strategi placeholder-nya.
