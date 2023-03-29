import React, { Component } from 'react'

export default class Guest extends Component {
  render() {
    return (
      <>
        <h1>Welcome Guest</h1>
        <button onClick={this.props.data}>login</button>
        <button>SignUp</button>
      </>
    )
  }
}
