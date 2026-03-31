import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navigation } from "@/components/navigation";
import Footer from "@/components/footer";
import { CONTACT } from "@/lib/constants";

const googleSans = localFont({
  src: "../public/GoogleSansFlex_9pt-Regular.ttf",
  display: "swap",
  variable: "--font-google-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(CONTACT.website),
  title: {
    default:
      "Elektro Börner – Ihr Elektroinstallateur in Glarus & Umgebung",
    template: "%s | Elektro Börner",
  },
  description:
    "Elektro Börner GmbH – Elektroinstallationen, Kontrollen, Beratung & Telematik im Glarnerland. Über 40 Jahre Erfahrung. Jetzt Offerte anfragen.",
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: CONTACT.company,
    title: "Elektro Börner – Ihr Elektroinstallateur in Glarus & Umgebung",
    description:
      "Professionelle Elektroinstallationen, Kontrollen und Beratung im Glarnerland. Über 40 Jahre Erfahrung.",
    images: [
      {
        url: "/logo_boerner.png",
        width: 400,
        height: 200,
        alt: "Elektro Börner GmbH Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: CONTACT.website,
  },
  icons: {
    icon: "/favicon_elektro_boerner.png",
    apple: "/favicon_elektro_boerner.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  name: CONTACT.company,
  description:
    "Elektroinstallationen, periodische Kontrollen, Beratung & Planung und Telematik im Kanton Glarus. Über 40 Jahre Erfahrung.",
  url: CONTACT.website,
  telephone: `+41 ${CONTACT.phone[0].display}`,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.address.street,
    postalCode: CONTACT.address.zip,
    addressLocality: CONTACT.address.city,
    addressRegion: "GL",
    addressCountry: "CH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: CONTACT.geo.latitude,
    longitude: CONTACT.geo.longitude,
  },
  founder: {
    "@type": "Person",
    name: CONTACT.owner,
    jobTitle: "Eidg. dipl. Elektroinstallateur",
  },
  foundingDate: "2012",
  priceRange: "CHF",
  areaServed: CONTACT.areaServed.map((city) => ({
    "@type": "City",
    name: city,
  })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "17:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dienstleistungen",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Elektroinstallationen" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beratung & Planung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Periodische Kontrollen (NIV)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Telefon & Internet / Telematik" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Photovoltaik & E-Auto Ladestation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beleuchtung & Brandmeldeanlagen" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Überwachungsanlagen" } },
    ],
  },
  knowsAbout: [
    "Elektroinstallation",
    "Photovoltaik",
    "E-Mobilität",
    "Smart Home",
    "NIV 2018",
    "Periodische Kontrollen",
    "Telematik",
    "Brandmeldeanlagen",
  ],
  memberOf: [
    { "@type": "Organization", name: "EIT.swiss" },
    { "@type": "Organization", name: "electrosuisse" },
    { "@type": "Organization", name: "eev" },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={googleSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg"
        >
          Zum Inhalt springen
        </a>
        <Navigation />
        <form name="contact" data-netlify="true" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <textarea name="message" />
        </form>
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
