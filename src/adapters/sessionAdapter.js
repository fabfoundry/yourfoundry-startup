class SessionAdapter {  
  
  static login(credentials) {
    
    const request = new Request("https://d4ue5pwgatcq3.cloudfront.net/api/v1/login", {
    // const request = new Request("http://localhost:3000/api/v1/login", {
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