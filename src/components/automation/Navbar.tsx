import { FunctionComponent } from "react";
import Avatar from "./Avatar";
import styles from "@styles/automation/Navbar.module.css";

export type NavbarType = {
  className?: string;
};

const Navbar: FunctionComponent<NavbarType> = ({ className = "" }) => {
  return (
    <header className={[styles.navbar, className].join(" ")}>
      <div className={styles.search}>
        <img
          className={styles.searchIcon}
          loading="lazy"
          alt=""
          src="/search.svg"
        />
        <div className={styles.searchLabel}>
          <div className={styles.buscarCtrlf}>Buscar (Ctrl+F)</div>
        </div>
      </div>
      <div className={styles.action}>
        <div className={styles.notification}>
          <img
            className={styles.bellIcon}
            loading="lazy"
            alt=""
            src="/bell.svg"
          />
          <div className={styles.dot}>
            <div className={styles.background} />
            <a className={styles.unreadCount}>4</a>
          </div>
        </div>
        <Avatar />
      </div>
    </header>
  );
};

export default Navbar;