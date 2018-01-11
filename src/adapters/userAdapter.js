class UserAdapter {

  static create(credentials) {

    const request = new Request("http://yourfoundry-server-staging.us-east-1.elasticbeanstalk.com/api/v1/users", {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin':'*',
        // 'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
      }),
      body: JSON.stringify({user: credentials})
    });


    return fetch(request)
    .then(response => { return response.json() })
    .catch(error => { return error })
  }
}

export default UserAdapter;  
