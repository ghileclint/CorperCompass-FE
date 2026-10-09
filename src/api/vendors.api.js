// src/api/vendors.api.js
//
// ── This is the ONLY file that should change once the real backend
//    exists. Every page/component calls these functions — never the
//    mock data directly — so swapping mock -> real API is a one-file edit.
//
// TODO(backend): once the API is ready, replace the body of each
// function below with a real request, e.g.:
//
//   const BASE_URL = import.meta.env.VITE_API_BASE_URL;
//
//   export async function fetchVendors() {
//     const res = await fetch(`${BASE_URL}/vendors`);
//     if (!res.ok) throw new Error("Failed to fetch vendors");
//     return res.json();
//   }
//
// Until then, these functions simulate a network call (delay + the
// same shape a real API would return) using the single vendor list in
// src/data/vendors.js — there is only one source of vendor data, so
// whatever you click on the list is exactly what you land on.

import { vendors as mockVendors } from "../data/vendors";

const MOCK_DELAY_MS = 400;

function delay(value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), MOCK_DELAY_MS));
}

/** Get all vendors near the corper's PPA. */
export async function fetchVendors() {
  // TODO(backend): GET /vendors?near=<ppa_id>
  return delay(mockVendors);
}

/** Search vendors by name, optionally scoped to a category. */
export async function searchVendors(query, category = "All") {
  // TODO(backend): GET /vendors/search?q=<query>&category=<category>
  let filtered = mockVendors;

  if (category && category !== "All") {
    filtered = filtered.filter((v) => v.category === category);
  }

  if (query) {
    filtered = filtered.filter((v) =>
      v.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  return delay(filtered);
}

/** Get vendors in a single category, with no text search applied
 *  (used when a category pill is tapped without typing anything). */
export async function fetchVendorsByCategory(category) {
  // TODO(backend): GET /vendors?category=<category>
  if (!category || category === "All") return delay(mockVendors);
  const filtered = mockVendors.filter((v) => v.category === category);
  return delay(filtered);
}

/**
 * Get a single vendor's full profile by id.
 * FIXED: this now actually searches mockVendors for a matching id
 * instead of always returning one hardcoded fixture. If the id isn't
 * found, it rejects — callers should show an error/not-found state,
 * never silently fall back to an unrelated vendor.
 */
export async function fetchVendorById(vendorId) {
  // TODO(backend): GET /vendors/:vendorId
  const found = mockVendors.find((v) => v.id === vendorId);
  if (!found) {
    return Promise.reject(new Error(`No vendor found with id "${vendorId}"`));
  }
  return delay(found);
}

/**
 * Get suggested/related vendors shown on a profile page.
 * FIXED: this is now computed from the real vendor list — same
 * category first, then anything else — excluding the vendor you're
 * currently viewing. Every card this returns is a real, clickable
 * vendor that actually exists, so "more vendors" never dead-ends.
 */
export async function fetchMoreVendors(vendorId, limit = 4) {
  // TODO(backend): GET /vendors/:vendorId/related
  const current = mockVendors.find((v) => v.id === vendorId);
  const others = mockVendors.filter((v) => v.id !== vendorId);

  if (!current) return delay(others.slice(0, limit));

  const sameCategory = others.filter((v) => v.category === current.category);
  const rest = others.filter((v) => v.category !== current.category);

  return delay([...sameCategory, ...rest].slice(0, limit));
}
