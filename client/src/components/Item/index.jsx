import React from 'react';
import styles from './styles.module.scss';

const Item = ({name, image}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="Item" className={styles.card__image}/>
      <span className={styles.card__text}>{name}</span>
    </div>
  )
}

export default Item;