// src/features/explore/lodges/components/LodgeSearchRow.jsx
import { FiHome } from "react-icons/fi";
import styles from "./LodgeSearchRow.module.css";

export default function LodgeSearchRow({ lodge, onSelect }) {
  return (
    <button
      type="button"
      className={styles.row}
      onClick={() => onSelect?.(lodge)}
    >
      {lodge.image ? (
        <img src={lodge.image} alt="" className={styles.thumb} />
      ) : (
        <span className={styles.thumbFallback}>
          <FiHome size={14} />
        </span>
      )}
      <span className={styles.name}>{lodge.name}</span>
    </button>
  );
}
