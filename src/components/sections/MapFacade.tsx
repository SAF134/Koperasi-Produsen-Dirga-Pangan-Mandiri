"use client";

import { useState } from "react";
import { MapPin, ExternalLink, Navigation, Compass } from "lucide-react";
import { contactData, siteIdentity } from "@/content/site-data";

export default function MapFacade() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const directGoogleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    contactData.officeAddress.full
  )}`;

  return (
    <div className="relative w-full min-h-[460px] sm:min-h-[480px] overflow-hidden rounded-card border-2 border-border bg-surface shadow-card hover:shadow-card-hover transition-all duration-300">
      {isMapLoaded ? (
        <div className="relative w-full h-[460px] sm:h-[480px]">
          <iframe
            src={contactData.googleMapsEmbedUrl}
            title={`Peta Lokasi Interaktif ${siteIdentity.name}`}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Peta Google Maps lokasi kantor koperasi"
          />
          {/* Floating action overlay to open in Google Maps app */}
          <div className="absolute top-3 right-3 z-10">
            <a
              href={directGoogleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-button bg-surface/95 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-ink border border-border shadow-md hover:bg-surface hover:text-agri-green transition-all duration-200"
              aria-label="Buka navigasi penuh di Google Maps"
            >
              <span>Buka di Google Maps</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      ) : (
        <div className="relative w-full min-h-[460px] sm:min-h-[480px] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 text-center bg-canvas overflow-hidden">
          {/* Background Map Graphic Pattern */}
          <div
            className="absolute inset-0 opacity-[0.15] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #166534 1.5px, transparent 0)`,
              backgroundSize: "28px 28px",
            }}
            aria-hidden="true"
          />

          {/* Decorative geometric roads/contours lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M-50,120 Q200,80 400,220 T900,180"
              fill="none"
              stroke="#166534"
              strokeWidth="6"
            />
            <path
              d="M100,500 Q300,280 600,320 T1100,100"
              fill="none"
              stroke="#166534"
              strokeWidth="4"
            />
            <path
              d="M300,-50 L350,600"
              fill="none"
              stroke="#166534"
              strokeWidth="5"
            />
          </svg>

          {/* Centered Interactive Content Card */}
          <div className="relative z-10 max-w-lg w-full rounded-2xl border-2 border-border bg-surface p-4 sm:p-6 lg:p-8 shadow-card flex flex-col items-center my-auto">
            {/* Animated Location Pin Icon */}
            <div className="relative mb-3 flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-agri-green/20" aria-hidden="true" />
              <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-agri-light border-2 border-agri-green text-agri-green shadow-sm">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-agri-green" aria-hidden="true" />
              </div>
            </div>

            {/* Badge & Title */}
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-agri-green/30 bg-canvas px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-agri-green shadow-xs mb-2">
              <Compass className="h-3.5 w-3.5 text-agri-green" aria-hidden="true" />
              Titik Lokasi Kantor
            </span>

            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-ink text-center">
              {contactData.officeAddress.title}
            </h3>

            <p className="mt-1 text-xs sm:text-sm text-muted-ink leading-relaxed text-center max-w-md">
              {contactData.officeAddress.full}
            </p>

            <div className="mt-1.5 flex items-center gap-2 text-[11px] text-muted-ink">
              <span className="font-mono bg-canvas px-2 py-0.5 rounded border border-border">
                {contactData.coordinates.lat.toFixed(4)}, {contactData.coordinates.lng.toFixed(4)}
              </span>
            </div>

            {/* Two Action Buttons: Load Map on-page OR Open in Google Maps */}
            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setIsMapLoaded(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-button bg-agri-green px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white border-2 border-agri-green shadow-btn hover:shadow-btn-hover hover:bg-agri-green/90 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agri-green cursor-pointer"
              >
                <Navigation className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                <span>Muat Peta Interaktif</span>
              </button>

              <a
                href={directGoogleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-button bg-surface px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-ink border-2 border-border shadow-btn hover:shadow-btn-hover hover:border-agri-green hover:text-agri-green hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agri-green"
              >
                <span>Buka di Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              </a>
            </div>

            <p className="mt-2.5 text-[10px] sm:text-[11px] text-muted-ink text-center">
              Klik &quot;Muat Peta Interaktif&quot; untuk menampilkan navigasi langsung di halaman ini.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
