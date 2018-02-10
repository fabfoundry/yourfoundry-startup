import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/userActions';
import LogoutLink from './Auth/logoutLink';
import '../stylesheets/navbar.css'

class Navbar extends Component {
  

  loginLogout = () => {
    return(
      <div>
        <a href="/login">
          <button className="btn btn-primary my-2 my-sm-0 login-button nav-button"
                  type="submit">
                  Log In
          </button>
        </a>
        <a href="/account/create">
          <button className="btn btn-primary my-2 my-sm-0 signup-button nav-button" 
                  type="submit">
                  Sign Up
          </button>
        </a>
      </div>
    )
  }
  
  
  fetchStartupName = () => {
    this.props.actions.fetchUserData("startupName")
  }


  accountDropdown = () => {
    this.fetchStartupName()
    return(
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" 
                href="/account/home" 
                id="navbarDropdownMenuLink" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
                {this.props.startupName ? this.props.startupName : <span>Loading...</span>}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/account/home">Home</a>
          <a className="dropdown-item" href="/account/profile">Profile</a>
          <LogoutLink />
        </div>
      </li>
    )
  }


  render(){
    return(
      <div className="container-fluid" id="navbar-container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
          <button className="navbar-toggler navbar-toggler-right" 
                  type="button" 
                  data-toggle="collapse" 
                  data-target="#navbarSupportedContent" 
                  aria-controls="navbarSupportedContent" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand navbar-logo" href="/">YourFoundry</a>
          
          <div className="collapse navbar-collapse collapsed-nav-container" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li>
                <div id="google_translate_element"></div>
              </li>
            </ul>
            {
              (!!sessionStorage.jwt || this.props.session === true) ?
              this.accountDropdown() :
              this.loginLogout()}
          </div>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    session: state.session,
    startupName: state.startupName
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
