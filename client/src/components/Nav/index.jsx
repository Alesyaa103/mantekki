import React from 'react';
import styles from './styles.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li>Sir</li>
        <li><a href='###' className={styles.menu__item}><span>Watercolor</span><span>painting</span></a></li>
        <li><a href='###' className={styles.menu__item}>Prints</a></li>
        <li><a href='###' className={styles.menu__item}><span>Canvas</span><span>painting</span></a></li>
        <li><a href='###' className={styles.menu__item}><span>Wall</span><span>painting</span></a></li>
      </ul>
    </nav>
  );
};

export default Nav;