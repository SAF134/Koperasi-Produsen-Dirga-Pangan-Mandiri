import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ChevronRight,
  MessageCircle,
  Building,
  Warehouse,
} from "lucide-react";
import Container from "@/components/shared/Container";
import ContactForm from "@/components/sections/ContactForm";
import MapFacade from "@/components/sections/MapFacade";
import {
  siteIdentity,
  contactData,
  contactContent,
} from "@/content/site-data";

export const metadata: Metadata = {
  title: "Kontak & Alamat Kantor",
  description:
    "Hubungi Koperasi Produsen Dirga Pangan Mandiri untuk pemesanan karkas ayam, konsultasi kemitraan peternak, dan kunjungan kantor atau kandang.",
  alternates: {
    canonical: "/kontak",
  },
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${contactData.phoneRaw}?text=${encodeURIComponent(
    contactData.defaultWaMessage
  )}`;

  return (
    <div className="flex flex-col">
      {/* ========================================================= */}
      {/* 1. HEADER & BREADCRUMB                                    */}
      {/* ========================================================= */}
      <section
        className="pt-10 pb-16 sm:pt-16 sm:pb-20 border-b border-border bg-canvas"
        aria-labelledby="contact-heading"
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
                Kontak & Lokasi
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-agri-green/30 bg-surface px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-agri-green shadow-xs hover:border-agri-green hover:shadow-card transition-all duration-200 mb-4">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-agri-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-agri-green" />
              </span>
              <span>Komunikasi Resmi</span>
            </span>

            {/* Exactly 1 H1 on page */}
            <h1
              id="contact-heading"
              className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl text-balance text-center"
            >
              {contactContent.header.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted-ink leading-relaxed text-center max-w-2xl mx-auto">
              {contactContent.header.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 2. DUA KOLOM: INFORMASI KONTAK & FORMULIR                */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 border-b border-border bg-surface"
        aria-label="Titik Kontak dan Formulir"
      >
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Kolom Kiri: Detail Informasi Kontak (5 kolom di lg) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-agri-green block mb-2">
                  Kanal Komunikasi
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                  Informasi Titik Kontak
                </h2>
                <p className="mt-3 text-sm sm:text-base text-muted-ink leading-relaxed text-justify">
                  Silakan hubungi perwakilan pengurus koperasi atau kunjungi fasilitas operasional kami pada jam kerja.
                </p>
              </div>

              {/* Kartu Alamat & Kontak */}
              <div className="space-y-4">
                {/* Kantor Sekretariat */}
                <div className="flex items-start gap-4 rounded-card border border-border bg-canvas p-5 sm:p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 hover:border-agri-green/60 transition-all duration-300">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface border border-border text-agri-green shadow-xs">
                    <Building className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink">
                      {contactData.officeAddress.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-ink leading-relaxed">
                      {contactData.officeAddress.full}
                    </p>
                  </div>
                </div>

                {/* Sentra Kandang */}
                <div className="flex items-start gap-4 rounded-card border border-border bg-canvas p-5 sm:p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 hover:border-agri-green/60 transition-all duration-300">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface border border-border text-agri-green shadow-xs">
                    <Warehouse className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink">
                      {contactData.farmCenter.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-ink leading-relaxed">
                      {contactData.farmCenter.full}
                    </p>
                  </div>
                </div>

                {/* WhatsApp & Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-card border border-border bg-canvas p-5 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 hover:border-agri-green/60 transition-all duration-300">
                    <div className="flex items-center gap-2 text-agri-green mb-2">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      <span className="text-xs font-semibold">WhatsApp</span>
                    </div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-ink hover:text-agri-green transition-colors block"
                    >
                      {contactData.phoneDisplay}
                    </a>
                    <span className="text-[11px] text-muted-ink mt-0.5 block">Respon cepat admin</span>
                  </div>

                  <div className="rounded-card border-2 border-border bg-canvas p-5 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 hover:border-agri-green transition-all duration-300">
                    <div className="flex items-center gap-2 text-agri-green mb-2">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span className="text-xs font-semibold">Email</span>
                    </div>
                    <a
                      href={`mailto:${contactData.email}`}
                      className="text-xs sm:text-sm font-bold text-ink hover:text-agri-green transition-colors block break-all"
                    >
                      {contactData.email}
                    </a>
                    <span className="text-[11px] text-muted-ink mt-0.5 block">Surat & proposal resmi</span>
                  </div>
                </div>

                {/* Jam Operasional */}
                <div className="rounded-card border border-border bg-canvas p-5 flex items-start gap-3.5 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <Clock className="h-5 w-5 shrink-0 text-agri-green mt-0.5" aria-hidden="true" />
                  <div className="text-xs text-muted-ink leading-relaxed">
                    <strong className="font-semibold text-ink block text-sm mb-0.5">
                      Jam Kerja Pelayanan:
                    </strong>
                    <p>{contactData.operatingHours}</p>
                    <p className="mt-1 text-[11px] text-muted-ink">{contactData.operatingHoursNote}</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-button bg-wa py-3.5 px-6 text-sm font-semibold text-white shadow-btn hover:shadow-btn-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  <span>Chat WhatsApp Langsung Dengan Admin</span>
                </a>
              </div>
            </div>

            {/* Kolom Kanan: Formulir Kontak Interaktif (7 kolom di lg) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 3. GOOGLE MAPS EMBED INTERAKTIF                          */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 bg-canvas"
        aria-labelledby="map-heading"
      >
        <Container>
          <div className="flex flex-col items-center text-center mb-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-agri-green/30 bg-surface px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-agri-green shadow-xs hover:border-agri-green hover:shadow-card transition-all duration-200 mb-3.5">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-agri-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-agri-green" />
              </span>
              <span>Petunjuk Navigasi</span>
            </span>
            <h2
              id="map-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-ink text-center"
            >
              Peta Lokasi Sentra Koperasi
            </h2>
            <p className="mt-2 text-sm text-muted-ink text-center max-w-xl">
              Titik lokasi sentra peternakan closed house di kawasan sentra unggas Jawa Barat, Indonesia.
            </p>
          </div>

          {/* Maps On-Demand Facade Container */}
          <MapFacade />
        </Container>
      </section>
    </div>
  );
}
