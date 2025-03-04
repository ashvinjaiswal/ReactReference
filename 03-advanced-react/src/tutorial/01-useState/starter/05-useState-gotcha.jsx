import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
      <h2>Increment counter {count}</h2>
      <button className="btn" onClick={handleClick}>
        Increment
      </button>
    </>
  );
};

export default UseStateGotcha;
