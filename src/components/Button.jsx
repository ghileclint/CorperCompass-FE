import styles from "../css/button.module.css";

const Button = ({ text, icon, onclick, filled }) => {
  return (
    <button
      className={filled ? styles.btnFilled : styles.btnOutlined}
      onClick={onclick}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
