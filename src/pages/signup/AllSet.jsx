import Button from "../../components/Button";
import styles from "../signup/css/allSet.module.css";
import popper from "../../assets/images/popper.png";
import { IoLocation } from "react-icons/io5";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "../../assets/images/celebrate.png";

const AllSet = () => {
  return (
    <div className={styles.allSetContainer}>
      <div className={styles.allSetImg}>
        <img src={Image} alt="" />
      </div>

      <div className={styles.allSetContent}>
        <div className={styles.allSetIcon}>
          <img src={popper} alt="" className={styles.popperImg} />
        </div>

        <div className={styles.allSetText}>
          <h2>You're all set!</h2>
          <p>
            Your profile is ready. We've customized your experience to help you
            navigate your service year with ease.
          </p>
        </div>

        <div className={styles.allSetState}>
          <IoLocation className={styles.allSetStateIcon} />
          <p>Kogi Zone</p>
        </div>

        <div className={styles.btn}>
          <Button
            text="Explore your dashboard"
            filled="btnFilled"
            icon={<BiRightArrowAlt />}
          />
        </div>
      </div>
    </div>
  );
};

export default AllSet;
