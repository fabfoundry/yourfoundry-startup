import * as types from './actionTypes';
import userAdapter from '../adapters/userAdapter';
import * as sessionActions from './sessionActions';


export function createAccountFailure() {
  return {type: types.CREATE_ACCOUNT_FAILURE}
}

export function fetchAllUserData(userData) {
  return {type: types.FETCH_ALL_USER_DATA, payload: userData}
}

export function fetchUserStartupName(userData) {
  return {type: types.FETCH_USER_STARTUP_NAME, payload: userData}
}


export function createUser(credentials, setLoader, history) {
  return function(dispatch) {
    return userAdapter.create(credentials, setLoader, history)
    .then(response => {
      if(response["request"] === "complete"){
        dispatch(sessionActions.logInUser({
          email: credentials["email"],
          password: credentials["password"]},
          setLoader,
          history
        ))
      }
      else if(response["request"] === "exists"){
        dispatch(createAccountFailure())
        setLoader(false)
      }
    })
  };
}

export function fetchUserData(requestedData="all") {
  return (dispatch) => {
    return userAdapter.show(requestedData)
    .then(response => {
      if(requestedData === "startupName"){
        dispatch(fetchUserStartupName(response["startupName"]))
      }
      else if(requestedData === "all"){
        dispatch(fetchAllUserData(response["user"]))
      }
    })
  };
}

export function updateProfilePhoto(imageBase64, updateUploadStatus) {
  return (dispatch) => {
    return userAdapter.updateProfilePhoto(imageBase64, updateUploadStatus)
    .then(response => {
      if(!!response["error"]){
        alert("Warning! File size must not exceed 5mb.")
      }
      else {
        dispatch(fetchUserData())
      }
      updateUploadStatus(false)
    })
  };
}
