import React, { useContext } from "react";

import MyContext from "../MyContext";

import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";


const Perfil = () => {
  const { users, idUser } = useContext(MyContext);
  const navigate = useNavigate();
  
  return (
    <div>
      {users
        .filter((user) => user.idusuario === idUser)
        .map((us) => (
          <div className="contenedor m-5" key={us.idusuario}>
            <ListGroup className="list">
              <ListGroup.Item>{us.nombre}</ListGroup.Item>
              <ListGroup.Item>{us.edad}</ListGroup.Item>
              <ListGroup.Item>{us.direccion}</ListGroup.Item>
              <ListGroup.Item>{us.correo}</ListGroup.Item>
              <ListGroup.Item>{us.contrasena}</ListGroup.Item>
              <ListGroup.Item>{us.telefono}</ListGroup.Item>
              
              <Button
                variant   = "primary"
                type      =  "submit"
                onClick   = {() => {navigate("/formulario")}}
              >
                Vender un producto
              </Button>
              
              <Button
                variant   = "primary"
                type      =  "submit"
                onClick   = {() => {navigate("/enventa/"+ idUser)}}
              >
                Mis productos en venta
              </Button>

              <Button
                variant   = "primary"
                type      = "submit"
                onClick   = {() => {navigate("/galeria")}}
              >
                Galeria de productos
              </Button>

            </ListGroup>
          </div>
        ))}
    </div>
  )
};

export default Perfil;
