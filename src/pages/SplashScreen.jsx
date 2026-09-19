import styles from "./onboarding/css/splashscreen.module.css";
import logo from "../assets/images/logo.png";

const SplashScreen = () => {
  return (
    <div className={styles.splashScreenContainer}>
      <img src={logo} alt="logo" className={styles.image} />
      <h3 className={styles.heading}>CorperCompass</h3>
      <p className={styles.text}>Your guide to a new state.</p>
    </div>
  );
};

export default SplashScreen;
