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
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};

const Image = () => <img src="/images/book-1.jpg" alt="The Let Them Theory" />;

const Title = () => {
  const titleStyle = {
    color: "#617D98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h2 style={titleStyle}>The Let Them Theory: A Life-Changing Tool</h2>;
};
const Author = () => {
  return <h3>Mel Robbins</h3>;
};

root.render(
  <>
    <BookList></BookList>
  </>
);
