import React from "react";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import Hamburger from "../icons/hamburger";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const [showNavbar, setShowNavbar] = React.useState(false);

  React.useEffect(() => {
    const updateNavbar = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setShowNavbar(true);
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", updateNavbar);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbar);
    };
  });

  return (
    <div className={`c-navbar ${showNavbar ? "show" : ""}`}>
      <BsNavbar className={"fixed-top navbar-dark"} expand="lg">
        <Container>
          <BsNavbar.Brand href="/">
            <img src={props.logoImg} alt={"logo"} />
          </BsNavbar.Brand>
          <Hamburger open={false} onClick={props.toggleNavDrawer} />
          <BsNavbar.Collapse>
            <Nav className="ml-auto">
              <NavLink className={"nav-link"} to={"/"} exact>
                Home
              </NavLink>
              <NavLink className={"nav-link"} to={"/our-story"}>
                Our Story
              </NavLink>
              <NavLink className={"nav-link"} to={"/menu"}>
                Menu
              </NavLink>
              <NavLink className={"nav-link"} to={"/locations"}>
                Locations
              </NavLink>
            </Nav>
          </BsNavbar.Collapse>
        </Container>
      </BsNavbar>
    </div>
  );
}

export default Navbar;
