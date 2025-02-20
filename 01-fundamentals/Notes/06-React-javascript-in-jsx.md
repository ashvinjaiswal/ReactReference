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

- JSX attributes inside quotes are passed as strings.
- Curly braces let you bring JavaScript logic and variables into your markup.
- They work inside the JSX tag content or immediately after = in attributes.
- {{ and }} is not special syntax: it’s a JavaScript object tucked inside JSX curly braces.
