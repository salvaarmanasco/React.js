function NavBar() {
  return (

    <div id="navcontainer">
        <h1>Marca</h1>
        <ul id="lista">
            <li id="active"><a href="#inicio" id="current">Inicio</a></li>
            <li><a href="#nosotros">Sobre nosotros</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </div>
  );
}

export default NavBar;
