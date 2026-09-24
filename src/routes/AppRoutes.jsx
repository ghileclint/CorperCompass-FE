import { Routes, Route } from "react-router-dom";

import Onboarding from "../pages/onboarding/Onboarding";
import CreateAccount from "../pages/signup/CreateAccount";
import Login from "../pages/Login";
import NyscDetails from "../pages/signup/NyscDetails";
import SetProfile from "../pages/signup/SetProfile";
import UploadLetter from "../pages/signup/UploadLetter";
import Review from "../pages/signup/Review";
import AllSet from "../pages/signup/AllSet";

import VendorsListPage from "../features/explore/vendors/pages/VendorsListPage";
import SearchResultsPage from "../features/explore/vendors/pages/SearchResultsPage";
import VendorProfilePage from "../features/explore/vendors/pages/VendorProfilePage";
import LodgeSearchPage from "../features/explore/lodges/pages/LodgeSearchPage";

import LodgeDirectoryPage from "../features/explore/lodges/pages/LodgeDirectoryPage";
import LodgeProfilePage from "../features/explore/lodges/pages/LodgeProfilePage";

import CultureGuidePage from "../features/explore/culture/pages/CultureGuidePage";
import PhrasebookPage from "../features/explore/culture/pages/PhrasebookPage";
import CustomsEtiquettePage from "../features/explore/culture/pages/CustomsEtiquettePage";

function AppRoutes() {
  return (
    <Routes>
      {/* Onboarding / Authentication */}
      <Route path="/" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<CreateAccount />} />
      <Route path="/nysc-details" element={<NyscDetails />} />
      <Route path="/set-profile" element={<SetProfile />} />
      <Route path="/upload-letter" element={<UploadLetter />} />
      <Route path="/review" element={<Review />} />
      <Route path="/all-set" element={<AllSet />} />

      {/* Explore - Vendors */}
      <Route path="/vendors" element={<VendorsListPage />} />
      <Route path="/vendors/search" element={<SearchResultsPage />} />
      <Route path="/vendors/:id" element={<VendorProfilePage />} />

      {/* Explore - Lodges */}
      <Route path="/lodges" element={<LodgeDirectoryPage />} />
<Route path="/lodges/search" element={<LodgeSearchPage />} />
<Route path="/lodges/:id" element={<LodgeProfilePage />} />

      {/* Explore - Culture */}
      <Route path="/culture" element={<CultureGuidePage />} />
      <Route path="/culture/phrasebook" element={<PhrasebookPage />} />
      <Route path="/culture/customs" element={<CustomsEtiquettePage />} />
    </Routes>
  );
}

export default AppRoutes;