import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("Peter");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("Painiting");

  const displayPerson = () => {
    setName("smith");
    setAge(30);
    setHobby("Dance");
  };

  return (
    <>
      <h2>useState object example</h2>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>hobby {hobby}</p>
      <button onClick={displayPerson} className="btn">
        Display Person
      </button>
    </>
  );
};

export default UseStateObject;
