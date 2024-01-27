import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function header() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>SoleSteals</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart">Cart</i>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user">Login</i>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default header;
