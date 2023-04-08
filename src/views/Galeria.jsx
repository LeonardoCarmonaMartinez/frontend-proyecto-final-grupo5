import React, { useContext }from 'react';
import MyContext from "../MyContext";
import { Container, Row } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Cards from '../components/Cards';


const Galeria = () => {
  const {products, handlerSearching, priceFilter} = useContext(MyContext);  
 
    return (
      <div className="galeryEdit">
        <div className="sideGalery">
          <Sidebar />
        </div>
        <Container>
          <Row sm={3} md={3} lg={3}>
          {products.map(producto =>
          < Cards id={producto.idproducto} imagen={producto.imagen} titulo={producto.titulo} precio={producto.precio} idprod={producto.idproducto} />)
          }
          </Row>
        </Container>
      </div>
    )
  }
 
export default Galeria;