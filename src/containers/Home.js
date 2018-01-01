import React, { Component } from 'react';
import LoginForm from '../components/Home/loginForm';
import CreateUserForm from '../components/Home/createUserForm';
import LogoutButton from '../components/Home/logoutButton';
import '../stylesheets/home.css';

class Home extends Component{
  
  render(){
    return(
      <div className="container-fluid page-container">
        <div className="row" id="auth-forms-container">
          <div className="col-md-5 auth-forms">
            <LoginForm/>
          </div>
          <div className="col-md-2 center-OR">
              <p id="login-OR-create">OR</p>
          </div>
          <div className="col-md-5 auth-forms">
            <CreateUserForm/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;