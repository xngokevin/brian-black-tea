import React, { Component } from "react";
import { FullHero } from "../../components";
import heroImg from "./../../assets/images/heroes/banner.png";
import logoImg from "./../../assets/images/bbt-logo.png";

class OurStory extends Component {
  componentDidMount() {
    document.title = "Brian Black Tea - Our Story";
  }

  render() {
    return (
      <div>
        <FullHero heroImg={heroImg} logoImg={logoImg} />
        <div className={"container"} style={{ paddingBottom: 1000 }}>
          Hello World!
        </div>
      </div>
    );
  }
}

export default OurStory;
