import Hamburger from "../icons/hamburger";
import { NavLink, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";
import React from "react";

function FixedNavDrawer(props) {
  const location = useLocation();

  return (
    <div
      className={`c-fixed-nav-drawer ${props.isNavDrawerOpen ? "open" : ""}`}
    >
      <div className={"header-close"}>
        <div className={"d-flex justify-content-end"}>
          <Hamburger open={true} onClick={props.toggleNavDrawer} />
        </div>
      </div>
      <div className={"nav-container"}>
        <NavLink
          className={"nav-link"}
          to={"/"}
          exact
          onClick={props.toggleNavDrawer}
        >
          Home
        </NavLink>
        <NavLink
          className={"nav-link"}
          to={"/our-story"}
          onClick={props.toggleNavDrawer}
        >
          Our Story
        </NavLink>
        <div className="nav-item dropdown">
          <a
            className={`nav-link ${
              location.pathname.indexOf("menu") !== -1 ? "active" : ""
            }`}
            data-toggle={"dropdown"}
          >
            Menu
          </a>
          <ul
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton"
            style={{
              display: location.pathname.indexOf("menu") !== -1 ? "block" : "",
            }}
          >
            <li>
              <NavLink
                className={"dropdown-item"}
                to={"/menu"}
                exact={true}
                onClick={props.toggleNavDrawer}
              >
                Our Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                className={"dropdown-item"}
                to={"/menu/our-blends"}
                onClick={props.toggleNavDrawer}
              >
                Our Blends
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          className={"nav-link"}
          to={"/locations"}
          onClick={props.toggleNavDrawer}
        >
          Locations
        </NavLink>
        <NavLink
          className={"nav-link"}
          to={"/our-presses"}
          onClick={props.toggleNavDrawer}
        >
          Press
        </NavLink>
      </div>
    </div>
  );
}

export default FixedNavDrawer;
