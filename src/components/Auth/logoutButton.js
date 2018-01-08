import React, {Component} from 'react';
import * as sessionActions from '../../actions/sessionActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LogoutButton extends Component {

  handleLogoutClick = () => {
    this.props.actions.logOutUser()
  }

  render(){
    return(
      <button onClick={this.handleLogoutClick}>Log Out</button>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(LogoutButton)
