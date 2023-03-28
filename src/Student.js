import React from 'react'

const Student = (props) => {
  function handleEvent(e){
    e.preventDefault();
    console.log('button clicked')
  }
  return (
    <div>
      <h1>Your name is Arvind and roll no is {props.roll}</h1>
      <button onClick={handleEvent}>Click Me</button>
      <a href='https://www.google.com' onClick={handleEvent}>Click Me</a>
    </div>
  )
}

export default Student;
