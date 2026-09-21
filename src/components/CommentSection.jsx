import { useState } from "react";
import { FiSend, FiHeart, FiCornerUpLeft, FiX, FiChevronDown } from "react-icons/fi";
import styles from "../css/commentSection.module.css";

export default function CommentSection({ comments, onAdd }) {
  const [text, setText] = useState("");
  const [replyTo, setReplyTo] = useState(null);

  const submit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text, replyTo);
    setText("");
    setReplyTo(null);
  };

  return (
    <section className={styles.comments}>
      <div className={styles.commentsHeading}>
        <strong>Comments ({comments.length})</strong>
        <button type="button" className={styles.commentsSort}>
          Newest <FiChevronDown />
        </button>
      </div>

      {comments.length > 0 && (
        <div className={styles.commentList}>
          {comments.map(comment => (
            <div className={styles.comment} key={comment.id}>
              <div className={styles.commentAvatar}>
                {comment.avatar ? <img src={comment.avatar} alt="" /> : comment.name.slice(0, 1)}
              </div>
              <div className={styles.commentBody}>
                <div className={styles.commentTop}>
                  <strong>
                    {comment.name}
                    <span className={styles.commentTime}>{comment.timestamp || "just now"}</span>
                  </strong>
                  <span className={styles.commentLikes}>
                    {comment.likes ?? 0} <FiHeart />
                  </span>
                </div>
                <p>{comment.text}</p>
                <button
                  type="button"
                  className={styles.commentReply}
                  onClick={() => setReplyTo(comment)}
                >
                  <FiCornerUpLeft /> Reply
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {replyTo && (
        <div className={styles.replyBar}>
          <div className={styles.commentAvatar}>
            {replyTo.avatar ? <img src={replyTo.avatar} alt="" /> : replyTo.name.slice(0, 1)}
          </div>
          <div className={styles.replyBarInfo}>
            <div className={styles.replyBarLabel}>REPLYING TO</div>
            <div className={styles.replyBarName}>@{replyTo.name.replace(/\s+/g, "_")}</div>
          </div>
          <button
            type="button"
            className={styles.replyBarClose}
            onClick={() => setReplyTo(null)}
            aria-label="Cancel reply"
          >
            <FiX />
          </button>
        </div>
      )}

      <form className={styles.commentForm} onSubmit={submit}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Write a comment..."
          aria-label="Write a comment"
        />
        <button disabled={!text.trim()} aria-label="Send comment"><FiSend /></button>
      </form>
    </section>
  );
}
