import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";
import { siteIdentity, contactData } from "@/content/site-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteIdentity.siteUrl),
  title: {
    default: `${siteIdentity.name} | Ayam Broiler Berkualitas`,
    template: `%s | ${siteIdentity.shortName}`,
  },
  description: siteIdentity.summary,
  applicationName: siteIdentity.name,
  authors: [{ name: siteIdentity.name, url: siteIdentity.siteUrl }],
  creator: siteIdentity.name,
  publisher: siteIdentity.name,
  keywords: [
    "Koperasi Produsen",
    "Dirga Pangan Mandiri",
    "Ayam Broiler",
    "Kemitraan Peternak",
    "Kandang Closed House",
    "Ayam Karkas Subang",
    "Peternakan Ayam Jawa Barat",
    "Pasokan Ayam Karkas",
    "Pangan Berkelanjutan",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/logo-koperasi.png",
    shortcut: "/images/favicon.ico",
    apple: "/images/logo-koperasi.png",
  },
  openGraph: {
    siteName: siteIdentity.name,
    title: `${siteIdentity.name} | Ayam Broiler Berkualitas`,
    description: siteIdentity.summary,
    url: siteIdentity.siteUrl,
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/images/hero-koperasi.webp",
        width: 1200,
        height: 630,
        alt: `${siteIdentity.name} - Peternakan Ayam Broiler Modern Closed House`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteIdentity.name} | Ayam Broiler Berkualitas`,
    description: siteIdentity.summary,
    images: ["/images/hero-koperasi.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteIdentity.siteUrl}/#organization`,
        name: siteIdentity.name,
        alternateName: siteIdentity.shortName,
        url: siteIdentity.siteUrl,
        logo: `${siteIdentity.siteUrl}/images/logo-koperasi.png`,
        description: siteIdentity.summary,
        foundingDate: siteIdentity.establishedYear.toString(),
        address: {
          "@type": "PostalAddress",
          streetAddress: contactData.officeAddress.street,
          addressLocality: contactData.officeAddress.city,
          addressRegion: contactData.officeAddress.province,
          addressCountry: "ID",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+${contactData.phoneRaw}`,
          contactType: "customer service",
          availableLanguage: ["Indonesian"],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteIdentity.siteUrl}/#localbusiness`,
        name: siteIdentity.name,
        url: siteIdentity.siteUrl,
        telephone: `+${contactData.phoneRaw}`,
        email: contactData.email,
        image: `${siteIdentity.siteUrl}/images/hero-koperasi.webp`,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: contactData.officeAddress.street,
          addressLocality: contactData.officeAddress.city,
          addressRegion: contactData.officeAddress.province,
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: contactData.coordinates.lat,
          longitude: contactData.coordinates.lng,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "08:00",
            closes: "17:00",
          },
        ],
      },
    ],
  };

  return (
    <html lang="id" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-canvas text-ink antialiased font-sans">
        {/* Skip to Main Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-button focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:outline-none"
        >
          Lewati ke konten utama
        </a>

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Main Content Area (padding top for fixed header, padding bottom on mobile for dock) */}
        <main id="main-content" className="flex-1 pt-20 pb-24 md:pb-0">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Mobile Floating Bottom Navigation Dock */}
        <BottomNav />
      </body>
    </html>
  );
}
