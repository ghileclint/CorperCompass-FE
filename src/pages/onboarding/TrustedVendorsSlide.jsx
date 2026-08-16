import Button from "../../components/Button";
import styles from "../onboarding/css/trustedVendors.module.css";
import Dot from "../../components/Dot";

const TrustedVendorsSlide = () => {
  return (
    <div className={styles.trustedVendorContainer}>
      <div className={styles.imgContainer}>
        <img src="" alt="stock Image" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.dots}>
          <Dot />
          <Dot active="dotted" />
          <Dot />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.heading}>Find trusted vendors near your camp</p>
          <p className={styles.text}>
            Verified food vendors, lodges and transport providers - all in one
            place, near you.
          </p>
        </div>
        <div className={styles.btnContainer}>
          <Button text="Next" filled="btnFilled" />
          <Button text="Skip" />
        </div>
      </div>
    </div>
  );
};

export default TrustedVendorsSlide;
