import React, { useContext }from 'react';

import MyContext from "../MyContext";

import { Container, Row } from 'react-bootstrap';

//Importación de componentes
import Sidebar from '../components/Sidebar';
import Cards from '../components/Cards';



const Galeria = () => {
  const { products,  priceFilter, changeState, searchConcept, handlerSearching} = useContext(MyContext);

  if( changeState === true ) {
    return (
      <div className="galeryEdit">
        <div className="sideGalery">
          <Sidebar />
        </div>
        <Container>
          <Row sm={3} md={3} lg={3}>
            {products.map((product) => (
              <Cards
                key={product.id_producto}
                img={product.img}
                name={product.name}
                price={product.price}
              />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
  if( changeState === false && searchConcept !== "" && handlerSearching !== [] ) {
    return (    
      <div className="galeryEdit">
         <div className="sideGalery">
          <Sidebar />
        </div>
        <Container>
          <Row sm={3} md={3} lg={3}>
            {handlerSearching.map((produ) => (
              <main>
                <Cards
                  key={produ.id_producto}
                  img={produ.img}
                  name={produ.name}
                  price={produ.price}
                />
              </main>
            ))}
          </Row>
        </Container>
      </div>
    );
  } 
  if( changeState === false ) {
    return (
      <div className="galeryEdit">
        <div className="sideGalery">
          <Sidebar />
        </div>
        <Container>
          <Row sm={3} md={3} lg={3}>
            {priceFilter.map((p) => (
              <main>
                <Cards
                  key={p.id_producto}
                  img={p.img}
                  name={p.name}
                  price={p.price}
                />
              </main>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
};

export default Galeria;