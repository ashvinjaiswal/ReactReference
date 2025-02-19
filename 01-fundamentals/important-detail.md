# **React**

- React is a JavaScript library for building user interfaces. UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components. From web sites to phone apps, everything on the screen can be broken down into components.
- Developed and maintained by Meta (formerly Facebook).
- Competitors include Angular, Vue, and Svelte.

**Key Concept: Components**

- React applications are built from isolated pieces of UI called components.
- React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app.
- Components are independent, reusable pieces of the user interface.
- Can range from simple elements (buttons, headings) to complex sections.
- Breaking down UI into components improves code organization and maintainability.

**Benefits of Using Components**

- **Independent:** Changes in one component don't affect others.
- **Reusable:** Components can be used multiple times throughout the application.
- **Maintainable:** Easy to update and modify component logic in a single place.
- **Performance:** React uses a virtual DOM, optimizing updates and improving speed.

**Example: Twitter**

- **Sidebar Links:** Each link with an icon and text can be a separate component.
- **Feed Posts:** Each post (with photo, name, handle, etc.) can be a component.
- Components make it easier to manage and update the structure of these repeating elements.

**In Summary**

React simplifies UI development by allowing developers to build and reuse reusable components.

## **Setting up a React App with Create React App**

- **Prerequisites:**

  - Node.js and npm (Node Package Manager) installed on your system.

- **Create React App:**

  - A command-line tool that sets up the initial project structure for a React application.
  - Provides a pre-configured development environment with all the necessary tools and configurations.

- **Command:**

  - `npx create-react-app <project-name>` (e.g., `npx create-react-app my-app`)
  - `npx create-react-app <project-name>@latest` (to use the latest version of Create React App)

- **Project Structure:**

  - Create React App generates a well-defined project structure with folders for components, styles, and more.

- **Development Server:**

  - `npm start` command starts the development server.
  - The application runs on `http://localhost:3000` by default.
  - Live reloading: Changes made to the code are automatically reflected in the browser.

- **VS Code Integration:**
  - Use VS Code's integrated terminal for easier project navigation and command execution.

**Code Example (Simplified)**

```javascript
// src/App.js
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>React Tutorial</h1>;
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
```

**Key Points:**

- Create React App simplifies the initial setup of a React project.
- It provides a robust development environment with features like hot reloading.
- Understanding the project structure and using the development server are crucial for efficient React development.

**npx: A Package Runner**

- **What it is:**

  - `npx` is a command-line tool that comes bundled with npm (Node Package Manager) versions 5.2 and above.
  - It allows you to execute packages from the npm registry without installing them globally.

- **Key Features:**

  - **Temporary Execution:**

    - When you use `npx`, the package is downloaded and executed temporarily.
    - It's not installed in your global or local project dependencies.
    - This prevents conflicts between different projects that might use the same package with different versions.

  - **Convenience:**
    - Avoids the need to install packages globally, which can clutter your system.
    - Simplifies the process of trying out or using one-off commands from npm packages.

- **Example: Creating a React App**

  - The most common use case of `npx` in React development is to create a new project using `create-react-app`:

    ```bash
    npx create-react-app my-app
    ```

    This command:

    - 1. Downloads the `create-react-app` package.
    - 2. Executes it to create a new React project named "my-app" with the necessary files and dependencies.
    - 3. Once the project is created, the `create-react-app` package is removed.

- **Other Use Cases:**

  - Running scripts from packages:

    - For example, using a code formatter like `prettier` or a linter like `eslint`.

  - Trying out tools or utilities without installing them globally.

## React Folder Structure

- node_modules
  Contains all dependencies required by the app. Main dependencies also listed in package.json

- public
  Contains static assets including index.html (page template)
  - index.html
    - title
    - fonts
    - css
    - favicon
    - id="root" - our entire app
- src
  In simplest form it's the brain of our app. This is where we will do all of our work. src/index.js is the JavaScript entry point.
- .gitignore
  Specifies which files source control (Git) should ignore

- package.json
  Every Node.js project has a package.json and it contains info about our project, for example list of dependencies and scripts

- package-lock.json
  A snapshot of the entire dependency tree

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
