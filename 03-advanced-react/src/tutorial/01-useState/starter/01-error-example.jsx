const ErrorExample = () => {
  let count = 0;
  const handleClick = () => {
    count++;
    console.log("click button", count);
  };

  return (
    <>
      <h2>useState error example</h2>
      <button className="btn" onClick={handleClick}>
        Increase count
      </button>
      <p>{count}</p>
    </>
  );
};

export default ErrorExample;
