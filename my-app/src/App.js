import logo from './logo.svg';
import './App.css';
import NavBar from './Components/navbar';
import ItemListContainer from './Components/item-list-container';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido!..." />
    </div>
  );
}

export default App;
