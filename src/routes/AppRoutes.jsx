import { Routes, Route } from "react-router-dom";
import Onboarding from "../pages/onboarding/Onboarding";
import CreateAccount from "../pages/signup/CreateAccount";
import Login from "../pages/Login";
import NyscDetails from "../pages/signup/NyscDetails";
import SetProfile from "../pages/signup/SetProfile";
import UploadLetter from "../pages/signup/UploadLetter";
import Review from "../pages/signup/Review";
import AllSet from "../pages/signup/AllSet";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<CreateAccount />} />
      <Route path="/nysc-details" element={<NyscDetails />} />
      <Route path="/set-profile" element={<SetProfile />} />
      <Route path="/upload-letter" element={<UploadLetter />} />
      <Route path="/review" element={<Review />} />
      <Route path="/all-set" element={<AllSet />} />
    </Routes>
  );
}

export default AppRoutes;
