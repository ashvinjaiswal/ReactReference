import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const BookList = () => {
  return (
    <section className="booklist">
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
};

const Book = () => {
  const title = "The Let Them Theory: A Life-Changing Tool";
  const authorName = "Mel Robbins";
  return (
    <article className="book">
      <img src="/images/book-1.jpg" alt="The Let Them Theory" />
      <h2>{title}</h2>
      <h4>{authorName}</h4>
    </article>
  );
};

root.render(
  <>
    <BookList></BookList>
  </>
);
