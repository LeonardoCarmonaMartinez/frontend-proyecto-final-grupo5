import React, { useState, useContext }from 'react';
import MyContext from '../MyContext';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Formulario = () => {
  const { idUser } = useContext(MyContext);
  const navigate = useNavigate();
  const [ titulo, setTitulo ] = useState("");
  const [ imagen, setImagen ] = useState("");
  const [ descripcion, setDescripcion ] = useState("");
  const [ precio, setPrecio ] = useState("");
  const [ correoProducto, setCorreoProducto] = useState("");
  const [ telefonoProducto, setTelefonoProducto] = useState("");

  const HandleAgregarProducto = async (e) => {
    e.preventDefault();    
    if (titulo === "" || imagen === "" || descripcion === "" || precio === "" || correoProducto === "" || telefonoProducto === "" ) {
        alert("Debes rellenar todos los campos")
    } else {
        try {        
          const requestAgregarProducto = {
            method: 'POST',
            headers : { 'Content-Type': 'application/json' },
            body: JSON.stringify({"idusuario":idUser,"titulo":titulo,"imagen":imagen,"descripcion":descripcion,"precio":precio,"correoProducto":correoProducto,"telefonoProducto":telefonoProducto})  
          };        
          await fetch( 'http://localhost:3001/productos', requestAgregarProducto);
          // navigate("/infoProducto/" //idproducto)
        } catch (err) {
            console.error(`Error: ${err} `)
        }
    }
  };
  
  return (
    <Form className='formulario' onSubmit={HandleAgregarProducto}>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Título de la publicación" onChange={(e) => setTitulo(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="URL imagen"  onChange={(e) => setImagen(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Indique un precio" onChange={(e) => setPrecio(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Descripción" onChange={(e) => setDescripcion(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Correo" onChange={(e) => setCorreoProducto(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Telefono" onChange={(e) => setTelefonoProducto(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Publicar
      </Button>
    </Form>
  );
};

export default Formulario;