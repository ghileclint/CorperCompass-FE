import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiMoreHorizontal, FiHeart, FiMessageCircle, FiShare2, FiEdit3,
  FiTrash2, FiFlag, FiBookmark, FiCheckCircle
} from "react-icons/fi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import styles from "./css/postCard.module.css";
import EditPostModal from "./EditPostModal";
import DeletePostModal from "./DeletePostModal";
import CommentSection from "./CommentSection";
import ShareMenu from "./ShareMenu";

const CURRENT_USER_NAME = "Myles";

function toImageList(image) {
  if (!image) return [];
  return Array.isArray(image) ? image.filter(Boolean) : [image];
}

export default function PostCard({ post, api }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [liked, setLiked] = useState(post.liked);
  const [likeCount, setLikeCount] = useState(post.likes);

  const saved = Boolean(post.saved);
  const images = toImageList(post.image);

  const toggleLike = () => {
    setLiked(value => !value);
    setLikeCount(value => value + (liked ? -1 : 1));
  };

  const toggleSave = () => {
    api.updatePost(post.id, { saved: !saved });
  };

  const addComment = (text, replyTo) => {
    if (!text.trim()) return;
    const comments = [
      ...post.comments,
      {
        id: crypto.randomUUID(),
        name: CURRENT_USER_NAME,
        text: replyTo ? `@${replyTo.name.replace(/\s+/g, "_")} ${text.trim()}` : text.trim(),
        timestamp: "just now",
        likes: 0,
        replyTo: replyTo?.id ?? null
      }
    ];
    api.updatePost(post.id, { comments });
  };

  const openDetail = e => {
    // Ignore taps on buttons/links/inputs and inside the inline comment panel or
    // any open menu/dropdown so only the post itself navigates to Post Detail.
    if (e.target.closest("button, a, input, textarea, [data-no-navigate]")) return;
    navigate(`/post/${post.id}`);
  };

  return (
    <article
      className={`${styles.postCard} ${styles.postCardTappable}`}
      onClick={openDetail}
    >
      <div className={styles.postHeader}>
        <div className={styles.avatarWrap}>
          <img className={styles.avatar} src={post.user.avatar} alt="" />
          {post.user.verified && <FiCheckCircle className={styles.avatarVerified} aria-label="Verified" />}
        </div>

        <div className={styles.author}>
          <div className={styles.authorLine}>
            <strong>{post.user.name}</strong>
            {post.user.verified && (
              <FiCheckCircle className={styles.verifiedBadge} aria-label="Verified" />
            )}
            {post.user.vendor && (
              <HiOutlineBuildingStorefront className={styles.vendorBadge} aria-label="Vendor" />
            )}
          </div>
        </div>

        <span className={styles.postTime}>·{post.createdAt}</span>

        <div className={styles.postHeaderActions}>
          <button
            className={`${styles.bookmarkButton} ${saved ? styles.bookmarkButtonSaved : ""}`}
            onClick={toggleSave}
            aria-label={saved ? "Remove from saved posts" : "Save post"}
          >
            <FiBookmark style={saved ? { fill: "currentColor" } : undefined} />
          </button>

          <div className={styles.postMenuWrap} data-no-navigate>
            <button
              className={styles.moreButton}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Post menu"
            >
              <FiMoreHorizontal />
            </button>

            {menuOpen && (
              <div className={styles.postMenu}>
                {post.owner ? (
                  <>
                    <button onClick={() => { setEditOpen(true); setMenuOpen(false); }}>
                      <FiEdit3 /> Edit
                    </button>
                    <button className={styles.postMenuDanger} onClick={() => { setDeleteOpen(true); setMenuOpen(false); }}>
                      <FiTrash2 /> Delete
                    </button>
                  </>
                ) : (
                  <button onClick={() => setMenuOpen(false)}>
                    <FiFlag /> Report
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.postBody}>
        <p>{post.content}</p>
        {images.length > 0 && (
          <div
            className={styles.postImageGrid}
            style={{ gridTemplateColumns: `repeat(${Math.min(images.length, 3)}, 1fr)` }}
          >
            {images.slice(0, 3).map((src, index) => (
              <img key={index} className={styles.postImage} src={src} alt="Post attachment" />
            ))}
          </div>
        )}
      </div>

      <div className={styles.postActions}>
        <button className={`${styles.actionButton} ${liked ? styles.actionButtonLiked : ""}`} onClick={toggleLike}>
          <FiHeart className={liked ? styles.heartFilled : ""} />
          <span>{likeCount}</span>
        </button>

        <button
          className={styles.actionButton}
          onClick={() => setCommentsOpen(v => !v)}
        >
          <FiMessageCircle />
          <span>{post.comments.length}</span>
        </button>

        <div className={styles.shareWrap} data-no-navigate>
          <button className={styles.actionButton} onClick={() => setShareOpen(v => !v)}>
            <FiShare2 />
            <span>{post.shares}</span>
          </button>
          {shareOpen && <ShareMenu post={post} onClose={() => setShareOpen(false)} />}
        </div>
      </div>

      {commentsOpen && (
        <div data-no-navigate>
          <CommentSection
            comments={post.comments}
            onAdd={addComment}
          />
        </div>
      )}

      {editOpen && (
        <EditPostModal
          post={post}
          onClose={() => setEditOpen(false)}
          onRequestDelete={() => setDeleteOpen(true)}
          onSave={changes => {
            api.updatePost(post.id, changes);
            setEditOpen(false);
          }}
        />
      )}

      {deleteOpen && (
        <DeletePostModal
          onClose={() => setDeleteOpen(false)}
          onConfirm={() => {
            api.deletePost(post.id);
            setDeleteOpen(false);
            setEditOpen(false);
          }}
        />
      )}
    </article>
  );
}
