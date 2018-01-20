import React, {Component} from 'react';

class PaymentManagement extends Component {
  
  constructor(){
    super();
    this.state = {
      expanded: false
    }
  }

  render(){
    return(
      <div className="row row-container" id="payment-management">
        <div className="row-content">
          <p>{this.state.expanded ? <span>-</span> : <span>+</span>} Payment Management (0)</p>
        </div>
      </div>
    )
  }
}

export default PaymentManagement;