import { Link } from "react-router-dom";
import styles from "../css/login.module.css";
import Button from "../components/Button";
import PasswordInput from "../components/PasswordInput";
import TextInput from "../components/TextInput";
import logo from "../assets/images/logo2.png";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.headingContainer}>
        <div className={styles.img}>
          <img src={logo} alt="logo" />
        </div>
        <h3 className={styles.heading}>Welcome back</h3>
        <p className={styles.text}>Log in to your account</p>
      </div>

      <div className={styles.form}>
        <form action="" className={styles.loginInfo}>
          <div className={styles.info}>
            <TextInput label="Name:" type="text" placeholder="Enter name" />
          </div>

          <div>
            <PasswordInput label="Password:" placeholder="Enter password" />
          </div>

          <Link to="" className={styles.forgetPassword}>
            Forgot password?
          </Link>
        </form>
      </div>

      <div className={styles.btnContainer}>
        <Button text="Login" filled="btnFilled" />
        <div className={styles.divider}>
          <span>or</span>
        </div>
        <Button text="Login as Vendor" />
      </div>

      <div className={styles.footer}>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
