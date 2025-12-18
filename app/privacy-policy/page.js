"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      {/* --- Main Content Wrapper --- */}
      <div className="pt-32 pb-20 flex-grow relative z-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          {/* --- Page Header --- */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#1C1C1C] mb-3">
              Privacy Policy
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm font-bold">
              <span className="text-[#1C1C1C]">Home</span>
              <span className="text-[#F2994A] text-[8px]">●</span>
              <span className="text-[#F2994A]">Privacy Policy</span>
            </div>
          </div>

          {/* --- Policy Content Card --- */}
          <div className="bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden border border-gray-100">
            {/* Top Gradient Line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>

            <div className="p-8 lg:p-12">
              {/* Intro Text */}
              <p className="text-gray-700 mb-8 leading-relaxed font-medium">
                At 365Roam.com , we value your trust. This Privacy Policy
                explains how we collect, use, store, and protect your personal
                data when you use our Website and travel booking services.
              </p>

              {/* --- Section 1 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  1. Information We Collect
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      <span className="font-bold text-gray-900">
                        Personal Data:
                      </span>{" "}
                      Name, contact number, email, billing address, payment
                      details, passport/ID details (where required).
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      <span className="font-bold text-gray-900">
                        Booking Data:
                      </span>{" "}
                      Travel dates, destination, preferences, travel history.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      <span className="font-bold text-gray-900">
                        Technical Data:
                      </span>{" "}
                      IP address, browser type, cookies, device information.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      <span className="font-bold text-gray-900">
                        Data Retention:
                      </span>{" "}
                      We do retain you data for 12 months in encrypted format
                    </span>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 2 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  2. How We Use Your Data
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      To process bookings, payments, and confirmations.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      To provide invoices, receipts, and travel documents.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      To send service-related updates, notifications, and
                      promotional offers (where you have consented).
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>To comply with legal/regulatory obligations.</span>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 3 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  3. Sharing of Data
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      With third-party suppliers (airlines, hotels, insurance,
                      transport operators) to complete your bookings.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      With payment gateways for secure transaction processing.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>With government authorities if required by law.</span>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 4 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  4. Data Security
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      We use encryption, firewalls, and secure servers to
                      protect your personal data.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      While we take strict measures, no system is 100% secure.
                      Users are advised to take precautions while sharing
                      sensitive information.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 5 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  5. Your Rights
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Access, correct, or request deletion of your personal
                      data.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Opt out of promotional communications at any time.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Withdraw consent for data processing where applicable.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 6 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  6. Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our Website uses cookies to enhance user experience and track
                  performance. You may disable cookies in your browser, though
                  some features may not function properly.
                </p>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 7 --- */}
              <div className="mb-0">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  7. Contact Us
                </h2>
                <p className="text-gray-700 mb-6">
                  For privacy-related concerns:
                </p>

                <div className="space-y-3 text-gray-700">
                  <p className="font-semibold text-gray-900">
                    APEXALIGN PRIVATE LIMITED
                  </p>

                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-gray-500" />
                    <span className="font-bold text-gray-900">Email:</span>
                    <a
                      href="mailto:admin@365roam.com"
                      className="text-blue-600 hover:underline"
                    >
                      adminrea@365roam.com
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-gray-500" />
                    <span className="font-bold text-gray-900">Phone:</span>
                    <span>+91 9718895837</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin
                      size={16}
                      className="text-gray-500 mt-1 flex-shrink-0"
                    />
                    <div>
                      <span className="font-bold text-gray-900">Address:</span>
                      <span>
                        {" "}
                        B-300 G.F, Okhla Ind Area, Phase I Near A Block, Okhla
                        Industrial Area Phase-I, South Delhi, Delhi, India,
                        110020
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
