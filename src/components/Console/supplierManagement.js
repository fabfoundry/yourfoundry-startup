import React, {Component} from 'react';

class SupplierManagement extends Component {
  
  constructor(){
    super();
    this.state = {
      expanded: false
    }
  }

  render(){
    return(
      <div className="row row-container" id="supplier-management">
        <div className="row-content">
          <p>{this.state.expanded ? <span>-</span> : <span>+</span>} Supplier Management (0)</p>
        </div>
      </div>
    )
  }
}

export default SupplierManagement;