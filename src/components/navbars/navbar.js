import React from "react";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import Hamburger from "../icons/hamburger";

function Navbar(props) {
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  return (
    <div className={"c-navbar"}>
      <BsNavbar className={"fixed-top navbar-dark"} expand="lg">
        <Container>
          <BsNavbar.Brand href="/">
            <img src={props.logoImg} alt={"logo"} />
          </BsNavbar.Brand>
          {/*<BsNavbar.Toggle />*/}
          <Hamburger
            open={navbarCollapse}
            setNavbarCollapse={() => {
              console.log("here");
              setNavbarCollapse(!navbarCollapse);
            }}
          />
          <BsNavbar.Collapse>
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
