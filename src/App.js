import React, { Component } from "react";

export default class App extends Component {
  render() {
    const arr = this.props.arr;
    return (
      <>
        <ul>
          {arr.map((num) => {
            return <li>{num}</li>;
          })}
        </ul>
      </>
    );
  }
}
