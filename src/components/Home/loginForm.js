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
      <form id="login-form" onSubmit={this.handleLoginSubmit}>
        <input
          className="login-create-form-input"
          onChange={this.handleEmailInput}
          type="email" 
          value={this.state.email}
          placeholder="Email"
        /><br/>
        <input
          className="login-create-form-input"
          onChange={this.handlePasswordInput} 
          type="password"
          value={this.state.password}
          placeholder="Password"
        /><br/>
        <button id="login-button" className="btn btn-primary">Log In</button>
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