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
      <EventExample></EventExample>
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
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const EventExample = () => {
  const handleClick = () => {
    alert("form handling");
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Search</h2>
        <input
          type="text"
          onChange={(e) => {
            console.log("input name", e.target.name);
            console.log("input value", e.target.value);
          }}
          name="search"
        />
        <button onClick={handleClick}>Search</button>
      </form>
    </section>
  );
};

root.render(
  <>
    <BookList></BookList>
  </>
);
