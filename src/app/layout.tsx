import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Denara Creative Digital - Jasa Kreatif & Digitalisasi UMKM",
  description: "Denara Creative Digital menyediakan jasa branding, website, social media management, dan fotografi untuk membantu UMKM naik kelas dengan digitalisasi.",
  keywords: "jasa branding, website UMKM, social media management, fotografi produk, digitalisasi UMKM, desain kreatif",
  authors: [{ name: "Denara Creative Digital" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
  icon: "/favicon.ico",
  shortcut: "/favicon.ico",
  apple: "/favicon.ico",
  },


  robots: "index, follow",
  openGraph: {
    title: "Denara Creative Digital - Jasa Kreatif & Digitalisasi UMKM",
    description: "UMKM Naik Kelas dengan Digitalisasi. Layanan branding, website, social media, dan fotografi profesional.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
 
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
