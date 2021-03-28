import React, { Component } from "react";
import { BannerText } from "../../components";
import { BbtBlends } from "../../layout";

const blends = [
  {
    title: "Light Black Tea",
    chineseTitle: "輕紅茶",
    image: require("./../../assets/images/menu/assamBT.png").default,
    description:
      "Sourced from the high altitudes of Sri Lanka, our black tea leaves produce an elegant aroma that is great for any occasion. With its subtle and charming flavors, it is sure to brighten up anyone's day.",
  },
  {
    title: "Light Black Tea",
    chineseTitle: "輕紅茶",
    image: require("./../../assets/images/menu/assamBT.png").default,
    description:
      "Sourced from the high altitudes of Sri Lanka, our black tea leaves produce an elegant aroma that is great for any occasion. With its subtle and charming flavors, it is sure to brighten up anyone's day.",
  },
  {
    title: "Light Black Tea",
    chineseTitle: "輕紅茶",
    image: require("./../../assets/images/menu/assamBT.png").default,
    description:
      "Sourced from the high altitudes of Sri Lanka, our black tea leaves produce an elegant aroma that is great for any occasion. With its subtle and charming flavors, it is sure to brighten up anyone's day.",
  },
  {
    title: "Light Black Tea",
    chineseTitle: "輕紅茶",
    image: require("./../../assets/images/menu/assamBT.png").default,
    description:
      "Sourced from the high altitudes of Sri Lanka, our black tea leaves produce an elegant aroma that is great for any occasion. With its subtle and charming flavors, it is sure to brighten up anyone's day.",
  },
  {
    title: "Light Black Tea",
    chineseTitle: "輕紅茶",
    image: require("./../../assets/images/menu/assamBT.png").default,
    description:
      "Sourced from the high altitudes of Sri Lanka, our black tea leaves produce an elegant aroma that is great for any occasion. With its subtle and charming flavors, it is sure to brighten up anyone's day.",
  },
  {
    title: "Light Black Tea",
    chineseTitle: "輕紅茶",
    image: require("./../../assets/images/menu/assamBT.png").default,
    description:
      "Sourced from the high altitudes of Sri Lanka, our black tea leaves produce an elegant aroma that is great for any occasion. With its subtle and charming flavors, it is sure to brighten up anyone's day.",
  },
  {
    title: "Light Black Tea",
    chineseTitle: "輕紅茶",
    image: require("./../../assets/images/menu/assamBT.png").default,
    description:
      "Sourced from the high altitudes of Sri Lanka, our black tea leaves produce an elegant aroma that is great for any occasion. With its subtle and charming flavors, it is sure to brighten up anyone's day.",
  },
  {
    title: "Light Black Tea",
    chineseTitle: "輕紅茶",
    image: require("./../../assets/images/menu/assamBT.png").default,
    description:
      "Sourced from the high altitudes of Sri Lanka, our black tea leaves produce an elegant aroma that is great for any occasion. With its subtle and charming flavors, it is sure to brighten up anyone's day.",
  },
  {
    title: "Light Black Tea",
    chineseTitle: "輕紅茶",
    image: require("./../../assets/images/menu/assamBT.png").default,
    description:
      "Sourced from the high altitudes of Sri Lanka, our black tea leaves produce an elegant aroma that is great for any occasion. With its subtle and charming flavors, it is sure to brighten up anyone's day.",
  },
];

class Blends extends Component {
  componentDidMount() {
    document.title = "Brian Black Tea - Blends";
  }

  render() {
    return (
      <>
        <BannerText text1={"Our"} text2={"Blends"} />
        <BbtBlends blends={blends} />
      </>
    );
  }
}

export default Blends;
