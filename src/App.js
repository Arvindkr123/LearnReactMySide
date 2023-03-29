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
    // const newUser = this.state.users.map((user)=>{
    //   return <><h1><li>{user.id} {user.name} {user.password}</li></h1></>
    // })
    return (
      <>
        <ul>
          {this.state.users.map((user) => {
            return (
              <li>
               Id {user.id} Name {user.name} Password {user.password}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
