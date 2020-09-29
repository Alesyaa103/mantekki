import {
  POSTS_SUCCESS,
  CHANGE_POST,
  DELETE_POST,
  ADD_POST,
  RECENT_SUCCESS
} from '../actions/types';

const initialState = {
  loading: true,
  wallPainting: null,
  digitalArt: null,
  prints: null,
  canvasPainting: null,
  watercolor: null,
  recent: null
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case POSTS_SUCCESS:
      let newState = initialState;
      for (let key in newState) {
        newState[key] = payload.filter(item => item['collect']===key)
      }
      return {
        ...state,
        ...newState
      }
    case RECENT_SUCCESS:
      return {
        ...state,
        recent: payload
      }
    case CHANGE_POST:
      const {prevCollection, ...rest} = payload;
      if (payload.collect !== prevCollection) {
        const filtredPrevCollection = state[prevCollection].filter(item => item._id !== payload._id);
        const currentCollection = payload.collect;
        const modifiedCollection = [...state[currentCollection], rest];
        return {
          ...state,
          [prevCollection]: filtredPrevCollection,
          [currentCollection]: modifiedCollection
        };
      } else {
        const collection = payload.collect;
        const changedContent = state[collection].map(item => {
          if (payload._id === item._id) {
            return rest;
          }
          return item;
        });
        return {
          ...state,
          [collection]: changedContent
        };
      }
    case DELETE_POST:
      const collection = payload.collect;
      const modifiedCollection = state[collection].filter(item => item._id !== payload._id);
      return {
        ...state,
        [collection]: modifiedCollection
      };
    case ADD_POST:
      const postCollection = payload.collect;
      const newCollection = [...state[postCollection], payload];
      return {
        ...state,
        [postCollection]: newCollection
      }
    default:
      return state
  }
}