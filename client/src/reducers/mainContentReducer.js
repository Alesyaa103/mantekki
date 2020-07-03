import {MAIN_CONTENT_SUCCESS, CHANGE_MAIN_CONTENT} from '../actions/types';

const initialState = {
  loading: true,
  mainContent: null
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case MAIN_CONTENT_SUCCESS:
      return {
        ...state,
        mainContent: payload
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