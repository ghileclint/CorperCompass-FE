import { useState, useRef, useEffect } from 'react';
import styles from './StateSelector.module.css';

/**
 * StateSelector
 * The "📍 Kogi State ▾" dropdown at the top of the Cultural Guide.
 *
 * @param {Object} props
 * @param {Array<{id:string,name:string}>} props.states
 * @param {string} props.selectedStateId
 * @param {(stateId: string) => void} props.onChange
 */
export default function StateSelector({ states, selectedStateId, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapRef = useRef(null);
  const selected = states.find((s) => s.id === selectedStateId);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setIsOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <button type="button" className={styles.trigger} onClick={() => setIsOpen((v) => !v)}>
        <PinIcon />
        <span>{selected?.name}</span>
        <ChevronIcon flipped={isOpen} />
      </button>
      {isOpen && (
        <ul className={styles.menu} role="listbox">
          {states.map((state) => (
            <li key={state.id}>
              <button
                type="button"
                className={styles.menuItem}
                onClick={() => {
                  onChange(state.id);
                  setIsOpen(false);
                }}
              >
                {state.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ChevronIcon({ flipped }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ transform: flipped ? 'rotate(180deg)' : 'none' }}
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
