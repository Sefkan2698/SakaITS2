// src/app/layout.js - Komplette SEO-optimierte Version
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // Basis Meta Tags
  title: "Saka IT-Solutions | KI-Agenten, Webdesign & IT-Support Goch",
  description: "Moderne IT-Lösungen in Goch & Niederrhein: KI-Agenten, professionelles Webdesign und 24/7 IT-Support. Innovative Technologie für KMU, Praxen und Selbständige ab 39€.",
  
  // Erweiterte Meta Tags
  keywords: "IT-Support Goch, Webdesign Kleve, KI-Agenten Niederrhein, IT-Service Weeze, Webentwicklung Kevelaer, Computer Reparatur Goch, Microsoft 365 Kleve, Cloud Migration Geldern, Website erstellen Goch, Digitalisierung KMU",
  
  // Open Graph Tags für Social Media
  openGraph: {
    title: "Saka IT-Solutions - Moderne IT für den Niederrhein",
    description: "KI-Agenten, Webdesign & 24/7 IT-Support in Goch, Kleve, Weeze. Innovative Lösungen für KMU und Selbständige. Kostenlose Beratung!",
    url: "https://sakaits.com",
    siteName: "Saka IT-Solutions",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/logo.png", // Dein aktuelles Logo
        width: 400, // Anpassen je nach Logo-Größe
        height: 400,
        alt: "Saka IT-Solutions Logo - IT-Dienstleister Goch Niederrhein"
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary", // summary für Logo, summary_large_image für Querformat
    title: "Saka IT-Solutions | IT-Support & Webdesign Goch",
    description: "Moderne IT-Lösungen im Niederrhein: KI-Agenten, Webdesign, 24/7 Support. Innovative Technologie für Ihr Unternehmen.",
    images: ["/logo.png"],
  },
  
  // Lokales SEO
  other: {
    // Business/Local SEO
    "geo.region": "DE-NW",
    "geo.placename": "Goch, Niederrhein",
    "geo.position": "51.6816;6.1664", // Goch Koordinaten
    "ICBM": "51.6816, 6.1664",
    
    // Business Info
    "contact:street_address": "Voßheiderstraße 154",
    "contact:locality": "Goch", 
    "contact:region": "Nordrhein-Westfalen",
    "contact:postal_code": "47574",
    "contact:country_name": "Deutschland",
    
    // Service Area
    "service:area": "Goch, Kleve, Weeze, Uedem, Kevelaer, Geldern, Rheinberg, Kamp-Lintfort, Moers, Wesel, Sonsbeck, Xanten, Kalkar",
    
    // Business Type
    "business:contact_data:business_type": "IT-Dienstleister",
    "business:contact_data:phone_number": "+49 174 1928943",
    "business:contact_data:website": "https://sakaits.com",
    
    // Preise & Services
    "service:price_range": "ab 39€",
    "service:availability": "24/7 Notfall-Support",
    "service:founded": "2025",
  },
  
  // Technische Meta Tags
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
  
  // Weitere SEO Tags
  alternates: {
    canonical: "https://sakaits.com",
  },
  
  // Strukturierte Daten werden separat hinzugefügt
  verification: {
    google: "your-google-verification-code", // Nach Google Search Console Setup
  }
};

// JSON-LD Strukturierte Daten für Local Business
const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://sakaits.com/#business",
      "name": "Saka IT-Solutions",
      "alternateName": "SakaITS",
      "url": "https://sakaits.com",
      "telephone": "+49-174-1928943",
      "priceRange": "ab 39€",
      "foundingDate": "2025",
      "description": "Moderne IT-Lösungen in Goch & Niederrhein: KI-Agenten, Webdesign und 24/7 IT-Support für KMU, Praxen und Selbständige.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Voßheiderstraße 154",
        "addressLocality": "Goch",
        "postalCode": "47574",
        "addressRegion": "Nordrhein-Westfalen",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.6816,
        "longitude": 6.1664
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Goch"
        },
        {
          "@type": "City", 
          "name": "Kleve"
        },
        {
          "@type": "City",
          "name": "Weeze"
        },
        {
          "@type": "City",
          "name": "Kevelaer"
        },
        {
          "@type": "City",
          "name": "Geldern"
        },
        {
          "@type": "City",
          "name": "Uedem"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT-Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "KI-Agenten Entwicklung",
              "description": "Entwicklung intelligenter KI-Agenten für Kundenservice und Automatisierung"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Webdesign & Webentwicklung",
              "description": "Moderne, responsive Websites mit React und Next.js"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "IT-Support",
              "description": "24/7 IT-Support, Microsoft 365, Cloud Migration"
            }
          }
        ]
      },
      "openingHours": "24/7", // Notfall-Support
      "sameAs": [
        "https://wa.me/491741928943"
        // Weitere Social Media Profile hier hinzufügen
      ],
      "founder": {
        "@type": "Person",
        "name": "Sefkan Saka",
        "jobTitle": "Fachinformatiker & KI-Entwickler"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://sakaits.com/#website",
      "url": "https://sakaits.com",
      "name": "Saka IT-Solutions",
      "description": "Moderne IT-Lösungen im Niederrhein",
      "inLanguage": "de-DE"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        {/* JSON-LD Strukturierte Daten */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        
        {/* Zusätzliche Meta Tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preconnect für Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleAnalytics />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}