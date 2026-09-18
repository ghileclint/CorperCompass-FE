import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CultureGuidePage.module.css';
import StateSelector from '../components/StateSelector';
import WelcomeBanner from '../components/WelcomeBanner';
import PhraseRow from '../components/PhraseRow';
import CustomItem from '../components/CustomItem';
import TopNavIcons from '../components/TopNavIcons';
import { getStates, getPhrases, getCustoms } from '../../../../api/culture.api';

const TABS = [
  { id: 'phrasebook', label: 'Phrasebook' },
  { id: 'customs', label: 'Customs & Etiquette'   },
];

/**
 * CultureGuidePage
 * Matches the "Cultural Guide" Figma dashboard frame: state selector,
 * welcome banner, tab switcher, and a short preview of whichever tab
 * is active, with a link through to the full page.
 */
export default function CultureGuidePage({ onBack }) {
  const navigate = useNavigate();
  const [states, setStates] = useState([]);
  const [selectedStateId, setSelectedStateId] = useState(null);
  const [activeTab, setActiveTab] = useState('phrasebook');
  const [phrases, setPhrases] = useState([]);
  const [customs, setCustoms] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    getStates().then((data) => {
      setStates(data);
      setSelectedStateId(data[0]?.id);
    });
  }, []);

  useEffect(() => {
    if (!selectedStateId) return;
    setStatus('loading');
    Promise.all([getPhrases(selectedStateId), getCustoms(selectedStateId).catch(() => null)])
      .then(([phraseData, customsData]) => {
        setPhrases(phraseData);
        setCustoms(customsData);
        setStatus('success');
      })
      .catch(() => setStatus('error'));
  }, [selectedStateId]);

  const currentState = states.find((s) => s.id === selectedStateId);

  return (
    <div className={styles.screen}>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={onBack ?? (() => navigate(-1))} aria-label="Go back" type="button">
          <BackIcon />
        </button>
        <h1 className={styles.title}>Cultural Guide</h1>
      </header>

      {/*
        This icon row appears on Phrasebook and both Cultural Guide states
        in Figma, but NOT on Customs & Etiquette — replicated exactly as
        shown. If your app already has a shared/global nav bar used
        elsewhere, use that instead to avoid two different nav bars.
      */}
      <TopNavIcons />

      <div className={styles.body}>
        {states.length > 0 && (
          <StateSelector states={states} selectedStateId={selectedStateId} onChange={setSelectedStateId} />
        )}

      {currentState && <WelcomeBanner title={currentState.welcomeTitle} text={currentState.welcomeText} />}

      <div className={styles.tabs}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {status === 'loading' && <p className={styles.stateMessage}>Loading…</p>}
      {status === 'error' && <p className={styles.stateMessage}>Couldn't load content for this state yet.</p>}

      {status === 'success' && activeTab === 'phrasebook' && (
        <section>
          <h3 className={styles.sectionTitle}>Common Yoruba phrases</h3>
          {phrases.slice(0, 4).map((phrase) => (
            <PhraseRow key={phrase.id} phrase={phrase} />
          ))}
          {phrases.length > 0 && (
            <button
              type="button"
              className={styles.seeAllLink}
              onClick={() => navigate(`/culture/phrasebook?state=${selectedStateId}`)}
            >
              See all phrases →
            </button>
          )}
        </section>
      )}

      {status === 'success' && activeTab === 'customs' && customs && (
        <section>
          <h3 className={styles.sectionTitle}>Dos</h3>
          {customs.dos.slice(0, 3).map((item) => (
            <CustomItem key={item.id} variant="do" title={item.title} text={item.text} />
          ))}
          <button
            type="button"
            className={styles.seeAllLink}
            onClick={() => navigate(`/culture/customs?state=${selectedStateId}`)}
          >
            See More →
          </button>
        </section>
      )}

        {status === 'success' && activeTab === 'customs' && !customs && (
          <p className={styles.stateMessage}>No customs content for this state yet.</p>
        )}
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
