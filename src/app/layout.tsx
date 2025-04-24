import type { Metadata } from "next";
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
  title: "Murphy Translator for Doreen 💕🐾",
  description: "Dog-to-human love notes from your biggest fan, Murphy.",
  openGraph: {
    title: "Murphy Translator for Doreen 💕🐾",
    description: "Dog-to-human love notes from Murphy.",
    url: "https://murphy-translator.vercel.app",
    siteName: "Murphy Translator",
    images: [
      {
        url: "/images/murphy.jpeg",
        width: 1200,
        height: 630,
        alt: "Murphy the Translator"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Murphy Translator for Doreen 💕🐾",
    description: "Messages from Murphy, the love pup.",
    images: ["/images/murphy.jpeg"]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
