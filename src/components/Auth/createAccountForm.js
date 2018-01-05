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
      passwordConf: "",
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      company: this.state.company
    })
  }

  render(){
    return(
      <form className="auth-form" onSubmit={this.handleCreateSubmit}>
        <label>First Name</label><br/>
        <input
          onChange={this.handleFirstNameInput}
          value={this.state.firstName}
        /><br/><br/>
        <label>Last Name</label><br/>
        <input
          onChange={this.handleLastNameInput}
          value={this.state.lastName}
        /><br/><br/>
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
        /><br/><br/>
        <label>Password Confirmation</label><br/>
        <input
          onChange={this.handlePasswordConfInput}
          type="password"
          value={this.state.passwordConf}
        /><br/><br/>
        <label>Company Name</label><br/>
        <input
          onChange={this.handleCompanyInput}
          value={this.state.company}
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
