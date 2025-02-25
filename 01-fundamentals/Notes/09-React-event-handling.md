**Handling Events in React**

- **Importance:** Events make React applications interactive. They allow the app to respond to user actions (clicks, form submissions, input changes, etc.).

- **Vanilla JS vs. React:** The concept is similar to vanilla JavaScript event handling, but the syntax is different.

- **Vanilla JS:**

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  // access event object
  // do something when event fires
});
```

- **React:**

```javascript
const EventExamples = () => {
  const handleButtonClick = () => {
    alert("handle button click");
  };
  return (
    <section>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};
```

- **Key Differences:**

  - **Camel Case:** React uses camel case for event names (e.g., `onClick`, `onSubmit`, `onChange`).
  - **JSX:** Events are handled directly within JSX elements.
  - **Function References:** You pass a _reference_ to a function as the event handler, not a string with code to execute.

- **Common Events:**

  - `onClick`: Click events.
  - `onSubmit`: Form submission.
  - `onChange`: Input value changes.

- **Event Object:** Event handlers receive an event object as an argument. This object contains information about the event (e.g., target element, value, etc.).

- **Example:**

  ```javascript
  function EventExamples() {
    const handleFormInput = (event) => {
      console.log("Input Value:", event.target.value);
    };

    const handleButtonClick = () => {
      alert("Button clicked!");
    };

    return (
      <section>
        <form>
          <h2>Typical Form</h2>
          <input
            type="text"
            onChange={handleFormInput}
            name="example"
            value="examples"
            style={{ margin: "1rem" }}
          />
        </form>
        <button onClick={handleButtonClick}>Click me</button>
      </section>
    );
  }
  ```

#### Event Object and Form Submission

```js
const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e);
    // e.target - element
    console.log(`Input Name : ${e.target.name}`);
    console.log(`Input Value : ${e.target.value}`);
    // console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <section>
      {/* add onSubmit Event Handler */}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        {/* add button with type='submit' */}
        <button type="submit">submit form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};
```

- alternative approach

```js
<button type="submit" onClick={handleFormSubmission}>
  submit form
</button>
```

- **Key Points:**

  - **Event Names:** Use camel case for event names (e.g., `onClick`, not `onclick`).
  - **Function References:** Pass a function _reference_ to the event handler (e.g., `{handleClick}`, not `{handleClick()}`).
  - **Event Object:** The event object provides access to event details.
  - **`this` Context:** Be mindful of the `this` context in event handlers, especially in class components. Arrow functions often help with this.
  - **Many Events:** React supports a wide range of events. Refer to the React documentation for a complete list. Don't try to memorize them all; look them up as needed.

- **Component Setup:** The instructor recommends setting up components with a basic return statement first to ensure they are rendering correctly before adding complex logic. This helps avoid debugging issues related to incorrect component setup.

- **Inline Styles (Sometimes):** The instructor uses inline styles in the example for the input, but generally recommends using external stylesheets for better maintainability.

- **Event Handler Naming:** It's a common convention to start event handler function names with `handle` (e.g., `handleButtonClick`, `handleInputChange`). This is a good practice for code readability.

**Event Object in React**

- **Accessing the Event Object:**

  - In React event handlers, you have access to an event object, just like in vanilla JavaScript.
  - This object contains information about the event that occurred.
  - It is passed as the first argument to the event handler function.
  - You can name the event object parameter whatever you like (e.g., `event`, `e`, `evt`).

- **Key Properties and Methods:**

  - `event.target`:
    - This property refers to the HTML element that triggered the event.
    - It allows you to access the element's properties and attributes.
  - `event.target.name`:
    - This property retrieves the value of the `name` attribute of the target element.
    - Useful for identifying which input field triggered the event.
  - `event.target.value`:
    - This property retrieves the current value of the target element (e.g., the text entered in an input field).
    - Essential for collecting user input.
  - `event.preventDefault()`:
    - This method prevents the default behavior of an event.
    - Commonly used to prevent form submissions from reloading the page.

- **Example (Input Change):**

  ```javascript
  function EventExamples() {
    const handleFormInput = (event) => {
      console.log("Event:", event);
      console.log("Name:", event.target.name);
      console.log("Value:", event.target.value);
    };

    return <input type="text" name="product" onChange={handleFormInput} />;
  }
  ```

- **Example (Form Submission):**

  ```javascript
  function EventExamples() {
    const handleFormSubmission = (event) => {
      event.preventDefault(); // Prevent default form submission
      console.log("Form submitted!");
    };

    return (
      <form onSubmit={handleFormSubmission}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    );
  }
  ```

- **Important Notes:**

  - `event.preventDefault()` is crucial for handling form submissions in React. Without it, the browser will reload the page.
  - `event.target` provides a way to access the specific element that triggered an event, which is essential for collecting user input and performing actions based on the event.
  - When troubleshooting form submission, make sure the focus is on an input element when you press enter.
  - Using a button with type="submit" is the most robust way to submit a form in react.

### **Anonymous Functions in React Event Handlers**

- **Concept:**

  - In vanilla JavaScript, you can pass anonymous functions directly to event listeners.
  - React allows the same pattern: you can pass anonymous functions directly as event handlers in JSX.

- **Syntax:**

  - Use arrow functions (`() => {}`) or traditional anonymous functions (`function() {}`) directly within the event handler attribute.

- **Example (onClick):**

  ```jsx
  <button onClick={() => console.log("Button clicked!")}>Click me</button>
  ```

- **Example (onChange):**

  ```jsx
  <input type="text" onChange={(event) => console.log(event.target.value)} />
  ```

- **Key Points:**

  - **Event Object Access:**
    - Even with anonymous functions, you still have access to the event object.
    - It's passed as the first argument to the anonymous function.
  - **Readability and Maintainability:**
    - For simple event handling logic (e.g., a single `console.log` or a short action), anonymous functions can be concise and readable.
    - For more complex logic, it's generally better to create separate named functions to improve code organization and maintainability.
  - **No Right or Wrong:**
    - The choice between anonymous functions and named functions is often a matter of personal preference and code style.
    - If the function contains many lines of code, it is better to set up a seperate function.
  - **When to Use:**
    - Use anonymous functions for short, simple event handlers.
    - Use named functions for longer, more complex event handlers, or when you need to reuse the function.

- **Trade-offs:**

  - **Anonymous Functions:**
    - Pros: Concise for simple tasks.
    - Cons: Can make code harder to read and maintain for complex logic.
  - **Named Functions:**
    - Pros: Improve code organization and maintainability.
    - Cons: Can add more code overhead for simple tasks.
