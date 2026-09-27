
import { Routes, Route } from "react-router-dom";

import Onboarding from "../pages/onboarding/Onboarding";
import CreateAccount from "../pages/signup/CreateAccount";
import Login from "../pages/Login";
import NyscDetails from "../pages/signup/NyscDetails";
import SetProfile from "../pages/signup/SetProfile";
import UploadLetter from "../pages/signup/UploadLetter";
import Review from "../pages/signup/Review";
import AllSet from "../pages/signup/AllSet";

import VendorsListPage from "../pages/vendors/VendorsListPage";
import SearchResultsPage from "../pages/vendors/SearchResultsPage";
import VendorProfilePage from "../pages/vendors/VendorProfilePage";

import LodgeDirectoryPage from "../pages/lodges/LodgeDirectoryPage";
import LodgeSearchPage from "../pages/lodges/LodgeSearchPage";
import LodgeProfilePage from "../pages/lodges/LodgeProfilePage";

import CultureGuidePage from "../pages/culture/CultureGuidePage";
import PhrasebookPage from "../pages/culture/PhrasebookPage";
import CustomsEtiquettePage from "../pages/culture/CustomsEtiquettePage";

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
      <Route path="/vendors" element={<VendorsListPage /> } />
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

