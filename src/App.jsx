
import { Navigate, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
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


import usePosts from "./hooks/usePosts";

function App() {
  const { posts, api } = usePosts();


  return (
    <>
      <Routes>
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

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <NavBar />
    </>
  );
}

export default App;