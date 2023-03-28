import React, { Component } from "react";

// export class Student extends Component {
//   // handleEvent(){
//   //   console.log('button clicked', this)
//   // }
//   handleEvent = ()=> {
//     console.log('button clicked', this)
//   }
//   render() {
//     return (
//       <div>
//         <h1>Event called</h1>
//         <button onClick={()=>this.handleEvent()}>Click me</button>
//       </div>
//     );
//   }
// }

class Student extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:'Arvind Kumar',
      roll:this.props.roll
    }
    this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent(){
    console.log('button clicked', this)
  }
  render(){
    return(
      <div>
        <h1>hello {this.state.name} and your roll no is {this.state.roll}</h1>
        <button onClick={this.handleEvent}>click me</button>
      </div>
    )
  }
}

export default Student;
