import React, { Component } from 'react'

export class Item extends Component {

  constructor(){
    super()
    this.state = {
      editable: false
    }
  }

  handleEdit = ()=> {
    if (this.state.editable) {
      var name = this.refs.name.value;
      var description = this.refs.description.value;
      var item = { id: id, name: name, description: description };
      this.props.handleUpdate(item);
      console.log('in handleEdit', this.state.editable, name, description);

    }
    this.setState({ editable: !this.state.editable })
  }

  onUpdate(item) {
    this.props.onUpdate(item);
  }

  render() {
    var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>;
    var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description} /> : <p>{this.props.item.description}</p>;
    return (
      <div>
        {name}
        {description}
        <button onClick={this.props.handleDelete}>Delete</button>
        <button onClick={this.handleEdit}>   {" "}
         {this.state.editable ? "Submit" : "Edit"}{" "} </button>
      </div>
    )
  }
}

export default Item
