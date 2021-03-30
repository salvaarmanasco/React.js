import { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import Detail from './ItemDetail';

const DetailContainer = ({item}) => {

    const [detail, setDetail] = useState([]);
    const [show, setShow] = useState(false);

    const onDetailClick = (e) => {
            new Promise((ok, notOK) => {
                setTimeout(() => {
                ok({id: 1, img: 'Placeholder para imagen', price: 'Precio: ' + 200, description: 'Ésta es la descripción, por ahora.', stock: 'Stock disponible: ' + 25});
            }, 2000);
        }).then((detail) => {
            setDetail(detail);
            setShow(show);
        });
    }

    return (
    <div>
        <Button onClick={(e) => onDetailClick(e)}>
            Ver más
        </Button>
        <Collapse in={show}>
            <Detail item={detail} />
        </Collapse>
    </div>
    )


};

export default DetailContainer;