// src/data/lodges.js

// Central mock data source for the Lodge Directory feature.
// Components never hardcode lodge information.

export const lodgeTypes = [
  "All",
  "Self-contain",
  "Room",
  "Near camp",
];

export const amenitiesList = [
  { id: "kitchen", label: "Kitchen" },
  { id: "toilet", label: "Toilet" },
  { id: "road-access", label: "Road Access" },
  { id: "bathroom", label: "Bathroom" },
  { id: "wifi", label: "Wi-Fi" },
  { id: "generator", label: "Generator" },
];

export const lodges = [
  {
    id: "sani-mufasa-lodge",
    name: "Sani Mufasa Lodge",
    subtitle: "Bosso Lowcost, Abuja, Kaduna State",
    tagline: "Female Exclusive Apartments",
    roomInfo: "2 Bedrooms · Parlour · Ensuite bathroom",
    location: "Maryland, Lagos",

    // PRICE LEFT EXACTLY AS PROVIDED
    price: 45000,

    rating: 4.23,
    type: "Self-contain",

    sections: ["popular", "nearPPA"],

    image: "/images/lodges/sani-mufasa-1.jpg",

    gallery: [
      "/images/lodges/sani-mufasa-1.jpg",
      "/images/lodges/sani-mufasa-2.jpg",
      "/images/lodges/sani-mufasa-3.jpg",
    ],

    facilities: [
      "Kitchen",
      "WC Toilet",
      "Parlor",
      "Two Bedrooms",
      "Borehole water",
      "Wifi",
      "Solar & inverter",
      "Generator",
    ],

    reviews: [
      {
        id: "r1",
        name: "Jane Cooper",
        timeAgo: "3 months ago",
        rating: 5,
        text:
          "Twenty 30-second applications within half an hour is well in excess of almost anyone's use of a scanner. Twenty 30-second applications within half an hour is well.",
      },
      {
        id: "r2",
        name: "Dianne Russell",
        timeAgo: "3 months ago",
        rating: 5,
        text:
          "Twenty 30-second applications within half an hour is well in excess of almost anyone's use of a scanner. Twenty 30-second applications within half an hour is well.",
      },
      {
        id: "r3",
        name: "Darlene Robertson",
        timeAgo: "3 months ago",
        rating: 5,
        text:
          "Twenty 30-second applications within half an hour is well in excess of almost anyone's use of a scanner. Twenty 30-second applications within half an hour is well.",
      },
      {
        id: "r4",
        name: "Cody Fisher",
        timeAgo: "4 months ago",
        rating: 4,
        text:
          "Good value for a female-exclusive apartment, quiet neighborhood and the landlord was responsive whenever something needed fixing.",
      },
      {
        id: "r5",
        name: "Esther Howard",
        timeAgo: "5 months ago",
        rating: 5,
        text:
          "Loved the solar backup, barely noticed the usual NEPA issues everyone complains about. Would recommend to other corpers in the area.",
      },
      {
        id: "r6",
        name: "Wade Warren",
        timeAgo: "6 months ago",
        rating: 4,
        text:
          "Decent size rooms and the borehole water is a big plus. Only downside was the walk to the main road for bikes.",
      },
    ],
  },

  {
    id: "groveland-popular-1",
    name: "Groveland, California",
    subtitle: "Groveland, California, Maryland Lagos",
    tagline: "Cozy self-contain near town",
    roomInfo: "1 Bedroom · Self-contain",
    location: "Maryland Lagos",

    // PRICE LEFT EXACTLY AS PROVIDED
    price: 289,

    rating: 4.91,
    type: "Self-contain",

    sections: ["popular"],

    image: "/images/lodges/groveland-popular-1.jpg",

    gallery: [
      "/images/lodges/groveland-popular-1.jpg",
    ],

    facilities: [
      "Kitchen",
      "WC Toilet",
      "Wifi",
      "Generator",
    ],

    reviews: [],
  },

  {
    id: "groveland-popular-2",
    name: "Groveland, California",
    subtitle: "Groveland, California, Maryland Lagos",
    tagline: "Bright and airy room",
    roomInfo: "1 Bedroom · Self-contain",
    location: "Maryland Lagos",

    // PRICE LEFT EXACTLY AS PROVIDED
    price: 289,

    rating: 4.91,
    type: "Self-contain",

    sections: ["popular"],

    image: "/images/lodges/groveland-popular-2.jpg",

    gallery: [
      "/images/lodges/groveland-popular-2.jpg",
    ],

    facilities: [
      "Kitchen",
      "WC Toilet",
      "Wifi",
    ],

    reviews: [],
  },

  {
    id: "groveland-camp-1",
    name: "Groveland, California",
    subtitle: "Groveland, California, Maryland Lagos",
    tagline: "3 lodges left near camp",
    roomInfo: "Shared room · Near camp",
    location: "Maryland Lagos",

    // PRICE LEFT EXACTLY AS PROVIDED
    price: null,

    rating: 4.91,
    type: "Near camp",

    sections: ["nearCamp"],

    image: "/images/lodges/groveland-camp-1.jpg",

    gallery: [
      "/images/lodges/groveland-camp-1.jpg",
    ],

    facilities: [
      "Toilet",
      "Road Access",
    ],

    reviews: [],
  },

  {
    id: "groveland-camp-2",
    name: "Groveland, California",
    subtitle: "Groveland, California, Maryland Lagos",
    tagline: "3 lodges left near camp",
    roomInfo: "Shared room · Near camp",
    location: "Maryland Lagos",

    // PRICE LEFT EXACTLY AS PROVIDED
    price: null,

    rating: 4.91,
    type: "Near camp",

    sections: ["nearCamp"],

    image: "/images/lodges/groveland-camp-2.jpg",

    gallery: [
      "/images/lodges/groveland-camp-2.jpg",
    ],

    facilities: [
      "Toilet",
      "Road Access",
    ],

    reviews: [],
  },

  {
    id: "groveland-affordable-1",
    name: "Groveland, California",
    subtitle: "Groveland, California, Maryland Lagos",
    tagline: "Budget-friendly self-contain",
    roomInfo: "1 Bedroom · Self-contain",
    location: "Maryland Lagos",

    // PRICE LEFT EXACTLY AS PROVIDED
    price: 289,

    rating: 4.91,
    type: "Self-contain",

    sections: ["affordable"],

    image: "/images/lodges/groveland-affordable-1.jpg",

    gallery: [
      "/images/lodges/groveland-affordable-1.jpg",
    ],

    facilities: [
      "Kitchen",
      "Toilet",
    ],

    reviews: [],
  },

  {
    id: "groveland-affordable-2",
    name: "Groveland, California",
    subtitle: "Groveland, California, Maryland Lagos",
    tagline: "Budget-friendly self-contain",
    roomInfo: "1 Bedroom · Self-contain",
    location: "Maryland Lagos",

    // PRICE LEFT EXACTLY AS PROVIDED
    price: 289,

    rating: 4.91,
    type: "Self-contain",

    sections: ["affordable"],

    image: "/images/lodges/groveland-affordable-2.jpg",

    gallery: [
      "/images/lodges/groveland-affordable-2.jpg",
    ],

    facilities: [
      "Kitchen",
      "Toilet",
    ],

    reviews: [],
  },

  {
    id: "darrell-steward-lodge",
    name: "Darrell Steward",
    subtitle: "Maryland, Lagos",
    tagline: "Near your PPA",
    roomInfo: "1 Bedroom · Self-contain",
    location: "Maryland, Lagos",

    // PRICE LEFT EXACTLY AS PROVIDED
    price: 45000,

    rating: 4.91,
    type: "Self-contain",

    sections: ["nearPPA"],

    image: "/images/lodges/darrell-steward.jpg",

    gallery: [
      "/images/lodges/darrell-steward.jpg",
    ],

    facilities: [
      "Kitchen",
      "Toilet",
      "Wifi",
    ],

    reviews: [],
  },

  {
    id: "ronald-richards-lodge",
    name: "Ronald Richards",
    subtitle: "Maryland, Lagos",
    tagline: "Near your PPA",
    roomInfo: "1 Bedroom · Self-contain",
    location: "Maryland, Lagos",

    // PRICE LEFT EXACTLY AS PROVIDED
    price: 45000,

    rating: 4.91,
    type: "Self-contain",

    sections: ["nearPPA"],

    image: "/images/lodges/ronald-richards.jpg",

    gallery: [
      "/images/lodges/ronald-richards.jpg",
    ],

    facilities: [
      "Kitchen",
      "Toilet",
      "Generator",
    ],

    reviews: [],
  },

  {
    id: "jenny-wilson-lodge",
    name: "Jenny Wilson",
    subtitle: "Maryland, Lagos",
    tagline: "Near your PPA",
    roomInfo: "1 Bedroom · Self-contain",
    location: "Maryland, Lagos",

    // PRICE LEFT EXACTLY AS PROVIDED
    price: 45000,

    rating: 4.91,
    type: "Self-contain",

    sections: ["nearPPA"],

    image: "/images/lodges/jenny-wilson.jpg",

    gallery: [
      "/images/lodges/jenny-wilson.jpg",
    ],

    facilities: [
      "Kitchen",
      "Toilet",
      "Wifi",
      "Generator",
    ],

    reviews: [],
  },

  {
    id: "jacob-jones-lodge",
    name: "Jacob Jones",
    subtitle: "Maryland, Lagos",
    tagline: "Near your PPA",
    roomInfo: "1 Bedroom · Self-contain",
    location: "Maryland, Lagos",

    // PRICE LEFT EXACTLY AS PROVIDED
    price: 45000,

    rating: 4.91,
    type: "Self-contain",

    sections: ["nearPPA"],

    image: "/images/lodges/jacob-jones.jpg",

    gallery: [
      "/images/lodges/jacob-jones.jpg",
    ],

    facilities: [
      "Kitchen",
      "Toilet",
    ],

    reviews: [],
  },
];

/*
 * Price bounds are derived from the actual lodge data.
 * Lodges without a numeric price are ignored.
 *
 * Current data therefore determines the range automatically.
 */
const lodgePrices = lodges
  .map((lodge) => lodge.price)
  .filter((price) => typeof price === "number" && Number.isFinite(price));

export const priceRangeConfig = {
  min: Math.min(...lodgePrices),
  max: Math.max(...lodgePrices),
};

// Section metadata — drives the home page loop.
export const lodgeSections = [
  {
    key: "popular",
    title: "Popular lodges around you",
  },
  {
    key: "nearCamp",
    title: "Near camp",
  },
  {
    key: "affordable",
    title: "Affordable housing",
  },
  {
    key: "nearPPA",
    title: "Near your PPA",
  },
];