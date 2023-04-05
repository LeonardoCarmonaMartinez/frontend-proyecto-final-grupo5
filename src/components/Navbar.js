import React, { useContext } from 'react';

import MyContext from "../MyContext";

import { Link, useNavigate} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const BarraNavegacion = () => {
  const { products, searchConcept, setSearchConcept, setHandlerSearching, setChangeState } = useContext(MyContext);
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  let enlaces;
  const borraToken = localStorage.removeItem("token")
  
    if(token){
      enlaces = <><Link to={`/perfil`}> Mi Perfil </Link><Link to={`/`} onClick={borraToken}> Cerrar Sesión </Link></>
      
    }else{
      enlaces = <><Link to={`/login`}> Inicio de Sesión </Link><Link to={`/registro`}> Registrarse </Link></>
    }

  const handlerClick = () => {
    if(searchConcept !== "") {
      navigate(`/galeria`)
    }
    else {
      alert("¿Qué estas buscando?")
    }

    const handler = products.filter((prod) => {
      return (prod.name.toLowerCase().includes(searchConcept))
    }
    )
      setHandlerSearching(handler)
        
    const valueFalse = false;
      setChangeState(valueFalse)    
  };



  return (
    <div>
    <Navbar className='p-3' bg="dark" expand="lg" variant="dark">
      <Container>
        <Link to="/" className="text-white ms-3 text-decoration-none">
          <Navbar.Brand href="#">CONECTA-DOS</Navbar.Brand>
        </Link>

        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
          
          <>{enlaces}</>
        </Nav>
        
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Busca un producto"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setSearchConcept(e.target.value)}
          />
          <Button variant="outline-success" onClick={handlerClick}>Buscar</Button>
        </Form>
      </Container>
    </Navbar>
    </div>
  );
};

export default BarraNavegacion;