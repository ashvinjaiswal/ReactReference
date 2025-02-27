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

**Setting Up Local Images in React's Source Folder**

- **Benefits:**

  - Optimized assets: React optimizes images (and other assets) within the `src` folder during the production build process.
  - Improved performance: Optimized assets lead to faster application loading times.

- **Procedure:**

  1.  **Image Acquisition:**

      - Obtain the desired images.
      - In the example, the instructor downloads book cover images from Amazon.

  2.  **Folder Structure:**

      - Create an `images` folder within the `src` directory.
      - Place the image files within the `images` folder.
      - Note: The image folder must be located within the src folder.

  3.  **Import Images:**

      - In the JavaScript file where you need to use the images (e.g., `books.js`), import each image individually.
      - Use the `import` statement to import the images.
      - Assign a variable name to each imported image.
      - Provide the relative path to the image file, including the file extension.
      - **Code example:**
        ```javascript
        import img1 from "./images/book1.jpg";
        import img2 from "./images/book2.jpg";
        import img3 from "./images/book3.jpg";
        ```

  4.  **Use Imported Images:**
      - Use the imported image variables as the `src` attribute values for `<img>` elements.
      - **Code example:**
        ```javascript
        const books = [
          {
            id: 1,
            title: "Book 1 Title",
            author: "Book 1 Author",
            img: img1,
          },
          // ... other book objects
        ];
        ```

- **Key Considerations:**

  - **Individual Imports:** Each image must be imported separately. This can be tedious for large numbers of images.
  - **Source Folder Placement:** Images must be placed within the `src` folder or a subfolder of `src`.
  - **Optimization:** React optimizes images in the `src` folder during the production build, resulting in improved performance.
  - **Alternatives:** Images in the `public` folder are not optimized. They are simply copied to the build directory.
  - **ES6 Modules:** This process relies heavily on ES6 modules.
  - **Production builds:** The optimization happens when the react application is built for production.
