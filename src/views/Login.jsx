import React, { useContext, useState, } from 'react';
import MyContext from '../MyContext';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  const { setUsers, setIdUser, setProducts } = useContext(MyContext);
  const navigate = useNavigate();
  const [ correoIngresado, setCorreoIngresado ]         = useState("");
  const [ contrasenaIngresada, setContrasenaIngresada ] = useState("");
 
  const HandleLoginSesion = async (e) => {
    e.preventDefault()
    if(correoIngresado === "" || contrasenaIngresada === "" ) {
        alert("Debes ingresar tus datos para continuar")
    };
       
    try {
      const requestOptions = {
        method  : 'POST',
        headers : { 'Content-Type': 'application/json' },
        body    : JSON.stringify({"correo": correoIngresado, "contrasena":contrasenaIngresada})
      };      
      const response = await fetch('http://localhost:3001/login', requestOptions);
      if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)};
      const data  = await response.json(); 
      var getToken = data.token;
      var getidUsuario  = data.idUsuario;
      localStorage.setItem('token', getToken);
    } catch (err) {console.error(`Error: ${err} `)};

    try {
      const response = await fetch("http://localhost:3001/perfil", {method: 'GET'});
      const dataUsuarios = await response.json();
      setUsers(dataUsuarios);
      setIdUser(getidUsuario);        
      navigate("/");
    } catch (err) {console.error(`Error: ${err} `)};
    
    try{  
      const response = await fetch("http://localhost:3001/productos", {method: 'GET'});
      const dataProductos = await response.json();
      setProducts(dataProductos)
    } catch (err) {console.error(`Error: ${err} `)};
  };
    
  return (
    <Form className='login' onSubmit={HandleLoginSesion}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type        = "email"
                      name        = "correo"
                      placeholder = "Correo electrónico"
                      onChange    = {(e) => setCorreoIngresado(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type        = "password"
                      name        = "contrasena"
                      placeholder = "Contrasena"
                      onChange    = {(e) => setContrasenaIngresada(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">Iniciar Sesión</Button>     
    </Form>
  );
};

export default Login;