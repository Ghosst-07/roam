import Image from "next/image";
import { Heart, MapPin, ArrowUpRight } from "lucide-react";

const tours = [
  {
    id: 1,
    location: "Chikmagalur Coffee Ridges, Karnataka",
    title: "Fortress Dawn Circuits – Chikmagalur",
    price: "2500.00",
    image:
      "https://roamingrealm.com/assets/images/tour_package_image/fortress-dawn-circuits-chikmagalur-coffee-ridges-tour-65.jpg",
    discount: "-0%",
  },
  {
    id: 2,
    location: "Dandeli River Front, Karnataka",
    title: "Coral Reef Snorkel – Dandeli River",
    price: "4000.00",
    image:
      "https://roamingrealm.com/assets/images/tour_package_image/coral-reef-snorkel-dandeli-river-front-tour-64.jpg",
    discount: "-0%",
  },
  {
    id: 3,
    location: "Majuli Island Trails, Assam, India",
    title: "River Rapid Sprints – Majuli Island",
    price: "40000.00",
    image:
      "https://roamingrealm.com/assets/images/tour_package_image/river-rapid-sprints-majuli-island-trails-tour-63.jpg",
    discount: "-0%",
  },
  {
    id: 4,
    location: "Ooty Plateau View, Tamil Nadu, I...",
    title: "Mangrove Canoe Trails — Ooty Pla...",
    price: "40000.00",
    image:
      "https://roamingrealm.com/assets/images/tour_package_image/mangrove-canoe-trails-ooty-plateau-view-tour-62.jpg",
    discount: "-0%",
  },
  {
    id: 5,
    location: "Darjeeling Ridge View, West Beng...",
    title: "Monsoon Falls Chase — Darjeeling...",
    price: "3000.00",
    image:
      "https://roamingrealm.com/assets/images/tour_package_image/monsoon-falls-chase-darjeeling-ridge-view-tour-61.jpg",
    discount: "-0%",
  },
  {
    id: 6,
    location: " Nalanda Heritage Ridge, Bihar, I...",
    title: "High Plateau Outlooks — Nalanda...",
    price: "15000.00",
    image:
      "https://roamingrealm.com/assets/images/tour_package_image/high-plateau-outlooks-nalanda-heritage-ridge-tour-60.jpg",
    discount: "-0%",
  },
];

export default function PopularTours() {
  return (
    <section className="py-16 lg:py-20 bg-[##fdfdfd] relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 lg:mb-16 px-4">
        <h3
          className="text-[#F2994A] text-3xl font-[Satisfy,cursive] mb-2"
          style={{ fontFamily: "var(--font-satisfy, cursive)" }}
        >
          Popular Tours
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">
          Most Popular Tours
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          For whatever matters most, make it easier for potential customers to
          find your business with adline Ads.
        </p>
      </div>

      {/* Tours Grid */}
      <div className="container mx-auto px-4 lg:px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white  shadow-xl rounded-2xl transition-shadow duration-300 overflow-hidden border-white border-20 group"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden rounded-xl">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Discount */}
                <div className="absolute top-3 left-3 bg-[#F2994A] text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                  {tour.discount}
                </div>
                {/* Like */}
                <button className="absolute top-3 right-3 bg-white/30 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                  <Heart
                    size={16}
                    className="text-white hover:text-red-500 transition-colors"
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                {/* Location */}
                <div className="flex items-center text-gray-500 text-sm mb-1.5">
                  <MapPin size={14} className="mr-1.5 text-gray-400" />
                  <span className="truncate">{tour.location}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-[#1C1C1C] mb-3 line-clamp-2">
                  {tour.title}
                </h3>

                {/* Price & Button */}
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg sm:text-xl font-bold text-[#1C1C1C]">
                    ₹{tour.price}
                    <span className="text-sm font-normal text-gray-500 ml-1">
                      /package
                    </span>
                  </span>
                  <button className="flex items-center text-[#F2994A] font-semibold hover:text-[#e08a3d] transition-colors">
                    Book
                    <ArrowUpRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
