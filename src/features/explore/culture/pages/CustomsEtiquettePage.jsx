import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './CustomsEtiquettePage.module.css';
import CustomItem from '../components/CustomItem';
import { getCustoms } from '../../../../api/culture.api';

/**
 * CustomsEtiquettePage
 * Matches the "Customs & Etiquette" Figma frame: intro card, Dos
 * section, Don'ts section, Religious sensitivity card.
 */
export default function CustomsEtiquettePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const stateId = searchParams.get('state') || 'kogi';

  const [customs, setCustoms] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    setStatus('loading');
    getCustoms(stateId)
      .then((data) => {
        setCustoms(data);
        setStatus('success');
      })
      .catch(() => setStatus('error'));
  }, [stateId]);

  return (
    <div className={styles.screen}>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={() => navigate(-1)} aria-label="Go back" type="button">
          <BackIcon />
        </button>
        <h1 className={styles.title}>Customs &amp; Etiquette</h1>
      </header>

      <div className={styles.body}>
        {status === 'loading' && <p className={styles.stateMessage}>Loading…</p>}
        {status === 'error' && <p className={styles.stateMessage}>Couldn't load customs content.</p>}

        {status === 'success' && customs && (
          <>
            <CustomItem variant="info" title={customs.intro.title} text={customs.intro.text} />

            <h2 className={styles.sectionTitle}>
              <CheckIcon /> Dos
            </h2>
            {customs.dos.map((item) => (
              <CustomItem key={item.id} variant="do" title={item.title} text={item.text} />
            ))}

            <h2 className={styles.sectionTitle}>
              <CrossIcon /> Don't
            </h2>
            {customs.donts.map((item) => (
              <CustomItem key={item.id} variant="dont" title={item.title} text={item.text} />
            ))}

            <CustomItem
              variant="info"
              title={customs.religiousSensitivity.title}
              text={customs.religiousSensitivity.text}
            />
          </>
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

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
