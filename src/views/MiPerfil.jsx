import React, { useContext } from "react";

import MyContext from "../MyContext";

import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";


const Perfil = () => {
  const { exitoLogin, users, idUser } = useContext(MyContext);

  const navigate = useNavigate();
  
  console.log(users)
  console.log(idUser)

  
  if(exitoLogin === true){
  return (
    <div>
      {users.rows
        .filter((user) => user.rows.idusuario === idUser)
        .map((us) => (
          <div className="contenedor m-5" key={us.rows.idusuario}>
            <ListGroup className="list">
              <ListGroup.Item>{us.rows.nombre}</ListGroup.Item>
              <ListGroup.Item>{us.rows.edad}</ListGroup.Item>
              <ListGroup.Item>{us.rows.direccion}</ListGroup.Item>
              <ListGroup.Item>{us.rows.correo}</ListGroup.Item>
              <ListGroup.Item>{us.rows.contrasena}</ListGroup.Item>
              <ListGroup.Item>{us.rows.telefono}</ListGroup.Item>
              
              <Button
                variant   = "primary"
                type      =  "submit"
                onClick   = {() => {navigate(`/enventa`)}}
              >
                Mis productos en venta
              </Button>

              <Button
                variant   = "primary"
                type      = "submit"
                onClick   = {() => {navigate(`/galeria`)}}
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
