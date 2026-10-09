import { Navigate, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import ComingSoon from "./components/ComingSoon";
import Home from "./pages/content-creation/Home";
import PostDetail from "./pages/content-creation/PostDetail";

import Onboarding from "./pages/onboarding/Onboarding";
import NyscDetails from "./pages/signup/NyscDetails";
import SetProfile from "./pages/signup/SetProfile";
import UploadLetter from "./pages/signup/UploadLetter";
import Review from "./pages/signup/Review";
import SplashScreen from "./pages/onboarding/SplashScreen";
import CreateAccount from "./pages/signup/CreateAccount";
import AllSet from "./pages/signup/AllSet";

import VendorsListPage from "./pages/vendors/VendorsListPage";
import SearchResultsPage from "./pages/vendors/SearchResultsPage";
import VendorProfilePage from "./pages/vendors/VendorProfilePage";

import LodgeDirectoryPage from "./pages/lodges/LodgeDirectoryPage";
import LodgeSearchPage from "./pages/lodges/LodgeSearchPage";
import LodgeProfilePage from "./pages/lodges/LodgeProfilePage";

import CultureGuidePage from "./pages/culture/CultureGuidePage";
import PhrasebookPage from "./pages/culture/PhrasebookPage";
import CustomsEtiquettePage from "./pages/culture/CustomsEtiquettePage";

import usePosts from "./hooks/usePosts";

function App() {
  const { posts, api } = usePosts();

  return (
    <>
      <Routes>
        {/* Content creation */}
        <Route path="/" element={<Home posts={posts} api={api} />} />
        <Route
          path="/post/:postId"
          element={<PostDetail posts={posts} api={api} />}
        />

        {/* Existing onboarding/signup pages */}
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/nysc-details" element={<NyscDetails />} />
        <Route path="/set-profile" element={<SetProfile />} />
        <Route path="/upload-letter" element={<UploadLetter />} />
        <Route path="/review" element={<Review />} />
        <Route path="/splash-screen" element={<SplashScreen />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/all-set" element={<AllSet />} />

        {/* Coming soon */}
        <Route path="/explore" element={<ComingSoon title="Explore" />} />
        <Route path="/market" element={<ComingSoon title="Market" />} />
        <Route path="/journey" element={<ComingSoon title="Journey" />} />
        <Route path="/inbox" element={<ComingSoon title="Inbox" />} />

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

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <NavBar />
    </>
  );
}

export default App;