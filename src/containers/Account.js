import React, {Component} from 'react';
import {connect} from 'react-redux';
import Console from './Console';
import '../stylesheets/account.css';

class Account extends Component {

  componentWillReceiveProps(nextProps){
    if(!nextProps.session){
      this.props.history.push('/')
    }
  }

  render(){
    return(
      <div className="account-page">
        <Console />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {session: state.session}
}

export default connect(mapStateToProps)(Account);
