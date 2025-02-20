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
