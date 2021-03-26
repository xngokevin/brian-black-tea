import React, { Component } from "react";
import { BannerText } from "../../components";
import { BbtBlends } from "../../layout";

const blends = [
  {
    title: "Light Black Tea",
    chineseTitle: "輕紅茶",
    image: require("./../../assets/images/menu/assamBT.png").default,
  },
  {
    title: "Light Black Tea",
    chineseTitle: "輕紅茶",
    image: require("./../../assets/images/menu/assamBT.png").default,
  },
  {
    title: "Light Black Tea",
    chineseTitle: "輕紅茶",
    image: require("./../../assets/images/menu/assamBT.png").default,
  },
  {
    title: "Light Black Tea",
    chineseTitle: "輕紅茶",
    image: require("./../../assets/images/menu/assamBT.png").default,
  },
  {
    title: "Light Black Tea",
    chineseTitle: "輕紅茶",
    image: require("./../../assets/images/menu/assamBT.png").default,
  },
  {
    title: "Light Black Tea",
    chineseTitle: "輕紅茶",
    image: require("./../../assets/images/menu/assamBT.png").default,
  },
  {
    title: "Light Black Tea",
    chineseTitle: "輕紅茶",
    image: require("./../../assets/images/menu/assamBT.png").default,
  },
  {
    title: "Light Black Tea",
    chineseTitle: "輕紅茶",
    image: require("./../../assets/images/menu/assamBT.png").default,
  },
  {
    title: "Light Black Tea",
    chineseTitle: "輕紅茶",
    image: require("./../../assets/images/menu/assamBT.png").default,
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
