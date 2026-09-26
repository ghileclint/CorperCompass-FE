import { useEffect, useRef, useState } from "react";
import { FiImage, FiX, FiPlus } from "react-icons/fi";
import styles from "./css/editPostModal.module.css";
import AudienceDropdown from "./AudienceDropdown";

const MAX_IMAGES = 3;

function toImageList(image) {
  if (!image) return [];
  return Array.isArray(image) ? image.filter(Boolean) : [image];
}

export default function EditPostModal({ post, onClose, onSave, onRequestDelete }) {
  const [audience, setAudience] = useState(post.audience || "Everyone");
  const [content, setContent] = useState(post.content);
  const [images, setImages] = useState(() => toImageList(post.image));
  const inputRef = useRef(null);

  const newObjectUrls = useRef(new Set());

  useEffect(() => () => {
    newObjectUrls.current.forEach(url => URL.revokeObjectURL(url));
  }, []);

  const selectImages = e => {
    const files = Array.from(e.target.files || []).filter(file => file.type.startsWith("image/"));
    if (!files.length) return;

    const room = MAX_IMAGES - images.length;
    if (room <= 0) return;

    const accepted = files.filter(file => file.size <= 8 * 1024 * 1024).slice(0, room);
    const urls = accepted.map(file => {
      const url = URL.createObjectURL(file);
      newObjectUrls.current.add(url);
      return url;
    });
    setImages(prev => [...prev, ...urls]);
    e.target.value = "";
  };

  const removeImage = index => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const hasChanges =
    content.trim() !== (post.content || "").trim() ||
    audience !== (post.audience || "Everyone") ||
    JSON.stringify(images) !== JSON.stringify(toImageList(post.image));

  const canSave = content.trim().length > 0 || images.length > 0;

  const requestClose = () => {
    if (hasChanges) {
      onRequestDelete();
    } else {
      onClose();
    }
  };

  const save = () => {
    if (!canSave) return;
    onSave({ audience, content: content.trim(), image: images });
  };

  return (
    <div className={styles.modalBackdrop}>
      <section className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="edit-title">
        <div className={styles.modalHead}>
          <h2 id="edit-title">Make a post</h2>
          <div className={styles.modalHeadActions}>
            <button className={styles.publishButton} disabled={!canSave} onClick={save}>
              Post
            </button>
            <button className={styles.modalClose} onClick={requestClose} aria-label="Close">
              <FiX />
            </button>
          </div>
        </div>

        <div className={styles.composerUser}>
          <img src={post.user.avatar} className={styles.smallAvatar} alt="" />
          <AudienceDropdown value={audience} onChange={setAudience} />
        </div>

        <textarea
          value={content}
          onChange={e => setContent(e.target.value.slice(0, 1000))}
          maxLength={1000}
        />

        {images.length > 0 && (
          <div className={styles.uploadPreviewList}>
            {images.map((src, index) => (
              <div className={styles.uploadPreview} key={src + index}>
                <img src={src} alt="Post attachment preview" />
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
