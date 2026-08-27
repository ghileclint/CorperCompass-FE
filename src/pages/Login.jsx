import styles from "../css/login.module.css";
import Button from "../components/Button";
import PasswordInput from "../components/PasswordInput";
import Input from "../components/Input";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.headingContainer}>
        <img src="" alt="logo" className={styles.img} />
        <h3 className={styles.heading}>Welcome back</h3>
        <p className={styles.text}>Log in to your account</p>
      </div>

      <div className={styles.form}>
        <form action="" className={styles.loginInfo}>
          <div className={styles.info}>
            <Input label="Name:" type="text" placeholder="Enter name" />
          </div>

          <div>
            <PasswordInput label="Password:" placeholder="Enter password" />
          </div>

          <a href="" className={styles.forgetPassword}>
            Forgot password?
          </a>
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
          Don't have an account? <a href="">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
