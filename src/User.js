import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <>
        <h1>Welcome Arvind</h1>
        <button onClick={this.props.data}>logOut</button>
      </>
    )
  }
}
