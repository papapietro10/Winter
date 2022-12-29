import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = ()=>{
    return(
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="/QuinesSomos">The Winter Break</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/Montanas">COMO FUNCIONA</Nav.Link>
                    <Nav.Link href="#link">SOBRE NOSOTROS</Nav.Link>
                    <NavDropdown title="DESTINOS" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">CERRO CHAPELCO</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                    LAS LEÑAS
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">CERRO CATEDRAL</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                       CERRO CASTOR
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
    )
 }