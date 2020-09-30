import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">MANTEKKI</Link>
    </div>
  )
}

export default Logo;