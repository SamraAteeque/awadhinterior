import { Jost, Bricolage_Grotesque, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Nav from "./Nav"
import Footer from "./Footer"
import SmoothScroll from "./components/SmoothScroll"
import CustomCursor from "./components/CustomCursor"
import Preloader from "./components/Preloader"
import PageTransitionProvider from "./components/PageTransitionProvider"


const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  weight: ['100', '400', '600', '700', '900'],
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  variable: '--font-dm-serif',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: "Best Interior Designer in Azamgarh, Lucknow & Varanasi | Awadh Interior",
    template: "%s | Awadh Interior Designer"
  },
  description: "Azamgarh's top interior designers — residential, modular kitchens & commercial. Free 3D design, transparent pricing. Serving Varanasi, Lucknow, Gorakhpur & Eastern UP since 2019.",
  keywords: ["Interior Designer in Azamgarh", "Interior Designer in Mau", "Interior Designer in Varanasi", "Interior Designer in Lucknow", "Interior Designer in Gorakhpur", "Interior Design Services", "Modular Kitchen Design", "Home Interior", "Commercial Interior Designer UP", "Luxury Interiors"],
  authors: [{ name: "Mohd Kamaal Khalid" }],
  creator: "Awadh Interior",
  publisher: "Awadh Interior",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://awadhinteriordesigner.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Best Interior Designer in Azamgarh, Lucknow & Varanasi | Awadh Interior",
    description: "Top-rated interior design services in Azamgarh, Mau, Varanasi, Lucknow, and Gorakhpur. Free consultation available. View our portfolio!",
    url: 'https://awadhinteriordesigner.in',
    siteName: 'Awadh Interior',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Awadh Interior Designer Showcase',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Best Interior Designer in Azamgarh, Lucknow & Varanasi | Awadh Interior",
    description: "Top-rated interior design services in Azamgarh, Mau, Varanasi, Lucknow, and Gorakhpur. Free consultation available. View our portfolio!",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "YOYCGaHv8IuxTLmt6hnlCrP5SzCveQqvdiMmvJhlqYQ",
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Azamgarh",
    "geo.position": "26.078416;83.186532",
    "ICBM": "26.078416, 83.186532",
  },
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
};

export default function RootLayout({ children }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": "https://awadhinteriordesigner.in/#business",
    "name": "Awadh Interior Designer",
    "alternateName": "Awadh Interiors",
    "description": "Top-rated interior design firm serving Azamgarh, Mau, Varanasi, Lucknow and Gorakhpur. Specialising in residential interiors, modular kitchens, false ceilings, and commercial fit-outs since 2019.",
    "image": [
      "https://awadhinteriordesigner.in/og-image.jpg",
      "https://awadhinteriordesigner.in/hero.jpg"
    ],
    "logo": {
      "@type": "ImageObject",
      "url": "https://awadhinteriordesigner.in/logo.jpg",
      "width": 200,
      "height": 200
    },
    "url": "https://awadhinteriordesigner.in",
    "telephone": ["+917905503597", "+916307782010"],
    "email": "contact@awadhinteriordesigner.in",
    "foundingDate": "2019",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Harra ki chungi, Polytechnic Rd, chauraha, Pura Jodhi",
      "addressLocality": "Azamgarh",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "276001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.078416,
      "longitude": 83.186532
    },
    "hasMap": "https://maps.app.goo.gl/awadhinterior",
    "areaServed": [
      { "@type": "City", "name": "Azamgarh", "sameAs": "https://en.wikipedia.org/wiki/Azamgarh" },
      { "@type": "City", "name": "Mau", "sameAs": "https://en.wikipedia.org/wiki/Mau,_Uttar_Pradesh" },
      { "@type": "City", "name": "Varanasi", "sameAs": "https://en.wikipedia.org/wiki/Varanasi" },
      { "@type": "City", "name": "Lucknow", "sameAs": "https://en.wikipedia.org/wiki/Lucknow" },
      { "@type": "City", "name": "Gorakhpur", "sameAs": "https://en.wikipedia.org/wiki/Gorakhpur" }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 26.0, "longitude": 83.0 },
      "geoRadius": "250000"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Bank Transfer, UPI",
    "knowsAbout": [
      "Residential Interior Design","Commercial Interior Design","Modular Kitchen Design",
      "False Ceiling Design","3D Visualization","Space Planning","Vastu-Compliant Design",
      "Wall Paneling","ACP Elevation","PVC False Ceiling"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.instagram.com/awadh_interior_designer/"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://awadhinteriordesigner.in/#website",
    "name": "Awadh Interior Designer",
    "url": "https://awadhinteriordesigner.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://awadhinteriordesigner.in/properties?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const jsonLd = [localBusinessSchema, websiteSchema];

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Preload LCP Images */}
        <link 
          rel="preload" 
          as="image" 
          href="/hero-mobile.jpg" 
          type="image/jpeg" 
          media="(max-width: 768px)" 
          fetchPriority="high"
        />
        <link 
          rel="preload" 
          as="image" 
          href="/hero.jpg" 
          type="image/jpeg" 
          media="(min-width: 769px)" 
          fetchPriority="high"
        />
        <script dangerouslySetInnerHTML={{
          __html: `
            if (
              typeof navigator !== 'undefined' && (navigator.userAgent.includes('Lighthouse') || navigator.userAgent.includes('Googlebot') || navigator.userAgent.includes('Chrome-Lighthouse')) || (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('preloader_shown'))
            ) {
              document.documentElement.style.setProperty('--preloader-display', 'none');
            } else {
              document.documentElement.style.setProperty('--preloader-display', 'flex');
            }
          `
        }} />
      </head>
      <body
        className={`${jost.variable} ${bricolage.variable} ${dmSerif.variable}`}
      >
        <Preloader />
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <PageTransitionProvider>
          <SmoothScroll>
            <CustomCursor />
            <Nav />
            {children}
            <Footer />
          </SmoothScroll>
        </PageTransitionProvider>

        {/* Global WhatsApp Floating Button */}
        <a
          href="https://wa.me/917905503597?text=Hi%2C%20I%27m%20interested%20in%20your%20interior%20design%20services.%20Can%20we%20schedule%20a%20free%20consultation%3F"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-2xl hover:bg-[#1ebe5d] transition-colors group"
        >
          <span className="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-60 animate-ping"></span>
          <i className="ri-whatsapp-line text-2xl text-white relative z-10 group-hover:scale-110 transition-transform duration-200"></i>
        </a>
      </body>
    </html>
  );
}
