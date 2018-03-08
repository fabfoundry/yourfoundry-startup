class ProjectAdapter {

  static index() {
    const authorizationToken = "Bearer " + sessionStorage.jwt
    if(window.location.href.includes("localhost")){
      var requestUrl = "http://localhost:3000/api/v1/projects"
    }
    else{
      var requestUrl = "https://stagingapi.yourfoundry.com/api/v1/projects"
    }
    const request = new Request(requestUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': authorizationToken
      }),
    });

    return fetch(request)
    .then(response => { return response.json() })
    .catch(error => { return error })
  }

  static show(id) {
    const authorizationToken = "Bearer " + sessionStorage.jwt
    if(window.location.href.includes("localhost")){
      var requestUrl = "http://localhost:3000/api/v1/projects/" + id
    }
    else{
      var requestUrl = "https://stagingapi.yourfoundry.com/api/v1/projects" + id
    }
    const request = new Request(requestUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': authorizationToken
      }),
    });

    return fetch(request)
    .then(response => { return response.json() })
    .catch(error => { return error })
  }


  static create(projectName) {
    const authorizationToken = "Bearer " + sessionStorage.jwt
    if(window.location.href.includes("localhost")){
      var requestUrl = "http://localhost:3000/api/v1/projects"
    }
    else{
      var requestUrl = "https://stagingapi.yourfoundry.com/api/v1/projects"
    }
    const request = new Request(requestUrl, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': authorizationToken
      }),
      body: JSON.stringify({project: {newProject: projectName}})
    });


    return fetch(request)
    .then(response => { return response.json() })
    .catch(error => { return error })
  }

  static destroy(projectId) {
    const authorizationToken = "Bearer " + sessionStorage.jwt
    if(window.location.href.includes("localhost")){
      var requestUrl = "http://localhost:3000/api/v1/projects/" + projectId
    }
    else{
      var requestUrl = "https://stagingapi.yourfoundry.com/api/v1/projects/" + projectId
    }
    const request = new Request(requestUrl, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': authorizationToken
      }),
    });


    return fetch(request)
    .then(response => { return response.json() })
    .catch(error => { return error })
  }

}

export default ProjectAdapter
