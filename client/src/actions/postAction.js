import axios from 'axios';
import {POSTS_SUCCESS, ADD_POST, CHANGE_POST, DELETE_POST, POST_FAIL} from '../actions/types';

export const getAllPosts = () => async dispatch => {
  try {
    const headers = {};
    headers['Content-Type'] = 'application/json';
    headers.Accept = 'application/json';
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/post/all`, {headers});
    dispatch({type: POSTS_SUCCESS, payload: res.data});
    
  } catch (error) {
    dispatch({type: POST_FAIL, error})
  }
}

export const createPost = (data) => async dispatch => {
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
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/post/`, newData, {headers});
    dispatch({type: ADD_POST, payload: res.data});
  } catch (error) {
    dispatch({type: POST_FAIL, error})
  }
}

export const updatePost = (data, prevCollection) => async dispatch => {
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
    const res = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/post/${data._id}`, newData, {headers});
    dispatch({type: CHANGE_POST, payload: {
      ...res.data,
      prevCollection
    }});
  } catch (error) {
    dispatch({type: POST_FAIL, error})
  }
}

export const deletePost = ({_id}) => async dispatch => {
  try {
    const token = localStorage.getItem('token');
    const headers = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
      headers['Content-Type'] = 'multipart/form-data';
      headers.Accept = 'application/json';
    }
    const res = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/post/${_id}`, {headers});
    dispatch({type: DELETE_POST, payload: res.data});
  } catch (error) {
    dispatch({type: POST_FAIL, error})
  }
}