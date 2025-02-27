import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from "./Book";

const root = ReactDOM.createRoot(document.getElementById("root"));

const BookList = () => {
  return (
    <>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book
              id={book.id}
              number={index}
              key={book.title}
              image={book.img}
              title={book.title}
              author={book.author}
            ></Book>
          );
        })}
      </section>
    </>
  );
};

root.render(
  <>
    <BookList></BookList>
  </>
);
