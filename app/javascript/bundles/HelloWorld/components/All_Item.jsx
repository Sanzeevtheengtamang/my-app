import React, { Component } from 'react'

export class All_Item extends Component {
  
  constructor(){
    super()
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    // $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
    fetch('/api/v1/items.json')
    .then(response=> response.json())
    .then(data =>  { this.setState({ items: data })})
    
    console.log("component mounted")
  }
  render() {
    console.log("render")
    console.log(this.state.items)
    // let one = this.state.items
    
    // console.log(one[1]);
    //     return (
    //   <div>
    //     <h1>All Component</h1>
    //   </div>
    // )

    let items = this.state.items
    var display_items = items.map((item) => {
      return (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
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
