import React, { Component } from "react";
import Student from "./Student";
class App extends Component {
  render() {
    return <div>
      <Student name={"Arvind Kumar"}/>
      <Student name={"SJS Kumar"}/>
      <Student name={"APK Kumar"}/>
      <Student name={"AKS Kumar"}/>
    </div>;
  }
}
export default App;
