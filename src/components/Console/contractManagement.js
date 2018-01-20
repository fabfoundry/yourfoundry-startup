import React, {Component} from 'react';

class ContractManagement extends Component {
  
  constructor(){
    super();
    this.state = {
      expanded: false
    }
  }

  render(){
    return(
      <div className="row row-container" id="contract-management">
        <div className="row-content">
          <p>{this.state.expanded ? <span>-</span> : <span>+</span>} Contract Management (0)</p>
        </div>
      </div>
    )
  }
}

export default ContractManagement;