import React from 'react';
import Logo from '../Logo';
import styles from './styles.module.scss';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/userAction';

const Header = () => {
  const dispatch = useDispatch();
  const { isAdmin } = useSelector(state => state.user);
  const exit = () => {
    dispatch(logout());
    return <Redirect to="/"/>
  }
  return (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Logo />
    </div>
    <ul className={styles.nav}>
      <li>
        <Link to="/wallPainting" className={styles.nav__item}>Wall art</Link>
      </li>
      <li>
        <Link to="/digitalArt" className={styles.nav__item}>Digital Art</Link>
      </li>
      <li>
        <Link to="/prints" className={styles.nav__item}>Prints</Link>
      </li>
      <li>
        <Link to="/canvasPainting" className={styles.nav__item}>Canvas painting</Link>
      </li>
      <li>
        <Link to="/watercolor" className={styles.nav__item}>Watercolor</Link>
      </li>
    </ul>
    <div className={styles.controlBlock}>
    {!isAdmin ?
      <Link to='/login' className={styles.control}>Login</Link> : (
        <>
        <Link to='/admin' className={styles.control}>Admin</Link>
        <span className={styles.control} onClick={exit}>Logout</span>
        </>
      )
    }
    </div>
  </header>
  );
};

export default Header;