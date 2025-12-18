"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      {/* --- Main Content Wrapper --- */}
      <div className="pt-32 pb-20 flex-grow relative z-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          {/* --- Page Header --- */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#1C1C1C] mb-3">
              Refund & Cancellation Policy
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm font-bold">
              <span className="text-[#1C1C1C]">Home</span>
              <span className="text-[#F2994A] text-[8px]">●</span>
              <span className="text-[#F2994A]">Refund Policy</span>
            </div>
          </div>

          {/* --- Policy Content Card --- */}
          <div className="bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden border border-gray-100">
            {/* Top Gradient Line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>

            <div className="p-8 lg:p-12">
              {/* Intro Text */}
              <p className="text-gray-700 mb-8 leading-relaxed font-medium">
                This Refund & Cancellation Policy (“Policy”) explains how
                cancellations, changes, and refunds are handled for bookings
                made on 365Roam.com, (“we”, “us”, “our”). By booking with us,
                you agree to this Policy in addition to our Terms of Service.
              </p>

              {/* --- Section 1 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  1. General Principles
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      All bookings are made directly with{" "}
                      <span className="font-bold">
                        APEXALIGN PRIVATE LIMITED
                      </span>
                      .
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>We may arrange services either via:</span>
                  </li>
                  <li className="flex items-start text-gray-700 ml-4">
                    <span className="font-bold mr-2 text-gray-900">
                      - Direct Bookings:
                    </span>{" "}
                    Tours/packages organized by us.
                  </li>
                  <li className="flex items-start text-gray-700 ml-4">
                    <span className="font-bold mr-2 text-gray-900">
                      - Partner Bookings:
                    </span>{" "}
                    Services fulfilled by suppliers such as MakeMyTrip (India)
                    Pvt. Ltd. (MMT) or others.
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Refunds and cancellations depend on booking type and
                      applicable supplier policies.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 2 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  2. Cancellations Initiated by Customer
                </h2>

                {/* Sub-section a */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 mt-4">
                  a) Direct Bookings
                </h3>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Cancellations must be requested in writing (email or
                      website form).
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      <span className="font-bold text-gray-900">
                        Refund eligibility:
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700 ml-4">
                    - 30+ days before departure → Up to 80% refund (after admin
                    charges).
                  </li>
                  <li className="flex items-start text-gray-700 ml-4">
                    - 15–29 days → Up to 50% refund.
                  </li>
                  <li className="flex items-start text-gray-700 ml-4">
                    - 7–14 days → Up to 25% refund.
                  </li>
                  <li className="flex items-start text-gray-700 ml-4">
                    - Less than 7 days → No refund.
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Some components (hotel nights, tickets) may be fully
                      non-refundable regardless of timing.
                    </span>
                  </li>
                </ul>

                {/* Sub-section b */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 mt-4">
                  b) Partner Bookings
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Refunds/cancellations are governed by the supplier’s
                      policy (airlines, hotels, operators).
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      We will act as intermediary by submitting requests to the
                      supplier.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Refunds are processed only if approved by the supplier.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 3 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  3. Cancellations Initiated by Us or Suppliers
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      If services are cancelled by us or supplier due to
                      operational issues, customers will receive either:
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700 ml-4">
                    - A full refund, or
                  </li>
                  <li className="flex items-start text-gray-700 ml-4">
                    - An option to reschedule/transfer booking.
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 4 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  4. Refund Timelines
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      <span className="font-bold text-gray-900">
                        Direct Bookings:
                      </span>{" "}
                      Processed within 10–15 working days to original payment
                      method.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      <span className="font-bold text-gray-900">
                        Partner Bookings:
                      </span>{" "}
                      Timelines depend on suppliers, typically 15–30 working
                      days. We are not responsible for supplier/payment gateway
                      delays.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 5 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  5. Non-Refundable Cases
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>No-show at airport, hotel, or departure point.</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Failure to provide valid documents (passport, visa,
                      permits).
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Services marked as non-refundable at booking time.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Events caused by force majeure (natural disasters,
                      strikes, pandemics, government restrictions).
                    </span>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 6 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  6. Modification & Rescheduling
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Date changes or modifications are treated as cancellations
                      + new bookings (unless supplier specifies otherwise).
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      Fare differences or rebooking charges must be borne by the
                      customer.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 7 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  7. Force Majeure Events
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>
                      In unavoidable events (natural calamities, strikes,
                      pandemics, government notices), we will assist in
                      coordinating with suppliers.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2 mt-1.5 text-[8px]">
                      ●
                    </span>
                    <span>Refunds/credits depend on suppliers’ policies.</span>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 8 --- */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  8. Governing Law
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  This Policy is governed by the laws of India. Any disputes
                  fall under the jurisdiction of the courts at Noida, Uttar
                  Pradesh.
                </p>
              </div>

              {/* Separator */}
              <div className="border-b border-dotted border-gray-200 mb-8"></div>

              {/* --- Section 9 (Contact) --- */}
              <div className="mb-0">
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
                  9. How to Request a Cancellation or Refund
                </h2>
                <p className="text-gray-700 mb-6">
                  To cancel or request a refund, please contact us with your
                  booking details:
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
