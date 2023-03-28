import React, { Component } from "react";

// export class Student extends Component {
//   state ={
//     id :1,
//     name :'Arvind'
//   }
//   handleEvent =(id, e)=>{
//     // console.log('button clicked',id)
//     console.log(id,e)
//   }

//   handleEventArg=(e)=>{
//     this.handleEvent(this.state.id, e);
//   }
//   render() {
//     return (
//       <div>
//         <h1>hello {this.state.name}</h1>
//         <button onClick={this.handleEventArg}>Update</button>
//       </div>
//     )
//   }
// }
export class Student extends Component {
  state = {
    id: 1,
    name: "Arvind",
  };
  handleEvent = (id, e) => {
    // console.log('button clicked',id)
    console.log(id, e);
  };

  render() {
    return (
      <div>
        <h1>hello {this.state.name}</h1>
        {/* <button
          onClick={(e) => {
            this.handleEvent(e,this.state.id);
          }}
        > */}
        <button onClick={this.handleEvent.bind(this, this.state.id)}>
          Update
        </button>
      </div>
    );
  }
}

export default Student;
