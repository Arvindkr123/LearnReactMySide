import React from "react";
import pt from 'prop-types'

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
Student.propTypes = {
    name:pt.string.isRequired,
    roll:pt.number.isRequired
}

Student.defaultProps = {
    name : 'Akshita'
};

export default Student;
