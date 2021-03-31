import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import ItemCount from './ItemCount';
import ProductData from '../../data/ProductData';

// Se desestructuró items.
const ListContainer = ()  => {

  //Setear lista y stock
  const [items, setItems] = useState([]);
  const [stock, setStock] = useState(100);

  // Cargar catálogo asíncrono.
  // (ok = resolve)
  useEffect(() => {
    new Promise((ok, notOK) => {
      setTimeout(() => {
        ok(ProductData);
      }, 2000);
    }).then((catalogue) => setItems(catalogue));
  }, []);

  // Funcionamiento del cargador del contador al carrito
  const add = (qty) => {
    if (qty <= stock) {
      alert(`Has agregado exitosamente ${qty} elementos al carrito.`);
      setStock(stock - qty);
    } else {
      alert('¡Tu demanda supera al stock disponible!');
    };
  };

  return (
  <div id="listcontainer">
    <h2>Soy el Contenedor!</h2>
    <ItemList items={items}/>
    <ItemCount initial ={1} stock={stock} onAdd={add}/>
  </div>
  )};

export default ListContainer;