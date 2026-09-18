// src/features/explore/vendors/components/ShareModal.jsx
import { useState } from "react";
import { FiX, FiLink, FiMail, FiMoreHorizontal, FiMessageCircle, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./ShareModal.module.css";

export default function ShareModal({ vendorName, onCancel, onSelect }) {
  const [copied, setCopied] = useState(false);

  const shareUrl = window.location.href;
  const shareText = `Check out ${vendorName} on CorperCompass`;

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Clipboard API can fail (e.g. insecure context) — fall back to a
      // visible alert so the action still does something useful.
      window.prompt("Copy this link:", shareUrl);
    }
    onSelect?.();
  }

  function handleWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    onSelect?.();
  }

  function handleEmail() {
    const subject = encodeURIComponent(shareText);
    const body = encodeURIComponent(`${shareText}\n\n${shareUrl}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    onSelect?.();
  }

  async function handleMoreOptions() {
    // Real native share sheet where supported (most mobile browsers).
    if (navigator.share) {
      try {
        await navigator.share({ title: shareText, text: shareText, url: shareUrl });
      } catch (err) {
        // User cancelled the native share sheet — not an error, do nothing.
      }
    } else {
      // Desktop browsers without Web Share API — fall back to copy.
      handleCopyLink();
      return;
    }
    onSelect?.();
  }

  function handleShareToChat() {
    // TODO(backend): there is no in-app chat/feed endpoint yet. Until
    // that exists, this is honestly disabled rather than faking success.
    window.alert(
      "In-app sharing to other corpers isn't connected yet — this will post to the community feed once that feature's API is ready."
    );
  }

  return (
    <div className={styles.overlay} onClick={onCancel}>
      <div className={styles.sheet} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Share {vendorName}</h2>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onCancel}
            aria-label="Close"
          >
            <FiX size={18} />
          </button>
        </div>

        <div className={styles.optionsRow}>
          <button type="button" className={styles.option} onClick={handleCopyLink}>
            <span className={styles.iconCircle}>
              {copied ? <FiCheck size={18} color="#14532d" /> : <FiLink size={18} />}
            </span>
            <span className={styles.optionLabel}>{copied ? "Copied!" : "Copy link"}</span>
          </button>

          <button type="button" className={styles.option} onClick={handleWhatsApp}>
            <span className={styles.iconCircle}>
              <FaWhatsapp size={18} color="#25D366" />
            </span>
            <span className={styles.optionLabel}>WhatsApp</span>
          </button>

          <button type="button" className={styles.option} onClick={handleEmail}>
            <span className={styles.iconCircle}>
              <FiMail size={18} />
            </span>
            <span className={styles.optionLabel}>Email</span>
          </button>

          <button type="button" className={styles.option} onClick={handleMoreOptions}>
            <span className={styles.iconCircle}>
              <FiMoreHorizontal size={18} />
            </span>
            <span className={styles.optionLabel}>More options</span>
          </button>
        </div>

        <button type="button" className={styles.chatRow} onClick={handleShareToChat}>
          <FiMessageCircle size={18} className={styles.chatIcon} />
          <span className={styles.chatText}>
            <span className={styles.chatTitle}>Share to chat</span>
            <span className={styles.chatSubtitle}>Let other Corpers find this vendor</span>
          </span>
        </button>

        <button type="button" className={styles.cancelButton} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
