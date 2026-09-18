
import { Routes, Route, Navigate } from "react-router-dom";
import VendorsListPage from "./features/explore/vendors/pages/VendorsListPage";
import SearchResultsPage from "./features/explore/vendors/pages/SearchResultsPage";
import VendorProfilePage from "./features/explore/vendors/pages/VendorProfilePage";
import LodgeDirectoryPage from "./features/explore/lodges/pages/LodgeDirectoryPage";
import LodgeSearchPage from "./features/explore/lodges/pages/LodgeSearchPage";
import LodgeProfilePage from "./features/explore/lodges/pages/LodgeProfilePage";
import CultureGuidePage from "./features/explore/culture/pages/CultureGuidePage";
import PhrasebookPage from "./features/explore/culture/pages/PhrasebookPage";
import CustomsEtiquettePage from "./features/explore/culture/pages/CustomsEtiquettePage";
 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/vendors" replace />} />
      <Route path="/vendors" element={<VendorsListPage />} />
      <Route path="/vendors/search" element={<SearchResultsPage />} />
      <Route path="/vendors/:id" element={<VendorProfilePage />} />
      <Route path="/lodges" element={<LodgeDirectoryPage />} />
      <Route path="/lodges/search" element={<LodgeSearchPage />} />
      <Route path="/lodges/:id" element={<LodgeProfilePage />} />
      <Route path="/culture" element={<CultureGuidePage />} />
      <Route path="/culture/phrasebook" element={<PhrasebookPage />} />
      <Route path="/culture/customs" element={<CustomsEtiquettePage />} />
    </Routes>
  );
}

export default App;