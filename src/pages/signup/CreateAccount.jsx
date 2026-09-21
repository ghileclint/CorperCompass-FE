import styles from "../signup/css/createAccount.module.css";
import PasswordInput from "../../components/PasswordInput";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";


const CreateAccount = () => {
  return (
    <div className={styles.createAccountContainer}>
      <div className={styles.heading}>
        <h2>Create your account</h2>
        <p>Let's get you set up in under 2 minutes</p>
      </div>

      <div className={styles.form}>
        <TextInput label="FULL NAME" placeholder="e.g Adaeze Okonkwo" />
        <TextInput label="EMAIL ADDRESS" placeholder="e.g adaeze@gmail.com" />
        <PasswordInput label="PASSWORD" placeholder="Minimum 8 characters" />
        <PasswordInput
          label="CONFIRM PASSWORD"
          placeholder="Minimum 8 characters"
        />
      </div>

      <div className={styles.bottomContainer}>
        <p className={styles.bottomHeading}>
          By continuing, you agree to our <span>Terms</span> and{" "}
          <span>Privacy Policy</span>
        </p>
        <Button text="Continue" filled="btnFilled" />
        <p className={styles.bottomText}>
          Already have an account? <a href="">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
