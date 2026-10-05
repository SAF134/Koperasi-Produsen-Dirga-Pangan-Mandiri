import type { Metadata } from "next";
import Link from "next/link";
import {
  Scale,
  Thermometer,
  Wind,
  Droplets,
  Cpu,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/ui/Button";
import {
  businessContent,
  contactData,
} from "@/content/site-data";

export const metadata: Metadata = {
  title: "Produksi & Kemitraan Ayam Broiler",
  description:
    "Layanan produksi ayam broiler closed house, pasokan karkas berkualitas, dan program kemitraan peternak terpercaya bersama Koperasi Dirga Pangan Mandiri.",
  alternates: {
    canonical: "/usaha",
  },
};

export default function BusinessPage() {
  const whatsappUrl = `https://wa.me/${contactData.phoneRaw}?text=${encodeURIComponent(
    "Halo Divisi Usaha Koperasi Dirga Pangan Mandiri, saya ingin berkonsultasi mengenai pemesanan pasokan ayam karkas dan skema kemitraan peternak."
  )}`;

  return (
    <div className="flex flex-col">
      {/* ========================================================= */}
      {/* 1. HEADER & BREADCRUMB                                    */}
      {/* ========================================================= */}
      <section
        className="pt-10 pb-16 sm:pt-16 sm:pb-20 border-b border-border bg-canvas"
        aria-labelledby="business-heading"
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
                Usaha & Produksi
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-agri-green mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-agri-green" aria-hidden="true" />
              Unit Usaha & Komoditas
            </span>

            {/* Exactly 1 H1 on page */}
            <h1
              id="business-heading"
              className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl text-balance"
            >
              {businessContent.header.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted-ink leading-relaxed text-justify">
              {businessContent.header.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 2. PENJELASAN RANTAI PASOK HULU KE HILIR                 */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-20 border-b border-border bg-surface"
        aria-labelledby="supply-chain-heading"
      >
        <Container>
          <div className="rounded-card border border-border bg-canvas p-6 sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-agri-green block mb-2">
                Integrasi Usaha
              </span>
              <h2
                id="supply-chain-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-ink"
              >
                {businessContent.supplyChain.title}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-ink leading-relaxed text-justify">
                {businessContent.supplyChain.description}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 border-t border-border pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface border border-border text-agri-green font-bold text-sm">
                  1
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink">Hulu Usaha</h3>
                  <p className="text-xs text-muted-ink">Penyediaan bibit DOC & pakan berkualitas</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface border border-border text-agri-green font-bold text-sm">
                  2
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink">Budidaya Modern</h3>
                  <p className="text-xs text-muted-ink">Kandang closed house & biosecurity ketat</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface border border-border text-agri-green font-bold text-sm">
                  3
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink">Hilir & Distribusi</h3>
                  <p className="text-xs text-muted-ink">Penyerapan panen & logistik rantai dingin</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 3. SPESIFIKASI KOMODITAS UNGGULAN                        */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 border-b border-border bg-canvas"
        aria-labelledby="products-heading"
      >
        <Container>
          <SectionHeading
            id="products-heading"
            eyebrow="Standar Kualitas"
            title="Spesifikasi Komoditas Ayam Broiler"
            description="Detail spesifikasi produk ternak hidup dan olahan potong higienis yang siap memenuhi standar industri makanan dan pasar komersial."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {businessContent.products.map((prod) => (
              <div
                key={prod.id}
                className="flex flex-col justify-between rounded-card border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-agri-green/60 transition-all duration-300"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-agri-green bg-agri-light px-3 py-1 rounded-pill">
                      {prod.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-ink bg-canvas border border-border px-3 py-1 rounded-pill">
                      <Scale className="h-3.5 w-3.5 text-agri-green" aria-hidden="true" />
                      {prod.weightRange}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-ink">
                    {prod.name}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-muted-ink leading-relaxed text-justify">
                    {prod.description}
                  </p>

                  <div className="mt-6 border-t border-border/70 pt-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-ink mb-3">
                      Keunggulan Standar:
                    </h4>
                    <ul className="space-y-2.5">
                      {prod.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-ink font-medium">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-agri-green mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-ink">
                    Tersedia pasokan harian & mingguan
                  </span>
                  <Button variant="primary" size="sm" href={whatsappUrl}>
                    Pesan Pasokan
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 4. TEKNOLOGI KANDANG CLOSED HOUSE                        */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 border-b border-border bg-surface"
        aria-labelledby="tech-heading"
      >
        <Container>
          <SectionHeading
            id="tech-heading"
            eyebrow="Modernisasi Fasilitas"
            title={businessContent.technology.title}
            description={businessContent.technology.description}
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {businessContent.technology.features.map((feat, idx) => {
              const icon =
                idx === 0 ? (
                  <Thermometer className="h-5 w-5" aria-hidden="true" />
                ) : idx === 1 ? (
                  <Droplets className="h-5 w-5" aria-hidden="true" />
                ) : idx === 2 ? (
                  <Wind className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Cpu className="h-5 w-5" aria-hidden="true" />
                );

              return (
                <div
                  key={idx}
                  className="group flex flex-col rounded-card border border-border bg-canvas p-6 sm:p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-agri-green/60 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface border border-border text-agri-green mb-5 shadow-xs transition-transform duration-200 group-hover:scale-110">
                    {icon}
                  </div>
                  <h3 className="text-base font-bold text-ink mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-ink leading-relaxed text-justify">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 5. ALUR 4 LANGKAH KEMITRAAN PETERNAK PLASMA              */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 bg-canvas"
        aria-labelledby="partnership-heading"
      >
        <Container>
          <SectionHeading
            id="partnership-heading"
            eyebrow="Pemberdayaan Peternak"
            title={businessContent.partnership.title}
            description={businessContent.partnership.subtitle}
          />

          {/* Stepper Diagram Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
            {businessContent.partnership.steps.map((st) => (
              <div
                key={st.step}
                className="group relative flex flex-col justify-between rounded-card border border-border bg-surface p-6 sm:p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-agri-green/60 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-agri-green text-white text-sm font-bold shadow-xs transition-transform duration-200 group-hover:scale-110">
                      {st.step}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-ink">
                      Tahap {st.step}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-ink mb-2.5">
                    {st.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-ink leading-relaxed text-justify">
                    {st.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 text-[11px] text-agri-green font-medium">
                  {st.step < 4 ? "Lanjut ke tahap berikutnya →" : "Siklus kemitraan berkelanjutan ✓"}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
