import React, { Component } from "react";
import { BannerText } from "../../components";
import { BbtMenu } from "../../layout";
import graphBbtService from "../../services/graph-bbt-service";

class Menu extends Component {
  state = {};

  componentDidMount() {
    document.title = "Brian Black Tea - Menu";
  }

  render() {
    const { menuSections } = this.props;
    return (
      <>
        <BannerText text1={"Our"} text2={"Menu"} />
        {menuSections.length > 0 && <BbtMenu menuSections={menuSections} />}
      </>
    );
  }
}

export default Menu;
