import React, { Component } from "react";
import "../src/App.css";
import User from "./User";

export default class App extends Component {
  render() {
    let style = false;
    return (
      <>
        <h1 className="textb">Hello App</h1>
        <User rang={style?"textb":"textg"}/>
      </>
    );
  }
}
