import React, {Component} from 'react';

class ExpandableRow extends Component {

  constructor(){
    super();
    this.state = {
      expanded: false
    }
  }

  handleExpanderClick = () => {
    if(this.state.expanded){
      this.setState({expanded: false})
    }
    else{
      this.setState({expanded: true})
    }
  }

  handleExpandedListClick = () => {
    if(this.props.type === "contract"){
      this.props.history.push("/account/home/projects/" + this.props.projectId + "/contracts")
    }
  }

  displayListItems = () => {
    return this.props.listItems.map((listItem) => {
      return <li>+ {listItem}</li>
    })
  }


  render(){
    return(
      <div className="row row-container expandable-row">
        <div className="row-content">
          <p className="row-label" onClick={this.handleExpanderClick}>{this.state.expanded ? <span>-</span> : <span>+</span>} {this.props.rowLabel}</p>
        </div>
        {
        this.state.expanded ?
         <div className="row row-container expandable-row expanded" onClick={this.handleExpandedListClick}>
           <div className="row-content">
             <ul className="row-list-items">
               {this.displayListItems()}
             </ul>
           </div>
         </div> : null
        }
      </div>
    )
  }
}

export default ExpandableRow;
