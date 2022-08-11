import logo from './logo.svg';
import './App.css';

function App() {
  const persona1={nombre:"Leandro", altura:"1.77"};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola {persona1.nombre} tu altura es {persona1.altura}cm.
        </p>
        <ButtonComponent />
      </header>
    </div>
  );
}
const ButtonComponent = () => {
  return <button>Hola React Js :)</button>
}

export default App;
