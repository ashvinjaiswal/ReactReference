export default function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Welcome to React</h2>;
const Message = () => {
  return <p>React Tutorial</p>;
};
