import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './PhrasebookPage.module.css';
import PhraseRow from '../components/PhraseRow';
import TopNavIcons from '../components/TopNavIcons';
import { getPhrases, getPhraseCategories } from '../../../../api/culture.api';

/**
 * PhrasebookPage
 * Matches the "Phrasebook" Figma frame: back header, "Common Yoruba
 * phrases" title, full scrollable list of phrases.
 */
export default function PhrasebookPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const stateId = searchParams.get('state') || 'kogi';

  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [phrases, setPhrases] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    getPhraseCategories().then((cats) => {
      setCategories(cats);
      setActiveCategory(cats[0]?.id ?? null);
    });
  }, []);

  useEffect(() => {
    if (!activeCategory) return;
    setStatus('loading');
    getPhrases(stateId, activeCategory)
      .then((data) => {
        setPhrases(data);
        setStatus('success');
      })
      .catch(() => setStatus('error'));
  }, [stateId, activeCategory]);

  return (
    <div className={styles.screen}>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={() => navigate(-1)} aria-label="Go back" type="button">
          <BackIcon />
        </button>
        <h1 className={styles.title}>Phrasebook</h1>
      </header>

      <TopNavIcons />

      <div className={styles.body}>
        <div className={styles.categoryTabs}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`${styles.categoryTab} ${activeCategory === cat.id ? styles.categoryTabActive : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <h2 className={styles.sectionTitle}>Common Yoruba phrases</h2>

        {status === 'loading' && <p className={styles.stateMessage}>Loading phrases…</p>}
        {status === 'error' && <p className={styles.stateMessage}>Couldn't load phrases.</p>}
        {status === 'success' && phrases.length === 0 && (
          <p className={styles.stateMessage}>No phrases for this state yet.</p>
        )}

        {status === 'success' &&
          phrases.map((phrase) => <PhraseRow key={phrase.id} phrase={phrase} />)}
      </div>
    </div>
  );
}

function BackIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
