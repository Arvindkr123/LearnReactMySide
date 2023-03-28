import React, { Component } from 'react'


// State without constructor
// class Student extends Component {
//   state ={
//     name :"Arvind",
//     roll:this.props.roll
//   }
//   render() {
//     return (
//       <div>
//         <h1>hello {this.state.name} and your roll no is {this.state.roll}</h1>
//       </div>
//     )
//   }
// }

// state with constructor
class Student extends Component {
  constructor(props){
    super(props);
    this.state ={
      name :"Arvind",
      roll:this.props.roll
    }

  }
  render() {
    return (
      <div>
        <h1>hello {this.state.name} and your roll no is {this.state.roll}</h1>
      </div>
    )
  }
}

export default Student;
