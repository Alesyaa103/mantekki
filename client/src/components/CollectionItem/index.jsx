import React from 'react';
import styles from './styles.module.scss';

const CollectionItem = ({image, title}) => {
  return (
    <article className={styles.post}>
      <img src={image} alt={title} className={styles.image}/>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
    </article>
  )
}

export default CollectionItem
