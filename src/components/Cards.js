import React from "react";

import Card from 'react-bootstrap/Card';

const Cards = ({ id_producto, img, name, price}) => {
 
 
  return (   
    <div className="caredit">
      <Card className="m-3" style={{ width: "18rem" }} key = {id_producto} >
        <Card.Img className="imgcard" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Text className="text-center fs-2 fw-normal">
            ${price}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
  );
};

export default Cards;