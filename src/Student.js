import React, { Component } from 'react'

class Student extends Component {
  componentDidMount(){
    console.log('Student mount')
  }
  render() {
    console.log('Stundent rendered')
    return (
      <div>
        <h1>Hello Student Component mount</h1>
      </div>
    )
  }
}

export default Student;
