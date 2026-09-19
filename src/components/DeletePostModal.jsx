import { FiTrash2 } from "react-icons/fi";
import styles from "../css/deletePostModal.module.css";

export default function DeletePostModal({ onClose, onConfirm }) {
  return (
    <div className={styles.modalBackdrop}>
      <section
        className={`${styles.modal} ${styles.confirmModal}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-title"
      >
        <div className={styles.confirmIcon}><FiTrash2 /></div>
        <h2 id="delete-title">Delete Post?</h2>
        <p>Are you sure you want to stop editing? doing so will delete your post.</p>
        <div className={styles.confirmActions}>
          <button className={`${styles.textButton} ${styles.textButtonDanger}`} onClick={onConfirm}>
            Delete
          </button>
          <button className={`${styles.textButton} ${styles.textButtonPrimary}`} onClick={onClose}>
            Continue
          </button>
        </div>
      </section>
    </div>
  );
}
