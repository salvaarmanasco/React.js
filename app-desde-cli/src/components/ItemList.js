import Item from './Item';

const ItemList = (props) =>

    <>
        <h4> Hola, soy la lista</h4>

        <ul>
         {props.items.map((x, index) =>
                <Item key={index} item={x} />
            )}
        </ul>;
    </>

export default ItemList;