import React, { Component } from "react";
import { BannerText } from "../../components";

class Locations extends Component {
  componentDidMount() {
    document.title = "Brian Black Tea - Locations";
  }
  render() {
    return (
      <>
        <BannerText text1={"Our"} text2={"Locations"} />
      </>
    );
  }
}

export default Locations;
