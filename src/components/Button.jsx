import styles from "../css/button.module.css";

const Button = ({ text, onclick, filled }) => {
  return (
    <button
      className={filled ? styles.btnFilled : styles.btnOutlined}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
