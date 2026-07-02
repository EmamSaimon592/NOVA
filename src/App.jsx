// Pass function with click
import Button from './components/Button';

const App = () => {

  function showMessage() {
   alert("Hello Guys! ")
 }

  return (
    <div>
      <h1>Hello this is from frontend app </h1>
      
      <Button click={showMessage} />
      
    </div>
  );
};

export default App;
