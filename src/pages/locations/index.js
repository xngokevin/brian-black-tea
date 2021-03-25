import React, { Component } from "react";
import { BannerText, FullHero } from "../../components";
import heroImg from "./../../assets/images/heroes/banner.png";
import logoImg from "./../../assets/images/bbt-logo.png";

class Locations extends Component {
  componentDidMount() {
    document.title = "Brian Black Tea - Locations";
  }
  render() {
    return (
      <>
        <BannerText text1={"Our"} text2={"Locations"} />
      </>
    );
  }
}

export default Locations;
