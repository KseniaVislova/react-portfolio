import React from "react";
import styles from './Header.module.css';
import classnames from "classnames";

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.block}>
          <code>dev</code>
          </div>
          <div className={styles.block}>
          </div>
          <span>KV</span>
        </div>
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li><a href="#contacts" className={classnames([styles.nav__link, styles.active])}>Contacts</a></li>
              <li><a href="#summary" className={styles.nav__link}>Summary</a></li>
              <li><a href="#skills" className={styles.nav__link}>Skills</a></li>
              <li><a href="#code" className={styles.nav__link}>Code</a></li>
              <li><a href="#experience" className={styles.nav__link}>Experience</a></li>
              <li><a href="#projects" className={styles.nav__link}>Projects</a></li>
              <li><a href="#education" className={styles.nav__link}>Education</a></li>
              <li><a href="#language" className={styles.nav__link}>Language</a></li>
            </ul>
        </nav>
    </div>
  );
}

export default Header;