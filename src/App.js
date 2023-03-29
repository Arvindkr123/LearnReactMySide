import React, { Component } from "react";
import Guest from "./Guest";
import User from "./User";

export default class App extends Component {
  state = {
    isLoggedIn: false,
  };

  clickLogOut = () => {
    this.setState({ isLoggedIn: false });
  };
  clickLogin = () => {
    this.setState({ isLoggedIn: true });
  };
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let consumer;
    // if (isLoggedIn) {
    //   return <User data={this.clickLogOut} />;
    // } else {
    //   return <Guest data={this.clickLogin} />;
    // }
    // if (isLoggedIn) {
    //   consumer = <User data={this.clickLogOut} />;
    // } else {
    //   consumer = <Guest data={this.clickLogin} />;
    // }
    // return <>{consumer}</>
    // return (
    //   <>
    //     {isLoggedIn ? (
    //       <User data={this.clickLogOut} />
    //     ) : (
    //       <Guest data={this.clickLogin} />
    //     )}
    //   </>
    // );

    return (
      <>
        {(() => {
          if (isLoggedIn) {
            return <User data={this.clickLogOut} />;
          } else {
            return <Guest data={this.clickLogin} />;
          }
        })()}
      </>
    );
  }
}
