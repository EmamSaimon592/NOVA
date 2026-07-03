import Button from "./components/Button";

const App = () => {
  
  

  return (
    <div>
      <h1>Hello this is from frontend app </h1>

      <Button color="red" />

      <Button color="green" />

      <Button color="blue" />

      <input type="text" onChange={(event)=>alert(event.target.value)} placeholder="Enter user name" />
      
    </div>
  );
};

export default App;
