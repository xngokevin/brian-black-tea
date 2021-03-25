import React, { Component } from "react";
import { BannerText, FullHero } from "../../components";
import heroImg from "./../../assets/images/heroes/banner.png";
import logoImg from "./../../assets/images/bbt-logo.png";

class Menu extends Component {
  componentDidMount() {
    document.title = "Brian Black Tea - Menu";
  }

  render() {
    return (
      <>
        <BannerText text1={"Our"} text2={"Menu"} />
      </>
    );
  }
}

export default Menu;
