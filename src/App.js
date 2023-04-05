import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import MyContext from './MyContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importación de vistas 
import Home from './views/Home';
import Login from './views/Login';
import Registro from './views/RegistroUsuario';
import Perfil from './views/MiPerfil';
import Formulario from './views/FormProducts';
import Galeria from './views/Galeria';
import InfoProducto from './views/InfoProducto';
import EnVenta from './views/EnVenta';
import NotFound from './views/NotFound';

//importación de componentes
import BarraNavegacion from './components/Navbar';


function App() {

  const [ changeState, setChangeState ]           = useState(true);
  const [ products, setProducts ]                 = useState([]);
  const [ users, setUsers ]                       = useState([]);
  const [ priceFilter, setPriceFilter ]           = useState([]);
  const [ minPrice, setMinPrice ]                 = useState (0);
  const [ maxPrice, setMaxPrice ]                 = useState (0);
  const [ exitoRegistro, setExitoRegistro ]       = useState(false);
  const [ exitoLogin, setExitoLogin ]             = useState(false);
  const [ searchConcept, setSearchConcept ]       = useState("");
  const [ handlerSearching, setHandlerSearching]  = useState([]);
  const [ infoUnificada, setInfoUnificada]        = useState([]);
  const [ filtroUnificada, setFiltroUnificada]    = useState([]);
  const [ idUser, setIdUser]                      = useState([]);
  
  const globalState = { changeState, setChangeState,
                        products, setProducts,
                        users, setUsers,
                        priceFilter, setPriceFilter,
                        minPrice, setMinPrice,
                        maxPrice, setMaxPrice,
                        exitoRegistro, setExitoRegistro,
                        exitoLogin, setExitoLogin,
                        searchConcept, setSearchConcept,
                        handlerSearching, setHandlerSearching,
                        infoUnificada, setInfoUnificada,
                        filtroUnificada, setFiltroUnificada,
                        idUser, setIdUser 
                      };

   
  return (
    <div className="App">
      <MyContext.Provider value={ globalState }>
        < BrowserRouter >
          < BarraNavegacion />
            < Routes>
              < Route path  = "/" element={< Home />} />
              < Route path  = "/login" element={< Login />} />
              < Route path  = "/registro" element={< Registro />} />
              < Route path  = "/perfil/:idusuario" element={< Perfil />} />
              < Route path  = "/formulario" element={< Formulario />} />
              < Route path  = "/galeria" element={< Galeria />} />
              < Route path  = "/infoproducto/:idproducto" element={< InfoProducto />} />
              < Route path  = "/enventa/:idproducto" element={< EnVenta />} />
              < Route path  = "*" element={< NotFound />}/>
            </ Routes >    
        </ BrowserRouter >
      </MyContext.Provider>
    </div>
  );
}


export default App;
