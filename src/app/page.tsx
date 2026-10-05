import type { Metadata } from "next";
import {
  ShieldCheck,
  Users,
  Truck,
  ArrowRight,
  CheckCircle2,
  Scale,
  Sparkles,
} from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import StatCard from "@/components/shared/StatCard";
import FeatureCard from "@/components/shared/FeatureCard";
import Button from "@/components/ui/Button";
import { homeContent } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Koperasi Produsen Dirga Pangan Mandiri | Ayam Broiler Berkualitas",
  description:
    "Koperasi produsen peternakan ayam broiler terpadu. Menyediakan pasokan ayam karkas higienis, kemitraan peternak mandiri, dan pangan berkelanjutan.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Preload Responsive LCP Hero Image for Instant Mobile LCP */}
      <link
        rel="preload"
        as="image"
        href={homeContent.hero.image.mobileSrc}
        media="(max-width: 640px)"
        type="image/webp"
      />
      <link
        rel="preload"
        as="image"
        href={homeContent.hero.image.src}
        media="(min-width: 641px)"
        type="image/webp"
      />

      {/* ========================================================= */}
      {/* 1. HERO SECTION (DENGAN TEMPAT GAMBAR UTAMA KOPERASI)      */}
      {/* ========================================================= */}
      <section
        className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-border bg-canvas overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-8 xl:gap-12 items-center">
            {/* Kolom Teks & Aksi Utama (Desktop: 7 kolom) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Live Status Pill */}
              <div className="inline-flex items-center gap-2.5 rounded-pill border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-ink shadow-sm mb-4 sm:mb-6 w-fit">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-status-green"></span>
                </span>
                <span>{homeContent.hero.badge}</span>
              </div>

              {/* Main Headline (H1 Tunggal) */}
              <h1
                id="hero-heading"
                className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.15rem] font-extrabold tracking-tight text-ink text-balance leading-[1.18] sm:leading-[1.12]"
              >
                {homeContent.hero.headline}
              </h1>

              {/* Sub-headline / Lead paragraph */}
              <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-muted-ink leading-relaxed text-justify">
                {homeContent.hero.subheadline}
              </p>

              {/* Call-to-Action Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href={homeContent.hero.primaryCta.href}
                  className="w-full sm:w-auto"
                  iconRight={<ArrowRight className="h-4 w-4 text-white" aria-hidden="true" />}
                >
                  {homeContent.hero.primaryCta.label}
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  href={homeContent.hero.secondaryCta.href}
                  className="w-full sm:w-auto"
                >
                  {homeContent.hero.secondaryCta.label}
                </Button>
              </div>

              {/* Quick Trust Highlights di bawah tombol */}
              <div className="mt-8 pt-6 border-t border-border/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-muted-ink">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-agri-green shrink-0" aria-hidden="true" />
                  <span className="font-medium text-ink">Closed House Modern</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-agri-green shrink-0" aria-hidden="true" />
                  <span className="font-medium text-ink">Biosecurity Ketat</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <Scale className="h-4 w-4 text-agri-green shrink-0" aria-hidden="true" />
                  <span className="font-medium text-ink">Kemitraan Terbuka</span>
                </div>
              </div>
            </div>

            {/* Kolom Tempat Gambar Utama Koperasi (Desktop: 5 kolom, Tablet: proporsional, Mobile: kartu elegan) */}
            <div className="lg:col-span-5 w-full">
              <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-border bg-surface shadow-card hover:shadow-card-hover transition-all duration-300">
                {/* Rasio Aspek Gambar: 16:9 HD di semua layar */}
                <div className="relative w-full aspect-video bg-muted/30">
                  <picture>
                    <source
                      type="image/webp"
                      media="(max-width: 640px)"
                      srcSet={homeContent.hero.image.mobileSrc}
                    />
                    <source
                      type="image/webp"
                      srcSet={homeContent.hero.image.src}
                    />
                    <img
                      src={homeContent.hero.image.fallbackSrc}
                      alt={homeContent.hero.image.alt}
                      width={1280}
                      height={720}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 2. PILAR KEUNGGULAN KOPERASI (3 PILAR NILAI)             */}
      {/* ========================================================= */}
      <section
        className="py-20 sm:py-28 border-b border-border bg-surface"
        aria-labelledby="pillars-heading"
      >
        <Container>
          <SectionHeading
            id="pillars-heading"
            eyebrow="Fondasi Kualitas"
            title="Tiga Pilar Keunggulan Koperasi"
            description="Standar operasional terukur yang menjamin kualitas unggas, keadilan bagi peternak, dan kontinuitas pasokan mitra bisnis."
          />

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            {homeContent.pillars.map((pillar) => {
              const icon =
                pillar.iconName === "ShieldCheck" ? (
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                ) : pillar.iconName === "Users" ? (
                  <Users className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Truck className="h-6 w-6" aria-hidden="true" />
                );

              return (
                <FeatureCard
                  key={pillar.id}
                  title={pillar.title}
                  description={pillar.description}
                  icon={icon}
                  variant={pillar.id === "kemitraan" ? "wash" : "default"}
                />
              );
            })}
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 3. METRIK CAPAIAN & ANGKA KUNCI                          */}
      {/* ========================================================= */}
      <section
        className="py-20 sm:py-28 bg-canvas"
        aria-labelledby="metrics-heading"
      >
        <Container>
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-agri-green/30 bg-surface px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-agri-green shadow-xs hover:border-agri-green hover:shadow-card transition-all duration-200 mb-3.5">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-agri-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-agri-green" />
              </span>
              <span>Kapasitas & Integritas</span>
            </span>
            <h2
              id="metrics-heading"
              className="text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl text-center"
            >
              Pertumbuhan Nyata Peternakan Rakyat
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-muted-ink max-w-xl text-center">
              Data kapasitas terkelola yang terus bertumbuh melalui kolaborasi peternak plasma binaan di Jawa Barat.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeContent.metrics.map((metric, idx) => (
              <StatCard
                key={idx}
                value={metric.value}
                label={metric.label}
                description={metric.description}
                icon={<Sparkles className="h-4 w-4 text-agri-green" aria-hidden="true" />}
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
