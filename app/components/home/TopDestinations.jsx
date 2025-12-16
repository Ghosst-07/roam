"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "New Delhi",
    location: "New Delhi, Delhi, India",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Agra",
    location: "Agra, Uttar Pradesh, India",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Jaipur",
    location: "Jaipur, Rajasthan, India",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Rishikesh",
    location: "Rishikesh, Uttarakhand",
    image:
      "https://images.unsplash.com/photo-1626014903700-1d89d98eb8d7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Manali",
    location: "Manali, Himachal Pradesh",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
  },
];

export default function TopDestinations() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* --- Background Bridge Image --- */}
      {/* Replaced SVG with Image component */}
      <div className="absolute top-0 left-0 w-80 h-64  pointer-events-none z-0">
        <Image
          // Replace this src with your actual image path (e.g., '/assets/bridge-sketch.png')
          src="https://roamingrealm.com/assets/presets/default/images/shape/shape-1.png"
          alt="Bridge Background"
          fill
          className="object-contain object-left-top"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h3
            className="text-[#F2994A] text-3xl font-[Satisfy,cursive] mb-2"
            style={{ fontFamily: "var(--font-satisfy, cursive)" }}
          >
            Top Destinations
          </h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-4">
            Locations to Explore
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Uncover the most beautiful locations with unique adventures and
            spectacular views.
          </p>
        </div>

        {/* Expandable Cards Container */}
        <div className="flex w-full gap-4 h-[400px] lg:h-[500px]">
          {destinations.map((dest) => {
            const isActive = activeId === dest.id;

            return (
              <div
                key={dest.id}
                onMouseEnter={() => setActiveId(dest.id)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out group ${
                  isActive ? "flex-[3]" : "flex-1"
                }`}
              >
                {/* Image */}
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t via-black/20 to-transparent transition-all duration-500 ${
                    isActive ? "from-black/90" : "from-black/60"
                  }`}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white z-10 flex flex-col justify-end h-full">
                  {/* Location Pin & Name */}
                  <div
                    className={`flex items-center gap-2 mb-1 text-[#F2994A] transition-all duration-500`}
                  >
                    <MapPin
                      size={isActive ? 24 : 20}
                      className="stroke-current stroke-2"
                    />

                    <span
                      className={`font-bold transition-all duration-500 whitespace-nowrap ${
                        isActive ? "text-2xl" : "text-lg lg:text-xl"
                      }`}
                    >
                      {dest.name}
                    </span>
                  </div>

                  {/* Full Location Text - Always Visible */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isActive
                        ? "opacity-100 mt-2 max-h-20"
                        : "opacity-80 mt-0 max-h-10"
                    }`}
                  >
                    <p
                      className={`text-gray-200 transition-all duration-500 ${
                        isActive
                          ? "text-sm lg:text-base whitespace-normal"
                          : "text-xs truncate"
                      }`}
                    >
                      {dest.location}
                    </p>
                  </div>

                  {/* Arrow Button */}
                  <div
                    className={`absolute bottom-6 right-6 w-12 h-12 bg-[#F2994A] rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
                      isActive
                        ? "scale-100 opacity-100 delay-100"
                        : "scale-0 opacity-0"
                    }`}
                  >
                    <ArrowUpRight size={24} className="text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
