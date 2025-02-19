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

## Handling Images in React`s

- **Three Options:**

  1. **External Images:** Images hosted on a different server, accessed via URL. This is the most common approach when pulling data from APIs or databases.

     ```javascript
     <img src="https://example.com/image.jpg" alt="Description" />
     ```

  2. **Local Images (Public Folder):** Images placed in the `public` folder of your React project. While accessible, this method is less performant because images are not optimized.

     - **Steps:**

       1. Save image (e.g., `book-1.jpg`).
       2. Create an `images` folder (optional, but recommended) inside `public`.
       3. Place the image in the `public/images` folder.
       4. Access the image in your component using a relative path:

          ```javascript
          <img src="./images/book-1.jpg" alt="Book Cover" />
          ```

     - **Note:** Any asset placed in the `public` folder is directly accessible via URL (e.g., `http://localhost:3000/images/book-1.jpg`).

  3. **Local Images (Source Folder):** Images placed in the `src` folder. This is the recommended approach for local images because they are optimized during the build process. This method requires ES6 modules (`import`) and will be covered later in the course.

- **Key Considerations:**

  - **Performance:** Images in the `src` folder are optimized, leading to better performance. Avoid using the `public` folder for images in production applications.
  - **Public Folder:** The `public` folder is useful for static assets like `favicon.ico`, `index.html`, and sometimes images during development (for learning purposes), but not recommended for production image assets.
  - **Relative Paths:** When using images from the `public` folder, use relative paths starting with `/` (e.g., `/images/my-image.png`).

The best practice for handling images in React, especially for production applications, is to **store them in the `src` folder and import them as modules.** Let's break down why this is the preferred method and how it works:

**Why `src` folder is best:**

1. **Optimization:** Images placed in the `src` folder are processed and optimized during the build process. This typically involves:

   - **Compression:** Reducing file sizes without significant quality loss.
   - **Resizing:** Creating different image sizes for various screen resolutions (responsive images).
   - **Hashing:** Adding unique hashes to filenames to prevent caching issues.
     These optimizations lead to faster loading times and a better user experience.

2. **Module Bundling:** Importing images as modules allows Webpack (or a similar bundler) to:

   - **Track Dependencies:** Webpack knows which components use which images. This is essential for code splitting and lazy loading, which can further improve performance.
   - **Manage Assets:** Webpack can handle image paths and URLs efficiently, especially when deploying your application to different environments.

3. **Code Organization:** Keeping images within the `src` folder alongside your components and other code promotes better organization and maintainability.

**How to use images in `src`:**

1. **Place Images:** Put your image files (e.g., `.jpg`, `.png`, `.svg`, `.gif`) in a relevant folder within `src` (e.g., `src/assets/images` or within the component's directory).

2. **Import the Image:** In your React component, import the image as a module:

   ```javascript
   import myImage from "./assets/images/my-image.png"; // Or relative to the component
   // If the image is in the same folder as the component you can import it like below
   // import myImage from './my-image.png';
   ```

3. **Use the Image:** Use the imported image in your JSX:

   ```javascript
   <img src={myImage} alt="My Image Description" />
   ```

**Example:**

```javascript
// src/components/MyComponent.js
import React from "react";
import myImage from "../assets/images/product.jpg"; // Adjust path as needed

function MyComponent() {
  return (
    <div>
      <img src={myImage} alt="Product Image" />
    </div>
  );
}

export default MyComponent;
```

**Why the `public` folder is _not_ ideal for production images:**

- **No Optimization:** Images in the `public` folder are served directly without any optimization. This can lead to larger file sizes and slower loading times.
- **No Dependency Tracking:** Webpack doesn't know about images in the `public` folder, so it can't optimize them or include them in code splitting.
- **Caching Issues:** Without filename hashing, browsers might cache outdated versions of your images.

**When the `public` folder _might_ be used:**

- **Static Assets:** For truly static files that rarely change, like `favicon.ico`, `robots.txt`, or `index.html`.
- **Development (Sometimes):** For quickly prototyping or testing with images during development. However, it's best to switch to the `src` folder method as soon as possible.

**In summary:** Always prioritize storing and importing images from the `src` folder for production React applications. This approach provides performance benefits, better code organization, and improved maintainability. Use the `public` folder sparingly and only for truly static assets or temporary development needs.

## **CSS in JSX (Inline Styles)**

- **How to Apply:** Use the `style` attribute on the JSX element. The value of this attribute should be a JavaScript object containing CSS properties.

  ```javascript
  <h1 style={{ color: "blue", fontSize: "2rem" }}>Hello</h1>
  ```

- **JavaScript Object:** The CSS properties are defined as keys in a JavaScript object. Values are strings.

- **Camel Case:** CSS properties with hyphens are converted to camel case (e.g., `background-color` becomes `backgroundColor`).

- **Example:**

  ```javascript
  <h4 style={{ color: "#617D98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
    My Heading
  </h4>
  ```

- **Inline Styles Gotcha:** Inline styles have high specificity. CSS rules in external stylesheets might be overridden by inline styles. This is important to remember when working with third-party libraries that use inline styles. You might need to target and override the inline styles specifically.

- **Object Reference:** You can store the style object in a variable and then reference it in the `style` attribute:

  ```javascript
  const headingStyles = {
    color: "#617D98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };

  <h4 style={headingStyles}>My Heading</h4>;
  ```

- **Why Inline Styles Are Generally Avoided:** While convenient for simple styling, inline styles can become difficult to manage for complex styling. External stylesheets or CSS-in-JS libraries are often preferred for larger projects. Inline styles are often a pain to maintain.

- **Key Takeaway:** While inline styles are possible, they're generally not the best approach for large or complex projects due to maintainability issues. External stylesheets or CSS-in-JS solutions are typically preferred. However, understanding inline styles is important because you might encounter them in other people's code or in third-party libraries.

**JavaScript in JSX**

- **Curly Braces `{}`:** Curly braces in JSX allow you to embed JavaScript expressions.

- **Expressions vs. Statements:** Only _expressions_ (code that returns a value) can be used inside curly braces. _Statements_ (code that performs an action but doesn't return a value) are not allowed.

  - **Expression (Works):** `6 + 6`, `title`, `author.toUpperCase()`
  - **Statement (Error):** `let x = 6;`

- **Example:**

  ```javascript
  // In Book.js
  import React from "react";

  function Book(props) {
    // We will use props later
    const title = "The Hitchhiker's Guide to the Galaxy";
    const author = "Douglas Adams";

    return (
      <div>
        <h2>{title}</h2> {/* Embedding the title variable */}
        <h4>{author.toUpperCase()}</h4> {/* Using toUpperCase() */}
        {/* <p>{let x = 6;}</p>  This will cause an error! */}
        <p>{6 + 6}</p> {/* Expression: Evaluates to 12 */}
      </div>
    );
  }

  export default Book;

  // In BookList.js (or wherever you render the component)
  import Book from "./Book";

  function BookList() {
    return (
      <div>
        <Book />
        <Book />
        {/* ... more Book components */}
      </div>
    );
  }
  ```

- **Commenting in JSX:** Use `{/* comment here */}` for comments within JSX. Regular JavaScript comments (`//` or `/* */`) won't work directly inside JSX.

- **Dynamic Content:** Using JavaScript in JSX makes your components more dynamic. You can display data from variables, perform calculations, and control the rendering based on conditions.

- **Key Takeaway:** JSX curly braces provide a bridge between HTML (JSX) and JavaScript, enabling you to create dynamic and interactive user interfaces. Remember the important distinction between expressions and statements.
