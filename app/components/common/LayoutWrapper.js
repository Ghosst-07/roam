"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Check if the current path starts with "/dashboard"
  const isDashboard = pathname && pathname.startsWith("/dashboard");

  return (
    <>
      {/* Only show Navbar if NOT on dashboard */}
      {!isDashboard && <Navbar />}

      {children}

      {/* Only show Footer if NOT on dashboard */}
      {!isDashboard && <Footer />}
    </>
  );
}
