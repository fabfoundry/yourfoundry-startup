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
      <form onSubmit={this.handleLoginSubmit}>
        <label>email</label>
        <input onChange={this.handleEmailInput} value={this.state.email}/>
        <label>password</label>
        <input onChange={this.handlePasswordInput} value={this.state.password}/>
        <button>submit</button>
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