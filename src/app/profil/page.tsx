import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  HeartHandshake,
  Sprout,
  Sparkles,
  Award,
} from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "@/components/shared/FeatureCard";
import {
  siteIdentity,
  profileContent,
} from "@/content/site-data";

export const metadata: Metadata = {
  title: "Profil & Legalitas Resmi",
  description:
    "Mengenal visi, misi, nilai luhur, dan legalitas resmi Koperasi Produsen Dirga Pangan Mandiri dalam mewujudkan kemandirian pangan nasional.",
  alternates: {
    canonical: "/profil",
  },
};

export default function ProfilePage() {
  return (
    <div className="flex flex-col">
      {/* ========================================================= */}
      {/* 1. HEADER & BREADCRUMB                                    */}
      {/* ========================================================= */}
      <section
        className="pt-10 pb-16 sm:pt-16 sm:pb-20 border-b border-border bg-canvas"
        aria-labelledby="profile-heading"
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
                Profil & Legalitas
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-agri-green mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-agri-green" aria-hidden="true" />
              Tentang Koperasi
            </span>

            {/* Exactly 1 H1 on page */}
            <h1
              id="profile-heading"
              className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl text-balance"
            >
              {profileContent.header.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted-ink leading-relaxed text-justify">
              {profileContent.header.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 2. SEJARAH & LATAR BELAKANG PENDIRIAN                     */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 border-b border-border bg-surface"
        aria-labelledby="story-heading"
      >
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-agri-green block mb-2">
                Asal Usul & Cita-Cita
              </span>
              <h2
                id="story-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-ink"
              >
                {profileContent.story.title}
              </h2>

              <div className="mt-6 space-y-4 text-sm sm:text-base text-muted-ink leading-relaxed text-justify">
                {profileContent.story.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Side Card: Prinsip Kelembagaan */}
            <div className="lg:col-span-5 rounded-card border border-border bg-canvas p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface border border-border text-agri-green">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-ink">Bentuk Badan Hukum</h3>
                  <p className="text-xs text-muted-ink">{siteIdentity.legalForm}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-ink leading-relaxed text-justify">
                Koperasi didirikan berdasarkan UU Perkoperasian No. 25 Tahun 1992, mengedepankan musyawarah anggota sebagai pemegang kedaulatan tertinggi serta perlakuan setara bagi seluruh peternak mitra plasma.
              </p>

              <div className="mt-6 pt-6 border-t border-border/80 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-medium text-ink">
                  <CheckCircle2 className="h-4 w-4 text-agri-green shrink-0" aria-hidden="true" />
                  <span>Kemitraan berlandaskan asas kekeluargaan</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-ink">
                  <CheckCircle2 className="h-4 w-4 text-agri-green shrink-0" aria-hidden="true" />
                  <span>Transparansi timbangan & pembagian SHU</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-ink">
                  <CheckCircle2 className="h-4 w-4 text-agri-green shrink-0" aria-hidden="true" />
                  <span>Standarisasi biosecurity closed house</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 3. VISI & MISI KOPERASI                                   */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 border-b border-border bg-canvas"
        aria-labelledby="vision-heading"
      >
        <Container>
          <SectionHeading
            id="vision-heading"
            eyebrow="Arah Strategis"
            title="Visi & Misi Koperasi"
            description="Komitmen jangka panjang untuk menjaga kedaulatan pangan hewani dan memperkuat kemandirian ekonomi peternak rakyat."
          />

          {/* Kartu Visi */}
          <div className="rounded-card border border-border bg-surface p-8 sm:p-10 mb-8 relative overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
            <span className="text-xs font-bold uppercase tracking-wider text-agri-green block mb-2">
              Visi Jangka Panjang
            </span>
            <p className="text-lg sm:text-2xl font-bold tracking-tight text-ink leading-relaxed text-balance">
              &ldquo;{profileContent.visionMission.vision}&rdquo;
            </p>
          </div>

          {/* Daftar Misi 4 Langkah */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {profileContent.visionMission.missions.map((mission, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-card border border-border bg-surface p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-agri-green/60 transition-all duration-300"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-agri-light text-sm font-bold text-agri-green">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-ink mb-1">
                    Misi {idx + 1}
                  </h3>
                  <p className="text-sm sm:text-base text-ink font-medium leading-relaxed text-justify">
                    {mission}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 4. NILAI-NILAI INTI (CORE VALUES)                          */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 border-b border-border bg-surface"
        aria-labelledby="values-heading"
      >
        <Container>
          <SectionHeading
            id="values-heading"
            eyebrow="Karakter & Etika"
            title="Nilai-Nilai Koperasi"
            description="Empat nilai utama yang menjadi pedoman perilaku kepengurusan, pengelolaan teknis, dan hubungan kemitraan dengan anggota."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {profileContent.coreValues.map((val, idx) => {
              const icon =
                idx === 0 ? (
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                ) : idx === 1 ? (
                  <HeartHandshake className="h-5 w-5" aria-hidden="true" />
                ) : idx === 2 ? (
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Sprout className="h-5 w-5" aria-hidden="true" />
                );

              return (
                <FeatureCard
                  key={idx}
                  title={val.title}
                  description={val.description}
                  icon={icon}
                  variant="default"
                />
              );
            })}
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 5. LEGALITAS & LEGAL STANDING (KREDENSIAL RESMI)          */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 border-b border-border bg-canvas"
        aria-labelledby="legalities-heading"
      >
        <Container>
          <SectionHeading
            id="legalities-heading"
            eyebrow="Kepastian Hukum"
            title="Legalitas & Legal Standing Resmi"
            description="Kredensial hukum dan perizinan resmi yang menjamin keabsahan transaksi pasokan usaha B2B serta keamanan kemitraan peternak."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {profileContent.legalities.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-card border border-border bg-surface p-6 sm:p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-agri-green/60 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-agri-green bg-agri-light px-2.5 py-0.5 rounded-pill">
                      <Award className="h-3.5 w-3.5" aria-hidden="true" />
                      {item.status}
                    </span>
                    <span className="text-[11px] font-medium text-muted-ink">
                      {item.issuer}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-ink">
                    {item.label}
                  </h3>

                  <p className="mt-2 font-mono text-sm sm:text-base font-semibold text-ink bg-canvas px-3 py-1.5 rounded border border-border inline-block">
                    {item.number}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-muted-ink leading-relaxed text-justify">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-card border border-border bg-surface p-5 text-center text-xs text-muted-ink shadow-xs">
            <p className="text-justify sm:text-center">
              Dokumen fisik legalitas asli dapat diverifikasi oleh mitra bisnis resmi atau instansi berwenang melalui sekretariat kantor koperasi.
            </p>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 6. STANDAR BIOSECURITY & KESEJAHTERAAN TERNAK             */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 bg-surface"
        aria-labelledby="biosecurity-heading"
      >
        <Container>
          <SectionHeading
            id="biosecurity-heading"
            eyebrow="Jaminan Higienitas"
            title={profileContent.biosecurity.title}
            description={profileContent.biosecurity.subtitle}
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {profileContent.biosecurity.principles.map((pr) => (
              <div
                key={pr.step}
                className="flex flex-col rounded-card border border-border bg-canvas p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-agri-green/60 transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface border border-border text-agri-green font-bold text-sm mb-4">
                  0{pr.step}
                </div>

                <h3 className="text-base font-bold text-ink mb-2">
                  {pr.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-ink leading-relaxed text-justify">
                  {pr.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
