import React, { Component } from 'react'
import User from './User';

export default class App extends Component {
  render() {
    const primeMember = this.props.primeMember;
    return (
      <>
        <h1>Welcome User</h1>
        {primeMember && <User/>}
      </>
    )
  }
}
