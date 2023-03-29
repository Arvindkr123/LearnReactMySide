import React, { Component } from "react";

export default class App extends Component {
  state = {
    change: false,
  };
  handleClick = () => {
    this.setState({
      change: !this.state.change,
    });
  };

  render() {
    const btnstyle = {
      color: "white",
      backgroundColor: "black",
      border: "none",
      padding: "10px",
      margin: "10px",
      cursor: "pointer",
    };
    if (this.state.change === true) {
      btnstyle.backgroundColor = "orange";
    }
    return (
      <>
        <button style={btnstyle} onClick={this.handleClick}>
          Click me
        </button>
      </>
    );
  }
}
