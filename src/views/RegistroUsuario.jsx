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
  
  
  const HandleRegistro = (e) => {
    const error = false;
    e.preventDefault()
    if((nombre === "" || edad === "" || direccion === ""
        || correo === "" || contrasena === "" || telefono === "") && (error === false)) {
          alert("Debes ingresar todos los campos obligatorios")
    }
    if((nombre !== "" || edad !== "" || direccion !== ""
        || correo !== "" || contrasena !== "" || telefono !== "") && (error === false)  ) {
        setExitoRegistro(true)}

  
    // Agregar información de nuevo usuario en tabla "usuarios" en la base de datos
    const enviarInfoUsuario = async (nombre, edad, direccion, correo, contrasena, telefono) => {
      try {        
        const requestRegistro = {
          method: 'POST',
          body: JSON.stringify({nombre:nombre,edad:edad,direccion:direccion,correo:correo,contraseña:contrasena,telefono:telefono})
      };        
        const response = await fetch( 'http://localhost:3001/usuario', requestRegistro)
        const message = await response.send("Usuario registrdo con éxito")
          return message
      } catch (err) {
        console.error( `Error: ${err} ` )
      }
      }
      console.log(enviarInfoUsuario)
    };


      
  return (
    <div className='registroEdit'>
      <Form onSubmit={HandleRegistro}>
      <Form.Group className="mb-3">          
          <Form.Control type="hidden"
                        name="id_usuario"
          />
        </Form.Group>

        <Form.Group className="mb-3">          
          <Form.Control type="text"
                        name="nombre"
                        placeholder="Nombre y apellido (*)"
                        onChange={(e) => setNombre(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text"
                        name="edad"
                        placeholder="Edad (*)"
                        onChange={(e) => setEdad(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text"
                        name="direccion"
                        placeholder="Dirección (*)"
                        onChange={(e) => setDireccion(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="email"
                        name="correo"
                        placeholder="Correo electrónico (*)"
                        onChange={(e) => setCorreo(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password"
                        name="contraseña"
                        placeholder="Contraseña (*)" 
                        onChange={(e) => setContrasena(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text"
                        name="telefono"
                        placeholder="Número Celular(*)"
                        onChange={(e) => setTelefono(e.target.value)}/>
        </Form.Group>
        
        <Button variant="primary" type="submit"> Registrarse </Button>

        < RegistroExitosoModal />
        
      <h6> (*) Campos obligatorios </h6> 
      </Form>
    </div>
  )
  };

export default Registro;