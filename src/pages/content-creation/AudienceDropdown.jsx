import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import styles from "./css/audienceDropdown.module.css";

const OPTIONS = ["Everyone", "Followers", "Only Me"];

export default function AudienceDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.audienceDropdown}>
      <button
        type="button"
        className={styles.audiencePill}
        onClick={() => setOpen(v => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {value} <FiChevronDown />
      </button>

      {open && (
        <div className={styles.audienceMenu} role="listbox">
          {OPTIONS.map(option => (
            <button
              type="button"
              key={option}
              role="option"
              aria-selected={option === value}
              className={option === value ? styles.audienceMenuActive : ""}
              onClick={() => { onChange(option); setOpen(false); }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
