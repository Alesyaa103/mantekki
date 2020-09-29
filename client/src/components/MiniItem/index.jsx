import React from 'react';
import styles from './styles.module.scss';
import { Button } from '@material-ui/core';
const MiniItem = ({items, handleChangeEdit}) => {
  return (
    <div className={styles.list}>
      {items.map(item => {
        return <div className={styles.item} key={item._id}>
          {item.image ? (
            <img src={item.image} className={styles.item__image} alt=""/>
          ) : (
            <div className={styles.item__default}></div>
          )}
          
          <Button
            variant="contained"
            color="primary"
            className={styles.item__editButon}
            onClick={() => handleChangeEdit(item)}
          >Edit</Button>
        </div>
      })}
    </div>
  )
}

export default MiniItem
