import { FiCopy, FiSend, FiExternalLink } from "react-icons/fi";
import styles from "../css/shareMenu.module.css";

export default function ShareMenu({ post, onClose }) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/post/${post.id}`);
    } catch {
      // Clipboard access can be denied by the browser; fail silently.
    }
    onClose();
  };

  return (
    <div className={styles.shareMenu}>
      <button onClick={copy}><FiCopy /> Copy link</button>
      <button onClick={onClose}><FiSend /> Share to feed</button>
      <button onClick={() => { navigator.share?.({ title: post.user.name, text: post.content }); onClose(); }}>
        <FiExternalLink /> Share externally
      </button>
    </div>
  );
}
