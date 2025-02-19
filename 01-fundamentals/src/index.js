import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const BookList = () => {
  return (
    <section>
      <Book></Book>
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};

const Image = () => <h2>Image Placehoder</h2>;
const Title = () => <h2>Book Title</h2>;
const Author = () => {
  return <h3>Author</h3>;
};

root.render(
  <>
    <BookList></BookList>
  </>
);
