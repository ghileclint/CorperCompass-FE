import styles from './CustomItem.module.css';

/**
 * CustomItem
 * A single custom/etiquette card. `variant` controls the color treatment
 * to match Figma: green for "do", red for "dont", orange for "info"
 * (used by both the intro card and the religious sensitivity card).
 *
 * @param {Object} props
 * @param {'do'|'dont'|'info'} props.variant
 * @param {string} props.title
 * @param {string} props.text
 */
export default function CustomItem({ variant, title, text }) {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <div className={styles.iconWrap}>
        <VariantIcon variant={variant} />
      </div>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}

function VariantIcon({ variant }) {
  if (variant === 'do') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    );
  }
  if (variant === 'dont') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    );
  }
  // info / religious sensitivity
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}
