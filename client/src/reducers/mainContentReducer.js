import {MAIN_CONTENT_SUCCESS, CHANGE_MAIN_CONTENT, START_LOADING_MAIN} from '../actions/types';

const initialState = {
  loading: true,
  mainContent: null
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case START_LOADING_MAIN:
      return {
        ...state,
        loading: true
      }
    case MAIN_CONTENT_SUCCESS:
      return {
        ...state,
        mainContent: payload,
        loading: false
      }
    case CHANGE_MAIN_CONTENT:
      const changedContent = state.mainContent.map(item => {
        if (payload._id === item._id) {
          return payload
        }
        return item
      })
      return {
        ...state,
        mainContent: changedContent
      }
    default:
      return state
  }
}