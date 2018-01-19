import React, {Component} from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';

class DeleteProjectModal extends Component {
  
  warningIcon = () => {
    return <Icon name='warning sign' size='small'/>
  }
  
  render(){
    return(
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <h2><span>{this.warningIcon()}</span>Warning!<span>{this.warningIcon()}</span></h2>
          </Modal.Header>

          <Modal.Body>
            <p>There is no reversing to this action. Are you sure you want to delete project <span>"{this.props.projectName}"</span> and everything it contains?</p>
          </Modal.Body>

          <Modal.Footer>
            <Button type="button" className="btn btn-secondary" onClick={this.props.hideDeleteProjectModal}>Cancel</Button>
            <Button type="button" className="btn btn-danger" onClick={this.props.deleteProject}>Delete</Button>
          </Modal.Footer>

        </Modal.Dialog>
      </div>
    )
  }
}

export default DeleteProjectModal;