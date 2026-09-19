import { NavLink } from "react-router-dom";
import { FiHome, FiCompass, FiShoppingBag, FiMap, FiMail } from "react-icons/fi";
import styles from "../css/navbar.module.css";

const NAV_LINKS = [
  { to: "/", label: "Home", icon: FiHome, end: true },
  { to: "/explore", label: "Explore", icon: FiCompass },
  { to: "/market", label: "Market", icon: FiShoppingBag },
  { to: "/journey", label: "Journey", icon: FiMap },
  { to: "/inbox", label: "Inbox", icon: FiMail }
];

const NavBar = () => {
  return (
    <nav className={styles.navContainer} aria-label="Primary">
      {NAV_LINKS.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <Icon className={styles.icon} aria-hidden="true" />
          <span className={styles.label}>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
