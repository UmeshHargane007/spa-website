import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://srspa.vercel.app"),

  title: {
    default: "SR Spa & Massage | Spa & Massage in Kothrud, Pune",
    template: "%s | SR Spa & Massage",
  },

  description:
    "SR Spa & Massage in Kothrud, Pune offers professional Ayurvedic, Deep Tissue, Aromatherapy, Thai, Head and Couples Massage. Experience relaxing spa and massage therapies in Pune.",

  keywords: [
    "SR Spa Kothrud",
    "SR Spa Pune",
    "SR Spa Kothrud Pune",
    "spa in Kothrud",
    "spa in Pune",
    "massage in Kothrud",
    "massage in Pune",
    "massage spa Kothrud Pune",
    "best spa in Kothrud",
    "best spa in Pune",
    "body massage Kothrud",
    "body massage Pune",
    "Ayurvedic massage Kothrud",
    "Ayurvedic massage Pune",
    "deep tissue massage Kothrud",
    "deep tissue massage Pune",
    "Thai massage Kothrud",
    "Thai massage Pune",
    "aromatherapy massage Kothrud",
    "couples massage Pune",
  ],

  alternates: {
    canonical: "https://srspa.vercel.app/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://srspa.vercel.app/",
    siteName: "SR Spa & Massage",
    title: "SR Spa & Massage | Kothrud, Pune",
    description:
      "Professional spa and massage therapies in Kothrud, Pune including Ayurvedic, Deep Tissue, Aromatherapy, Thai, Head and Couples Massage.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SR Spa & Massage in Kothrud, Pune",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SR Spa & Massage | Kothrud, Pune",
    description:
      "Professional spa and massage therapies in Kothrud, Pune.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}