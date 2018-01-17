import React, {Component} from 'react';
import Project from '../components/Console/project';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import * as userActions from '../actions/userActions';
import '../stylesheets/console.css';

class Console extends Component {
  
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

  render(){
    console.log(this.props.user)
    return(
      <div className="container-fluid" id="main-console-container">
          <div className="row" id="main-console">
            {
              !this.props.user ? this.displayLoader() :
              <div className="col-md-12">
                <div className="row" id="company-name-container">
                  <div id="company-name">
                    <p>{this.props.user.company_name}</p>
                  </div>
                </div>
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
              </div>
            }
          </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {user: state.user}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Console);

