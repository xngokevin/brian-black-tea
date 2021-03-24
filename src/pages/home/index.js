import React, { Component } from "react";
import { FullHero, TwoColText } from "../../components";
import heroImg from "./../../assets/images/heroes/banner.png";
import logoImg from "./../../assets/images/bbt-logo.png";
import ThreeColText from "../../components/bbt_text/three-col-text";

import teaLeavesImage from "./../../assets/images/bbt/tea-leaves.jpg";
import threeTeasImage from "./../../assets/images/bbt/three-teas.jpeg";

class Home extends Component {
  componentDidMount() {
    document.title = "Brian Black Tea - Home";
  }

  render() {
    return (
      <div>
        <FullHero heroImg={heroImg} logoImg={logoImg} />
        <ThreeColText
          h1={"About Us"}
          p={
            "Established in 2005 in Taiwan, Brian Black Tea is committed to bringing exceptional black tea tasting experience to the world. By using premium ingredients and artisanal tea brewing craft, we are proud to share these incredible drinks with you, showing you the true beauty of black tea."
          }
          image1={teaLeavesImage}
          image2={threeTeasImage}
        />
        <TwoColText
          h1={"Premium Ingredients"}
          p={
            "By using only the highest quality blend of real loose tea leaves and a specific ratio of filtered and softened water for each tea, we ensure each batch of tea and milk tea beverages will contain the aroma and flavors that will elevate your taste buds to a new level"
          }
          image={teaLeavesImage}
        />
        <TwoColText
          reverse={true}
          h1={"Our Story"}
          p={
            "Our founder, Brian, was born and raised in Taiwan, the home of the original milk tea and various blends of world-famous tea. Growing up, Brian developed a passion for tea and as time passed, he noticed the flavors he was familiar with were nowhere to be found..."
          }
          image={threeTeasImage}
        />

        <div className={"container"} style={{ paddingBottom: 1000 }}>
          Hello World!
        </div>
      </div>
    );
  }
}

export default Home;
