"use client";

import { MousePointerClick, CalendarCheck, ThumbsUp } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: MousePointerClick,
    title: "Find Your Tour",
    description: "Choose where your unforgettable journey begins.",
  },
  {
    id: 2,
    icon: CalendarCheck,
    title: "Book for Your Group",
    description: "Easy tour booking—just a few clicks away.",
  },
  {
    id: 3,
    icon: ThumbsUp,
    title: "Enjoy Our Tour",
    description: "Chill, adventure, and treasure every moment.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* --- Background Decoration (Dotted Line) --- */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-40 z-0">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
          <path
            d="M400,0 Q200,100 300,300 T100,400"
            stroke="#F2994A"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <h4 className="text-[#F2994A] font-bold tracking-wider uppercase mb-3 text-sm">
            How It Works
          </h4>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1C1C1C] mb-6">
            Hassle Free Booking, Plan in Minutes
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            A Simple Guide to Your Seamless Journey – Follow These Easy Steps to
            Book Your Next Adventure!
          </p>
        </div>

        {/* --- Steps Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-8 lg:p-10 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] text-center border border-gray-100 transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Icon Container with Number Badge */}
              <div className="relative inline-block mb-8">
                {/* Main Icon Circle */}
                <div className="w-24 h-24 bg-[#F2994A] rounded-full flex items-center justify-center shadow-lg shadow-orange-200/50">
                  <step.icon
                    size={40}
                    className="text-white"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Number Badge */}
                <div className="absolute -top-2 -right-2 w-9 h-9 bg-[#F2994A] text-white rounded-full flex items-center justify-center font-bold text-lg border-[3px] border-white shadow-sm">
                  {step.id}
                </div>
              </div>

              {/* Card Content */}
              <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-lg px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
