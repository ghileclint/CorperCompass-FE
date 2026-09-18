// src/features/explore/lodges/pages/LodgeDirectoryPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiSearch, FiSliders, FiChevronRight } from "react-icons/fi";
import { fetchLodgeSections, filterLodges, fetchLodgeFilterOptions } from "../../../../api/lodges.api";
import LodgeCard from "../components/LodgeCard";
import FilterModal from "../components/FilterModal";
import styles from "./LodgeDirectoryPage.module.css";

export default function LodgeDirectoryPage() {
  const navigate = useNavigate();

  const [sections, setSections] = useState([]);
  const [types, setTypes] = useState(["All"]);
  const [activeType, setActiveType] = useState("All");
  const [status, setStatus] = useState("loading"); // "loading" | "ready" | "error"
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchLodgeSections()
      .then((data) => {
        setSections(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));

    fetchLodgeFilterOptions().then((options) => setTypes(options.types));
  }, []);

  function handleSelectLodge(lodge) {
    navigate(`/lodges/${lodge.id}`);
  }

  function handleSearchFocus() {
    navigate("/lodges/search");
  }

  function handleTypeClick(type) {
    setActiveType(type);
    setStatus("loading");

    if (type === "All") {
      fetchLodgeSections()
        .then((data) => {
          setSections(data);
          setStatus("ready");
        })
        .catch(() => setStatus("error"));
      return;
    }

    filterLodges({ type })
      .then((data) => {
        setSections([{ key: "results", title: `${type} results`, lodges: data }]);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }

  function handleApplyFilters(criteria) {
    setStatus("loading");
    filterLodges(criteria)
      .then((data) => {
        // Filtered results collapse into a single "Results" section
        setSections([{ key: "results", title: "Results", lodges: data }]);
        setStatus("ready");
        setShowFilters(false);
      })
      .catch(() => setStatus("error"));
  }

  return (
    <div className={styles.page}>
      <div className={styles.headerBlock}>
        <header className={styles.header}>
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className={styles.backButton}
          >
            <FiArrowLeft size={18} />
          </button>
          <h1 className={styles.title}>Lodge Directory</h1>
          <button
            type="button"
            onClick={() => setShowFilters(true)}
            aria-label="Open filters"
            className={styles.filterButton}
          >
            <FiSliders size={18} />
          </button>
        </header>

        <button
          type="button"
          className={styles.searchWrapper}
          onClick={handleSearchFocus}
        >
          <FiSearch className={styles.searchIcon} size={16} />
          <span className={styles.searchPlaceholder}>
            Search vendors, lodges, food...
          </span>
        </button>
      </div>

      <div className={styles.pillsRow}>
        {types.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => handleTypeClick(type)}
            className={`${styles.pill} ${activeType === type ? styles.pillActive : ""}`}
          >
            {type}
          </button>
        ))}
      </div>

      {status === "loading" && <p className={styles.stateMessage}>Loading…</p>}

      {status === "error" && (
        <p className={styles.stateMessage}>
          Couldn't load lodges. Please try again.
        </p>
      )}

      {status === "ready" &&
        sections.map((section) =>
          section.lodges.length === 0 ? null : (
            <section key={section.key} className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                {section.lodges.length > 2 && (
                  <FiChevronRight size={16} className={styles.sectionArrow} />
                )}
              </div>
              <div className={styles.grid}>
                {section.lodges.map((lodge) => (
                  <LodgeCard
                    key={lodge.id}
                    lodge={lodge}
                    onClick={handleSelectLodge}
                  />
                ))}
              </div>
            </section>
          )
        )}

      {showFilters && (
        <FilterModal
          onClose={() => setShowFilters(false)}
          onApply={handleApplyFilters}
        />
      )}
    </div>
  );
}
