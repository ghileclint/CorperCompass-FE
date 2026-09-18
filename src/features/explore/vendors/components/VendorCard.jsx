// src/features/explore/vendors/components/VendorCard.jsx
import { FiMapPin } from "react-icons/fi";
import styles from "./VendorCard.module.css";

// TODO: replace this raw <button> with the team's shared <Button />
// from src/components/Button once its prop API is confirmed
// (e.g. <Button variant="primary" onClick={...}>Order now</Button>).
export default function VendorCard({ vendor, onOrder }) {
  return (
    <article className={styles.card}>
      <img
        src={vendor.image}
        alt={vendor.name}
        className={styles.image}
        loading="lazy"
      />

      <div className={styles.body}>
        <h3 className={styles.name}>{vendor.name}</h3>
        <p className={styles.location}>
          <FiMapPin size={12} /> {vendor.location}
        </p>
        <p className={styles.description}>{vendor.description}</p>

        <div className={styles.footer}>
          <span className={styles.price}>
            ₦{vendor.priceFrom.toLocaleString()}+
          </span>
          <button
            type="button"
            className={styles.orderButton}
            onClick={() => onOrder?.(vendor)}
          >
            Order now
          </button>
        </div>
      </div>
    </article>
  );
}
