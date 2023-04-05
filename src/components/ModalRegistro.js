import React, { useContext } from 'react';

import MyContext from '../MyContext';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';


function RegistroExitosoModal() {
  const { exitoRegistro } = useContext(MyContext);

  return (
    <Modal className="modalShow" show={ exitoRegistro }>
      
      <Modal.Header>
        <Modal.Title>Registro Exitoso</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>¡Ya eres parte de nuestra comunidad! <br/> Ahora inicia tu sesión.</p>
      </Modal.Body>

      <Nav.Link href="/login"> 
        <Button variant="primary"> Iniciar sesión </Button>
      </Nav.Link> 
    </Modal>
  );
}

export default RegistroExitosoModal;