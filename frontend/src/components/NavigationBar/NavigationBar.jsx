import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import skinburn_logo from "./../../images/skinsafe_logo.png";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar className="nav-color" variant="light" expand="lg" collapseOnSelect>
      <Container>
        <Link className="navbar-brand" to="/">
          <img className="web-logo" src={skinburn_logo} alt="Skin Burn" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            <NavDropdown title="Information" id="basic-nav-dropdown">
              <LinkContainer to="/information/quiz">
                <NavDropdown.Item>Quiz</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/skincancer">
                <NavDropdown.Item>Skin Cancer</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/information/ultraviolet">
                <NavDropdown.Item>UV Index</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/information/sunscreen">
                <NavDropdown.Item>Sunscreen</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Prevention" id="basic-nav-dropdown">
              <LinkContainer to="/prevention/map">
                <NavDropdown.Item>Current UV Map</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/prevention/goingOut">
                <NavDropdown.Item>Going Out</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/prevention/selfExam">
                <NavDropdown.Item>Self Exam</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
