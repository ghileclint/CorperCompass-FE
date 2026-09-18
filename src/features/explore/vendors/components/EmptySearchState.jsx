// src/features/explore/vendors/components/EmptySearchState.jsx
import { FiSearch } from "react-icons/fi";
import styles from "./EmptySearchState.module.css";

export default function EmptySearchState({ onClearFilters, onBrowseAll }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconCircle}>
        <FiSearch size={24} color="#14532d" />
      </div>
      <p className={styles.message}>
        Try adjusting your filters or search for something more general to
        see what our vendors have to offer.
      </p>
      <button
        type="button"
        onClick={onClearFilters}
        className={styles.primaryButton}
      >
        Clear all filters
      </button>
      <button
        type="button"
        onClick={onBrowseAll}
        className={styles.linkButton}
      >
        Browse all vendors
      </button>
    </div>
  );
}
