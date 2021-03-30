import ItemCount from './ItemCount';
const Detail = ({item}) => {
    return (
    <>
        <p>Éste es (por ahora) el detalle del producto.</p>
        <ul>
            <li>{item.img}</li>
            <li>{item.description}</li>
            <li>{item.price}</li>
            <li>{item.stock}</li>
        </ul>
    </>
    )};

export default Detail;