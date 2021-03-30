import { Card } from 'react-bootstrap';
import DetailContainer from './ItemDetailContainer';

// item desestructurado ;)
const Item = ({item}) => {return (
    <Card>
        <Card.Body>
            <Card.Title>{item}</Card.Title>
            <Card.Img src="" />
            <DetailContainer item={item} />
        </Card.Body>
    </Card>
    );
}

export default Item;