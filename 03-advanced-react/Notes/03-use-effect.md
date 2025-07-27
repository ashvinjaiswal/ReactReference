# useEffect

useEffect is a hook in React that allows you to perform side effects in function components.There is no need for urban dictionary - basically any work outside of the component. Some examples of side effects are: subscriptions, fetching data, directly updating the DOM, event listeners, timers, etc.

- useEffect hook
- accepts two arguments (second optional)
- first argument - cb function
- second argument - dependency array
- by default runs on each render (initial and re-render)
- cb can't return promise (so can't make it async)
- if dependency array empty [] runs only on initial render

- **Import:**

  - You need to import it from React, just like `useState`.

  <!-- end list -->

  ```jsx
  import React, { useEffect } from "react";
  ```

- **Basic Usage:**

  - `useEffect` takes two arguments:
    1.  A **callback function** (the side effect code).
    2.  An optional **dependency array**.
  - By default, with no dependency array, the callback function runs on the initial render and after every subsequent re-render.

  <!-- end list -->

  ```jsx
  useEffect(() => {
    console.log("Hello from useEffect");
  }); // No dependency array
  ```

- **The Dependency Array:**

  - This is where the magic happens. You use the dependency array to control when the `useEffect` callback runs.
  - If you provide an **empty array** (`[]`), the callback will only run **once**, on the initial render (when the component mounts).
  - This is the biggest difference from a regular function call in the component body, which runs on every render.

  <!-- end list -->

  ```jsx
  useEffect(() => {
    console.log("Runs only on initial render");
  }, []); // Empty dependency array
  ```

  - If you put state or props inside the dependency array, the useEffect will run when those values change.

- **Async/Await inside useEffect:**

  - You **cannot** make the `useEffect` callback function itself `async`.
  - This is because `async` functions return a `Promise`, and `useEffect` expects to return a cleanup function (we'll cover that later).
  - However, you **can** define and call an `async` function _inside_ the `useEffect` callback.

  <!-- end list -->

  ```jsx
  useEffect(() => {
    const fetchData = async () => {
      // ... async logic here
    };
    fetchData();
  }, []);
  ```

- **Key Takeaways:**

  - `useEffect` is a hook that allows you to run side-effect code.
  - It runs after the component renders.
  - The dependency array is crucial for controlling its execution. An empty array means it runs only once.
  - Don't make the callback `async` directly, but you can use `async` functions inside of it.

**useEffect: Understanding Component Rendering**

- **Objective:**

  - To understand how code within a React component runs.
  - To demonstrate the need for `useEffect` to control when code executes.

- **Scenario:**

  - A simple component with a `value` state, a button to increment it, and a `sayHello` function.

- **Component Structure:**

  ```jsx
  import React, { useState } from "react";

  const UseEffectBasics = () => {
    const [value, setValue] = useState(0);

    const sayHello = () => {
      console.log("hello there");
    };

    sayhello();

    const handleClick = () => {
      setValue(value + 1);
    };

    return (
      <div>
        <h1>Value: {value}</h1>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
  };

  export default UseEffectBasics;
  ```

- **Component Execution:**

  - **Initial Render (Mounting):**
    - When the component is first rendered, the `sayHello` function is defined and invoked.
    - The component's JSX is rendered to the DOM.
  - **Re-renders:**
    - Every time the `value` state changes (button click), the component re-renders.
    - During each re-render, the `sayHello` function is re-defined and re-invoked.
    - This means that the code inside the component, including function definitions and invocations, runs on every render and re-render.

- **Infinite Loop Caution:**

  - Updating state within a function that is called on every render can lead to an infinite loop.
  - Example:

    ```jsx
    const sayHello = () => {
      console.log("hello there");
      setValue(value + 1); // Triggers re-render, creating infinite loop
    };

    sayHello();
    ```

  - This happens because:
    - State update triggers a re-render.
    - Re-render invokes the function.
    - The function updates state, triggering another re-render, and so on.

- **Why useEffect?**

  - `useEffect` allows you to control when code runs within a component.
  - It enables you to perform side effects (e.g., data fetching, DOM manipulation, subscriptions) only when specific dependencies change.
  - This prevents unnecessary code execution and infinite loops.
  - The instructor will cover `useEffect` in the next video.

- **Key Points:**
  - Code inside a React component runs on every render and re-render.
  - Updating state within a function called on every render can cause an infinite loop.
  - `useEffect` provides control over when code executes, preventing such issues.
