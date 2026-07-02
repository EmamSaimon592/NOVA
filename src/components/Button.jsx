
const Button = ({ showName }) => {
  return (
    <div>
      <button onClick={() => showName('Imam')}>Click</button>
    </div>
  );
};

export default Button