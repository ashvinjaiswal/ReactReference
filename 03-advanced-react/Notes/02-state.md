**Why useState is Needed: A Challenge**

- **Objective:**

  - To demonstrate why directly modifying a variable in a React component does not trigger a re-render and update the UI.
  - To introduce the need for the `useState` hook.

- **Challenge:**

  - Create a `count` variable within a React component.
  - Display the value of `count` in the component's JSX.
  - Add a button to the component.
  - Implement an `onClick` event handler for the button that increments the `count` variable.
  - Observe the behavior of the component in the browser.

- **Expected Outcome:**

  - The `count` variable will increment when the button is clicked.
  - However, the displayed value in the browser will not update.

- **Code Example (Error Example):**

  ```jsx
  // ErrorExample.jsx (Starter)
  import React from "react";

  const ErrorExample = () => {
    let count = 0;

    const handleClick = () => {
      count = count + 1;
      console.log(count); // Correctly logs the updated count
    };

    return (
      <div>
        <h2>{count}</h2>
        <button type="button" onClick={handleClick} className="btn">
          Increase
        </button>
      </div>
    );
  };

  export default ErrorExample;
  ```

- **Explanation:**

  - The `count` variable is declared using `let`, allowing it to be reassigned.
  - The `handleClick` function increments the `count` variable and logs the updated value.
  - While the `count` variable is correctly updated in the JavaScript code, React does not automatically re-render the component when the variable's value changes.
  - React needs to know when data changes so it can update the DOM.
  - This is the problem that the `useState` hook solves.

- **Key Takeaway:**
  - Directly modifying variables in React components does not trigger re-renders.
  - The `useState` hook is necessary to manage state and trigger re-renders when data changes.

**Using the useState Hook**

- **Purpose:**

  - The `useState` hook allows React components to manage state and trigger re-renders when the state changes.

- **Importing useState:**

  - `import { useState } from 'react';` (named import)
  - `import React from 'react'; React.useState();` (import React then use dot notation)

- **Using useState:**

  - `useState()` is a function that takes an initial value as an argument.
  - It returns an array with two elements:
    - The current state value.
    - A function to update the state value.

- **Array Destructuring:**

  - The most common way to use `useState` is with array destructuring:
    - `const [count, setCount] = useState(0);`
    - `count`: The current state value (initialized to 0).
    - `setCount`: The function to update the `count` state.

- **Initial Value:**

  - The argument passed to `useState()` is the initial state value.
  - It can be any data type (number, string, array, object, etc.).

- **Updating State:**

  - The `setCount` function is used to update the state value.
  - When `setCount` is called, React re-renders the component, and the updated state value is reflected in the UI.
  - `setCount` can take any value, so be careful to pass the correct data type.

- **Example:**

```js
import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState());
  // console.log(useState('jo koy'));
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  const [count, setCount] = useState(0);
  const handleClick = () => {
    // console.log(count)
    setCount(count + 1);
    // be careful, we can set any value
    // setCount('pants');
  };
  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button className="btn" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default UseStateBasics;
```

- **Key Points:**
- `useState` triggers re-renders when the state is updated.
- The state value is preserved between re-renders.
- The `setCount` function can accept any value, so type consistency is important.
- Naming convention is `[state, setState]`.

## **Render and Re-render in React**

- **Initial Render (Mounting):**

  In a React application, the initial render is the first time that the component tree is rendered to the DOM. It happens when the application first loads, or when the root component is first rendered. This is also known as "mounting" the components.

  - The initial render occurs when a React component is first added to the DOM.
  - This typically happens when the application loads.
  - It's also known as "mounting" the component.
  - Essentially it is the first time the component is shown on the screen.

- **Re-render:**

  Re-renders, on the other hand, happen when the component's state or props change, and the component needs to be updated in the DOM to reflect these changes. React uses a virtual DOM to optimize the process of updating the actual DOM, so that only the necessary changes are made.

  - Re-renders happen when a component's state or props change.
  - Re-renders also occur when a parent component re-renders.
  - Re-renders are how React updates the UI to reflect changes in data.
  - When the parent element re-renders, even if the component's state or props have not changed for child component.

- **Example (useState and Re-render):**

  ```jsx
  import React, { useState } from "react";

  const RenderExample = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount(count + 1); // Triggers a re-render
    };

    console.log("Component rendered"); // Log on each render/re-render

    return (
      <div>
        <h4>Count: {count}</h4>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
  };

  export default RenderExample;
  ```

  - In this example:
    - The initial render happens when the `RenderExample` component is first added to the DOM.
    - Each time the "Increment" button is clicked, `setCount` is called, which updates the `count` state and triggers a re-render.
    - The console log will show on each render and re-render.

- **Key Points:**
  - Understanding render and re-render is crucial for understanding how React updates the UI.
  - `useState` is a common way to trigger re-renders by changing the state.
  - Parent components can cause child components to re-render.
  - There is a difference between mounting, and updating.

## **Rules of Hooks**

- **Naming Convention:**

  - All hooks must begin with the prefix `use`.
  - This applies to both built-in React hooks (e.g., `useState`, `useEffect`) and custom hooks.

- **Component Requirements:**

  - Hooks can only be called inside React function components.
  - React components must be uppercase.

- **Hook Placement:**

  - Hooks must be called at the top level of the component body.
  - They cannot be called inside loops, conditions, or nested functions.
  - Hooks must be called in the same order on every render.
  - Invalid hook call errors will occur if hooks are called outside of the component body.

- **Conditional Hook Calls:**

  - Hooks should not be called conditionally.
  - Avoid placing hooks inside `if` statements, `for` loops, or other conditional logic.
  - This ensures that hooks are called in the same order on every render.

- **Asynchronous State Updates:**

  - State update functions (e.g., `setCount` from `useState`) do not update the state immediately.
  - State updates are batched and processed asynchronously.
  - Do not rely on the state being updated immediately after calling a state update function.
  - Logging the state immediately after a state update will show the previous state.

- **Key Points:**
  - These rules are essential for ensuring that hooks work correctly.
  - Violating these rules can lead to unexpected behavior and errors.
  - The rules are to maintain the internal workings of how react hooks function.

## **useState with Arrays: Challenge**

- **Objective:**

  - To use the `useState` hook to manage an array of data.
  - To render the array data in the UI.
  - To implement functions to clear the array and remove individual items.

Setup Challenge :

- import data
- setup a state value
  - people - default value equal to data
- display list(people) in the browser

- create two functions

  - one that removes single item from the list
  - one that clears entire list

- **Steps:**

  1.  **Import Data:**

      - Import the `data` array from `data.js` into the `UseStateArray.jsx` component using ES6 modules.
      - `import data from './data';`

  2.  **Set Up State:**

      - Use the `useState` hook to create a state variable named `people` and a function named `setPeople` to update it.
      - Initialize the `people` state with the imported `data` array.
      - `const [people, setPeople] = React.useState(data);`

  3.  **Render the List:**

      - Use the `map()` method to iterate over the `people` array and render each item in the UI.
      - Destructure the `id` and `name` properties from each item.
      - Use a `<div>` element with a unique `key` prop for each item.
      - Display the `name` property in a heading element.
      - Example Code:

```js
import React from "react";
import { data } from "../../../data";
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => setPeople([])}
      >
        clear items
      </button>
    </div>
  );
};

export default UseStateArray;
```

4.  **Implement Clear List Function:**

    - Create a function that calls `setPeople` with an empty array (`[]`) to clear the list.

5.  **Implement Remove Item Function:**

    - Create a function that takes an `id` as an argument.
    - Use the `filter()` method to create a new array that excludes the item with the given `id`.
    - Call `setPeople` with the new filtered array.

6.  **Add Buttons:**
    - Add a button to clear all items.
    - Add a button to each item that will remove that specific item.

- **Key Points:**
  - The `useState` hook is used to manage the array state.
  - The `map()` method is used to render the array data.
  - The `filter()` method is used to create a new array with filtered items.
  - Unique keys are important when rendering lists.

## **useState with Objects: Initial Setup**

Setup Challenge :

- setup three state values
  - name(string)
  - age(number)
  - hobby(string)
- render in the browser
- create a button
  - setup a function
    - update all three state values
- as a result once the user clicks the button,
  new person is displayed in the browser

- **Objective:**

  - To demonstrate the need for using objects with `useState` when managing related state values.
  - To set up individual state values and update them with a button click.

- **Steps:**

  1.  **Import Component:**

      - Import the `UseStateObject.jsx` component into `App.jsx`.
      - The file is located in the `04-useState-object/starter/` folder.

  2.  **Set Up Individual State Values:**

      - Use the `useState` hook to create three separate state variables: `name`, `age`, and `hobby`.
      - Initialize them with default values (e.g., "Peter", 24, "read book").
      - Example code:

        ```jsx
        import React, { useState } from "react";

        const UseStateObject = () => {
          const [name, setName] = useState("Peter");
          const [age, setAge] = useState(24);
          const [hobby, setHobby] = useState("read book");
          // ...
        };
        ```

  3.  **Render State Values:**

      - Use JSX to display the current values of `name`, `age`, and `hobby` in the component.
      - Example Code:

        ```jsx
        return (
          <React.Fragment>
            <h3>Name: {name}</h3>
            <h4>Age: {age}</h4>
            <h4>Enjoys: {hobby}</h4>
            {/* ... */}
          </React.Fragment>
        );
        ```

  4.  **Create Update Function:**

      - Create a function (e.g., `displayPerson`) that updates all three state values with new values (e.g., "John", 28, "scream at the computer").
      - Example Code:

        ```jsx
        const displayPerson = () => {
          setName("John");
          setAge(28);
          setHobby("scream at the computer");
        };
        ```

  5.  **Add Button:**

      - Add a button to the component that calls the update function when clicked.
      - Example Code:

        ```jsx
        <button className="btn" onClick={displayPerson}>
          Show John
        </button>
        ```

- **Key Points:**
  - This example demonstrates that managing multiple related state values with individual `useState` calls can become cumbersome.
  - Updating multiple state values requires calling multiple `set` functions.
  - React fragments are used to return multiple JSX elements.

**React State Updates and Re-renders: Auto-Batching**

- **Question:**

  - If multiple state update functions (`set...`) are called within the same event handler, how many re-renders will occur?

- **Answer:**

  - Only one re-render will occur.

- **Explanation:**

  - React uses a technique called **auto-batching** to group multiple state updates into a single re-render.
  - This optimization improves performance by reducing the number of unnecessary re-renders.
  - Even if you have multiple `set...` calls in an event handler, React will batch them together and perform a single re-render.

- **React 18 Changes:**

  - Prior to React 18, there were cases where multiple state updates in the same event handler might have triggered multiple re-renders.
  - With React 18, auto-batching is more consistent, and multiple state updates within the same handler will always result in a single re-render.

- **Key Points:**
  - Auto-batching is a performance optimization.
  - It reduces the number of re-renders, leading to smoother UI updates.
  - In React 18, auto-batching is applied more broadly.
  - This optimization happens behind the scenes, and the developer does not need to do anything to enable it.

**Refactoring useState with Objects**

- **Benefits of Object State:**

  - Reduces the number of `useState` calls, simplifying code.
  - Makes it easier to manage related state values.
  - Improves code readability and maintainability.

- **Refactoring Process:**

  1.  **Create Object State:**
      - Replace individual `useState` calls with a single `useState` call that initializes an object.
      - Example:
        ```jsx
        const [person, setPerson] = useState({
          name: "Peter",
          age: 24,
          hobby: "read books",
        });
        ```
  2.  **Update Rendering:**
      - Update JSX to access object properties (e.g., `person.name`, `person.age`).
  3.  **Update Update Function:**
      - Modify the update function to call `setPerson` with a new object.
      - To avoid overwriting existing properties, use the spread operator (`...person`) to copy the current state and then override specific properties.
      - Example:
        ```jsx
        const displayPerson = () => {
          setPerson({
            ...person, //copy the old object.
            name: "Susan", //override the name property.
          });
        };
        ```
  4.  **Gotchas:**
      - Be mindful of passing incorrect data types to `setPerson`. Passing a string instead of an object will break the component.
      - If you only provide some of the object properties when updating the state, you will lose the other properties.
      - Always spread the old object when you want to update only some of the properties.

- **Example Code:**

  ```jsx
  import React, { useState } from "react";

  const UseStateObject = () => {
    const [person, setPerson] = useState({
      name: "Peter",
      age: 24,
      hobby: "read books",
    });

    const displayPerson = () => {
      setPerson({
        ...person,
        name: "Susan",
      });
    };

    return (
      <>
        <h3>Name: {person.name}</h3>
        <h4>Age: {person.age}</h4>
        <h4>Enjoys: {person.hobby}</h4>
        <button className="btn" onClick={displayPerson}>
          Show Susan
        </button>
      </>
    );
  };

  export default UseStateObject;
  ```

- **Key Points:**
  - Using object state can simplify state management for related values.
  - The spread operator is crucial for preserving existing state when updating object properties.
  - Be aware of potential gotchas when updating object state.
  - This is not a solution for every use case.

**Note useState Set Function: Asynchronous Updates**

- **Objective:**

  - To demonstrate that state updates in React are asynchronous.
  - To highlight the potential issue of relying on the immediate availability of the updated state value.

- **Challenge:**

  - Create a `count` state variable using `useState` initialized to 0.
  - Add a button that increments the `count` state by 1 using the `setCount` function.
  - Log the `count` state value to the console immediately after calling `setCount`.
  - Observe the difference between the displayed value and the logged value.

- **Code Example:**

  ```jsx
  import React, { useState } from "react";

  const UseStateGotcha = () => {
    const [value, setValue] = useState(0);

    const handleClick = () => {
      setValue(value + 1);
      console.log(value); // Log the value immediately after setValue
    };

    return (
      <div>
        <h1>{value}</h1>
        <button className="btn" onClick={handleClick}>
          Increase
        </button>
      </div>
    );
  };

  export default UseStateGotcha;
  ```

- **Explanation:**

  - When the button is clicked, `setValue` is called to update the `value` state.
  - Immediately after, `console.log(value)` logs the current value of `value`.
  - The logged value will be the _previous_ value of `value`, not the updated one.
  - This is because `setValue` does not update the state synchronously. React batches state updates for performance reasons.
  - Therefore, the console log will show the old value, until the next render.

- **Key Takeaways:**
  - State updates in React are asynchronous.
  - Do not rely on the immediate availability of the updated state value after calling the `set` function.
  - If you need to perform an action based on the updated state, do it in a `useEffect` hook that depends on the state value, or by using the functional update form of the set function.
