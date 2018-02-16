import React, {Component} from 'react';
import { Modal, Button } from 'react-bootstrap';

class AddProjectModal extends Component {

  constructor(){
    super();
    this.state = {
      projectName: "",
      errorMsg: false
    }
  }

  showErrorMsg = () => {
    this.setState({errorMsg: true})
  }

  handleProjectNameInput = (event) => {
    this.setState({projectName: event.target.value})
  }

  handleAddClick = () => {
    if(this.state.projectName.length === 0){
      this.setState({errorMsg: true})
    }
    else(
      this.props.createProject(this.state.projectName, this.showErrorMsg, this.props.hideAddProjectModal)
    )
  }

  render(){
    return(
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            {this.state.errorMsg ? <p>Project name cannot already exist or be blank.</p> : null}
          </Modal.Header>

          <Modal.Body>
            <input id="new-project-name"
                   placeholder="(Project Name...)"
                   onChange={this.handleProjectNameInput}
                   value={this.state.projectName} />
          </Modal.Body>

          <Modal.Footer>
            <Button type="button" className="btn btn-secondary" onClick={this.props.hideAddProjectModal}>Cancel</Button>
            <Button type="button" className="btn btn-success" onClick={this.handleAddClick}>Add</Button>
          </Modal.Footer>

        </Modal.Dialog>
      </div>
    )
  }
}

export default AddProjectModal;
