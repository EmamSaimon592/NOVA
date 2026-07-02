// Pass function with click
import Button from './components/Button';

const App = () => {
  
  function showName(Name) {
    alert(Name);
  }

  return (
    <div>
      <h1>Hello this is from frontend app </h1>

      <Button showName={showName} />
    </div>
  );
};

export default App;
