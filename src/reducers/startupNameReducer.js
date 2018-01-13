import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function startupNameReducer(state = initialState.startupName, action) {
  switch(action.type) {
    case types.FETCH_USER_STARTUP_NAME:
      return action.payload
    default:
      return state;
  }
}