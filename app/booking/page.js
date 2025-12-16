"use client";

import { useState } from "react";
import Image from "next/image";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    country: "",
    fromDate: "",
    toDate: "",
    adults: 1,
    children: 0,
    fullName: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
  };

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      {/* --- Background Decorations (Optional) --- */}
      {/* Plane trail - Top Right */}
      <div className="absolute top-20 right-0 w-64 h-64 opacity-10 pointer-events-none hidden lg:block">
        <Image
          src="https://roamingrealm.com/assets/presets/default/images/shape/whychoose-bg2.png"
          alt="shape-image"
          fill
        />
      </div>

      {/* Bridge/City Sketch - Top Left */}
      <div className="absolute top-10 left-0 w-48 h-48  pointer-events-none hidden lg:block">
        {/* Simple placeholder for the bridge sketch */}
        <Image
          src="https://roamingrealm.com/assets/presets/default/images/shape/shape-1.png"
          alt="shape-image"
          fill
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        {/* --- Page Header --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-4">
            Booking Inquire
          </h1>
          <div className="flex items-center justify-center gap-3 text-sm font-bold">
            <span className="text-[#1C1C1C]">Home</span>
            <span className="w-2 h-2 rounded-full bg-[#F2994A]"></span>
            <span className="text-[#F2994A]">Booking Inquire</span>
          </div>
        </div>

        {/* --- The Form --- */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Country Select */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-[#1C1C1C]">
              Select Your Country
            </label>
            <div className="relative">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-[#F2994A] appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Select Your Country
                </option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
              </select>
              {/* Custom Dropdown Arrow */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 1L6 6L11 1" />
                </svg>
              </div>
            </div>
          </div>

          {/* Date of Journey */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-[#1C1C1C]">
              Date of Journey *
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="From date (dd/mm/yyyy)"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                name="fromDate"
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-[#F2994A]"
              />
              <input
                type="text"
                placeholder="To date (dd/mm/yyyy)"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                name="toDate"
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-[#F2994A]"
              />
            </div>
          </div>

          {/* Numbers (Adults / Children) */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-[#1C1C1C]">
              Numbers of Adults (Above 12 years) *
            </label>
            <input
              type="number"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              min="1"
              className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-[#F2994A]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-[#1C1C1C]">
              Children (5-12 years)
            </label>
            <input
              type="number"
              name="children"
              value={formData.children}
              onChange={handleChange}
              min="0"
              className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-[#F2994A]"
            />
          </div>

          {/* Personal Info */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-[#1C1C1C]">
              Full name *
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Full name *"
              className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-[#F2994A]"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-[#1C1C1C]">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-[#F2994A]"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-[#1C1C1C]">
              Contact No.
            </label>
            <input
              type="tel"
              name="contact"
              placeholder="Contact No."
              className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-[#F2994A]"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-[#1C1C1C]">
              Message for me *
            </label>
            <textarea
              name="message"
              rows="6"
              placeholder="Message for me *"
              className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-[#F2994A] resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#4A4A4A] text-white font-bold text-sm uppercase px-10 py-4 rounded-full hover:bg-[#333333] transition-colors shadow-lg"
            >
              Submit Query
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
