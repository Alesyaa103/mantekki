import {LOGIN_SUCCESS} from '../actions/types';

const initialState = {
  isAdmin: null
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOGIN_SUCCESS:
      const {token, isAdmin} = payload;
      localStorage.setItem('token', token);
      return {
        ...state,
        isAdmin
      }
    default:
      return state
  }
}