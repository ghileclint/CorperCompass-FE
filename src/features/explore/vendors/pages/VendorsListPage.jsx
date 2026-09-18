// src/features/explore/vendors/pages/VendorsListPage.jsx
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FiArrowLeft, FiSliders } from "react-icons/fi";
import { fetchVendors, fetchVendorsByCategory } from "../../../../api/vendors.api";
import { categories } from "../../../../data/vendors";
import SearchBar from "../components/SearchBar";
import VendorCard from "../components/VendorCard";
import styles from "./VendorsListPage.module.css";

// TODO: swap this local <header> for the team's shared <Navbar />
// from src/components/Navbar once its prop API is confirmed.
export default function VendorsListPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "All";

  const [vendors, setVendors] = useState([]);
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [status, setStatus] = useState("loading"); // "loading" | "ready" | "error"

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");

    const request =
      initialCategory === "All"
        ? fetchVendors()
        : fetchVendorsByCategory(initialCategory);

    request
      .then((data) => {
        if (cancelled) return;
        setVendors(data);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSearchSubmit(query) {
    if (!query) return;
    navigate(
      `/vendors/search?q=${encodeURIComponent(query)}&category=${encodeURIComponent(
        activeCategory
      )}`
    );
  }

  function handleCategoryClick(category) {
    setActiveCategory(category);
    setStatus("loading");
    fetchVendorsByCategory(category)
      .then((data) => {
        setVendors(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }

  function handleOrder(vendor) {
    navigate(`/vendors/${vendor.id}`);
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
          <h1 className={styles.title}>Vendors</h1>
          <FiSliders size={18} className={styles.headerIcon} />
        </header>

        <SearchBar onSearch={handleSearchSubmit} />
      </div>

      <div className={styles.pillsRow}>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryClick(category)}
            className={`${styles.pill} ${
              activeCategory === category ? styles.pillActive : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <p className={styles.sectionLabel}>Near your PPA</p>

      {status === "loading" && (
        <p className={styles.stateMessage}>Loading vendors…</p>
      )}

      {status === "error" && (
        <p className={styles.stateMessage}>
          Couldn't load vendors. Please try again.
        </p>
      )}

      {status === "ready" && (
        <div className={styles.grid}>
          {vendors.map((vendor) => (
            <VendorCard
              key={vendor.id}
              vendor={vendor}
              onOrder={handleOrder}
            />
          ))}
        </div>
      )}
    </div>
  );
}
