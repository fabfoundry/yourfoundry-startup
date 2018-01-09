import React, { Component } from 'react';
import '../stylesheets/home.css';

class Home extends Component{

  handleLoginClick = () => {
    this.props.history.push('/login')
  }

  handleSignupClick = () => {
    this.props.history.push('/account/create')
  }

  render(){
    return(
      <div className="container-fluid" id="home-page">
        <div className="row" id="home-content">
          <div className="col-md-2">
          </div>
          <div className="col-md-8" id="home-content-container">
            <div className="row" id="home-main-header">
              <div id="main-header">
                <p id="main-header-text">YourFoundry is a manufacturing management service for hardware startups</p>
              </div>
            </div>
            <div className="row" id="home-main-description">
            <div id="main-description">
              <p id="main-description-text"><span className="bold">YourFoundry</span> is a set of services with appropriate resources that help hardware startups manage inter-company operations, such as contracts, project management, manufacturing and payments.</p>
            </div>
            </div>
            <div className="row" id="home-main-login-signup">
              <div id="login-signup-buttons">
                <button className="btn btn-primary my-2 my-sm-0 login-button nav-button" onClick={this.handleLoginClick} type="submit">Log In</button>
                <button className="btn btn-primary my-2 my-sm-0 signup-button nav-button" onClick={this.handleSignupClick} type="submit">Sign Up</button>
              </div>
            </div>
            <div className="row" id="home-main-fabfoundry-link">
              <div id="main-fabfoundry-link">
                <p id="main-fabfoundry-link-text">A <span className="underline"><a href="http://www.fabfoundry.net" target="_blank" rel="noopener noreferrer">FabFoundry</a></span> Service</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
