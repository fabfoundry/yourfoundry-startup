import * as types from './actionTypes';
import projectAdapter from '../adapters/projectAdapter';

export function fetchAllProjects(projects) {
  return {type: types.FETCH_ALL_PROJECTS, payload: projects}
}

export function fetchProject(project) {
  return {type: types.FETCH_PROJECT, payload: project}
}


export function fetchAllUserProjects() {
  return function(dispatch) {
    return projectAdapter.index()
    .then(response => {
      dispatch(fetchAllProjects(response["projects"]))
    })
  };
}

export function showProject(id, history) {
  return function(dispatch) {
    return projectAdapter.show(id, history)
    .then(response => {
      if(response["project"]){
        dispatch(fetchProject(response["project"]))
      }
      else{
        history.push('/')
      }
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
