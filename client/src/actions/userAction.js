import axios from 'axios';
import {LOGIN_SUCCESS, LOGIN_FAIL} from '../actions/types';

export const login = (data) => async dispatch => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/user/login`, data);
    dispatch({type: LOGIN_SUCCESS, payload: res.data});
  } catch (error) {
    dispatch({type: LOGIN_FAIL, error})
  }
}
