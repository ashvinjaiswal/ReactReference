import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: "24",
    hobby: "Painting",
  });

  const displayPerson = () => {
    setPerson({ name: "Smith", age: 25, hobby: "Music" });

    // be careful, don't overwrite
    // setPerson({ name: 'susan' });

    // copy the property and override specific propertey
    // setPerson({ ...person, name: 'susan' });
  };

  return (
    <>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <p>{person.age}</p>
      <p>hobby {person.hobby}</p>
      <button onClick={displayPerson} className="btn">
        Display Person
      </button>
    </>
  );
};

export default UseStateObject;
