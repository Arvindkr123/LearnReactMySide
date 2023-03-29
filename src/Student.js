import React, { Component } from 'react'
import Marks from './Marks'

export default class Student extends Component {
  render() {
    console.log('Student Rendered called')
    return (
      <div>
        <h2>Hello , {this.props.name}</h2>
        <Marks marks={101}/>
      </div>
    )
  }
}

