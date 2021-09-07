import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import skinburn_logo from "./../../images/skinburn_logo.svg";

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
            <NavLink className="nav-link" to="/skincancer">
              Skin Cancer
            </NavLink>
            <NavLink className="nav-link" to="/prevention">
              Prevention
            </NavLink>
            <NavLink className="nav-link" to="/uv-assist">
              UV Assist
            </NavLink>
            <NavLink className="nav-link" to="/map">
              Map
            </NavLink>
            <NavLink className="nav-link" to="/uvchart">
              UVChart
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
