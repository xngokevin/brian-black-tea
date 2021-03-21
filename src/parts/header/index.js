import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { request } from "graphql-request";

class Header extends Component {
  state = {
    showNav: false,
  };

  componentDidMount() {}

  toggleNavDropdown = () => {
    this.setState({
      showNav: !this.state.showNav,
    });
  };

  closeNavDropDown = () => {
    this.setState({
      showNav: false,
    });
  };

  render() {
    let { showNav } = this.state;

    return <div className={"container component-header"}></div>;
  }
}

export default Header;
