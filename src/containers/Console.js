import React, {Component} from 'react';
import Project from '../components/Console/project';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import AddProjectModal from '../components/Console/addProjectModal';
import DeleteProjectModal from '../components/Console/deleteProjectModal';
import * as userActions from '../actions/userActions';
import * as projectActions from '../actions/projectActions';
import '../stylesheets/console.css';

class Console extends Component {
  
  constructor(){
    super();
    this.state = {
      displayAddProjectModal: false,
      displayDeleteProjectModal: false,
      selectedProject: null
    }
  }
  
  componentDidMount(){
    this.props.actions.fetchUserData()
    this.props.actions.fetchAllUserProjects()
  }
  
  displayAddProjectModal = () => {
    this.setState({displayAddProjectModal: true})
  }
  
  hideAddProjectModal = () => {
    this.setState({displayAddProjectModal: false})
  }
  
  displayDeleteProjectModal = () => {
    this.setState({displayDeleteProjectModal: true})
  }
  
  hideDeleteProjectModal = () => {
    this.setState({displayDeleteProjectModal: false})
  }
  
  setSelectedProject = (project) => {
    this.setState({selectedProject: project})
  }
  
  displayLoader = () => {
      return(
        <Dimmer active>
          <Loader size='large'>Loading...</Loader>
        </Dimmer>
      )
  }
  
  displayProjects = () => {
    if(this.props.projects.length > 0){
      return this.props.projects.map((project) => {
        return <Project key={project.id} 
                        name={project.name} 
                        displayDeleteProjectModal={this.displayDeleteProjectModal} 
                        project={project}
                        setSelectedProject={this.setSelectedProject} />
      })
    }
  }

  render(){
    return(
      <div className="container-fluid" id="main-console-container">
          <div className="row" id="main-console">
            {
              !this.props.user ? this.displayLoader() :
              <div className="col-md-12" id="user-console-container">
                <div className="row row-container">
                  <div className="row-content">
                    <p>{this.props.user.company_name}</p>
                  </div>
                </div>
                {this.displayProjects()}
                <div className="row row-container" 
                     id="add-new-project"
                     onClick={this.displayAddProjectModal}>
                  <div className="row-content">
                    <p>Add a new project</p>
                  </div>
                </div>
              </div>
            }
          </div>
          { 
            this.state.displayAddProjectModal ? 
            <AddProjectModal 
              hideAddProjectModal={this.hideAddProjectModal}
              createProject={this.props.actions.createProject}/> 
            : null 
          }
          { 
            this.state.displayDeleteProjectModal ? 
            <DeleteProjectModal
              projectName={this.state.selectedProject["name"]}
              hideDeleteProjectModal={this.hideDeleteProjectModal}
              deleteProject={() => this.props.actions.deleteProject(this.state.selectedProject["id"], this.hideDeleteProjectModal)}/> 
            : null 
          }
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    projects: state.projects
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...userActions, ...projectActions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Console);

