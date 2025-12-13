import type { Metadata } from "next";
import "./globals.css";
import { Preloader } from "@/components/layout/Preloader";
import SmoothScroll from "@/components/ui/smooth-scroll";
import { Analytics } from "@vercel/analytics/next";

export const viewport = {
  themeColor: "#dedede",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://bloopha.com'),
  title: {
    default: "Bloopha | Premium Digital Marketing & Branding Agency",
    template: "%s | Bloopha"
  },
  description: "Bloopha transforms ambitious brands through immersive digital experiences, strategic marketing, and high-end web design. Your one source for digital excellence.",
  applicationName: "Bloopha",
  authors: [{ name: "Bloopha Team" }],
  generator: "Next.js",
  keywords: ["Digital Marketing Agency", "Web Design", "Branding Strategy", "SEO Services", "Social Media Marketing", "Immersive Web Experience", "Luxury Branding", "Creative Agency"],
  referrer: "origin-when-cross-origin",
  creator: "Bloopha",
  publisher: "Bloopha",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bloopha.com",
    title: "Bloopha | Where Innovation Meets Design",
    description: "Award-winning digital solutions that accelerate growth. Experience the future of branding with Bloopha.",
    siteName: "Bloopha",
    images: [
      {
        url: "/images/pot/opentag.png", // Assuming a generic share image or I can point to one of the gallery items if no specific og-image exists
        width: 1200,
        height: 630,
        alt: "Bloopha Digital Agency Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloopha | Premium Digital Agency",
    description: "Transforming brands with immersive design and strategic marketing.",
    images: ["/images/pot/opentag.png"], // Consistent with OG using a placeholder path or existing asset
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        <SmoothScroll />
        <Preloader />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Bloopha",
              "url": "https://bloopha.com",
              "logo": "https://bloopha.com/icon.png",
              "sameAs": [
                "https://www.instagram.com/thebloopha"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "",
                "contactType": "customer service",
                "email": "contact@bloopha.com"
              },
              "description": "Bloopha transforms ambitious brands through immersive digital experiences, strategic marketing, and high-end web design."
            })
          }}
        />
        <div id="main-content" style={{ opacity: 0 }}>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
