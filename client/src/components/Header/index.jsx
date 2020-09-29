import React from 'react';
import Logo from '../Logo';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { isAdmin } = useSelector(state => state.user);
  return (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Logo />
    </div>
    <ul className={styles.nav}>
      <li>
        <Link to="/wall-painting" className={styles.nav__item}>Wall painting</Link>
      </li>
      <li>
        <Link to="/digital-art" className={styles.nav__item}>Digital Art</Link>
      </li>
      <li>
        <Link to="/prints" className={styles.nav__item}>Prints</Link>
      </li>
      <li>
        <Link to="/canvas-painting" className={styles.nav__item}>Canvas painting</Link>
      </li>
      <li>
        <Link to="/watercolor" className={styles.nav__item}>Watercolor</Link>
      </li>
    </ul>
    {!isAdmin &&
    <>
      <ul className={styles.controls}>
        {/* <li className={styles.controls__item__search}><a href='###'>
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px">
              <path
                d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
              </svg>
          </a></li>
        <li>
          <a href='###' className={styles.controls__item}>Search</a>
        </li> */}
        <li>
          <Link to='/login' className={styles.controls__item}>Login</Link>
        </li>
      </ul>
    </>
    }
  </header>
  );
};

export default Header;