import React, { useState } from 'react';

const ItemCount = ({initial = 1, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial);

    //Manejador de botón suma
    const mas1 = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        };
    };
    const mas5 = () => {
        if ((counter + 5) < stock) {
            setCounter(counter + 5);
        };
    };

    //Manejadores de botón resta
    const menos1 = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        };
    };

    const menos5 = () => {
        if (counter > 5) {
            setCounter(counter - 5);
        };
    };

    //Manejador de botón reset
    const reset = () => {
        setCounter(1);
    };

    return (
        <div>
            <h2> Contador </h2>
            <h3>Stock: { stock }</h3>
            <div>
            <button onClick={menos5}> -5 </button>
            <button onClick={menos1}> -1 </button>
            <input value={counter} />
            <button onClick={mas1}> +1 </button>
            <button onClick={mas5}> +5 </button>
            <a> - </a>
            <button onClick={reset}> Restablecer </button>
            </div>
            <button onClick={e => onAdd(counter)}> Agregar </button>

        </div>
    )
};

export default ItemCount;