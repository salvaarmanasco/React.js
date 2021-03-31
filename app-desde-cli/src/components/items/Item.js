import { Card } from 'react-bootstrap';
import DetailContainer from './ItemDetailContainer';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

// item desestructurado ;)
const Item = ({item}) => {return (
    <Router>
        <Card>
            <Card.Body>
                <NavLink to="/item/ThisItem">
                    <Card.Title>{item}</Card.Title>
                    <Card.Img src="" />
                    <DetailContainer item={item} />
                </NavLink>
            </Card.Body>
        </Card>

        <Route path="/item/:id"><Item /></Route>
    </Router>
    );
}

export default Item;