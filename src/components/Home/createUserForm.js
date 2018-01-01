import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../../actions/userActions';

class CreateUserForm extends Component{
  
  constructor(){
    super();
    this.state = {
      email: "",
      password: "",
      passwordConf: "",
      firstName: "",
      lastName: "",
      company: ""
    }
  }
  
  handleEmailInput = (event) => {
    this.setState({email: event.target.value})
  }
  
  handlePasswordInput = (event) => {
    this.setState({password: event.target.value})
  }
  
  handlePasswordConfInput = (event) => {
    this.setState({passwordConf: event.target.value})
  }
  
  handleFirstNameInput = (event) => {
    this.setState({firstName: event.target.value})
  }
  
  handleLastNameInput = (event) => {
    this.setState({lastName: event.target.value})
  }
  
  handleCompanyInput = (event) => {
    this.setState({company: event.target.value})
  }
  
  handleCreateSubmit = (event) => {
    event.preventDefault()
    this.props.actions.createUser({
      email: this.state.email, 
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      company: this.state.company
    })
  } 
  
  render(){
    return(
      <form id="create-user-form" onSubmit={this.handleCreateSubmit}>
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
        <input
          className="login-create-form-input"
          onChange={this.handlePasswordConfInput} 
          type="password"
          value={this.state.passwordConf}
          placeholder="Confirm Password"
        /><br/>
        <input
          className="login-create-form-input"
          onChange={this.handleFirstNameInput} 
          value={this.state.firstName}
          placeholder="First Name"
        /><br/>
        <input
          className="login-create-form-input"
          onChange={this.handleLastNameInput} 
          value={this.state.lastName}
          placeholder="Last Name"
        /><br/>
        <input
          className="login-create-form-input"
          onChange={this.handleCompanyInput} 
          value={this.state.company}
          placeholder="Company Name"
        /><br/>
        <button id="create-user-button" className="btn btn-primary">Create</button>
      </form>
    )
  }
  
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CreateUserForm);