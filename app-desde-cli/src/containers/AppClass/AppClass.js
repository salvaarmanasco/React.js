import { Component } from "react";

class AppClass extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] Primero el constructor.')
        this.state = {
            contador: 0,
            nombre: "CuentasLocas",
            animales: ['Loro', 'Lobo', 'Mono', 'Oso'],
            }
            // this.contarClick = this.contarClick.bind(this);
    }

    // Seteo los eventos para el botón del contador
    contarClickMas1(e) {
        e.preventDefault();
        this.setState({ contador: (this.state.contador +1) });
        console.log("Se acaba de sumar 1.");
    }

    contarClickMenos1(e) {
        e.preventDefault();
        this.setState({ contador: (this.state.contador -1) });
        console.log("Se acaba de restar 1.");
    }
// Render es el único método indispensable para llamar a un componente clase.
    render() {
       console.log("[AppClass.js] Componente renderizado");
        return (<div className="App">Componente tipo clase
        <hr/>
        <button onClick={(e) => this.contarClickMas1(e)}>+</button>
        <button onClick={(e) => this.contarClickMenos1(e)}>-</button>
        Acá hay un contador: {this.state.contador}
        <br />
        <br />
        Se llama {this.state.nombre}.
        <br />
        <br />
        Tiene estos animales:
        {this.state.animales.map((x, i) => (
                    <p key={i}>{x}</p>
        ))};
        <br />
        </div>)
    }

    componentDidMount() {
        console.log("[AppClass.js] Componente montado");
    }

    componentWillUnmount() {
        console.log("[AppClass.js] Componente será desmontado");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[AppClass.js] Componente actualizado");
    }
}

export default AppClass;