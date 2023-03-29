import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("Arvind Kumar");
  const [roll, setRoll] = useState(1);
  const handleClick = ()=>{
    setName('Krishna Thakur');
    setRoll(2);
  }
  return (
    <div>
      <h1>UseState hoock in react </h1>
      <h1>My name is {name} and your roll number {roll}</h1>
      {/* <button onClick={()=>setName('Krishna Thakur')}>Update Name</button> */}
      <button onClick={handleClick}>Update Name</button>
    </div>
  );
};

export default App;
