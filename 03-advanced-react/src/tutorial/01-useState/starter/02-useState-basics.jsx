import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState());
  // console.log(useState('jo koy'));
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    // be careful, we can set any value
    // setCount('pants');
  };

  return (
    <>
      <h2>button is clicked {count}</h2>
      <button className="btn" onClick={handleClick}>
        Increase count
      </button>
    </>
  );
};

export default UseStateBasics;
