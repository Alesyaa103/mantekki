import React from 'react';
import Login from '../../components/Login';
import { Container, CssBaseline, Typography } from '@material-ui/core';
import styles from './styles.module.scss';


const Auth = () => {
  return (
    <Container component="section" className={styles.container} maxWidth="sm">
      <CssBaseline />
      <article>
        <Typography component="h2" className={styles.warning} variant="h6">
          Sorry, at this time only admin has personal cabinet
        </Typography>
        <Login/>
      </article>
    </Container>
  )
}

export default Auth