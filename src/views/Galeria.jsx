import React, { useContext }from 'react';
import MyContext from "../MyContext";
import { Container, Row } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Cards from '../components/Cards';


const Galeria = () => {
  const {products, handlerSearching, priceFilter} = useContext(MyContext);
  console.log(priceFilter)
  console.log(handlerSearching)


  return (
    <div className="galeryEdit">
      <div className="sideGalery">
        <Sidebar />
      </div>
      <Container>
        <Row sm={3} md={3} lg={3}>
          {products.map((producto) => (
            <Cards
              key={producto.idproducto}
              img={producto.imagen}
              name={producto.titulo}
              price={producto.precio}
            />
          ))}
        </Row>
      </Container>
    </div>
  )
}
 
export default Galeria;