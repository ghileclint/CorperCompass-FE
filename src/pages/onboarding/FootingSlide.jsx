import Button from "../../components/Button";
import styles from "../onboarding/css/footingSlide.module.css";
import Dot from "../../components/Dot";

const FootingSlide = () => {
  return (
    <div className={styles.footingSlideContainer}>
      <div className={styles.imgContainer}>
        <img src="" alt="stock Image" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.dots}>
          <Dot active="dotted" />
          <Dot />
          <Dot />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.heading}>Find your footing in a new state.</p>
          <p className={styles.text}>
            CorperCompass guides you from your call-up letter to settling into
            your new community.
          </p>
        </div>
        <div className={styles.btnContainer}>
          <Button text="Primary - Continue" filled="btnFilled" />
          <Button text="I already have an account" />
        </div>
      </div>
    </div>
  );
};

export default FootingSlide;
