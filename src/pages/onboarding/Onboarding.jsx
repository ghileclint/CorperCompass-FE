import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import styles from "../onboarding/css/onboarding.module.css";
import SplashScreen from "../SplashScreen";
import FootingSlide from "./FootingSlide";
import TrustedVendorsSlide from "./TrustedVendorsSlide";
import ConnectSlide from "./ConnectSlide";

const slides = [
  <SplashScreen />,
  <FootingSlide />,
  <TrustedVendorsSlide />,
  <ConnectSlide />,
];

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const handlesNext = () => {
    if (currentSlide < slides.length - 1)
      return setCurrentSlide(currentSlide + 1);
  };

  const handlesBack = () => {
    if (currentSlide > 0) return setCurrentSlide(currentSlide - 1);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (distance > 50) {
      handlesNext();
    }

    if (distance < -50) {
      handlesBack();
    }

    setTouchStart(null);
  };

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className={styles.onboardingContainer}>
      <div
        className={styles.slideContainer}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides[currentSlide]}
        <div className={styles.navigation}>
          <button onClick={handlesBack}>
            <IoIosArrowBack className={styles.icon} />
          </button>
          <button onClick={handlesNext}>
            <IoIosArrowForward className={styles.icon} />
          </button>
        </div>
        <button className={styles.skipBtn} onClick={goToLogin}>
          Skip
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
