import React from "react";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import Hamburger from "./../../components/icons/hamburger";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar(props) {
  const location = useLocation();
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
    <div
      className={`l-navbar ${
        showNavbar || location.pathname !== "/" ? "show" : ""
      }`}
    >
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
              <div className="nav-item dropdown">
                <NavLink
                  className={"nav-link"}
                  to={"/menu"}
                  data-toggle={"dropdown"}
                >
                  Menu
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      className={"dropdown-item"}
                      to={"/menu"}
                      exact={true}
                    >
                      Our Menu
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"dropdown-item"}
                      to={"/menu/our-blends"}
                    >
                      Our Blends
                    </NavLink>
                  </li>
                </ul>
              </div>
              <NavLink className={"nav-link"} to={"/locations"}>
                Locations
              </NavLink>
              <NavLink className={"nav-link"} to={"/our-presses"}>
                Press
              </NavLink>
            </Nav>
          </BsNavbar.Collapse>
        </Container>
      </BsNavbar>
    </div>
  );
}

export default Navbar;
