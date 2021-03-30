import { Row } from 'react-bootstrap';
import Item from './Item';

// Aquí también se desestructuró items.
const ItemList = ({items}) => (
    <>
        <Row>
        <h4> Hola, soy la lista</h4>
        </Row>
        <Row>
        <ul>
         {items.map((x, index) => (
                <Item key={index} item={x} />
            ))}
        </ul>
        </Row>
    </>
);

export default ItemList;