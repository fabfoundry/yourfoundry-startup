import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';

class LoginForm extends Component{

  constructor(){
    super();
    this.state = {
      email: "",
      password: "",
      emailValid: true
    }
  }

  handleEmailInput = (event) => {
    this.setState({email: event.target.value})
  }

  handlePasswordInput = (event) => {
    this.setState({password: event.target.value})
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    this.props.setLoader(true)
    this.props.actions.logInUser(
      {email: this.state.email, password: this.state.password},
      this.props.setLoader,
      this.props.history
    )
  }

  handleEmailOnBlur = (event) => {
    if(!event.target.value.includes("@" && ".")){
      this.setState({emailValid: false})
    }
    else{
      this.setState({emailValid: true})
    }
  }

  render(){
    return(
      <form className="auth-form" onSubmit={this.handleLoginSubmit}>
        <label>{this.state.emailValid ? "Email" : "Please enter a valid email address"}</label><br/>
        <input
          className={this.state.emailValid ? null : "invalid-email-input"}
          onChange={this.handleEmailInput}
          type="email"
          value={this.state.email}
          onBlur={this.handleEmailOnBlur}
          required
        /><br/><br/>
        <label>Password</label><br/>
        <input
          onChange={this.handlePasswordInput}
          type="password"
          value={this.state.password}
          required
        /><br/>
        <div className="row" id="login-forgot-container">
          <div className="col-4">
            <button id="login-button" className="btn btn-primary login-button">Log In</button>
          </div>
          <div className="col-8">
            <p>Forgot your password?</p>
          </div>
        </div>
      </form>
    )
  }

}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);
