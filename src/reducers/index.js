import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';
import startupNameReducer from './startupNameReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  startupName: startupNameReducer,
  user: userReducer
});

export default rootReducer;
