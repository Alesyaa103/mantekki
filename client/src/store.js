import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools as compose } from 'redux-devtools-extension';
import userReducer from './reducers/userReducer';
import postReducer from './reducers/postReducer';
import errorReducer from './reducers/errorReducer';
import mainContentReducer from './reducers/mainContentReducer';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postReducer,
  error: errorReducer,
  mainContent: mainContentReducer
});

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middlewares))
);


export default store;