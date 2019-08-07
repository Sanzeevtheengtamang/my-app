import React from 'react';
import Header from './Header';
import All_Item from "./All_Item";
import New_Item from './New_Item'
import Body from "./Body";

export default class HelloWorld extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

