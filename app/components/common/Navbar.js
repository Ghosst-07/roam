"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, LayoutDashboard } from "lucide-react";
import { useAuth } from "../../context/AuthContext"; // 1. Import Auth Hook

export default function Navbar() {
  const { user } = useAuth(); // 2. Get current user
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "TOURS", href: "/tours" },
    { name: "BOOKING INQUIRE", href: "/booking" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-8 h-8">
              <span className="text-2xl font-bold text-[#F2994A] italic">
                365
              </span>
              <span className="absolute -top-1 -right-1 text-[#F2994A]">
                ✨
              </span>
            </div>
            <span className="text-xl lg:text-2xl font-black tracking-tight text-[#1C1C1C] uppercase">
              Roam
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 relative pb-1 ${
                  isActive(link.href)
                    ? "text-[#F2994A]"
                    : "text-[#1C1C1C] hover:text-[#F2994A]"
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#F2994A] rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* --- AUTH BUTTONS SECTION --- */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              // 3. IF LOGGED IN: Show Dashboard Button
              <Link href="/dashboard">
                <button className="px-8 py-2.5 rounded-full bg-[#F2994A] text-white font-bold text-lg hover:bg-[#e08a3d] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-orange-200">
                  <LayoutDashboard size={20} />
                  Dashboard
                </button>
              </Link>
            ) : (
              // 4. IF LOGGED OUT: Show Login/Register
              <>
                <Link href="/login">
                  <button className="px-8 py-2.5 rounded-full border-2 border-[#F2994A] text-[#F2994A] font-bold text-lg hover:bg-[#F2994A] hover:text-white transition-all duration-300">
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button className="px-8 py-2.5 rounded-full bg-[#F2994A] text-white font-bold text-lg hover:bg-[#e08a3d] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-orange-200">
                    Register
                    <ArrowRight size={20} strokeWidth={3} />
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#1C1C1C] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-4 flex flex-col gap-4 h-screen">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-bold text-lg ${
                  isActive(link.href) ? "text-[#F2994A]" : "text-gray-800"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex flex-col gap-3 mt-4 border-t border-gray-100 pt-6">
              {user ? (
                <Link
                  href="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button className="w-full py-3 bg-[#F2994A] text-white font-bold rounded-full flex justify-center items-center gap-2">
                    <LayoutDashboard size={20} /> Dashboard
                  </button>
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <button className="w-full py-3 border-2 border-[#F2994A] text-[#F2994A] font-bold rounded-full">
                      Login
                    </button>
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <button className="w-full py-3 bg-[#F2994A] text-white font-bold rounded-full flex justify-center items-center gap-2">
                      Register <ArrowRight size={20} />
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
