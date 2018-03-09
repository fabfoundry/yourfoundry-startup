import React, {Component} from 'react';
import * as userActions from '../actions/userActions';
import * as projectActions from '../actions/projectActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import ExpandableRow from '../components/RowComponents/ExpandableRow'
import '../stylesheets/contracts.css';

class Contracts extends Component {

  componentDidMount(){
    this.props.actions.fetchUserData()
    this.props.actions.showProject(this.props.match.params.id, this.props.history)
  }

  displayLoader = () => {
      return(
        <Dimmer active>
          <Loader size='large'>Loading...</Loader>
        </Dimmer>
      )
  }

  handleHomeClick = () => {
    this.props.history.push('/')
  }

  render(){
    return(
      <div className="container-fluid" id="contracts-page">
        <div className="row" id="nav-container"></div>
        {
         this.props.user && this.props.project ?
          <div className="row" id="main-console">
              <div className="col-md-12" id="user-console-container">
                <div className="row console-nav">
                  <div className="row-content">
                    <p><span onClick={this.handleHomeClick}className="console-nav-item">Projects </span> ⟶ <span className="console-nav-item">{this.props.project.name} </span> ⟶ <span className="console-nav-item-active">Contracts </span></p>
                  </div>
                </div>
                <div className="row row-container">
                  <div className="row-content">
                    <p>
                      {
                        this.props.user.profile_photo.length > 0 ?
                        <img className="profile-photo-icon" src={this.props.user.profile_photo}/> : null
                      }
                      <span id="startup-name">{this.props.user.company_name}</span>
                    </p>
                  </div>
                </div>
                <div className="row row-container" id="contracts-title-container">
                  <div className="row-content">
                    <p>Contract Management (for {this.props.project.name})</p>
                  </div>
                </div>
                <div className="row row-container child-row">
                  <div className="row-content">
                    <p>Overview of Contracting</p>
                  </div>
                </div>
                <ExpandableRow rowLabel="Pending (0)" listItems={[]}/>
                <ExpandableRow rowLabel="Complete (0)" listItems={[]}/>
              </div>
           </div> : this.displayLoader()
        }

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
