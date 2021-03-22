import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ListContainer from './components/ItemListContainer';

function App() {
  /*const [items, setItems] = useState([]);

  //OJO QUE COMENTÉ LA PROMESA
  useEffect(() => {
    new Promise ((OK, notOK) => {
      setTimeout(() => {
        OK(['Fiat Cronos', 'VW Gol Trend', 'Peugeot 308', 'Toyota Corolla'])
      , 2000;
    })
  .then((resultado) => setItems(resultado));
      }

  };
  */


  return (
    <>
      <NavBar />
      <ListContainer />
    </>
  );

}

export default App;
