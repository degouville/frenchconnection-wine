import type { Metadata } from "next";
import { Forum, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../lib/i18n/LanguageContext";

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://frenchconnection.wine";

export const metadata: Metadata = {
  title: "French Connection Wines — Premium French Wines in Vietnam",
  description:
    "Discover our curated selection of premium French wines imported directly from the South of France. Delivered across Vietnam.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "French Connection Wines",
    title: "French Connection Wines — Premium French Wines in Vietnam",
    description:
      "Curated French wines from South of France estates, delivered to your door across Vietnam.",
    images: [
      {
        url: "/images/lifestyle/vineyard-rows-aerial.webp",
        width: 1200,
        height: 630,
        alt: "French vineyard rows aerial view",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "French Connection Wines — Premium French Wines in Vietnam",
    description:
      "Curated French wines from South of France estates, delivered to your door across Vietnam.",
    images: ["/images/lifestyle/vineyard-rows-aerial.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "French Connection Wines",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logos/fcw-logo.png`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["English", "Vietnamese"],
      },
      areaServed: "VN",
      description:
        "Premium French wines imported directly from South of France estates. Delivered across Vietnam.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "French Connection Wines",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: ["en", "vi"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href="/images/lifestyle/vineyard-rows-aerial.webp"
        />
      </head>
      <body className={`${forum.variable} ${inter.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
