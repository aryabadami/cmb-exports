import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cmbexports.com"),
  title: {
    default: "CMB Exports | Premium Indian Rice Exporter",
    template: "%s | CMB Exports",
  },
  description:
    "M/s. C.M. Badami and Sons supplies premium Sona Masoori and Lachkari Kolam rice with export-ready logistics from India.",
  keywords: [
    "Indian rice exporter",
    "Sona Masoori rice",
    "Lachkari Kolam rice",
    "bulk rice supplier",
    "CMB Exports",
  ],
  openGraph: {
    title: "CMB Exports | Premium Indian Rice Exporter",
    description:
      "Reliable sourcing, quality assurance and export-ready rice logistics from India.",
    type: "website",
    url: "/",
    siteName: "CMB Exports",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Premium Indian rice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CMB Exports | Premium Indian Rice Exporter",
    description: "Trusted Indian rice supply for global buyers.",
    images: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "M/s. C.M. Badami and Sons",
  alternateName: "CMB Exports",
  url: "https://cmbexports.com",
  logo: "https://cmbexports.com/logo.png",
  description:
    "Export-focused supplier of premium Indian non-basmati rice.",
  email: "cmb@cmbfoodsandgrains.com",
  telephone: "+91 78927 55421",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Karnataka",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
