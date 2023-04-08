import React, { useContext }  from "react";
import MyContext from "../MyContext";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";


const InfoProducto = () => {
  const { products } = useContext(MyContext);
  const { idprod } = useParams();
  console.log(idprod)
  
  
  return (
    <main>
      {products.filter(pro => pro.idproducto === idprod ).map(info =>
      <div className="contenedor m-5" key={info.idproducto} >
        <Container>
          <h3>{info.titulo}</h3>
          <Row>
            <Col>
              <img src={info.imagen} alt="imagen de referencia"/> 
            </Col>
            <Col>              
              <p className="descrip">Descripción:{info.descripcion}</p>              
              <p className="fw-bold fs-2">Precio:${info.precio}</p>
              <p className="fw-bold fs-2">Correo de contacto:{info.correoproducto}</p>
              <p className="fw-bold fs-2">Telefono de contacto{info.telefonoproducto}</p>      
            </Col>
          </Row>
        </Container>
      </div>
      )}
      <Link to={"/galeria/"}><Button>Regresar a Galeria</Button></Link>
    </main>
  );
};

export default InfoProducto;