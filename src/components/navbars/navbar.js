import React from "react";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";

function Navbar() {
  return (
    <div className={"c-navbar"}>
      <BsNavbar className={"fixed-top"} expand="lg">
        <Container>
          <BsNavbar.Brand href="/">React-Bootstrap</BsNavbar.Brand>
          <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BsNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="">Our Story</Nav.Link>
              <Nav.Link href="">Menu</Nav.Link>
              <Nav.Link href="">Locations</Nav.Link>
            </Nav>
          </BsNavbar.Collapse>
        </Container>
      </BsNavbar>
    </div>
  );
}

export default Navbar;
