import './App.css';
import NavBar from './components/navbar/NavBar';
import ListContainer from './components/items/ItemListContainer';

export default function App() {
  // Saqué el mock async de acá para llevarlo al ItemListContainer, donde corresponde.
  return (
    <div className="App">
      <NavBar />
      <ListContainer />
      <p>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
    </div>
  );
}


