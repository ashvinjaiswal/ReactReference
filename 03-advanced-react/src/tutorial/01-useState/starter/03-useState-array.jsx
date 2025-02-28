import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id != id));
  };

  const removeAllPerson = () => {
    setPeople([]);
  };
  return (
    <div>
      {people.map(({ id, name }) => {
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              className="btn"
              onClick={() => {
                removePerson(id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}

      <button
        style={{ marginTop: "1rem" }}
        className="btn"
        onClick={() => {
          removeAllPerson();
        }}
      >
        Clear All
      </button>
    </div>
  );
};

export default UseStateArray;
