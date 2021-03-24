import React, { Component } from "react";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import "./assets/scss/main.scss";
import { request } from "graphql-request";
import { Home, OurStory, Menu, Locations } from "./pages";
import "jquery";
import "react-bootstrap/dist/react-bootstrap.min";
import { FixedNavDrawer, TopArrow } from "./components";
import { Navbar, GenericFooter } from "./layout";
import logoImg from "./assets/images/bbt-logo.png";

class App extends Component {
  // useEffect(() => {
  //   const fetchPages = async () => {
  //     const { pages } = await request(
  //       "https://api-us-west-2.graphcms.com/v2/ckmhb64bw8qv801z6ge8y1yje/master",
  //       `
  //         {
  //           pages {
  //             id
  //             title
  //             slug
  //           }
  //         }
  //       `
  //     );
  //
  //     console.log(pages);
  //     setPages(pages);
  //   };
  //
  //   fetchPages();
  // }, []);

  state = {
    isNavDrawerOpen: false,
  };

  toggleNavDrawer = () => {
    this.setState({ isNavDrawerOpen: !this.state.isNavDrawerOpen });
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
          <Route exact path="/locations" component={Locations} />
          <GenericFooter />
          <TopArrow onClick={this.scrollToTop} />
        </Router>
      </>
    );
  }
}

export default App;
