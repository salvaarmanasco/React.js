import './App.css';
import NavBar from './components/navbar/NavBar';
import ListContainer from './components/items/ItemListContainer';
import { render } from '@testing-library/react';

export default function App() {
  // Saqué el mock async de acá para llevarlo al ItemListContainer, donde corresponde.
  return (
    <div className="App">
      <NavBar />
      <ListContainer />
    </div>
  );
}

