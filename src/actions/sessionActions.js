import * as types from './actionTypes';
import sessionAdapter from '../adapters/sessionAdapter';

export function loginSuccess() {  
  return {type: types.LOG_IN_SUCCESS}
}

export function logoutSuccess() {
  return {type: types.LOG_OUT_SUCCESS}
}

export function logInUser(credentials) {  
  return function(dispatch) {
    return sessionAdapter.login(credentials)
    .then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

export function logOutUser() {
  return function(dispatch) {
    sessionStorage.removeItem('jwt')
    dispatch(logoutSuccess())
  }
}