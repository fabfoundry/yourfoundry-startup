import React, {Component} from 'react';
import {connect} from 'react-redux';
import CreateAccountForm from '../components/Auth/createAccountForm';
import { Dimmer, Loader } from 'semantic-ui-react';
import '../stylesheets/auth.css';

class CreateAccount extends Component {

  constructor(){
    super();
    this.state = {
      loading: false
    }
  }

  handleLoginClick = () => {
    this.props.history.push('/login')
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

  accountCreationFailure = () => {
    return(
      <div className="row invalid-login">
        <p className="invalid-login-message">Aborted. Account already exists with entered email.</p>
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
              <p>Create a YourFoundry Account</p>
            </div>
            {this.props.session === "exists" ? this.accountCreationFailure() : null}
            <div className="row">
              <CreateAccountForm setLoader={this.setLoader} history={this.props.history}/>
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
      </div>
    )
  }
}

function mapStateToProps(state){
  return {session: state.session}
}

export default connect(mapStateToProps)(CreateAccount);
