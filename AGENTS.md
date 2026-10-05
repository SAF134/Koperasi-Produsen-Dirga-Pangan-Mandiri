# AGENTS.md — Panduan & Aturan Kerja Agen AI

## 1. Ringkasan Proyek & Status
Website company profile Koperasi Produsen Dirga Pangan Mandiri (komoditas utama: ayam broiler).
Fokus utama: kredibilitas kelembagaan, transparansi mutu closed-house, dan konversi kemitraan B2B & peternak.
**Status saat ini:** Seluruh task implementasi T-001 s.d. T-012 selesai 100%, build statis tervalidasi bersih bebas error, situs siap produksi dan siap dideploy ke Vercel.

## 2. Peta Dokumen Rujukan
| File | Kapan Wajib Dibaca |
|---|---|
| [docs/00-BRIEF.md](docs/00-BRIEF.md) | Saat membutuhkan konteks latar belakang koperasi, target mitra, dan ringkasan kebutuhan |
| [docs/01-PRD.md](docs/01-PRD.md) | Sebelum mengerjakan task fungsional (`FR-xxx`), NFR terukur, dan spesifikasi SEO |
| [docs/02-DESIGN.md](docs/02-DESIGN.md) | Sebelum styling UI, menyusun wireframe halaman (`SCR-xxx`), atau membuat komponen |
| [docs/03-TECH_STACK.md](docs/03-TECH_STACK.md) | Sebelum konfigurasi tooling, routing Next.js, optimasi gambar, form, dan deployment |
| [docs/04-TASKS.md](docs/04-TASKS.md) | Di awal setiap sesi untuk membaca ruang lingkup task aktif berikutnya |

## 3. Stack & Versi
- **Framework:** Next.js (App Router, Static Export `output: 'export'`)
- **Bahasa & Styling:** TypeScript, Tailwind CSS
- **Komponen & Ikon:** shadcn/ui (Radix primitives), Lucide React
- **Data Konten:** Single source of truth di `src/content/site-data.ts`
- **Hosting Target:** Vercel (Hobby Tier, 100% Static HTML/CSS/JS, Rp 0/bulan)

## 4. Perintah Penting
```bash
npm install               # Instalasi dependensi proyek
npm run dev               # Menjalankan development server (http://localhost:3000)
npm run lint              # Pengecekan kualitas kode ESLint
npx tsc --noEmit          # Verifikasi kesesuaian tipe data TypeScript
npm run build             # Build statis Next.js menghasilkan folder /out
npx serve out             # Menjalankan pratinjau lokal hasil build statis
```

## 5. Struktur Folder
```text
├── docs/                 # Dokumentasi perencanaan (00-BRIEF s/d 04-TASKS)
├── public/               # Aset publik: gambar WebP, robots.txt, sitemap.xml
├── src/
│   ├── app/              # App Router (layout, page per rute, not-found)
│   ├── components/       # ui/ (shadcn), layout/ (nav & footer), shared/, sections/
│   ├── content/          # site-data.ts (seluruh data teks, legalitas, kontak)
│   ├── lib/              # utils.ts (cn helper)
│   └── styles/           # globals.css (CSS design tokens)
└── AGENTS.md, README.md, vercel.json, next.config.mjs, tailwind.config.ts, tsconfig.json
```

## 6. WAJIB DILAKUKAN
1. **Baca dokumen relevan** sebelum mulai mengedit atau membuat file kode.
2. **1 task per sesi:** Kerjakan hanya task aktif sesuai urutan dependensi di `docs/04-TASKS.md`.
3. **Patuhi design tokens:** Gunakan nilai token dari `docs/02-DESIGN.md` via Tailwind classes (`bg-canvas`, `text-ink`, `text-agri-green`). Dilarang meng-hardcode nilai warna/ukuran acak.
4. **Verifikasi mandiri:** Wajib menjalankan `npx tsc --noEmit`, `npm run lint`, dan `npm run build` sebelum menyatakan task selesai.
5. **Perbarui dokumen:** Tandai checklist `[x]` pada task yang selesai di `docs/04-TASKS.md`.

## 7. DILARANG
1. **DILARANG** mengubah requirement atau desain tanpa persetujuan eksplisit pemilik proyek.
2. **DILARANG** menambah dependensi npm baru di luar yang telah ditentukan tanpa izin.
3. **DILARANG** menyimpan/commit secret, credentials, atau API key rahasia ke dalam repositori.
4. **DILARANG** menjalankan perintah berbahaya/destruktif (`rm -rf`, format, git reset hard tanpa izin).
5. **DILARANG** melakukan refactoring besar di luar ruang lingkup task aktif.
6. **DILARANG** mengarang data legalitas/organisasi koperasi (gunakan placeholder terstruktur di `site-data.ts`).

## 8. Berhenti & Tanya Jika:
- Terjadi kontradiksi antar dokumen spesifikasi.
- Kebutuhan fitur ambigu atau memerlukan keputusan bisnis pemilik koperasi.
- Diperlukan dependensi tambahan yang tidak tercantum di `docs/03-TECH_STACK.md`.
- Terjadi kendala build/linting kritis yang memerlukan perubahan konfigurasi sistemik.

## 9. Format Laporan Akhir Sesi
Setiap kali menyelesaikan sebuah task, laporkan dengan format baku berikut:
```text
1. Ringkasan Perubahan: [Rincian fitur/komponen yang dikerjakan]
2. File Terdampak: [Daftar file baru / diubah]
3. Hasil Verifikasi: [Hasil eksekusi tsc, lint, build]
4. Catatan & Asumsi: [Catatan teknis khusus jika ada]
5. Langkah Berikutnya: [Task berikutnya di docs/04-TASKS.md]
```

## 10. Konvensi Commit
Terapkan Conventional Commits:
- `feat:` fitur baru (contoh: `feat: implementasi hero section beranda`)
- `fix:` perbaikan bug (contoh: `fix: perbaiki padding navigasi mobile`)
- `docs:` pembaruan dokumentasi (contoh: `docs: update checklist t-001`)
- `style:` penataan format kode tanpa merubah fungsi
- `chore:` konfigurasi tooling atau dependensi
