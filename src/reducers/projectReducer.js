import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function projectReducer(state = initialState.project, action) {
  switch(action.type) {
    case types.FETCH_PROJECT:
      return action.payload
    default:
      return state;
  }
}
