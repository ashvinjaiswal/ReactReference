**ES6 Modules in React**

- **Purpose:**

  - ES6 modules allow you to split your React application's code into multiple files and folders, improving organization and maintainability.
  - They enable you to `import` and `export` code between files.

- **Types of Exports:**

  1.  **Named Exports:**

      - Use the `export` keyword followed by the name of the variable, function, or component.
      - When importing named exports, you must use the same name within curly braces `{}`.
      - You can have multiple named exports per file.
      - **Code Example:**

        ```javascript
        // books.js
        export const books = [
          { id: 1, title: "Book 1" },
          { id: 2, title: "Book 2" },
        ];

        // index.js
        import { books } from "./books";
        ```

  2.  **Default Exports:**

      - Use the `export default` keyword followed by the variable, function, or component.
      - When importing default exports, you can use any name you want.
      - You can only have one default export per file.
      - **Code Example:**

        ```javascript
        // Book.js
        function Book({ title }) {
          return <h2>{title}</h2>;
        }
        export default Book;

        // index.js
        import Book from "./Book";
        ```

- **Key Points:**

  - **Organization:** ES6 modules help to keep your code organized and manageable, especially in larger applications.
  - **Reusability:** You can reuse code from different files by importing it.
  - **Maintainability:** Splitting code into smaller files makes it easier to find and modify specific parts of your application.
  - **`import` Syntax:**
    - Named imports: `import { name } from 'path';`
    - Default imports: `import anyName from 'path';`
  - **File Extensions:** When importing JavaScript files, you typically don't need to include the `.js` extension.
  - **VS Code Auto-Import:** VS Code can often automatically add import statements for you, but it's not always reliable.
  - **Component Naming:** Even if a component is exported with a lowercase name, it must be imported with an uppercase name.

- **Benefits:**

  - Improved code structure and readability.
  - Simplified code maintenance.
  - Enhanced code reusability.
  - Clear seperation of concerns.
