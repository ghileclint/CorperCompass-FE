// src/features/explore/lodges/components/LodgeCard.jsx
import { useState } from "react";
import { FiHeart, FiStar } from "react-icons/fi";
import styles from "./LodgeCard.module.css";

export default function LodgeCard({ lodge, onClick }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className={styles.card} onClick={() => onClick?.(lodge)}>
      <div className={styles.imageWrapper}>
        <img src={lodge.image} alt={lodge.name} className={styles.image} />
        <button
          type="button"
          className={styles.heartButton}
          onClick={(e) => {
            e.stopPropagation();
            setSaved((s) => !s);
          }}
          aria-label={saved ? "Remove from saved" : "Save lodge"}
        >
          <FiHeart size={14} fill={saved ? "#ffffff" : "none"} />
        </button>
      </div>
      <p className={styles.name}>{lodge.name}</p>
      <p className={styles.location}>{lodge.location}</p>
      <div className={styles.metaRow}>
        <span className={styles.rating}>
          <FiStar size={11} fill="#14532d" /> {lodge.rating}
        </span>
        {lodge.price != null && (
          <span className={styles.price}>₦{lodge.price.toLocaleString()}</span>
        )}
      </div>
    </div>
  );
}
