import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';
import projectsReducer from './projectsReducer';
import projectReducer from './projectReducer';
import startupNameReducer from './startupNameReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  startupName: startupNameReducer,
  user: userReducer,
  projects: projectsReducer,
  project: projectReducer
});

export default rootReducer;
