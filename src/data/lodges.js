// src/data/lodges.js
// Central mock data source for the Lodge Directory feature.
// Lodge images are stored locally in public/images/lodges/.
// Components only read the image paths from this file.

const lodgeImage = (number) => `/images/lodges/lodge-${number}.png`;

const lodgeGallery = (number) => [
  lodgeImage(number),
  lodgeImage(((number) % 11) + 1),
  lodgeImage(((number + 1) % 11) + 1),
];

export const lodgeTypes = ["All", "Self-contain", "Room", "Near camp"];

export const amenitiesList = [
  { id: "kitchen", label: "Kitchen" },
  { id: "toilet", label: "Toilet" },
  { id: "road-access", label: "Road Access" },
  { id: "bathroom", label: "Bathroom" },
  { id: "wifi", label: "Wi-Fi" },
  { id: "generator", label: "Generator" },
];

export const priceRangeConfig = {
  min: 16000,
  max: 20000000,
};

// Flat lodge list.
// `sections` controls which home-page section the lodge appears in.
// `type` controls the filter-modal type.

export const lodges = [
  {
    id: "sani-mufasa-lodge",
    name: "Sani Mufasa Lodge",
    subtitle: "Bosso Lowcost, Abuja, Kaduna State",
    tagline: "Female Exclusive Apartments",
    roomInfo: "2 Bedrooms · Parlour · Ensuite bathroom",
    location: "Maryland, Lagos",
    type: "Self-contain",
    price: 45000,
    rating: 4.23,
    reviewCount: 11,
    sections: ["popular", "nearPPA"],

    image: lodgeImage(1),
    gallery: lodgeGallery(1),

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

    totalReviews: 6,
  },

  {
    id: "groveland-popular-1",
    name: "Groveland, California",
    subtitle: "Groveland, California, Maryland Lagos",
    tagline: "Cozy self-contain near town",
    roomInfo: "1 Bedroom · Self-contain",
    location: "Maryland Lagos",
    type: "Self-contain",
    price: 289,
    rating: 4.91,
    reviewCount: 89,
    sections: ["popular"],

    image: lodgeImage(2),
    gallery: lodgeGallery(2),

    facilities: ["Kitchen", "WC Toilet", "Wifi", "Generator"],
    reviews: [],
    totalReviews: 89,
  },

  {
    id: "groveland-popular-2",
    name: "Groveland, California",
    subtitle: "Groveland, California, Maryland Lagos",
    tagline: "Bright and airy room",
    roomInfo: "1 Bedroom · Self-contain",
    location: "Maryland Lagos",
    type: "Room",
    price: 289,
    rating: 4.91,
    reviewCount: 89,
    sections: ["popular"],

    image: lodgeImage(3),
    gallery: lodgeGallery(3),

    facilities: ["Kitchen", "WC Toilet", "Wifi"],
    reviews: [],
    totalReviews: 89,
  },

  {
    id: "groveland-camp-1",
    name: "Groveland, California",
    subtitle: "Groveland, California, Maryland Lagos",
    tagline: "3 lodges left near camp",
    roomInfo: "Shared room · Near camp",
    location: "Maryland Lagos",
    type: "Near camp",
    price: null,
    rating: 4.91,
    reviewCount: 34,
    sections: ["nearCamp"],

    image: lodgeImage(4),
    gallery: lodgeGallery(4),

    facilities: ["Toilet", "Road Access"],
    reviews: [],
    totalReviews: 34,
  },

  {
    id: "groveland-camp-2",
    name: "Groveland, California",
    subtitle: "Groveland, California, Maryland Lagos",
    tagline: "3 lodges left near camp",
    roomInfo: "Shared room · Near camp",
    location: "Maryland Lagos",
    type: "Near camp",
    price: null,
    rating: 4.91,
    reviewCount: 34,
    sections: ["nearCamp"],

    image: lodgeImage(5),
    gallery: lodgeGallery(5),

    facilities: ["Toilet", "Road Access"],
    reviews: [],
    totalReviews: 34,
  },

  {
    id: "groveland-affordable-1",
    name: "Groveland, California",
    subtitle: "Groveland, California, Maryland Lagos",
    tagline: "Budget-friendly self-contain",
    roomInfo: "1 Bedroom · Self-contain",
    location: "Maryland Lagos",
    type: "Self-contain",
    price: 289,
    rating: 4.91,
    reviewCount: 56,
    sections: ["affordable"],

    image: lodgeImage(6),
    gallery: lodgeGallery(6),

    facilities: ["Kitchen", "Toilet"],
    reviews: [],
    totalReviews: 56,
  },

  {
    id: "groveland-affordable-2",
    name: "Groveland, California",
    subtitle: "Groveland, California, Maryland Lagos",
    tagline: "Budget-friendly self-contain",
    roomInfo: "1 Bedroom · Self-contain",
    location: "Maryland Lagos",
    type: "Room",
    price: 289,
    rating: 4.91,
    reviewCount: 56,
    sections: ["affordable"],

    image: lodgeImage(7),
    gallery: lodgeGallery(7),

    facilities: ["Kitchen", "Toilet"],
    reviews: [],
    totalReviews: 56,
  },

  {
    id: "darrell-steward-lodge",
    name: "Darrell Steward",
    subtitle: "Maryland, Lagos",
    tagline: "Near your PPA",
    roomInfo: "1 Bedroom · Self-contain",
    location: "Maryland, Lagos",
    type: "Self-contain",
    price: 45000,
    rating: 4.91,
    reviewCount: 22,
    sections: ["nearPPA"],

    image: lodgeImage(8),
    gallery: lodgeGallery(8),

    facilities: ["Kitchen", "Toilet", "Wifi"],
    reviews: [],
    totalReviews: 22,
  },

  {
    id: "ronald-richards-lodge",
    name: "Ronald Richards",
    subtitle: "Maryland, Lagos",
    tagline: "Near your PPA",
    roomInfo: "1 Bedroom · Self-contain",
    location: "Maryland, Lagos",
    type: "Room",
    price: 45000,
    rating: 4.91,
    reviewCount: 18,
    sections: ["nearPPA"],

    image: lodgeImage(9),
    gallery: lodgeGallery(9),

    facilities: ["Kitchen", "Toilet", "Generator"],
    reviews: [],
    totalReviews: 18,
  },

  {
    id: "jenny-wilson-lodge",
    name: "Jenny Wilson",
    subtitle: "Maryland, Lagos",
    tagline: "Near your PPA",
    roomInfo: "1 Bedroom · Self-contain",
    location: "Maryland, Lagos",
    type: "Self-contain",
    price: 45000,
    rating: 4.91,
    reviewCount: 27,
    sections: ["nearPPA"],

    image: lodgeImage(10),
    gallery: lodgeGallery(10),

    facilities: ["Kitchen", "Toilet", "Wifi", "Generator"],
    reviews: [],
    totalReviews: 27,
  },

  {
    id: "jacob-jones-lodge",
    name: "Jacob Jones",
    subtitle: "Maryland, Lagos",
    tagline: "Near your PPA",
    roomInfo: "1 Bedroom · Self-contain",
    location: "Maryland, Lagos",
    type: "Near camp",
    price: 45000,
    rating: 4.91,
    reviewCount: 15,
    sections: ["nearPPA"],

    image: lodgeImage(11),
    gallery: lodgeGallery(11),

    facilities: ["Kitchen", "Toilet"],
    reviews: [],
    totalReviews: 15,
  },
];

// Section metadata
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