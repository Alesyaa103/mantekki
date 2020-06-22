import React from 'react';
import Logo from '../Logo';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <ul>
        <li className={styles.footer__title}>For customers</li>
        <li><a className={styles.footer__link} href="##">About</a></li>
        <li><a className={styles.footer__link} href="##">Contacts</a></li>
        <li><a className={styles.footer__link} href="##">Shipping and returns</a></li>
      </ul>
      <ul>
        <li className={styles.footer__title}>Follow us</li>
        <li><a className={styles.footer__link} href="##">Facebook</a></li>
        <li><a className={styles.footer__link} href="##">Instagram</a></li>
      </ul>
      <ul>
        <li className={styles.footer__title}>In case you need additional information</li>
        <li className={styles.footer__title}>Please, contact us info@example.com</li>
      </ul>
    </footer>
  )
}

export default Footer;