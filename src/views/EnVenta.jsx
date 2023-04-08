import React, { useContext }from 'react';
import MyContext from '../MyContext';
import Card from 'react-bootstrap/Card';
import { Container, Row } from 'react-bootstrap';


const EnVenta = () => {
  const { products, idUser } = useContext(MyContext);
  
  return ( 
    <Container>        
      <Row sm={3} md={3} lg={3} >
        {products.filter((prod) => prod.usuario_id === idUser)
          .map((info) => (
          <Card className="m-3" style={{ width: "18rem" }}  key={info.idproducto} >
            <Card.Img variant="top" src={info.imagen} />
            <Card.Body>
              <Card.Title>{info.titulo}</Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Text className="text-center fs-2 fw-normal">
                ${info.precio}
              </Card.Text>
            </Card.Body>
          </Card>
          ))
        }        
      </Row>       
    </Container>
  )      
};

export default EnVenta;