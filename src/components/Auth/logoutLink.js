import React, {Component} from 'react';
import * as sessionActions from '../../actions/sessionActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LogoutLink extends Component {

  handleLogoutClick = () => {
    this.props.actions.logOutUser()
  }

  render(){
    return(
      <a className="dropdown-item" href="/" onClick={this.handleLogoutClick}>Log Out</a>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(LogoutLink)
