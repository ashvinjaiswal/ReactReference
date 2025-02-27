import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const books = [
  {
    img: "/images/book-1.jpg",
    title: "The Let Them Theory: A Life-Changing Tool",
    author: "Mel Robbins",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://m.media-amazon.com/images/I/81F90H7hnML._SL1500_.jpg",
    id: 2,
  },
];

const BookList = () => {
  const publisher = "Apress";
  const publisherDisplay = () => {
    console.log(publisher);
  };

  const getBook = (id) => {
    // console.log("test");
    console.log(books.find((book) => book.id === id));
  };

  return (
    <>
      <section className="booklist">
        {books.map((book) => {
          return (
            <Book
              id={book.id}
              key={book.title}
              image={book.img}
              title={book.title}
              author={book.author}
              dislayPublisher={publisherDisplay}
              getBook={getBook}
            ></Book>
          );
        })}
      </section>
    </>
  );
};

const Book = (props) => {
  const { id, image, title, author, dislayPublisher, getBook, children } =
    props;

  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
      <button onClick={dislayPublisher}>Display Publisher</button>
      <button onClick={() => getBook(id)}>Get Book</button>
    </article>
  );
};

root.render(
  <>
    <BookList></BookList>
  </>
);
