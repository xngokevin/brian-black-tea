import React, { Component } from "react";
import { FullHero } from "../../components";
import heroImg from "./../../assets/images/heroes/banner.png";
import logoImg from "./../../assets/images/bbt-logo.png";
import ThreeColText from "../../components/bbt_text/three-col-text";

class Home extends Component {
  componentDidMount() {
    document.title = "Brian Black Tea - Home";
  }

  render() {
    return (
      <div>
        <FullHero heroImg={heroImg} logoImg={logoImg} />
        <ThreeColText />

        <div className={"container"} style={{ paddingBottom: 1000 }}>
          Hello World!
        </div>
      </div>
    );
  }
}

export default Home;
