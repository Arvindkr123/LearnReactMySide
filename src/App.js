import React from "react";
import Student from "./Student";
function App() {
  const ele = 'Arvind Kumar'
  const obj = {
    firstName :'Ram Kumar'
  }

  function show(){
    console.log('I\'m show function')
  }
  return (
    <div>
      <h1>Name is {ele}</h1>
      <h1>10 + 20 = {10 + 20}</h1>
      <h1>obj firstName {obj.firstName}</h1>
      <h1>{show()}</h1>
    </div>
  );
}

export default App;
