"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext"; // Import Auth Context
import {
  LayoutDashboard,
  ShoppingCart,
  Heart,
  ArrowRightLeft,
  Ticket,
  Headphones,
  ChevronDown,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  CalendarX,
  User,
  LogOut, // Import LogOut icon
} from "lucide-react";

// --- INTERNAL COMPONENTS ---

// 1. Dashboard Stats View
const DashboardStatsView = () => {
  const stats = [
    { title: "All Bookings", value: "0", icon: "✈️" },
    { title: "Pending Bookings", value: "0", icon: "⏳" },
    { title: "Approved Bookings", value: "0", icon: "✅" },
    { title: "Wishlists", value: "0", icon: "❤️" },
    { title: "Total Ticket", value: "0", icon: "🎫" },
    { title: "Open Ticket", value: "0", icon: "📩" },
    { title: "Active Ticket", value: "0", icon: "🎟️" },
    { title: "Total Transactions", value: "0", icon: "🔁" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform duration-300 flex items-center justify-between"
          >
            <div>
              <h3 className="text-gray-500 font-bold text-sm mb-1">
                {stat.title}
              </h3>
              <p className="text-3xl font-black text-[#1C1C1C]">{stat.value}</p>
            </div>
            <div className="w-12 h-12 bg-[#FFF4E9] rounded-xl flex items-center justify-center text-xl">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold text-[#1C1C1C] mb-8">
            Monthly Tour Booking Chart
          </h3>
          <div className="h-64 flex flex-col justify-between text-xs text-gray-400 font-medium relative pl-8 border-l border-gray-100">
            {[5.0, 4.0, 3.0, 2.0, 1.0, 0.0].map((num) => (
              <div
                key={num}
                className="relative w-full border-b border-gray-100 h-10 flex items-center"
              >
                <span className="absolute -left-12">{num.toFixed(1)}</span>
              </div>
            ))}
            <div className="absolute inset-0 flex items-end justify-center pb-2">
              <p className="text-gray-300">No data available</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold text-[#1C1C1C] mb-8">
            Monthly Payments Chart
          </h3>
          <div className="h-64 flex flex-col justify-between text-xs text-gray-400 font-medium relative pl-8 border-l border-gray-100">
            {[5.0, 4.0, 3.0, 2.0, 1.0, 0.0].map((num) => (
              <div
                key={num}
                className="relative w-full border-b border-gray-100 h-10 flex items-center"
              >
                <span className="absolute -left-12">{num.toFixed(1)}</span>
              </div>
            ))}
            <div className="absolute inset-0 flex items-end justify-center pb-2">
              <p className="text-gray-300">No data available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Profile View (Connected to AuthContext)
const ProfileView = () => {
  const { user, updateProfile } = useAuth(); // Get user data and update function
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    state: "",
    zipCode: "",
    city: "",
    country: "",
  });

  // Load user data into form when component mounts or user changes
  useEffect(() => {
    if (user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData({
        // Use existing profile data if available, or fallbacks
        firstName: user.firstName || user.username || "",
        lastName: user.lastName || "",
        address: user.address || "",
        state: user.state || "",
        zipCode: user.zipCode || "",
        city: user.city || "",
        country: user.country || "India",
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save updated data to context/localstorage
    updateProfile(formData);
    alert("Profile updated successfully!");
  };

  if (!user) return <div>Loading Profile...</div>;

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start animate-fade-in">
      {/* Profile Card (Left Side) */}
      <div className="w-full lg:w-1/3 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
        <div className="bg-[#F2994A] p-8 flex flex-col items-center text-white">
          <div className="w-32 h-32 bg-[#333333] rounded-full flex items-center justify-center mb-4 border-4 border-white/20 text-4xl font-bold">
            {/* Show Initials */}
            {user.username ? user.username.substring(0, 2).toUpperCase() : "US"}
          </div>
          <h2 className="text-xl font-bold">@{user.username || "username"}</h2>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <div className="flex items-center gap-3 text-gray-500 text-sm font-medium mb-2">
              <Mail size={18} /> <span>Email Address</span>
            </div>
            <p className="text-[#1C1C1C] font-bold text-lg break-words">
              {user.email}
            </p>
          </div>
          <div className="border-b border-dotted border-gray-200"></div>
          <div>
            <div className="flex items-center gap-3 text-gray-500 text-sm font-medium mb-2">
              <Phone size={18} /> <span>Mobile Number</span>
            </div>
            <p className="text-[#1C1C1C] font-bold text-lg">
              {user.mobile || "Not set"}
            </p>
          </div>
          <div className="border-b border-dotted border-gray-200"></div>
          <div>
            <div className="flex items-center gap-3 text-gray-500 text-sm font-medium mb-2">
              <MapPin size={18} /> <span>Address</span>
            </div>
            <p className="text-[#1C1C1C] font-bold text-lg">
              {user.address
                ? `${user.address}, ${user.city}, ${user.country}`
                : "Not set"}
            </p>
          </div>
        </div>
      </div>

      {/* Edit Form (Right Side) */}
      <div className="w-full lg:w-2/3 bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-[#1C1C1C] mb-6">
          Complete Your Profile
        </h3>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1C1C1C] block">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl text-gray-700 font-medium focus:outline-none focus:border-[#F2994A]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1C1C1C] block">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl text-gray-700 font-medium focus:outline-none focus:border-[#F2994A]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1C1C1C] block">
                Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl text-gray-700 font-medium focus:outline-none focus:border-[#F2994A]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1C1C1C] block">
                State
              </label>
              <input
                type="text"
                name="state"
                placeholder="Enter State"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl text-gray-700 font-medium focus:outline-none focus:border-[#F2994A]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1C1C1C] block">
                Zip Code
              </label>
              <input
                type="text"
                name="zipCode"
                placeholder="Enter Zip Code"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl text-gray-700 font-medium focus:outline-none focus:border-[#F2994A]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1C1C1C] block">
                City
              </label>
              <input
                type="text"
                name="city"
                placeholder="Enter City"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl text-gray-700 font-medium focus:outline-none focus:border-[#F2994A]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#1C1C1C] block">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              readOnly
              className="w-full px-5 py-4 bg-gray-100 border border-gray-200 rounded-2xl text-gray-700 font-medium cursor-not-allowed"
            />
          </div>
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-[#F2994A] hover:bg-[#e08a3d] text-white font-bold text-lg px-10 py-4 rounded-2xl transition-all shadow-[0_4px_14px_0_rgba(242,153,74,0.39)] hover:-translate-y-1"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ... [BookingTableView, WishlistView, TransactionView, VoucherView, SupportView - SAME AS BEFORE] ...
const BookingTableView = ({ title }) => (
  <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm animate-fade-in min-h-[400px] flex flex-col">
    <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">{title}</h2>
    <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
        <CalendarX size={40} className="text-gray-300" />
      </div>
      <h3 className="text-lg font-bold text-gray-700 mb-2">
        No Bookings Found
      </h3>
      <Link
        href="/tours"
        className="mt-6 px-6 py-2 bg-[#F2994A] text-white rounded-xl font-bold text-sm hover:bg-[#e08a3d] transition-colors"
      >
        Explore Tours
      </Link>
    </div>
  </div>
);

const WishlistView = () => (
  <div className="space-y-6 animate-fade-in min-h-[400px]">
    <h2 className="text-2xl font-bold text-[#1C1C1C]">My Wishlist</h2>
    <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center h-[400px]">
      <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-4">
        <Heart size={32} className="text-red-300" />
      </div>
      <h3 className="text-lg font-bold text-gray-700 mb-2">
        Your Wishlist is Empty
      </h3>
    </div>
  </div>
);

const TransactionView = () => (
  <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm animate-fade-in min-h-[400px] flex flex-col">
    <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">
      Transaction History
    </h2>
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
        <ArrowRightLeft size={32} className="text-gray-300" />
      </div>
      <h3 className="text-lg font-bold text-gray-700 mb-2">
        No Transactions Yet
      </h3>
    </div>
  </div>
);

const VoucherView = () => (
  <div className="animate-fade-in min-h-[400px]">
    <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">My Vouchers</h2>
    <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm text-center h-[400px] flex flex-col items-center justify-center">
      <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-4">
        <Ticket size={32} className="text-[#F2994A]" />
      </div>
      <h3 className="text-lg font-bold text-gray-700 mb-2">
        No Active Vouchers
      </h3>
    </div>
  </div>
);

const SupportView = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-[#1C1C1C]">Support Tickets</h2>
      <button className="bg-[#F2994A] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-orange-200 hover:bg-[#e08a3d]">
        + Open New Ticket
      </button>
    </div>
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm min-h-[400px] flex flex-col items-center justify-center text-center">
      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
        <Headphones size={32} className="text-gray-300" />
      </div>
      <h3 className="text-lg font-bold text-gray-700 mb-2">
        No Support Tickets
      </h3>
    </div>
  </div>
);

// --- MAIN DASHBOARD PAGE ---

export default function DashboardPage() {
  const { user, logout } = useAuth(); // Destructure logout from here
  const [currentView, setCurrentView] = useState("dashboard");
  const [isTourBookingsOpen, setIsTourBookingsOpen] = useState(true);

  const renderContent = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardStatsView />;
      case "bookings":
        return <BookingTableView title="My All Bookings" />;
      case "processing":
        return <BookingTableView title="Processing Bookings" />;
      case "approved":
        return <BookingTableView title="Approved Bookings" />;
      case "canceled":
        return <BookingTableView title="Canceled Bookings" />;
      case "payment-log":
        return <TransactionView />;
      case "wishlists":
        return <WishlistView />;
      case "transaction":
        return <TransactionView />;
      case "voucher":
        return <VoucherView />;
      case "support":
        return <SupportView />;
      case "profile":
        return <ProfileView />;
      default:
        return <DashboardPage />;
    }
  };

  const isActive = (viewName) => currentView === viewName;

  return (
    <div className="flex min-h-screen bg-[#F3F4F6] font-sans">
      {/* --- SIDEBAR --- */}
      {/* --- SIDEBAR --- */}
      <aside className="w-72 bg-white flex flex-col fixed h-full z-20 overflow-y-auto border-r border-gray-100">
        <div className="p-6 flex items-center gap-2 mb-4">
          <div className="relative flex items-center justify-center w-8 h-8">
            <span className="text-2xl font-bold text-[#F2994A] italic">
              365
            </span>
            <span className="absolute -top-1 -right-1 text-[#F2994A] text-xs">
              ✨
            </span>
          </div>
          <span className="text-xl font-black tracking-tight text-[#1C1C1C] uppercase">
            Roam
          </span>
        </div>

        <nav className="flex-grow px-4 space-y-1 pb-6">
          <button
            onClick={() => setCurrentView("dashboard")}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
              isActive("dashboard")
                ? "bg-[#FFF4E9] text-[#F2994A]"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </button>

          <div>
            <button
              onClick={() => setIsTourBookingsOpen(!isTourBookingsOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <ShoppingCart size={20} />
                <span>Tour Bookings</span>
              </div>
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  isTourBookingsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isTourBookingsOpen
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-12 mt-1 space-y-1">
                {[
                  { name: "My Bookings", id: "bookings" },
                  { name: "Processing", id: "processing" },
                  { name: "Approved", id: "approved" },
                  { name: "Canceled", id: "canceled" },
                  { name: "Payment Log", id: "payment-log" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentView(item.id)}
                    className={`block w-full text-left px-4 py-2.5 text-sm rounded-lg font-medium transition-colors ${
                      isActive(item.id)
                        ? "text-[#F2994A] bg-orange-50"
                        : "text-gray-500 hover:text-[#F2994A]"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => setCurrentView("wishlists")}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
              isActive("wishlists")
                ? "bg-[#FFF4E9] text-[#F2994A]"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Heart size={20} />
            <span>Wishlists</span>
          </button>
          <button
            onClick={() => setCurrentView("transaction")}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
              isActive("transaction")
                ? "bg-[#FFF4E9] text-[#F2994A]"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <ArrowRightLeft size={20} />
            <span>Transaction</span>
          </button>
          <button
            onClick={() => setCurrentView("voucher")}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
              isActive("voucher")
                ? "bg-[#FFF4E9] text-[#F2994A]"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Ticket size={20} />
            <span>Voucher</span>
          </button>
          <button
            onClick={() => setCurrentView("support")}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
              isActive("support")
                ? "bg-[#FFF4E9] text-[#F2994A]"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-4">
              <Headphones size={20} />
              <span>Support Tickets</span>
            </div>
            <ChevronRight size={18} className="text-gray-300" />
          </button>

          {/* LOGOUT BUTTON (Placed directly inside Nav) */}
          <button
            onClick={logout}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group"
          >
            <LogOut size={20} className="group-hover:text-red-600" />
            <span>Logout</span>
          </button>
        </nav>

        <div className="h-full w-1.5 bg-[#F2994A] absolute right-0 top-0 rounded-l-full opacity-80"></div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 ml-72">
        <header className="bg-white px-8 py-5 flex items-center justify-between border-b border-gray-100 sticky top-0 z-10">
          <h1 className="text-2xl font-bold text-[#1C1C1C] capitalize">
            {currentView.replace("-", " ")}
          </h1>
          <div className="flex items-center gap-3 ">
            {/* Header User Icon - Click to go to Profile */}
            <button
              onClick={() => setCurrentView("profile")}
              className="focus:outline-none hover:scale-105 transition-transform"
            >
              <div className="w-10 h-10 bg-[#F2994A] rounded-full flex items-center justify-center text-white font-bold cursor-pointer shadow-md">
                {user && user.username ? (
                  user.username.substring(0, 2).toUpperCase()
                ) : (
                  <User size={20} />
                )}
              </div>
            </button>
          </div>
        </header>
        <div className="p-8 pb-20">{renderContent()}</div>
      </main>
    </div>
  );
}
