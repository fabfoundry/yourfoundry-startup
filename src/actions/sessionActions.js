import * as types from './actionTypes';
import sessionAdapter from '../adapters/sessionAdapter';

export function loginSuccess() {
  return {type: types.LOG_IN_SUCCESS}
}

export function loginFailure() {
  return {type: types.LOG_IN_FAILURE}
}

export function logoutSuccess() {
  return {type: types.LOG_OUT_SUCCESS}
}


export function logInUser(credentials, setLoader, history) {
  return function(dispatch) {
    return sessionAdapter.login(credentials, setLoader, history)
    .then(response => {
      if(Object.keys(response).includes("jwt")){
        sessionStorage.setItem('jwt', response.jwt);
        dispatch(loginSuccess());
        setLoader(false)
        history.push("/account/home")
      }
      else{
        dispatch(loginFailure())
        setLoader(false)
      }
    })
  };
}

export function logOutUser() {
  return function(dispatch) {
    sessionStorage.removeItem('jwt')
    dispatch(logoutSuccess())
  }
}
