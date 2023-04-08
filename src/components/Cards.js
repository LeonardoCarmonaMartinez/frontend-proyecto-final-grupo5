import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const Cards = ({ id, imagen, titulo, precio, idprod}) => {
 
 
  return (   
    <div className="caredit"  >
      <Card className="m-3" style={{ width: "18rem" }} key={id} >
        <Card.Img className="imgcard" variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Text className="text-center fs-2 fw-normal">
            ${precio}
          </Card.Text>
        </Card.Body>
        <Link to={`/infoproducto/${idprod}/`}>Ver más detalles</Link>
      </Card>
      </div>
  );
};

export default Cards;