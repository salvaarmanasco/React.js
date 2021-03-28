import CartWidget from './Cartwidget';

function NavBar() {
  return (

    <div id="navcontainer">
        <h1>¡Éste es el menú!</h1>
        <CartWidget />
        <ul id="lista">
            <li id="active"><a href="#inicio" id="current">Inicio</a></li>
            <li><a href="#nosotros">Sobre nosotros</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#FAQs">FAQs</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
        <p>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
    </div>
  );
}

export default NavBar;
