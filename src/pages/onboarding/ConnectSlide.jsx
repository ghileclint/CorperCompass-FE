import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import styles from "../onboarding/css/connectSlide.module.css";
import Dot from "../../components/Dot";
import Image from "../../assets/images/corpers.png";
import { ROUTES } from "../../routes/routePaths";

const ConnectSlide = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate(ROUTES.LOGIN);
  };

  const goToSignUp = () => {
    navigate(ROUTES.SIGNUP);
  };

  return (
    <div className={styles.connectSlideContainer}>
      <div className={styles.imgContainer}>
        <img src={Image} alt="stock Image" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.dots}>
          <Dot />
          <Dot />
          <Dot active="dotted" />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.heading}>Connect with corpers in your zone</p>
          <p className={styles.text}>
            Share tips, find housing leads and build your network - with corpers
            in your exact deployment zone.
          </p>
        </div>
        <div className={styles.btnContainer}>
          <Button
            text="Create Account"
            filled="btnFilled"
            onClick={goToSignUp}
          />
          <Button text="Login" onClick={goToLogin} />
        </div>
      </div>
    </div>
  );
};

export default ConnectSlide;
