import React, { Component } from 'react'

export default class App extends Component {
  render() {
    const styleBtn = {
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px',
      margin: '10px'
    }
    return (
      <>
        <h1>Hello Styling in React</h1>
        <button style={styleBtn}>click me</button>
      </>
    )
  }
}
