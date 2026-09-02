import { NavLink } from "react-router-dom";
import styles from "../css/navbar.module.css";
import { FiHome } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { PiDeskBold } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { RiCommunityFill } from "react-icons/ri";
import {FiCreditCard} from "react-icons/fi";

import logo from "../logo-img/logo.png";

const NavBar = () => {
  return (
    <div className={styles.navContainer}>

      {/* ------logo ---------- */}

      <div className={styles.logoContainer}>
      <img src={logo} alt="Corper Compass Logo" className={styles.logoImage} />
      <div className={styles.logoText}> <strong>Corper Compass</strong>
      <span>Your service-year companion</span>
      </div>
      </div>


      {/* -----navigation-------- */}



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

      {/* -----user------ */}
      <div className={styles.userArea}>
         <div className={styles.notification}>
      <svg
           width="20"
           height="20"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
        <path
      d="M18 8C18 5.79 16.21 4 14 4H10C7.79 4 6 5.79 6 8V12.5C6 
      14.43 5.37 16.31 4.2 17.84L3 19.4H21L19.8 17.84C18.63 16.31 18 
      14.43 18 12.5V8Z"

      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
        />

        <path
        d="M10 21H14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
         />
      </svg>

          <span className={styles.notificationDot}>

          </span>
          </div>
        <div className={styles.avatar}>
          AO
        </div>

        <div className={styles.userText}>
          <strong>
            Angela Okorie
          </strong>
          <span>
            NYSC Member, Oyo State
          </span>

        </div>

        



      </div>





    </div>
  );
};

export default NavBar;
