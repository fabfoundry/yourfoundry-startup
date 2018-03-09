import React, {Component} from 'react';
import ExpandableRow from '../RowComponents/ExpandableRow';
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

  handleDeleteClick = () => {
    this.props.setSelectedProject(this.props.project)
    this.props.displayDeleteProjectModal()
  }


  render(){
    return(
      <div id="projects-container">
        <div className="row row-container" id="project">
          <div className="row-content col-9" onClick={this.handleProjectClick}>
            <p id="project-name">{this.state.expanded ? <span>-</span> : <span>+</span>} {this.props.name}</p>
          </div>
          <div className="row-content trash-icon-container col-3">
            <Icon name='trash' size='large' className="trash-icon" inverted="true" onClick={this.handleDeleteClick}/>
          </div>
        </div>
        <div id="management-containers">
          {this.state.expanded ? <ExpandableRow history={this.props.history} projectId={this.props.project.id} type="contract" rowLabel="Contract Management (0)" listItems={["Pending (0)", "Complete (0)"]}/> : null}
          {this.state.expanded ? <ExpandableRow history={this.props.history} projectId={this.props.project.id} type="supplier" rowLabel="Supplier Management (0)" listItems={["Pending (0)", "Complete (0)"]}/> : null}
          {this.state.expanded ? <ExpandableRow history={this.props.history} projectId={this.props.project.id} type="payment" rowLabel="Payment Management (0)" listItems={["Pending (0)", "Complete (0)"]}/> : null}
          {this.state.expanded ? <ExpandableRow history={this.props.history} projectId={this.props.project.id} type="project" rowLabel="Project Management (0)" listItems={["Pending (0)", "Complete (0)"]}/> : null}
        </div>
      </div>
    )
  }
}

export default Project;
