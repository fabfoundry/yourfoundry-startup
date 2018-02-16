class SessionAdapter {

  static login(credentials) {

    if(window.location.href.includes("localhost")){
      var requestUrl = "http://localhost:3000/api/v1/login"
    }
    else{
      var requestUrl = "https://stagingapi.yourfoundry.com/api/v1/login"
    }

    const request = new Request(requestUrl, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({auth: credentials})
    });


    return fetch(request)
    .then(response => { return response.json() })
    .catch(error => { return error })
  }
}

export default SessionAdapter;
