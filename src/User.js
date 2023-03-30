import React, { Component } from "react";
import "../src/App.css";

export default class User extends Component {
  render() {
    return (
      <>
        <h1 className={this.props.rang}>Hello User</h1>
      </>
    );
  }
}
