"use client";

import { useState } from "react";
import { Plus, Minus, ArrowUp } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Do you offer adventure activities?",
    answer:
      "Of course! From water sports to trekking, safaris, and cultural experiences, our packages cover a wide variety of activities.",
  },
  {
    id: 2,
    question: "Do you provide local guides?",
    answer:
      "Yes, we partner with experienced local guides who know the history and hidden gems of every destination to ensure an authentic experience.",
  },
  {
    id: 3,
    question: "Is transport included in the package?",
    answer:
      "Most of our packages include airport transfers and local transportation. Specific details are listed in each tour itinerary.",
  },
  {
    id: 4,
    question: "Are the tours family-friendly?",
    answer:
      "Absolutely! We offer many family-oriented packages with activities suitable for all ages, ensuring a fun trip for everyone.",
  },
];

export default function FaqSection() {
  // Set the first item (id: 1) as open by default to match the screenshot
  const [openId, setOpenId] = useState(0);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-[#FAFAFA] relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <h3
            className="text-[#F2994A] text-3xl font-[Satisfy,cursive] mb-2"
            style={{ fontFamily: "var(--font-satisfy, cursive)" }}
          >
            Our Faq
          </h3>
          <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">
            Frequently Asked Questions.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Find answers to some of the most frequently asked questions from our
            travelers.
          </p>
        </div>

        {/* --- Accordion List --- */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-xl transition-all duration-300"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className={`w-full flex items-center justify-between px-6 py-5 text-left font-bold text-lg transition-colors duration-300 ${
                    isOpen
                      ? "bg-[#F2994A] text-white" // Active Styles (Orange)
                      : "bg-white text-[#1C1C1C] border border-gray-100 hover:bg-gray-50" // Inactive Styles (White)
                  }`}
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <Minus size={24} className="flex-shrink-0" />
                  ) : (
                    <Plus size={24} className="flex-shrink-0" />
                  )}
                </button>

                {/* Answer Content */}
                <div
                  className={`bg-[#F9FAFB] text-gray-700 font-medium transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-40 opacity-100 py-6 px-6 border-x border-b border-gray-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- Floating "Back to Top" Button --- */}
      {/* Positioned bottom-right as seen in the screenshot */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#1C1C1C] text-white p-3 rounded-full shadow-lg hover:bg-[#F2994A] transition-colors z-50 group"
        aria-label="Back to top"
      >
        <ArrowUp
          size={24}
          className="group-hover:-translate-y-1 transition-transform"
        />
      </button>
    </section>
  );
}
