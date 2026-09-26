import { useEffect, useRef, useState } from "react";
import { FiImage, FiX, FiPlus } from "react-icons/fi";
import styles from "./css/createPost.module.css";
import AudienceDropdown from "./AudienceDropdown";

const CURRENT_USER = {
  id: "current-user",
  name: "Myles",
  avatar: "https://i.pravatar.cc/160?img=12",
  verified: true,
  vendor: true
};

const MAX_IMAGES = 3;

export default function CreatePost({ onClose, onCreate }) {
  const [audience, setAudience] = useState("Everyone");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => () => images.forEach(img => URL.revokeObjectURL(img.preview)), [images]);

  const selectImages = e => {
    const files = Array.from(e.target.files || []).filter(file => file.type.startsWith("image/"));
    if (!files.length) return;

    const room = MAX_IMAGES - images.length;
    if (room <= 0) return;

    const oversized = files.some(file => file.size > 8 * 1024 * 1024);
    if (oversized) {
      alert("Each image must be smaller than 8MB.");
    }

    const accepted = files.filter(file => file.size <= 8 * 1024 * 1024).slice(0, room);
    setImages(prev => [...prev, ...accepted.map(file => ({ file, preview: URL.createObjectURL(file) }))]);
    e.target.value = "";
  };

  const removeImage = index => {
    setImages(prev => {
      const target = prev[index];
      if (target) URL.revokeObjectURL(target.preview);
      return prev.filter((_, i) => i !== index);
    });
  };

  const canPost = content.trim().length > 0 || images.length > 0;

  const publish = () => {
    if (!canPost) return;
    onCreate({
      id: crypto.randomUUID(),
      user: CURRENT_USER,
      audience,
      content: content.trim(),
      image: images.map(img => img.preview),
      createdAt: "now",
      likes: 0,
      comments: [],
      shares: 0,
      liked: false,
      saved: false,
      owner: true
    });
    onClose();
  };

  return (
    <div className={styles.modalBackdrop}>
      <section className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="create-title">
        <div className={styles.modalHead}>
          <h2 id="create-title">Make a post</h2>
          <div className={styles.modalHeadActions}>
            <button className={styles.publishButton} disabled={!canPost} onClick={publish}>
              Post
            </button>
            <button className={styles.modalClose} onClick={onClose} aria-label="Close">
              <FiX />
            </button>
          </div>
        </div>

        <div className={styles.composerUser}>
          <img src={CURRENT_USER.avatar} className={styles.smallAvatar} alt="" />
          <AudienceDropdown value={audience} onChange={setAudience} />
        </div>

        <textarea
          autoFocus
          value={content}
          onChange={e => setContent(e.target.value.slice(0, 1000))}
          placeholder="What's on your mind?"
          maxLength={1000}
        />

        {images.length > 0 && (
          <div className={styles.uploadPreviewList}>
            {images.map((img, index) => (
              <div className={styles.uploadPreview} key={img.preview}>
                <img src={img.preview} alt="Selected preview" />
                <button onClick={() => removeImage(index)} aria-label="Remove image"><FiX /></button>
              </div>
            ))}
          </div>
        )}

        <div className={styles.composerFooter}>
          <button
            className={styles.attachButton}
            onClick={() => inputRef.current?.click()}
            disabled={images.length >= MAX_IMAGES}
          >
            <FiImage /> Add image
          </button>
          <span className={styles.counter}>{content.length}/1000</span>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={selectImages}
          />
          <button className={styles.attachButton} type="button" aria-label="More options">
            <FiPlus />
          </button>
        </div>
      </section>
    </div>
  );
}
