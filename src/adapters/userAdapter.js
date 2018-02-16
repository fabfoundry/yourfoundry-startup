class UserAdapter {

  static create(credentials) {
    if(window.location.href.includes("localhost")){
      var requestUrl = "http://localhost:3000/api/v1/users"
    }
    else{
      var requestUrl = "https://stagingapi.yourfoundry.com/api/v1/users"
    }
    const request = new Request(requestUrl, {
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
    if(window.location.href.includes("localhost")){
      var requestUrl = "http://localhost:3000/api/v1/users/0?q=" + requestedData
    }
    else{
      var requestUrl = "https://stagingapi.yourfoundry.com/api/v1/users/0?q=" + requestedData
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

  static updateProfilePhoto(imageBase64) {
    const authorizationToken = "Bearer " + sessionStorage.jwt
    if(window.location.href.includes("localhost")){
      var requestUrl = "http://localhost:3000/api/v1/profile/photo/update"
    }
    else{
      var requestUrl = "https://stagingapi.yourfoundry.com/api/v1/profile/photo/update"
    }
    const request = new Request(requestUrl, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': authorizationToken
      }),
      body: JSON.stringify({imageBase64: imageBase64})
    });

    return fetch(request)
    .then(response => { return response.json() })
    .catch(error => { return error })
  }

}

export default UserAdapter;
