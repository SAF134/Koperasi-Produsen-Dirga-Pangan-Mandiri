import Link from "next/link";
import NextImage from "next/image";
import { MapPin, Mail, Phone, Clock, ShieldCheck } from "lucide-react";
import {
  siteIdentity,
  contactData,
  footerContent,
} from "@/content/site-data";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${contactData.phoneRaw}?text=${encodeURIComponent(
    contactData.defaultWaMessage
  )}`;

  return (
    <footer className="border-t border-border bg-surface text-ink transition-colors">
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-12">
          {/* Kolom 1: Profil, Identitas, & Legal Standing (6 kolom di md, 7 kolom di lg) */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-between">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agri-green rounded-md"
                aria-label={`${siteIdentity.name} - Beranda`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-canvas border border-border overflow-hidden p-0.5">
                  <NextImage
                    src="/images/logo-koperasi.png"
                    alt="Logo Koperasi Produsen Dirga Pangan"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className="text-base sm:text-lg font-bold tracking-tight text-ink">
                  Koperasi Produsen Dirga Pangan
                </span>
              </Link>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-ink text-justify">
                {siteIdentity.summary}
              </p>
            </div>

            {/* Legal verification badge */}
            <div className="mt-8 flex items-center gap-3 rounded-card border-2 border-border bg-canvas p-3.5 max-w-md shadow-card hover:shadow-card-hover transition-all duration-300">
              <ShieldCheck className="h-5 w-5 shrink-0 text-agri-green" aria-hidden="true" />
              <div className="text-xs text-muted-ink text-justify">
                <span className="font-semibold text-ink block">Badan Hukum Terdaftar</span>
                {footerContent.legalNote}
              </div>
            </div>
          </div>

          {/* Kolom 2: Sentra Operasional & Kontak (6 kolom di md, 5 kolom di lg) */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-ink">
              Sentra & Kontak Resmi
            </h3>

            <div className="space-y-3 text-sm text-muted-ink">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-agri-green mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="font-medium text-ink block">Kantor Sekretariat:</strong>
                  {contactData.officeAddress.full}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 shrink-0 text-agri-green mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="font-medium text-ink block">Jam Pelayanan:</strong>
                  {contactData.operatingHours}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-agri-green" aria-hidden="true" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-agri-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agri-green rounded"
                >
                  {contactData.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5 min-w-0">
                <Mail className="h-4 w-4 shrink-0 text-agri-green" aria-hidden="true" />
                <a
                  href={`mailto:${contactData.email}`}
                  className="text-xs md:text-xs lg:text-sm text-ink hover:text-agri-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agri-green rounded break-all sm:break-normal"
                >
                  {contactData.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Baris Bawah: Hak Cipta & Disclaimer */}
        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-ink">
          <p>{footerContent.copyright}</p>
          <p className="text-center md:text-right">
            Menjunjung tinggi prinsip tata kelola perkoperasian yang bersih, transparan, dan akuntabel.
          </p>
        </div>
      </div>
    </footer>
  );
}
