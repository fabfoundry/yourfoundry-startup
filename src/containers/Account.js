import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../stylesheets/account.css';

class Account extends Component {

  componentWillReceiveProps(nextProps){
    if(!nextProps.session){
      this.props.history.push('/')
    }
  }

  render(){
    return(
      <div className="container-fluid profile-page">
        
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {session: state.session}
}

export default connect(mapStateToProps)(Account);
