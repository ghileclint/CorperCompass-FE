// src/features/explore/lodges/pages/LodgeSearchPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { fetchLodges, searchLodges } from "../../../../api/lodges.api";
import LodgeSearchRow from "../components/LodgeSearchRow";
import EmptySearchState from "../../vendors/components/EmptySearchState";
import styles from "./LodgeSearchPage.module.css";

export default function LodgeSearchPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [lodges, setLodges] = useState([]);
  const [status, setStatus] = useState("loading"); // "loading" | "ready" | "error"
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    fetchLodges()
      .then((data) => {
        setLodges(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  function handleQueryChange(value) {
    setQuery(value);
    setHasSearched(true);
    setStatus("loading");
    searchLodges(value)
      .then((data) => {
        setLodges(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }

  function handleSelectLodge(lodge) {
    navigate(`/lodges/${lodge.id}`);
  }

  const isEmpty = status === "ready" && lodges.length === 0;

  return (
    <div className={styles.page}>
      <div className={styles.searchBar}>
        <input
          type="text"
          autoFocus
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          placeholder="Search vendors, lodges, food..."
          className={styles.input}
        />
        <button
          type="button"
          onClick={() => navigate(-1)}
          className={styles.cancelButton}
        >
          Cancel
        </button>
      </div>

      {status === "loading" && <p className={styles.stateMessage}>Loading…</p>}

      {status === "ready" && !isEmpty && (
        <div className={styles.list}>
          {lodges.map((lodge) => (
            <LodgeSearchRow
              key={lodge.id}
              lodge={lodge}
              onSelect={handleSelectLodge}
            />
          ))}
        </div>
      )}

      {isEmpty && hasSearched && (
        <EmptySearchState
          entityLabel="Lodges"
          onClearFilters={() => handleQueryChange("")}
          onBrowseAll={() => navigate("/lodges")}
        />
      )}
    </div>
  );
}
