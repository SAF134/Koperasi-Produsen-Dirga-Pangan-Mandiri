import type { Metadata } from "next";
import Link from "next/link";
import NextImage from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  UserCheck,
  Briefcase,
} from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { organizationContent } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Struktur Pengurus & Pengawas",
  description:
    "Susunan dewan pengawas, pengurus inti, dan tata kelola organisasi Koperasi Produsen Dirga Pangan Mandiri yang transparan dan akuntabel.",
  alternates: {
    canonical: "/organisasi",
  },
};

export default function OrganizationPage() {
  return (
    <div className="flex flex-col">
      {/* ========================================================= */}
      {/* 1. HEADER & BREADCRUMB                                    */}
      {/* ========================================================= */}
      <section
        className="pt-10 pb-16 sm:pt-16 sm:pb-20 border-b border-border bg-canvas"
        aria-labelledby="org-heading"
      >
        <Container>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-ink">
              <li>
                <Link
                  href="/"
                  className="hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-agri-green rounded"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5 text-border-dark/40" aria-hidden="true" />
              </li>
              <li className="font-semibold text-ink" aria-current="page">
                Keorganisasian
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-agri-green mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-agri-green" aria-hidden="true" />
              Tata Kelola Lembaga
            </span>

            {/* Exactly 1 H1 on page */}
            <h1
              id="org-heading"
              className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl text-balance"
            >
              {organizationContent.header.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted-ink leading-relaxed text-justify">
              {organizationContent.header.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 2. BAGAN STRUKTUR ORGANISASI HIERARKIS                   */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 border-b border-border bg-surface"
        aria-labelledby="chart-heading"
      >
        <Container>
          <SectionHeading
            id="chart-heading"
            eyebrow="Bagan Organisasi"
            title="Alur Koordinasi & Akuntabilitas Koperasi"
            description={organizationContent.structureIntro}
          />

          {/* Visual Bagan Struktur (Organogram Card) */}
          <div className="rounded-card border border-border bg-canvas p-6 sm:p-10 lg:p-12">
            {/* Level 1: Rapat Anggota Tahunan */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-md rounded-card border-2 border-agri-green bg-surface p-5 text-center shadow-sm">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-agri-green bg-agri-light px-2.5 py-0.5 rounded-pill mb-1">
                  Kekuasaan Tertinggi
                </span>
                <h3 className="text-base sm:text-lg font-bold text-ink">
                  Rapat Anggota Tahunan (RAT)
                </h3>
                <p className="mt-1 text-xs text-muted-ink text-justify sm:text-center">
                  Musyawarah tertinggi seluruh anggota peternak pemilik koperasi
                </p>
              </div>

              {/* Vertical connector line */}
              <div className="h-8 w-0.5 bg-border my-1" aria-hidden="true" />
            </div>

            {/* Level 2: Dewan Pengawas & Dewan Pengurus (Sejajar) */}
            <div className="relative">
              {/* Horizontal crossbar on desktop */}
              <div className="hidden md:block absolute top-0 left-1/4 right-1/4 h-0.5 bg-border" aria-hidden="true" />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 pt-2 md:pt-6">
                {/* Cabang Pengawas */}
                <div className="flex flex-col items-center">
                  <div className="w-full rounded-card border border-border bg-surface p-5 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-agri-green/60 transition-all duration-300">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-ink bg-canvas border border-border/60 px-2.5 py-0.5 rounded-pill mb-1">
                      <ShieldCheck className="h-3 w-3 text-agri-green" aria-hidden="true" />
                      Fungsi Pengawasan
                    </span>
                    <h3 className="text-base font-bold text-ink">Dewan Pengawas</h3>
                    <p className="mt-1 text-xs text-muted-ink text-justify sm:text-center">
                      Mengawasi pelaksanaan kebijakan usaha dan kepatuhan anggaran dasar
                    </p>
                  </div>
                </div>

                {/* Cabang Pengurus */}
                <div className="flex flex-col items-center">
                  <div className="w-full rounded-card border border-border bg-surface p-5 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-agri-green/60 transition-all duration-300">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-ink bg-canvas border border-border/60 px-2.5 py-0.5 rounded-pill mb-1">
                      <Briefcase className="h-3 w-3 text-agri-green" aria-hidden="true" />
                      Fungsi Eksekutif
                    </span>
                    <h3 className="text-base font-bold text-ink">Dewan Pengurus</h3>
                    <p className="mt-1 text-xs text-muted-ink text-justify sm:text-center">
                      Memimpin operasional harian, kemitraan plasma, dan perjanjian B2B
                    </p>
                  </div>

                  {/* Vertical connector from Pengurus to Manajemen */}
                  <div className="hidden md:block h-8 w-0.5 bg-border my-1" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* Level 3: Tim Teknis & Manajemen Lapangan */}
            <div className="flex flex-col items-center mt-6 md:mt-2">
              <div className="w-full max-w-xl rounded-card border border-dashed border-border bg-surface/80 p-5 text-center">
                <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-muted-ink mb-1">
                  Pengelola Lapangan
                </span>
                <h3 className="text-sm sm:text-base font-bold text-ink">
                  Tim Teknis Kesehatan Hewan & Layanan Kemitraan Plasma
                </h3>
                <p className="mt-1 text-xs text-muted-ink text-justify sm:text-center">
                  Dokter hewan, supervisor pakan, dan technical service pendamping kandang
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 3. DEWAN PENGAWAS (KARTU PROFIL)                          */}
      {/* ========================================================= */}
      {/* ========================================================= */}
      {/* 3. DEWAN PENGURUS KOPERASI (KARTU FOTO BESAR)             */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 border-b border-border bg-canvas"
        aria-labelledby="board-heading"
      >
        <Container>
          <SectionHeading
            id="board-heading"
            eyebrow="Peran: Pengurus"
            title="Dewan Pengurus Koperasi"
            description="Pimpinan eksekutif yang menjalankan operasional, tata kelola usaha kemitraan closed house, dan manajemen permodalan koperasi."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {organizationContent.boardMembers.map((person, idx) => (
              <div
                key={idx}
                className="group flex flex-col overflow-hidden rounded-card border-2 border-border bg-surface shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Gambar Foto Orang (BESAR) */}
                <div className="relative w-full aspect-[4/5] bg-canvas overflow-hidden">
                  <NextImage
                    src={person.imageUrl || "/images/placeholder-person.svg"}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Badge Peran Mengambang di Foto */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white bg-agri-green shadow-md border border-white/20">
                      {person.category}
                    </span>
                  </div>
                </div>

                {/* Info Personil: Nama & Peran */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-surface">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-agri-green block">
                      {person.role}
                    </span>
                    <h3 className="mt-1.5 text-lg font-bold tracking-tight text-ink group-hover:text-agri-green transition-colors leading-snug">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted-ink">
                      {person.department}
                    </p>
                    {person.bio && (
                      <p className="mt-3 text-xs text-muted-ink leading-relaxed text-justify line-clamp-3">
                        {person.bio}
                      </p>
                    )}
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-border flex items-center justify-between text-[11px] text-muted-ink">
                    <span className="font-semibold text-ink">Peran: {person.category}</span>
                    <span className="inline-flex items-center gap-1 text-agri-green font-medium">
                      <UserCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      Aktif
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 4. DEWAN PENGAWAS KOPERASI (KARTU FOTO BESAR)             */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 border-b border-border bg-surface"
        aria-labelledby="supervisors-heading"
      >
        <Container>
          <SectionHeading
            id="supervisors-heading"
            eyebrow="Peran: Pengawas"
            title="Dewan Pengawas Koperasi"
            description="Badan pengawas independen yang mengawal kepatuhan anggaran dasar, keselamatan aset bersama, dan integritas pembukuan koperasi."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {organizationContent.supervisors.map((person, idx) => (
              <div
                key={idx}
                className="group flex flex-col overflow-hidden rounded-card border-2 border-border bg-surface shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Gambar Foto Orang (BESAR) */}
                <div className="relative w-full aspect-[4/5] bg-canvas overflow-hidden">
                  <NextImage
                    src={person.imageUrl || "/images/placeholder-person.svg"}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Badge Peran Mengambang di Foto */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white bg-ink shadow-md border border-white/20">
                      {person.category}
                    </span>
                  </div>
                </div>

                {/* Info Personil: Nama & Peran */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-surface">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-ink block">
                      {person.role}
                    </span>
                    <h3 className="mt-1.5 text-lg font-bold tracking-tight text-ink group-hover:text-agri-green transition-colors leading-snug">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted-ink">
                      {person.department}
                    </p>
                    {person.bio && (
                      <p className="mt-3 text-xs text-muted-ink leading-relaxed text-justify line-clamp-3">
                        {person.bio}
                      </p>
                    )}
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-border flex items-center justify-between text-[11px] text-muted-ink">
                    <span className="font-semibold text-ink">Peran: {person.category}</span>
                    <span className="inline-flex items-center gap-1 text-agri-green font-medium">
                      <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      Pengawas Resmi
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 5. ANGGOTA KOPERASI (KARTU FOTO BESAR)                     */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 border-b border-border bg-canvas"
        aria-labelledby="members-heading"
      >
        <Container>
          <SectionHeading
            id="members-heading"
            eyebrow="Peran: Anggota"
            title="Anggota Koperasi & Peternak Mitra"
            description="Para peternak mandiri dan mitra plasma yang menjadi pemilik kedaulatan tertinggi serta penggerak utama produksi unggas koperasi."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {organizationContent.members.map((person, idx) => (
              <div
                key={idx}
                className="group flex flex-col overflow-hidden rounded-card border-2 border-border bg-surface shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Gambar Foto Orang (BESAR) */}
                <div className="relative w-full aspect-[4/5] bg-canvas overflow-hidden">
                  <NextImage
                    src={person.imageUrl || "/images/placeholder-person.svg"}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Badge Peran Mengambang di Foto */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white bg-emerald-700 shadow-md border border-white/20">
                      {person.category}
                    </span>
                  </div>
                </div>

                {/* Info Personil: Nama & Peran */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-surface">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                      {person.role}
                    </span>
                    <h3 className="mt-1.5 text-lg font-bold tracking-tight text-ink group-hover:text-agri-green transition-colors leading-snug">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted-ink">
                      {person.department}
                    </p>
                    {person.bio && (
                      <p className="mt-3 text-xs text-muted-ink leading-relaxed text-justify line-clamp-3">
                        {person.bio}
                      </p>
                    )}
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-border flex items-center justify-between text-[11px] text-muted-ink">
                    <span className="font-semibold text-ink">Peran: {person.category}</span>
                    <span className="inline-flex items-center gap-1 text-agri-green font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      Anggota Terdaftar
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 6. KOMITMEN GOOD COOPERATIVE GOVERNANCE                  */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 bg-surface"
        aria-labelledby="governance-heading"
      >
        <Container>
          <SectionHeading
            id="governance-heading"
            eyebrow="Standar Akuntabilitas"
            title={organizationContent.governanceCommitment.title}
            description="Tiga pilar tata kelola bersih yang diterapkan koperasi untuk menjaga amanah seluruh anggota dan mitra usaha."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {organizationContent.governanceCommitment.points.map((pt, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-card border-2 border-border bg-canvas p-6 sm:p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-agri-green transition-all duration-300"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface border border-border text-agri-green font-bold text-sm mb-4 shadow-xs transition-transform duration-200 group-hover:scale-110">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-ink mb-2">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-ink leading-relaxed text-justify">
                    {pt.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/80 flex items-center gap-2 text-xs font-medium text-agri-green">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  <span>Kepatuhan SOP Terpenuhi</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
