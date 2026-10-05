# PLAYBOOK: Website Company Profile Sederhana

Prompt untuk membuat dokumen perencanaan **sebelum coding** website company profile (halaman statis: Beranda, Tentang, Layanan, Kontak, dll.). Cocok untuk Claude Code, Cursor, Codex, Gemini CLI.

## 0. Cara Pakai

1. Jalankan prompt **berurutan**, satu prompt = satu dokumen.
2. **Review** tiap dokumen sebelum lanjut.
3. Asumsi → `[ASUMSI]`, hal belum jelas → `[PERTANYAAN TERBUKA]`.
4. **Siapkan konten lebih dulu** (logo, teks, foto, kontak, testimoni). Ini paling sering jadi penghambat.

### Struktur Folder
```
project-root/
├── README.md
├── AGENTS.md              # aturan agent (bisa di-copy jadi CLAUDE.md / .cursorrules)
└── docs/
    ├── 00-BRIEF.md
    ├── 01-PRD.md          # halaman, SEO, target performa
    ├── 02-DESIGN.md       # design tokens + spesifikasi halaman
    ├── 03-TECH_STACK.md   # stack + deployment + keamanan mini
    └── 04-TASKS.md
```

### Urutan

| Langkah | Prompt | Output |
|---|---|---|
| 1 | G1 (sekali) + P1 | `00-BRIEF` |
| 2 | P2 | `01-PRD` |
| 3 | P3 | `02-DESIGN` |
| 4 | P4 | `03-TECH_STACK` |
| 5 | P5 | `04-TASKS` |
| 6 | P6 | `AGENTS.md` |
| 7 | P7 | Kode task pertama |
| Opsional | P8 Audit, P9 README | Laporan, `README` |

ID yang dipakai: `FR-xxx` (kebutuhan), `NFR-xxx` (non-fungsional), `SCR-xxx` (halaman), `T-xxx` (task).

---

## G1. Persona (tempel sekali di awal sesi)

````text
Kamu Senior Web Developer & UI/UX Designer yang berpengalaman membuat website company profile.

ATURAN:
- Ini FASE PERENCANAAN: dilarang menulis kode implementasi.
- Jangan mengarang. Info kurang → tanya (maks. 8 pertanyaan) ATAU lanjut dengan [ASUMSI].
  Yang belum putus → [PERTANYAAN TERBUKA].
- Pilih solusi paling sederhana. Tiap keputusan teknis disertai alasan singkat.
- Bahasa: Indonesia; istilah teknis tetap Inggris. Output Markdown ringkas, tabel bila perlu.
- Baca dokumen di docs/ yang sudah ada dan jaga konsistensi. Jika konflik, laporkan.
````

## G2. Template Brief (isi sendiri, atau biarkan P1 yang mewawancarai)

````markdown
# BRIEF
- Nama perusahaan: [Koperasi Produsen Dirga Pangan Mandiri]
- Tujuan website: [kredibilitas]
- Target pengunjung: [umum]
- Halaman yang dibutuhkan: [Beranda, Profil, Usaha, Keorganisasian, Galeri, Kontak]
- Fitur khusus: [form kontak, tombol WhatsApp, peta, multi-bahasa, blog, galeri]
- Bahasa situs: [ID | EN | keduanya]
- Konten tersedia: [logo, teks, foto, video, testimoni: belum]
- Identitas visual: [warna brand, font, referensi website yang disukai]
- Domain & hosting: [vercel]
- Siapa yang mengedit konten nanti: [saya]
- Budget, deadline, preferensi teknologi: [budget 0, deadline akhir minggu ini, preferensi teknologi Next.js (App Router, Static Export)  dengan TypeScript, Tailwind CSS, komponen UI berbasis shadcn/ui, serta ikon modular dari Lucide Icons]
````

---

## P1. Brief

````text
Saya ingin membuat website company profile. Informasi awal: """<TULIS DI SINI / TEMPEL G2>"""

TUGAS:
1. Jika G2 belum lengkap, wawancarai saya dulu: maks. 2 putaran, 5 pertanyaan per putaran,
   beri contoh jawaban, tunggu jawaban saya.
2. Buat `docs/00-BRIEF.md` mengikuti template G2, plus: ringkasan (3 kalimat),
   daftar asumsi, dan risiko utama (mis. konten belum siap, deadline).
````

## P2. PRD

````text
INPUT: docs/00-BRIEF.md
TUGAS: Buat `docs/01-PRD.md` (ringkas).

STRUKTUR:
1. Tujuan & Non-Goals
2. Persona pengunjung (2–3) dan apa yang mereka cari di situs
3. Daftar halaman & isi section tiap halaman (urut dari atas ke bawah)
4. Functional Requirements: tabel [FR-xxx | Deskripsi | Prioritas MoSCoW]
   (termasuk form kontak, CTA, tombol WhatsApp, multi-bahasa bila ada)
5. Non-Functional Requirements terukur: tabel [NFR-xxx | Target | Cara verifikasi]
   Minimal: performa (Lighthouse ≥ 90, LCP < 2,5 dtk), responsif, aksesibilitas (WCAG AA),
   SEO, kompatibilitas browser
6. SEO: meta title/description per halaman, struktur heading, sitemap.xml, robots.txt,
   Open Graph, alt text gambar, schema Organization
7. Kebutuhan konten: tabel [konten | halaman | status siap/belum | penanggung jawab]
8. Analytics & privasi (mis. GA4/Plausible, banner cookie bila perlu)
9. Asumsi & pertanyaan terbuka

ATURAN: Requirement harus terukur. Jangan sebut teknologi implementasi.
DoD: [ ] Semua halaman di Brief tercantum  [ ] Tiap NFR punya angka  [ ] Konten yang belum siap teridentifikasi
````

## P3. Design

````text
INPUT: docs/00-BRIEF.md, docs/01-PRD.md
TUGAS: Buat `docs/02-DESIGN.md` agar agent bisa membangun UI konsisten TANPA mockup.

STRUKTUR:
1. Karakter brand & prinsip desain (3 prinsip + contoh lakukan/jangan)
2. Sitemap & navigasi (header, footer, menu mobile)
3. Design tokens (NILAI KONKRET, format tabel/YAML):
   - Warna light (& dark bila perlu): primary, secondary, netral, semantic; hex + rasio kontras
   - Tipografi: font family, skala ukuran, weight, line-height
   - Spacing, radius, shadow, lebar kontainer
4. Spesifikasi tiap halaman [SCR-xxx]: urutan section, wireframe teks/ASCII, isi/copywriting,
   CTA, kebutuhan gambar (ukuran & rasio)
5. Komponen yang dipakai ulang: tabel [nama | varian | state | aturan]
   (Navbar, Hero, Card layanan, Testimoni, CTA banner, Form, Footer, Tombol)
6. Responsivitas: breakpoint & perilaku (mobile-first)
7. Aksesibilitas: kontras, fokus keyboard, label form, alt text
8. Microcopy: pesan sukses/error form, halaman 404
9. Animasi: sederhana saja (durasi & easing), hormati reduced-motion

ATURAN: Mobile-first. Tiap halaman terhubung ke FR-xxx. Hindari desain yang butuh aset
yang belum tersedia.
````

## P4. Tech Stack + Deployment + Keamanan

````text
INPUT: docs/00 s.d. docs/02
TUGAS: Buat `docs/03-TECH_STACK.md` (ringkas).

ISI:
1. Pilihan stack + versi stabil, 2 alternatif, dan alasan terhadap NFR
   (pertimbangkan: Astro / Next.js statis / HTML+Tailwind; CMS hanya jika non-teknis
   perlu mengedit konten: Sanity, Decap, dll.)
2. Struktur folder proyek yang diusulkan
3. Penanganan form kontak: opsi (Formspree / serverless function / email service),
   anti-spam (honeypot/CAPTCHA), validasi input, tidak menyimpan data sensitif di log
4. Optimasi: format gambar (WebP/AVIF), lazy loading, font loading, ukuran bundle
5. Deployment: hosting (Vercel / Netlify / Cloudflare Pages), domain, DNS, SSL,
   auto-deploy dari Git, environment variable, rollback
6. Keamanan dasar: HTTPS, security header, tanpa secret di repo, update dependensi
7. Estimasi biaya bulanan (hosting, domain, CMS/form)
8. Cara menguji: lint, build, Lighthouse, cek link rusak, uji di perangkat nyata

ATURAN: Pilih yang paling sederhana & mapan. Hindari backend/database jika tidak perlu.
````

## P5. Tasks

````text
INPUT: seluruh docs/
TUGAS: Buat `docs/04-TASKS.md`: pecah pekerjaan jadi task kecil, 1 task = 1 sesi agent.

FORMAT PER TASK:
### T-001 — <judul>
- Terkait: FR / SCR | Dependensi:
- Dokumen yang WAJIB dibaca:
- Ruang lingkup (termasuk & TIDAK termasuk)
- Acceptance criteria yang bisa diverifikasi
- Perintah verifikasi (lint, build, run)
- Estimasi: ≤ 2 jam / ≤ 4 jam / ≤ 1 hari

URUTAN YANG DISARANKAN:
T-001 inisialisasi repo & tooling → T-002 design tokens & layout dasar (navbar, footer)
→ T-003 komponen reusable → T-004.. satu task per halaman → form kontak → SEO
(meta, sitemap, OG) → optimasi performa & aksesibilitas → deployment & domain → QA akhir.

ATURAN: Urut berdasarkan dependensi, tandai yang bisa paralel. Task > 1 hari harus dipecah.
````

## P6. AGENTS.md (di ROOT)

````text
INPUT: seluruh docs/
TUGAS: Buat `AGENTS.md`, maks. ±100 baris, imperatif & spesifik, rujuk docs dengan tautan
(jangan disalin).

STRUKTUR:
1. Ringkasan proyek (3 baris) & status saat ini
2. Peta dokumen: tabel [file | kapan wajib dibaca]
3. Stack & versi
4. Perintah penting (install, dev, build, lint, preview) dalam blok kode
5. Struktur folder
6. WAJIB: baca docs relevan dulu; 1 task per sesi; gunakan design tokens di 02-DESIGN.md
   (tanpa nilai warna/ukuran hardcode); jalankan lint + build sebelum menyatakan selesai;
   perbarui dokumen jika ada perubahan
7. DILARANG: ubah requirement/desain tanpa izin; tambah dependensi tanpa izin;
   commit secret; perintah destruktif; refactor besar di luar task; mengarang teks/konten
   perusahaan (pakai placeholder yang ditandai jelas)
8. Berhenti & tanya jika: konten tidak tersedia, requirement ambigu, perlu dependensi baru
9. Format laporan akhir: (a) yang diubah, (b) file terdampak, (c) hasil lint/build,
   (d) catatan, (e) langkah berikutnya
10. Konvensi commit: Conventional Commits (feat, fix, docs, style, chore)
````

## P7. Kickoff Implementasi

````text
Baca AGENTS.md, lalu docs/02-DESIGN.md, docs/03-TECH_STACK.md, dan docs/04-TASKS.md.
Kerjakan T-001 saja.

1. Ringkas pemahamanmu (maks. 5 baris) + dokumen yang dipakai.
2. Tampilkan rencana bertahap + file yang dibuat/diubah. TUNGGU persetujuan saya.
3. Implementasi kecil-kecil, jalankan lint & build tiap langkah.
4. Ada ambiguitas atau konten yang belum ada → BERHENTI dan tanya.
5. Akhiri dengan laporan sesuai format AGENTS.md, lalu usulkan task berikutnya.
````

---

## Opsional

### P8. Audit (sesi baru, sebelum coding)
````text
Kamu auditor independen. Baca semua docs/ dan AGENTS.md. JANGAN memperbaiki dulu.
Periksa: (1) halaman di Brief sudah ada di PRD, Design, dan Tasks? (2) kontradiksi antar
dokumen, (3) NFR tanpa cara verifikasi, (4) konten yang belum siap tapi dibutuhkan,
(5) SEO & aksesibilitas sudah tercakup di task? (6) perintah di AGENTS.md benar?
OUTPUT: tabel temuan [Severity Blocker/Major/Minor | Dokumen | Masalah | Rekomendasi],
skor kesiapan (0–100), dan keputusan yang harus saya ambil.
````

### P9. README
````text
INPUT: seluruh docs/ dan AGENTS.md
Buat `README.md` ringkas: nama & tujuan situs, stack, Quick Start (install, dev, build),
struktur folder, cara mengedit konten, cara deploy, dan tautan ke docs/.
````

### P10. Perubahan Setelah Rilis
````text
Perubahan: "<deskripsi, mis. tambah halaman Blog / ganti warna brand>".
Lakukan impact analysis: halaman, komponen, FR, task, SEO, dan estimasi usaha. Usulkan
diff ringkas dokumen terkait. Jangan menulis kode sebelum saya setuju.
````

---

## Checklist Sebelum Rilis

- [ ] Semua teks & foto asli sudah menggantikan placeholder
- [ ] Lighthouse: Performance, SEO, Accessibility ≥ 90
- [ ] Meta title/description, sitemap, OG image sudah ada
- [ ] Form kontak diuji (kirim, validasi, anti-spam)
- [ ] Uji di HP nyata dan minimal 2 browser
- [ ] Tidak ada link rusak; halaman 404 tersedia
- [ ] HTTPS aktif, domain terhubung, analytics berjalan
