"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      title: "Discover Our Story",
      description:
        "At 365Roam, we craft effortless, inspiring journeys filled with lasting memories—curated to your style with authenticity and trust.",
    },
    {
      title: "What We Do",
      description: "Smooth support at every step—from planning to return",
    },
    {
      title: "365Roam Promise",
      description:
        "365Roam offers unique journeys across diverse destinations, designed for every traveler.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* --- Background Decorations --- */}
      {/* Palm Tree Sketch (Bottom Right) */}
      <div className="absolute bottom-0 right-0 w-48 h-64 pointer-events-none opacity-80 z-0 hidden lg:block">
        <Image
          src="https://roamingrealm.com/assets/img/banner/palm-tree.png"
          alt=""
          fill
          className="object-contain object-bottom-right"
        />
      </div>

      {/* Dotted Line Path (Center Bottom) */}
      <div className="absolute bottom-20 left-1/3 w-1/3 h-40 pointer-events-none opacity-30 z-0">
        <svg viewBox="0 0 200 100" fill="none" className="w-full h-full">
          <path
            d="M0,50 Q100,100 200,50"
            stroke="#9CA3AF"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      {/* Floating Sketches (Left Side) */}
      <div className="absolute top-1/3 left-10 w-16 h-16 opacity-20 hidden lg:block -rotate-12">
        {/* Placeholder for camera/map icons seen in screenshot */}
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* --- Page Header (Breadcrumbs) --- */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-3">
            About
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm font-bold">
            <span className="text-[#1C1C1C]">Home</span>
            <span className="text-[#F2994A] text-xs">●</span>
            <span className="text-[#F2994A]">About</span>
          </div>
        </div>

        {/* --- Main Content Split --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2">
            <h3
              className="text-[#F2994A] text-2xl font-[Satisfy,cursive] mb-2"
              style={{ fontFamily: "var(--font-satisfy, cursive)" }}
            >
              About 365Roam
            </h3>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-6 leading-tight">
              Tour Packages Made <br /> Simple
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Handpicked trips, friendly prices, and hassle-free booking—crafted
              by travelers for travelers.
            </p>

            {/* Checklist */}
            <div className="space-y-8">
              {features.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2
                      className="text-[#F2994A]"
                      size={24}
                      fill="white"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#1C1C1C] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 leading-relaxed text-sm lg:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image & Balloon */}
          <div className="w-full lg:w-1/2 relative">
            {/* Hot Air Balloon (Floating Right) */}
            <div className="absolute -top-10 -right-10 w-24 h-32 z-20 animate-bounce duration-[3000ms]">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2867/2867919.png" // Placeholder balloon
                alt="Balloon"
                width={96}
                height={128}
                className="object-contain opacity-80"
              />
            </div>

            {/* Main Image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[500px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1598324789736-4861f89564a0?q=80&w=1000&auto=format&fit=crop" // Indian Fort/Palace Image
                alt="Historic Fort"
                fill
                className="object-cover"
              />
              {/* Soft gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* --- MakeMyTrip Banner --- */}
        <div className="mt-24 border border-[#F2994A]/30 bg-[#FFFBF5] rounded-xl p-8 text-center max-w-4xl mx-auto shadow-sm">
          <p className="text-[#1C1C1C] font-bold italic text-sm lg:text-base mb-6">
            “365Roam.com is an authorized partner of MakeMyTrip, offering you a
            smooth and reliable experience for booking flights, hotels, and
            holiday packages.”
          </p>
          <div className="flex justify-center">
            <Image
              src="https://roamingrealm.com/assets/images/general/mk-logo.png"
              alt="MakeMyTrip Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
