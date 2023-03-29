import React, { Component } from "react";

export default class App extends Component {
  render() {
    const textc = {
      color: "blue", 
    };
    const texts = {
      fontSize: "80px",
    };
    return (
      <>
        <h1 style={{ ...textc, ...texts, ...{backgroundColor:"yellow"} }}>Hello App</h1>
      </>
    );
  }
}
