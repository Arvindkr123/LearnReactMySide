import React from 'react'
import useCustomCounter from './Custom';

const App = () => {
  const data = useCustomCounter();
  const data1 = useCustomCounter();
  return (
    <>
    <h1>count {data.count}</h1>
    <button type='button' onClick={data.handleIncremnet}>increment count</button>
    <h1>count1 {data1.count}</h1>
    <button type='button' onClick={data1.handleIncremnet}>increment count</button>
    </>
  )
}

export default App;

