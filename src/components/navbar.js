import React, {Component} from 'react';
import {connect} from 'react-redux';
import LogoutLink from './Auth/logoutLink';
import '../stylesheets/navbar.css'

class Navbar extends Component {

  loginLogout = () => {
    return(
      <div>
        <a href="/login">
          <button className="btn btn-primary my-2 my-sm-0 login-button nav-button" type="submit">Log In</button>
        </a>
        <a href="/account/create">
          <button className="btn btn-primary my-2 my-sm-0 signup-button nav-button" type="submit">Sign Up</button>
        </a>
      </div>
    )
  }


  accountDropdown = () => {
    return(
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/account/home" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Startup Name
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <LogoutLink />
        </div>
      </li>
    )
  }


  render(){
    return(
      <div className="container-fluid" id="navbar-container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand navbar-logo" href="/">YourFoundry</a>
          <div className="collapse navbar-collapse collapsed-nav-container" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
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
  return {session: state.session}
}


export default connect(mapStateToProps, null)(Navbar);
