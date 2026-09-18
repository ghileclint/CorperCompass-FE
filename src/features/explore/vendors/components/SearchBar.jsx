// src/features/explore/vendors/components/SearchBar.jsx
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch, initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch?.(query);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FiSearch className={styles.icon} size={16} />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search vendors, lodges, food..."
        className={styles.input}
      />
    </form>
  );
}
