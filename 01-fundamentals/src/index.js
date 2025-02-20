import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const firstBook = {
  img: "/images/book-1.jpg",
  title: "The Let Them Theory: A Life-Changing Tool",
  author: "Mel Robbins",
};
const secondBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "https://m.media-amazon.com/images/I/81F90H7hnML._SL1500_.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        image={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      ></Book>
      <Book
        image={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      ></Book>
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

root.render(
  <>
    <BookList></BookList>
  </>
);
