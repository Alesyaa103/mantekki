import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const Item = ({name, image, collect}) => {
  return (
      <Link to={`/${collect}`} className={styles.card}>
        <img src={image} alt="Item" className={styles.card__image}/>
        <span className={styles.card__text}>{name}</span>
      </Link>
  )
}

export default Item;