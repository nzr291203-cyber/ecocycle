import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "EcoCycle — Pusat Informasi Pengelolaan Sampah",
    template: "%s | EcoCycle",
  },
  description: siteConfig.description,
  keywords: [
    "pengelolaan sampah",
    "cara memilah sampah",
    "daur ulang",
    "bank sampah Sukabumi",
    "titik penjemputan sampah",
    "kompos rumah tangga",
    "e-waste",
    "minyak jelantah",
  ],
  authors: [{ name: "EcoCycle" }],
  creator: "EcoCycle",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: siteConfig.name,
    title: "EcoCycle — Pilah Sampah dari Rumah, Ubah Jadi Dampak",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoCycle — Pilah Sampah dari Rumah, Ubah Jadi Dampak",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "environment",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#047857",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body className="min-h-screen bg-white font-sans text-slate-800">
        <a
          href="#konten-utama"
          className="sr-only rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[999]"
        >
          Lewati ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
