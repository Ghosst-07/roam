"use client";

import { useState } from "react";

import { MapPin, Phone, Mail, Headphones } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
  };

  // Contact Info Data
  const contactInfo = [
    {
      id: 1,
      label: "Address",
      icon: MapPin,
      content: (
        <div className="text-sm text-gray-600 leading-relaxed">
          <p className="font-bold mb-1">APEXALIGN PRIVATE LIMITED</p>
          <p>
            Address : B-300 G.F, Okhla Ind Area, Phase I Near A Block, Okhla
            Industrial Area Phase-I, South Delhi, Delhi, India, 110020
          </p>
          <p className="mt-2">
            <span className="font-bold">CIN:</span> U62099DL2025PTC452704
          </p>
          <p>
            <span className="font-bold">GST:</span> 07ABDCA4407C1Z8
          </p>
        </div>
      ),
    },
    {
      id: 2,
      label: "Phone Number",
      icon: Phone,
      content: (
        <p className="text-lg font-bold text-[#1C1C1C]">+91 9718895837</p>
      ),
    },
    {
      id: 3,
      label: "Email Address",
      icon: Mail,
      content: (
        <p className="text-lg font-bold text-[#1C1C1C] break-all">
          admin@roamingrealm.com
        </p>
      ),
    },
    {
      id: 4,
      label: "Support Team",
      icon: Headphones,
      content: <p className="text-lg font-bold text-[#1C1C1C]">24/7 hours</p>,
    },
  ];

  return (
    <main className="bg-white min-h-screen flex flex-col relative overflow-hidden">
      {/* --- Background Decorations --- */}
      {/* Bridge Sketch (Top Left) */}
      <div className="absolute top-24 -left-10 w-64 h-40 opacity-10 pointer-events-none hidden lg:block">
        <Image
          src="https://roamingrealm.com/assets/presets/default/images/shape/whychoose-bg2.png"
          alt="shape-image"
          fill
        />
      </div>

      {/* Plane Trail (Top Right) */}
      <div className="absolute top-32 right-0 w-1/3 h-64 pointer-events-none opacity-20 z-0">
        <Image
          src="https://roamingrealm.com/assets/presets/default/images/shape/shape-1.png"
          alt="shape-image"
          fill
        />
      </div>

      {/* --- Main Content Wrapper --- */}
      <div className="pt-32 pb-20 flex-grow relative z-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-4">
              Contact Us
            </h1>
            <div className="flex items-center justify-center gap-3 text-sm font-bold">
              <span className="text-[#1C1C1C]">Home</span>
              <span className="w-2 h-2 rounded-full bg-[#F2994A]"></span>
              <span className="text-[#F2994A]">Contact Us</span>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info) => (
              <div
                key={info.id}
                className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 relative group overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Decorative Circle Icon Top Right */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#F2994A] rounded-full opacity-10 transition-transform duration-300 group-hover:scale-150 group-hover:opacity-20"></div>

                <div className="relative z-10">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                    {info.label}
                  </h3>
                  {info.content}
                </div>

                {/* Floating Icon Bottom Right */}
                <div className="absolute bottom-4 right-4 text-[#F2994A] opacity-20 transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300">
                  <info.icon size={48} />
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-12 relative overflow-hidden">
            {/* Decorative Circle (Top Right of Form) */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFFBF5] rounded-bl-full -mr-20 -mt-20 pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-[#1C1C1C] mb-10">
                Send Your Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1C1C1C]">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Full Name"
                      className="w-full p-4 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:border-[#F2994A] focus:ring-1 focus:ring-[#F2994A] transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1C1C1C]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Email Address"
                      className="w-full p-4 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:border-[#F2994A] focus:ring-1 focus:ring-[#F2994A] transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Subject */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1C1C1C]">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full p-4 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:border-[#F2994A] focus:ring-1 focus:ring-[#F2994A] transition-all"
                    required
                  />
                </div>

                {/* Row 3: Message */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1C1C1C]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write Your Message"
                    className="w-full p-4 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:border-[#F2994A] focus:ring-1 focus:ring-[#F2994A] transition-all resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#F2994A] hover:bg-[#e08a3d] text-white font-bold text-lg py-4 rounded-xl transition-colors shadow-lg shadow-orange-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
