
import './App.css';
import Menu from './componets/MenuComponet';
import {Navbar ,NavbarBrand} from 'reactstrap'
function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
