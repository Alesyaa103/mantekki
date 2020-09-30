import axios from 'axios';
import {MAIN_CONTENT_SUCCESS, CHANGE_MAIN_CONTENT, MAIN_CONTENT_FAIL, START_LOADING_MAIN} from '../actions/types';

export const getMainContent = () => async dispatch => {
  try {
    dispatch({type: START_LOADING_MAIN});
    const headers = {};
    headers['Content-Type'] = 'application/json';
    headers.Accept = 'application/json';
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/head/getAll`, {headers});
    dispatch({type: MAIN_CONTENT_SUCCESS, payload: res.data});
  } catch (error) {
    dispatch({type: MAIN_CONTENT_FAIL, error: error.message})
  }
};

export const updateMainContent = (data) => async dispatch => {
  try {
    const newData = new FormData();
    for (let key in data) {
      newData.set(key, data[key])
    }
    const token = localStorage.getItem('token');
    const headers = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
      headers['Content-Type'] = 'multipart/form-data';
      headers.Accept = 'application/json';
    }
    const res =  await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/head/${data._id}`, newData, {headers})
    dispatch({type: CHANGE_MAIN_CONTENT, payload: res.data});
  } catch (error) {
    dispatch({type: MAIN_CONTENT_FAIL, error: error.message})
  }
}