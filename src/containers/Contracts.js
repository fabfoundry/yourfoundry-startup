import React, {Component} from 'react';
import * as userActions from '../actions/userActions';
import * as projectActions from '../actions/projectActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../stylesheets/contracts.css';

class Contracts extends Component {

  componentDidMount(){
    this.props.actions.fetchUserData()
    this.props.actions.showProject(this.props.match.params.id, this.props.history)
  }

  render(){
    console.log(this.props.project)
    return(
      <div className="container-fluid" id="contracts-page">
        <div className="row" id="nav-container"></div>
        <div className="row" id="main-console">
            <div className="col-md-12" id="user-console-container">
              <div className="row row-container">
                <div className="row-content">
                  <p>
                    {
                      this.props.user && this.props.user.profile_photo.length > 0 ?
                      <img className="profile-photo-icon" src={this.props.user.profile_photo}/> : null
                    }
                    <span id="startup-name">{this.props.project ? this.props.project.name : null}</span>
                  </p>
                </div>
              </div>
              </div>

            </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    project: state.project
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...userActions, ...projectActions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contracts);
