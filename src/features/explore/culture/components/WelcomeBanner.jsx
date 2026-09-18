import styles from './WelcomeBanner.module.css';

/**
 * WelcomeBanner
 * The green "Welcome to [State]" card at the top of the Cultural Guide
 * dashboard.
 *
 * ⚠️ ABOUT THE WATERMARK GRAPHIC:
 * Figma shows a circular decorative icon/badge on the right side of this
 * card. I can't extract the exact vector art from a screenshot — what's
 * below is a placeholder circular motif (CSS-only) positioned in the same
 * spot, so the layout and proportions match, but it is NOT the real asset.
 *
 * To get pixel-perfect: open the frame in Figma, select that icon, and
 * either (a) right-click → Copy as SVG and paste it in place of
 * <WatermarkPlaceholder />, or (b) export it as a PNG and drop it in
 * src/assets/, then swap the placeholder for an <img> tag. Either way,
 * nothing else in this file needs to change.
 */
export default function WelcomeBanner({ title, text }) {
  return (
    <div className={styles.banner}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
      <WatermarkPlaceholder />
    </div>
  );
}

function WatermarkPlaceholder() {
  return (
    <div className={styles.watermark} aria-hidden="true">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 0 20" />
        <path d="M12 2a15.3 15.3 0 0 0 0 20" />
        <path d="M2 12h20" />
      </svg>
    </div>
  );
}
