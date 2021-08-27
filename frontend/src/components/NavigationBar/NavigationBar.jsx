import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar
      className="nav-color py-4"
      variant="light"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <Link className="navbar-brand" to="/">
          Skin Burn
          {/* <img className="web-logo" src={logo} alt="website logo" /> */}
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/skincancer">
              Skin Cancer
            </NavLink>
            <NavLink className="nav-link" to="/prevention">
              Prevention
            </NavLink>
            <NavLink className="nav-link" to="/prevention/skin-burn-calculator">
              Skin-Burn Calculator
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
