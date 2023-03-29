import React, { Component } from "react";

export default class App extends Component {
  state = {
    users: [
      { id: 101, name: "Arvind", password: "12323dfdsdd" },
      { id: 102, name: "Ram", password: "12323dfdsdd" },
      { id: 103, name: "Allu Arjun", password: "12323dfdsdd" },
    ],
    isLoggedIn: false,
  };
  render() {
    return (
      <>
        <ul>
          <h1>
            Id : {this.state.users[0].id} Name : {this.state.users[0].name}{" "}
            password:{this.state.users[0].password}
          </h1>
          <h1>
            Id : {this.state.users[1].id} Name : {this.state.users[1].name}{" "}
            password:{this.state.users[1].password}
          </h1>
          <h1>
            Id : {this.state.users[2].id} Name : {this.state.users[2].name}{" "}
            password:{this.state.users[2].password}
          </h1>
        </ul>
      </>
    );
  }
}
