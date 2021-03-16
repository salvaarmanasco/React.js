/* import {useState, useEffect} from "react";

const AppFunction = () => {
    const [contador, sumarContador] = useState(0);

    useEffect( () => {
        console.log('Componente montado.');
        return () => {console.log("El componente será desmontado.");}
    });

    console.log("[AppClass.js] Componente renderizado");
        return (
        <div className="App">
        Este es un componente tipo función.
        <hr/>
        <button onClick={() => sumarContador((contador) => contador + 1)}>+</button>
        Acá hay un contador: {contador}
        <br />
        <br />
        Se llama {this.state.nombre}.
        <br />
        <br />
        Tiene estos animales:
        {this.state.animales.map((x, i) => (
                    <p key={i}>{x}</p>
        ))};
        <br />}
        </div>);
};
*/
import { useState } from "react";
import ItemCount from "../../components/ItemCount";

const AppFunction = () => {
    const [stockActual, setearStock] = useState(5);
    const restarStock = (e, nuevoStock) => {
        e.preventDefault();
        setearStock((stockActual) => stockActual - nuevoStock);
    }

    return (
        <div className="AppFunction">
            <ItemCount stock={stockActual} initial={1} onAdd={restarStock}/>
        </div>
    );
};

export default AppFunction;