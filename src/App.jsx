import { useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import ComingSoon from "./components/ComingSoon";
import Home from "./pages/content-creation/Home";
import PostDetail from "./pages/content-creation/PostDetail";

import Onboarding from "./pages/onboarding/Onboarding";
import CreateAccount from "./pages/signup/CreateAccount";
import Login from "./pages/Login";
import NyscDetails from "./pages/signup/NyscDetails";
import SetProfile from "./pages/signup/SetProfile";
import UploadLetter from "./pages/signup/UploadLetter";
import Review from "./pages/signup/Review";
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

const initialPosts = [
  {
    id: "1",
    user: {
      id: "user-1",
      name: "Eleanor Pena",
      avatar: "https://i.pravatar.cc/160?img=47",
      verified: true,
      vendor: true,
    },
    content:
      "Finally sorted my clearance at the local government secretariat.\nTip for new corps in Zone B: Go early on Tuesdays, it's less crowded than Mondays!",
    image: null,
    audience: "Everyone",
    createdAt: "14h",
    likes: 9,
    comments: [],
    shares: 3,
    liked: false,
    saved: true,
    owner: false,
  },
  {
    id: "2",
    user: {
      id: "user-2",
      name: "Courtney Henry",
      avatar: "https://i.pravatar.cc/160?img=32",
      verified: true,
      vendor: false,
    },
    content:
      "Found a quiet spot with excellent food around Zone B. Sharing it here for anyone looking for somewhere relaxed this weekend.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    audience: "Everyone",
    createdAt: "14h",
    likes: 14,
    comments: [],
    shares: 4,
    liked: false,
    saved: false,
    owner: false,
  },
  {
    id: "3",
    user: {
      id: "current-user",
      name: "Myles",
      avatar: "https://i.pravatar.cc/160?img=12",
      verified: true,
      vendor: true,
    },
    content:
      "Anyone know a reliable vendor for event rentals this month? Looking for chairs, tables and a small canopy.",
    image: null,
    audience: "Everyone",
    createdAt: "1d",
    likes: 6,
    comments: [],
    shares: 1,
    liked: false,
    saved: false,
    owner: true,
  },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);

  const api = useMemo(
    () => ({
      createPost(post) {
        setPosts((prev) => [post, ...prev]);
      },

      updatePost(id, changes) {
        setPosts((prev) =>
          prev.map((p) => (p.id === id ? { ...p, ...changes } : p)),
        );
      },

      deletePost(id) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
      },
    }),
    [],
  );

  return (
    <>
      <Routes>
        {/* Content creation */}
        <Route path="/" element={<Home posts={posts} api={api} />} />
        <Route
          path="/post/:postId"
          element={<PostDetail posts={posts} api={api} />}
        />

        {/* Coming soon */}
        <Route path="/explore" element={<ComingSoon title="Explore" />} />
        <Route path="/market" element={<ComingSoon title="Market" />} />
        <Route path="/journey" element={<ComingSoon title="Journey" />} />
        <Route path="/inbox" element={<ComingSoon title="Inbox" />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/nysc-details" element={<NyscDetails />} />
        <Route path="/set-profile" element={<SetProfile />} />
        <Route path="/upload-letter" element={<UploadLetter />} />
        <Route path="/review" element={<Review />} />
        <Route path="/all-set" element={<AllSet />} />
        <Route path="/onboarding" element={<Onboarding />} />

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

      <NavBar />
    </>
  );
}

export default App;