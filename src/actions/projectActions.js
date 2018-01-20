import * as types from './actionTypes';
import projectAdapter from '../adapters/projectAdapter';
// import * as userActions from './userActions';  

export function fetchAllProjects(projects) {
  return {type: types.FETCH_ALL_PROJECTS, payload: projects}
}


export function fetchAllUserProjects() {
  return function(dispatch) {
    return projectAdapter.index()
    .then(response => {
        dispatch(fetchAllProjects(response["projects"]))
    })
  };
}


export function createProject(projectName, errorMsg, hideModal) {
  return function(dispatch) {
    return projectAdapter.create(projectName, errorMsg, hideModal)
    .then(response => {
      if(response["request"] === "complete"){
        dispatch(fetchAllProjects(response["projects"]))
        hideModal()
      }
      else if(response["request"] === "exists"){
        errorMsg()
      }
    })
  };
}

export function deleteProject(projectId, hideModal) {
  return function(dispatch) {
    return projectAdapter.destroy(projectId, hideModal)
    .then(response => {
      if(response["request"] === "complete"){
        dispatch(fetchAllProjects(response["projects"]))
        hideModal()
      }
    })
  };
}