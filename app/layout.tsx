import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../app/components/home/HeroSection.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: "/favicon.ico",
  title: "365Roam - Explore the World with Us",
  description:
    "Discover unforgettable travel experiences with 365Roam. Explore top destinations, popular tours, and personalized itineraries. Start your adventure today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mt-10`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
