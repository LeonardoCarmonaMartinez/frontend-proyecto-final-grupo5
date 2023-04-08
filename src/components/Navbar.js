import React, { useContext } from 'react';
import MyContext from "../MyContext";
import { Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const BarraNavegacion = () => {
  const {products, searchConcept, setSearchConcept, setHandlerSearching, idUser} = useContext(MyContext);
  const navigate = useNavigate()
  const tokenNav = localStorage.getItem("token")

  const clearLocalStorage = () => {
    if(tokenNav !== "") {localStorage.clear("token")}    
  };  

  const handlerClick = () => {
    if(searchConcept === "" ) {
      alert("¿Qué estas buscando?")    
    } else if (searchConcept !== "" && tokenNav === null) {
      alert("Regístrate e Inicia Sesión antes de continuar")
      navigate("/")
    } else {
      navigate("/galeria/");
    }

    const handler = products.filter((prod) => {
      return (prod.titulo.toLowerCase().includes(searchConcept))
    })
    setHandlerSearching(handler);

  };

  return (
    <div>
    <Navbar className='p-3' bg="dark" expand="lg" variant="dark">
      <Container>
        <Link to={"/"}><Nav className="text-white ms-3 text-decoration-none">CONECTA-DOS</Nav></Link>
        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
          {tokenNav !== null ? <div><Link to={"/perfil/"+ idUser}> Mi Perfil </Link><Link to={"/"} onClick={clearLocalStorage}> Cerrar Sesión </Link><Link to={"/galeria/"}>Galería de productos </Link></div>
                            : <div><Link to={"/login/"}> Inicio de Sesión </Link><Link to={"/registro/"}> Registrarse </Link></div>
          }
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