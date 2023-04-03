import React, { useContext } from "react";

import MyContext from "../MyContext";


const Sidebar = () => {
  const { setChangeState, products, setPriceFilter, minPrice, setMinPrice, maxPrice, setMaxPrice } = useContext(MyContext)

  const FalseEstado = () => {
    const valorFalse = false;
    setChangeState(valorFalse)
  };    
  
  const handleSearch = () => {
    const cardsGalery = products.filter(
      product => product.price >= minPrice && product.price <= maxPrice
    );
    setPriceFilter(cardsGalery)
 
    if( (minPrice === 0 && maxPrice === 0) ) {
      alert("Ingresa un rango de precios válido")
    }
    if( minPrice === 0 && maxPrice !== 0 ) {
      FalseEstado()
    }
    if( minPrice !== 0 && maxPrice !== 0 ) {
      FalseEstado()
    }
  };

  return (
    <div className="mt-3">
      <h4>Precio:</h4>
      <div>
        <label htmlFor="min-price">Desde</label>
        <br/>
        <input className="borderEdit"
          id="min-price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value || 0) }/>
      </div>
      <div>
        <label htmlFor="max-price">Hasta </label>
        <br/>
        <input className="borderEdit"
          id="max-price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value || 0)}/>
      </div>
      <button className="mt-3" variant="primary" onClick={() => handleSearch()}>BUSCAR</button>    
    </div>
  );
}


export default Sidebar;