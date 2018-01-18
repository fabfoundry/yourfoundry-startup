import React, {Component} from 'react';
import ContractManagement from './contractManagement';
import SupplierManagement from './supplierManagement';
import PaymentManagement from './paymentManagement';
import ProjectManagement from './projectManagement';
import '../../stylesheets/project.css';

class Project extends Component {
  
  constructor(){
    super();
    this.state = {
      expanded: false
    }
  }
  
  handleProjectClick = () => {
    if(this.state.expanded){
      this.setState({expanded: false})
    }
    else{
      this.setState({expanded: true})
    }
    
  }

  render(){
    return(
      <div id="projects-container">
        <div className="row row-container" id="project" onClick={this.handleProjectClick}>
          <div className="row-content">
            <p>{this.state.expanded ? <span>-</span> : <span>+</span>} {this.props.name}</p>
          </div>
        </div>
        {this.state.expanded ? <ContractManagement /> : null}
        {this.state.expanded ? <SupplierManagement /> : null}
        {this.state.expanded ? <PaymentManagement /> : null}
        {this.state.expanded ? <ProjectManagement /> : null}
      </div>
    )
  }
}

export default Project;