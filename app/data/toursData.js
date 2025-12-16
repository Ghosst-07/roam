// app/data/toursData.js

const baseTours = [
  {
    title: "Fortress Dawn Circuits",
    location: "Chikmagalur, Karnataka",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?q=80&w=800&auto=format&fit=crop",
    duration: "2 Days",
    category: "Adventure",
  },
  {
    title: "Coral Reef Snorkel",
    location: "Dandeli River, Karnataka",
    price: 4000,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
    duration: "3 Days",
    category: "Water Sports",
  },
  {
    title: "Himalayan Sunrise Trek",
    location: "Darjeeling, West Bengal",
    price: 5000,
    image:
      "https://images.unsplash.com/photo-1544634076-a90160ccdcf9?q=80&w=800&auto=format&fit=crop",
    duration: "4 Days",
    category: "Hiking",
  },
  {
    title: "Ganga Rafting Adventure",
    location: "Rishikesh, Uttarakhand",
    price: 2800,
    image:
      "https://images.unsplash.com/photo-1623851722822-7935f4f03948?q=80&w=800&auto=format&fit=crop",
    duration: "1 Day",
    category: "Water Sports",
  },
  {
    title: "Desert Camel Safari",
    location: "Jaisalmer, Rajasthan",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop",
    duration: "2 Days",
    category: "Culture",
  },
  {
    title: "Backwaters Houseboat",
    location: "Alleppey, Kerala",
    price: 6000,
    image:
      "https://images.unsplash.com/photo-1616190419596-e2839e7380d7?q=80&w=800&auto=format&fit=crop",
    duration: "2 Days",
    category: "Relaxation",
  },
  {
    title: "Spiti Valley Roadtrip",
    location: "Spiti, Himachal Pradesh",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
    duration: "7 Days",
    category: "Adventure",
  },
  {
    title: "Varanasi Spiritual Walk",
    location: "Varanasi, Uttar Pradesh",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop",
    duration: "1 Day",
    category: "City Tours",
  },
  {
    title: "Goa Beach Party",
    location: "Baga, Goa",
    price: 3000,
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop",
    duration: "3 Days",
    category: "Group Tours",
  },
  {
    title: "Udaipur Royal Heritage",
    location: "Udaipur, Rajasthan",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=800&auto=format&fit=crop",
    duration: "2 Days",
    category: "Couple Tours",
  },
];

// Generate 100 items by cycling through baseTours and adding variations
export const toursData = Array.from({ length: 100 }, (_, index) => {
  const base = baseTours[index % baseTours.length];
  // Add a little price variation so filters feel real
  const priceVariation = (index % 5) * 500;

  return {
    id: index + 1,
    title: `${base.title} ${Math.floor(index / 10) + 1}`, // e.g. "Safari 1", "Safari 2"
    location: base.location,
    price: base.price + priceVariation,
    image: base.image,
    duration: base.duration,
    category: base.category,
  };
});
