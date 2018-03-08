import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function projectsReducer(state = initialState.projects, action) {
  switch(action.type) {
    case types.FETCH_ALL_PROJECTS:
      return action.payload
    default:
      return state;
  }
}
