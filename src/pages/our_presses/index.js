import React, { Component } from "react";
import { BannerText } from "../../components";
import { BbtPresses } from "../../layout";

const presses = [
  {
    title: "5280",
    image: require("./../../assets/images/bbt/recess.png"),
    description:
      "“Brian Black Tea’s Iron Goddess and Assam Have Arrived In Fremont!”",
  },
  {
    title: "bon appetit",
    image: require("./../../assets/images/bbt/recess.png"),
    description:
      "“These black tea drinks have replaced my BobaGuy habit for good.”",
  },
];

class OurPresses extends Component {
  componentDidMount() {
    document.title = "Brian Black Tea - Our Presses";
  }

  render() {
    return (
      <>
        <BannerText text1={"Our"} text2={"Presses"} />
        <BbtPresses presses={presses} />
      </>
    );
  }
}

export default OurPresses;
