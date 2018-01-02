import React, { Component } from 'react';
import LoginForm from '../components/Home/loginForm';
import CreateUserForm from '../components/Home/createUserForm';
import LogoutButton from '../components/Home/logoutButton';
import Navbar from '../components/navbar';
import '../stylesheets/home.css';

class Home extends Component{

  render(){
    return(
    <div >
      <div className="container-fluid" id="home-page">
        <div className="row">
          <Navbar />
        </div>
        <div className="row" id="home-content">
          <div className="col-md-2">
          </div>
          <div className="col-md-8" id="home-content-container">
          </div>
          <div className="col-md-2">
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Home;
