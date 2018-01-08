import React, {Component} from 'react';
import {connect} from 'react-redux';

class Account extends Component {

  componentWillReceiveProps(nextProps){
    if(!nextProps.session){
      this.props.history.push('/')
    }
  }

  render(){
    return(
      <div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {session: state.session}
}

export default connect(mapStateToProps)(Account);
