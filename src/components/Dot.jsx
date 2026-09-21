import styles from "../css/dot.module.css";

const Dot = ({ active }) => {
  return <span className={active ? styles.dotted : styles.dot}></span>;
};

export default Dot;
