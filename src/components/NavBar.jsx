import { NavLink } from "react-router-dom";
import styles from "../css/navbar.module.css";
import { FiHome } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { PiDeskBold } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { RiCommunityFill } from "react-icons/ri";

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <p className={styles.logo}>Logo</p>
      <nav className={styles.navbar}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "styles.active" : "")}
        >
          <FiHome className={styles.icon} />
          Dashboard
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "styles.active" : "")}
        >
          <MdOutlineExplore className={styles.icon} />
          Explore
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "styles.active" : "")}
        >
          <FaStore className={styles.icon} />
          Market
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "styles.active" : "")}
        >
          <BsFillPeopleFill className={styles.icon} />
          Social Feed
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "styles.active" : "")}
        >
          <RiCommunityFill className={styles.icon} />
          Community
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
