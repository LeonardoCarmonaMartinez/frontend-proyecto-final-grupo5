import React, { useContext } from "react";

import MyContext from "../MyContext";

import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";


const Perfil = () => {
  const { exitoLogin, users, idUser } = useContext(MyContext);

  const navigate = useNavigate();
  
   console.log("linea16", users)
  // console.log(idUser)

  
  if(exitoLogin === true){

  //  const get= users.filter((user) => user.idusuario === idUser)
  //       // get.map((us) => ())
  //                   console.log(get)
     
  // const usuariosFiltrados = users.filter((usuario) => {
  //     const resultFindId= idUser.find((valor) => valor.id);
      
  //       return resultFindId

  //     })
  //     console.log(usuariosFiltrados)

  return (
    <div>
      {users.rows
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
