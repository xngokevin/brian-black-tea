import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/scss/main.scss";
import { request } from "graphql-request";
import {
  Home,
  OurStory,
  Menu,
  Locations,
  OurBlends,
  OurPresses,
} from "./pages";
import "jquery";
import "react-bootstrap/dist/react-bootstrap.min";
import { FixedNavDrawer, ScrollToTop, TopArrow } from "./components";
import { Navbar, GenericFooter } from "./layout";
import logoImg from "./assets/images/bbt-logo.png";

class App extends Component {
  state = {
    isNavDrawerOpen: false,
  };

  toggleNavDrawer = () => {
    this.setState({ isNavDrawerOpen: !this.state.isNavDrawerOpen }, () => {
      if (this.state.isNavDrawerOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "scroll";
      }
    });
  };

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    let { isNavDrawerOpen } = this.state;
    return (
      <>
        <Router>
          <Navbar
            logoImg={logoImg}
            isNavDrawerOpen={isNavDrawerOpen}
            toggleNavDrawer={this.toggleNavDrawer}
          />
          <FixedNavDrawer
            isNavDrawerOpen={isNavDrawerOpen}
            toggleNavDrawer={this.toggleNavDrawer}
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/our-story" component={OurStory} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/menu/our-blends" component={OurBlends} />
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/our-presses" component={OurPresses} />
          <GenericFooter />
          <TopArrow onClick={this.scrollToTop} />
          <ScrollToTop />
        </Router>
      </>
    );
  }
}

export default App;
