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
