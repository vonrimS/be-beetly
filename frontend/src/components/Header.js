import React from 'react';
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header1}>
      <h1 className={styles.logo}>be.beetly</h1>
      {/* <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav> */}
    </header>

  );
}

export default Header;
