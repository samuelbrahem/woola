import type { Metadata } from "next";
import "./globals.css";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "Woola — Strata & Commercial Property Services",
    template: "%s · Woola",
  },
  description:
    "Mechanical, electrical, and building services for strata and commercial properties across Metro Vancouver, the Fraser Valley, and the Sea-to-Sky.",
  metadataBase: new URL("https://woola.ca"),
  applicationName: site.fullName,
  keywords: [
    "strata services BC",
    "commercial HVAC Vancouver",
    "standby generator service BC",
    "EV charger install strata",
    "building maintenance Metro Vancouver",
    "property services Vancouver",
  ],
  authors: [{ name: site.fullName }],
  icons: {
    icon: [
      { url: "/brand/favicon-w-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon-w-192.png", sizes: "192x192", type: "image/png" },
      { url: "/brand/favicon-w-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/brand/favicon-w-192.png", sizes: "192x192" }],
  },
  openGraph: {
    type: "website",
    siteName: site.fullName,
    title: "Woola — Strata & Commercial Property Services",
    description:
      "One accountable partner for strata and commercial properties across Metro Vancouver — mechanical, electrical, power, and building services under one PO.",
    url: "https://woola.ca",
    locale: "en_CA",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "Woola Services Group — Mechanical, Power, Electrical, Build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Woola — Strata & Commercial Property Services",
    description:
      "Mechanical, electrical, power, and building services for strata and commercial properties across BC.",
    images: ["/brand/og-image.png"],
  },
  alternates: {
    canonical: "https://woola.ca",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.fullName,
  legalName: site.fullName,
  description: site.description,
  url: "https://woola.ca",
  telephone: site.phone,
  email: site.email,
  logo: "https://woola.ca/brand/favicon-w-512.png",
  image: "https://woola.ca/brand/og-image.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.hq.line1,
    addressLocality: "Coquitlam",
    addressRegion: "BC",
    postalCode: "V3K 6X9",
    addressCountry: "CA",
  },
  areaServed: [
    "Vancouver",
    "Burnaby",
    "Coquitlam",
    "Surrey",
    "Richmond",
    "North Vancouver",
    "West Vancouver",
    "New Westminster",
    "Port Coquitlam",
    "Port Moody",
    "Delta",
    "Langley",
    "Maple Ridge",
    "Pitt Meadows",
    "Mission",
    "Abbotsford",
    "Squamish",
    "Whistler",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "17:00",
  },
  sameAs: ["https://woola.ca"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollReveal />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
