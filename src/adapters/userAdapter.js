class UserAdapter {

  static create(credentials) {
    // const request = new Request("https://stagingapi.yourfoundry.com/api/v1/users", {
    const request = new Request("http://localhost:3000/api/v1/users", {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({user: credentials})
    });


    return fetch(request)
    .then(response => { return response.json() })
    .catch(error => { return error })
  }

  static show(requestedData) {
    const authorizationToken = "Bearer " + sessionStorage.jwt
    // const requestUrl = "https://stagingapi.yourfoundry.com/api/v1/users/0?q=" + requestedData
    const requestUrl = "http://localhost:3000/api/v1/users/0?q=" + requestedData
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
  
}

export default UserAdapter;  
