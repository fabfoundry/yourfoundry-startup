import React, {Component} from 'react';

class SupplierManagement extends Component {
  
  constructor(){
    super();
    this.state = {
      expanded: false
    }
  }
  
  handleClick = () => {
    if(this.state.expanded){
      this.setState({expanded: false})
    }
    else{
      this.setState({expanded: true})
    }
  }

  render(){
    return(
      <div className="row row-container supplier-management">
        <div className="row-content">
          <p className="management-type" onClick={this.handleClick}>{this.state.expanded ? <span>-</span> : <span>+</span>} Supplier Management (0)</p>
        </div>
         {
         this.state.expanded ?
          <div className="row row-container supplier-management"> 
            <div className="row-content">
              <ul className="management-pending-complete">
                <li>+ Pending (0)</li>
                <li>+ Completed (0)</li>
              </ul>
            </div>
          </div> : null
         }
      </div>
    )
  }
}

export default SupplierManagement;