import { useState } from "react";
import styles from "../css/passwordInput.module.css";
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ label, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  function handleShowPassword(e) {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  return (
    <div className={styles.passwordInput}>
      <label>{label}</label>
      <input
        type={showPassword ? "text" : "password"}
        name=""
        id=""
        placeholder={placeholder}
      />
      <button type="button" onClick={handleShowPassword}>
        {showPassword ? <FaEyeSlash /> : <IoEye />}
      </button>
    </div>
  );
};

export default PasswordInput;
