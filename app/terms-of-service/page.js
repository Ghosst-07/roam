"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      {/* --- Main Content Wrapper --- */}
      <div className="pt-32 pb-20 flex-grow relative z-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          {/* --- Page Header --- */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#1C1C1C] mb-3">
              Terms of Service
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm font-bold">
              <span className="text-[#1C1C1C]">Home</span>
              <span className="text-[#F2994A] text-[8px]">●</span>
              <span className="text-[#F2994A]">Terms of Service</span>
            </div>
          </div>

          {/* --- Policy Content Card --- */}
          <div className="bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden border border-gray-100">
            {/* Top Gradient Line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>

            <div className="p-8 lg:p-12">
              {/* Intro Text */}
              <p className="text-gray-700 mb-8 leading-relaxed font-medium">
                This document sets out the Terms of Service (“Terms”) governing
                the use of roamingrealm.com (the “Website”), owned and operated
                by APEXALIGN PRIVATE LIMITED (“APEXALIGN PRIVATE LIMITED”, “we”,
                “our”, or “us”). By accessing the Website, making a booking, or
                using our services, you (“Customer”, “you”, “your”) agree to
                these Terms. If you do not agree, please discontinue use
                immediately.
              </p>

              {/* --- Section 1 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  1. Definitions
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      <span className="font-bold text-gray-900">
                        Customer / User:
                      </span>{" "}
                      Any individual or entity accessing or booking via
                      roamingrealm.com.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      <span className="font-bold text-gray-900">Booking:</span>{" "}
                      Reservation for hotels, tours, packages, or travel
                      services made through roamingrealm.com.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      <span className="font-bold text-gray-900">
                        Direct Booking:
                      </span>{" "}
                      A booking where APEXALIGN PRIVATE LIMITED provides
                      services directly.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      <span className="font-bold text-gray-900">
                        Partner Booking:
                      </span>{" "}
                      A booking where APEXALIGN PRIVATE LIMITED sources services
                      from MakeMyTrip (India) Pvt. Ltd. (MMT) or other
                      third-party suppliers.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      <span className="font-bold text-gray-900">
                        Service Provider:
                      </span>{" "}
                      Airlines, hotels, tour operators, transport companies, or
                      other third parties delivering services.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 2 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  2. Scope of Services
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  roamingrealm.com enables bookings for:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>Holiday packages and guided tours.</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>Hotel stays, resorts, and accommodations.</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>Car rentals, transfers, and local transport.</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Ancillary services (insurance, add-ons, activities).
                    </span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  All bookings are contracted with APEXALIGN PRIVATE LIMITED,
                  whether Direct or Partner. APEXALIGN PRIVATE LIMITED may add,
                  modify, or withdraw services at any time without notice.
                </p>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 3 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  3. Booking Process
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Bookings can be made via roamingrealm.com, APEXALIGN
                      PRIVATE LIMITED’s official support channels, or authorized
                      agents.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Bookings are confirmed only after successful payment and
                      issuance of a Booking Confirmation.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Partner Bookings may include confirmation vouchers/tickets
                      issued by suppliers (e.g., MMT).
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      It is the Customer’s responsibility to check booking
                      details and report errors immediately.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 4 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  4. Payments
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Payments must be made to APEXALIGN PRIVATE LIMITED via
                      approved methods (online, bank transfer, UPI, etc.).
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      All prices are in INR unless specified otherwise.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Taxes, surcharges, and government fees may apply.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      For Partner Bookings, APEXALIGN PRIVATE LIMITED may remit
                      payments to suppliers but Customers remain contracted with
                      APEXALIGN PRIVATE LIMITED.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      APEXALIGN PRIVATE LIMITED reserves the right to cancel
                      bookings for non-payment, fraud, or payment failure.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 5 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  5. Customer Obligations
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Provide accurate booking details (names, IDs, travel
                      documents).
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Ensure valid passports, visas, and travel documents.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Comply with rules of hotels, rentals, and service
                      providers.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Refrain from fraudulent, abusive, or unlawful use of the
                      Website.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Maintain confidentiality of login/account credentials.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 6 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  6. APEXALIGN PRIVATE LIMITED’s Responsibilities
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Act as the single point of contact for bookings via the
                      Website.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Provide booking confirmations and required documentation.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>Use due care in coordinating with suppliers.</span>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 7 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  7. Liability & Limitation
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  APEXALIGN PRIVATE LIMITED is liable only for processing
                  bookings and arranging supplier services. APEXALIGN PRIVATE
                  LIMITED is not liable for:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Delays, cancellations, or quality issues by Service
                      Providers.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Visa denials, immigration refusals, or documentation
                      issues.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>Losses from force majeure events.</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  APEXALIGN PRIVATE LIMITED’s maximum liability is limited to
                  the total booking amount paid by the Customer for the disputed
                  service.
                </p>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 8 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  8. Intellectual Property
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      All content on roamingrealm.com (logos, text, software,
                      images) belongs to APEXALIGN PRIVATE LIMITED or licensors.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      No content may be reproduced, distributed, or exploited
                      without permission.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 9 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  9. Privacy & Data Usage
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      APEXALIGN PRIVATE LIMITED collects necessary personal data
                      for booking services.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Data may be shared with suppliers (MMT, airlines, hotels)
                      solely for fulfillment.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      APEXALIGN PRIVATE LIMITED complies with applicable Indian
                      data protection laws.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 10 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  10. Force Majeure
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  APEXALIGN PRIVATE LIMITED is not liable for non-performance
                  due to uncontrollable events such as natural disasters,
                  strikes, restrictions, technical failures, or pandemics.
                </p>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 11 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  11. Governing Law & Dispute Resolution
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>These Terms are governed by Indian law.</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Courts at Noida, Uttar Pradesh have exclusive
                      jurisdiction.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Parties may attempt mediation/arbitration before
                      litigation where possible.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 12 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  12. Modification of Terms
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      APEXALIGN PRIVATE LIMITED may update Terms at any time,
                      with updates posted on the Website.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Continued use of services implies acceptance of updated
                      Terms.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 13 --- */}
              <div className="mb-0">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  13. Contact Us
                </h2>
                <p className="text-gray-700 mb-6">
                  For queries, cancellations, or disputes, please contact us:
                </p>

                <div className="space-y-3 text-gray-700">
                  <p className="font-semibold text-gray-900">
                    APEXALIGN PRIVATE LIMITED
                  </p>

                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-gray-500" />
                    <span className="font-bold text-gray-900">Email:</span>
                    <a
                      href="mailto:admin@roamingrealm.com"
                      className="text-blue-600 hover:underline"
                    >
                      admin@365roam.com
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
