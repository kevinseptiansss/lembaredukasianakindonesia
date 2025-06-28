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

export const metadata = {
  title: "Lembar Edukasi Anak Indonesia - E-Book Edukasi Anak yang Mengasyikkan",
  description: "Seri Pengetahuan Anak yang dapat digunakan di gadget dan dicetak mandiri secara tidak terbatas. E-Book Edukasi Anak Indonesia, E-Book Anak Muslim, dan Lembar Digital Mewarnai.",
  keywords: "e-book anak, edukasi anak, buku digital anak, mewarnai digital, pendidikan anak indonesia, buku anak muslim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
