import axios from 'axios';
import {LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from '../actions/types';
import { NotificationManager } from 'react-notifications';

export const login = data => async dispatch => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/user/login`, data);
    dispatch({type: LOGIN_SUCCESS, payload: res.data});
    localStorage.setItem('token', res.data.token);
  } catch (error) {
    dispatch({type: LOGIN_FAIL, error: error.message});
    localStorage.setItem('token', '');
    NotificationManager.error('Something went wrong', 'Error', 4000);
  }
}

export const logout = () => async dispatch => {
  dispatch({type: LOGOUT});
  localStorage.setItem('token', '');
}

export const loadLoggedUser = () => async dispatch => {
  try {
    const token = localStorage.getItem('token');
    console.log(token)
    const headers = {};
    headers.Authorization = `Bearer ${token}`;
    headers['Content-Type'] = 'application/json';
    headers.Accept = 'application/json';
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/user/auth`, {headers});
    dispatch({type: LOGIN_SUCCESS, payload: res.data});
  } catch (error) {
    dispatch({type: LOGIN_FAIL, error: error.message});
    localStorage.setItem('token', '');
  }
}