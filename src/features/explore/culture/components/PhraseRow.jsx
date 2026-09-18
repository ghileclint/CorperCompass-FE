import styles from './PhraseRow.module.css';

/**
 * PhraseRow
 * One phrase entry: phrase + translation + speaker icon.
 * Tapping the speaker uses the browser's built-in text-to-speech
 * (SpeechSynthesisUtterance) — this is a real, working interaction,
 * not decorative. It won't have native Yoruba pronunciation since
 * browsers don't ship that voice, but it does genuinely read the
 * phrase aloud.
 */
export default function PhraseRow({ phrase }) {
  const handlePlay = () => {
    if (!('speechSynthesis' in window)) return;
    const utterance = new SpeechSynthesisUtterance(phrase.phrase);
    window.speechSynthesis.cancel(); // stop any currently playing phrase
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className={styles.row}>
      <div>
        <p className={styles.phrase}>{phrase.phrase}</p>
        <p className={styles.translation}>{phrase.translation}</p>
      </div>
      <button
        type="button"
        className={styles.speakerButton}
        onClick={handlePlay}
        aria-label={`Play pronunciation for ${phrase.phrase}`}
      >
        <SpeakerIcon />
      </button>
    </div>
  );
}

function SpeakerIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M18.5 6a9 9 0 0 1 0 12" />
    </svg>
  );
}
