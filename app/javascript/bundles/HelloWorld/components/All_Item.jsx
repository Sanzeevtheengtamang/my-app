import React, { Component } from 'react'

export class All_Item extends Component {
  
  handleDelete(id) {
    this.props.handleDelete(id);
  }

  render() {
    console.log("render")
    console.log(this.props.items)

    let items = this.props.items
    var display_items = items.map((item) => {
      return (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          {/* <button onClick={this.handleEdit()}> Edit </button> */}
          <button onClick={this.handleDelete.bind(this, item.id)}>Delete</button>
        </div>
      )
    });

    return (
      <div>
        {display_items}
      </div>
    )
  }
}

export default All_Item
