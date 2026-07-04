import { useState } from "react";
import Form from "./components/Form";


const App = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  

  return (
    <>
      <h1>React Form from App.jsx file </h1>

      <Form
        name={name}
        setName={setName}
        email={email}
        setEmail ={setEmail}
      />

      <h2>Your Name: {name}</h2>
      <h2>Your Email: {email }</h2>
      
    </>
  );
};

export default App;
