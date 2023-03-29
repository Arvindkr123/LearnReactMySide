import React, { Component } from "react";

export default class App extends Component {
  render() {
    const arr = [10, 20, 30, 40, 50];
    const newArray = arr.map((num) => {
      return <li>{num*2}</li>;
    });
    return (
      <>
        <ul>{newArray}</ul>
      </>
    );
  }
}
