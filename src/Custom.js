import { useState } from "react";

function useCustomCounter() {
  const [count, setCount] = useState(0);
  const handleIncremnet = () => {
    setCount(count + 1);
  };

  return {
    count,
    handleIncremnet,
  };
}

export default useCustomCounter;
