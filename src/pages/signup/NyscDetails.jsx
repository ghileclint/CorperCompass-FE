import styles from "../signup/css/nyscDetails.module.css";
import Button from "../../components/Button";
import { IoIosInformationCircle } from "react-icons/io";

const NyscDetails = () => {
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.heading}>
        <h2>Your NYSC Details</h2>
        <p>This links you to your deployment zone and community.</p>
      </div>

      <div className={styles.form}>
        <form action="">
          <label htmlFor="">NYSC Call-up Number</label>
          <input type="text" name="" placeholder="e.g KG/244/4A/1234" />
        </form>

        <form action="">
          <label htmlFor="">State of Origin</label>
          <select name="state" id="">
            <option value="">Select state</option>
            <option value="abia">Abia</option>
            <option value="anambra">Anambra</option>
          </select>
        </form>

        <form action="">
          <label htmlFor="">Deployment Origin</label>
          <select name="state" id="">
            <option value="">Select state</option>
            <option value="abia">Abia</option>
            <option value="anambra">Anambra</option>
          </select>
        </form>

        <form action="">
          <label htmlFor="">Camp Name:</label>
          <input
            type="text"
            name=""
            placeholder="e.g NYSC Orientation Camp, Lokoja"
          />
        </form>
      </div>

      <div className={styles.textContainer}>
        <IoIosInformationCircle className={styles.textIcon} />
        <p>
          Your deployment state determines your zone. Accurate details ensure
          you connect with the right Corper community in your area.
        </p>
      </div>

      <div className={styles.btnContainer}>
        <Button text="Continue" filled="btnFilled" />
      </div>
    </div>
  );
};

export default NyscDetails;
