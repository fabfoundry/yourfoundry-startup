class SessionAdapter {  
  
  static login(credentials) {
    
    const request = new Request('yourfoundry-server-staging.us-east-1.elasticbeanstalk.com/api/v1/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({auth: credentials})
    });


    return fetch(request)
    .then(response => { return response.json() })
    .catch(error => { return error })
  } 
}

export default SessionAdapter;  