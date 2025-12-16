"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, User, Building2 } from "lucide-react";

export default function LoginPage() {
  // --- State Management ---
  const [activeTab, setActiveTab] = useState("traveller");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // --- Validation Logic ---
  const validateForm = () => {
    const newErrors = {};
    // Basic Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Username or Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      // Optional: Simple regex for email format if they entered an email
      newErrors.email = "Please enter a valid email address";
    }

    // Password Validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted successfully:", { activeTab, ...formData });
      alert(`Login Successful as ${activeTab}! (Check console for data)`);
      setIsSubmitting(false);
      // Here you would redirect the user, e.g., router.push('/dashboard')
    }, 1500);
  };

  return (
    <main className="bg-[#FDFDFD] min-h-screen relative overflow-hidden flex flex-col">
      {/* --- Background Placeholder Images (Replace sources with your actual images) --- */}
      <div className="absolute top-0 left-0 w-1/2 h-full pointer-events-none opacity-5 z-0">
        {/* Placeholder for left topographic pattern */}
        <Image
          src="https://roamingrealm.com/assets/presets/default/images/shape/element-10.png"
          alt="Background Pattern"
          width={500}
          height={500}
          className="object-cover object-left opacity-15"
        />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-5 z-0">
        {/* Placeholder for right topographic pattern */}
        <Image
          src="https://roamingrealm.com/assets/presets/default/images/shape/element-9.png"
          alt="Background Pattern"
          fill
          className="object-cover object-right opacity-15"
        />
      </div>

      {/* --- Main Content Wrapper --- */}
      <div className="flex-grow flex items-center justify-center pt-28 pb-20 px-4 relative z-10">
        {/* --- Login Card --- */}
        <div className="bg-white w-full max-w-md rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] overflow-hidden">
          {/* Tabs (Traveller / Agency) */}
          <div className="flex bg-[#F8F8F8]">
            <button
              onClick={() => setActiveTab("traveller")}
              className={`flex-1 flex items-center justify-center gap-2 py-4 font-bold transition-colors ${
                activeTab === "traveller"
                  ? "text-[#F2994A] bg-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <User size={18} />
              Traveller
            </button>
            <button
              onClick={() => setActiveTab("agency")}
              className={`flex-1 flex items-center justify-center gap-2 py-4 font-bold transition-colors ${
                activeTab === "agency"
                  ? "text-[#F2994A] bg-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Building2 size={18} />
              Agency
            </button>
          </div>

          {/* Card Body */}
          <div className="p-8 pt-10 text-center">
            {/* Logo */}
            <div className="flex items-center justify-center gap-1 mb-6">
              <div className="relative flex items-center justify-center w-6 h-6">
                <span className="text-xl font-bold text-[#F2994A] italic">
                  R
                </span>
                <span className="absolute -top-1 -right-1 text-[#F2994A] text-xs">
                  ✨
                </span>
              </div>
              <span className="text-lg font-black tracking-tight text-[#1C1C1C] uppercase">
                ROAMINGREALM
              </span>
            </div>

            <h1 className="text-3xl font-bold text-[#1C1C1C] mb-2">Sign In</h1>
            <p className="text-gray-500 mb-8">Welcome back!</p>

            {/* --- Form --- */}
            <form onSubmit={handleSubmit} className="text-left space-y-5">
              {/* Email/Username Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-[#1C1C1C] mb-2"
                >
                  Username or Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Username or Email"
                  className={`w-full px-6 py-4 bg-[#FDFDFD] border rounded-full text-gray-700 focus:outline-none focus:border-[#F2994A] transition-colors ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 ml-2">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-bold text-[#1C1C1C] mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className={`w-full px-6 py-4 bg-[#FDFDFD] border rounded-full text-gray-700 focus:outline-none focus:border-[#F2994A] transition-colors pr-12 ${
                      errors.password ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {/* Toggle Password Visibility Button */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1 ml-2">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-gray-800">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 accent-[#F2994A] rounded border-gray-300"
                  />
                  <span>Remember me</span>
                </label>
                <Link
                  href="#"
                  className="text-[#F2994A] hover:underline font-medium"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#F2994A] hover:bg-[#e08a3d] text-white font-bold text-lg py-4 rounded-full transition-all shadow-lg shadow-orange-100 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? "Signing In..." : "Login"}
              </button>
            </form>

            {/* Footer Link */}
            <p className="mt-8 text-gray-600 text-sm">
              Don&apos;t have any account?{" "}
              <Link
                href="#"
                className="text-[#F2994A] font-bold hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
