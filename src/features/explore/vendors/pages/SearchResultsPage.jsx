// src/features/explore/vendors/pages/SearchResultsPage.jsx
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { searchVendors, fetchVendors } from "../../../../api/vendors.api";
import SearchBar from "../components/SearchBar";
import VendorCard from "../components/VendorCard";
import EmptySearchState from "../components/EmptySearchState";
import styles from "./VendorsListPage.module.css";

export default function SearchResultsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const initialCategory = searchParams.get("category") ?? "All";

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("loading"); // "loading" | "ready" | "error"

  useEffect(() => {
    runSearch(initialQuery, initialCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function runSearch(q, cat) {
    setStatus("loading");
    searchVendors(q, cat)
      .then((data) => {
        setResults(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }

  function handleSearchSubmit(q) {
    setQuery(q);
    runSearch(q, initialCategory);
  }

  function handleOrder(vendor) {
    navigate(`/vendors/${vendor.id}`);
  }

  function handleClearFilters() {
    setQuery("");
    setStatus("loading");
    fetchVendors()
      .then((data) => {
        setResults(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }

  const hasResults = status === "ready" && results.length > 0;
  const isEmpty = status === "ready" && results.length === 0;

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
        </header>

        <SearchBar onSearch={handleSearchSubmit} initialQuery={initialQuery} />
      </div>

      {status === "loading" && (
        <p className={styles.stateMessage}>Searching…</p>
      )}

      {status === "error" && (
        <p className={styles.stateMessage}>
          Couldn't load results. Please try again.
        </p>
      )}

      {hasResults && (
        <>
          <p className={styles.sectionLabel}>
            Showing results for &ldquo;{query}&rdquo;
          </p>
          <div className={styles.grid} style={{ gridTemplateColumns: "1fr" }}>
            {results.map((vendor) => (
              <VendorCard
                key={vendor.id}
                vendor={vendor}
                onOrder={handleOrder}
              />
            ))}
          </div>
        </>
      )}

      {isEmpty && (
        <EmptySearchState
          onClearFilters={handleClearFilters}
          onBrowseAll={() => navigate("/vendors")}
        />
      )}
    </div>
  );
}
