import React, { useContext } from "react";

import MyContext from "../MyContext";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Row, Col } from "react-bootstrap";

const Perfil = () => {
  const { users, exitoLogin } = useContext(MyContext);
  const { id_us } = useParams();
  const navigate = useNavigate();
  console.log(users);

  
  // Ver información de usuarios agregados en tabla "usuarios"
    const getPerfil = async () => {
      try {
        const response = await fetch( 'http://localhost:3001/usuarios' , {method: 'GET'});
        const {Users} = await response.json()
          return {Users}
      } catch (err) {
        console.error( `Error: ${err} ` )
      }
    }
      console.log(getPerfil)

  
  if(exitoLogin === true){
  return (
    <div>
      {users
        .filter((user) => user.id_usuario === id_us)
        .map((us) => (
          <div className="contenedor m-5" key={us.id_usuario}>
            <ListGroup className="list">
              <ListGroup.Item>{us.nombre}</ListGroup.Item>
              <ListGroup.Item>{us.edad}</ListGroup.Item>
              <ListGroup.Item>{us.direccion}</ListGroup.Item>
              <ListGroup.Item>{us.correo}</ListGroup.Item>
              <ListGroup.Item>{us.contrasena}</ListGroup.Item>
              <ListGroup.Item>{us.telefono}</ListGroup.Item>
              <Row>
                <Col>
                  <img src={us.imagen} alt="imagen usuario" />
                </Col>
              </Row>
              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  navigate(`/enventa/${id_us}`);
                }}
              >
                Mis productos en venta
              </Button>

            </ListGroup>
          </div>
        ))}
    </div>
  );}
};

export default Perfil;
