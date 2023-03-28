import React, { Component } from "react";
import Student from "./Student";
import ClassComponent from "./ClassComponent";
class App extends Component {
  render() {
    return <div>
      <h1>Hello Arvind !!!!!!!!</h1>
      <Student name={"Arvind Kumar"}/>
      <ClassComponent name={"Class Component"}/>
    </div>;
  }
}
export default App;
