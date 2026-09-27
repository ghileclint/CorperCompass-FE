// src/data/vendors.js
// Central mock data source. Swap for a real API call (via src/api/) later —
// components never hardcode vendor info, they just read from here.
//
// Every gallery array below reuses that vendor's own confirmed-working
// `image` for all 3 slots, so nothing shows a broken image icon. Swap
// individual gallery entries for distinct photos as you add more —
// this file is the only thing that needs to change to do that.

export const categories = ["All", "Restaurants", "Services", "Food"];

export const vendors = [
  {
    id: "mama-titi-kitchen",
    name: "Mama Titi Kitchen",
    category: "Food",
    location: "Bosso Lowcost, Abuja, Kaduna State",
    description:
      "Authentic home-cooked meals prepared with love and the freshest local ingredients. Specializing in corporate catering and daily lunch packs for professionals.",
    priceFrom: 2500,
    rating: 4.8,
    reviews: 120,
    image: "/images/vendors/mama-titi-1.avif",
    gallery: [
      "/images/vendors/mama-titi-1.avif",
      "/images/vendors/mama-titi-2.jpg",
      "/images/vendors/mama-titi-3.jpg",
    ],
  },
  {
    id: "green-leaf-restaurant",
    name: "Green Leaf Restaurant",
    category: "Restaurants",
    location: "Wuse 2, Abuja",
    description:
      "Sit-down restaurant serving continental and local dishes, with a quiet space corpers use for meetings over lunch.",
    priceFrom: 4000,
    rating: 4.6,
    reviews: 84,
    image: "/images/vendors/green-leaf-restaurant.webp",
    gallery: [
      "/images/vendors/green-leaf-restaurant.webp",
      "/images/vendors/green-leaf-restaurant.webp",
      "/images/vendors/green-leaf-restaurant.webp",
    ],
  },
  {
    id: "kaduna-grill-house",
    name: "Kaduna Grill House",
    category: "Restaurants",
    location: "Kaduna South, Kaduna",
    description:
      "Grill-focused restaurant known for suya and peppered chicken, popular for weekend hangouts.",
    priceFrom: 3500,
    rating: 4.5,
    reviews: 61,
    image: "/images/vendors/kaduna-grill-house.jpg",
    gallery: [
      "/images/vendors/kaduna-grill-house.jpg",
      "/images/vendors/kaduna-grill-house.jpg",
      "/images/vendors/kaduna-grill-house.jpg",
    ],
  },
  {
    id: "swiftfix-laundry",
    name: "SwiftFix Laundry & Dry Clean",
    category: "Services",
    location: "Ikeja, Lagos",
    description:
      "Same-day laundry and dry cleaning pickup service, popular with corpers needing quick turnaround on uniforms.",
    priceFrom: 1500,
    rating: 4.7,
    reviews: 45,
    image: "/images/vendors/swiftfix-laundry.jpeg",
    gallery: [
      "/images/vendors/swiftfix-laundry.jpeg",
      "/images/vendors/swiftfix-laundry.jpeg",
      "/images/vendors/swiftfix-laundry.jpeg",
    ],
  },
  {
    id: "campus-print-hub",
    name: "Campus Print Hub",
    category: "Services",
    location: "Bosso, Minna",
    description:
      "Printing, photocopying, and document services near NYSC camp, including CV and cover letter formatting help.",
    priceFrom: 500,
    rating: 4.4,
    reviews: 38,
    image: "/images/vendors/campus-print-hub.avif",
    gallery: [
      "/images/vendors/campus-print-hub.avif",
      "/images/vendors/campus-print-hub.avif",
      "/images/vendors/campus-print-hub.avif",
    ],
  },
];
