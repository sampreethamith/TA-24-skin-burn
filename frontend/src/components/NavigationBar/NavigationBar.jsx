import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import skinburn_logo from "./../../images/skinburn_logo.svg";

const NavigationBar = () => {
  return (
    <Navbar
      className="nav-color"
      variant="light"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <Link className="navbar-brand" to="/">
          {/* Skin Burn */}
          <img className="web-logo" src={skinburn_logo} alt="Skin Burn" />
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
            <NavLink className="nav-link" to="/skin-burn-calculator">
              Skin-Burn Calculator
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
