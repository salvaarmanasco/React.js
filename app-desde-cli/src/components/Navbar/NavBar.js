import CartWidget from './Cartwidget';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import ListContainer from '../items/ItemListContainer';
import ItemList from '../items/ItemList';

function NavBar() {
  return (

    <div id="navcontainer">
      <Router>
          <NavLink to="/"><h1>Mi Brand!</h1></NavLink>
          <CartWidget />
          <ul id="lista">
              <NavLink to="/category/Productos"> <li>Productos</li> </NavLink>
              <NavLink to="/category/Blog"> <li>Blog</li> </NavLink>
              <NavLink to="/category/Nosotros"> <li>Nosotros</li> </NavLink>
              <NavLink to="/category/FAQs"> <li>Preguntas Frecuentes</li> </NavLink>
              <NavLink to="/category/Contacto"> <li>Contacto</li> </NavLink>

              <Route exact path="/"><ListContainer /></Route>
              <Route path="/category/:id"><ItemList /></Route>
          </ul>
        </Router>
    </div>
  );
}

/*
function Alfa() {

  let { id } = useParams(); // url
  return (
    <div>
      <h1>α</h1>
      Soy Alfa. {id}
    </div>
  );
}*/

export default NavBar;
