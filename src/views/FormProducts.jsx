import React, { useContext, useState }from 'react';

import MyContext from "../MyContext";
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Formulario = () => {

  const { products } = useContext(MyContext);
  const navigate = useNavigate();

  const [ titulo, setTitulo ]                     = useState("");
  const [ imagen, setImagen ]                     = useState("");
  const [ descripcion , setDescripcion ]          = useState("");
  const [ precio , setPrecio ]                    = useState("");
  const [ correoProducto, setCorreoProducto]      = useState("");
  const [ telefonoProducto, setTelefonoProducto]  = useState("");
  const [ er, setEr ]                             = useState(false);

  const HandleAgregarProducto = (e) => {
    e.preventDefault()
    
    if(titulo === "" || imagen === "" || descripcion === ""
        || precio === "" || correoProducto === "" || telefonoProducto === "" ) 
      { setEr(true)}
    if ( er === true) {
        alert("Debes rellenar todos los campos")}
  };

  function agregarProducto(){
    const assignId = products[products.length - 1]
    const newId = assignId.id_producto + 1
    let object = {
                  id_producto:newId,
                  name:nombre,
                  img:imagen,
                  desc:descripcion,
                  price:precio
                 }
                 products.push(object)
  }

  console.log (agregarProducto)

  function iraEnVenta() {

    {navigate(`/enventa`)}
  };

  function total() {

    iraEnVenta()
    agregarProducto()
  }
  
  return (
    <Form className='formulario' onSubmit={HandleAgregarProducto}>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Título de la publicación" onChange={(e) => setTitulo(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="URL"  onChange={(e) => setImagen(e.target.value)}/>
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
      
      <Button variant="primary" type="submit" onClick={() => total()}>
        Publicar
      </Button>
    </Form>
  );
};

export default Formulario;