import React, { Component } from "react";
import { BannerText } from "../../components";
import { Container, Row } from "react-bootstrap";
import { BbtMenu } from "../../layout";

class Menu extends Component {
  componentDidMount() {
    document.title = "Brian Black Tea - Menu";
  }

  render() {
    return (
      <>
        <BannerText text1={"Our"} text2={"Menu"} />
        <BbtMenu />
      </>
    );
  }
}

export default Menu;
