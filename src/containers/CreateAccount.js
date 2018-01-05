import React, {Component} from 'react';
import CreateAccountForm from '../components/Auth/createAccountForm';
import '../stylesheets/auth.css';

class CreateAccount extends Component {

  handleLoginClick = () => {
    this.props.history.push('/login')
  }

  render(){
    return(
      <div className="container-fluid auth-page">
        <div className="row auth-form-container">
          <div className="col-md-4">
          </div>
          <div className="col-md-4">
            <div className="auth-form-title">
              <p>Create a YourFoundry Account</p>
            </div>
            <div className="row">
              <CreateAccountForm />
            </div>
            <div className="row post-form-content">
              <p className="post-form-content-detail">By creating an account, you agree to our <span className="post-form-content-link">Terms of Service.</span></p>
            </div>
            <div className="row post-form-content">
              <p className="post-form-content-detail">Already have an account? <span className="post-form-content-link" onClick={this.handleLoginClick}>Log in.</span></p>
            </div>
          </div>
          <div className="col-md-4">
          </div>
        </div>
        <div className="row buffer">
        </div>
      </div>
    )
  }
}

export default CreateAccount;
