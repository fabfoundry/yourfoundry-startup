class SessionAdapter {  
  
  static login(credentials) {
    
    const request = new Request("https://d4ue5pwgatcq3.cloudfront.net/api/v1/login", {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin':'*',
        // 'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
      }), 
      body: JSON.stringify({auth: credentials})
    });


    return fetch(request)
    .then(response => { return response.json() })
    .catch(error => { return error })
  } 
}

export default SessionAdapter;  