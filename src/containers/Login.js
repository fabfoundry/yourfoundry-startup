import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginForm from '../components/Auth/loginForm';
import { Dimmer, Loader } from 'semantic-ui-react';
import '../stylesheets/auth.css';

class Login extends Component {

  constructor(){
    super();
    this.state = {
      loading: false
    }
  }

  handleSignupClick = () => {
    this.props.history.push('/account/create')
  }

  setLoader = (bool) => {
    this.setState({loading: bool})
  }

  displayLoader = () => {
    if(this.state.loading){
      return(
        <Dimmer active>
          <Loader size='large'>Preparing Your Account</Loader>
        </Dimmer> : null
      )
    }
  }

  invalidLoginMessage = () => {
    return(
      <div className="row" id="invalid-login">
        <p id="invalid-login-message">Invalid user credentials. Unrecognized Email and Password combination.</p>
      </div>
    )
  }

  render(){
    return(
      <div className="container-fluid auth-page">
        <div className="row auth-form-container">
          <div className="col-md-4">
          </div>
          <div className="col-md-4">
            {this.displayLoader()}
            <div className="auth-form-title">
              <p>Log in to YourFoundry</p>
            </div>
            {this.props.session === "invalid" ? this.invalidLoginMessage() : null}
            <div className="row">
              <LoginForm setLoader={this.setLoader} history={this.props.history}/>
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

function mapStateToProps(state) {
  return {session: state.session}
}

export default connect(mapStateToProps)(Login);
