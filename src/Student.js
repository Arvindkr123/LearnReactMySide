import React from "react";

// functional based props
// const Student = (props) => {
//   return (
//     <div>
//       <h1>Hello your name {props.name}</h1>
//       <h1>Your roll : {props.roll}</h1>
//     </div>
//   )
// }

// class based props
class Student extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello your name {this.props.name}</h1>
        <h1>Your roll : {this.props.roll}</h1>
      </div>
    );
  }
}

export default Student;
