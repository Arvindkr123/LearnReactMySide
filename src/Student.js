import React from 'react'

// const Student = (props) => {
//   return (
//     <div>
//       <h1>hello Arvind {props.children}</h1>
//     </div>
//   )
// }

class Student extends React.Component{
  render(){
    return(
      <div>
        <h1>this.props.children</h1>
      </div>
    )
  }
}

export default Student;
