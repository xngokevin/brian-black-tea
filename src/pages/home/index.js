import React, { Component } from "react";
import { FullHero } from "../../components";
import heroImg from "./../../assets/images/heroes/banner.png";
import logoImg from "./../../assets/images/bbt-logo.png";

class Home extends Component {
  render() {
    return (
      <div>
        <FullHero heroImg={heroImg} logoImg={logoImg} />
        <div className={"container"}>Hello World!</div>
      </div>
    );
  }
}

export default Home;
