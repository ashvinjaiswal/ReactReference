import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const books = [
  {
    img: "/images/book-1.jpg",
    title: "The Let Them Theory: A Life-Changing Tool",
    author: "Mel Robbins",
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://m.media-amazon.com/images/I/81F90H7hnML._SL1500_.jpg",
  },
];

const BookList = () => {
  return (
    <>
      <section className="booklist">
        {books.map((book) => {
          return (
            <Book
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

const Book = (props) => {
  const { image, title, author, children } = props;
  const displayTitle = () => {
    console.log("book title", title);
  };
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
      <button onClick={displayTitle}>Get Book Title</button>
    </article>
  );
};

root.render(
  <>
    <BookList></BookList>
  </>
);
