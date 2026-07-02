import Header from './components/Header';
import Multiple from './components/Multiple';
import User from './components/User';

const App = () => {

  const skills = ['React', 'Node', 'MongoDB', 'Docker'];


  return (
    <div>
      <h1>Hello this is from frontend app </h1>
      <Header name="Imam Hossain " />
      <Multiple name="Imam" age={23} city="Chattogram" />

      <User skills={ skills} />
      
    </div>
  );
};

export default App;
