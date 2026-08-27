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
  title:
    "SR Spa– Best Deep Tissue, Hot Stone & Couples Massage",

  description:
    "Best Massage Spa in Nigdi – Stress Relief & Healing Therapies. Enjoy professional massage services including deep tissue, aromatherapy, hot stone therapy and couples spa.",

  keywords:
    "spa Kothrud, massage Kothrud, deep tissue massage, hot stone massage, couples massage, SR spa, body massage pune",
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