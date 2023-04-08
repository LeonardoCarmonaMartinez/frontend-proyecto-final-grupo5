import React, { useContext, useState } from 'react';

import MyContext from '../MyContext';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//Importacion de componentes
import RegistroExitosoModal from '../components/ModalRegistro';

const Registro = () => {
  const { setExitoRegistro } = useContext(MyContext);
  
  const [ nombre, setNombre ]         = useState("");
  const [ edad, setEdad ]             = useState("");
  const [ direccion, setDireccion ]   = useState("");
  const [ correo, setCorreo ]         = useState("");
  const [ contrasena, setContrasena ] = useState("");
  const [ telefono, setTelefono ]     = useState("");
  
  
  const HandleRegistro = async (e) => {
    e.preventDefault()

    if(nombre === "" || edad === "" || direccion === "" || correo === "" || contrasena === "" || telefono === "") {
        alert("Debes ingresar todos los campos obligatorios")
    } else if (nombre !== "" && edad !== "" && direccion !== "" && correo !== "" && contrasena !== "" && telefono !== "") {
        try {        
          const requestRegistro = {
            method: 'POST',
            headers : { 'Content-Type': 'application/json' },
            body: JSON.stringify({'nombre':nombre,'edad':edad, 'direccion':direccion, 'correo':correo, 'contrasena':contrasena, 'telefono':telefono})
          };               
          await fetch('http://localhost:3001/registro', requestRegistro)
          setExitoRegistro(true)
        } catch (err) {
            console.error( `Error: ${err} ` )
        }       
    }
  };

      
  return (
    <div className='registroEdit'>
      <Form onSubmit={HandleRegistro}>
      <Form.Group className="mb-3">          
          <Form.Control type  = "hidden"
                        name  = "id_usuario"
          />
        </Form.Group>

        <Form.Group className="mb-3">          
          <Form.Control type        = "text"
                        name        = "nombre"
                        placeholder = "Nombre y apellido (*)"
                        onChange    = {(e) => setNombre(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type        = "text"
                        name        = "edad"
                        placeholder = "Edad (*)"
                        onChange    = {(e) => setEdad(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type        = "text"
                        name        = "direccion"
                        placeholder = "Dirección (*)"
                        onChange    = {(e) => setDireccion(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type        = "email"
                        name        = "correo"
                        placeholder = "Correo electrónico (*)"
                        onChange    = {(e) => setCorreo(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type        = "password"
                        name        = "contrasena"
                        placeholder = "Contraseña (*)" 
                        onChange    = {(e) => setContrasena(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type        = "text"
                        name        = "telefono"
                        placeholder = "Número Celular(*)"
                        onChange    = {(e) => setTelefono(e.target.value)}/>
        </Form.Group>
        
        <Button variant="primary" type="submit"> Registrarse </Button>

        < RegistroExitosoModal />
        
      <h6> (*) Campos obligatorios </h6> 
      </Form>
    </div>
  )
  };

export default Registro;