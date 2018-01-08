import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../../actions/userActions';
import '../../stylesheets/auth.css'

class CreateAccountForm extends Component{

  constructor(){
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      company: "",
      emailValid: true
    }
  }

  handleEmailInput = (event) => {
    this.setState({email: event.target.value})
  }

  handlePasswordInput = (event) => {
    this.setState({password: event.target.value})
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

  handleEmailOnBlur = (event) => {
    if(!event.target.value.includes("@" && ".")){
      this.setState({emailValid: false})
    }
    else{
      this.setState({emailValid: true})
    }
  }

  handleCreateSubmit = (event) => {
    event.preventDefault()
    this.props.setLoader(true)
    this.props.actions.createUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      company: this.state.company,
      email: this.state.email,
      password: this.state.password
    },
    this.props.setLoader,
    this.props.history
   )
  }

  render(){
    return(
      <form className="auth-form" onSubmit={this.handleCreateSubmit}>
        <label>First Name</label><br/>
        <input
          onChange={this.handleFirstNameInput}
          value={this.state.firstName}
          required
        /><br/><br/>
        <label>Last Name</label><br/>
        <input
          onChange={this.handleLastNameInput}
          value={this.state.lastName}
          required
        /><br/><br/>
        <label>Company Name</label><br/>
        <input
          onChange={this.handleCompanyInput}
          value={this.state.company}
          required
        /><br/><br/>
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
        <div className="row" id="create-account-container">
          <button id="create-account-button" className="btn btn-primary">Create Account</button>
        </div>
      </form>
    )
  }

}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CreateAccountForm);
