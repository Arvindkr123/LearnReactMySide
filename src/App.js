import React, { Component } from "react";

export default class App extends Component {
  render() {
    const arr = [10, 20, 30, 40, 50];
    return (
      <>
        <ul>
          <li>{arr[0] * 2}</li>
          <li>{arr[1] * 2}</li>
          <li>{arr[2] * 2}</li>
          <li>{arr[3] * 2}</li>
          <li>{arr[4] * 2}</li>
        </ul>
      </>
    );
  }
}
