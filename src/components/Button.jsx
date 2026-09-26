import styles from "../css/button.module.css";

const Button = ({ text, icon, onClick, filled }) => {
  return (
    <button
      className={filled ? styles.btnFilled : styles.btnOutlined}
      onClick={onClick}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
