// src/api/lodges.api.js
//
// This is the ONLY file that should change once the real backend
// exists. Every page/component calls these functions — never the
// mock data directly — so swapping mock -> real API is a one-file edit.

import {
  lodges as mockLodges,
  lodgeSections,
  lodgeTypes as mockLodgeTypes,
  amenitiesList as mockAmenitiesList,
  priceRangeConfig as mockPriceRangeConfig,
} from "../data/lodges";

const MOCK_DELAY_MS = 400;

function delay(value) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(value), MOCK_DELAY_MS)
  );
}

/** Home page data: each section with its lodges. */
export async function fetchLodgeSections() {
  // TODO(backend): GET /lodges/home
  const result = lodgeSections.map((section) => ({
    key: section.key,
    title: section.title,
    lodges: mockLodges.filter((l) => l.sections.includes(section.key)),
  }));

  return delay(result);
}

/** Get all lodges. */
export async function fetchLodges() {
  // TODO(backend): GET /lodges
  return delay(mockLodges);
}

/** Autocomplete-style search by name. */
export async function searchLodges(query) {
  // TODO(backend): GET /lodges/search?q=<query>
  if (!query?.trim()) {
    return delay(mockLodges);
  }

  const searchTerm = query.trim().toLowerCase();

  const filtered = mockLodges.filter((lodge) =>
    lodge.name.toLowerCase().includes(searchTerm)
  );

  return delay(filtered);
}

/** Apply the filter modal's criteria:
 * type of place, amenities, and price range.
 */
export async function filterLodges({
  type,
  amenities = [],
  minPrice,
  maxPrice,
}) {
  // TODO(backend):
  // GET /lodges?type=<type>&amenities=<amenities>&min=<minPrice>&max=<maxPrice>

  const selectedType =
    type && type !== "All"
      ? type.toLowerCase().trim()
      : null;

  const filtered = mockLodges.filter((lodge) => {
    const lodgeType = lodge.type?.toLowerCase().trim();

    const matchesType =
      !selectedType || lodgeType === selectedType;

    const matchesAmenities = amenities.every((amenity) =>
      lodge.facilities.some((facility) =>
        facility
          .toLowerCase()
          .includes(amenity.replace("-", " ").toLowerCase())
      )
    );

    const matchesMin =
      minPrice == null ||
      lodge.price == null ||
      lodge.price >= minPrice;

    const matchesMax =
      maxPrice == null ||
      lodge.price == null ||
      lodge.price <= maxPrice;

    return (
      matchesType &&
      matchesAmenities &&
      matchesMin &&
      matchesMax
    );
  });

  return delay(filtered);
}

/** Static filter option lists. */
export async function fetchLodgeFilterOptions() {
  // TODO(backend): GET /lodges/filter-options

  return delay({
    types: mockLodgeTypes,
    amenities: mockAmenitiesList,
    priceRange: mockPriceRangeConfig,
  });
}

/** Get a single lodge's full profile by id. */
export async function fetchLodgeById(lodgeId) {
  // TODO(backend): GET /lodges/:lodgeId

  const match = mockLodges.find((lodge) => lodge.id === lodgeId);

  if (!match) {
    return Promise.reject(
      new Error(`Lodge not found: ${lodgeId}`)
    );
  }

  return delay(match);
}

/** Get related lodges for the "More apartments" section. */
export async function fetchMoreLodges(lodgeId) {
  // TODO(backend): GET /lodges/:lodgeId/related

  const current = mockLodges.find((lodge) => lodge.id === lodgeId);

  if (!current) {
    return delay([]);
  }

  const related = mockLodges.filter(
    (lodge) =>
      lodge.id !== lodgeId &&
      lodge.sections.some((section) =>
        current.sections.includes(section)
      )
  );

  return delay(related);
}