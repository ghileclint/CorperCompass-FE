// src/features/explore/lodges/components/FilterModal.jsx
import { useEffect, useState } from "react";
import { FiX, FiChevronDown } from "react-icons/fi";
import { fetchLodgeFilterOptions } from "../../../../api/lodges.api";
import styles from "./FilterModal.module.css";

const AMENITIES_PREVIEW_COUNT = 4;

export default function FilterModal({ onClose, onApply, matchCount }) {
  const [options, setOptions] = useState(null); // { types, amenities, priceRange }
  const [type, setType] = useState("All");
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  useEffect(() => {
    fetchLodgeFilterOptions().then((data) => {
      setOptions(data);
      setMinPrice(String(data.priceRange.min));
      setMaxPrice(String(data.priceRange.max));
    });
  }, []);

  function toggleAmenity(id) {
    setSelectedAmenities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  }

  function handleClearAll() {
    setType("All");
    setSelectedAmenities([]);
    if (options) {
      setMinPrice(String(options.priceRange.min));
      setMaxPrice(String(options.priceRange.max));
    }
  }

  function handleApply() {
    onApply?.({
      type,
      amenities: selectedAmenities,
      minPrice: Number(minPrice) || undefined,
      maxPrice: Number(maxPrice) || undefined,
    });
  }

  if (!options) {
    return (
      <div className={styles.overlay}>
        <div className={styles.sheet}>
          <p className={styles.loadingText}>Loading filters…</p>
        </div>
      </div>
    );
  }

  const visibleAmenities = showAllAmenities
    ? options.amenities
    : options.amenities.slice(0, AMENITIES_PREVIEW_COUNT);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.sheet} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            className={styles.closeButton}
          >
            <FiX size={18} />
          </button>
          <h2 className={styles.title}>Filter</h2>
        </div>

        <div className={styles.body}>
          <p className={styles.sectionLabel}>Type of place</p>
          <div className={styles.pills}>
            {options.types.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                className={`${styles.pill} ${type === t ? styles.pillActive : ""}`}
              >
                {t}
              </button>
            ))}
          </div>

          <p className={styles.sectionLabel}>Amenities</p>
          <div className={styles.amenities}>
            {visibleAmenities.map((a) => (
              <label key={a.id} className={styles.amenityRow}>
                <span>{a.label}</span>
                <input
                  type="checkbox"
                  checked={selectedAmenities.includes(a.id)}
                  onChange={() => toggleAmenity(a.id)}
                  className={styles.checkbox}
                />
              </label>
            ))}
          </div>
          {options.amenities.length > AMENITIES_PREVIEW_COUNT && (
            <button
              type="button"
              className={styles.showMore}
              onClick={() => setShowAllAmenities((s) => !s)}
            >
              {showAllAmenities ? "Show less" : "Show more"} <FiChevronDown size={14} />
            </button>
          )}

          <div className={styles.priceHeader}>
            <p className={styles.sectionLabel}>Price range</p>
          </div>
          <div className={styles.priceInputs}>
            <label className={styles.priceField}>
              <span>Minimum</span>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                min={options.priceRange.min}
                max={options.priceRange.max}
              />
            </label>
            <span className={styles.priceDash}>–</span>
            <label className={styles.priceField}>
              <span>Maximum</span>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                min={options.priceRange.min}
                max={options.priceRange.max}
              />
            </label>
          </div>
        </div>

        <div className={styles.footer}>
          <button type="button" className={styles.clearButton} onClick={handleClearAll}>
            Clear all
          </button>
          <button type="button" className={styles.applyButton} onClick={handleApply}>
            {matchCount != null ? `Show ${matchCount} Places` : "Apply"}
          </button>
        </div>
      </div>
    </div>
  );
}
