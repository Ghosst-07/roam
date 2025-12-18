"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, User, Building2, ChevronDown } from "lucide-react";
// Ensure this matches your file structure. Previously we named it AuthContext.
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();

  // State
  const [activeTab, setActiveTab] = useState("traveller");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    country: "India",
    mobile: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handlers
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.agreed) {
      alert("Please agree to the Privacy Policy and Terms of Service.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Register the user (This now also auto-saves them to session via Context)
      await register({
        username: formData.username,
        email: formData.email,
        country: formData.country,
        mobile: formData.mobile,
        password: formData.password,
        role: activeTab,
      });

      alert(`Account created successfully! Please sign in.`);
      router.push("/login");
    } catch (error) {
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#FDFDFD] min-h-screen relative flex flex-col font-sans overflow-x-hidden">
      <Navbar />

      {/* --- Background Shapes --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute -left-20 top-0 opacity-10">
          <Image
            src="https://roamingrealm.com/assets/presets/default/images/shape/element-10.png"
            alt="Background Pattern"
            width={600}
            height={800}
            className="object-contain"
          />
        </div>
        <div className="absolute -right-20 bottom-0 opacity-10">
          <Image
            src="https://roamingrealm.com/assets/presets/default/images/shape/element-9.png"
            alt="Background Pattern"
            width={600}
            height={800}
            className="object-contain"
          />
        </div>
      </div>

      {/* --- Main Content Wrapper --- */}
      <div className="flex-grow flex items-center justify-center pt-32 pb-20 px-4 relative z-10">
        {/* --- Registration Card --- */}
        <div className="bg-white w-full max-w-2xl rounded-[2rem] shadow-[0_10px_60px_-10px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
          {/* Tabs */}
          <div className="flex text-lg border-b border-gray-50">
            <button
              onClick={() => setActiveTab("traveller")}
              type="button"
              className={`flex-1 flex items-center justify-center gap-2 py-5 font-bold transition-all duration-300 ${
                activeTab === "traveller"
                  ? "bg-gradient-to-b from-[#FFFBF2] to-white text-[#F2994A]"
                  : "bg-[#FAFAFA] text-gray-400 hover:text-gray-600"
              }`}
            >
              <User
                size={20}
                className={
                  activeTab === "traveller" ? "text-[#F2994A]" : "text-gray-400"
                }
              />
              Traveller
            </button>

            <button
              onClick={() => setActiveTab("agency")}
              type="button"
              className={`flex-1 flex items-center justify-center gap-2 py-5 font-bold transition-all duration-300 ${
                activeTab === "agency"
                  ? "bg-gradient-to-b from-[#FFFBF2] to-white text-[#F2994A]"
                  : "bg-[#FAFAFA] text-gray-400 hover:text-gray-600"
              }`}
            >
              <Building2
                size={20}
                className={
                  activeTab === "agency" ? "text-[#F2994A]" : "text-gray-400"
                }
              />
              Agency
            </button>
          </div>

          {/* Card Body */}
          <div className="p-8 md:p-12">
            {/* Logo Header */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-1 mb-4">
                <div className="relative flex items-center justify-center w-6 h-6">
                  <span className="text-xl font-bold text-[#F2994A] italic">
                    R
                  </span>
                  <span className="absolute -top-1 -right-1 text-[#F2994A] text-xs">
                    ✨
                  </span>
                </div>
                <span className="text-lg font-black tracking-tight text-[#1C1C1C] uppercase">
                  365Roam
                </span>
              </div>
              <h1 className="text-3xl font-bold text-[#1C1C1C] mb-2">
                Create Your Account
              </h1>
              <p className="text-gray-500 font-medium text-sm">
                Welcome back! Select method to signup
              </p>
            </div>

            {/* --- Form --- */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Username & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#1C1C1C]">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    className="w-full px-5 py-4 bg-[#FAFAFA] border border-gray-200 rounded-2xl text-gray-700 focus:outline-none focus:border-[#F2994A] focus:bg-white transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#1C1C1C]">
                    E-Mail Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-5 py-4 bg-[#FAFAFA] border border-gray-200 rounded-2xl text-gray-700 focus:outline-none focus:border-[#F2994A] focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Country & Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#1C1C1C]">
                    Country
                  </label>
                  <div className="relative">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-[#FAFAFA] border border-gray-200 rounded-2xl text-gray-700 focus:outline-none focus:border-[#F2994A] focus:bg-white transition-all appearance-none cursor-pointer"
                    >
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                    </select>
                    <ChevronDown
                      size={18}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#1C1C1C]">
                    Mobile
                  </label>
                  <div className="relative flex">
                    <span className="flex items-center justify-center px-5 bg-[#F2994A] text-white font-bold rounded-l-2xl text-sm border border-[#F2994A]">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-[#FAFAFA] border border-gray-200 border-l-0 rounded-r-2xl text-gray-700 focus:outline-none focus:border-[#F2994A] focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Passwords */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#1C1C1C]">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      className="w-full px-5 py-4 bg-[#FAFAFA] border border-gray-200 rounded-2xl text-gray-700 focus:outline-none focus:border-[#F2994A] focus:bg-white transition-all pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#1C1C1C]">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm Password"
                      className="w-full px-5 py-4 bg-[#FAFAFA] border border-gray-200 rounded-2xl text-gray-700 focus:outline-none focus:border-[#F2994A] focus:bg-white transition-all pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Checkbox */}
              <div className="pt-2">
                <label className="flex items-center gap-3 cursor-pointer group select-none">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      name="agreed"
                      checked={formData.agreed}
                      onChange={handleChange}
                      className="peer w-5 h-5 border-2 border-gray-300 rounded focus:ring-0 checked:bg-[#F2994A] checked:border-[#F2994A] transition-all appearance-none cursor-pointer"
                    />
                    <svg
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none hidden peer-checked:block text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm font-medium">
                    I agree with{" "}
                    <Link href="#" className="text-[#F2994A] hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    ,{" "}
                    <Link href="#" className="text-[#F2994A] hover:underline">
                      Terms of Service
                    </Link>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#F2994A] hover:bg-[#e08a3d] text-white font-bold text-lg py-4 rounded-2xl transition-all shadow-[0_4px_14px_0_rgba(242,153,74,0.39)] hover:shadow-[0_6px_20px_rgba(242,153,74,0.23)] hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? "Creating Account..." : "Sign Up"}
              </button>
            </form>

            {/* Footer Link */}
            <p className="mt-8 text-center text-gray-600 font-medium text-sm">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#F2994A] font-bold hover:underline ml-1 underline decoration-1 underline-offset-2"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
