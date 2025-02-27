const Book = (props) => {
  const { image, title, author, number, children } = props;

  return (
    <article className="book">
      <span className="number">{`#${number + 1}`}</span>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

export default Book;
