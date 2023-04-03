import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import MyContext from './MyContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react';

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
                      };

  //Consumo de Json
  const endpoint    = "http://localhost:3001/productos";
  // const endpoint2   = "http://localhost:3001/usuario";
  // const endpoint3   = "http://localhost:3001/....";
  // const endpoint4   = "http://localhost:3001/"


  const getProduct = async () => {
    const res = await fetch (endpoint);
    const infoProducts = await res.json();
    
    setProducts(infoProducts)
  };

  useEffect(() => {
    getProduct()
  }, []);

  // const getUsers = async () => {
  //   const res = await fetch (endpoint2);
  //   const infoUsers = await res.json();
    
  //   setUsers(infoUsers)
  // };

  // useEffect(() => {
  //   getUsers()
  // }, []);

  // const getInfoUnificada = async () => {
  //   const res = await fetch (endpoint3);
  //   const infoUnificada = await res.json();
    
  //   setInfoUnificada(infoUnificada)
  // };

  // useEffect(() => {
  //   getInfoUnificada()
  // }, []);

   
  return (
    <div className="App">
      <MyContext.Provider value={ globalState }>
        < BrowserRouter >
          < BarraNavegacion />
            < Routes>
              < Route path  = "/" element={< Home />} />
              < Route path  = "/login" element={< Login />} />
              < Route path  = "/registro" element={< Registro />} />
              < Route path  = "/perfil/:id_us" element={< Perfil />} />
              < Route path  = "/formulario" element={< Formulario />} />
              < Route path  = "/galeria" element={< Galeria />} />
              < Route path  = "/infoproducto/:id_producto" element={< InfoProducto />} />
              < Route path  = "/enventa/:id_us" element={< EnVenta />} />
              < Route path  = "*" element={< NotFound />}/>
            </ Routes >    
        </ BrowserRouter >
      </MyContext.Provider>
    </div>
  );
}


export default App;
