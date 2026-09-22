import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routePaths";
import Button from "../../components/Button";
import Indicator from "../../components/ProgressIndicator";
import styles from "../signup/css/review.module.css";
import { VscOpenPreview } from "react-icons/vsc";
import Image from "../../assets/images/verify.png";

const Review = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // do some validation before you continue

    navigate(ROUTES.ALL_SET);
  };
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewImage}>
        <img src={Image} alt="" />
      </div>

      <div className={styles.reviewContent}>
        <div className={styles.reviewHeading}>
          <div className={styles.reviewIcon}>
            <VscOpenPreview />
          </div>
          <p>Under Review</p>
        </div>
        <div className={styles.reviewText}>
          <h4>We're verifying your account</h4>
          <p>
            We'll check your call-up letter and notify you within 24 hours. In
            the meantime, you can explore the app.
          </p>
        </div>
        <div className={styles.indicator}>
          <Indicator currentStep={2} />
        </div>

        <div className={styles.btn}>
          <Button
            text="Explore the app"
            filled="btnFilled"
            onClick={handleContinue}
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
