import React, { Component } from "react";
import "./App.css";
import User from "./User";
export default class App extends Component {
  render() {
    return (
      <>
        <h1 className="txt">Hello App</h1>
        <User/>
      </>
    );
  }
}
