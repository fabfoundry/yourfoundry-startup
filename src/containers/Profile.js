import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/userActions';
import { Dimmer, Loader } from 'semantic-ui-react';
import '../stylesheets/profile.css';

class Profile extends Component {

  componentWillReceiveProps(nextProps){
    if(!nextProps.session){
      this.props.history.push('/')
    }
  }
  
  componentDidMount(){
    this.props.actions.fetchUserData()
  }
  
  displayLoader = () => {
      return(
        <Dimmer active>
          <Loader size='large'>Loading...</Loader>
        </Dimmer>
      )
  }
  
  memberSinceDate(){
    let date = new Date(this.props.user.created_at)
    let month = (date.getMonth() + 1).toString()
    let day = date.getDate().toString()
    let year = date.getFullYear().toString()
    return month + '/' + day + '/' + year
  }

  render(){
    return( 
      <div className="container-fluid profile-page">
      {
        !this.props.user ? this.displayLoader() :
        <div id="profile-page-container">
          <div className="row" id="profile-title-container">
            <span id="profile-title"><p>{this.props.user.company_name}</p></span>
          </div>
          
          <div className="row" id="profile-details-container">
            <div className="col-md-3">
            </div>
            <div className="col-md-6" id="profile-details">
              <div id="profile-details-list-container">
                <div id="profile-details-list-items">
                  <p className="profile-list-item"><span className="profile-list-item-label">First Name: </span><span>{this.props.user.first_name}</span></p>
                  <p className="profile-list-item"><span className="profile-list-item-label">Last Name: </span><span>{this.props.user.last_name}</span></p>
                  <p className="profile-list-item"><span className="profile-list-item-label">Email: </span><span>{this.props.user.email}</span></p>
                  <p className="profile-list-item"><span className="profile-list-item-label">Account Role: </span><span>{this.props.user.role}</span></p>
                  <p className="profile-list-item"><span className="profile-list-item-label">Member Since: </span><span>{this.memberSinceDate()}</span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
            </div>
          </div>
        </div>
      }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    session: state.session,
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);