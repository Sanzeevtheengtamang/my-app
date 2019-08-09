import React, { Component } from 'react'
import Item from "./Item";
export class All_Item extends Component {
  
  handleDelete(id) {
    this.props.handleDelete(id);
  }

  onUpdate(item) {
    this.props.onUpdate(item);
  }

  render() {
    console.log("render")
    console.log(this.props.items)

    let items = this.props.items
    var display_items = items.map((item) => {
      return (
        <div key={item.id}>
          <Item item={item}
            handleDelete={this.handleDelete.bind(this, item.id)}
            handleEdit={this.handleEdit} />
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
