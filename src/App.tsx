import './App.css';
import Henrique from './components/navbar';


function App() {

  const handleClick = () => {
    console.log('Entrou')
  }

  return (
    <div className="App">

      <Henrique />
      <button onClick={handleClick}>Teste</button>
    </div>
  );
}

export default App;
