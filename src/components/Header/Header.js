import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css';
import classnames from "classnames";

function Header({changePage, pages, page}) {

  return (
    <div className={styles.header}>
        <Link to="/" className={classnames([styles.logo], {[styles.logo_active]: page === 'hero'})} onClick={changePage} >
          <div className={styles.block}>
          <code>dev</code>
          </div>
          <div className={styles.block}>
          </div>
          <span>KV</span>
        </Link>
          <nav className={styles.nav__list}>
              {pages.map(item => (
                <Link to={item}  onClick={changePage} className={classnames([styles.nav__link], {[styles.active]: page === item.slice(1)})}>{item.slice(1)}</Link>
              ))}
        </nav>
    </div>
  );
}

export default Header;