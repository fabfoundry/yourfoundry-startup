import React, {Component} from 'react';

class Navbar extends Component {
  render(){
    return(
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand navbar-logo" href="#">YourFoundry</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            </ul>
          <button className="btn btn-primary my-2 my-sm-0 login-button nav-button" type="submit">Log In</button>
          <button className="btn btn-primary my-2 my-sm-0 signup-button nav-button" type="submit">Sign Up</button>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
