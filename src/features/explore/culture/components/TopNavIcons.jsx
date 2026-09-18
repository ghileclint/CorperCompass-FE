import { useNavigate } from 'react-router-dom';
import styles from './TopNavIcons.module.css';

/**
 * Only 'home' and 'book' point to pages that actually exist in the app
 * right now. The other three go blank because /search, /calendar, and
 * /messages haven't been built by anyone yet — that's a missing page,
 * not a broken icon. Update this object once those pages exist.
 */
const ROUTES = {
  home: '/',
  book: '/culture',
};

export default function TopNavIcons() {
  const navigate = useNavigate();

  const icons = [
    { id: 'home', Icon: HomeIcon, label: 'Home' },
    { id: 'search', Icon: SearchIcon, label: 'Search' },
    { id: 'calendar', Icon: CalendarIcon, label: 'Calendar' },
    { id: 'book', Icon: BookIcon, label: 'Guide' },
    { id: 'mail', Icon: MailIcon, label: 'Messages' },
  ];

  const handleClick = (id) => {
    if (ROUTES[id]) {
      navigate(ROUTES[id]);
    } else {
      alert('This page is not built yet.');
    }
  };

  return (
    <div className={styles.row}>
      {icons.map(({ id, Icon, label }) => (
        <button key={id} type="button" className={styles.iconButton} aria-label={label} onClick={() => handleClick(id)}>
          <Icon />
        </button>
      ))}
    </div>
  );
}

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}