import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
// import logo from "./../../images/weblogo.png";

const NavigationBar = () => {
  return (
    <Navbar className="nav-color py-4" variant="light" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          Skin Burn
          {/* <img className="web-logo" src={logo} alt="website logo" /> */}
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/skincancer">
              Skin Cancer
            </NavLink>
            <NavLink className="nav-link" to="/prevention">
              Prevention
            </NavLink>
            <NavLink className="nav-link" to="/suncalculator">
              Sun Calculator
            </NavLink>
            <NavLink className="nav-link" to="/uv-assist">
              UV Assist
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
