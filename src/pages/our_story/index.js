import React, { Component } from "react";
import { BannerText, TwoColText } from "../../components";
import heroImg from "./../../assets/images/heroes/banner.png";
import logoImg from "./../../assets/images/bbt-logo.png";
import teaLeavesImage from "../../assets/images/bbt/tea-leaves.jpg";
import threeTeasImage from "../../assets/images/bbt/three-teas.jpeg";

class OurStory extends Component {
  componentDidMount() {
    document.title = "Brian Black Tea - Our Story";
  }

  render() {
    return (
      <>
        <BannerText />
        <TwoColText
          h1={"Brand Origin"}
          p={
            "Our founder, Brian, was born and raised in Taiwan, the home of the original milk tea and various blends of world-famous tea. Growing up, Brian developed a passion for tea and as time passed, he noticed the flavors he was familiar with were nowhere to be found. Even after countless visits to renowned tea shops throughout Taiwan, he still could not find the taste from his childhood. Determined to bring back the nostalgic flavor that he grew up loving, Brian set out to take matters into his own hands and founded the brand that we have come to know and love, Brian Black Tea."
          }
          image={teaLeavesImage}
          light={true}
          reverse={true}
        />
        <TwoColText
          h1={"Brand Vision"}
          p={`
            <div><b>Authenticity.</b><div>
            We meticulously select only the most premium loose tea leaves from around the world to create unique blends free of artificial flavors and use ancient tea brewing techniques to bring the best sip to our customers.
            <br><br>
            <div><b>Sustainability.</b><div>
            We strive to treat the environment with care by implementing sustainable methods in serving our customers and communities.
          `}
          image={threeTeasImage}
          light={true}
        />
      </>
    );
  }
}

export default OurStory;
