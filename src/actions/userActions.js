import * as types from './actionTypes';
import userAdapter from '../adapters/userAdapter';
import * as sessionActions from './sessionActions';


export function createAccountFailure() {
  return {type: types.CREATE_ACCOUNT_FAILURE}
}


export function createUser(credentials, setLoader, history) {
  return function(dispatch) {
    return userAdapter.create(credentials, setLoader, history)
    .then(response => {
      if(response["request"] === "complete"){
        dispatch(sessionActions.logInUser({email: credentials["email"], password: credentials["password"]}, setLoader, history))
      }
      else if(response["request"] === "exists"){
        dispatch(createAccountFailure())
        setLoader(false)
      }
    })
  };
}
