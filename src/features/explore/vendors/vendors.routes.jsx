// src/features/explore/vendors/vendors.routes.jsx
//
// This is NOT a standalone file to drop in as-is — it shows the <Route>
// entries to merge into the team's existing router setup (likely in
// App.jsx or a central routes file, since react-router-dom v7 is a
// dependency). Copy the <Route> lines into the existing <Routes> tree.

import { Route } from "react-router-dom";
import VendorsListPage from "./pages/VendorsListPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import VendorProfilePage from "./pages/VendorProfilePage";

// Example usage inside the team's <Routes> ... </Routes>:


export const vendorRoutes = (
  <div>
    <Route path="/explore/vendors" element={<VendorsListPage />} />
    <Route path="/explore/vendors/search" element={<SearchResultsPage />} />
    <Route path="/explore/vendors/:vendorId" element={<VendorProfilePage />} />
  </div>
);
