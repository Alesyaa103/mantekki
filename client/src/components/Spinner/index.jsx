import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import styles from './styles.module.scss';

const Spinner = () => {
  return <div className={styles.container}>
    <LinearProgress/>
    <LinearProgress/>
    <LinearProgress/>
  </div>
};

export default Spinner;