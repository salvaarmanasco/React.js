import React, { useState } from 'react';
import ItemList from './ItemList';
import ItemCount from './ItemCount';

const ListContainer = (props)  => {

  const [stock, setStock] = useState(100);

  const onAdd = (q) => {
    if (q <= stock) {
      alert(`Has agregado exitosamente ${q} elementos al carrito.`);
      setStock(stock - q);
    } else {
      alert('¡Tu demanda supera al stock disponible!');
    };
  };

  return (
  <div id="listcontainer">
    <h3>¡Éste es el contenedor de productos!</h3>
    <ItemList items={props.items}/>
    <ItemCount initial = {1} stock={stock} onAdd={onAdd}/>
  </div>
  )};

export default ListContainer;