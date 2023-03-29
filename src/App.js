import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <>
        {this.props.arr.map((num, i)=>{
          return <li key={i}>{num}</li>
        })}
      </>
    )
  }
}
