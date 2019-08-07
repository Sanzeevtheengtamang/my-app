import React, { Component } from 'react'

class New_Item extends Component {

  handleClick() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    var data = {name: name, description: description}

    console.log('The name value is ' + name + 'the description value is ' + description);

    fetch('/api/v1/items', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
      .then((response) => this.props.handleSubmit(response))
  }

  render() {
    return (
      <div>
        <div>
          <input ref='name' placeholder='Enter the name of the item' />
          <input ref='description' placeholder='Enter a description' />
          <button onClick={this.handleClick.bind(this)}>Submit</button>
        </div>

      </div>
    )
  }
}

export default New_Item
