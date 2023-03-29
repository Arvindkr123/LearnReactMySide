import React, { Component } from 'react'

export default class Marks extends Component {
  render() {
    console.log('Marks rendered called')
    return (
      <div>
        <h1>marks {this.props.marks}</h1>
      </div>
    )
  }
}
