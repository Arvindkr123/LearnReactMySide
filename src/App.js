import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(50);
  useEffect(() => {
    console.log("UseEffect rendered");
  },[count]);
  return (
    <>
      <h1>count {count}</h1>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <h1>count1 {count1}</h1>
      <button onClick={() => setCount1(count1 - 1)}>Decrease Count</button>
    </>
  );
};

export default App;
