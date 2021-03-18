import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ListContainer from './components/itemlistcontainer';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise ((OK, notOK) => {
      setTimeout(() => {
        OK(['Fiat Cronos', 'VW Gol Trend', 'Peugeot 308', 'Toyota Corolla'])
      , 2000;
    })
  .then((resultado) => setItems(resultado));
      }

  };


  return (
    <>
      <NavBar />
      <ListContainer items={items}/>
    </>
  );

}

export default App;
