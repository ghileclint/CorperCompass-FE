import styles from "../css/input.module.css";

const TextInput = ({ label, placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      <label>{label}</label>
      <input type="text" name="" id="" placeholder={placeholder} />
    </div>
  );
};

export default TextInput;
