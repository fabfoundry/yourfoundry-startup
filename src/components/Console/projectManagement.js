import React, {Component} from 'react';

class ProjectManagement extends Component {
  
  constructor(){
    super();
    this.state = {
      expanded: false
    }
  }

  render(){
    return(
      <div className="row row-container" id="project-management">
        <div className="row-content">
          <p>{this.state.expanded ? <span>-</span> : <span>+</span>} Project Management (0)</p>
        </div>
      </div>
    )
  }
}

export default ProjectManagement;