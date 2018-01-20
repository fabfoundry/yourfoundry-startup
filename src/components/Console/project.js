import React, {Component} from 'react';
import ContractManagement from './contractManagement';
import SupplierManagement from './supplierManagement';
import PaymentManagement from './paymentManagement';
import ProjectManagement from './projectManagement';
import { Icon } from 'semantic-ui-react';
import '../../stylesheets/project.css';

class Project extends Component {
  
  constructor(){
    super();
    this.state = {
      expanded: false
    }
  }
  
  handleProjectClick = () => {
    this.props.setSelectedProject(this.props.project)
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
          <div className="row-content col-9">
            <p>{this.state.expanded ? <span>-</span> : <span>+</span>} {this.props.name}</p>
          </div>
          <div className="row-content trash-icon-container col-3">
            <Icon name='trash' size='large' className="trash-icon" inverted="true" onClick={this.props.displayDeleteProjectModal}/>
          </div>
        </div>
        <div id="management-containers">
          {this.state.expanded ? <ContractManagement /> : null}
          {this.state.expanded ? <SupplierManagement /> : null}
          {this.state.expanded ? <PaymentManagement /> : null}
          {this.state.expanded ? <ProjectManagement /> : null}
        </div>
      </div>
    )
  }
}

export default Project;