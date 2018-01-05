import React, {Component} from 'react';
import LoginForm from '../components/Auth/loginForm';
import '../stylesheets/auth.css';

class Login extends Component {

  handleSignupClick = () => {
    this.props.history.push('/account/create')
  }

  render(){
    return(
      <div className="container-fluid auth-page">
        <div className="row auth-form-container">
          <div className="col-md-4">
          </div>
          <div className="col-md-4">
            <div className="auth-form-title">
              <p>Log in to YourFoundry</p>
            </div>
            <div className="row">
              <LoginForm />
            </div>
            <div className="row post-form-content">
              <p className="post-form-content-detail">Don't have an account? <span className="post-form-content-link" onClick={this.handleSignupClick}>Create a new account!</span></p>
            </div>
          </div>
          <div className="col-md-4">
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
