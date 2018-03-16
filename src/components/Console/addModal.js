import React, {Component} from 'react';
import { Modal, Button } from 'react-bootstrap';

class AddModal extends Component {

  constructor(){
    super();
    this.state = {
      nameInput: "",
      errorMsg: false
    }
  }

  showErrorMsg = () => {
    this.setState({errorMsg: true})
  }

  handleNameInput = (event) => {
    this.setState({nameInput: event.target.value})
  }

  handleAddClick = () => {
    if(this.state.nameInput.length === 0){
      this.setState({errorMsg: true})
    }
    else if(this.props.type === "project")(
      this.props.createProject(this.state.nameInput, this.showErrorMsg, this.props.hideAddModal)
    )
  }

  render(){
    return(
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            {this.state.errorMsg ? <p>Cannot already exist or be blank.</p> : null}
          </Modal.Header>

          <Modal.Body>
            <input id="new-project-name"
                   placeholder={this.props.placeholder}
                   onChange={this.handleNameInput}
                   value={this.state.nameInput} />
          </Modal.Body>

          <Modal.Footer>
            <Button type="button" className="btn btn-secondary" onClick={this.props.hideAddModal}>Cancel</Button>
            <Button type="button" className="btn btn-success" onClick={this.handleAddClick}>Add</Button>
          </Modal.Footer>

        </Modal.Dialog>
      </div>
    )
  }
}

export default AddModal;
