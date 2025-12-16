/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { MapPin, Heart, Clock, Search, ArrowUpRight, X } from "lucide-react";
import { toursData } from "@/app/data/toursData"; // Importing the 100 items

const ITEMS_PER_PAGE = 9; // 3 columns * 3 rows

export default function TourListSection() {
  // --- State Management ---
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(15000); // Default max price
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("Newest");

  // --- Filter Logic ---
  // This runs instantly whenever dependencies (search, cats, price) change
  const filteredTours = useMemo(() => {
    return toursData
      .filter((tour) => {
        // 1. Search Filter (Title or Location)
        const matchesSearch =
          tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tour.location.toLowerCase().includes(searchQuery.toLowerCase());

        // 2. Category Filter
        const matchesCategory =
          selectedCategories.length === 0 ||
          selectedCategories.includes(tour.category);

        // 3. Price Filter
        const matchesPrice = tour.price <= priceRange;

        return matchesSearch && matchesCategory && matchesPrice;
      })
      .sort((a, b) => {
        // 4. Sorting Logic
        if (sortBy === "Price: Low to High") return a.price - b.price;
        if (sortBy === "Price: High to Low") return b.price - a.price;
        return 0; // Default (Newest/ID order)
      });
  }, [searchQuery, selectedCategories, priceRange, sortBy]);

  // --- Pagination Logic ---
  const totalPages = Math.ceil(filteredTours.length / ITEMS_PER_PAGE);
  const paginatedTours = filteredTours.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategories, priceRange]);

  // --- Handlers ---
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Scroll to top of grid
      document
        .getElementById("tour-grid-top")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const categoriesList = [
    "Adventure",
    "City Tours",
    "Couple Tours",
    "Group Tours",
    "Hiking",
    "Relaxation",
    "Water Sports",
    "Culture",
  ];

  return (
    <section className="py-20 bg-[#FAFAFA]" id="tour-grid-top">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#1C1C1C] mb-4">
            Choose Your Tours
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm font-bold uppercase tracking-wider">
            <span>Home</span>
            <span className="text-[#F2994A]">•</span>
            <span className="text-[#F2994A]">Tours</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* --- SIDEBAR (Filters) --- */}
          <div className="w-full lg:w-1/4 space-y-8 h-fit lg:sticky lg:top-24">
            {/* Search */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-4 text-[#1C1C1C]">
                Search Tour
              </h3>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type Keywords..."
                  className="w-full bg-[#FAFAFA] border border-gray-200 rounded-lg py-3 pl-4 pr-10 focus:outline-none focus:border-[#F2994A] transition-colors"
                />
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-3.5 text-gray-400 hover:text-red-500"
                  >
                    <X size={18} />
                  </button>
                ) : (
                  <Search
                    className="absolute right-3 top-3.5 text-gray-400"
                    size={18}
                  />
                )}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-4 text-[#1C1C1C]">
                Categories
              </h3>
              <ul className="space-y-3">
                {categoriesList.map((cat) => (
                  <li key={cat} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id={cat}
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="w-4 h-4 accent-[#F2994A] rounded border-gray-300 cursor-pointer"
                    />
                    <label
                      htmlFor={cat}
                      className="text-gray-600 cursor-pointer hover:text-[#F2994A] transition-colors select-none flex-1"
                    >
                      {cat}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-4 text-[#1C1C1C]">
                Filter By Price
              </h3>
              <div className="mb-4">
                <input
                  type="range"
                  min="1000"
                  max="15000"
                  step="500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#F2994A]"
                />
              </div>
              <div className="flex justify-between font-bold text-[#F2994A]">
                <span>₹1,000</span>
                <span>₹{priceRange.toLocaleString()}</span>
              </div>
            </div>

            {/* Reset Filters */}
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategories([]);
                setPriceRange(15000);
              }}
              className="w-full py-3 rounded-lg border border-gray-200 text-gray-500 font-bold hover:bg-gray-50 transition-colors"
            >
              Reset Filters
            </button>
          </div>

          {/* --- MAIN CONTENT (Grid) --- */}
          <div className="w-full lg:w-3/4">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8 gap-4">
              <p className="text-gray-500 font-medium">
                Showing{" "}
                <span className="text-[#1C1C1C] font-bold">
                  {filteredTours.length > 0
                    ? (currentPage - 1) * ITEMS_PER_PAGE + 1
                    : 0}
                  -
                  {Math.min(currentPage * ITEMS_PER_PAGE, filteredTours.length)}
                </span>{" "}
                of{" "}
                <span className="text-[#1C1C1C] font-bold">
                  {filteredTours.length}
                </span>{" "}
                results
              </p>

              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#FAFAFA] border border-gray-200 rounded-lg py-2 px-4 text-sm font-bold text-[#1C1C1C] focus:outline-none focus:border-[#F2994A]"
                >
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Tours Grid */}
            {filteredTours.length > 0 ? (
              // CHANGE: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 (3 per line on large screens)
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {paginatedTours.map((tour) => (
                  <div
                    key={tour.id}
                    className="bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative h-56 w-[calc(100%-1.5rem)] mx-auto mt-3 rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={tour.image}
                        alt={tour.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <button className="absolute top-3 right-3 bg-white/30 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors group/btn">
                        <Heart
                          size={16}
                          className="text-white group-hover/btn:text-red-500 transition-colors"
                        />
                      </button>
                      <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-md flex items-center gap-1 text-white text-xs font-medium">
                        <Clock size={12} /> {tour.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 pt-4 flex flex-col flex-grow">
                      <div className="flex items-center text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">
                        <MapPin size={14} className="mr-1 text-[#F2994A]" />
                        <span className="truncate">{tour.location}</span>
                      </div>

                      <h3 className="text-lg font-bold text-[#1C1C1C] mb-2 line-clamp-2 leading-tight">
                        {tour.title}
                      </h3>

                      {/* Spacer to push price to bottom */}
                      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-lg font-black text-[#1C1C1C]">
                            ₹{tour.price.toLocaleString()}
                            <span className="text-xs font-medium text-gray-400 ml-1">
                              /pax
                            </span>
                          </span>
                        </div>
                        <button className="flex items-center text-[#F2994A] font-bold hover:text-[#e08a3d] transition-colors group/link text-xs uppercase tracking-wide">
                          Book Now
                          <ArrowUpRight
                            size={16}
                            className="ml-1 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Empty State
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                <p className="text-xl font-bold text-gray-400">
                  No tours match your filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategories([]);
                    setPriceRange(15000);
                  }}
                  className="mt-4 text-[#F2994A] font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination Controls */}
            {filteredTours.length > 0 && (
              <div className="flex justify-center mt-12 gap-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white text-gray-600 border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowUpRight size={20} className="-rotate-135" />
                </button>

                {/* Page Numbers (Simple Logic: First, Last, Current, Neighbors) */}
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const pageNum = idx + 1;
                  // Show current, first, last, and immediate neighbors
                  if (
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                          currentPage === pageNum
                            ? "bg-[#F2994A] text-white shadow-lg shadow-orange-200"
                            : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  } else if (
                    (pageNum === currentPage - 2 && pageNum > 1) ||
                    (pageNum === currentPage + 2 && pageNum < totalPages)
                  ) {
                    return (
                      <span
                        key={pageNum}
                        className="flex items-end px-1 text-gray-400"
                      >
                        ...
                      </span>
                    );
                  }
                  return null;
                })}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white text-gray-600 border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowUpRight size={20} className="rotate-45" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
