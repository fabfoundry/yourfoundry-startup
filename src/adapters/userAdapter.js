class UserAdapter {

  static create(credentials) {

    const request = new Request("https://d4ue5pwgatcq3.cloudfront.net/api/v1/users", {
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
}

export default UserAdapter;  
