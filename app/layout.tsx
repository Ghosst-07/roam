import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../app/components/home/HeroSection.css";
// Remove Navbar/Footer imports from here, they are now in LayoutWrapper
import { AuthProvider } from "./context/AuthContext";
import AuthGuard from "./components/common/AuthGurad";
import LayoutWrapper from "./components/common/LayoutWrapper"; // 1. Import the Wrapper

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
  description: "Discover unforgettable travel experiences...",
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
        <AuthProvider>
          <AuthGuard>
            {/* 2. Use LayoutWrapper to handle Navbar/Footer visibility */}
            <LayoutWrapper>{children}</LayoutWrapper>
          </AuthGuard>
        </AuthProvider>
      </body>
    </html>
  );
}
