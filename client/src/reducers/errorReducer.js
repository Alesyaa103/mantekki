import {POST_FAIL, LOGIN_FAIL, MAIN_CONTENT_FAIL} from '../actions/types';

const initialState = {
  status: null,
  message: null
};

export default (state = initialState, action) => {
  const {type, error} = action;
  switch (type) {
    case POST_FAIL:
    case MAIN_CONTENT_FAIL:
      return {
        ...state,
        message: error
      }
    case LOGIN_FAIL:
      localStorage.setItem('token', '');
      return {
        ...state,
        message: error
      }
    default:
      return state
  }
}