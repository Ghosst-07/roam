"use client"; // <-- Add this at the very top
import Image from "next/image";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import "./HeroSection.css";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Accessible Adventures",
      desc: "Budget-friendly trips with group discounts and handpicked deals for all.",
    },
    {
      title: "Trustworthy and Safe",
      desc: "Secure travel, trusted stays, and meticulous planning for stress-free journeys.",
    },
    {
      title: "Made-to-Order Trips",
      desc: "Every journey is personal—our itineraries are made to match you.",
    },
  ];

  // Scroll rotation state
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-screen h-screen bg-[#FCFCFC] overflow-hidden">
      {/* Background Decorations */}

      {/* Palm Tree */}
      <div className="pointer-events-none absolute bottom-10 right-10 z-10 w-36 lg:w-44 opacity-80 tree">
        <Image
          src="https://roamingrealm.com/assets/presets/default/images/shape/tree5.png"
          alt=""
          width={256}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Dotted Curves / Top Right */}
      <div className="pointer-events-none absolute top-0 right-0 z-0 w-64 h-64 lg:w-96 lg:h-96 opacity-30">
        <Image
          src="/flyingplane1.png"
          alt=""
          width={384}
          height={384}
          className="object-contain"
        />
      </div>

      {/* Bottom Decoration */}
      <div className="pointer-events-none absolute bottom-20 left-1/2 transform -translate-x-1/2 w-48 lg:w-64 opacity-80">
        <Image
          src="https://roamingrealm.com/assets/presets/default/images/shape/dash-line.png"
          alt="Bottom Decoration"
          width={256}
          height={150}
          className="object-contain"
        />
      </div>

      {/* Left Decoration Image - Rotates on scroll */}
      <div
        className="z-50 pointer-events-none absolute top-1/2 -left-80  opacity-80"
        style={{
          transform: `translateY(-50%) rotate(${scrollY * 0.3}deg)`, // Adjust rotation speed
          transition: "transform 0.1s linear", // Smooth rotation
        }}
      >
        <Image
          src="https://roamingrealm.com/assets/presets/default/images/shape/element-8.png"
          alt="Left Decoration"
          width={500}
          height={500} // Make it square for proper circular rotation
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-20 w-full max-w-7xl">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/whychooseus.png"
                alt="Historic Archway with Travelers"
                width={600}
                height={700}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 max-w-xl">
            <div className="mb-8">
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-[#ff9d00]">
                Why Choose Us
              </h4>

              <h2 className="mb-4 text-3xl lg:text-4xl font-bold leading-tight text-[#1C1C1C]">
                Why 365Roam is <br /> Unique
              </h2>

              <p className="max-w-md text-base leading-relaxed text-gray-600">
                Our guides bring places to life, sharing stories, culture, and
                hidden corners travelers often overlook.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full bg-[#ff9d00] text-white shadow-md shadow-orange-200">
                    <Check size={18} strokeWidth={3} />
                  </div>

                  <div>
                    <h3 className="mb-1 text-base font-bold text-[#1C1C1C]">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
