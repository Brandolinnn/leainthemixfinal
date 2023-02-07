
import './App.css';


import Cursos from "./components/productos/cursos"
import Productos from "./components/productos/Productos"



import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contenedor from './components/productos/Contenedor';
import Navbarr from './components/interfaz/Navbarr';




function App() {
  return (
    < >

      <BrowserRouter >
      <Navbarr />
      

      <Routes >



          <Route path='/' element={ <Contenedor/>} />
          <Route path='/productos' element={< Productos/>} />
          <Route path='/cursos' element={< Cursos />} />

      </Routes>
              


      </BrowserRouter>

    </>
  );
}

export default App;

