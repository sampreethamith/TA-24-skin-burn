import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar className="nav-color py-4" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Skin Burn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#skincancer">Skin Cancer</Nav.Link>
            <Nav.Link href="#prevention">Prevention</Nav.Link>
            <Nav.Link href="#treatment">Treatment</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
