import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { Button, TextField, Typography} from '@material-ui/core';
import styles from './styles.module.scss';
import {useDispatch, useSelector } from 'react-redux';
import {login} from '../../actions/userAction';

const Login = () => {
  const dispatch = useDispatch();
  const { isAdmin } = useSelector(state => state.user);

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };
  return (
    <>
    {isAdmin ? <Redirect to="/admin" /> : (
    <form noValidate onSubmit={submitForm}>
      <Typography component="h1" className={styles.title} variant="h5">
        Sign in
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        value={formData.username}
        onChange={changeHandler}
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        value={formData.password}
        onChange={changeHandler}
        autoComplete="current-password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Sign In
      </Button>
    </form>)}
    </>
  )
}

export default Login;