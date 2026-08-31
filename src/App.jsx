import { useState } from "react";
import Onboarding from "./pages/onboarding/Onboarding";
import NyscDetails from "./pages/signup/NyscDetails";
import SetProfile from "./pages/signup/SetProfile";
import UploadLetter from "./pages/signup/UploadLetter";
import Review from "./pages/signup/Review";
import VerificationPage from "./components/ProgressIndicator";
import SplashScreen from "./pages/SplashScreen";
import CreateAccount from "./pages/signup/CreateAccount";
import AllSet from "./pages/signup/AllSet";

function App() {
  return (
    <>
      {/* <Onboarding /> */}
      {/* <Input /> */}
      {/* <NyscDetails /> */}
      {/* <SetProfile /> */}
      {/* <UploadLetter /> */}
      {/* <Review /> */}
      {/* <SplashScreen /> */}
      {/* <CreateAccount /> */}
      <AllSet />
    </>
  );
}

export default App;
