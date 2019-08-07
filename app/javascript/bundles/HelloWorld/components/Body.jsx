import React, { Component } from 'react'
import All_Items from "./All_Item";
import New_Item from "./New_Item";
class Body extends Component {

  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    // $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
    fetch('/api/v1/items.json')
    .then(response => response.json())
    .then(data => { this.setState({ items: data }) })
    console.log("component mounted")
  }
  
  handleSubmit = (item) => {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  }
  
  handleDelete = (id) => {
    console.log('in handle delete'+id);

    fetch(`/api/v1/items/${id}`, {
      method: 'DELETE',
    })
    .then(() => this.removeItemClient(id))
  }

  removeItemClient = (id) => {
    console.log("Sucess")
    var newItems = this.state.items.filter((item) => {
      return item.id != id;
    });
    this.setState({ items: newItems });
  }

  render() {
    return (
      <div>
        <New_Item handleSubmit={this.handleSubmit} />
        <All_Items items={this.state.items} handleDelete={this.handleDelete} />
      </div>
    )
  }
}

export default Body
