import React, { useState } from 'react';
import ItemCount from './ItemCount';

const ListContainer = ()  => {

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
    <ItemCount initial = {1} stock={stock} onAdd={onAdd}/>
  </div>
  )};

export default ListContainer;