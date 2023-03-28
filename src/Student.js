import React from 'react'

const Student = (props) => {
  return (
    <div>
      <h1>Hello your name {props.name}</h1>
      <h1>Your roll : {props.roll}</h1>
    </div>
  )
}

export default Student;
