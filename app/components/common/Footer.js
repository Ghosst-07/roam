"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Send, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white pt-20 pb-10 overflow-hidden">
      {/* --- Background Decorations --- */}
      {/* Dotted Line & Plane Path */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-20 z-0 hidden lg:block">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
          <path
            d="M50,400 Q150,200 250,250 T400,50"
            stroke="#F2994A"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        </svg>
      </div>
      {/* Plane Icon (Top Right) */}
      <div className="absolute top-10 right-10 text-gray-300 transform -rotate-12 hidden lg:block opacity-50">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* --- Column 1: Brand & Balloon --- */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2 font-bold text-2xl text-[#1C1C1C]">
              {/* Replace src with your actual logo file */}

              <span>365Roam</span>
            </div>

            <p className="text-gray-600 font-medium">
              Explore our tour packages with 365Roam.
            </p>

            {/* Hot Air Balloon Illustration */}
            <div className="relative w-32 h-40 mt-6 opacity-80">
              {/* Using a placeholder image that resembles the screenshot style */}
              <Image
                src="https://roamingrealm.com/assets/presets/default/images/shape/ballon.png"
                alt="Hot Air Balloon"
                width={100}
                height={120}
                className="object-contain animate-balloon "
              />
            </div>
          </div>

          {/* --- Column 2: Important Links --- */}
          <div>
            <h3 className="text-xl font-bold text-[#1C1C1C] mb-6">
              Important Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Tours", href: "/tours" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-gray-600 hover:text-[#F2994A] transition-colors font-medium"
                  >
                    <ArrowUpRight
                      size={18}
                      className="mr-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                    {item.name}{" "}
                    {/* Render the name instead of the entire item */}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Column 3: Company Link --- */}
          <div>
            <h3 className="text-xl font-bold text-[#1C1C1C] mb-6">
              Company Link
            </h3>
            <ul className="space-y-4">
              {[
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms-of-service" },
                {
                  name: "Refund and Cancellation",
                  href: "/refund-cancellation",
                },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-gray-600 hover:text-[#F2994A] transition-colors font-medium"
                  >
                    <ArrowUpRight
                      size={18}
                      className="mr-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Column 4: Newsletter --- */}
          <div>
            <h3 className="text-xl font-bold text-[#1C1C1C] mb-6">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6 font-medium leading-relaxed">
              Join Our Travel Tribe – Get the Best Deals & Destination Ideas
              Delivered to Your Inbox!
            </p>

            {/* Input Field */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#FFF8F1] border border-[#FFE0C2] rounded-lg py-4 pl-4 pr-16 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#F2994A] focus:ring-1 focus:ring-[#F2994A]"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#F2994A] hover:bg-[#e08a3d] text-white px-4 rounded-md transition-colors shadow-sm">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
