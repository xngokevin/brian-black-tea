import React, { Component } from "react";
import { BannerText } from "../../components";

class Blends extends Component {
  componentDidMount() {
    document.title = "Brian Black Tea - Blends";
  }

  render() {
    return (
      <>
        <BannerText text1={"Our"} text2={"Blends"} />
      </>
    );
  }
}

export default Blends;
