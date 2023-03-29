import React, { Component } from "react";
import Student from "./Student";
export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("App constructor called");
    console.log(props)
    this.state={
      roll:101
    }
  }
  static getDerivedStateFromProps(props, state){
    console.log('App - Get Derived State from props');
    console.log(props, state);
    return null;
  }

  componentDidMount(){
    console.log('App - componentDidMount called -mounted')
  }
  render() {
    console.log("App render method called");
    return (
      <div>
        <Student name={"Arvind"} />
      </div>
    );
  }
}
