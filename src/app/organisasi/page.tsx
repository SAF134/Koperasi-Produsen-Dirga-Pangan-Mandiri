import type { Metadata } from "next";
import Link from "next/link";
import NextImage from "next/image";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { organizationContent, type PersonProfile } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Struktur Pengurus & Pengawas",
  description:
    "Susunan dewan pengurus, dewan pengawas, dan pendiri Koperasi Produsen Dirga Pangan Mandiri yang berlandaskan transparansi dan akuntabilitas.",
  alternates: {
    canonical: "/organisasi",
  },
};

/**
 * Komponen Kartu Personil Organisasi
 * Menampilkan hanya: foto (rasio 3:4), badge category, role, dan name.
 */
function PersonCard({ person }: { person: PersonProfile }) {
  const badgeColor = {
    Pengurus: "bg-agri-green text-white border-white/20",
    Pengawas: "bg-ink text-white border-white/20",
    Pendiri: "bg-amber-700 text-white border-white/20",
  }[person.category];

  return (
    <div className="group flex flex-col overflow-hidden rounded-card border-2 border-border bg-surface shadow-card hover:shadow-card-hover hover:-translate-y-1.5 hover:border-agri-green/60 transition-all duration-300">
      {/* Gambar Foto Orang (Rasio 3:4) */}
      <div className="relative w-full aspect-[3/4] bg-canvas overflow-hidden">
        <NextImage
          src={person.imageUrl || "/images/placeholder_person.png"}
          alt={person.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Badge Kategori Mengambang di Foto */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold shadow-md border ${badgeColor}`}
          >
            {person.category}
          </span>
        </div>
      </div>

      {/* Info Personil: Peran & Nama */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-center bg-surface">
        <span className="text-xs font-bold uppercase tracking-wider text-agri-green block">
          {person.role}
        </span>
        <h3 className="mt-1.5 text-lg sm:text-xl font-bold tracking-tight text-ink group-hover:text-agri-green transition-colors leading-snug">
          {person.name}
        </h3>
      </div>
    </div>
  );
}

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

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-agri-green/30 bg-surface px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-agri-green shadow-xs hover:border-agri-green hover:shadow-card transition-all duration-200 mb-4">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-agri-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-agri-green" />
              </span>
              <span>Tata Kelola Lembaga</span>
            </span>

            {/* Exactly 1 H1 on page */}
            <h1
              id="org-heading"
              className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl text-balance text-center"
            >
              {organizationContent.header.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted-ink leading-relaxed text-center max-w-2xl mx-auto">
              {organizationContent.header.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 2. DEWAN PENGURUS KOPERASI (HIRARKI PALING TINGGI)        */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 border-b border-border bg-surface"
        aria-labelledby="board-heading"
      >
        <Container>
          <SectionHeading
            id="board-heading"
            eyebrow="Peran: Pengurus"
            title="Dewan Pengurus Koperasi"
            description="Pucuk pimpinan eksekutif yang bertanggung jawab mengelola operasional harian, tata kelola usaha kemitraan peternakan modern, dan arah strategis koperasi."
          />

          <div className="space-y-8 sm:space-y-10">
            {/* Tingkat 1: Pengurus Ketua (Paling Tinggi) */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-sm">
                <PersonCard person={organizationContent.pengurus.ketua} />
              </div>

              {/* Konektor Hirarki Visual */}
              <div className="flex flex-col items-center my-6 sm:my-8" aria-hidden="true">
                <div className="h-8 sm:h-10 w-0.5 bg-border-dark/30" />
                <div className="px-4 py-1 rounded-full bg-canvas border-2 border-border text-xs font-bold text-muted-ink shadow-xs">
                  Jajaran Pengurus
                </div>
                <div className="h-8 sm:h-10 w-0.5 bg-border-dark/30" />
              </div>
            </div>

            {/* Tingkat 2: Jajaran Pengurus (Di Bawah Ketua) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {organizationContent.pengurus.officers.map((person, idx) => (
                <PersonCard key={idx} person={person} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 3. DEWAN PENGAWAS KOPERASI (HIRARKI DI BAWAH PENGURUS)    */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 border-b border-border bg-canvas"
        aria-labelledby="supervisors-heading"
      >
        <Container>
          <SectionHeading
            id="supervisors-heading"
            eyebrow="Peran: Pengawas"
            title="Dewan Pengawas Koperasi"
            description="Badan independen yang mengawal kepatuhan anggaran dasar, keselamatan aset bersama, dan integritas pembukuan koperasi."
          />

          <div className="space-y-8 sm:space-y-10">
            {/* Tingkat 1: Ketua Pengawas */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-sm">
                <PersonCard person={organizationContent.pengawas.ketua} />
              </div>

              {/* Konektor Hirarki Visual */}
              <div className="flex flex-col items-center my-6 sm:my-8" aria-hidden="true">
                <div className="h-8 sm:h-10 w-0.5 bg-border-dark/30" />
                <div className="px-4 py-1 rounded-full bg-surface border-2 border-border text-xs font-bold text-muted-ink shadow-xs">
                  Anggota Pengawas
                </div>
                <div className="h-8 sm:h-10 w-0.5 bg-border-dark/30" />
              </div>
            </div>

            {/* Tingkat 2: Anggota Pengawas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
              {organizationContent.pengawas.members.map((person, idx) => (
                <PersonCard key={idx} person={person} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 4. PENDIRI KOPERASI (BAGIAN TERAKHIR)                      */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 border-b border-border bg-surface"
        aria-labelledby="founders-heading"
      >
        <Container>
          <SectionHeading
            id="founders-heading"
            eyebrow="Peran: Pendiri"
            title="Pendiri Koperasi"
            description="Tokoh pemrakarsa yang meletakkan fondasi berdirinya Koperasi Produsen Dirga Pangan Mandiri untuk mewujudkan kemandirian peternak rakyat."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {organizationContent.pendiri.map((person, idx) => (
              <PersonCard key={idx} person={person} />
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 5. KOMITMEN GOOD COOPERATIVE GOVERNANCE                  */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 bg-canvas"
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
                className="group flex flex-col justify-between rounded-card border-2 border-border bg-surface p-6 sm:p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-agri-green transition-all duration-300"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-canvas border border-border text-agri-green font-bold text-sm mb-4 shadow-xs transition-transform duration-200 group-hover:scale-110">
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
