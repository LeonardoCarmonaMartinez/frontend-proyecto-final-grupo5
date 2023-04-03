import React, { useContext } from 'react';

import MyContext from "../MyContext";

import { Link, useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const BarraNavegacion = () => {
  const { products, searchConcept, setSearchConcept, setHandlerSearching, setChangeState } = useContext(MyContext);

  const navigate = useNavigate();

  const otroEstado = () => {
    const valueFalse = false;
    setChangeState(valueFalse)

  };

  const handlerClick = () => {
    if(searchConcept !== "") {
     navigate(`/galeria`)
    }
    const handler = products.filter((prod) => {
      return (prod.name.toLowerCase().includes(searchConcept))
    })
    setHandlerSearching(handler)
    
    otroEstado();    
  };



  return (
    <div>
    <Navbar className='p-3' bg="dark" expand="lg" variant="dark">
      <Container>
        <Link to="/" className="text-white ms-3 text-decoration-none">
          <Navbar.Brand href="#">CONECTA-DOS</Navbar.Brand>
        </Link>

        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          >
            <Nav.Link href="/registro"> Regístrate </Nav.Link>
            <Nav.Link href="/login"> Inicio de Sesión </Nav.Link>
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