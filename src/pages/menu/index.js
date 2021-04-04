import React, { Component } from "react";
import { BannerText } from "../../components";
import { BbtMenu } from "../../layout";
import graphBbtService from "../../services/graph-bbt-service";

class Menu extends Component {
  state = {};

  componentDidMount() {
    document.title = "Brian Black Tea - Menu";

    graphBbtService.getMenuSections().then((menuSections) => {
      this.setState({ menuSections: menuSections });
    });
  }

  render() {
    const { menuSections } = this.state;

    return (
      <>
        <BannerText text1={"Our"} text2={"Menu"} />
        {menuSections && <BbtMenu menuSections={menuSections} />}
      </>
    );
  }
}

export default Menu;
