import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';

class LoginForm extends Component{

  constructor(){
    super();
    this.state = {
      email: "",
      password: ""
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
    this.props.actions.logInUser({email: this.state.email, password: this.state.password})
  }

  render(){
    return(
      <form className="auth-form" onSubmit={this.handleLoginSubmit}>
        <label>Email</label><br/>
        <input
          onChange={this.handleEmailInput}
          type="email"
          value={this.state.email}
        /><br/><br/>
        <label>Password</label><br/>
        <input
          onChange={this.handlePasswordInput}
          type="password"
          value={this.state.password}
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
