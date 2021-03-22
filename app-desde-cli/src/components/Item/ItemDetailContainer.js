import ItemDetail from './ItemDetail';

getItems(() => {
    new Promise((ok, notOK) => {
      setTimeout(() => {
        ok(['Fiat Cronos', 'VW Gol Trend', 'Peugeot 308', 'Toyota Corolla'])
      }, 2000);
    }).then((resultado) => setItems(resultado));
  });

  const ItemDetailContainer = () => ;

  return (
    <>
      <ItemDetail />
    </>
  );
  export default ItemDetailContainer;