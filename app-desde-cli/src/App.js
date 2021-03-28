import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ListContainer from './components/items/ItemListContainer';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((ok, notOK) => {
      setTimeout(() => {
        ok(['Fiat Cronos', 'VW Gol Trend', 'Peugeot 308', 'Toyota Corolla']);
      }, 2000);
    }).then((resultado) => setItems(resultado));
  });

  return (
    <div className="App">
      <NavBar />
      <ListContainer items={items} />
    </div>
  );
}

export default App;
