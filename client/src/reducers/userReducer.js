import {LOGIN_SUCCESS, LOGOUT} from '../actions/types';

const initialState = {
  isAdmin: null
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOGIN_SUCCESS:
      const {isAdmin} = payload;
      return {
        ...state,
        isAdmin
      }
    case LOGOUT:
      return {
        ...state,
        isAdmin: false
      }
    default:
      return state
  }
}