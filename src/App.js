// import './App.css';
// import NavBar from './components/NabVar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Vehiculos from './components/vehiculos/Vehiculos';
import Celulares from './components/celulares/Celulares';

import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Productos from './components/productos/Productos';
import ProductosListados from './components/productos_listados/ProductosListados';

function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <ItemListContainer greeting={'Bienvenidos'} /> */}

      <BrowserRouter>
        <NavBar />
            <Routes>
                <Route path="/home" element={ <Home /> }  />
                <Route path="/productos" element={ <ProductosListados /> }  />
                <Route path="/productos/:user_id" element={ <Productos /> }  />
                <Route path="/vehiculos" element={ <Vehiculos /> }  />
                <Route path="/celulares" element={ <Celulares /> }  />
            </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
