import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
  // const { id_us } = useParams();
  const navigate = useNavigate();

  const [ correoIngresado, setCorreoIngresado ]         = useState("");
  const [ contrasenaIngresada, setContrasenaIngresada ] = useState("");

 
    const HandleLoginSesion = async (e) => {
    e.preventDefault()
   
    //Endpoint de login 
    const postLogin = async (correoIngresado, contrasenaIngresada) => {
      try {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({correo: correoIngresado,contraseña:contrasenaIngresada})
      };
      const response = await fetch('http://localhost:3001/login', requestOptions)
      const {token} = response.json()
        console.log(token)
        return (token)
      } catch (err) {
      console.error( `Error: ${err} ` )
      }
    }

    const jwt = await postLogin(correoIngresado, contrasenaIngresada)
    console.log(jwt)

    
   if(correoIngresado === "" || contrasenaIngresada === "" ) {
      alert("Debes ingresar tus datos para ingresar")
    }
    if(jwt === "")
    {alert("Datos ingresados inválidos")
    }
    else (navigate(`/perfil`))
  };


    
  return (
    <Form className='login' onSubmit={HandleLoginSesion}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email"
                      name="correo"
                      placeholder="Correo electrónico"
                      onChange ={(e) => setCorreoIngresado(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password"
                      name="contraseña"
                      placeholder="Contraseña"
                      onChange ={(e) => setContrasenaIngresada(e.target.value)}
                      />
        </Form.Group>

      <Button variant="primary" type="submit">
        Iniciar Sesión 
      </Button>     
    </Form>
  );
};

export default Login;