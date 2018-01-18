import React, {Component} from 'react';
import '../../stylesheets/project.css'

class Project extends Component {

  render(){
    return(
      <div className="row row-container" id="project">
        <div className="row-content">
          <p><span>+</span> {this.props.name}</p>
        </div>
      </div>
    )
  }
}

export default Project;