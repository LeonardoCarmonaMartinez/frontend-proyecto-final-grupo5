import React, { useContext } from "react";

import MyContext from "../MyContext";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Row, Col } from "react-bootstrap";


const Perfil = () => {
  const { exitoLogin, users, setUsers } = useContext(MyContext);
  const { idusuario } = useParams();
  const navigate = useNavigate();

  const token = localStorage.getItem("token")

  const obtenerUsuario = async () => {
    try {
      const response = await fetch( `https://proyectofinalgrupo5.pwieschollek.repl.co/perfil/${idusuario}` ,
      console.log("holaS"),
      {
        method        : 'GET',
        Authorization : `Bearer ${token}`
      });
      const {dataUsuarios} = await response.json()
      console.log(dataUsuarios)
      setUsers(dataUsuarios)
    } catch (err) {
      console.error( `Error: ${err} ` )
    }
  };
 
  
  
  if(exitoLogin === true){
  return (
    <div>
      {users
        .filter((user) => user.idusuario === idusuario)
        .map((us) => (
          <div className="contenedor m-5" key={us.idusuario}>
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
                  navigate(`/enventa`);
                }}
              >
                Mis productos en venta
              </Button>

              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  navigate(`/galeria`);
                }}
              >
                Galeria de productos
              </Button>

            </ListGroup>
          </div>
        ))}
    </div>
  );}
};

export default Perfil;
