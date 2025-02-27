**Advanced React Topics Introduction**

- **Topics to be Covered:**
  - React Hooks
  - Conditional Rendering
  - Fetching Data
  - Forms
  - Context API

** Advanced React Project**

- **Project Setup:**

  - Open the "advanced React" folder in your text editor.
  - Open an integrated terminal within the text editor.
  - Install project dependencies:
    - `npm install`
  - Start the development server:
    - `npm run dev`
  - The project will be accessible at `localhost:5173`.

- **Project Contents:**

  - The project is a typical Vite React project with pre-existing assets.
  - A heading 2 with "Advanced React" should be visible in the browser.
  - The project contains a `tutorial.md` file, which will contain all the instructions and information for the following videos.
  - The general `README.md` file contains instructions on how to start the project.

  **Advanced React Project Workflow**

* **Project Structure:**

  - The project is a Vite React application with pre-configured assets.
  - `main.jsx`: Entry point (no StrictMode).
  - `index.css`: Global CSS.
  - `data.js`: Data used in examples.
  - `App.jsx`: Root component.
  - `assets`: Local assets (images, etc.).
  - `public`: Publicly accessible assets (not used in this setup).
  - `node_modules`: Dependencies.
  - `tutorial/`: Contains folders for each topic.
    - Each topic folder has `Starter/` and `Final/` folders.
    - `Starter/`: Contains starting code for each example.
    - `Final/`: Contains completed code for each example.

* **Workflow:**

  - Work will be done in the `Starter/` folders.
  - `Final/` folders are for reference or to see completed features.
  - Import the desired `Starter/` component into `App.jsx` and render it.
  - Use `Final/` components for comparison or to see completed features.
  - The container component is used for basic styling, and can be removed without affecting functionality.

* **Challenges:**

  - Challenges will be presented to apply learned concepts.
  - Some challenges are designed to demonstrate common bugs.
  - The instructor will explain the challenges and show the final result.

* **Example Setup:**

  - Import `Starter` component from the relevant `Starter/` folder.
  - Import `Final` component from the relevant `Final/` folder.
  - Render both components in `App.jsx` if desired.
  - The instructor will begin with examples using numbers and buttons, but move to more complex examples as the course progresses.

```js
import Starter from "./tutorial/1-useState/starter/1-error-example";
import Final from "./tutorial/1-useState/final/1-error-example";
function App() {
  return (
    <div className="container">
      <Starter />
      <Final />
    </div>
  );
}

export default App;
```

- **Key Points:**
  - The `tutorial.md` file contains instructions and information.
  - Use the `Starter/` folders for coding exercises.
  - Use the `Final/` folders for reference.
