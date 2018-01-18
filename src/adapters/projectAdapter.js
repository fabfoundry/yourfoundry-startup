class ProjectAdapter {
  
  static index() {
    const authorizationToken = "Bearer " + sessionStorage.jwt
    // const requestUrl = "https://stagingapi.yourfoundry.com/api/v1/projects"
    const requestUrl = "http://localhost:3000/api/v1/projects"
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
    // const request = new Request("https://stagingapi.yourfoundry.com/api/v1/projects", {
    const request = new Request("http://localhost:3000/api/v1/projects", {
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

}

export default ProjectAdapter