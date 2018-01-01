import * as types from '../actions/actionTypes';  
import initialState from './initialState';  

export default function sessionReducer(state = initialState.session, action) {  
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      return !!sessionStorage.jwt
    case types.LOG_OUT_SUCCESS:
      return !!sessionStorage.jwt
    default: 
      return state;
  }
}