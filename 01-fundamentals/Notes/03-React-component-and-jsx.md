## React Component

[Component in details](https://react.dev/learn/your-first-component)

[Importing and Exporing Component](https://react.dev/learn/importing-and-exporting-components)

**Key Concepts:**

- **Components are Functions:** React components are essentially JavaScript functions (either regular function or arrow function).
- **Capitalization:** Component names must start with a capital letter (e.g., `Greeting`, not `greeting`).
- **JSX Return:** Components must return HTML (technically JSX) from the function. Even an empty HTML snippet is valid, though it will render nothing.

- **Exporting Components:** Components need to be exported (using ES6 modules) to be used elsewhere in the application.
- **Root Component:** Every React app has at least one root component, which is injected into the `index.html`'s `root` div.

**Setting up the Root Component (in `index.js`):**

1.  **Import React and ReactDOM:**
    ```javascript
    import React from "react";
    import ReactDOM from "react-dom/client";
    ```
2.  **Create the Root:**
    ```javascript
    const root = ReactDOM.createRoot(document.getElementById("root"));
    ```
3.  **Render the Component:**
    ```javascript
    root.render(<Greeting />); // Or <Greeting></Greeting> - self-closing is required
    ```

#### First Component in Detail

- capital letter
- must return something
- JSX syntax (return html)
  - to make our lives easier
  - calling function under the hood

index.js

```js
const Greeting = () => {
  return React.createElement("h2", {}, "hello world");
};
```

```js
function Greeting() {
  return (
    <div>
      <h2>hello world</h2>
    </div>
  );
}

const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "hello world")
  );
};
```

#### JSX Rules

Each React component is a JavaScript function that may contain some markup that React renders into the browser. React components use a syntax extension called JSX to represent that markup. JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information.

JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array.

1. return single element (one parent element)

- semantics section/article
- Fragment - let's us group elements without adding extra nodes

Return statements can be written all on one line, as in this component:

```javascript
return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
```

But if your markup isn’t all on the same line as the return keyword, you must wrap it in a pair of parentheses:

```javascript
return (
  <div>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
);
```

```js
return <React.Fragment>...rest of the return</React.Fragment>;

// shorthand

return <>...rest of the return</>;
```

2. camelCase property naming convention

```js
return (
  <div tabIndex={1}>
    <button onClick={myFunction}>click me</button>
    <label htmlFor='name'>Name</label>
    <input readOnly={true} id='name' />
  </div>
)
// in html
<div tabindex="1">
    <button onclick="myFunction()">click me</button>
    <label for='name'>Name</label>
    <input readonly id='name' />
</div>
```

- className instead of class

```js
return <div className="someValue">hello</div>;
```

3. close every element

```js
return <img />;
// or
return <input />;
```

- formatting
  - opening tag in the same line as return or ()

```js
function Greeting() {
  return (
    <>
      <div className="someValue">
        <h3>hello people</h3>
        <ul>
          <li>
            <a href="#">hello world</a>
          </li>
        </ul>
      </div>
      <h2>hello world</h2>
      <input type="text" name="" id="" />
    </>
  );
}
```

#### Nest Components

```js
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
  return <p>this is my message</p>;
};
```

**Important Considerations:**

- **JSX:** JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. it is a bit stricter then html and can display dynamic information.
- **Self-Closing Tags:** React components must be self-closed (e.g., `<Greeting />`).
- **ES6 Modules:** `import` and `export` statements are used for modular JavaScript.
- **React 18 Changes:** React 18 introduced `ReactDOM.createRoot` instead of `ReactDOM.render`.
- **Troubleshooting:** If changes to `index.js` don't reflect in the browser, restart the development server (`Ctrl+C` then `npm start`).
- **Casing is Crucial:** Incorrect casing (e.g., `greeting` instead of `Greeting`) will cause errors.

**Focus:** The most important takeaway is that a React component is a function that returns JSX. The `index.js` setup code is mostly boilerplate that you'll rarely need to modify after the initial setup.
